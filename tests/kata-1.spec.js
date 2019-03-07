import assert from 'assert'
import chai from 'chai'
import { kata1 } from '../src/kata-1'

describe('kata-1', function () {
  it('should throw an error when not integer is provided', function () {
    chai.expect(() => kata1('')).to.throw(Error, '"number" is not an integer')
  })

  it('should return 76642 when 46672 is provided', function () {
    assert.strictEqual(kata1(46672), 76642)
  })

  it('should return 6111111 when 1111116 is provided', function () {
    assert.strictEqual(kata1(1111116), 6111111)
  })

  it('should return 654321 when 143256 is provided', function () {
    assert.strictEqual(kata1(143256), 654321)
  })

  it('should return 333333 when 333333 is provided', function () {
    assert.strictEqual(kata1(333333), 333333)
  })

  it('should return 999332220 when 923902932 is provided', function () {
    assert.strictEqual(kata1(923902932), 999332220)
  })

  it('should return 0 when 0 is provided', function () {
    assert.strictEqual(kata1(0), 0)
  })

  it('should return -54321 when -12345 is provided', function () {
    assert.strictEqual(kata1(-12345), -54321)
  })
})
