/**
 * Returns true if searchString appears as a substring of the result of converting this object to a String, at one or more positions that are greater than or equal to position; otherwise, returns false.
 * @param searchString search string
 * @param position If position is undefined, 0 is assumed, so as to search all of the String.
 */
export function includes(searchString: string, position?: number) {
  return (string: string) => string.includes(searchString, position)
}
