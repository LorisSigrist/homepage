<script lang="ts">
	import type { ChangeEventHandler } from 'svelte/elements';
	import { generateGodelNumber, type Flaci } from './flaci';
    import flaci_download_button_image from "./flaci-download-button.png"

	let flaci: Flaci | undefined = undefined;

	const handleFileUpload: ChangeEventHandler<HTMLInputElement> = (e) => {
		// read the file to a String & parse it as JSON
        const reader = new FileReader();
        reader.onload = (e) => {
            if (typeof reader.result !== 'string') return;
            flaci = JSON.parse(reader.result);
        };
        // @ts-ignore
        reader.readAsText(e.target.files![0]);
	};

    $: godelNumber = flaci ? generateGodelNumber(flaci) : undefined;


    function copyToClipboard(str : string) {
        navigator.clipboard.writeText(str);
    }
</script>

<h1>Flaci to Gödel-Number Converter</h1>
<p>This Tool converts Flaci's JSON files for Turing Machines to a Godel Number</p>

<h2>How to use</h2>
<p>
    1. Download your Turing Machine as a JSON file from flaci using
    the download button in the top right
</p>

<img src={flaci_download_button_image} alt="Flaci Download Button" />

<p>
    2. Below, select "Upload FLACI Json file" and upload the JSON file
</p>

<h2>Tool</h2>

<label>
	<span>Upload FLACI Json file</span>
	<input type="file" on:change={handleFileUpload} accept="application/json" />
</label>


{#if godelNumber}
    <h2>Binary</h2>
    <p>{godelNumber.toString(2)}</p>
    <button on:click={() => copyToClipboard(godelNumber.toString(2))}>Copy</button>

    <h2>Decimal</h2>
    <p>{godelNumber}</p>
    <button on:click={() => copyToClipboard(godelNumber.toString(10))}>Copy</button>
{/if}