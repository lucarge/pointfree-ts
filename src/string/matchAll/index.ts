/**
 * Matches a string with a regular expression, and returns an iterable of matches containing the results of that search.
 * @param regexp A variable name or string literal containing the regular expression pattern and flags.
 */
export function matchAll(regexp: RegExp) {
  return (string: string) => string.matchAll(regexp)
}
