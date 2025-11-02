#!/bin/bash

# Script untuk membuat branch demo untuk screenshot CI/CD
# Usage: npm run create-demo-branch

echo "🚀 Creating demo branch for screenshot..."
echo ""

# Check if we're on master branch
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "master" ]; then
    echo "⚠️  Warning: You're not on master branch!"
    echo "Current branch: $CURRENT_BRANCH"
    echo ""
    read -p "Do you want to switch to master first? (y/n) " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo "📍 Switching to master..."
        git checkout master
        git pull origin master
    fi
fi

# Create new branch
BRANCH_NAME="test/screenshot-demo-$(date +%Y%m%d-%H%M%S)"
echo "📝 Creating branch: $BRANCH_NAME"
git checkout -b "$BRANCH_NAME"

# Make a small change to trigger CI
echo "// Demo change for CI screenshot - $(date)" >> README.md
echo "✅ Added demo change to README.md"

# Commit
echo "💾 Committing changes..."
git add README.md
git commit -m "test: trigger CI for screenshot demo"

# Push
echo "📤 Pushing to GitHub..."
git push origin "$BRANCH_NAME"

echo ""
echo "✅ Branch created successfully!"
echo ""
echo "📋 NEXT STEPS:"
echo "1. Go to: https://github.com/rfahrozi/forums/pulls"
echo "2. Click 'New pull request'"
echo "3. Base: master ← Compare: $BRANCH_NAME"
echo "4. Create pull request"
echo "5. Wait for CI to complete"
echo "6. Take screenshots!"
echo ""
echo "📸 Screenshots needed:"
echo "   - ci_check_pass.png (from PR page showing ✅)"
echo "   - branch_protection.png (from Settings > Branches)"
echo ""
echo "🎉 Good luck!"
