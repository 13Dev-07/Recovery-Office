# PowerShell script to fix Heading component props issues
# Particularly focusing on size prop and making it compatible with types

Write-Host "Starting Heading component props fixer script..."

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
    
    foreach ($file in $files) {
        $content = Get-Content -Path $file.FullName -Raw
        $originalContent = $content
        $fileChanged = $false
        
        # Find Heading imports to check if the file uses Heading
        if ($content -match "Heading") {
            # Find Heading components with size prop
            $pattern = '<Heading\s+([^>]*)\s*size=["''](xs|sm|md|lg|xl|xxl)["'']([^>]*)>'
            
            # Check if we have any matches
            if ($content -match $pattern) {
                # First, check if we need to import HeadingProps
                if (($content -match "import.*Heading.*from") -and (-not ($content -match "HeadingProps"))) {
                    $content = $content -replace "import \{ Heading \} from '@design-system/components/typography/Heading';", "import { Heading, HeadingProps } from '@design-system/components/typography/Heading';"
                }
                
                # Replace size with fontSize or variant based on documentation
                $content = $content -replace $pattern, '<Heading $1fontSize="$2"$3>'
                $fileChanged = $true
            }
        }
        
        # Save the file if changes were made
        if ($fileChanged) {
            Set-Content -Path $file.FullName -Value $content
            $filesModified++
            Write-Host "Fixed Heading props in: $($file.FullName)"
        }
    }
}

Write-Host "Heading props fixer completed. Modified $filesModified files." 