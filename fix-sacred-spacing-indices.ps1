# PowerShell script to fix numeric indices used with SACRED_SPACING
# Replace with appropriate named keys (xs, sm, md, lg, xl, etc.)

Write-Host "Starting SACRED_SPACING index fixer script..."

# Define the directories to search in
$directories = @(
    "src/components",
    "src/design-system/components"
)

# Define mapping of numeric indices to named keys
$indexToKeyMap = @{
    "0" = "none"
    "1" = "xxxs"
    "2" = "xxs"
    "3" = "xs"
    "4" = "sm"
    "5" = "md"
    "6" = "lg"
    "7" = "xl"
    "8" = "xxl"
    "9" = "xxxl"
}

# Counter for files modified
$filesModified = 0

# Process each directory
foreach ($dir in $directories) {
    Write-Host "Scanning directory: $dir"
    
    # Get all TypeScript files
    $files = Get-ChildItem -Path $dir -Filter "*.tsx" -Recurse
    $files += Get-ChildItem -Path $dir -Filter "*.ts" -Recurse
    
    foreach ($file in $files) {
        $content = Get-Content -Path $file.FullName -Raw
        $originalContent = $content
        $fileChanged = $false
        
        # Find and replace SACRED_SPACING[<number>] with SACRED_SPACING.<key>
        foreach ($index in $indexToKeyMap.Keys) {
            $key = $indexToKeyMap[$index]
            
            # Replace SACRED_SPACING[index] pattern
            if ($content -match "SACRED_SPACING\[$index\]") {
                $content = $content -replace "SACRED_SPACING\[$index\]", "SACRED_SPACING.$key"
                $fileChanged = $true
            }
        }
        
        # Save the file if changes were made
        if ($fileChanged) {
            Set-Content -Path $file.FullName -Value $content
            $filesModified++
            Write-Host "Fixed SACRED_SPACING indices in: $($file.FullName)"
        }
    }
}

Write-Host "SACRED_SPACING index fixer completed. Modified $filesModified files." 