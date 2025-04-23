import { writable } from 'svelte/store';

const LOCAL_STORAGE_KEY = 'theme';

/**
 * @typedef { 'light' | 'dark' } Theme
 */

/**
 * @type {Theme}
 */
const initial_theme =
	'localStorage' in globalThis
		? localStorage.getItem(LOCAL_STORAGE_KEY) === 'dark'
			? 'dark'
			: 'light'
		: 'light';

/**
 * @type {import('svelte/store').Writable<Theme>}
 */
export const theme = writable(initial_theme);

theme.subscribe((value) => {
	if ('localStorage' in globalThis) {
		localStorage.setItem(LOCAL_STORAGE_KEY, value);
		document.documentElement.classList.toggle('dark', value === 'dark');
	}
});
