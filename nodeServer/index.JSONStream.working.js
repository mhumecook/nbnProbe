var express = require("express");
var app = express();
var fs = require('fs');
var readline = require('readline');
var stream = require('stream');
var JSONStream = require('JSONStream');


// A single endpoint for this server so far: and that is
// for the performance data in the file
app.get("/performance", (req, res, next) => {
	try {
		var jsonwriter = JSONStream.stringify();
		var performanceFileContentsStream = 
			fs.createReadStream('/home/pi/wifiPerformance/speedtest.txt');

		// Pipe the JSON data to the file.
		jsonwriter.pipe(res);

		var rl = readline.createInterface(performanceFileContentsStream);

		var thisUpdown = {};

		// The response is going to be an array of upDowns
		// Start the response with an array opener

		rl.on('line', function(line) {
			if (line.includes('AEST')) {
				thisUpdown.date = line;
				};
			if (line.includes('Download')) {
				thisUpdown.down = line;
				};
			if (line.includes('Upload')) {
				thisUpdown.up = line;
				jsonwriter.write(thisUpdown);
				};
		});

		rl.on('close', function() {
			// Close the array on the response
			jsonwriter.end();
			console.log('===+++File Closed+++===');
		});

	} catch(error) {
		console.log('Error:', error.stack);
	}	
});

// Just start this motor
app.listen(3030, () => {
 console.log("Server running on port 3030");
});

