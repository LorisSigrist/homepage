import fs from 'fs';

/** @type {import('vite').Plugin} */
export const base64Loader = {
	name: 'base64-loader',
	transform(code, id) {
		const [path, query] = id.split('?');
		if (query != 'base64') return null;

		const data = fs.readFileSync(path);
		const base64 = data.toString('base64');

		return `export default '${base64}';`;
	}
};
