
const mongoose = require('mongoose');
require('locus');

mongoose.Promise = global.Promise;
// const dbpass = require('dbpass.js')
// mongoose.connect('mongodb+srv://spence:drowssap@fashova-reviews-ha8kw.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true }); // mongodb://localhost/fetcher
// const { dbObject } = require('../reviews');
mongoose.connect('mongodb://localhost/fake', { useNewUrlParser: true });
// establish database connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('we are connected to Mongo database!');
});

const { Schema } = mongoose;
// the main object
const reviewsSchema = new Schema({
  uuid: Number,
  customerName: String,
  starRating: Number,
  date: String,
  reviewTitle: String,
  review: String,
  helpfulYes: Number,
  helpfulNo: Number,
}, { versionKey: false });

// let repoSchema = new Schema({
//   // TODO: your schema here!
//   id: {
//     type: Number,
//     unique: true
//   },
//   full_name: String,
//   owner: {
//     login: String
//   },
//   html_url: String,
//   forks: Number
// }, { versionKey: false)};

// let Repo = mongoose.model('Repo', repoSchema);

// a constructor that creates objects that go into the main object

// a function that generates 10 reviews per product
// could this function run outside of my data base, and then I just seed db with a csv?

const Review = mongoose.model('Review', reviewsSchema);

// THIS IS NOT A WORKING FUNCTION!!!!
const getReviewsByUuid = (uuid, callback) => {
  Review.find({ uuid: uuid }, (err, result) => {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log('Holy cow!  Your database is sending something to your server!');
      callback(null, result);
    }
  });
};


// THESE ARE FOR DE-SEEDING AND RE-SEEDING DB AS NEEDED DO NOT DELETE

// Review.deleteMany({}, (err) => console.log);

// Review.create(dbObject, (err) => {
//     if (err) {
//         console.log('Error seeding Reviews Database:');
//         console.log(err);
//     } else {
//         console.log('Successfully seeded Reviews Database!');
//     }
// });


module.exports = { db, getReviewsByUuid };
