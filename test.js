var assert = require('assert');
  const fs = require('fs')
var rates = require('./rates')

describe('rates', function() {
  describe('getOxygenGeneratorRating()', function() {
    it('should 101111 (23) from test input', function() {
      fs.readFile('text-input.txt', 'utf8', (err, data) => {
      if (err) {
        console.error(err)
        return
      }

      const lines = data.split(/\r?\n/);


      // print all lines




      let o2 = rates.getOxygenRating(lines);
      assert.equal(o2, 23)

    })
    });
  });

    describe('getCarboDioxideRating()', function() {
    it('should 01010 (10) from test input', function() {
      fs.readFile('text-input.txt', 'utf8', (err, data) => {
      if (err) {
        console.error(err)
        return
      }

      const lines = data.split(/\r?\n/);


      // print all lines




      let o2 = rates.getCarbonDioxideRating(lines);
      assert.equal(o2, 10)

    })
    });
  });
});