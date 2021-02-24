const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now()
  },

  exercise: [{
    name: {
      type: String,
      trim: true,
      required: "Whats the exercise called?"
    },
    type: {
      type: String,
      trim: true,
      required: "What type of exercise is it?"
    },
    duration: {
      type: Number,
      trim: true,
      require: "What is the duration of the exercise?"
    }, 
    distance: {
      type: Number,
      trim: true
    }, 
    weight: {
      type: Number,
      trim: true
    }, 
    reps: {
      type: Number,
      trim: true
    },  
    sets: {
      type: Number,
      trim: true
    }
  }]
   
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;