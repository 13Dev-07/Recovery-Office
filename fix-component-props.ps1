# Script to fix component prop issues, focusing on children prop
# This addresses the missing children prop in several component interfaces

$root = "recovery-office/src"

# Create a log file to track changes
$logFile = "component-props-fixes.log"
"Component props fixes - $(Get-Date)" | Out-File $logFile

# List of components that need children prop added
$componentsNeedingChildren = @(
    "$root/design-system/components/layout/Box.tsx",
    "$root/design-system/components/layout/Container.tsx",
    "$root/design-system/components/layout/Stack.tsx",
    "$root/design-system/components/form/FormLabel.tsx",
    "$root/design-system/components/form/FormError.tsx",
    "$root/design-system/components/button/Button.tsx",
    "$root/design-system/components/layout/AspectRatio.tsx",
    "$root/design-system/botanical/BotanicalElement.tsx",
    "$root/examples/ContactExample.tsx",
    "$root/examples/TestimonialsExample.tsx",
    "$root/design-system/components/button/ButtonGroup.tsx",
    "$root/animation/ParallaxLayer.tsx",
    "$root/components/footer/FooterSocial.tsx",
    "$root/components/header/RegulatorBadge.tsx",
    "$root/components/section/ContactCTA.tsx",
    "$root/design-system/components/layout/Section/Section.tsx",
    "$root/components/section/SectionDivider.tsx"
)

# Process each component file
foreach ($componentFile in $componentsNeedingChildren) {
    if (Test-Path $componentFile) {
        Write-Host "Processing component: $componentFile"
        $content = Get-Content $componentFile -Raw
        $modified = $false
        
        # 1. Find the interface declaration for the component props
        if ($content -match "export\s+interface\s+(\w+Props)") {
            $propsInterface = $matches[1]
            Write-Host "  - Found props interface: $propsInterface"
            
            # Check if children prop already exists
            if (-not ($content -match "$propsInterface\s*\{[^}]*children\s*:")) {
                Write-Host "  - Adding children prop to $propsInterface"
                
                # Add the children prop to the interface
                $fixedContent = $content -replace "(export\s+interface\s+$propsInterface\s*\{)", "`$1`n  children?: React.ReactNode;"
                
                if ($content -ne $fixedContent) {
                    Set-Content -Path $componentFile -Value $fixedContent
                    $message = "  - Added children prop to $propsInterface in $componentFile"
                    Write-Host $message
                    $message | Out-File $logFile -Append
                    $modified = $true
                }
            }
            else {
                Write-Host "  - Children prop already exists in $propsInterface"
            }
        }
        
        # If we couldn't find a standard interface pattern, look for other patterns
        if (-not $modified) {
            # Look for styled-components pattern
            if ($content -match "const\s+\w+\s*=\s*styled\.\w+<\{([^}]*)\}>") {
                $propsDeclaration = $matches[1]
                
                if (-not ($propsDeclaration -match "children\s*:")) {
                    Write-Host "  - Adding children prop to styled component props"
                    
                    # Add the children prop to the styled component props
                    $fixedContent = $content -replace "(const\s+\w+\s*=\s*styled\.\w+<\{)", "`$1 children?: React.ReactNode;"
                    
                    if ($content -ne $fixedContent) {
                        Set-Content -Path $componentFile -Value $fixedContent
                        $message = "  - Added children prop to styled component in $componentFile"
                        Write-Host $message
                        $message | Out-File $logFile -Append
                        $modified = $true
                    }
                }
            }
        }
        
        if (-not $modified) {
            $message = "  - Could not find appropriate pattern to add children prop in $componentFile"
            Write-Host $message
            $message | Out-File $logFile -Append
        }
    }
    else {
        $message = "  - File not found: $componentFile"
        Write-Host $message
        $message | Out-File $logFile -Append
    }
}

# Fix specific property name mismatches
$propertyMismatchFixes = @{
    "$root/design-system/components/button/Button.tsx" = @{
        "pattern" = "disabled\s*\?:\s*boolean"
        "replacement" = "isDisabled?: boolean"
    }
    "$root/design-system/components/navigation/Navigation.tsx" = @{
        "pattern" = "align\s*\?:\s*string"
        "replacement" = "alignment?: string"
    }
    "$root/design-system/components/feedback/Badge.tsx" = @{
        "pattern" = "colorScheme\s*\?:\s*string"
        "replacement" = "color?: string"
    }
}

foreach ($file in $propertyMismatchFixes.Keys) {
    if (Test-Path $file) {
        Write-Host "Fixing property mismatch in: $file"
        $content = Get-Content $file -Raw
        
        $pattern = $propertyMismatchFixes[$file]["pattern"]
        $replacement = $propertyMismatchFixes[$file]["replacement"]
        
        # Replace the property name
        $fixedContent = $content -replace $pattern, $replacement
        
        if ($content -ne $fixedContent) {
            Set-Content -Path $file -Value $fixedContent
            $message = "  - Fixed property name mismatch in $file"
            Write-Host $message
            $message | Out-File $logFile -Append
        }
    }
    else {
        $message = "  - File not found: $file"
        Write-Host $message
        $message | Out-File $logFile -Append
    }
}

# Fix FIBONACCI access issues
$fibonacciAccessFixes = @(
    "$root/design-system/tokens/breakpoints.ts",
    "$root/design-system/components/data-display/List.tsx",
    "$root/design-system/components/feedback/Badge.tsx",
    "$root/design-system/components/navigation/StickyNavigation.tsx",
    "$root/design-system/components/button/Button.tsx",
    "$root/design-system/botanical/LeafPattern.tsx",
    "$root/hooks/useAnimationSequence.ts",
    "$root/animation/animationUtils.ts"
)

foreach ($file in $fibonacciAccessFixes) {
    if (Test-Path $file) {
        Write-Host "Fixing FIBONACCI access in: $file"
        $content = Get-Content $file -Raw
        
        # Check if getFibonacciByIndex is already imported
        $hasUtilImport = $content -match "import\s*\{\s*getFibonacciByIndex\s*\}"
        
        if (-not $hasUtilImport) {
            # Add import for getFibonacciByIndex utility
            if ($content -match "import\s*\{\s*([^}]*FIBONACCI[^}]*)\}\s*from") {
                $fibonacciImport = $matches[0]
                $importPath = ""
                
                if ($fibonacciImport -match "from\s*'([^']*)'") {
                    $importPath = $matches[1]
                    
                    # Get the proper import path for utils
                    $utilsImportPath = $importPath -replace "constants/sacred-geometry", "utils"
                    
                    # Add the import for getFibonacciByIndex
                    $fixedContent = $content -replace "(?<=import\s*\{\s*[^}]*FIBONACCI[^}]*\}\s*from\s*'[^']*';)", "`nimport { getFibonacciByIndex } from '$utilsImportPath';"
                    
                    # Replace direct FIBONACCI access with getFibonacciByIndex
                    $fixedContent = $fixedContent -replace "FIBONACCI\[(\d+)\]", "getFibonacciByIndex(`$1)"
                    
                    if ($content -ne $fixedContent) {
                        Set-Content -Path $file -Value $fixedContent
                        $message = "  - Fixed FIBONACCI access in $file"
                        Write-Host $message
                        $message | Out-File $logFile -Append
                    }
                }
            }
        }
        else {
            # Just replace direct FIBONACCI access with getFibonacciByIndex
            $fixedContent = $content -replace "FIBONACCI\[(\d+)\]", "getFibonacciByIndex(`$1)"
            
            if ($content -ne $fixedContent) {
                Set-Content -Path $file -Value $fixedContent
                $message = "  - Fixed FIBONACCI access in $file"
                Write-Host $message
                $message | Out-File $logFile -Append
            }
        }
    }
    else {
        $message = "  - File not found: $file"
        Write-Host $message
        $message | Out-File $logFile -Append
    }
}

Write-Host "Component props fixes completed! See $logFile for details." 