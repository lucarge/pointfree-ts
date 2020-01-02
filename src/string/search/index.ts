/**
 * Finds the first substring match in a regular expression search.
 * @param regex The regular expression pattern and applicable flags.
 */
export function search(regex: RegExp | string) {
  return (string: string) => string.search(regex)
}
