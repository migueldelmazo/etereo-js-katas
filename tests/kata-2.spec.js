import assert from 'assert'
import chai from 'chai'
import { kata2 } from '../src/kata-2'

describe('kata-2', function () {
  const obj1 = {
    p1: 'a',
    p2: {
      p3: 'b',
      p4: {
        p5: {
          p6: 'c'
        }
      }
    },
    p7: null
  }

  it('should throw an error when invalid object is provided', function () {
    chai.expect(() => kata2('')).to.throw(Error, '"obj" is not valid object')
  })

  it('should throw an error when invalid path is provided', function () {
    chai.expect(() => kata2(obj1, null, null)).to.throw(Error, '"path" is not a valid string or undefined')
  })

  it('accessor curried function with invalid path should throw an error', function () {
    const accessor = kata2(obj1, 'noPath')
    chai.expect(() => accessor(/* invalid path */)).to.throw(Error, '"path" is not a valid string')
  })

  it('accessor p1 should return "a"', () => {
    assert.strictEqual(kata2(obj1, null, 'p1'), 'a')
  })

  it('accessor p2.p2 should return "b"', function () {
    assert.strictEqual(kata2(obj1, null, 'p2.p3'), 'b')
  })

  it('accessor p3.p5 should return default ("default")', function () {
    assert.strictEqual(kata2(obj1, 'default', 'p3.p5'), 'default')
  })

  it('accessor p1.p5 should return default (null)', function () {
    assert.strictEqual(kata2(obj1, null, 'p1.p5'), null)
  })

  it('accessor p1.p6 should return default (null)', function () {
    assert.strictEqual(kata2(obj1, null, 'p1.p6'), null)
  })

  it('accessor p1.p2.p3.p5.p6 should return default (null)', function () {
    assert.strictEqual(kata2(obj1, null, 'p1.p2.p3.p5.p6'), null)
  })

  it('accessor p2.p4.p5.p6 should return "c"', function () {
    assert.strictEqual(kata2(obj1, null, 'p2.p4.p5.p6'), 'c')
  })

  it('accessor p7.p8 should return default "null"', function () {
    assert.strictEqual(kata2(obj1, null, 'p7.p8'), null)
  })

  it('accessor without path should return a function', function () {
    assert.strictEqual(typeof kata2(obj1, 'noPath'), 'function')
  })

  it('accessor curried function with path p1 should return "a"', function () {
    const accessor = kata2(obj1, 'noPath')
    assert.strictEqual(accessor('p1'), 'a')
  })

  it('accessor curried function with path p2.p4.p5.p6 should return "b"', function () {
    const accessor = kata2(obj1, 'noPath')
    assert.strictEqual(accessor('p2.p4.p5.p6'), 'c')
  })

  it('accessor curried function with path p1.p6 should return default ("noPath")', function () {
    const accessor = kata2(obj1, 'noPath')
    assert.strictEqual(accessor('p1.p6'), 'noPath')
  })
})
