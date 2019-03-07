import assert from 'assert'
import chai from 'chai'
import { kata3 } from '../src/kata-3'

describe('kata-3', function () {
  it('should throw an error when not integer min is provided', function () {
    chai.expect(() => kata3(1.1, 1)).to.throw(Error, '"min" is not an integer')
  })

  it('should throw an error when not integer max is provided', function () {
    chai.expect(() => kata3(1, 1.1)).to.throw(Error, '"max" is not an integer')
  })

  it('should throw an error when min is no greater than or equal to 1', function () {
    chai.expect(() => kata3(0, 1)).to.throw(Error, '"min" is not greater than or equal to 1')
  })

  it('should throw an error when max is no greater than or equal to 1', function () {
    chai.expect(() => kata3(1, 0)).to.throw(Error, '"max" is not greater than or equal to 1')
  })

  it('should throw an error when min is not less than or equal than max', function () {
    chai.expect(() => kata3(2, 1)).to.throw(Error, '"min" is not less than or equal to "max"')
  })

  it('n=1 m=250 should return valid values', () => {
    assert.deepStrictEqual(kata3(1, 250), [ [1, 1], [42, 2500], [246, 84100] ])
  })

  it('n=41 m=250 should return valid values', () => {
    assert.deepStrictEqual(kata3(41, 250), [ [42, 2500], [246, 84100] ])
  })

  it('n=10 m=42 should return valid values', () => {
    assert.deepStrictEqual(kata3(10, 42), [ [42, 2500] ])
  })
})
