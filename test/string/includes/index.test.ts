import { includes } from '~/string/includes'

describe('includes', () => {
  it('determines if a given string is included in another', () => {
    const includesHello = includes('hello')

    expect(includesHello('Say hello')).toBe(true)
    expect(includesHello('Say hi')).toBe(false)
  })
})
