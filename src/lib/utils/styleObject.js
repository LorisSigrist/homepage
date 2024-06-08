/**
 * Converts a Style object to a CSS string
 *
 * @param {Record<string, string>} obj - A style object where the keys are camelCase CSS properties and the values are CSS values.
 */
export function styleObjectToCssString(obj) {
	let css = '';
	for (const key in obj) {
		const kebabKey = camelToKebabCase(key);
		const value = obj[key];
		css += `${kebabKey}:${value};`;
	}
	return css;
}

/**
 * Returns the kebab-case version of a camelCase string
 *
 * @param {string} str
 * @returns {string}
 */
function camelToKebabCase(str) {
	return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
}
