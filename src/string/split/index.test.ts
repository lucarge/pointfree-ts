import { split } from '~/string/split'

describe('split', () => {
  it('turns a String into an array of strings, by separating the string given a specified separator', () => {
    const paragraph = 'The quick brown fox jumps over the lazy dog.'
    const getWords = split(' ')

    expect(getWords(paragraph).length).toBe(9)
  })
})
