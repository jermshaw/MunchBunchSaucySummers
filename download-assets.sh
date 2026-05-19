#!/bin/bash
# Run this script once to download the Figma illustration assets.
# These URLs expire in ~7 days from when they were generated.
# If they've expired, re-generate them via Figma MCP.

mkdir -p public

echo "Downloading header illustration..."
curl -o public/header.png "https://www.figma.com/api/mcp/asset/a494b2b9-b35a-4b37-94b6-88dd80c540d1"

echo "Downloading Saucy Summers logo..."
curl -o public/logo.png "https://www.figma.com/api/mcp/asset/ffc4400b-21ef-4fed-95a8-cb32d0126e19"

echo "Done! Images saved to public/"
