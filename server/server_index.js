const express = require('express')
const app = express()
const port = 3001
const db = require('./db_index.js');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('dist'));
app.use(cors());

// the colon symbolizes that whatever's after it is a parameter
app.get('/api/reviews/:uuid', (req, res) => {
    db.getReviewsByUuid(req.params.uuid, (err, data)=> {
      if(err) {
        console.log('There was an error running app.get', err)
        res.status(400).end();
      } else {
        console.log(data);
        res.send(data)
      }
    }) 
  });

// app.post((req, res) => res.sent('app.post posted to the database'))

app.listen(port, () => console.log(`Listening on port ${port}!`))