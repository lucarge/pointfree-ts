import { indexOf } from '~/string/indexOf'

describe('indexOf', () => {
  it('returns the position of the first occurrence of a substring', () => {
    const positionOfHello = indexOf('hello')

    expect(positionOfHello('Say hello')).toBe(4)
  })
})
