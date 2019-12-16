/**
 * Returns the Unicode value of the character at the specified location.
 * @param index — The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.
 */
export function charCodeAt(index: number) {
  return (string: string) => string.charCodeAt(index)
}
