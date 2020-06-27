const mongoose = require('mongoose');
const BusSchema =new mongoose.Schema({
  busNo:{
    type:Number,
    required:true
  },
  totalSeat:{
    type:Number,
    required:true
  },

  bookedSeat:{
    type:Number,
    required:true
  },
  from:{
    type:'string',
    required:true
  },
  to:{
    type:'string',
    required:true
  },
  arrivalTime:{
    type:String,
    required:true,
  },
  departureTime:{
    type:String,
    required:true,
  },
  fare:{
    type:Number,
    required:true
  }
})
// const Bus=mongoose.model('Bus',BusSchema);
// module.exports=Bus
module.exports=mongoose.model('Bus',BusSchema);
