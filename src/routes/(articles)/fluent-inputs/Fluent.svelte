<script lang="ts">
	import { writable } from 'svelte/store';
	import { fly } from 'svelte/transition';
	import { parseDate } from 'chrono-node';

	export let id = 'appointment-date';
	export let name = 'appointment-date';
	export let label = 'When would you like to meet?';
    export let placeholder = 'In 2 days at 10am';

	const value = writable('');
	let parsed: Date | null = null;

	value.subscribe((val) => {
		parsed = parseDate(val);
		console.log(parsed);
	});
</script>

<div>
	<label for={id} class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
		>{label}</label
	>
	<div class="relative mt-2 rounded-md shadow-sm">
		<input
			type="text"
			{name}
			{id}
            {placeholder}
			bind:value={$value}
			class="block w-full rounded-md border-0 py-1.5 pe-48 dark:bg-white/5 pr-10 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus-within:ring-indigo-500 sm:text-sm sm:leading-6"
		/>
		{#if parsed}
			<div
				class="pointer-events-none absolute top-1/2 -translate-y-1/2 h-6 right-3 px-4 flex items-center shadow-sm bg-indigo-600 rounded-full text-white"
				transition:fly={{ x: 10, duration: 100 }}
			>
				<span class="align-middle text-xs">
					{parsed.toLocaleDateString('en', {
						year: 'numeric',
						month: 'long',
						day: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric',
					})}
				</span>
			</div>
		{/if}
	</div>
</div>
