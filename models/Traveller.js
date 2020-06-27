const mongoose = require('mongoose');
const TravellerSchema =new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  age:{
    type:Number,
    required:true
  },

  gender:{
    type:String,
    required:true
  },
  busid:{
    type:Number,
    required:true
  }

})
// const Bus=mongoose.model('Bus',BusSchema);
// module.exports=Bus
module.exports=mongoose.model('Traveller',TravellerSchema);
