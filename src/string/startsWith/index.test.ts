import { startsWith } from '~/string/startsWith'

describe('startsWith', () => {
  it('determines whether a string begins with the characters of a specified string', () => {
    const paragraph = 'The quick brown fox jumps over the lazy dog.'

    expect(startsWith('The')(paragraph)).toBe(true)
    expect(startsWith('The', 3)(paragraph)).toBe(false)
  })
})
