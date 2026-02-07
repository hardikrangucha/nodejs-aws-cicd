#!/bin/bash
# set -e

# cd /home/ec2-user/node-app

echo "Starting app at $(date)" > app.log
npm start >> app.log 2>&1 &