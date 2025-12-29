const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name:{
     type:String,
     require:true
    },
     message:{
     type:String,
     require:true
    },
     Email:{
     type:String,
     require:true
    },
    contact:{
         type:String,
      require:true
    },
    product:{
     type:String,
     require:true
    }
});

module.exports = mongoose.model("user", userSchema);