function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

// utility function
var randomElement = function(array){
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

// random review generator
const opening = ['just', '', '', '', '', 'ask me how i', 'completely', 'nearly', 'productively', 'efficiently', 'last night i', 'the president', 'that wizard', 'a ninja', 'a seedy old man'];
const verbs = ['downloaded', 'interfaced', 'deployed', 'developed', 'built', 'invented', 'experienced', 'navigated', 'aided', 'enjoyed', 'engineered', 'installed', 'debugged', 'delegated', 'automated', 'formulated', 'systematized', 'overhauled', 'computed'];
const objects = ['my', 'your', 'the', 'a', 'my', 'an entire', 'this', 'that', 'the', 'the big', 'a new form of'];
const nouns = ['cat', 'koolaid', 'system', 'city', 'worm', 'cloud', 'potato', 'money', 'way of life', 'belief system', 'security system', 'bad decision', 'future', 'life', 'pony', 'mind'];
const firstNames = ['Jane', 'Bob', 'Tim', 'Mike', 'Sarah', 'Maria', 'Gladys', 'Jerry', 'Terry', 'Jacob', 'Linden', 'David', 'Elane', 'Chris', 'John', 'Ashley', 'Dale', 'Hazel', 'Kate', 'Ken', 'Jim', 'Barbara', 'Beth', 'Liz', 'Eric', 'Jenny', 'Pam', 'Adam', 'Marcus', 'Kristin', 'Tiffany', 'Shayna', 'Nadia', 'Clayton', 'Alfred', 'Shannon', 'Michael', 'Shane', 'Hunter', 'Apollo', 'Justin', 'Angela', 'Gina', 'Wayne', 'Bruce', 'Eve', 'Eva', 'Tonya']
const lastNames = ['Smith', 'Reynolds', 'Spence', 'Taylor', 'Kim', 'Lee', 'Sanchez', 'White', 'Brown', 'Jefferson', 'Arnold', 'Tyler', 'Washington', 'Pitt', 'Hill', 'Wright', 'Wayne', 'Kelly', 'Greene', 'Williams', 'Williamson', 'Fredman', 'Patel', 'Lliamson', 'Davidson', 'Stewart', 'Coachman', 'Caruso', 'Kinsey', 'Crolley', 'Osborn', 'Davella', 'Millburn', 'Nicodemus', 'Rogan', 'Ferriss', 'Paulson', 'Parish']
const months = ['1', '2', '3', '4', '5'];
const days = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28'];



const randomMessage = function(){
  return [randomElement(opening), randomElement(verbs), randomElement(objects), randomElement(nouns)].join(' ');
};

const randomName = function(){
  return randomElement(firstNames) + ' ' + randomElement(lastNames);
};

const randomDate = function(){
  return randomElement(months) + '/' + randomElement(days) + '/' + '2019';
};

const randomTitle = function() {
  return randomElement(verbs) + ' ' + randomElement(objects);
}

const dbFiller = () => {
  let productArray = [];
  for(let i = 1; i < 101; i++) {
    let newObject = {
      UUID: i,
      reviews: []
    }
    for(let j = 1; j < 21; j++) {
      let reviewObject = {
        customerName: randomName(),
        starRating: getRandomInt(1, 4),
        date: randomDate(), 
        reviewTitle: randomTitle(),
        review: randomMessage(), 
        helpful: {yes: 0, no: 0}
      }
      newObject.reviews.push(reviewObject);
    }
    productArray.push(newObject);
  }
  return productArray;
}
  
const dbObject = dbFiller();


module.exports = {dbObject}