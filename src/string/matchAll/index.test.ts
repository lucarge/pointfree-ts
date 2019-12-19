import { matchAll } from '~/string/matchAll'

describe('matchAll', () => {
  it('returns an iterator of all results matching a string against a regular expression, including capturing groups', () => {
    const regexp = /t(e)(st(\d?))/g
    const str = 'test1test2'
    const [first, second] = matchAll(regexp)(str)

    expect([...first]).toEqual(['test1', 'e', 'st1', '1'])
    expect([...second]).toEqual(['test2', 'e', 'st2', '2'])
  })
})
