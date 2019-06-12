const faker = require('faker');
const createCsvStringifier = require('csv-writer').createObjectCsvStringifier;
const fs = require('fs');

faker.seed(123);

const csvStringifier = createCsvStringifier({
  header: [
    { id: 'uuid', title: 'UUID' },
    { id: 'customerName', title: 'customerName' },
    { id: 'starRating', title: 'starRating' },
    { id: 'reviewTitle', title: 'reviewTitle' },
    { id: 'review', title: 'review' }
  ],
});

fs.writeFileSync('posttest.csv', csvStringifier.getHeaderString(), (err) => {
  if (err) throw err;
  console.log('file header added');
});

for (let i = 9000000; i < 10000001; i++) {
  const customerName = faker.name.findName();
  const starRating = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
  const reviewTitle = faker.lorem.sentence();
  const review = faker.lorem.paragraph();
  // const helpful = { yes: Math.floor(Math.random() * 100), no: Math.floor(Math.random() * 100) };
  let record = [{
    uuid: i,
    customerName: customerName,
    starRating: starRating,
    reviewTitle: reviewTitle,
    review: review
  }];
  fs.appendFileSync('posttest.csv', csvStringifier.stringifyRecords(record), (err) => {
    if (err) throw err;
    console.log(i);
  });
}