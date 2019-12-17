/**
 * Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String). Otherwise returns false.
 * @param searchString string to search
 */
export function endsWith(searchString: string) {
  return (string: string) => string.endsWith(searchString)
}
