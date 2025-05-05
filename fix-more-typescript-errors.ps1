# Script to fix path imports for all files in the project
# This uses tsconfig.json path aliases to set imports correctly

Write-Host "Starting TypeScript path alias fixer..."

# Get all TypeScript files in the project
$files = Get-ChildItem -Path "src" -Filter "*.tsx" -Recurse -ErrorAction SilentlyContinue
$files += Get-ChildItem -Path "src" -Filter "*.ts" -Recurse -ErrorAction SilentlyContinue

$pathAliases = @{
    "@design-system/" = "../design-system/"
    "@constants/" = "../constants/"
    "@utils/" = "../utils/"
    "@hooks/" = "../hooks/"
    "@context/" = "../context/"
    "@types/" = "../types/"
    "@services/" = "../services/"
    "@components/" = "../components/"
    "@pages/" = "../pages/"
    "@animation/" = "../animation/"
}

$filesModified = 0

foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw -ErrorAction SilentlyContinue
    if ($null -eq $content) { continue }
    
    $originalContent = $content
    $fileChanged = $false
    
    # Check for path alias imports that need to be converted to relative paths
    foreach ($alias in $pathAliases.Keys) {
        $relativePath = $pathAliases[$alias]
        
        # Create pattern to match imports using this alias
        $pattern = "from ['\"]$alias(.+?)['\"]"
        
        if ($content -match $pattern) {
            # Calculate the relative path based on the file's directory depth
            $depth = ($file.FullName.Split("\src\")[1].Split("\").Length - 1)
            $properRelativePath = "../" * $depth
            
            # If we're at the top level, don't add any ../ prefix
            if ($depth -eq 0) {
                $properRelativePath = "./"
            }
            
            # Replace the alias with proper relative path
            $replacement = "from '$properRelativePath$($relativePath.TrimStart('../'))$1'"
            $content = [regex]::Replace($content, $pattern, $replacement)
            $fileChanged = $true
        }
    }
    
    # Implement the changes if needed
    if ($fileChanged) {
        Set-Content -Path $file.FullName -Value $content
        $filesModified++
        Write-Host "Fixed path aliases in: $($file.FullName)"
    }
}

Write-Host "Fixed path aliases in $filesModified files." 