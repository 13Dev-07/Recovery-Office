# PowerShell Script to revert changes made by fix-common-typescript-errors.ps1

Write-Host "Recovery Office - Reverting TypeScript Changes" -ForegroundColor Yellow
Write-Host "=============================================" -ForegroundColor Yellow
Write-Host

# Function to revert path aliases changes
function Revert-PathAliases {
    param(
        [string]$FilePath
    )
    
    Write-Host "Reverting path aliases in $FilePath..." -ForegroundColor Cyan
    
    $content = Get-Content $FilePath -Raw
    
    # Revert back to path aliases
    $content = $content -replace "import\s+\{([^}]+)\}\s+from\s+'\.\.\/constants\/sacred-geometry'", "import {`$1} from '@constants/sacred-geometry'"
    $content = $content -replace "import\s+\{([^}]+)\}\s+from\s+`"\.\.\/constants\/sacred-geometry`"", "import {`$1} from '@constants/sacred-geometry'"
    
    $content = $content -replace "import\s+\{([^}]+)\}\s+from\s+'\.\.\/utils\/animation'", "import {`$1} from '@utils/animation'"
    $content = $content -replace "import\s+\{([^}]+)\}\s+from\s+`"\.\.\/utils\/animation`"", "import {`$1} from '@utils/animation'"
    
    $content = $content -replace "import\s+\{([^}]+)\}\s+from\s+'\.\.\/hooks\/([^']+)'", "import {`$1} from '@hooks/`$2'"
    $content = $content -replace "import\s+\{([^}]+)\}\s+from\s+`"\.\.\/hooks\/([^`"]+)`"", "import {`$1} from '@hooks/`$2'"
    
    $content = $content -replace "import\s+\{([^}]+)\}\s+from\s+'\.\.\/context\/([^']+)'", "import {`$1} from '@context/`$2'"
    $content = $content -replace "import\s+\{([^}]+)\}\s+from\s+`"\.\.\/context\/([^`"]+)`"", "import {`$1} from '@context/`$2'"
    
    $content = $content -replace "import\s+\{([^}]+)\}\s+from\s+'\.\.\/design-system\/([^']+)'", "import {`$1} from '@design-system/`$2'"
    $content = $content -replace "import\s+\{([^}]+)\}\s+from\s+`"\.\.\/design-system\/([^`"]+)`"", "import {`$1} from '@design-system/`$2'"
    
    $content = $content -replace "import\s+\{([^}]+)\}\s+from\s+'\.\.\/types\/([^']+)'", "import {`$1} from '@types/`$2'"
    $content = $content -replace "import\s+\{([^}]+)\}\s+from\s+`"\.\.\/types\/([^`"]+)`"", "import {`$1} from '@types/`$2'"
    
    # Save the modified content
    Set-Content -Path $FilePath -Value $content
}

# Function to revert React hooks changes
function Revert-ReactHooks {
    param(
        [string]$FilePath
    )
    
    Write-Host "Reverting React hooks in $FilePath..." -ForegroundColor Cyan
    
    $content = Get-Content $FilePath -Raw
    
    # Remove the additional React hooks import lines
    if ($content -match "import\s+\*\s+as\s+React\s+from\s+'react';[\r\n]+import\s+\{\s*(useState|useEffect|useCallback|useMemo|useRef|useContext|useReducer)([^}]*)\}\s+from\s+'react';") {
        # Get the hooks that were imported
        $hooksMatch = $content -match "import\s+\{\s*([^}]+)\}\s+from\s+'react';"
        $hooksString = $matches[1]
        
        # Remove the extra import line
        $content = $content -replace "import\s+\*\s+as\s+React\s+from\s+'react';[\r\n]+import\s+\{[^}]+\}\s+from\s+'react';", "import * as React from 'react';"
        
        # Revert back to React.useXXX syntax
        $hooks = $hooksString -split ',' | ForEach-Object { $_.Trim() }
        foreach ($hook in $hooks) {
            $content = $content -replace "(?<!\.)$hook\(", "React.$hook("
        }
    }
    
    # Save the modified content
    Set-Content -Path $FilePath -Value $content
}

# Function to revert browser compatibility changes
function Revert-BrowserCompatibility {
    param(
        [string]$FilePath
    )
    
    Write-Host "Reverting browser compatibility changes in $FilePath..." -ForegroundColor Cyan
    
    $content = Get-Content $FilePath -Raw
    
    # Remove the added browser compatibility checks
    $content = $content -replace "if \((\w+)\.addEventListener\) \{\s+\1\.addEventListener\([^;]+;\s+\} else \{\s+\/\/ Fallback for older browsers\s+\1\.addListener\(\1\.match\);\s+\}", "`$1.addEventListener(`$1.matches);"
    
    # Save the modified content
    Set-Content -Path $FilePath -Value $content
}

# Function to revert SACRED_EASINGS type casts
function Revert-EasingTypeCasts {
    param(
        [string]$FilePath
    )
    
    Write-Host "Reverting easing type casts in $FilePath..." -ForegroundColor Cyan
    
    $content = Get-Content $FilePath -Raw
    
    # Remove the type cast
    $content = $content -replace "SACRED_EASINGS\[([^\]]+) as keyof typeof SACRED_EASINGS\]", "SACRED_EASINGS[`$1]"
    
    # Save the modified content
    Set-Content -Path $FilePath -Value $content
}

# Function to revert SSR checks
function Revert-SSRChecks {
    param(
        [string]$FilePath
    )
    
    Write-Host "Reverting SSR checks in $FilePath..." -ForegroundColor Cyan
    
    $content = Get-Content $FilePath -Raw
    
    # Remove the added SSR check comments
    $content = $content -replace "\/\/ TODO: This file contains direct (window|document) access without SSR checks\r?\n", ""
    
    # Save the modified content
    Set-Content -Path $FilePath -Value $content
}

# Function to revert array indexing changes
function Revert-ArrayIndexing {
    param(
        [string]$FilePath
    )
    
    Write-Host "Reverting array indexing in $FilePath..." -ForegroundColor Cyan
    
    $content = Get-Content $FilePath -Raw
    
    # Remove the added nullish coalescing
    $content = $content -replace "(\w+)\[([^\]]+)\] \?\? 1", "`$1[`$2]"
    
    # Save the modified content
    Set-Content -Path $FilePath -Value $content
}

# Get all TypeScript and React files
$files = Get-ChildItem -Path "recovery-office/src" -Recurse -Include "*.ts", "*.tsx"

# Process each file
foreach ($file in $files) {
    Write-Host "Processing $($file.FullName)..." -ForegroundColor Yellow
    
    Revert-PathAliases -FilePath $file.FullName
    Revert-ReactHooks -FilePath $file.FullName
    Revert-BrowserCompatibility -FilePath $file.FullName
    Revert-EasingTypeCasts -FilePath $file.FullName
    Revert-SSRChecks -FilePath $file.FullName
    Revert-ArrayIndexing -FilePath $file.FullName
    
    Write-Host "Completed reverting changes in $($file.Name)" -ForegroundColor Green
    Write-Host
}

Write-Host "Reverting TypeScript changes complete!" -ForegroundColor Green
Write-Host "Run 'tsc --noEmit' to check the current error count." 