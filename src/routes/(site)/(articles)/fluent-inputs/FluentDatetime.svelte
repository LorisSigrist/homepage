<script lang="ts">
	import { writable } from 'svelte/store';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	export let id = 'appointment-date';
	export let name = 'appointment-date';
	export let label = 'When would you like to meet?';
	export let placeholder = 'In 2 days at 10am';

	const value = writable('');
	let parsed: Date | null = null;
	let loaded = false;

	onMount(async () => {
		const chrono = await import('chrono-node');
		loaded = true;

		const unsubscribe = value.subscribe((val) => {
			parsed = chrono.parseDate(val);
		});

		return unsubscribe;
	});
</script>

<div>
	<label
		for={id}
		class="block text-sm font-medium leading-6 text-gray-900 dark:text-white pointer-events-none"
		>{label}</label
	>
	<div class="relative mt-2 rounded-md shadow-sm">
		<input
			type="text"
			{name}
			{id}
			placeholder={loaded ? placeholder : 'Loading Parser...'}
			disabled={!loaded}
			bind:value={$value}
			class="block w-full rounded-md border-0 py-1.5 sm:pe-48 disabled:opacity-40 disabled:cursor-not-allowed dark:bg-white/5 pr-10 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus-within:ring-indigo-500 sm:text-sm sm:leading-6"
		/>
		{#if parsed}
			<div
				class="pointer-events-none absolute top-1/2 -translate-y-1/2 h-6 right-3 px-4 sm:flex items-center shadow-sm bg-indigo-600 rounded-full hidden text-white"
				transition:fly={{ x: 10, duration: 100 }}
			>
				<span class="align-middle text-xs">
					{parsed.toLocaleDateString('en', {
						year: 'numeric',
						month: 'long',
						day: 'numeric',
						hour: 'numeric',
						minute: 'numeric'
					})}
				</span>
			</div>
		{/if}
	</div>

	<div class="sm:hidden h-6 relative">
		{#if parsed}
			<span class="text-xs opacity-75 absolute left-0 top-2" transition:fade={{ duration: 100 }}>
				{parsed.toLocaleDateString('en', {
					year: 'numeric',
					month: 'long',
					day: 'numeric',
					hour: 'numeric',
					minute: 'numeric'
				})}
			</span>
			{:else}
			<span class="text-xs opacity-75 absolute left-0 top-2" transition:fade={{ duration: 100 }}>
				Please enter a time and date
			</span>
		{/if}
	</div>
</div>
