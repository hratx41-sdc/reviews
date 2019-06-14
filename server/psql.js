const { Client } = require('pg');
// require('dotenv').config();

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: 'sdc',
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

client.connect();

const getReviewsByUuid = (uuid, cb) => {
  client.query('SELECT * FROM reviews WHERE uuid = $1;', [uuid], (err, results) => {
    if (err) {
      console.log(err);
      cb(err, null);
    } else {
      cb(null, results.rows);
    }
  });
};

const insertReview = (revw, callback) => {
  const queryStr = 'INSERT INTO reviews(uuid, "customerName", "starRating", "reviewTitle", review, "helpfulYes", "helpfulNo") VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *';
  const reviewData = [
    revw.uuid,
    revw.customerName,
    revw.starRating,
    revw.reviewTitle,
    revw.review,
    0,
    0
  ];
  client.query(queryStr, reviewData, (err, results) => {
    if (err) {
      console.log(err);
      callback(err);
    } else {
      callback(null, results);
    }
  });
};

const updateReview = (update, callback) => {
  const queryStr = `UPDATE reviews
    SET
      "starRating" = $2,
      "reviewTitle" = $3,
      "review" = $4,
      "date" = to_timestamp($5 / 1000.0)
    WHERE "rid" = $1;`;
  const updateData = [
    update.rid,
    update.starRating,
    update.reviewTitle,
    update.review,
    Date.now()
  ];
  client.query(queryStr, updateData, (err, results) => {
    if (err) {
      console.log(err);
      callback(err);
    } else {
      callback(null, results);
    }
  });
};

const deleteReview = (del, callback) => {
  const queryStr = `DELETE FROM reviews WHERE "rid" = $1;`;
  const deleteRid = [del];
  client.query(queryStr, deleteRid, (err, results) => {
    if (err) {
      console.log(err);
      callback(err);
    } else {
      callback(null, results);
    }
  });
};

module.exports = { getReviewsByUuid, insertReview, updateReview, deleteReview };
