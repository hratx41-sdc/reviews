require('newrelic');
require('dotenv').config();
const cluster = require('cluster');
const cpuCount = require('os').cpus().length;
const express = require('express');

if (cluster.isMaster) {
  for (let i = 0; i < cpuCount; i += 1) {
    cluster.fork();
  }
} else {
  const app = express();
  const port = process.env.PORT || 3002;
  const cors = require('cors');
  const bodyParser = require('body-parser');
  // const db = require('./mongodb.js'); //mongoDB
  const db = require('./psql.js'); //PostgresSQL
  
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  
  app.use(express.static('dist'));
  app.use(cors());
  
  // the colon symbolizes that whatever's after it is a parameter
  app.get('/api/reviews/:uuid', (req, res) => {
    db.getReviewsByUuid(parseInt(req.params.uuid), (err, data) => {
      if (err) {
        console.log('There was an error running app.get', err);
        res.status(400).end();
      } else {
        res.status(200).send(data);
      }
    });
  });
  
  app.post('/api/reviews/', (req, res) => {
    const review = req.body;
    db.insertReview(review, (err) => {
      if (err) {
        console.log(err);
        res.status(500).end();
      } else {
        res.status(200).send('success');
      }
    });
  });
  
  app.put('/api/reviews/', (req, res) => {
    const review = req.body;
    db.updateReview(review, (err) => {
      if (err) {
        console.log(err);
        res.status(500).end();
      } else {
        res.status(200).send('success');
      }
    });
  });
  
  app.delete('/api/reviews/', (req, res) => {
    const review = parseInt(req.body.rid);
    db.deleteReview(review, (err) => {
      if (err) {
        console.log(err);
        res.status(500).end();
      } else {
        res.status(200).send('success');
      }
    });
  });
  
  app.listen(port, () => console.log(`Listening on port ${port}!`));

}
