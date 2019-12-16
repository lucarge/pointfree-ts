/**
 * Creates an array from an array-like object.
 * @param predicate - A mapping function to call on every element of the array.
 * @param arrayLike — An array-like object to convert to an array.
 */
export const from = <A, B>(predicate: (x: A, k: number) => B) => (arrayLike: Iterable<A> | ArrayLike<A>) =>
  Array.from(arrayLike, predicate)
