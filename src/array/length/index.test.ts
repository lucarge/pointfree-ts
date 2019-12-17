import { length } from '~/array/length'

describe('length', () => {
  it('returns the length of the array', () => {
    expect(length([0, 1])).toBe(2)
  })
})
