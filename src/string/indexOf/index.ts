/**
 * Returns the position of the first occurrence of a substring.
 * @param searchString The substring to search for in the string
 * @param position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.
 */
export function indexOf(searchString: string, position?: number) {
  return (string: string) => string.indexOf(searchString, position)
}
