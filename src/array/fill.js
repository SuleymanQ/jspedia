/**
 * ```ts
 * const arr = [1,3,5]
 *
 * _.fill(arr, 'a') // ['a','b','b']
 * ```
 */
export function fill(arr, value, start = 0, end = arr.length) {
    for (let i = start; i <= end; i++) {
        arr[i] = value;
    }
    return arr;
}
