#!/bin/bash
PID=$(pgrep -f "node app.js")

if [ -n "$PID" ]; then
  kill -9 $PID
fi