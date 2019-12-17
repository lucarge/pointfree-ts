import { filter } from '~/array/filter'

describe('filter', () => {
  it('filters an array of elements', () => {
    const keepOnlyEvenNumbers = filter((value: number) => value % 2 === 0)

    expect(keepOnlyEvenNumbers([0, 1, 2, 3, 4])).toEqual([0, 2, 4])
  })
})
