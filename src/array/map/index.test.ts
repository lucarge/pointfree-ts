import { map } from '.'

describe('map', () => {
  it('applies a function to every element of an array', () => {
    const double = map((x: number) => x * 2)

    expect(double([1, 2, 3])).toStrictEqual([2, 4, 6])
  })
})
