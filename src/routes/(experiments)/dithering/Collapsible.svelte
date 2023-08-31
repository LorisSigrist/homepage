<script lang="ts">
	import { ChevronDown, ChevronUp, Icon } from 'svelte-hero-icons';

	export let open = false;
</script>

<div
	class="w-full max-h-full flex-shrink-0 {open ? "h-full divide-y divide-gray-200 mt-auto" : "flex-0"} bg-gray-50 border border-gray-100 overflow-y-hidden flex-1 shadow-lg rounded-md flex flex-col justify-start pointer-events-auto touch-auto"
>
	<header class="py-4 px-4 flex-shrink-0 shadow-sm z-10 flex gap-2 items-center justify-between bg-white">
		<button class="contents" on:click={() => (open = !open)}>
			<Icon src={open ? ChevronDown : ChevronUp} class="w-6 h-6 text-gray-500" />
		</button>
		<div class="flex flex-1 items-center justify-between">
			<slot name="header" />
		</div>
	</header>

	<section class="overflow-y-auto overflow-x-visible" class:hidden={!open}>
		<slot />
	</section>
</div>
