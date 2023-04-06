import { dev } from '$app/environment';
import type { Metadata } from '$lib/Metadata.svelte';

export const csr = dev;

export function load(): Metadata {
	return {
		title: 'Building Bachtel',
		description: `Bachtel is a time- and performance tracking app built for Youth-Workers.`
	};
}
