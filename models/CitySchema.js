var mongoose = require('mongoose');
var schema1 = mongoose.Schema;
var restaurantDetails = new schema1({
  "id" : String,
  "name" : String,
   "url":String,
  "address":String,

   "thumb":String,
    "address":String,
   "cuisines":String,
   "average_cost_for_two":String,
   "Comments":String

})
module.exports = mongoose.model('saveinfo',restaurantDetails);
