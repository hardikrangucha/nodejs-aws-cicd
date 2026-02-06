#!/bin/bash
set -e

APP_DIR="/home/ec2-user/node-app"

echo "Fixing ownership..."
chown -R ec2-user:ec2-user $APP_DIR

echo "Removing old lock file..."
rm -f $APP_DIR/package-lock.json

echo "Installing dependencies as ec2-user..."
sudo -u ec2-user bash << EOF
cd $APP_DIR
npm install
EOF