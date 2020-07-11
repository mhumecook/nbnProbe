#!/bin/bash

# This script to test the performance of the wifi on a regular basis and
# write the results to a text file.  I plan to have the text file picked
# up by a web server and delivered via REST to whatever caller wants to 
# use it.

HOME=/home/pi/wifiPerformance
cd $HOME

# The function to do the speed test, get the output, and write to a file
function executeSpeedTest() {
	local DATEnTIME=`date +%F\ %H:%M:%S`
	local SPEEDTEST_RESULT=`speedtest | grep 'load.*bit'`
	local DOWN_SPEED=`echo $SPEEDTEST_RESULT | awk '{print $2}'`
	local UP_SPEED=`echo $SPEEDTEST_RESULT | awk '{print $5}'`
	echo \{\"time\"\:\ \"$DATEnTIME\", \"download\"\: \"$DOWN_SPEED\",\"upload\"\: \"$UP_SPEED\"\} >> speedtest.txt
}

echo Starting speed test loooop ...

while true
do
	executeSpeedTest
	sleep 600
done
