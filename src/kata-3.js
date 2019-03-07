const checkArgs = (min, max) => {
  if (!Number.isInteger(min)) {
    throw new Error('"min" is not an integer')
  }
  if (!Number.isInteger(max)) {
    throw new Error('"max" is not an integer')
  }
  if (min < 1) {
    throw new Error('"min" is not greater than or equal to 1')
  }
  if (max < 1) {
    throw new Error('"max" is not greater than or equal to 1')
  }
  if (min > max) {
    throw new Error('"min" is not less than or equal to "max"')
  }
}

const getNumberDivisors = (number) => {
  const divisors = []

  for (let idx = 1; idx <= number; idx += 1) {
    if (number % idx === 0) {
      divisors.push(idx)
    }
  }

  return divisors
}

const getNumbersSquare = (numbers) => {
  return numbers.map((number) => Math.pow(number, 2))
}

const getNumbersSum = (numbers) => {
  return numbers.reduce((total, number) => total + number, 0)
}

const getNumberSqrt = (number) => Math.sqrt(number)

export function kata3 (min, max) {
  const result = []
  let number
  let divisors
  let squares
  let sum

  checkArgs(min, max)
  let sqrt

  for (number = min; number <= max; number += 1) {
    divisors = getNumberDivisors(number)
    squares = getNumbersSquare(divisors)
    sum = getNumbersSum(squares)
    sqrt = getNumberSqrt(sum)
    if (Number.isInteger(sqrt)) {
      result.push([number, sum])
    }
  }

  return result
}
