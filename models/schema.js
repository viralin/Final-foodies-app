var mongoose = require('mongoose');
var schema1 = mongoose.Schema;
var saveheadlines = new schema1({
"id" : String,
"name" : String,
"country_id" : String,
"country_name" : String,
"is_state" : String,
"state_id" : String,
"state_name":String,
"state_code":String
})
module.exports = mongoose.model('savenews',saveheadlines);
