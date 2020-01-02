import { search } from '~/string/search'

describe('search', () => {
  it('executes a search for a match between a regular expression and a string', () => {
    const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?'
    const regexp = /[^\w\s]/g
    const nonCharFirstIndex = search(regexp)

    expect(nonCharFirstIndex(paragraph)).toBe(43)
  })
})
