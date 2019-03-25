var fs = require("fs");
var path = require("path");


var rawData = fs.readFileSync(path.join(__dirname, "friends.json"));
var friends = JSON.parse(rawData);


module.exports = friends;