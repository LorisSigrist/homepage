import { writable } from 'svelte/store';

const LOCAL_STORAGE_KEY = 'theme';

type Theme = 'light' | 'dark';

let initial_theme: Theme = 'light';

if ('localStorage' in globalThis) {
	initial_theme = localStorage.getItem(LOCAL_STORAGE_KEY) === 'dark' ? 'dark' : 'light';
}

export const theme = writable<Theme>(initial_theme);

theme.subscribe((value) => {
	if ('localStorage' in globalThis) {
		localStorage.setItem(LOCAL_STORAGE_KEY, value);
		document.documentElement.classList.toggle('dark', value === 'dark');
	}
});
