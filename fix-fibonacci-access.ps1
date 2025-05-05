# Script to fix FIBONACCI access errors in the codebase
$root = "recovery-office/src"

# Create a log file to track changes
$logFile = "fibonacci-access-fixes.log"
"FIBONACCI access fixes log - $(Get-Date)" | Out-File $logFile

# List of files with known FIBONACCI access issues from the TypeScript errors
$errorFiles = @(
    "$root/design-system/tokens/breakpoints.ts",
    "$root/design-system/components/data-display/List.tsx",
    "$root/design-system/components/feedback/Badge.tsx",
    "$root/design-system/components/navigation/StickyNavigation.tsx",
    "$root/design-system/components/button/Button.tsx",
    "$root/design-system/botanical/LeafPattern.tsx",
    "$root/hooks/useAnimationSequence.ts",
    "$root/animation/animationUtils.ts",
    "$root/utils/animation.ts",
    "$root/pages/Services/sections/ServicesProcess.tsx"
)

# Function to replace direct FIBONACCI[index] access with getFibonacciByIndex utility
function Fix-FibonacciAccess {
    param (
        [string]$filePath
    )
    
    if (Test-Path $filePath) {
        Write-Host "Processing $filePath for FIBONACCI access fixes..."
        $content = Get-Content $filePath -Raw
        
        # Check if the file already imports the utility function
        $importsFibonacciUtil = $content -match "import.*getFibonacciByIndex.*from.*utils"
        
        # Check if the file uses FIBONACCI array with direct index access
        $directIndexAccess = $content -match "FIBONACCI\[\d+\]"
        
        if ($directIndexAccess -and -not $importsFibonacciUtil) {
            # Add the import for getFibonacciByIndex if needed
            # First check if there are any imports from utils
            $hasUtilsImport = $content -match "import.*from.*utils"
            $utilsPath = "../utils"
            
            # Adjust path based on file location
            if ($filePath -like "$root/design-system/*") {
                $utilsPath = "../../utils"
            }
            if ($filePath -like "$root/design-system/components/*") {
                $utilsPath = "../../../utils"
            }
            if ($filePath -like "$root/pages/*/*") {
                $utilsPath = "../../utils"
            }
            
            if ($hasUtilsImport) {
                # Update existing utils import to include getFibonacciByIndex
                $updatedContent = $content -replace "(import \{)(.*?)(\} from ['\`"]\S*?utils['\`"])", "`$1`$2, getFibonacciByIndex`$3"
                
                # Handle case where there might be duplicates after the replace
                $updatedContent = $updatedContent -replace ", getFibonacciByIndex, getFibonacciByIndex", ", getFibonacciByIndex"
            } else {
                # Add a new import
                $updatedContent = $content -replace "(import.*from.*;)(\r?\n)", "`$1`$2import { getFibonacciByIndex } from '$utilsPath';`$2"
            }
            
            # Replace direct FIBONACCI[index] access with getFibonacciByIndex(index)
            $updatedContent = $updatedContent -replace "FIBONACCI\[(\d+)\]", "getFibonacciByIndex(`$1)"
            
            # Write changes if content has been modified
            if ($updatedContent -ne $content) {
                Set-Content -Path $filePath -Value $updatedContent
                $message = "Fixed FIBONACCI access in $filePath"
                Write-Host "  - $message"
                $message | Out-File $logFile -Append
                return $true
            } else {
                $message = "No FIBONACCI access issues to fix in $filePath"
                Write-Host "  - $message"
                return $false
            }
        } else {
            if ($importsFibonacciUtil) {
                $message = "File already uses getFibonacciByIndex: $filePath"
            } else {
                $message = "No direct FIBONACCI index access found in $filePath"
            }
            Write-Host "  - $message"
            return $false
        }
    } else {
        $message = "File not found: $filePath"
        Write-Host "  - $message"
        $message | Out-File $logFile -Append
        return $false
    }
}

# Process files with known errors
foreach ($file in $errorFiles) {
    Fix-FibonacciAccess -filePath $file
}

# Also scan other potentially affected files
Write-Host "Scanning for other potential FIBONACCI index access issues..."

# List of directories to scan
$dirsToScan = @(
    "$root/animation",
    "$root/design-system/botanical",
    "$root/design-system/components",
    "$root/design-system/tokens",
    "$root/hooks",
    "$root/pages",
    "$root/utils"
)

# Scan each directory
foreach ($dir in $dirsToScan) {
    if (Test-Path $dir) {
        Get-ChildItem -Path $dir -Filter "*.ts*" -Recurse | ForEach-Object {
            # Skip files already processed
            if ($errorFiles -notcontains $_.FullName) {
                Fix-FibonacciAccess -filePath $_.FullName
            }
        }
    }
}

Write-Host "FIBONACCI access fixes completed! See $logFile for details." 