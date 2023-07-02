const mongoose = require("mongoose");

const Startegy = mongoose.model(
  "Startegy",
  new mongoose.Schema({
    Time: {
      startTime: {type: String, required: true},
      endTime: {type: String, required: true},
    },
    Price: {
      entry: {type: String, required: true},
      exit: {type: String, required: true},
      stopLoss: {type: String, required: true},
      takeProfit: {type: String, required: true}
    },
    otm: {type: Number, required: true}, 
    qty: {type: Number, required: true}, // lot sizes
    instrument: {type: String, required: true}, //nifty, banknifty, finnifty...
    entry: {type: Number, required: true}, // 0-waiting, 1-running, 2-exited, 3-error, 4-waiting
    user:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  })
);

module.exports = Startegy;
