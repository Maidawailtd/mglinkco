#!/bin/bash
# MGLink Connect Deployment Troubleshooting Script
# This script helps identify and fix common deployment issues

echo "🔍 Starting MGLink Connect deployment troubleshooting..."

# Create .npmrc file with legacy-peer-deps
echo "📝 Creating .npmrc file with legacy-peer-deps=true..."
echo "legacy-peer-deps=true" > .npmrc
echo "✅ .npmrc file created successfully"

# Update package.json to fix date-fns version
echo "🔄 Updating date-fns version in package.json..."
if command -v jq &> /dev/null; then
  # If jq is available, use it to update package.json
  jq '.dependencies."date-fns" = "^3.0.0"' package.json > package.json.tmp && mv package.json.tmp package.json
  echo "✅ Updated date-fns version using jq"
else
  echo "⚠️ jq not found. Please manually update date-fns version to ^3.0.0 in package.json"
fi

# Clean node_modules and package-lock.json
echo "🧹 Cleaning node_modules and package-lock.json..."
rm -rf node_modules package-lock.json
echo "✅ Cleaned node_modules and package-lock.json"

# Install dependencies with legacy-peer-deps
echo "📦 Installing dependencies with legacy-peer-deps..."
npm install --legacy-peer-deps
echo "✅ Dependencies installed successfully"

# Check for Next.js build errors
echo "🏗️ Running Next.js build to check for errors..."
npm run build
if [ $? -eq 0 ]; then
  echo "✅ Build completed successfully"
else
  echo "❌ Build failed. Please check the error messages above"
  exit 1
fi

# Create or update vercel.json
echo "📝 Creating/updating vercel.json with correct configuration..."
cat > vercel.json << EOL
{
  "version": 2,
  "buildCommand": "next build",
  "devCommand": "next dev",
  "installCommand": "npm install --legacy-peer-deps",
  "framework": "nextjs",
  "outputDirectory": ".next",
  "regions": ["all"],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        }
      ]
    }
  ]
}
EOL
echo "✅ vercel.json created/updated successfully"

# Check for environment variables
echo "🔐 Checking for required environment variables..."
if [ ! -f .env.local ]; then
  echo "⚠️ .env.local file not found. Creating a template..."
  cat > .env.local << EOL
# Required environment variables for MGLink Connect
# Replace these placeholder values with your actual values

# Authentication (if applicable)
# AUTH_SECRET=your-auth-secret

# API URLs (if applicable)
# NEXT_PUBLIC_API_URL=your-api-url

# Add any other required environment variables here
EOL
  echo "✅ .env.local template created. Please update with actual values"
else
  echo "✅ .env.local file exists"
fi

echo "🚀 Deployment troubleshooting completed!"
echo "If you're deploying to Vercel, make sure to:"
echo "1. Set the install command to 'npm install --legacy-peer-deps' in the project settings"
echo "2. Add any required environment variables in the Vercel dashboard"
echo "3. Ensure you're using Node.js 18.x or higher for the deployment"
echo ""
echo "If you're still experiencing issues, please check the Vercel deployment logs for specific error messages."

