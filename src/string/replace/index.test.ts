import { replace } from '~/string/replace'

describe('replace', () => {
  it('returns a new string with some or all matches of a pattern replaced by a replacement', () => {
    const removeCommas = replace(/,/gi, '')

    expect(removeCommas('Hi, hello, hola?')).toBe('Hi hello hola?')
  })
})
