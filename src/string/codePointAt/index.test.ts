import { codePointAt } from '~/string/codePointAt'

describe('codePointAt', () => {
  it('returns the code point at index', () => {
    const firstCodePoint = codePointAt(0)

    expect(firstCodePoint('♲')).toBe(9842)
  })
})
