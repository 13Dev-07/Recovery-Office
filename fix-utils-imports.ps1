# Script to fix incorrect utils imports
$root = "recovery-office/src"

# Create a log file to track changes
$logFile = "utils-imports-fixes.log"
"Utils imports fixes - $(Get-Date)" | Out-File $logFile

# Fix incorrect '../utils' imports in design-system components
$dirsToCheck = @(
    "$root/design-system/components/data-display",
    "$root/design-system/components/animation",
    "$root/design-system/components/booking",
    "$root/design-system/components/botanical",
    "$root/design-system/components/feedback",
    "$root/design-system/components/form",
    "$root/design-system/components/layout",
    "$root/design-system/components/typography",
    "$root/design-system/botanical",
    "$root/design-system/tokens"
)

foreach ($dir in $dirsToCheck) {
    Get-ChildItem -Path $dir -Filter "*.ts*" -Recurse | ForEach-Object {
        $file = $_.FullName
        Write-Host "Processing file: $file"
        $content = Get-Content $file -Raw
        
        # Determine correct relative path based on file location
        $relPath = ""
        if ($file -like "*src/design-system/components/*") {
            $relPath = "../../../utils"
        } elseif ($file -like "*src/design-system/*") {
            $relPath = "../../utils"
        }
        
        # Fix incorrect import paths
        $fixedContent = $content -replace "import\s*\{\s*([^}]*)\}\s*from\s*'[.]{2}/utils';", "import { `$1 } from '$relPath';"
        
        if ($content -ne $fixedContent) {
            Set-Content -Path $file -Value $fixedContent
            $message = "  - Fixed utils import path in $file"
            Write-Host $message
            $message | Out-File $logFile -Append
        }
    }
}

# Add utility functions folder and necessary files
$utilsDir = "$root/utils"
if (-not (Test-Path "$utilsDir/getFibonacciByIndex.ts")) {
    Write-Host "Adding utility function: getFibonacciByIndex.ts"
    
    $getFibonacciContent = @"
import { FIBONACCI } from '../constants/sacred-geometry';

/**
 * Get a Fibonacci number by index, with safety checks.
 * Returns the closest available Fibonacci number if index is out of bounds.
 * 
 * @param index - The index of the Fibonacci number to retrieve
 * @returns The Fibonacci number at the specified index
 */
export const getFibonacciByIndex = (index: number): number => {
  // Handle negative indices
  if (index < 0) return 0;
  
  // Handle indices that are too large
  const fibKeys = Object.keys(FIBONACCI).map(Number);
  const maxIndex = Math.max(...fibKeys);
  
  // If index is larger than our highest defined Fibonacci number, return the highest one
  if (index > maxIndex) {
    return FIBONACCI[maxIndex]; 
  }
  
  // Use the exact index if it exists as a key
  if (FIBONACCI[index] !== undefined) {
    return FIBONACCI[index];
  }
  
  // Otherwise find the closest lower index that exists
  const availableIndices = fibKeys.filter(i => i <= index).sort((a, b) => b - a);
  return FIBONACCI[availableIndices[0] || 1];
};

export default getFibonacciByIndex;
"@
    
    # Create the directory if it doesn't exist
    if (-not (Test-Path $utilsDir)) {
        New-Item -ItemType Directory -Path $utilsDir | Out-Null
    }
    
    # Write the file
    Set-Content -Path "$utilsDir/getFibonacciByIndex.ts" -Value $getFibonacciContent
    $message = "  - Created utility file: $utilsDir/getFibonacciByIndex.ts"
    Write-Host $message
    $message | Out-File $logFile -Append
}

# Update utils/index.ts to export the function
$utilsIndexPath = "$utilsDir/index.ts"
if (Test-Path $utilsIndexPath) {
    $indexContent = Get-Content $utilsIndexPath -Raw
    
    if (-not ($indexContent -match "export\s*\{\s*getFibonacciByIndex\s*\}")) {
        $newExport = "`nexport { getFibonacciByIndex } from './getFibonacciByIndex';"
        
        # Append to the existing file
        Add-Content -Path $utilsIndexPath -Value $newExport
        $message = "  - Updated utils/index.ts to export getFibonacciByIndex"
        Write-Host $message
        $message | Out-File $logFile -Append
    }
} else {
    # Create the index file if it doesn't exist
    $indexContent = @"
/**
 * Utility functions for the Recovery Office application
 */

export { getFibonacciByIndex } from './getFibonacciByIndex';
"@
    Set-Content -Path $utilsIndexPath -Value $indexContent
    $message = "  - Created utils/index.ts with export for getFibonacciByIndex"
    Write-Host $message
    $message | Out-File $logFile -Append
}

Write-Host "Utils imports fixes completed! See $logFile for details." 