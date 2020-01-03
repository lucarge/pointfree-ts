/**
 * Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String) starting at position. Otherwise returns false.
 * @param searchString The characters to be searched for at the start of this string.
 * @param position The position in this string at which to begin searching for searchString. Defaults to 0.
 */
export function startsWith(searchString: string, position?: number) {
  return (string: string) => string.startsWith(searchString, position)
}
