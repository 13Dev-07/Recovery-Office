# Script to fix any remaining incorrect imports of sacred-geometry.ts (Phase 2)

# Change to the recovery-office directory
Set-Location -Path "recovery-office"

$root = "src"

# Create a log file to track changes
$logFile = "../sacred-geometry-import-fixes-phase2.log"
"Import fixes log (Phase 2) - $(Get-Date)" | Out-File $logFile

# Define the correct import path for files in the main src directory
$mainSrcPath = "./constants/sacred-geometry"

# Initialize counters
$totalFiles = 0
$filesFixed = 0
$filesWithErrors = 0

Write-Host "Starting Phase 2 of sacred-geometry import fixes..." -ForegroundColor Green

# Function to determine the correct relative path based on file location
function Get-CorrectPath {
    param (
        [string]$filePath
    )
    
    # Count the number of subdirectories from src
    $relativePath = $filePath.Substring($root.Length)
    $depth = ($relativePath.Split("/") | Where-Object { $_ -ne "" }).Count
    
    # Generate the correct number of "../" based on depth
    $path = ""
    for ($i = 0; $i -lt $depth; $i++) {
        $path += "../"
    }
    
    return "${path}constants/sacred-geometry"
}

# Process all TypeScript files in the src directory
Write-Host "Scanning all TypeScript files..." -ForegroundColor Cyan
$files = Get-ChildItem -Path $root -Include @("*.ts", "*.tsx") -Recurse
$totalFiles = $files.Count

# Regular expression to match different import patterns for sacred-geometry
$importPatterns = @(
    'from\s+["'']([^"'']*?sacred-geometry)["'']', 
    'import\s+{[^}]*}\s+from\s+["'']([^"'']*?sacred-geometry)["'']',
    'import\s+\*\s+as\s+[a-zA-Z0-9_]+\s+from\s+["'']([^"'']*?sacred-geometry)["'']'
)

foreach ($file in $files) {
    $filePath = $file.FullName
    $relativePath = $filePath.Replace("\", "/")
    $originalContent = Get-Content -Path $filePath -Raw
    $modified = $false
    $needsCorrection = $false
    
    # Determine correct import path for this file
    $correctPath = ""
    if ($relativePath -like "$root/*") {
        $correctPath = Get-CorrectPath -filePath $relativePath
    }
    else {
        # Files directly in src folder
        $correctPath = $mainSrcPath
    }
    
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
                        
                        "Fixed file: $relativePath" | Out-File $logFile -Append
                        "  Changed: $currentImportPath -> $correctPath" | Out-File $logFile -Append
                    }
                }
            }
            
            if ($modified) {
                # Write the modified content back to the file
                Set-Content -Path $filePath -Value $newContent
                $filesFixed++
                Write-Host "  Fixed: $relativePath" -ForegroundColor Green
            }
        }
        catch {
            $filesWithErrors++
            "ERROR in file: $relativePath - $_" | Out-File $logFile -Append
            Write-Host "  Error processing $relativePath - $_" -ForegroundColor Red
        }
    }
}

# Log summary statistics
$summary = @"
Summary (Phase 2):
Total files scanned: $totalFiles
Files fixed: $filesFixed
Files with errors: $filesWithErrors
"@

$summary | Out-File $logFile -Append
Write-Host $summary -ForegroundColor Cyan

Write-Host "Phase 2 fix complete. See $logFile for details." -ForegroundColor Green

# Return to original directory
Set-Location -Path ".." 