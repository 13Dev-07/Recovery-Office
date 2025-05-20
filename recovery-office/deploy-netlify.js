/**
 * Simple deployment script for Netlify
 */

const { execSync } = require('child_process');

console.log('🌿 Recovery Office - Netlify Deployment Script');
console.log('============================================');

try {
  // Set environment variables
  process.env.DISABLE_ESLINT_PLUGIN = "true";
  process.env.CI = "false";
  process.env.TSC_COMPILE_ON_ERROR = "true";
  process.env.SKIP_TYPESCRIPT_CHECK = "true";
  process.env.EXTEND_ESLINT = "false";

  // Execute the build
  console.log('\n🚀 Building the project...');
  execSync('react-scripts build', { stdio: 'inherit' });
  
  console.log('\n🎉 Build completed successfully!');
  console.log('The website files are in the "build" directory.');
  console.log('\nTo deploy to Netlify, run:');
  console.log('  netlify deploy --prod --dir=build');
  
} catch (error) {
  console.error('\n❌ Build failed with error:', error.message);
  process.exit(1);
}

console.log('\n✨ Deployment preparation complete!'); 