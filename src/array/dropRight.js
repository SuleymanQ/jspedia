/**
 *
 * @example
 * ```ts
 * _.dropRight([4,5,6], 1) // [4]
 *
 * _.dropRight([4,5,6], 2) // [4,2]
 *
 * _.dropRight([4,5,6], 3) // [4,5,6]
 * ```
 */
export function dropRight(arr, num) {
    return arr.splice(0, num);
}
