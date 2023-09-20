import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { html as toReactElement } from 'satori-html';
import inter_regular_base64 from "$lib/assets/Inter-Regular.woff?base64"
import baskerville_bold_base64 from "$lib/assets/LibreBaskerville-Bold.ttf?base64"
import avatar from "$lib/assets/avatar.png?base64"


export const prerender = true;

const HEIGHT = 630;
const WIDTH = 1200;

export const GET = async ({ params }) => {
  const title = params.title.replace(".png", "");

  const interRegular = Buffer.from(inter_regular_base64, 'base64')
  const baskervilleBold = Buffer.from(baskerville_bold_base64, 'base64')

  const avatar_data_url = `data:image/png;base64,${avatar}`

  const html = toReactElement(` <div tw="bg-gray-50 flex w-full h-full p-8">
    <div tw="flex flex-row w-full py-12 px-4 items-center justify-between p-8 ">

      <img src="${avatar_data_url}" tw="h-96 w-96  rounded-full" alt="">

      <h2 tw="flex flex-col flex-1 font-bold text-left p-12">
        <span class="text-indigo-600  text-4xl font-bold py-3">Loris Sigrist</span>
        <span class="text-black  text-6xl" style="font-family: Baskerville;">${title}</span>
      </h2>

    </div>
  </div>`)

  const svg = await satori(html, {
    fonts: [
      {
        name: 'Inter Latin',
        data: interRegular,
        style: 'normal'
      },
      {
        name: 'Baskerville',
        data: baskervilleBold,
        style: 'normal'
      }
    ],
    height: HEIGHT,
    width: WIDTH
  });

  const resvg = new Resvg(svg, {
    fitTo: {
      mode: 'width',
      value: WIDTH
    }
  });

  const image = resvg.render();

  return new Response(image.asPng(), {
    headers: {
      'content-type': 'image/png'
    }
  });
};
