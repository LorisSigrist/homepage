import sizeOf from 'image-size';

/** @type {import('vite').Plugin} */
export const imageSize = {
    name: 'image-size',
    async transform(code, id) {
        const [path, query] = id.split('?');
        if (query != 'size')
            return null;
        
        const dimensions = sizeOf(path);
        console.log(dimensions);

        return `export default {
            width: ${dimensions.width},
            height: ${dimensions.height}
        };`;
    }
};