/**
 * Applies the given function to every element of an array.
 *
 * @param fn  A function to map an element
 */
export const map = <A, B>(fn: (value: A) => B) => (values: A[]) => values.map(fn)
