// imports and dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// schema
var PlantsSchema = new Schema({
    status: { type: String, lowercase:true },
    date_harvested: { type: Date, default: null },
});