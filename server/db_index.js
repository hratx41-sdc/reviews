//make fake data with a csv file and then use           https://docs.mongodb.com/manual/reference/program/mongoimport/  
//do not paste the entire connection url into your index.js file for db, because you'll have to paste in your username and password, which is insecure
//



const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/fetcher', {useNewUrlParser: true});


//establish database connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('we are connected to Mongo database!');
});

//the main object
let repoSchema = mongoose.Schema({
  repoName: String,
  repoUrl: String,
  starGazers: Number
});

//a constructor that creates objects that go into the main object

//a function that places the inner objects into the main object

//a function that generates 10 reviews per product

let Repo = mongoose.model('Repo', repoSchema);


  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  //I believe this should be some sort of db query
let save = (data, callback) => {
  let myRepos = [];
  for(let i = 0; i < data.length; i++) {
    let newObject = {
      repoName: data[i].name,
      repoUrl: data[i].html_url,
      starGazers: data[i].stargazers_count
    }
    myRepos.push(newObject);
  }
  
  Repo.insertMany(myRepos, (err) => {
    if(err) {
      console.log("There was an error inserting many");
      callback(err);
    } else {
      console.log("It worked!  You saved something to your gosh-darn database!")
      callback(null, "Successfully saved!")
    }
  })
}

module.exports = save;