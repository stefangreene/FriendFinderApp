module.exports = function apiRoutes(app) {
var fs = require("fs");
var path = require("path");
var friends = require("./../data/friends.js");

app.get("/api/friends", function(req, res) {
    return res.json(friends);
    
});
console.log(friends);


app.post("/api/friends", function (req, res) {
  var sumTotal;
  var newArray = [];
  var newFriend = req.body;
    
  for (var i = 0; i < friends.length; i++) {
      sumTotal = 0;
      for (var j = 0; j < newFriend.scores.length; j++) {
        sumTotal += Math.abs(friends[i].scores[j] - newFriend.scores[j]);
      }
      newArray.push(sumTotal);
  } 

  var match = newArray.indexOf(Math.min(...newArray));

  friends.push(newFriend);
 

  fs.readFile(path.join(__dirname, "../data/friends.json"), "utf8", function (err, data) {
      if (err) throw err;
     
    var json = JSON.parse(data);
      json.push(newFriend);

  fs.writeFile(path.join(__dirname, "../data/friends.json"), JSON.stringify(json, null, 2), function (err) {
          if (err) throw err;
  
      });
  });

  res.json(friends[match]);
  console.log(friends[match]);
});
}