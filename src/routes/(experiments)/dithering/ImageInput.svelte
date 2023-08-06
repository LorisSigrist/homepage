<script lang="ts">
	import preset_src from './img.jpg';
	import { loadImageFile } from './utils';
	export let image: HTMLImageElement | null = null;

	async function onInput(e: any) {
		const file = e.target.files[0];
		if (!file) return;

		try {
			image = await loadImageFile(file);
		} catch (e) {
			alert('Failed to load image');
			console.error(e);
		}

		if (e.target && 'blur' in e.target && typeof e.target.blur === 'function') e.target.blur();
	}


	async function onDrop(e: DragEvent) {
		const file = e.dataTransfer?.files[0];
		if (!file) return;

		try {
			image = await loadImageFile(file);
		} catch (e) {
			alert('Failed to load image');
			console.error(e);
		}
	}

	function loadPreset(e: MouseEvent) {
		const new_image = new Image();
		new_image.onload = () => {
			image = new_image;
		};
		new_image.src = preset_src;

		//Deselect the button after clicking
		if (e.target && 'blur' in e.target && typeof e.target.blur === 'function') e.target.blur();
	}
</script>

<div class="col-span-full">
	<label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900"
		>Input Image</label
	>

	<div class="mt-2 relative w-full">
		{#if image}
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<img src={image.src} alt="Your selected image" class="w-full rounded-lg bg-gray-50" />
		{:else}
			<div class="flex justify-center rounded-lg border border-dashed border-gray-900/25 h-48" />
		{/if}

		<div
			class=" pointer-events-auto absolute inset-0 grid place-items-center rounded-lg {image
				? 'opacity-0 hover:opacity-100 focus-within:opacity-100 hover:backdrop-blur-sm bg-black bg-opacity-50'
				: ''}"
			on:drop|preventDefault={onDrop}
			on:dragover|preventDefault={() => {}}
		>
			<div class=" text-center w-fit h-fit">
				<svg
					class="mx-auto h-12 w-12 {image ? 'text-white' : 'text-gray-300'}"
					viewBox="0 0 24 24"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
						clip-rule="evenodd"
					/>
				</svg>
				<div
					class="mt-4 flex text-sm leading-6 {image
						? 'text-white'
						: 'text-gray-600'} text-center w-fit"
				>
					<label
						for="image-input"
						class="relative cursor-pointer rounded-md font-semibold {image
							? 'text-indigo-500'
							: 'text-indigo-600'} focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
					>
						<span>Choose an Image</span>
						<input
							type="file"
							class="sr-only"
							id="image-input"
							accept="image/*"
							on:input={onInput}
						/>
					</label>
					<p class="pl-1">or drag and drop</p>
				</div>
				<p class="text-xs leading-5 {image ? 'text-white' : 'text-gray-600'}">PNG, JPG, GIF, etc</p>
				<p>
					<button
						class="font-semibold cursor-pointer text-sm {image
							? 'text-indigo-500'
							: 'text-indigo-600'}"
						on:click={loadPreset}
					>
						Or use my cats
					</button>
				</p>
			</div>
		</div>
	</div>
</div>
