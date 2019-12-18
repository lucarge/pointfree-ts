import { localeCompare } from '~/string/localeCompare'

describe('localeCompare', () => {
  it('returns a number indicating whether a string comes before, after or is equal to the string in sort order', () => {
    const initialString = 'réservé'
    const compareString = 'RESERVE'

    expect(localeCompare(compareString)(initialString)).toBe(1)
    expect(localeCompare(compareString, 'en', { sensitivity: 'base' })(initialString)).toBe(0)
  })
})
