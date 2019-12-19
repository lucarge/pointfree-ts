/**
 * Returns the String value result of normalizing the string into the normalization form named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.
 * @param form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default is "NFC"
 */
export function normalize(form?: 'NFC' | 'NFD' | 'NFKC' | 'NFKD') {
  return (string: string) => string.normalize(form)
}
