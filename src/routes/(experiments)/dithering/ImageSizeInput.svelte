<script lang="ts">
	import { Icon, LockClosed } from 'svelte-hero-icons';

	export let width: number;
	export let aspectRatio: number;

	function onWidthInput(e: any) {
        const newWidth = e.target.value;
        if(!newWidth) return;
		width = newWidth;
	}

	$: height = Math.round(width / aspectRatio);

	function onHeightInput(e: any) {
		const height = e.target.value;
        if(!height) return;
		width = Math.round(aspectRatio * height);
	}

	let withId = id();
	let heightId = id();

	function id() {
		return (
			Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
		);
	}
</script>

<fieldset class="flex gap-1 items-end justify-between">
	<div class="w-full">
		<label for="width-{withId}" class="block text-sm font-medium leading-6 text-gray-900">Width</label>
		<div class="relative mt-2 rounded-md shadow-sm">
			<input
				name="width"
				id="width-{withId}"
				type="number"
				min="12"
				max="3000"
				step="1"
				value={width}
				on:input={onWidthInput}
				class="block w-full rounded-md border-0 py-1.5 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
				placeholder="600"
			/>
			<div
				class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400"
			>
				px
			</div>
		</div>
	</div>

	<span class="text-gray-500 pb-2">
		<Icon src={LockClosed} class="w-4 h-4" solid />
	</span>
	<div class="w-full">
		<label for="height-{heightId}" class="block text-sm font-medium leading-6 text-gray-900">Height</label>
		<div class="relative mt-2 rounded-md shadow-sm">
			<input
				type="number"
                id="height-{heightId}"
                name="height"
				min="12"
				max="3000"
				step="1"
				value={height}
				on:input={onHeightInput}
				class="block w-full rounded-md border-0 py-1.5 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
				placeholder="340"
			/>
			<div
				class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400"
			>
				px
			</div>
		</div>
	</div>
</fieldset>
