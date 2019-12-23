/**
 * Returns a String value that is made from count copies appended together. If count is 0, the empty string is returned.
 * @param count number of copies to append
 */
export function repeat(count: number) {
  return (string: string) => string.repeat(count)
}
