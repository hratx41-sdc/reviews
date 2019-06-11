
const faker = require('faker');
const createCsvStringifier = require('csv-writer').createObjectCsvStringifier;
const fs = require('fs');

faker.seed(123);

const csvStringifier = createCsvStringifier({
  header: [
    { id: 'uuid', title: 'UUID' },
  ],
});

for (let i = 9000000; i < 10000001; i++) {
  // const helpful = { yes: Math.floor(Math.random() * 100), no: Math.floor(Math.random() * 100) };
  let record = [{
    uuid: i,
  }];
  fs.appendFileSync('testrecords.csv', csvStringifier.stringifyRecords(record), (err) => {
    if (err) throw err;
    console.log(i);
  });
}
