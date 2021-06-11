// Change the name of file according to your collection name

const mongoose = require("mongoose");

const modelSchema = new mongoose.Schema(
  // Add what are the keys of your database
  {
    key:{
      type: String,
      unique: true,
      required: true
    },
    key:{
      type: String,
      unique: true,
      required: true
    },
    key:{
      type: String,
      unique: true,
      required: true
    },
  }
)

// Change the 'Model' name according to your database model
module.exports = mongoose.model('Model', modelSchema);
