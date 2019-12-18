import { lastIndexOf } from '~/string/lastIndexOf'

describe('lastIndexOf', () => {
  it('returns the position of the last occurrence of a substring', () => {
    const lastPositionOfHello = lastIndexOf('hello')

    expect(lastPositionOfHello('hello hello')).toBe(6)
  })
})
