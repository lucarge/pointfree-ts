import { toLowerCase } from '~/string/toLowerCase'

describe('toLowerCase', () => {
  it('returns the string value converted to lower case', () => {
    const whisper = toLowerCase()
    const text = 'HELLO WORLD!'

    expect(whisper(text)).toBe('hello world!')
  })
})
