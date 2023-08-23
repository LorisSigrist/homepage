<script lang="ts">
	import { getPalette } from "./palette/colorthief/color-thief";
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

    async function generatePalette(imgData: ImageData) : Promise<string[]> {
        const colors  = getPalette(imgData, 20, 2);
        if(!colors) throw new Error("Failed to generate palette");
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
