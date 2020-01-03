import { substring } from '~/string/substring'

describe('substring', () => {
  it('returns the part of the string between the start and end indexes, or to the end of the string', () => {
    const paragraph = 'The quick brown fox jumps over the lazy dog.'
    const getOnlyQuick = substring(4, 9)
    const getFromQuick = substring(4)

    expect(getOnlyQuick(paragraph)).toBe('quick')
    expect(getFromQuick(paragraph)).toBe('quick brown fox jumps over the lazy dog.')
  })
})
