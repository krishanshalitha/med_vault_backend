const express=require('express')
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    updateWorkout,
    deleteWorkout
}=require('../controllers/medicineController')

const router= express.Router()

// get all workout
router.get('/',getWorkouts)

//get single workout
router.get('/:id', getWorkout)
 
// POST a new workout
router.post('/', createWorkout)

// DELETE a workout
router.delete('/:id', deleteWorkout)

// UPDATE a workout
router.patch('/:id', updateWorkout)

module.exports=router