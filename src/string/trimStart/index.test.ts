import { trimStart } from '~/string/trimStart'

describe('trimStart', () => {
  it('removes the leading white space of a string', () => {
    const polish = trimStart()

    expect(polish('  fo o ')).toBe('fo o ')
  })
})
