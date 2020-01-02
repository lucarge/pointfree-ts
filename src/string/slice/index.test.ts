import { slice } from '~/string/slice'

describe('slice', () => {
  it('extracts a section of a string and returns it as a new string, without modifying the original string', () => {
    const str = 'The quick brown fox jumps over the lazy dog.'
    const firstTenChars = slice(0, 10)

    expect(firstTenChars(str)).toBe('The quick ')
    expect(str).toEqual('The quick brown fox jumps over the lazy dog.')
  })
})
