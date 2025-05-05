# Script to fix empty import paths in botanical components
$rootDir = "recovery-office"
$logFile = "botanical-import-fixes.log"

# Clear or create log file
if (Test-Path $logFile) {
    Clear-Content $logFile
} else {
    New-Item -Path $logFile -ItemType File | Out-Null
}

Add-Content -Path $logFile -Value "Starting botanical import fixes at $(Get-Date)"

# Function to determine the relative path to utils
function Get-RelativePathToUtils {
    param (
        [string]$filePath
    )
    
    $fileDir = Split-Path -Parent $filePath
    $relativePath = ($fileDir -replace [regex]::Escape("$rootDir\src"), "").Replace("\", "/")
    $depth = ($relativePath -split "/").Length
    $pathPrefix = "../" * $depth
    
    return "${pathPrefix}utils"
}

# Function to fix empty imports in a file
function Fix-EmptyImports {
    param (
        [string]$filePath
    )
    
    $content = Get-Content -Path $filePath -Raw
    $originalContent = $content
    $fileModified = $false
    
    # Fix getFibonacciByIndex imports
    if ($content -match "import \{ getFibonacciByIndex[^}]*\} from '';") {
        $relPath = Get-RelativePathToUtils -filePath $filePath
        $content = $content -replace "import \{ getFibonacciByIndex([^}]*)\} from '';", "import { getFibonacciByIndex`$1} from '$relPath/fibonacci';"
        $fileModified = $true
        Add-Content -Path $logFile -Value "Fixed getFibonacciByIndex import in $filePath"
    }
    
    # Fix sacred geometry imports
    if ($content -match "import \{ (PHI|FIBONACCI|GOLDEN_RATIO|[^}]*)\} from '';") {
        $relPath = Get-RelativePathToUtils -filePath $filePath
        $content = $content -replace "import \{ (PHI|FIBONACCI|GOLDEN_RATIO|[^}]*)\} from '';", "import { `$1} from '$relPath/sacred-geometry';"
        $fileModified = $true
        Add-Content -Path $logFile -Value "Fixed sacred geometry import in $filePath"
    }
    
    # Save file if modified
    if ($fileModified) {
        Set-Content -Path $filePath -Value $content
        return $true
    }
    
    return $false
}

# Process botanical components directory
$botanicalDir = "$rootDir\src\design-system\components\botanical"
$utilsDir = "$rootDir\src\utils"

# Ensure utils directory exists
if (-not (Test-Path $utilsDir)) {
    New-Item -Path $utilsDir -ItemType Directory | Out-Null
    Add-Content -Path $logFile -Value "Created utils directory at $utilsDir"
}

# Create fibonacci.ts if needed
$fibonacciFile = "$utilsDir\fibonacci.ts"
if (-not (Test-Path $fibonacciFile)) {
    $fibonacciContent = @"
// Utility functions for Fibonacci calculations
export const getFibonacciByIndex = (index: number): number => {
  if (index <= 0) return 0;
  if (index === 1) return 1;
  
  let a = 0;
  let b = 1;
  let temp;
  
  for (let i = 2; i <= index; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  
  return b;
};

export const getFibonacciSequence = (length: number): number[] => {
  const sequence: number[] = [];
  for (let i = 0; i < length; i++) {
    sequence.push(getFibonacciByIndex(i));
  }
  return sequence;
};
"@
    Set-Content -Path $fibonacciFile -Value $fibonacciContent
    Add-Content -Path $logFile -Value "Created fibonacci.ts utility file"
}

# Process files in the botanical directory
$files = Get-ChildItem -Path $botanicalDir -Recurse -File -Filter "*.ts*"
$fixedCount = 0

foreach ($file in $files) {
    $isFixed = Fix-EmptyImports -filePath $file.FullName
    if ($isFixed) {
        $fixedCount++
    }
}

Add-Content -Path $logFile -Value "Fixed imports in $fixedCount files"
Add-Content -Path $logFile -Value "Completed botanical import fixes at $(Get-Date)"

Write-Host "Fixed $fixedCount files with empty imports. See $logFile for details." 