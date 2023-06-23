const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/eco",{
   
}).then(()=>{
    console.log("conn succ");

}).catch((e)=>{
    console.log("faf");
})

