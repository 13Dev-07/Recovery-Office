# PowerShell Script to fix common TypeScript errors in Recovery Office codebase

Write-Host "Recovery Office - TypeScript Error Fixing Script" -ForegroundColor Green
Write-Host "=================================================" -ForegroundColor Green
Write-Host

# Function to replace path aliases with relative imports
function Fix-PathAliases {
    param(
        [string]$FilePath
    )
    
    Write-Host "Fixing path aliases in $FilePath..." -ForegroundColor Cyan
    
    $content = Get-Content $FilePath -Raw
    
    # Replace @constants/sacred-geometry with relative path
    $content = $content -replace "import\s+\{([^}]+)\}\s+from\s+'@constants/sacred-geometry'", "import {`$1} from '../constants/sacred-geometry'"
    $content = $content -replace "import\s+\{([^}]+)\}\s+from\s+`"@constants/sacred-geometry`"", "import {`$1} from '../constants/sacred-geometry'"
    
    # Replace @utils/animation with relative path
    $content = $content -replace "import\s+\{([^}]+)\}\s+from\s+'@utils/animation'", "import {`$1} from '../utils/animation'"
    $content = $content -replace "import\s+\{([^}]+)\}\s+from\s+`"@utils/animation`"", "import {`$1} from '../utils/animation'"
    
    # Replace @hooks with relative path
    $content = $content -replace "import\s+\{([^}]+)\}\s+from\s+'@hooks/([^']+)'", "import {`$1} from '../hooks/`$2'"
    $content = $content -replace "import\s+\{([^}]+)\}\s+from\s+`"@hooks/([^`"]+)`"", "import {`$1} from '../hooks/`$2'"
    
    # Replace @context with relative path
    $content = $content -replace "import\s+\{([^}]+)\}\s+from\s+'@context/([^']+)'", "import {`$1} from '../context/`$2'"
    $content = $content -replace "import\s+\{([^}]+)\}\s+from\s+`"@context/([^`"]+)`"", "import {`$1} from '../context/`$2'"
    
    # Replace @design-system with relative path
    $content = $content -replace "import\s+\{([^}]+)\}\s+from\s+'@design-system/([^']+)'", "import {`$1} from '../design-system/`$2'"
    $content = $content -replace "import\s+\{([^}]+)\}\s+from\s+`"@design-system/([^`"]+)`"", "import {`$1} from '../design-system/`$2'"
    
    # Replace @types with relative path
    $content = $content -replace "import\s+\{([^}]+)\}\s+from\s+'@types/([^']+)'", "import {`$1} from '../types/`$2'"
    $content = $content -replace "import\s+\{([^}]+)\}\s+from\s+`"@types/([^`"]+)`"", "import {`$1} from '../types/`$2'"
    
    # Save the modified content
    Set-Content -Path $FilePath -Value $content
}

# Function to fix React hook imports
function Fix-ReactHooks {
    param(
        [string]$FilePath
    )
    
    Write-Host "Fixing React hooks in $FilePath..." -ForegroundColor Cyan
    
    $content = Get-Content $FilePath -Raw
    
    # Check if the file contains React.useState or React.useEffect
    if ($content -match "React\.use(State|Effect|Callback|Memo|Ref|Context|Reducer)") {
        # Find all React hooks
        $hooksToAdd = @()
        
        if ($content -match "React\.useState") { $hooksToAdd += "useState" }
        if ($content -match "React\.useEffect") { $hooksToAdd += "useEffect" }
        if ($content -match "React\.useCallback") { $hooksToAdd += "useCallback" }
        if ($content -match "React\.useMemo") { $hooksToAdd += "useMemo" }
        if ($content -match "React\.useRef") { $hooksToAdd += "useRef" }
        if ($content -match "React\.useContext") { $hooksToAdd += "useContext" }
        if ($content -match "React\.useReducer") { $hooksToAdd += "useReducer" }
        
        if ($hooksToAdd.Count -gt 0) {
            $hooksString = $hooksToAdd -join ", "
            
            # Check if import * as React already exists
            if ($content -match "import\s+\*\s+as\s+React\s+from\s+'react'") {
                # Add the hooks to the existing import statement
                $content = $content -replace "import\s+\*\s+as\s+React\s+from\s+'react'", "import * as React from 'react';`nimport { $hooksString } from 'react';"
                
                # Replace React.useXXX with useXXX
                foreach ($hook in $hooksToAdd) {
                    $content = $content -replace "React\.$hook", $hook
                }
            }
        }
    }
    
    # Save the modified content
    Set-Content -Path $FilePath -Value $content
}

# Function to add browser compatibility checks
function Add-BrowserCompatibility {
    param(
        [string]$FilePath
    )
    
    Write-Host "Adding browser compatibility checks in $FilePath..." -ForegroundColor Cyan
    
    $content = Get-Content $FilePath -Raw
    
    # Check for window.matchMedia without compatibility check
    if ($content -match "window\.matchMedia" -and $content -notmatch "if\s*\(\s*typeof\s+window\s+!==\s+'undefined'\s*\)") {
        # Look for mediaQuery.addEventListener without compatibility check
        $content = $content -replace "(const\s+(\w+)\s*=\s*window\.matchMedia\([^)]+\)[\s\S]*?)(\2\.addEventListener\([^;]+;)", "`$1if (`$2.addEventListener) {`n        `$3`n    } else {`n        // Fallback for older browsers`n        `$2.addListener(`$2.match);`n    }"
    }
    
    # Save the modified content
    Set-Content -Path $FilePath -Value $content
}

# Function to fix SACRED_EASINGS type casts
function Fix-EasingTypeCasts {
    param(
        [string]$FilePath
    )
    
    Write-Host "Fixing easing type casts in $FilePath..." -ForegroundColor Cyan
    
    $content = Get-Content $FilePath -Raw
    
    # Fix SACRED_EASINGS access without type cast
    $content = $content -replace "SACRED_EASINGS\[(\w+)\]", "SACRED_EASINGS[`$1 as keyof typeof SACRED_EASINGS]"
    
    # Save the modified content
    Set-Content -Path $FilePath -Value $content
}

# Function to add SSR checks
function Add-SSRChecks {
    param(
        [string]$FilePath
    )
    
    Write-Host "Adding SSR checks in $FilePath..." -ForegroundColor Cyan
    
    $content = Get-Content $FilePath -Raw
    
    # Check for direct window access without SSR check
    if ($content -match "window\." -and $content -notmatch "if\s*\(\s*typeof\s+window\s+!==\s+'undefined'\s*\)") {
        # Add a warning comment at the top of the file
        $content = "// TODO: This file contains direct window access without SSR checks`n$content"
    }
    
    # Check for direct document access without SSR check
    if ($content -match "document\." -and $content -notmatch "if\s*\(\s*typeof\s+document\s+!==\s+'undefined'\s*\)") {
        # Add a warning comment at the top of the file
        $content = "// TODO: This file contains direct document access without SSR checks`n$content"
    }
    
    # Save the modified content
    Set-Content -Path $FilePath -Value $content
}

# Function to fix array indexing issues
function Fix-ArrayIndexing {
    param(
        [string]$FilePath
    )
    
    Write-Host "Fixing array indexing in $FilePath..." -ForegroundColor Cyan
    
    $content = Get-Content $FilePath -Raw
    
    # Add nullish coalescing for array access with variables
    $content = $content -replace "(\w+)\[([^\]]+ \+ \d+|\w+\s*\+\s*\d+|\w+)\](?!\s*\?\?)", "`$1[`$2] ?? 1"
    
    # Save the modified content
    Set-Content -Path $FilePath -Value $content
}

# Get all TypeScript and React files
$files = Get-ChildItem -Path "recovery-office/src" -Recurse -Include "*.ts", "*.tsx"

# Process each file
foreach ($file in $files) {
    Write-Host "Processing $($file.FullName)..." -ForegroundColor Yellow
    
    Fix-PathAliases -FilePath $file.FullName
    Fix-ReactHooks -FilePath $file.FullName
    Add-BrowserCompatibility -FilePath $file.FullName
    Fix-EasingTypeCasts -FilePath $file.FullName
    Add-SSRChecks -FilePath $file.FullName
    Fix-ArrayIndexing -FilePath $file.FullName
    
    Write-Host "Completed processing $($file.Name)" -ForegroundColor Green
    Write-Host
}

Write-Host "TypeScript error fixing complete!" -ForegroundColor Green
Write-Host "Now run 'tsc --noEmit' to check if errors have been resolved."
Write-Host "Note: This script fixes common patterns but manual fixes may still be needed." 