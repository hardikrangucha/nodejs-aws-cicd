#!/bin/bash
cd /home/ec2-user/node-app
nohup npm start > app.log 2>&1 &