const router = require('express').Router()
const Workout = require('../models/app.js')

// CREATE / POST
router.post('/api/workouts', ({body}, response) => {
    Workout.create(body)
    .then((result) => {
        response.json(result)
    })
    .catch( err => {
        response.status(400).json(err)
    })
})

// READ / GET WORKOUTS
router.get('/api/workouts', (req, response) => {
    Workout.find({})
    .sort({date: -1})``
    .then((result) => {
        result.forEach((workout,index) => {
            let total = 0
            workout.exercises.forEach((exercise) => {
                total += exercise.duration
            })
            result[index].totalDuration = total
            console.log(`workout: ${workout}. duration: ${total}`)
        })
        response.json(result)
    })
    .catch((err) => {
        response.status(400).json(err)
    })
})

// READ / GET RANGE
router.get('/api/workouts/range', (req, response) => {
    Workout.find({})
    .sort({date: -1})
    .then((result) => {
        response.json(result)
    })
    .catch((err) => {
        response.status(400).json(err)
    })
})

// UPDATE / PUT
router.put('/api/workouts/:id', (req,response) => {
    Workout.updateOne({_id: req.params.id}, {
        $push: {exercises:req.body}
    })
    .then((result) => {
        response.json(result)
    })
    .catch((err) => {
        response.status(400).json(err)
    })
})

// DELETE

module.exports = router