var mongoose = require("mongoose");

var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/manga';
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on("error", function(err) {
  console.log("Mongo Connection Error:", err);
});

MongoDB.on("open", function() {
  console.log("Mongo Connection Open");
});

module.exports = MongoDB;
