/**
 * Returns the last occurrence of a substring in the string.
 * @param searchString The substring to search for.
 * @param position The index at which to begin searching. If omitted, the search begins at the end of the string.
 */
export function lastIndexOf(searchString: string, position?: number) {
  return (string: string) => string.lastIndexOf(searchString, position)
}
