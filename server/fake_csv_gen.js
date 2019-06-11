
const faker = require('faker');
const createCsvStringifier = require('csv-writer').createObjectCsvStringifier;
const fs = require('fs');

faker.seed(123);

const csvStringifier = createCsvStringifier({
  append: true,
  path: '../fake.csv',
  header: [
    { id: 'uuid', title: 'UUID' },
    { id: 'reviews', title: 'reviews' },
  ],
});

fs.writeFileSync('fake.csv', csvStringifier.getHeaderString(), (err) => {
  if (err) throw err;
  console.log('file header added');
});

for (let i = 1; i < 10000001; i++) {
  const customerName = faker.name.findName();
  const starRating = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
  const date = faker.date.past();
  const reviewTitle = faker.lorem.sentence();
  const review = faker.lorem.paragraph();
  // const helpful = { yes: Math.floor(Math.random() * 100), no: Math.floor(Math.random() * 100) };
  let record = [{
    uuid: i,
    reviews: JSON.stringify([{
      customerName: customerName,
      starRating: starRating,
      date: date,
      reviewTitle: reviewTitle,
      review: review,
      helpful: { yes: Math.floor(Math.random() * 100), no: Math.floor(Math.random() * 100) },
    }]),
  }];
  fs.appendFileSync('fake.csv', csvStringifier.stringifyRecords(record), (err) => {
    if (err) throw err;
    console.log(i);
  });
}
