
const faker = require('faker');
const fs = require('fs');

fs.writeFileSync('fake.json', '[', (err) => {
  if (err) throw err;
  console.log('added to json file');
});

let r = 1;

for (let i = 1; i < 11; i++) {
  const revNum = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
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
    let strRecord = '';
    if (i !== 10 && j !== (revNum - 1)) {
      strRecord += (JSON.stringify(record) + ',');
    }
    fs.appendFileSync('fake.json', strRecord, (err) => {
      if (err) throw err;
      console.log(i);
    });
  }
  if (i === 10000000) {
    console.log('done');
  }
}

fs.appendFileSync('fake.json', ']', (err) => {
  if (err) throw err;
  console.log('done');
});
