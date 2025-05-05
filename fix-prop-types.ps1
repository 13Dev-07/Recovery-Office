# Script to fix component variant and type issues
# This addresses the variant prop issues and other type mismatches in component props

$root = "recovery-office/src"

# Create a log file to track changes
$logFile = "prop-types-fixes.log"
"Component prop types fixes - $(Get-Date)" | Out-File $logFile

# Fix typography component variant prop types
$typographyComponents = @{
    "$root/design-system/components/typography/Heading.tsx" = @{
        "pattern" = "export\s+interface\s+HeadingProps\s*\{[^}]*variant\s*\?:\s*[^;]*;"
        "replacement" = "export interface HeadingProps {\n  variant?: 'display' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';"
    }
    "$root/design-system/components/typography/Text.tsx" = @{
        "pattern" = "export\s+interface\s+TextProps\s*\{[^}]*variant\s*\?:\s*[^;]*;"
        "replacement" = "export interface TextProps {\n  variant?: 'body1' | 'body2' | 'caption' | 'overline' | 'subtitle1' | 'subtitle2';"
    }
    "$root/design-system/components/typography/Paragraph.tsx" = @{
        "pattern" = "export\s+interface\s+ParagraphProps\s*\{[^}]*variant\s*\?:\s*[^;]*;"
        "replacement" = "export interface ParagraphProps {\n  variant?: 'body1' | 'body2';"
    }
    "$root/design-system/components/typography/Span.tsx" = @{
        "pattern" = "export\s+interface\s+SpanProps\s*\{[^}]*size\s*\?:\s*[^;]*;"
        "replacement" = "export interface SpanProps {\n  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'base';"
    }
}

foreach ($file in $typographyComponents.Keys) {
    if (Test-Path $file) {
        Write-Host "Fixing typography component in: $file"
        $content = Get-Content $file -Raw
        
        $pattern = $typographyComponents[$file]["pattern"]
        $replacement = $typographyComponents[$file]["replacement"]
        
        # Replace the variant type
        $fixedContent = $content -replace $pattern, $replacement
        
        if ($content -ne $fixedContent) {
            Set-Content -Path $file -Value $fixedContent
            $message = "  - Fixed variant type in $file"
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

# Fix section component props
$sectionComponents = @{
    "$root/design-system/components/layout/Section/Section.tsx" = @{
        "propsPattern" = "export\s+interface\s+SectionProps\s*\{([^}]*)\}"
        "propsAddition" = "backgroundColor?: string;\n  variant?: 'primary' | 'secondary' | 'tertiary';\n  "
    }
    "$root/components/section/ContactCTA.tsx" = @{
        "propsPattern" = "export\s+interface\s+ContactCTAProps\s*\{([^}]*)\}"
        "propsAddition" = "backgroundColor?: string;\n  "
    }
}

foreach ($file in $sectionComponents.Keys) {
    if (Test-Path $file) {
        Write-Host "Fixing section component in: $file"
        $content = Get-Content $file -Raw
        
        $propsPattern = $sectionComponents[$file]["propsPattern"]
        $propsAddition = $sectionComponents[$file]["propsAddition"]
        
        # Add the missing props
        if ($content -match $propsPattern) {
            $fixedContent = $content -replace $propsPattern, "export interface SectionProps {$propsAddition`$1}"
            
            if ($content -ne $fixedContent) {
                Set-Content -Path $file -Value $fixedContent
                $message = "  - Added missing props in $file"
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

# Fix Card component props
$cardComponents = @{
    "$root/design-system/components/data-display/Card.tsx" = @{
        "propsPattern" = "export\s+interface\s+CardProps\s*\{([^}]*)\}"
        "propsAddition" = "elevation?: number;\n  padding?: string;\n  borderRadius?: string;\n  "
    }
}

foreach ($file in $cardComponents.Keys) {
    if (Test-Path $file) {
        Write-Host "Fixing card component in: $file"
        $content = Get-Content $file -Raw
        
        $propsPattern = $cardComponents[$file]["propsPattern"]
        $propsAddition = $cardComponents[$file]["propsAddition"]
        
        # Add the missing props
        if ($content -match $propsPattern) {
            $fixedContent = $content -replace $propsPattern, "export interface CardProps {$propsAddition`$1}"
            
            if ($content -ne $fixedContent) {
                Set-Content -Path $file -Value $fixedContent
                $message = "  - Added missing props in $file"
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

# Fix Box component props to handle HTML attributes
$boxComponents = @{
    "$root/design-system/components/layout/Box.tsx" = @{
        "propsPattern" = "export\s+interface\s+BoxProps\s*\{([^}]*)\}"
        "propsAddition" = "as?: string;\n  marginTop?: string;\n  "
    }
}

foreach ($file in $boxComponents.Keys) {
    if (Test-Path $file) {
        Write-Host "Fixing Box component in: $file"
        $content = Get-Content $file -Raw
        
        $propsPattern = $boxComponents[$file]["propsPattern"]
        $propsAddition = $boxComponents[$file]["propsAddition"]
        
        # Add the missing props
        if ($content -match $propsPattern) {
            $fixedContent = $content -replace $propsPattern, "export interface BoxProps {$propsAddition`$1}"
            
            if ($content -ne $fixedContent) {
                Set-Content -Path $file -Value $fixedContent
                $message = "  - Added missing props in $file"
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

# Fix Button component props
$buttonComponents = @{
    "$root/design-system/components/button/Button.tsx" = @{
        "propsPattern" = "export\s+interface\s+ButtonProps\s*\{([^}]*)\}"
        "propsAddition" = "href?: string;\n  "
    }
}

foreach ($file in $buttonComponents.Keys) {
    if (Test-Path $file) {
        Write-Host "Fixing Button component in: $file"
        $content = Get-Content $file -Raw
        
        $propsPattern = $buttonComponents[$file]["propsPattern"]
        $propsAddition = $buttonComponents[$file]["propsAddition"]
        
        # Add the missing props
        if ($content -match $propsPattern) {
            $fixedContent = $content -replace $propsPattern, "export interface ButtonProps {$propsAddition`$1}"
            
            if ($content -ne $fixedContent) {
                Set-Content -Path $file -Value $fixedContent
                $message = "  - Added missing props in $file"
                Write-Host $message
                $message | Out-File $logFile -Append
            }
        }
        
        # Fix the size type to include 'large'
        $sizeTypePattern = "size\s*\?:\s*'sm'\s*\|\s*'md'\s*\|\s*'lg'"
        $sizeTypeReplacement = "size?: 'sm' | 'md' | 'lg' | 'large'"
        
        $fixedContent = $content -replace $sizeTypePattern, $sizeTypeReplacement
        
        if ($content -ne $fixedContent) {
            Set-Content -Path $file -Value $fixedContent
            $message = "  - Fixed size type to include 'large' in $file"
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

# Fix theme color properties
$themeFiles = @(
    "$root/design-system/theme/theme.ts",
    "$root/design-system/types/theme.types.ts"
)

foreach ($file in $themeFiles) {
    if (Test-Path $file) {
        Write-Host "Fixing theme color properties in: $file"
        $content = Get-Content $file -Raw
        
        # Add main, dark, darkest to colors object
        $colorObjectPattern = "colors\s*:\s*\{([^}]*)\}"
        if ($content -match $colorObjectPattern) {
            $colorObject = $matches[1]
            
            if (-not ($colorObject -match "main\s*:")) {
                $fixedContent = $content -replace "primary\s*:\s*\{([^}]*)\}", "primary: {$1, main: '#4A6EB3', dark: '#2A4073', darkest: '#1A2F62'}"
                
                if ($content -ne $fixedContent) {
                    Set-Content -Path $file -Value $fixedContent
                    $message = "  - Added missing color properties in $file"
                    Write-Host $message
                    $message | Out-File $logFile -Append
                }
            }
        }
    }
    else {
        $message = "  - File not found: $file"
        Write-Host $message
        $message | Out-File $logFile -Append
    }
}

# Fix API types to handle optional properties
$apiFiles = @(
    "$root/types/api.types.ts"
)

foreach ($file in $apiFiles) {
    if (Test-Path $file) {
        Write-Host "Fixing API types in: $file"
        $content = Get-Content $file -Raw
        
        # Find the ApiError constructor
        $constructorPattern = "constructor\([^)]*\)\s*\{[^}]*this\.details\s*=\s*details;"
        if ($content -match $constructorPattern) {
            $fixedContent = $content -replace "this\.details\s*=\s*details;", "this.details = details || {};"
            
            if ($content -ne $fixedContent) {
                Set-Content -Path $file -Value $fixedContent
                $message = "  - Fixed ApiError constructor to handle optional details in $file"
                Write-Host $message
                $message | Out-File $logFile -Append
            }
        }
        
        # Add missing error codes
        $errorCodePattern = "export\s+enum\s+ApiErrorCode\s*\{([^}]*)\}"
        if ($content -match $errorCodePattern) {
            $errorCodes = $matches[1]
            
            $additionalCodes = @(
                "UNEXPECTED_ERROR = 'UNEXPECTED_ERROR'",
                "NETWORK_ERROR = 'NETWORK_ERROR'",
                "CLIENT_ERROR = 'CLIENT_ERROR'",
                "TOO_MANY_REQUESTS = 'TOO_MANY_REQUESTS'",
                "GATEWAY_TIMEOUT = 'GATEWAY_TIMEOUT'"
            )
            
            $missingCodes = @()
            
            foreach ($code in $additionalCodes) {
                if (-not ($errorCodes -match [regex]::Escape($code))) {
                    $missingCodes += $code
                }
            }
            
            if ($missingCodes.Count -gt 0) {
                $codeAddition = "`n  " + ($missingCodes -join ",`n  ") + ","
                $fixedContent = $content -replace "export\s+enum\s+ApiErrorCode\s*\{([^}]*)\}", "export enum ApiErrorCode {`$1$codeAddition`n}"
                
                if ($content -ne $fixedContent) {
                    Set-Content -Path $file -Value $fixedContent
                    $message = "  - Added missing error codes in $file"
                    Write-Host $message
                    $message | Out-File $logFile -Append
                }
            }
            
            # Also add to HttpStatusCode enum if needed
            $httpStatusPattern = "export\s+enum\s+HttpStatusCode\s*\{([^}]*)\}"
            if ($content -match $httpStatusPattern) {
                $httpStatuses = $matches[1]
                
                $additionalStatuses = @(
                    "TOO_MANY_REQUESTS = 429",
                    "GATEWAY_TIMEOUT = 504"
                )
                
                $missingStatuses = @()
                
                foreach ($status in $additionalStatuses) {
                    if (-not ($httpStatuses -match [regex]::Escape($status))) {
                        $missingStatuses += $status
                    }
                }
                
                if ($missingStatuses.Count -gt 0) {
                    $statusAddition = "`n  " + ($missingStatuses -join ",`n  ") + ","
                    $fixedContent = $fixedContent -replace "export\s+enum\s+HttpStatusCode\s*\{([^}]*)\}", "export enum HttpStatusCode {`$1$statusAddition`n}"
                    
                    if ($content -ne $fixedContent) {
                        Set-Content -Path $file -Value $fixedContent
                        $message = "  - Added missing HTTP status codes in $file"
                        Write-Host $message
                        $message | Out-File $logFile -Append
                    }
                }
            }
        }
    }
    else {
        $message = "  - File not found: $file"
        Write-Host $message
        $message | Out-File $logFile -Append
    }
}

# Fix BookingContext for TimeSlot undefined issue
$bookingFiles = @(
    "$root/services/booking.ts"
)

foreach ($file in $bookingFiles) {
    if (Test-Path $file) {
        Write-Host "Fixing booking service in: $file"
        $content = Get-Content $file -Raw
        
        # Fix the undefined TimeSlot issue
        $timeslotPattern = "recommendations\.push\(availableOnly\[position\]\)"
        $fixedContent = $content -replace $timeslotPattern, "if (availableOnly[position]) { recommendations.push(availableOnly[position]) }"
        
        if ($content -ne $fixedContent) {
            Set-Content -Path $file -Value $fixedContent
            $message = "  - Fixed TimeSlot undefined check in $file"
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

Write-Host "Component prop types fixes completed! See $logFile for details." 