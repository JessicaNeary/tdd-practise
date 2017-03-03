var assert = require('assert')

var convert = require('./index')

describe('convert()', function () {
  it('should return the correct value for numbers 1 through 3', function () {
    var numbers = [1, 2, 3]
    var expected = ['X', 'XX', 'XXX']
    var actual = numbers.map(function (number) {
      return convert(number)
    })
    assert.equal(actual, expected)
  })
})
