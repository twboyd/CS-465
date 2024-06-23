const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // register model
const Model = mongoose.model('trips');

const getUser = (req, res, callback) => {
    console.log(">>getUser");
  
    if (req.auth && req.auth.email) {
      User.findOne({ email: req.auth.email }).exec((err, user) => {
        if (!user) {
          return res.status(404).json({ message: "ABC User not found" });
        } 
  
        else if (err) {
          console.log(err);
          return res.status(404).json(err);
        }
        
        callback(req, res, user.name);
      });
    } 
    else {
      return res.status(404).json({ message: "BTH User not found" });
    }
  };

// GET: /trips - lists all the trips
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsList = async(req, res) => {
    const q = await Model
        .find({}) // No filter, return all records
        .exec();

    // Uncomment the following line to show results of query on the console
    // console.log(q);

    if (!q) {
        return res
            .status(404)
            .json({ message: "No trips found" });
    } else {
        return res
            .status(200)
            .json(q);
    }
};

const tripsFindByCode = async(req, res) => {
    const q = await Model
        .find({ "code": req.params.tripCode }) // return single record
        .exec();

    // Uncomment the following line to show results of query on the console
    // console.log(q);

    if (!q) {
        return res
            .status(404)
            .json({ message: "Trip not found" });
    } else {
        return res
            .status(200)
            .json(q);
    }
};

// POST: /trips - adds a new trip
const tripsAddTrip = async (req, res) => {
    getUser(req, res,
    (req, res) => {
    Trip
    .create({
    code: req.body.code,
   name: req.body.name,
   length: req.body.length,
   start: req.body.start,
   resort: req.body.resort,
   perPerson: req.body.perPerson,
   image: req.body.image,
   description: req.body.description
    },
    (err, trip) => {
    if (err) {
    return res
    .status(400) // bad request
   .json(err);
    } else {
    return res
    .status(201) // created
   .json(trip);
    }
    });
    }
    );
   } 

// PUT: /trips/:tripCode - Adds a new Trip
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsUpdateTrip = async (req, res) => {
    getUser(req, res,
    (req, res) => {
    Trip
    .findOneAndUpdate({'code': req.params.tripCode },{
    code: req.body.code,
   name: req.body.name,
   length: req.body.length,
   start: req.body.start,
   resort: req.body.resort,
   perPerson: req.body.perPerson,
   image: req.body.image,
   description: req.body.description
    }, { new: true })
    .then(trip => {
    if (!trip) {
    return res
    .status(404)
   .send({
    message: "Trip not found with code" + req.params.tripCode
    });
    }
   res.send(trip);
    }).catch(err => {
    if (err.kind === 'ObjectId') {
    return res
    .status(404)
   .send({
    message: "Trip not found with code" + req.params.tripCode
    });
    }
   return res
    .status(500) // server error
   .json(err);
    });
    }
    );
   } 
    

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip
};