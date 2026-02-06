#!/bin/bash

APP_DIR="/opt/node-app"

# Remove old app completely
rm -rf $APP_DIR

# Recreate directory
mkdir -p $APP_DIR

# Give ec2-user ownership
chown -R ec2-user:ec2-user $APP_DIR