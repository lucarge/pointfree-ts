import { trimEnd } from '~/string/trimEnd'

describe('trimEnd', () => {
  it('removes the trailing white space of a string', () => {
    const polish = trimEnd()

    expect(polish('  fo o ')).toBe('  fo o')
  })
})
