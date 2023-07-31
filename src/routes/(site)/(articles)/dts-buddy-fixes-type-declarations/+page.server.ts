import type { ArticleMetadata } from "$lib/articles/types";

export function load(): ArticleMetadata {
    return {
        title: "dts-buddy fixes type declarations",
        description: "dts-buddy is a bundler for type-definitions. It helps sidestep the most common issues with type definitions.",
        published: new Date(2023, 6, 18),
        author: "Loris Sigrist",
        draft: false,
    }
}