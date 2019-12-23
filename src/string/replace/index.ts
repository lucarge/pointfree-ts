/**
 * Replaces text in a string, using a regular expression or search string.
 * @param searchValue A string to search for.
 * @param replaceValue A string containing the text to replace for every successful match of searchValue in this string.
 */
export function replace(searchValue: string | RegExp, replaceValue: string) {
  return (string: string) => string.replace(searchValue, replaceValue)
}
