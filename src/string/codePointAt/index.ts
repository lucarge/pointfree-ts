/**
 * Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point value of the UTF-16 encoded code point starting at the string element at position pos in the String resulting from converting this object to a String. If there is no element at that position, the result is undefined. If a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.
 * @param index — The zero-based index of the desired character. If there is no character at the specified index, undefined is returned.
 */
export function codePointAt(index: number) {
  return (string: string) => string.codePointAt(index)
}
