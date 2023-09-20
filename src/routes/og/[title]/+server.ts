import { createCanvas, loadImage } from 'canvas';
import avatar64 from "$lib/assets/avatar.png?base64"
import bg64 from "./bg.png?base64"

export const prerender = true;

const WIDTH = 1200;
const HEIGHT = 630;

export async function GET({ params }) {
    const title = params.title.replace(".png", "").replace("?", "");

    const canvas = createCanvas(WIDTH, HEIGHT);
    const ctx = canvas.getContext('2d');

    const avatar = await loadImage(`data:image/png;base64,${avatar64}`);
    const bg = await loadImage(`data:image/png;base64,${bg64}`);

    //Draw Background
    ctx.drawImage(bg, 0, 0);

    //Calculate the top of the avatar so it is centered
    const avatar_top = (HEIGHT - avatar.height) / 2;
    const avatar_left = 60;
    const avatar_right = avatar_left + avatar.width;

    //Draw Avatar
    ctx.drawImage(avatar, avatar_left, avatar_top);


    const text_left = avatar_right + 40;
    const MAX_TEXT_WIDTH = WIDTH - text_left - 60;


    //Draw Text
    ctx.fillStyle = 'black';
    ctx.font = 'bold 60pt Inter';
    ctx.textBaseline = 'top';

    //Split the title into lines
    const lines: string[] = [];
    let current_line = "";
    for (const word of title.split(" ")) {
        const new_line = current_line + word + " ";
        const metrics = ctx.measureText(new_line);
        if (metrics.width > MAX_TEXT_WIDTH) {
            lines.push(current_line);
            current_line = word + " ";
        } else {
            current_line = new_line;
        }
    }

    lines.push(current_line);

    const AUTHOR_LINE_HEIGHT = 60;
    const GAP = 20;
    const TITLE_LINE_HEIGHT = 85;

    const TEXT_AREA_HEIGHT = AUTHOR_LINE_HEIGHT + GAP + lines.length * TITLE_LINE_HEIGHT;
    const text_top = (HEIGHT - TEXT_AREA_HEIGHT) / 2;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        ctx.fillText(line, text_left, text_top + AUTHOR_LINE_HEIGHT + GAP + i * TITLE_LINE_HEIGHT, MAX_TEXT_WIDTH);
    }

    //Draw Author
    ctx.fillStyle = 'blue';
    ctx.font = 'bold 40pt Inter';
    ctx.textBaseline = 'top';
    ctx.fillText("Loris Sigrist", text_left, text_top);

    const png = canvas.toBuffer();
    return new Response(png, {
        headers: {
            'content-type': 'image/png',
            'cache-control': 'public, max-age=604800, immutable',
        }
    });
}
