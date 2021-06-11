const mongoose = require("mongoose")

// Enter your mongodb database URI
mongoose.connect("< your mongodb database url >", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
}, (err)=>{
  if(err){
    console.log(err)
  }else{
    console.log("Connection with database established.")
  }
})
