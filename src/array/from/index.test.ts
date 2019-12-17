import { from } from '~/array/from'

describe('from', () => {
  it('creates an array applying a predicate function', () => {
    const createListOfStringsFromNumbers = from((value: number) => value.toString())

    const arrayOfNumbers = [0, 1, 2, 3]
    const arrayOfStrings = ['0', '1', '2', '3']

    expect(createListOfStringsFromNumbers(arrayOfNumbers)).toEqual(arrayOfStrings)
  })
})
