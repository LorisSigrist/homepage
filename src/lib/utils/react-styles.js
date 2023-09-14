/**
 * Converts a React style object to a CSS string
 * @param {Record<string, string>} reactStyles 
 */
export function reactStylesToCss(reactStyles) {
    let css = '';
    for (const key in reactStyles) {
        const kebabKey = camelToKebabCase(key);
        const value = reactStyles[key];
        css += `${kebabKey}:${value};`;
    }
    return css;
}


/**
 * Returns the kebab-case version of a camelCase string
 * @param {string} str 
 * @returns {string}
 */
function camelToKebabCase(str) {
    return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
}