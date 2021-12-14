


exports.getGammaRate =  function (ratings) {
  let cardinality = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  ratings.forEach((line) => {
    let bits = line.split("");
    bits.forEach((bit, index) => {
      if (Number(bit) === 0) {
        cardinality[index]--;
      } else {
        cardinality[index]++;
      }
    })
  });
  let gammaRate = cardinality.map(rate => rate >= 0 ? 1 : 0);
  let gammaString = '';
  gammaRate.forEach((bit) => {
    gammaString += bit.toString();
  });
  console.log('gamma string', gammaString)
  return gammaString;
}

exports.getEpsilonRate = function (ratings) {
  let cardinality = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  ratings.forEach((line) => {
    let bits = line.split("");
    bits.forEach((bit, index) => {
      if (Number(bit) === 0) {
        cardinality[index]--;
      } else {
        cardinality[index]++;
      }
    })
  });
  let epsilonRate = cardinality.map(rate => rate >= 0 ? 0 : 1);
  let epsilonString = '';
  epsilonRate.forEach((bit) => {
    epsilonString += bit.toString();
  });
  console.log('epsilon string', epsilonString)
  return epsilonString;
}

exports.getOxygenRating = function (ratings) {
  let bitIndex = 0;
  let filteredRatings = ratings;
  while (filteredRatings.length > 1) {
    let gammaRate = this.getGammaRate(filteredRatings);
  console.log(filteredRatings)
    console.log(gammaRate)
    filteredRatings = filteredRatings.filter(rating => {
      let ratingBit = Number(rating.split('')[bitIndex])
      let gammaRateBit = Number(gammaRate[bitIndex]);
      const match = ratingBit === gammaRateBit
      return match;
    })
    bitIndex++
  }
  console.log(filteredRatings)
  return parseInt(filteredRatings[0], 2);
}

exports.getCarbonDioxideRating = function (ratings) {
  let bitIndex = 0;
  let filteredRatings = ratings;
  while (filteredRatings.length > 1) {
    let epsilonRate = this.getEpsilonRate(filteredRatings);
    filteredRatings = filteredRatings.filter(rating => {
      let ratingBit = Number(rating.split('')[bitIndex])
      let epsilonBit = Number(epsilonRate[bitIndex]);
      const match = ratingBit === epsilonBit
      return match;
    })
    bitIndex++
  }
  return parseInt(filteredRatings[0], 2);
}