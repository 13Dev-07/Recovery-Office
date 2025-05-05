# Script to fix duplicate imports across the codebase
$root = "recovery-office/src"

# Create a log file to track changes
$logFile = "duplicate-imports-fixes.log"
"Duplicate imports fixes - $(Get-Date)" | Out-File $logFile

# Process files with duplicate getFibonacciByIndex imports
$dirsToCheck = @(
    "$root/animation",
    "$root/design-system/botanical",
    "$root/design-system/components/data-display",
    "$root/design-system/components/animation",
    "$root/design-system/components/booking",
    "$root/design-system/components/botanical",
    "$root/design-system/components/feedback",
    "$root/design-system/components/form",
    "$root/design-system/tokens",
    "$root/pages/Services/sections"
)

foreach ($dir in $dirsToCheck) {
    Get-ChildItem -Path $dir -Filter "*.ts*" -Recurse | ForEach-Object {
        $file = $_.FullName
        Write-Host "Processing file: $file"
        $content = Get-Content $file -Raw
        $modified = $false
        
        # 1. Fix duplicate getFibonacciByIndex imports
        $importFibonacciCount = ([regex]::Matches($content, "import\s*\{\s*getFibonacciByIndex\s*\}")).Count
        if ($importFibonacciCount -gt 1) {
            # Determine correct relative path based on file location
            $relPath = ""
            if ($file -like "*src/design-system/components/*") {
                $relPath = "../../../utils"
            } elseif ($file -like "*src/design-system/*") {
                $relPath = "../../utils"
            } elseif ($file -like "*src/pages/*") {
                if ($file -like "*src/pages/*/sections/*") {
                    $relPath = "../../../utils"
                } else {
                    $relPath = "../../utils"
                }
            } else {
                $relPath = "../utils"
            }
            
            # Remove all getFibonacciByIndex imports
            $tempContent = $content -replace "import\s*\{\s*getFibonacciByIndex\s*\}\s*from\s*'[^']*';", ""
            
            # Add one correct import at the top, after React import if present
            if ($tempContent -match "import\s+React\s+from\s+'react';") {
                $tempContent = $tempContent -replace "(import\s+React\s+from\s+'react';)", "`$1`nimport { getFibonacciByIndex } from '$relPath';"
            } else {
                $tempContent = "import { getFibonacciByIndex } from '$relPath';" + "`n" + $tempContent
            }
            
            if ($content -ne $tempContent) {
                Set-Content -Path $file -Value $tempContent
                $message = "  - Fixed duplicate getFibonacciByIndex imports in $file"
                Write-Host $message
                $message | Out-File $logFile -Append
                $modified = $true
                $content = $tempContent
            }
        }
        
        # 2. Fix duplicate imports for other common modules
        $duplicateImportPatterns = @(
            @{ pattern = "import\s*\{\s*([^}]*PHI[^}]*)\}\s*from\s*'[^']*sacred-geometry[^']*';"; type = "sacred-geometry" },
            @{ pattern = "import\s*styled\s*from\s*'styled-components';"; type = "styled-components" },
            @{ pattern = "import\s*\{\s*([^}]*Box[^}]*)\}\s*from\s*'[^']*layout[^']*';"; type = "layout" },
            @{ pattern = "import\s*\{\s*([^}]*motion[^}]*)\}\s*from\s*'framer-motion';"; type = "framer-motion" }
        )
        
        foreach ($pattern in $duplicateImportPatterns) {
            $importCount = ([regex]::Matches($content, $pattern.pattern)).Count
            if ($importCount -gt 1) {
                # For sacred-geometry, we need to keep imports with different symbols
                if ($pattern.type -eq "sacred-geometry") {
                    # Extract all imported symbols
                    $matches = [regex]::Matches($content, $pattern.pattern)
                    $symbols = @()
                    foreach ($match in $matches) {
                        $importSymbols = $match.Groups[1].Value.Split(',') | ForEach-Object { $_.Trim() }
                        $symbols += $importSymbols
                    }
                    
                    # Get unique symbols
                    $uniqueSymbols = $symbols | Select-Object -Unique
                    
                    # Determine correct path
                    $sacredPath = ""
                    if ($file -like "*src/design-system/components/*") {
                        $sacredPath = "../../../constants/sacred-geometry"
                    } elseif ($file -like "*src/design-system/*") {
                        $sacredPath = "../../constants/sacred-geometry"
                    } elseif ($file -like "*src/pages/*") {
                        if ($file -like "*src/pages/*/sections/*") {
                            $sacredPath = "../../../constants/sacred-geometry"
                        } else {
                            $sacredPath = "../constants/sacred-geometry"
                        }
                    } else {
                        $sacredPath = "../constants/sacred-geometry"
                    }
                    
                    # Remove all sacred-geometry imports
                    $tempContent = $content -replace $pattern.pattern, ""
                    
                    # Add one correct import with all unique symbols
                    $uniqueImport = "import { " + ($uniqueSymbols -join ", ") + " } from '$sacredPath';"
                    
                    if ($tempContent -match "import\s+React\s+from\s+'react';") {
                        $tempContent = $tempContent -replace "(import\s+React\s+from\s+'react';)", "`$1`n$uniqueImport"
                    } else {
                        $tempContent = $uniqueImport + "`n" + $tempContent
                    }
                    
                    if ($content -ne $tempContent) {
                        Set-Content -Path $file -Value $tempContent
                        $message = "  - Fixed duplicate sacred-geometry imports in $file"
                        Write-Host $message
                        $message | Out-File $logFile -Append
                        $modified = $true
                        $content = $tempContent
                    }
                }
                # For other patterns, just keep the first occurrence
                else {
                    $firstMatch = [regex]::Match($content, $pattern.pattern)
                    $remainingContent = $content.Substring($firstMatch.Index + $firstMatch.Length)
                    $tempContent = $content.Substring(0, $firstMatch.Index + $firstMatch.Length) + 
                                  ($remainingContent -replace $pattern.pattern, "")
                    
                    if ($content -ne $tempContent) {
                        Set-Content -Path $file -Value $tempContent
                        $message = "  - Fixed duplicate $($pattern.type) imports in $file"
                        Write-Host $message
                        $message | Out-File $logFile -Append
                        $modified = $true
                        $content = $tempContent
                    }
                }
            }
        }
    }
}

Write-Host "Duplicate imports fixes completed! See $logFile for details." 