// imports and dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// schema
var PlantsSchema = new Schema({
    species: { type: String, lowercase:true },
    serial_number: { type: Number, default: '' },
    coordinate_x: { type: Number, default: '' },
    coordinate_y: { type: Number, default: '' },
    date_planted: { type: Date, default: null },
    description: { type: String, default: '' },
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    project_partner: { type: Schema.Types.ObjectId, ref: 'User' },
    DENR_ID: { type: String, default: ''}
});