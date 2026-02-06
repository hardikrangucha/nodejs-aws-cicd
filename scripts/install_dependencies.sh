#!/bin/bash
set -e

APP_DIR="/opt/node-app"

chown -R ec2-user:ec2-user $APP_DIR

sudo -u ec2-user bash << EOF
cd $APP_DIR
rm -f package-lock.json
npm install
EOF