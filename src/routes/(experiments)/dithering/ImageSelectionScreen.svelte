<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import cat_img_src from './images/cat.jpg';
	import david_img_src from './images/david.png';
    import radial_gradient_img_src from './images/radial.png';
	import { loadImageFile } from './utils';
	import { Icon, Plus } from 'svelte-hero-icons';
	import logo_src from '$lib/assets/dither-studio-logo.png';

	const imagePresets = [radial_gradient_img_src, david_img_src, cat_img_src];

	const dispatch = createEventDispatcher<{
		image: HTMLImageElement;
	}>();

	async function onInput(e: any) {
		const file = e.target.files[0];
		if (!file) return;

		try {
			dispatch('image', await loadImageFile(file));
		} catch (e) {
			alert('Failed to load image');
			console.error(e);
		}
	}

	async function loadFromSrc(url: string) {
		const new_image = new Image();
		new_image.onload = () => {
			dispatch('image', new_image);
		};
		new_image.src = url;
	}
</script>

<img
	src={logo_src}
	alt="Dither Studio"
	class="w-12 h-12 rounded-full fixed top-0 left-0 m-4 shadow-lg"
	style="image-rendering: pixelated;"
/>

<div class="w-full h-full grid place-items-center px-8">
	<div class="grid gap-4">
		<p class="text-2xl text-gray-500 text-center">Select or Drop an Image to Start</p>

		<div class="flex gap-3 justify-center flex-wrap">
			{#each imagePresets as url}
				<button on:click={() => loadFromSrc(url)} class="hover:opacity-75 transition-opacity">
					<img
						class="aspect-square h-24 w-24 object-cover rounded-md shadow-md border-2 border-white"
						src={url}
						alt=""
					/>
				</button>
			{/each}

			<label
				for="image-input"
				class="block spect-square h-24 w-24 object-cover rounded-md shadow-md border-2 border-white bg-white hover:bg-gray-100"
			>
				<div class="grid place-items-center h-full w-full">
					<Icon src={Plus} class="w-12 h-12 text-gray-400" />
				</div>

				<span class="sr-only">Choose an Image</span>

				<input type="file" class="sr-only" id="image-input" accept="image/*" on:input={onInput} />
			</label>
		</div>
	</div>
</div>
