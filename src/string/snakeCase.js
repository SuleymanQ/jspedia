/**
 * @example
 * ```js
 * const text = "layout menu index"
 *
 * snakeCase(text) // "layout_menu_index"
 * ```
 */
export function snakeCase(text) {
    return text.replace(/\s/g, '_');
}
