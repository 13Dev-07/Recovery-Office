# PowerShell script to fix relative imports to alias imports
# Following the paths setup in tsconfig.json

Write-Host "Starting import path fixer script..."

# Define the directories to search in
$directories = @(
    "src/components",
    "src/design-system",
    "src/hooks",
    "src/pages",
    "src/services",
    "src/utils",
    "src/context",
    "src/animation"
)

# Define the import pattern replacements
$replacements = @(
    @{
        Pattern = 'from "\.\.\/\.\.\/design-system\/(.+?)"'
        Replacement = 'from "@design-system/$1"'
    },
    @{
        Pattern = 'from "\.\.\/\.\.\/constants\/(.+?)"'
        Replacement = 'from "@constants/$1"'
    },
    @{
        Pattern = 'from "\.\.\/\.\.\/utils\/(.+?)"'
        Replacement = 'from "@utils/$1"'
    },
    @{
        Pattern = 'from "\.\.\/\.\.\/hooks\/(.+?)"'
        Replacement = 'from "@hooks/$1"'
    },
    @{
        Pattern = 'from "\.\.\/\.\.\/context\/(.+?)"'
        Replacement = 'from "@context/$1"'
    },
    @{
        Pattern = 'from "\.\.\/\.\.\/types\/(.+?)"'
        Replacement = 'from "@types/$1"'
    },
    @{
        Pattern = 'from "\.\.\/\.\.\/services\/(.+?)"'
        Replacement = 'from "@services/$1"'
    },
    @{
        Pattern = 'from "\.\.\/\.\.\/components\/(.+?)"'
        Replacement = 'from "@components/$1"'
    },
    @{
        Pattern = 'from "\.\.\/\.\.\/pages\/(.+?)"'
        Replacement = 'from "@pages/$1"'
    },
    @{
        Pattern = 'from "\.\.\/\.\.\/animation\/(.+?)"'
        Replacement = 'from "@animation/$1"'
    }
)

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
        
        # Apply each replacement pattern
        foreach ($replacement in $replacements) {
            $pattern = $replacement.Pattern
            $replace = $replacement.Replacement
            
            # Check if content matches the pattern
            if ($content -match $pattern) {
                # Apply the replacement
                $content = $content -replace $pattern, $replace
                $fileChanged = $true
            }
        }
        
        # Save the file if changes were made
        if ($fileChanged) {
            Set-Content -Path $file.FullName -Value $content
            $filesModified++
            Write-Host "Fixed imports in: $($file.FullName)"
        }
    }
}

Write-Host "Import path fixer completed. Modified $filesModified files." 