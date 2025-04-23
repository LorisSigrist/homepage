import ColorTheif from 'colorthief';

/** @type {import('vite').Plugin} */
export const colorThief = {
	name: 'color-thief',
	async transform(code, id) {
		const [path, query] = id.split('?');
		if (query != 'color') return null;

		/** @type {[number, number, number]} */
		const color = await ColorTheif.getColor(path, 25);

		const hex = color.map((c) => c.toString(16).padStart(2, '0')).join('');

		return `export default "#${hex}";`;
	}
};
