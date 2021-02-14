//database schema for mongodb
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const logAuthSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required:true},
    password: {type: String, required:true}    
},{
    timestamps: true,
});

const logAuth = mongoose.model('logAuth', logAuthSchema);

module.exports = logAuth;
