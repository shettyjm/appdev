#!/bin/bash

args="$@"

args="$@ -p 8081 -H 0.0.0.0"

file=/data/db.json
if [ -f $file ]; then
    echo "Found db.json, trying to open"
    args="$args db.json"
fi

file=/data/file.js
if [ -f $file ]; then
    echo "Found file.js seed file, trying to open"
    args="$args file.js"
fi
echo 'server args ' $args
json-server $args 
