# PowerShell script to fix 'any' type usage in styled-components theme references
# Replace with proper DefaultTheme type

Write-Host "Starting styled-components theme type fixer script..."

# Define the directories to search in
$directories = @(
    "src/components",
    "src/design-system/components"
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
        
        # Pattern 1: Add DefaultTheme import if using styled-components and theme but not already imported
        if (($content -match 'styled-components') -and ($content -match 'theme:') -and (-not ($content -match 'DefaultTheme'))) {
            $content = $content -replace 'import styled from ''styled-components'';', 'import styled, { DefaultTheme } from ''styled-components'';'
            $content = $content -replace 'import styled, \{ css \} from ''styled-components'';', 'import styled, { css, DefaultTheme } from ''styled-components'';'
            $fileChanged = $true
        }
        
        # Pattern 2: Replace '& { theme: any }' with '& { theme: DefaultTheme }'
        if ($content -match '& \{ theme: any \}') {
            $content = $content -replace '& \{ theme: any \}', '& { theme: DefaultTheme }'
            $fileChanged = $true
        }
        
        # Pattern 3: Replace '<SomeProps & { theme: any }>' with '<SomeProps & { theme: DefaultTheme }>'
        if ($content -match '<\w+Props & \{ theme: any \}>') {
            $content = $content -replace '<(\w+Props) & \{ theme: any \}>', '<$1 & { theme: DefaultTheme }>'
            $fileChanged = $true
        }
        
        # Save the file if changes were made
        if ($fileChanged) {
            Set-Content -Path $file.FullName -Value $content
            $filesModified++
            Write-Host "Fixed styled-components theme types in: $($file.FullName)"
        }
    }
}

Write-Host "Styled-components theme type fixer completed. Modified $filesModified files." 