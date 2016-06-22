var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var series = new Schema({
  name: {type: String},
  description: {type: String},
  chapter_layout: {type: Array},
  last_updated: {type: String},
  link_name: {type: String}
});

module.exports = mongoose.model("series", series);
