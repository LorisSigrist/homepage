<script lang="ts">
	import { ID } from '$lib/math/id-generation.js';


    export let label: string = '';
    export let name: string | null = null;
    export let required: boolean = false;
    export let placeholder: string | null = null;


    export let input : HTMLInputElement | null = null;

	const id = ID();
</script>

<div>
	<label for={id} class="sr-only">{label}</label>
	<input
		type="number"
		{name}
		{id}
        {required}
        on:input
        on:change
        bind:this={input}
		class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
		{placeholder}
	/>
</div>
