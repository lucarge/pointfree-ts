/**
 * Returns the elements of an array that meet the condition specified in a callback function.
 * @param predicate — A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.
 */
export function filter<A, B extends A>(
  predicate: (value: A, index: number, array: A[]) => value is B,
): (array: A[]) => B[]
export function filter<A>(predicate: (value: A, index: number, array: A[]) => boolean): (array: A[]) => A[]
export function filter<A>(predicate: (value: A, index: number, array: A[]) => boolean) {
  return (array: A[]) => array.filter(predicate)
}
