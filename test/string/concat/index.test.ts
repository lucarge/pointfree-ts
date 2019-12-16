import { concat } from '~/string/concat'

describe('concat', () => {
  it('appends the strings provided to the initial string', () => {
    const appendWorld = concat('world')

    expect(appendWorld('hello ')).toBe('hello world')
  })
})
