/**
 * Determines whether two strings are equivalent in the current or specified locale.
 * @param compareString String to compare to target string
 * @param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details.
 * @param options An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details.
 */
export function localeCompare(compareString: string, locales?: string | string[], options?: Intl.CollatorOptions) {
  return (string: string) => string.localeCompare(compareString, locales, options)
}
