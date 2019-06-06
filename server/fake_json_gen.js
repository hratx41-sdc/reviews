
const faker = require('faker');
const fs = require('fs');

fs.writeFileSync('fake.json', '[', (err) => {
  if (err) throw err;
  console.log('added to json file');
});

for (let i = 0; i < 10000000; i++) {
  const customerName = faker.name.findName();
  const starRating = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
  const date = faker.date.past();
  const reviewTitle = faker.lorem.sentence;
  const review = faker.lorem.paragraph;
  // const helpful = { yes: Math.floor(Math.random() * 100), no: Math.floor(Math.random() * 100) };
  let record = {
    uuid: faker.random.uuid(),
    reviews: [{
      customerName: customerName,
      starRating: starRating,
      date: date,
      reviewTitle: reviewTitle,
      review: review,
      helpful: { yes: Math.floor(Math.random() * 100), no: Math.floor(Math.random() * 100) }
    }]
  };
  let strRecord = '';
  if (i !== 9) {
    strRecord += (JSON.stringify(record) + ',');
  } else {
    strRecord += (JSON.stringify(record) + ']');
  }
  fs.appendFileSync('fake.json', strRecord, (err) => {
    if (err) throw err;
    console.log(i);
  });
}
