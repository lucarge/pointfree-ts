import { toLocaleUpperCase } from '~/string/toLocaleUpperCase'

describe('toLocaleUpperCase', () => {
  it('returns the string value converted to upper case, according to any locale-specific case mapping', () => {
    const toItalianUpperCase = toLocaleUpperCase('it-IT')
    const toAmericanUpperCase = toLocaleUpperCase('en-US')
    const text = 'hello world!'

    expect(toItalianUpperCase(text)).toBe('HELLO WORLD!')
    expect(toAmericanUpperCase(text)).toBe('HELLO WORLD!')
  })
})
