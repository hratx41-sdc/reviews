const express = require('express');

const app = express();
const port = 3001;
const cors = require('cors');
const bodyParser = require('body-parser');
const faker = require('faker');
const db = require('./fakedb.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('dist'));
app.use(cors());

// the colon symbolizes that whatever's after it is a parameter
app.get('/api/reviews/:uuid', (req, res) => {
  db.getReviewsByUuid(req.params.uuid, (err, data) => {
    if (err) {
      console.log('There was an error running app.get', err);
      res.status(400).end();
    } else {
      console.log(data);
      res.send(data);
    }
  });
});

app.get('/api/reviews/insert', (req, res) => {
  let data = [];
  for (let i = 0; i < 9999999; i++) {
    let customerName = faker.name.findName();
    let starRating = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    let date = faker.date.past();
    let reviewTitle = String
    let review = String
    let helpful = { yes: Math.floor(Math.random() * 100), no: Math.floor(Math.random() * 100) }
  }
  db.save();
});

// app.post((req, res) => res.sent('app.post posted to the database'))

app.listen(port, () => console.log(`Listening on port ${port}!`));
