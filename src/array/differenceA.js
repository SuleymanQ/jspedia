/**
 * @description `Difference just A array`
 *
 * ```ts
 * difference([2, 1], [2, 3]);
 * // [1]
 * ```
*/
export function differenceA(A, B) {
    return A.filter(e => !B.includes(e));
}
