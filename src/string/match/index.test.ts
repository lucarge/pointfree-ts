import { match } from '~/string/match'

describe('match', () => {
  it('retrieves the result of matching a string against a regular expression', () => {
    const getUppercasedLetters = match(/[A-Z]/g)
    const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.'

    expect(getUppercasedLetters(paragraph)).toEqual(['T', 'I'])
  })
})
