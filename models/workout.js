//   I should also be able to track the name, type, weight, sets, reps, and duration of exercise. 
// If the exercise is a cardio exercise, I should be able to track my distance traveled.

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: 'Exercise type required',
        },
        name: {
            type: String,
            trim: true,
            required: "Exercise name required"
        },
        duration: {
            type: Number,
            required: "Exercise duration required"
        },
        weight: {
            type: Number,
        },
        sets: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        distance: {
            type: Number
        }
    }]
}); 
