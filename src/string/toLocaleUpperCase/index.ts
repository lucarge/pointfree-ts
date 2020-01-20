/**
 * Converts all alphabetic characters to upper case, taking into account the host environment's current locale.
 * @param locales the locales to be used to convert to upper case
 */
export function toLocaleUpperCase(locales?: string | string[]) {
  return (string: string) => string.toLocaleUpperCase(locales)
}
