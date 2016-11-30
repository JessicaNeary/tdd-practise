// Consolidating all the tests into one file is NOT normal practice!
// We're more interested in getting you used to making tests pass...
// so we didn't want you to have to deal with more than one test at a time
var test = require('ava')

var scores = require('./bowling')

test('no strikes or spares', function (t) {
	var frames = [
		[3, 4], [2, 3], [6, 0]
	]
	var expected = 18
	var actual = scores(frames)
	t.is(actual, expected)
})

test('spare only', function (t) {
	var frames = [
	    [1, 2], [6, 4], [5, 3]
	  ]
  var expected = 26
  var actual = scores(frames)
  t.is(actual, expected)
})

test('strike only', function (t) {
	var frames = [
	    [1, 2], [5, 2], [10, 0], [4, 2]
	  ]
  var expected = 32
  var actual = scores(frames)
  t.is(actual, expected)
})

test('mixture', function (t) {
	var frames = [
	    [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
	  ]
  var expected = 119
  var actual = scores(frames)
  t.is(actual, expected)
})

test('final ball', function (t){
	var frames = [
	[1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
	]
	var expected = 141
	var actual = scores(frames)
	t.is(actual, expected)
})
