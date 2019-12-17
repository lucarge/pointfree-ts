import { charAt } from '~/string/charAt'

describe('charAt', () => {
  it('returns the character of the string at index', () => {
    const firstChar = charAt(0)

    expect(firstChar('ciao')).toBe('c')
  })
})
