<script lang="ts">
	import avatar from '$lib/assets/avatar.png';

	function toggle_dark_theme() {
		document.getElementsByTagName('html')[0].classList.toggle('dark');
	}
</script>

<header class="container mx-auto px-4 py-4 print:hidden flex flex-row justify-between">
	<div id="header-start">
		<a href="/" class="flex flex-row items-center gap-4">
			<img
				src={avatar}
				alt="Loris Sigrist looking very handsome"
				class="rounded-full w-10 aspect-square"
			/>

            <span class="font-bold text-lg">Loris Sigrist</span>
		</a>
	</div>
	<div id="header-end">
		<button
			class="hover:bg-gray-100 hover:dark:bg-gray-800 p-1 px-4 rounded-md"
			on:click={toggle_dark_theme}>Toggle dark theme</button
		>
	</div>
</header>
