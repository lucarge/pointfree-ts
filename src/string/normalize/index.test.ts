import { normalize } from '~/string/normalize'

describe('normalize', () => {
  it('returns the Unicode Normalization Form of a given string', () => {
    const normalizeFormComposition = normalize('NFC')
    const first = '\u212B'
    const second = '\u0041\u030A'

    expect(first).not.toBe(second)
    expect(normalizeFormComposition(first)).toBe(normalizeFormComposition(second))
  })
})
