const fs = require('fs')
var rates = require('./rates')

fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }

  const lines = data.split(/\r?\n/);


  // print all lines




  let o2 = rates.getOxygenRating(lines);
  let co2 = rates.getCarbonDioxideRating(lines);
  console.log(o2)
  let lifeSupportRating = o2 * co2;
  console.log(lifeSupportRating)

})