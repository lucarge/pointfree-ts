/**
 * Returns a string that contains the concatenation of two or more strings.
 * @param strings — The strings to append to the end of the string.
 */
export function concat(...strings: string[]) {
  return (string: string) => string.concat(...strings)
}
