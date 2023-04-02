import type { Metadata } from "$lib/Metadata.svelte";

export function load() : Metadata {
    return {
        title: "Loris Sigrist",
        description: "This is a page",
        author: "Loris Sigrist",
    };
}