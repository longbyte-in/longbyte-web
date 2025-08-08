#!/bin/bash

echo "🚀 Deploying Longbyte website to GitHub Pages..."

# Build the project
echo "📦 Building project..."
npm run build

# Initialize git in dist folder if not exists
cd dist
if [ ! -d ".git" ]; then
    git init
    git remote add origin https://github.com/longbyte-in/longbyte-web.git
fi

# Add all files and commit
git add .
git commit -m "Deploy: $(date)"

# Force push to gh-pages branch
echo "🌐 Deploying to GitHub Pages..."
git push -f origin main:gh-pages

echo "✅ Deployment complete! Your site will be available shortly at https://longbyte.in"

cd ..
