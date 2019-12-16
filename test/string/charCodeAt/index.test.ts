import { charCodeAt } from '~/string/charCodeAt'

describe('charCodeAt', () => {
  it('returns the char code at index', () => {
    const firstCharCode = charCodeAt(0)

    expect(firstCharCode('ciao')).toBe(99)
  })
})
