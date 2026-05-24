#!/bin/bash

# Ensure script stops on any unhandled error
set -e

# Navigate to the directory containing this script
cd "$(dirname "$0")"

echo "=========================================================="
echo " Starting Application Boot Sequence (Hostinger & Production) "
echo "=========================================================="

# 1. Ensure production environment variable is set
export NODE_ENV=production

# 2. Install production dependencies if missing
if [ ! -d "node_modules" ]; then
  echo "[-] node_modules dir not found. Installing production packages..."
  npm install --omit=dev
else
  echo "[✓] node_modules already exists. Skipping npm install."
fi

# 3. Ensure the production build exists
if [ ! -d "dist" ] || [ ! -f "dist/server.cjs" ]; then
  echo "[-] Production build missing or incomplete. Compiling now..."
  npm run build
else
  echo "[✓] Production build found in dist/. Skipping compilation."
fi

# 4. Start the Express Node.js Server
echo "=========================================================="
echo " Running server: node dist/server.cjs "
echo "=========================================================="
exec node dist/server.cjs
