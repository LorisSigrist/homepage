import { writable } from 'svelte/store';

const LOCAL_STORAGE_KEY = 'theme';

const hasLocalStorage =
	typeof globalThis !== 'undefined' &&
	typeof globalThis.localStorage !== 'undefined' &&
	typeof globalThis.localStorage.getItem === 'function' &&
	typeof globalThis.localStorage.setItem === 'function';

const hasDocument = typeof document !== 'undefined';

/**
 * @typedef { 'light' | 'dark' } Theme
 */

/**
 * @type {Theme}
 */
const initial_theme =
	hasLocalStorage
		? globalThis.localStorage.getItem(LOCAL_STORAGE_KEY) === 'dark'
			? 'dark'
			: 'light'
		: 'light';

/**
 * @type {import('svelte/store').Writable<Theme>}
 */
export const theme = writable(initial_theme);

theme.subscribe((value) => {
	if (hasLocalStorage) {
		globalThis.localStorage.setItem(LOCAL_STORAGE_KEY, value);
	}
	if (hasDocument) {
		document.documentElement.classList.toggle('dark', value === 'dark');
	}
});
