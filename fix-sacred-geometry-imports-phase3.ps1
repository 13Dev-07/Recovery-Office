# Script to fix remaining sacred-geometry imports - Phase 3
# This script focuses on specific edge cases and special files

# Change to the recovery-office directory
Set-Location -Path "recovery-office"

# Create a log file to track changes
$logFile = "../sacred-geometry-import-fixes-phase3.log"
"Import fixes log (Phase 3) - $(Get-Date)" | Out-File $logFile

# Initialize counters
$totalFiles = 0
$filesFixed = 0
$filesWithErrors = 0

Write-Host "Starting Phase 3 of sacred-geometry import fixes..." -ForegroundColor Green

# Define a more comprehensive list of problematic patterns
$importPatterns = @(
    # Match standard import with incorrect path
    'import\s+{[^}]*}\s+from\s+["''](?!\.\.?/constants/sacred-geometry)([^"'']*?sacred-geometry)["'']',
    
    # Match star imports with incorrect path
    'import\s+\*\s+as\s+[a-zA-Z0-9_]+\s+from\s+["''](?!\.\.?/constants/sacred-geometry)([^"'']*?sacred-geometry)["'']',
    
    # Match type imports with incorrect path
    'import\s+type\s+{[^}]*}\s+from\s+["''](?!\.\.?/constants/sacred-geometry)([^"'']*?sacred-geometry)["'']'
)

# Special case directories that need specific handling
$specialCases = @{
    "src/animation" = "../../constants/sacred-geometry"
    "src/design-system/botanical" = "../../constants/sacred-geometry"
    "src/design-system/components/animation" = "../../../constants/sacred-geometry"
    "src/design-system/components/layout" = "../../../constants/sacred-geometry"
    "src/pages/Home/sections" = "../../../constants/sacred-geometry"
    "src/pages/About/sections" = "../../../constants/sacred-geometry"
    "src/pages/Services/sections" = "../../../constants/sacred-geometry"
    "src/pages/Contact/sections" = "../../../constants/sacred-geometry"
    "src/pages/FAQ/sections" = "../../../constants/sacred-geometry"
    "src/pages/Blog/sections" = "../../../constants/sacred-geometry"
}

# Process special case directories
foreach ($dir in $specialCases.Keys) {
    Write-Host "Processing special case directory: $dir" -ForegroundColor Cyan
    
    if (Test-Path $dir) {
        $files = Get-ChildItem -Path $dir -Include @("*.ts", "*.tsx") -Recurse
        $totalFiles += $files.Count
        
        foreach ($file in $files) {
            $filePath = $file.FullName
            $relativePath = $filePath.Replace("\", "/")
            $correctPath = $specialCases[$dir]
            
            try {
                $content = Get-Content -Path $filePath -Raw
                $modified = $false
                $newContent = $content
                
                # Check for sacred-geometry imports with incorrect paths
                foreach ($pattern in $importPatterns) {
                    if ($content -match $pattern) {
                        # Replace with the correct path based on special case
                        $newContent = $newContent -replace "from\s+[""']([^""']*?sacred-geometry)[""']", "from '$correctPath'"
                        $modified = $true
                    }
                }
                
                # Apply changes if needed
                if ($modified) {
                    Set-Content -Path $filePath -Value $newContent
                    $filesFixed++
                    "Fixed special case file: $relativePath" | Out-File $logFile -Append
                    "  Set import path to: $correctPath" | Out-File $logFile -Append
                    Write-Host "  Fixed: $relativePath" -ForegroundColor Green
                }
            }
            catch {
                $filesWithErrors++
                "ERROR in special case file: $relativePath - $_" | Out-File $logFile -Append
                Write-Host "  Error processing $relativePath - $_" -ForegroundColor Red
            }
        }
    }
    else {
        Write-Host "  Directory not found: $dir" -ForegroundColor Yellow
        "Directory not found: $dir" | Out-File $logFile -Append
    }
}

# Now look for any remaining files with incorrect imports
Write-Host "Scanning for any remaining files with incorrect sacred-geometry imports..." -ForegroundColor Cyan

# Function to determine correct import path based on file path
function Get-ImportDepth {
    param (
        [string]$filePath
    )
    
    # Count directory depth from src
    $relativePath = $filePath.Replace("\", "/").Replace("src/", "")
    $depth = ($relativePath.Split("/") | Where-Object { $_ -ne "" }).Count
    
    # Generate the appropriate number of "../"
    $prefix = ""
    for ($i = 0; $i -lt $depth; $i++) {
        $prefix += "../"
    }
    
    return "${prefix}constants/sacred-geometry"
}

# Find any remaining files with incorrect imports
$allFiles = Get-ChildItem -Path "src" -Include @("*.ts", "*.tsx") -Recurse -File
$totalFiles += $allFiles.Count

foreach ($file in $allFiles) {
    $filePath = $file.FullName
    $relativePath = $filePath.Replace("\", "/")
    
    # Skip files already processed in special cases
    $skipFile = $false
    foreach ($dir in $specialCases.Keys) {
        if ($relativePath -like "$dir*") {
            $skipFile = $true
            break
        }
    }
    
    if ($skipFile) {
        continue
    }
    
    try {
        $content = Get-Content -Path $filePath -Raw
        $needsFix = $false
        
        # Check if the file has an incorrect sacred-geometry import
        foreach ($pattern in $importPatterns) {
            if ($content -match $pattern) {
                $needsFix = $true
                break
            }
        }
        
        if ($needsFix) {
            $correctPath = Get-ImportDepth -filePath $relativePath
            $newContent = $content -replace "from\s+[""']([^""']*?sacred-geometry)[""']", "from '$correctPath'"
            
            # Write the corrected content back
            Set-Content -Path $filePath -Value $newContent
            $filesFixed++
            "Fixed remaining file: $relativePath" | Out-File $logFile -Append
            "  Set import path to: $correctPath" | Out-File $logFile -Append
            Write-Host "  Fixed: $relativePath" -ForegroundColor Green
        }
    }
    catch {
        $filesWithErrors++
        "ERROR in file: $relativePath - $_" | Out-File $logFile -Append
        Write-Host "  Error processing $relativePath - $_" -ForegroundColor Red
    }
}

# Log summary statistics
$summary = @"
Summary (Phase 3):
Total files scanned: $totalFiles
Files fixed: $filesFixed
Files with errors: $filesWithErrors
"@

$summary | Out-File $logFile -Append
Write-Host $summary -ForegroundColor Cyan

Write-Host "Phase 3 fix complete. See $logFile for details." -ForegroundColor Green

# Return to original directory
Set-Location -Path ".." 