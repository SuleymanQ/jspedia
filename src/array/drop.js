/**
 *
 * @param arr must be declare array
 * @param num how many length you want to drop
 * @example
 * ```ts
 * _.drop([4,5,6], 1) // [2,3]
 *
 * _.drop([4,5,6], 2) // [3]
 *
 * _.drop([4,5,6], 3) // []
 * ```
 */
export function drop(arr, num) {
    return arr.splice(num);
}
