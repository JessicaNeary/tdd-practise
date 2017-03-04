// converts inputed number to roman numeral
module.exports = function convert (number) {
  let numeral = ''

  const fives = Math.floor(number / 5)
  const tens = Math.floor(number / 10)
  const remainder = number % 5
  // console.log('fives:',fives,'tens:', tens, 'remainder:', remainder)
  if (tens) {
    if (tens <= 3) {
      numeral += 'X'.repeat(tens)
    }
    else if (tens === 4) {
      numeral += 'XL'
    }
    else {
      numeral += 'L'
    }
  }
  if (fives % 2) {
    if (remainder === 4) {
      numeral += 'IX'
    }
    else {numeral += 'V'}
  }
  else if (remainder === 4) {
    numeral += 'IV'
  }
  if (remainder <= 3) {
    numeral += 'I'.repeat(remainder)
  }
  return numeral
}
