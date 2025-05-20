const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m'
};

console.log(`${colors.bright}${colors.blue}=== Starting Recovery Office Deployment Fix ===${colors.reset}\n`);

try {
  // Step 1: Build the project
  console.log(`${colors.yellow}Building project...${colors.reset}`);
  execSync('npm run build:netlify', { stdio: 'inherit' });
  
  // Step 2: Verify _headers file exists in build directory
  const headersPath = path.join(__dirname, 'build', '_headers');
  if (!fs.existsSync(headersPath)) {
    console.log(`${colors.yellow}Headers file not found, copying manually...${colors.reset}`);
    fs.copyFileSync(path.join(__dirname, 'public', '_headers'), headersPath);
  }
  
  // Step 3: Verify _redirects file exists in build directory
  const redirectsPath = path.join(__dirname, 'build', '_redirects');
  if (!fs.existsSync(redirectsPath)) {
    console.log(`${colors.yellow}Redirects file not found, copying manually...${colors.reset}`);
    fs.copyFileSync(path.join(__dirname, 'public', '_redirects'), redirectsPath);
  }
  
  // Step 4: Deploy to Netlify
  console.log(`${colors.yellow}Deploying to Netlify...${colors.reset}`);
  execSync('npx netlify deploy --prod', { stdio: 'inherit' });
  
  console.log(`\n${colors.bright}${colors.green}=== Deployment completed successfully! ===${colors.reset}`);
} catch (error) {
  console.error(`${colors.red}Deployment failed: ${error.message}${colors.reset}`);
  process.exit(1);
} 