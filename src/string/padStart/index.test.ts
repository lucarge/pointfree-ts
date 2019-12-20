import { padStart } from '~/string/padStart'

describe('padStart', () => {
  it('pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length', () => {
    const dotsUntil10 = padStart(10, '.')

    expect(dotsUntil10('Hello')).toBe('.....Hello')
  })
})
