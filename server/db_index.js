const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// const dbpass = require('dbpass.js')
mongoose.connect('ec2-54-173-235-60.compute-1.amazonaws.com', {useNewUrlParser: true});  // mongodb://localhost/fetcher
const {dbObject} = require('../reviews');



//establish database connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('we are connected to Mongo database!');
});

//the main object
let reviewsSchema = mongoose.Schema({
  UUID: Number,
  reviews: [{
    customerName: String,
    starRating: Number,
    date: String, 
    reviewTitle: String,
    review: String, 
    helpful: {yes: Number, no: Number}
  }] 
});

//a constructor that creates objects that go into the main object

//a function that generates 10 reviews per product
//could this function run outside of my data base, and then I just seed db with a csv?

let Review = mongoose.model('Review', reviewsSchema);

//THIS IS NOT A WORKING FUNCTION!!!!
const getReviewsByUuid = (uuid, callback) => {
  Review.find({UUID: uuid}, (err, result) => {
    if(err) {
      console.log(err);
      throw err;
    } else {
      console.log('Holy cow!  Your database is sending something to your server!');
      callback(null, result);
    }
  })
};


//THESE ARE FOR DE-SEEDING AND RE-SEEDING DB AS NEEDED DO NOT DELETE

// Review.deleteMany({}, (err) => console.log);

// Review.create(dbObject, (err) => {
//     if (err) {
//         console.log('Error seeding Reviews Database:');
//         console.log(err);
//     } else {
//         console.log('Successfully seeded Reviews Database!');
//     }
// }); 


console.log(Review);

module.exports = {db, getReviewsByUuid};