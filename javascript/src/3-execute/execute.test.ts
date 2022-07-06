import { execute } from './execute'
import { afterEach, describe, it, expect, vi } from 'vitest'

describe.concurrent('execute', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('works with given examples', () => {
    const spy = vi.spyOn(console, 'log').mockImplementation(() => {})

    execute('$logger("Sum:", $math.sum(a, b))', { a: 17, b: 3 })
    expect(spy).toHaveBeenCalledWith('Sum:', 20)

    execute('$logger("Mul:", $math.mul(a, b))', { a: 17, b: 3 })
    expect(spy).toHaveBeenCalledWith('Mul:', 51)
  })
})
