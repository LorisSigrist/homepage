<script lang="ts">
	export let label: string;
	export let name: string | undefined = undefined;
	export let min: number | null = null;
	export let max: number | null = null;

	export let value: number = 0;
	export let step: number = 1;

	let id =
		Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
</script>

<div>
	<label for={id} class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
		>{label}</label
	>
	<input
		{id}
		type="range"
		bind:value
		{min}
		{max}
		{step}
		{name}
		class="w-full h-1.5 mb-6 bg-white ring-1 ring-gray-300 shadow-sm rounded-lg appearance-none cursor-pointer accent-indigo-600 dark:bg-gray-700"
	/>
</div>
