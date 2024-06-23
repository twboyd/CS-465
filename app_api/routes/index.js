const express = require("express"); // Express app
const router = express.Router(); // Router Logic
const jwt = require('express-jwt');
const auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload'
});

const authController = require('../controllers/authentication');

// This is where we import the controllers we will route
const tripsController = require('../controllers/trips');

// define route for our trips endpoint
router 
    .route('/login')
    .post(authController.login);

router
    .route('/register')
    .post(authController.register);

router
    .route('/trips')
    .get(tripsController.tripsList)
    .post(auth,tripsController.tripsAddTrip); // Post method adds a trip

// GET Method routes tripsFindByCode - requires parameter
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(auth,tripsController.tripsUpdateTrip);

module.exports = router;