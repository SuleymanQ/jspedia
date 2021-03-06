import { isInt } from "../number/isInt";
/**
 * @example
 * ```ts
 * const arr = [1,2,3,4,5]
 *
 * chunk(arr, 2) // [[1,2],[3,4],[5]]
 * ```
 */
export function chunk(arr, num) {
    let chunkLength = arr.length / num;
    if (!isInt(chunkLength))
        chunkLength++;
    /**
    * @description i variable for chunk length. Chunk length mining response
    *  array must be include that number;
    */ let i = 0;
    let outChunk = [];
    let countIndex = 0;
    for (i = 0; i < Math.floor(chunkLength); i++) {
        let inChunk = [];
        /**
         * @description g variable for counting number (num) how many chunks need for array (arr)
         */ let g;
        for (g = 0; g < +num; g++) {
            if (arr.length - countIndex > 0) {
                inChunk.push(arr[countIndex]);
            }
            countIndex++;
        }
        outChunk.push(inChunk);
    }
    return outChunk;
}
