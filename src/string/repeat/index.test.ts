import { repeat } from '~/string/repeat'

describe('repeat', () => {
  it('returns a new string which contains the specified number of copies of the string on which it was called', () => {
    const duplicate = repeat(2)

    expect(duplicate('hi')).toBe('hihi')
  })
})
