const mongoose = require('mongoose');
const {Schema} = mongoose;

const DataSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    bas:{
        type: String,
        required: true
    },
    
    lta:{
        type: String,
        required: true
    },
    hra:{
        type: String,
        required: true
    },
    fa:{
        type: String,
        required: true
    },
    inv:{
        type: String,
        required: true
    },
    rent:{
        type: String,
        required: true
    },
    cityType:{
        type: String,
        required: true
    },
    med:{
        type: String,
        required: true
    },
    appHra:{
        type: String,
        required: true
    },
    taxInc:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default : Date.now
    },
  });

  const Data = mongoose.model('data',DataSchema);
  Data.createIndexes();

  module.exports = Data;