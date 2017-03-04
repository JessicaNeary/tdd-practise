var assert = require('assert')

var convert = require('./index')

describe('convert() 1 to 5', function () {
  it('should return the correct value for numbers 1 through 5', function () {
    var numbers = [1, 2, 3]
    var expected = ['I', 'II', 'III']
    var actual = numbers.map(function (number) {
      return convert(number)
    })
    assert.deepEqual(actual, expected)
  })
  it('should return the correct value for 4', function () {
    assert.deepEqual(convert(4), 'IV')
  })
  it('should return the correct value for 5', function () {
    assert.deepEqual(convert(5), 'V')
  })
})
describe('convert() 6 to 9', function () {
  it('should return the correct value for 6 through 9', function () {
    var numbers = [6, 7, 8, 9]
    var expected = ['VI', 'VII', 'VIII', 'IX']
    var actual = numbers.map(function (number) {
      return convert(number)
    })
    assert.deepEqual(actual, expected)
  })
})
describe('convert() 10 to 15', function () {
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
})
