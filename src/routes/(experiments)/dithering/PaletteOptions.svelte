<script lang="ts">
    import ColorThief from "colorthief";
	import { rgbToHex, type RGB } from "./utils";
	export let palette: string[] = [];
    export let image: ImageData | null = null;

	function addColor() {
		palette = [...palette, '#000000'];
	}

	function removeColor(index: number) {
		palette = palette.filter((_, i) => i !== index);
	}

	const presets = [
		{
			name: 'Black and White',
			palette: ['#000000', '#ffffff']
		},
		{
            name: "3Bit",
            palette: ["#000000", "#ffffff", "#ff0000", "#00ff00", "#0000ff", "#ffff00", "#00ffff", "#ff00ff"]
        },{
            name: "Grayscale",
            palette: ["#000000", "#333333", "#666666", "#999999", "#cccccc", "#ffffff"]
        }
	];

    /**
     * 
     * @param img
     * @returns An Array of Hexadecimal color strings
     */
    async function generatePalette(img: ImageData) : Promise<string[]> {
        const colorThief = new ColorThief();

        const canvas = new OffscreenCanvas(img.width, img.height);
        const ctx = canvas.getContext("2d")!;
        ctx.putImageData(img, 0, 0);


        const blob = await canvas.convertToBlob();
        const url = URL.createObjectURL(blob);

        const image = new Image();

        const resolutionPromise = new Promise<void>((resolve, reject) => {
            image.onload = () => {
                resolve();
            }
        });

        image.src = url;

        await resolutionPromise;

        const colors : RGB[] = colorThief.getPalette(image, 20, 2);

        return colors.map(rgbToHex);
    }
</script>

<ul>
    {#each presets as { name, palette: presetPalette }}
        <li>
            <button on:click={() => (palette = presetPalette)}> {name} </button>
        </li>
    {/each}

    <li>
        <button disabled={!image} on:click={async ()=> {if(image ) palette = await generatePalette(image)}}> Generate </button>
    </li>

</ul>


<ul>
	{#each palette as color, index}
		<li>
			<input type="color" bind:value={color} />
			<button on:click={() => removeColor(index)}>Remove</button>
		</li>
	{/each}
	<li>
		<button on:click={addColor}>Add</button>
	</li>
</ul>
