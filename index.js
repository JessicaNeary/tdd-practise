// converts inputed number to roman numeral
module.exports = function convert (number) {
  let numeral = ''

  const fives = Math.floor(number / 5)
  let tens = Math.floor(number / 10)
  let hundreds = Math.floor(number / 100)
  const remainder = number % 5
  // console.log('fives:',fives,'tens:', tens, 'remainder:', remainder)
  if (hundreds) {
    numeral += 'C'
    tens -= 10
  }
  if (tens) {
    if (tens === 9) {
      numeral += 'XC'
    }
    else if (tens >= 5) {
      numeral += 'L'
      tens -= 5
    }
    if (tens <= 3) {
      numeral += 'X'.repeat(tens)
    }
    else if (tens === 4) {
      numeral += 'XL'
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
