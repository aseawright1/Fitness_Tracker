const mongoose = require('mongoose')
const {Schema} = mongoose

const workoutSchema = new Schema({
    day: { type: Date, default: Date.now },
    exercises: { type: Array },
    totalDuration: { type: Number, default: 0 }
})

const Workout = mongoost.model('Workout', workoutSchema)

module.exports = Workout