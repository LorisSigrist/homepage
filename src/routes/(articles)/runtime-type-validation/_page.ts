import { dev } from '$app/environment';
import type { Metadata } from '$lib/Metadata.svelte';

export const csr = dev;

export function load(): Metadata {
	return {
		title: 'Runtime Type Validation'
	};
}
