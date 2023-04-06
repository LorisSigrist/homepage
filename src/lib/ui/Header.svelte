<script lang="ts">
	import avatar from '$lib/assets/avatar.png';
	import { Icon, Sun, Moon } from 'svelte-hero-icons';
	import { theme } from '$lib/stores/theme';

	function toggle_dark_theme() {
		theme.update((t) => (t === 'dark' ? 'light' : 'dark'));
	}
</script>

<header class="container mx-auto px-4 py-4 print:hidden flex flex-row justify-between">
	<div id="header-start">
		<a href="/" class="flex flex-row items-center gap-3">
			<img
				src={avatar}
				alt="Loris Sigrist looking very handsome"
				class="rounded-full w-9 aspect-square"
			/>

			<span class="font-bold text-md">Loris Sigrist</span>
		</a>
	</div>
	<div id="header-end">
		<button
			class="hover:bg-gray-100 hover:dark:bg-gray-800 p-2 rounded-md aspect-square"
			on:click={toggle_dark_theme}
		>
			<Icon src={$theme === 'dark' ? Sun : Moon} class="w-4 h-4 block" />
		</button>
	</div>
</header>
