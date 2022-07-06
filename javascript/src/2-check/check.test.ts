import { check } from './check'
import { describe, it, expect } from 'vitest'

describe.concurrent('check', () => {
  it('works with simple object', () => {
    const obj1 = { a: 17, b: { c: 'Test', d: null } }
    const obj2 = { a: 17, b: { c: 'Test' } }
    const obj3 = { a: 17, b: null }

    expect(check(obj1, obj2)).toBe(true)
    expect(check(obj2, obj1)).toBe(true)
    expect(check(obj1, obj3)).toBe(false)
  })

  it('works with arrays', () => {
    const obj1 = { arr: [1, 2, 3] }
    const obj2 = { arr: [1, 2, 3] }
    const obj3 = { arr: [4, 5, 6] }

    expect(check(obj1, obj2)).toBe(true)
    expect(check(obj2, obj1)).toBe(true)
    expect(check(obj1, obj3)).toBe(false)
  })

  it('works with date', () => {
    const obj1 = { dt: new Date(2020, 1, 1) }
    const obj2 = { dt: new Date(2020, 1, 1) }
    const obj3 = { dt: new Date(2022, 2, 2) }

    expect(check(obj1, obj2)).toBe(true)
    expect(check(obj2, obj1)).toBe(true)
    expect(check(obj1, obj3)).toBe(false)
  })
})
