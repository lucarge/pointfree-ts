import { toLocaleLowerCase } from '~/string/toLocaleLowerCase'

describe('toLocaleLowerCase', () => {
  it('returns the string value converted to lower case, according to any locale-specific case mapping', () => {
    const toItalianLowerCase = toLocaleLowerCase('it-IT')
    const toAmericanLowerCase = toLocaleLowerCase('en-US')
    const text = 'HELLO WORLD!'

    expect(toItalianLowerCase(text)).toBe('hello world!')
    expect(toAmericanLowerCase(text)).toBe('hello world!')
  })
})
