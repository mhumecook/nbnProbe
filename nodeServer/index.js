const http = require('http');
const url = require('url');
var express = require("express");
var app = express();
var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

// A single endpoint for this server so far: and that is
// for the performance data in the file

// Living on the Edge?  Adding CORS for this server ...

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	  next();
	  });

// Optional query parameter on the command line for dateFrom

app.get("/api/performance", (req, res, next) => {
	try {
		const queryObject = url.parse(req.url,true).query;
		// There will be a space in the parameter, which I want to replace with a T for Timestamp
		// Eeewww - strings are nasty things to have to deal with
		var performanceFileContentsStream = 
			fs.createReadStream('/home/pi/wifiPerformance/speedtest.txt');

		var rl = readline.createInterface(performanceFileContentsStream);

		var allLines = [];
		var thisUpDown = {};

		rl.on('line', function(line) {
			thisUpDown = JSON.parse(line);
			let thisLineDateString = thisUpDown.time.replace(/\s/g,'T');
			let thisLineDate = Date.parse(thisUpDown.time.replace(/\s/g,'T'));
			if (queryObject.dateFrom) {
				let dateStringFromFilter = queryObject.dateFrom.replace(/\s/g,'T').replace(/['"]+/g,'');
				let dateFromFilter = Date.parse(dateStringFromFilter);
				if (thisLineDate >= dateFromFilter) {
					allLines.push(thisUpDown);
				}

			} else {
				allLines.push(thisUpDown);
			};
		});

		rl.on('close', function() {
			//A little contrived, Mark, but you ARE a novice ...
			//res.write('[');
			//res.write(allLines.toString());
			//res.write(']');
			//res.end();
			res.json(allLines);
		});

	} catch(error) {
		console.log('Error:', error.stack);
	}	
});

// Just start this motor
app.listen(3030, () => {
 console.log("Server running on port 3030");
});

