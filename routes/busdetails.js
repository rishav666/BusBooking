const express = require('express');
const Bus = require('../models/Bus');



const newBus= new Bus({
   busNo:1,
   totalSeat:30,
   bookedSeat:15,
   from:"chennai",
   to:"delhi",
   arrivalTime:"12:00",
   departureTime:"04:00",
   fare:1200
});


newBus.save();
