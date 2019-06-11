
const mongoose = require('mongoose');
// require('locus');
// require('dotenv').config();

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/sdc', { useNewUrlParser: true });
// establish database connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('we are connected to Mongo database!');
});

const { Schema } = mongoose;
// schema creation
const reviewsSchema = new Schema({
  uuid: Number,
  rid: Number,
  customerName: String,
  starRating: Number,
  date: String,
  reviewTitle: String,
  review: String,
  helpfulYes: Number,
  helpfulNo: Number,
}, { versionKey: false });

const Review = mongoose.model('Review', reviewsSchema);

const getReviewsByUuid = (uuid, callback) => {
  Review.find({ uuid: uuid }, (err, result) => {
    if (err) {
      console.log(err);
      throw err;
    } else {
      // console.log('Holy cow!  Your database is sending something to your server!');
      callback(null, result);
    }
  });
};

const insertReview = (revw, callback) => {
  Review.findOne().sort('-rid').exec((err, doc) => {
    if (err) {
      console.log(err);
    } else {
      let newRid = doc.rid;
      newRid++;
      const newRev = {
        uuid: revw.uuid,
        rid: newRid,
        customerName: revw.customerName,
        starRating: revw.starRating,
        date: new Date().toISOString(),
        reviewTitle: revw.reviewTitle,
        review: revw.review,
        helpfulYes: 0,
        helpfulNo: 0,
      };
      Review.create(newRev, (err) => {
        if (err) {
          callback(err);
        } else {
          callback(null);
        }
      });
    }
  });
};

const updateReview = (update, callback) => {
  Review.updateOne({ rid: parseInt(update.rid) },
    {
      starRating: parseInt(update.starRating),
      reviewTitle: update.reviewTitle,
      review: update.review,
      date: new Date().toISOString(),
    }, (err) => {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    });
};

const deleteReview = (del, callback) => {
  Review.deleteOne({ rid: del }, (err) => {
    if (err) {
      callback(err);
    } else {
      callback(null);
    }
  });
};


module.exports = { getReviewsByUuid, insertReview, updateReview, deleteReview };
