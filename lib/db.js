// vars
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// schemas
var entrySchema = new Schema({
  field1: { 
    type: String 
  }, 
  field2: {
    type: String 
  }, 
  date: { 
    type: Date, 
    default: Date.now 
  }
});

// exports
module.exports.models = {
  entry: mongoose.model('entry', entrySchema)  
}