/**
 * Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.
 * @param locales the locales to be used to convert to lower case
 */
export function toLocaleLowerCase(locales?: string | string[]) {
  return (string: string) => string.toLocaleLowerCase(locales)
}
