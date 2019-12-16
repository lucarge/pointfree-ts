/**
 * Gets or sets the length of the array. This is a number one higher than the highest element defined in an array
 *
 * @param array
 */
export const length = <A extends unknown[]>(array: A) => array.length
