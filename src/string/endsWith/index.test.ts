import { endsWith } from '~/string/endsWith'

describe('endsWith', () => {
  it('determines if a given string matches the end of another', () => {
    const endsWithHi = endsWith('hi')

    expect(endsWithHi('hello')).toBe(false)
    expect(endsWithHi('hey hi')).toBe(true)
  })
})
