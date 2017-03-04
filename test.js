var assert = require('assert')

var convert = require('./index')

describe('convert() numbers under 10', function () {
  it('should return the correct value for numbers 1 through 5', function () {
    var numbers = [1, 2, 3]
    var expected = ['I', 'II', 'III']
    var actual = numbers.map(function (number) {
      return convert(number)
    })
    assert.deepEqual(actual, expected)
  })
  it('should return the correct value for 4 and 5', function () {
    assert.deepEqual(convert(4), 'IV')
    assert.deepEqual(convert(5), 'V')
  })
  it('should return the correct value for 6 through 9', function () {
    var numbers = [6, 7, 8, 9]
    var expected = ['VI', 'VII', 'VIII', 'IX']
    var actual = numbers.map(function (number) {
      return convert(number)
    })
    assert.deepEqual(actual, expected)
  })
})
describe('convert() numbers 10 to 19', function () {
  it('should return the correct values for 10 through 13', function () {
    var numbers = [10, 11, 12, 13]
    var expected = ['X', 'XI', 'XII', 'XIII']
    var actual = numbers.map(function (number) {
      return convert(number)
    })
    assert.deepEqual(actual, expected)
  })
  it('should return the correct values for 14 and 15', function () {
    assert.equal(convert(14), 'XIV')
    assert.equal(convert(15), 'XV')
  })
  it('should return the correct values for 17 and 19', function () {
    assert.equal(convert(17), 'XVII')
    assert.equal(convert(19), 'XIX')
  })
})
