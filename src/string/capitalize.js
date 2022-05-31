/**
 *
 * @param text allows single string;
 * ```ts
 * capitalize("hello") // Hello
 * ```
 */
export function capitalize(text) {
    return text[0].toUpperCase() + text.slice(1);
}
