#!/bin/bash
set -euo pipefail

DOMAIN="oprdvolunteerabuse.org"
APP_DIR="/home/rswfire/www/rswfire.oprd"
BRANCH="main"

echo "🚀 Deploying $DOMAIN to server..."
echo "🔎 Branch: $BRANCH"
echo "📂 Directory: $APP_DIR"
echo ""

if [ ! -d "$APP_DIR" ]; then
    echo "❌ Error: Directory $APP_DIR does not exist"
    exit 1
fi

cd "$APP_DIR"

echo "📋 Current git status:"
git status --short
echo ""

echo "⬇️  Fetching latest changes..."
git fetch origin "$BRANCH"
git reset --hard "origin/$BRANCH"
echo ""

echo "🧹 Cleaning old build..."
[ -d "node_modules" ] && rm -rf node_modules
[ -d "out" ] && rm -rf out
echo ""

echo "📦 Installing dependencies..."
npm ci
npm i baseline-browser-mapping@latest -D
echo ""

echo "🔨 Building application..."
npm run build

if [ ! -d "out" ]; then
    echo "❌ Error: Build failed - no 'out' directory created"
    exit 1
fi

BUILD_SIZE=$(du -sh out | cut -f1)
echo "✅ Build successful - $BUILD_SIZE generated"
echo ""

# Optional SSR build
if [ -f "package.json" ] && grep -q "\"build:ssr\"" package.json; then
    echo "🔧 Running SSR build..."
    npm run build:ssr
    echo ""
fi

echo "✅ Deploy complete"
echo "📍 Commit: $(git rev-parse --short HEAD) ($(git log -1 --pretty=%B | head -n1))"
echo "⏱  Finished: $(date)"
