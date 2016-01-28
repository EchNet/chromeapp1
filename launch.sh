#!/bin/bash

set -e
set -x

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

nohup "$CHROME" --load-and-launch-app="$PWD" &
