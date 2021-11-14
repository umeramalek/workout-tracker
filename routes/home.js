// require router
const router = require('express').Router();
// models 
const db = require('../models');

// to get all workouts 
router.get('/workouts', async(req,res) => {
    try {
        const workoutData = await db.Workout.aggregate([{
        $addFields: {totalDuration:{$sum: "$exercises.duration"}}
        }]);
        res.json(workoutData);
        console.log(workoutData);
    } catch (err) {
        res.json(err)
    }
})



module.exports = router;