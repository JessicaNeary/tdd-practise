// converts inputed number to roman numeral
module.exports = function convert (number) {
  const places = [1000, 500, 100, 50, 10, 5, 1]
  const letters = ['M', 'D', 'C', 'L', 'X', 'V', 'I']
  let numeral = ''
  for (let i = 0; i < 7; i = i + 2) {
    let occurences = Math.floor(number / places[i])
    if (occurences === 9) {
      numeral += letters[i] + letters[i - 2]
    } else if (occurences >= 5) {
      numeral += letters[i - 1]
      numeral += letters[i].repeat(occurences - 5)
    }
    if (occurences === 4) {
      numeral += letters[i] + letters[i - 1]
    } else if (occurences <= 3) {
      numeral += letters[i].repeat(occurences)
    }
    number -= occurences * places[i]
  }
  return numeral
}
