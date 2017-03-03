var test = require('ava')

var convert = require('./index')

test('numbers 1 through 3', function (t) {
  var numbers = [1, 2, 3]
  var expected = ['X', 'XX', 'XXX']
  var actual = numbers.map(function (number) {
    return convert(number)
  })
  t.is(actual, expected)
})
