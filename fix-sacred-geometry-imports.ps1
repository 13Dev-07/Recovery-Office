# Script to fix incorrect imports of sacred-geometry.ts

# Change to the recovery-office directory
Set-Location -Path "recovery-office"

$root = "src"

# Create a log file to track changes
$logFile = "../sacred-geometry-import-fixes.log"
"Import fixes log - $(Get-Date)" | Out-File $logFile

# Define different directory structures and their correct paths
$directoryPaths = @{
    # Main directories
    "$root/animation" = "../../constants/sacred-geometry"
    "$root/design-system/botanical" = "../../constants/sacred-geometry"
    "$root/design-system/components/layout" = "../../../constants/sacred-geometry"
    "$root/design-system/components/animation" = "../../../constants/sacred-geometry"
    "$root/design-system/components/button" = "../../../constants/sacred-geometry"
    "$root/design-system/components/feedback" = "../../../constants/sacred-geometry"
    "$root/design-system/components/form" = "../../../constants/sacred-geometry"
    "$root/design-system/components/typography" = "../../../constants/sacred-geometry"
    "$root/design-system/components/data-display" = "../../../constants/sacred-geometry"
    "$root/design-system/components/navigation" = "../../../constants/sacred-geometry"
    "$root/design-system/components/booking" = "../../../constants/sacred-geometry"
    "$root/design-system/components/feature-sections" = "../../../constants/sacred-geometry"
    "$root/design-system/components/footer" = "../../../constants/sacred-geometry"
    "$root/design-system/components/botanical" = "../../../constants/sacred-geometry"
    "$root/design-system/tokens" = "../../constants/sacred-geometry"
    "$root/design-system/theme" = "../../constants/sacred-geometry"
    "$root/hooks" = "../constants/sacred-geometry"
    "$root/context" = "../constants/sacred-geometry"
    "$root/examples" = "../constants/sacred-geometry"
    "$root/components" = "../constants/sacred-geometry"
    "$root/utils" = "../constants/sacred-geometry"
    "$root/services" = "../constants/sacred-geometry"
    "$root/types" = "../constants/sacred-geometry"
}

# Special cases for deeper nested directories
$nestedPaths = @{
    "$root/pages/Home" = "../constants/sacred-geometry"
    "$root/pages/About" = "../constants/sacred-geometry"
    "$root/pages/Blog" = "../constants/sacred-geometry"
    "$root/pages/Booking" = "../constants/sacred-geometry"
    "$root/pages/Contact" = "../constants/sacred-geometry"
    "$root/pages/FAQ" = "../constants/sacred-geometry"
    "$root/pages/Services" = "../constants/sacred-geometry"
    "$root/pages/NotFound" = "../constants/sacred-geometry"
    "$root/pages/legal" = "../constants/sacred-geometry"
    
    # Section subdirectories in pages
    "$root/pages/Home/sections" = "../../constants/sacred-geometry"
    "$root/pages/About/sections" = "../../constants/sacred-geometry"
    "$root/pages/Contact/sections" = "../../constants/sacred-geometry"
    "$root/pages/Services/sections" = "../../constants/sacred-geometry"
    
    # Nested component directories
    "$root/design-system/components/layout/Section" = "../../../../constants/sacred-geometry"
    "$root/design-system/components/booking/steps" = "../../../../constants/sacred-geometry"
    "$root/components/booking/steps" = "../../constants/sacred-geometry"
}

# Initialize counters
$totalFiles = 0
$filesFixed = 0
$filesWithErrors = 0

# Regular expression to match different import patterns for sacred-geometry
$importPatterns = @(
    'from\s+["'']([^"'']*?sacred-geometry)["'']', 
    'import\s+{[^}]*}\s+from\s+["'']([^"'']*?sacred-geometry)["'']',
    'import\s+\*\s+as\s+[a-zA-Z0-9_]+\s+from\s+["'']([^"'']*?sacred-geometry)["'']'
)

Write-Host "Starting to fix sacred-geometry imports..." -ForegroundColor Green

# Process each directory path
foreach ($dir in $directoryPaths.Keys) {
    $correctPath = $directoryPaths[$dir]
    
    if (Test-Path $dir) {
        Write-Host "Processing directory: $dir" -ForegroundColor Cyan
        "Processing directory: $dir" | Out-File $logFile -Append
        
        # Get all TypeScript files in the directory
        $files = Get-ChildItem -Path $dir -Filter "*.tsx" -Recurse
        $files += Get-ChildItem -Path $dir -Filter "*.ts" -Recurse
        
        $totalFiles += $files.Count
        
        foreach ($file in $files) {
            $filePath = $file.FullName
            $originalContent = Get-Content -Path $filePath -Raw
            $modified = $false
            $needsCorrection = $false
            
            # Check if file contains sacred-geometry import
            foreach ($pattern in $importPatterns) {
                if ($originalContent -match $pattern) {
                    $needsCorrection = $true
                    break
                }
            }
            
            if ($needsCorrection) {
                try {
                    # Replace all incorrect imports with the correct path
                    $newContent = $originalContent
                    
                    foreach ($pattern in $importPatterns) {
                        if ($newContent -match $pattern) {
                            $currentImportPath = $Matches[1]
                            
                            # If the import path is not already correct
                            if ($currentImportPath -ne $correctPath) {
                                $newContent = $newContent -replace "from\s+[""']$($currentImportPath)[""']", "from '$correctPath'"
                                $modified = $true
                                
                                "Fixed file: $filePath" | Out-File $logFile -Append
                                "  Changed: $currentImportPath -> $correctPath" | Out-File $logFile -Append
                            }
                        }
                    }
                    
                    if ($modified) {
                        # Write the modified content back to the file
                        Set-Content -Path $filePath -Value $newContent
                        $filesFixed++
                        Write-Host "  Fixed: $filePath" -ForegroundColor Green
                    }
                }
                catch {
                    $filesWithErrors++
                    "ERROR in file: $filePath - $_" | Out-File $logFile -Append
                    Write-Host "  Error processing $filePath - $_" -ForegroundColor Red
                }
            }
        }
    }
    else {
        "Directory not found: $dir" | Out-File $logFile -Append
        Write-Host "Directory not found: $dir" -ForegroundColor Yellow
    }
}

# Log summary statistics
$summary = @"
Summary:
Total files scanned: $totalFiles
Files fixed: $filesFixed
Files with errors: $filesWithErrors
"@

$summary | Out-File $logFile -Append
Write-Host $summary -ForegroundColor Cyan

Write-Host "Fix complete. See $logFile for details." -ForegroundColor Green

# Return to original directory
Set-Location -Path ".." 