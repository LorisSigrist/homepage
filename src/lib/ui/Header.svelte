<script>
	import { Icon, Sun, Moon, Envelope } from 'svelte-hero-icons';
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
			<enhanced:img
				src="$lib/assets/avatar.png"
				alt="Loris Sigrist looking very handsome"
				class="rounded-full w-9 aspect-square"
			/>

			<span class="font-bold text-md">Loris Sigrist</span>
		</a>
	</div>
	<div id="header-end" class="flex flex-row items-center gap-2 sm:gap-4">
		<a
			href="https://dithering.sigrist.dev"
			target="_blank"
			class="hover:bg-gray-100 flex gap-2 items-center hover:dark:bg-gray-800 p-1 sm:px-3 rounded-md text-gray-800 dark:text-gray-200"
		>
			<span class="hidden sm:block">Dither Studio</span>
		</a>

		<a
			href="https://zocker.sigrist.dev/"
			target="_blank"
			class="hover:bg-gray-100 flex gap-2 items-center hover:dark:bg-gray-800 p-1 sm:px-3 rounded-md text-gray-800 dark:text-gray-200"
		>
			<span class="hidden sm:block">Zocker</span>
		</a>
		<a
			href="https://t18s.sigrist.dev/"
			target="_blank"
			class="hover:bg-gray-100 flex gap-2 items-center hover:dark:bg-gray-800 p-1 sm:px-3 rounded-md text-gray-800 dark:text-gray-200"
		>
			<span class="hidden sm:block">t18s</span>
		</a>

		<a
			href="https://www.github.com/LorisSigrist"
			target="_blank"
			class="hover:bg-gray-100 flex gap-2 items-center hover:dark:bg-gray-800 p-1 sm:px-3 rounded-md text-gray-800 dark:text-gray-200"
		>
			<span><Github small /></span>

			<span class="hidden sm:block">Github</span>
		</a>

		<a
			class="dark:bg-white bg-black text-white dark:text-black px-1 md:px-3 py-1 rounded-md flex gap-2 items-center"
			href="mailto:loris@sigrist.dev"
		>
			<Icon src={Envelope} class="w-4 h-4" /> <span class="hidden md:block">Contact</span>
		</a>
		<button
			class="hover:bg-gray-100 hover:dark:bg-gray-800 p-2 rounded-md aspect-square"
			on:click={toggle_dark_theme}
			title="Toggle Theme"
		>
			<Themed>
				<Icon src={Sun} slot="light" class="w-4 h-4" />
				<Icon src={Moon} slot="dark" class="w-4 h-4" />
			</Themed>
		</button>
	</div>
</header>
