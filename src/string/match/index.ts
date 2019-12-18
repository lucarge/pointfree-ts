/**
 * Matches a string with a regular expression, and returns an array containing the results of that search.
 * @param regexp A variable name or string literal containing the regular expression pattern and flags.
 */
export function match(regexp: string | RegExp) {
  return (string: string) => string.match(regexp)
}
