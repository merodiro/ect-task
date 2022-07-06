import { deepCopy } from './deep-copy'
import { describe, it, expect } from 'vitest'

describe.concurrent('deepCopy', () => {
  it('works with simple object', () => {
    const obj = {
      str: 'test',
      num: 1,
      bool: false,
      nul: null,
      arr: [1, 2, 3],
      und: undefined,
      nested: {
        a: 'test',
      },
    }
    const copy = deepCopy(obj)

    // deep eq
    expect(obj).toEqual(copy)
    // shallow eq
    expect(obj).not.toBe(copy)
  })

  it('works with date', () => {
    const obj = { dt: new Date() }
    const copy = deepCopy(obj)

    // deep eq
    expect(obj).toEqual(copy)
    // shallow eq
    expect(obj).not.toBe(copy)

    expect(copy.dt).toBeInstanceOf(Date)
  })

  it('works with infinity', () => {
    const obj = { inf: Infinity }
    const copy = deepCopy(obj)

    // deep eq
    expect(obj).toEqual(copy)
    // shallow eq
    expect(obj).not.toBe(copy)
  })

  it('works with regex', () => {
    const obj = { re: /.*/ }
    const copy = deepCopy(obj)

    // deep eq
    expect(obj).toEqual(copy)
    // shallow eq
    expect(obj).not.toBe(copy)
  })
})
