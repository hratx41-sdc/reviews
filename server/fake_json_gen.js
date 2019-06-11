
const faker = require('faker');
const fs = require('fs');

fs.writeFileSync('fake.json', '[', (err) => {
  if (err) throw err;
  console.log('added to json file');
});

let r = 0;

for (let i = 1; i < 10000001; i++) {
  const revNum = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
  let strRecord = '';
  for (let j = 0; j < revNum; j++) {
    r++;
    const customerName = faker.name.findName();
    const starRating = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    const date = faker.date.past();
    const reviewTitle = faker.lorem.sentence();
    const review = faker.lorem.paragraph();
    // const helpful = { yes: Math.floor(Math.random() * 100), no: Math.floor(Math.random() * 100) };
    const record = {
      uuid: i,
      rid: r,
      customerName: customerName,
      starRating: starRating,
      date: date,
      reviewTitle: reviewTitle,
      review: review,
      helpfulYes: Math.floor(Math.random() * 100),
      helpfulNo: Math.floor(Math.random() * 100),
    };
    if (j === (revNum - 1) && i === 10000000) {
      strRecord += JSON.stringify(record);
    } else {
      strRecord += (JSON.stringify(record) + ',');
    }
  }
  // if (i === 10) {
  //   console.log(i);
  //   console.log(strRecord.toString());
  //   strRecord = strRecord.slice(0, -1);
  //   console.log(strRecord);
  // }
  fs.appendFileSync('fake.json', strRecord, (err) => {
    if (err) throw err;
    console.log(i);
  });
  if (i === 10000000) {
    console.log('done');
  }
}

fs.appendFileSync('fake.json', ']', (err) => {
  if (err) throw err;
  console.log('done');
});
