import { trim } from '~/string/trim'

describe('trim', () => {
  it('removes the leading and trailing white space of a string', () => {
    const polish = trim()

    expect(polish('  fo o ')).toBe('fo o')
  })
})
