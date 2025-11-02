#!/usr/bin/env node

/**
 * Script untuk verifikasi requirements submission
 * Usage: node scripts/verify-submission.js
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying Submission Requirements...\n');

const checks = {
  passed: [],
  failed: [],
  warnings: []
};

// Helper function
function checkFile(filePath, description) {
  const fullPath = path.join(process.cwd(), filePath);
  if (fs.existsSync(fullPath)) {
    checks.passed.push(`✅ ${description}`);
    return true;
  } else {
    checks.failed.push(`❌ ${description}`);
    return false;
  }
}

function checkDirectory(dirPath, description) {
  const fullPath = path.join(process.cwd(), dirPath);
  if (fs.existsSync(fullPath) && fs.statSync(fullPath).isDirectory()) {
    checks.passed.push(`✅ ${description}`);
    return true;
  } else {
    checks.failed.push(`❌ ${description}`);
    return false;
  }
}

function checkPackageJson() {
  const packagePath = path.join(process.cwd(), 'package.json');
  if (!fs.existsSync(packagePath)) {
    checks.failed.push('❌ package.json not found');
    return;
  }

  const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  
  // Check dependencies
  const requiredDeps = [
    '@reduxjs/toolkit',
    '@tanstack/react-query',
    'prop-types',
    'react',
    'react-redux'
  ];

  requiredDeps.forEach(dep => {
    if (pkg.dependencies && pkg.dependencies[dep]) {
      checks.passed.push(`✅ Dependency: ${dep}`);
    } else {
      checks.failed.push(`❌ Missing dependency: ${dep}`);
    }
  });

  // Check scripts
  const requiredScripts = ['test', 'build', 'e2e', 'lint'];
  requiredScripts.forEach(script => {
    if (pkg.scripts && pkg.scripts[script]) {
      checks.passed.push(`✅ Script: ${script}`);
    } else {
      checks.failed.push(`❌ Missing script: ${script}`);
    }
  });
}

function checkTestFiles() {
  const testDir = path.join(process.cwd(), 'src/__tests__');
  if (!fs.existsSync(testDir)) {
    checks.failed.push('❌ Test directory not found');
    return;
  }

  const testFiles = fs.readdirSync(testDir).filter(f => f.endsWith('.test.js'));
  if (testFiles.length >= 6) {
    checks.passed.push(`✅ Test files: ${testFiles.length} files found`);
  } else {
    checks.warnings.push(`⚠️  Only ${testFiles.length} test files (expected 6+)`);
  }
}

function checkScreenshots() {
  const screenshotDir = path.join(process.cwd(), 'screenshot');
  if (!fs.existsSync(screenshotDir)) {
    checks.warnings.push('⚠️  Screenshot directory not found (will be needed for submission)');
    return;
  }

  const screenshots = fs.readdirSync(screenshotDir);
  const pngJpg = screenshots.filter(f => f.endsWith('.png') || f.endsWith('.jpg') || f.endsWith('.jpeg'));
  const pdf = screenshots.filter(f => f.endsWith('.pdf'));

  if (pngJpg.length >= 2) {
    checks.passed.push(`✅ Screenshots: ${pngJpg.length} PNG/JPG files`);
  } else {
    checks.warnings.push(`⚠️  Only ${pngJpg.length} PNG/JPG screenshots (need 2+)`);
  }

  if (pdf.length > 0) {
    checks.warnings.push(`⚠️  Found ${pdf.length} PDF files (Dicoding requires PNG/JPG!)`);
  }
}

function checkGitHubActions() {
  const workflowPath = path.join(process.cwd(), '.github/workflows/ci.yml');
  if (!fs.existsSync(workflowPath)) {
    checks.failed.push('❌ GitHub Actions workflow not found');
    return;
  }

  const content = fs.readFileSync(workflowPath, 'utf8');
  
  if (content.includes('npm test')) {
    checks.passed.push('✅ CI includes: npm test');
  } else {
    checks.failed.push('❌ CI missing: npm test');
  }

  if (content.includes('npm run build')) {
    checks.passed.push('✅ CI includes: npm run build');
  } else {
    checks.failed.push('❌ CI missing: npm run build');
  }

  if (content.includes('npm run e2e')) {
    checks.passed.push('✅ CI includes: npm run e2e');
  } else {
    checks.warnings.push('⚠️  CI missing: npm run e2e (optional but recommended)');
  }
}

function checkVercelConfig() {
  const vercelPath = path.join(process.cwd(), 'vercel.json');
  if (fs.existsSync(vercelPath)) {
    checks.passed.push('✅ Vercel configuration found');
  } else {
    checks.warnings.push('⚠️  vercel.json not found (optional but helpful)');
  }
}

// Run all checks
console.log('📦 Checking Project Structure...\n');
checkFile('package.json', 'package.json exists');
checkFile('README.md', 'README.md exists');
checkDirectory('src', 'src directory exists');
checkDirectory('public', 'public directory exists');

console.log('\n📚 Checking Dependencies & Scripts...\n');
checkPackageJson();

console.log('\n🧪 Checking Tests...\n');
checkTestFiles();
checkDirectory('cypress', 'Cypress directory exists');
checkFile('cypress.config.js', 'Cypress config exists');

console.log('\n⚙️  Checking CI/CD...\n');
checkGitHubActions();

console.log('\n🚀 Checking Deployment...\n');
checkVercelConfig();

console.log('\n📸 Checking Screenshots...\n');
checkScreenshots();

// Print summary
console.log('\n' + '='.repeat(60));
console.log('📊 VERIFICATION SUMMARY');
console.log('='.repeat(60) + '\n');

if (checks.passed.length > 0) {
  console.log('✅ PASSED CHECKS:\n');
  checks.passed.forEach(check => console.log(`   ${check}`));
  console.log('');
}

if (checks.warnings.length > 0) {
  console.log('⚠️  WARNINGS:\n');
  checks.warnings.forEach(check => console.log(`   ${check}`));
  console.log('');
}

if (checks.failed.length > 0) {
  console.log('❌ FAILED CHECKS:\n');
  checks.failed.forEach(check => console.log(`   ${check}`));
  console.log('');
}

// Final verdict
console.log('='.repeat(60));
if (checks.failed.length === 0) {
  console.log('🎉 PROJECT READY FOR SUBMISSION!');
  console.log('');
  console.log('📋 Next steps:');
  console.log('   1. Make repository PUBLIC on GitHub');
  console.log('   2. Setup branch protection');
  console.log('   3. Create PR and take screenshots');
  console.log('   4. Deploy to Vercel');
  console.log('   5. Submit to Dicoding');
  console.log('');
  console.log('📖 See QUICK_START_GUIDE.md for detailed instructions');
} else {
  console.log('⚠️  SOME ISSUES NEED TO BE FIXED');
  console.log('');
  console.log('Please fix the failed checks above before submission.');
}
console.log('='.repeat(60) + '\n');

// Exit code
process.exit(checks.failed.length > 0 ? 1 : 0);
