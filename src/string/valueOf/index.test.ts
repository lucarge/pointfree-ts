import { valueOf } from '~/string/valueOf'

describe('valueOf', () => {
  it('returns the primitive value of the specified String object', () => {
    const getTheValue = valueOf()

    // eslint-disable-next-line no-new-wrappers
    expect(getTheValue(new String('Hello world'))).toBe('Hello world')
  })
})
