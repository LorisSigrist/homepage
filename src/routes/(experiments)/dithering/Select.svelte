<script lang="ts">
	export let options: {
		name: string;
		value: string;
	}[];

	export let selected: string;
	export let label: string;
	export let name: string | undefined = undefined;

	let id =
		Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
</script>

<div>
	<label for={id} class="block text-sm font-medium leading-6 text-gray-900">{label}</label>
	<select
		{id}
		{name}
		bind:value={selected}
		class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
	>
		{#each options as option}
			<option value={option.value} selected={option.value === selected}>{option.name}</option>
		{/each}
	</select>
</div>
