import { toUpperCase } from '~/string/toUpperCase'

describe('toUpperCase', () => {
  it('converts all the alphabetic characters in a string to uppercase', () => {
    const shout = toUpperCase()
    const text = '👋 world!'

    expect(shout(text)).toBe('👋 WORLD!')
  })
})
