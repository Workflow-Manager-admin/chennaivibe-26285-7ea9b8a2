#!/bin/bash
cd /home/kavia/workspace/code-generation/chennaivibe-26285-7ea9b8a2/chennai_vibe_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

