import type { Metadata } from '$lib/Metadata.svelte';

export function load(): Metadata {
	return {
		title: 'Loris Sigrist',
		description:
			'Loris Sigrist is a software engineer based in Zurich, Switzerland. This is his personal website.',
		author: 'Loris Sigrist'
	};
}
