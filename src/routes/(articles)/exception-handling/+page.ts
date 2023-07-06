import { dev } from '$app/environment';
import type { Metadata } from '$lib/Metadata.svelte';

export const csr = dev;

export function load(): Metadata {
	return {
		title: 'Exception Handling',
		description: `This article explores advanced patterns for exception handling, 
        Why you should create custom exceptions, and how to properly catch and throw them.`,
		published: new Date('2023-04-07'),
		author: 'Loris Sigrist'
	};
}
