<script lang="ts">
	import avatar from '$lib/assets/avatar.png';
	import avatar_color from '$lib/assets/avatar.png?color';
	import avatar_size from '$lib/assets/avatar.png?size';
	import { Icon, Sun, Moon } from 'svelte-hero-icons';
	import { theme } from '$lib/stores/theme';
	import Themed from './Themed.svelte';
	import Github from './icons/Github.svelte';

	function toggle_dark_theme() {
		theme.update((t) => (t === 'dark' ? 'light' : 'dark'));
	}
</script>

<header class="container mx-auto px-4 py-4 print:hidden flex flex-row justify-between">
	<div id="header-start" class="flex flex-row items-center gap-4">
		<a href="/" class="flex flex-row items-center gap-3">
			<img
				src={avatar}
				alt="Loris Sigrist looking very handsome"
				class="rounded-full w-9 aspect-square"
				style:background-color={avatar_color}
				width={avatar_size.width}
				height={avatar_size.height}
			/>

			<span class="font-bold text-md">Loris Sigrist</span>
		</a>
	</div>
	<div id="header-end" class="flex flex-row items-center gap-2 sm:gap-4">
		<a
			href="https://www.github.com/LorisSigrist"
			target="_blank"
			class="hover:bg-gray-100 flex gap-2 items-center hover:dark:bg-gray-800 p-1 sm:px-3 rounded-md text-gray-800 dark:text-gray-200"
		>
		<span><Github small/></span>
			
			<span class="hidden sm:block">Github</span>
		</a>
		<button
			class="hover:bg-gray-100 hover:dark:bg-gray-800 p-2 rounded-md aspect-square"
			on:click={toggle_dark_theme}
			title="Toggle Theme"
		>
			<Themed>
				<Icon src={Sun} slot="light" class="w-4 h-4 block" />
				<Icon src={Moon} slot="dark" class="w-4 h-4 block" />
			</Themed>
		</button>
	</div>
</header>
