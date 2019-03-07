const checkArgs = (number) => {
  if (!Number.isInteger(number)) {
    throw new Error('"number" is not an integer')
  }
}

const splitNumberIntoDigits = (number) => {
  const arr = []
  let n = Math.abs(number)

  while (n > 0) {
    arr.unshift(n % 10)
    n = Math.floor(n / 10)
  }

  return arr
}

const sortDigits = (digits) => {
  return digits.sort().reverse()
}

const joinDigitsInNumber = (digits) => {
  return digits.reduce((result, digit) => result * 10 + digit, 0)
}

export function kata1 (number) {
  let digits
  let sortedDigits
  let jointNumber

  checkArgs(number)

  digits = splitNumberIntoDigits(number)
  sortedDigits = sortDigits(digits)
  jointNumber = joinDigitsInNumber(sortedDigits)

  return number < 0 ? -jointNumber : jointNumber
}
