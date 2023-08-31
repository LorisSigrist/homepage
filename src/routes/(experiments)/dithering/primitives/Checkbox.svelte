<script lang="ts">
	import { ID } from '$lib/math/id-generation';

	export let checked = false;
	export let label: string;
	export let description: string | undefined = undefined;
	export let name: string | undefined = undefined;

    export let input: HTMLInputElement | null = null;

	const id = ID();
	const descriptionId = ID();
</script>

<div class="relative flex items-start">
	<div class="flex h-6 items-center">
		<input
			{id}
			aria-describedby={description ? descriptionId : undefined}
			{name}
            bind:this={input}
            on:input
            on:change
			type="checkbox"
			class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
			bind:checked
		/>
	</div>
	<div class="ml-3 text-sm leading-6">
		<label for={id} class="font-medium text-gray-900">
			{label}
		</label>
		{#if description}
			<span id={descriptionId} class="text-gray-500"
				><span class="sr-only">{label} </span>{description}</span
			>
		{/if}
	</div>
</div>
