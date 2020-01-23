import { toString } from '~/string/toString'

describe('toString', () => {
  it('returns a string representation of a string', () => {
    const makeAStringOf = toString()

    expect(makeAStringOf('foo')).toBe('foo')
  })
})
