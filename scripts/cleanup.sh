#!/bin/bash

APP_DIR="/home/ec2-user/node-app"

# Fix ownership
chown -R ec2-user:ec2-user $APP_DIR

# Remove package-lock if it exists (prevents EACCES)
rm -f $APP_DIR/package-lock.json