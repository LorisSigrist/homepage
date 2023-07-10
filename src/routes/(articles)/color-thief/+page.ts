import type { ArticleMetadata } from "$lib/articles/types";

export function load(): ArticleMetadata {
    return {
        title: "Color Thief",
        description: "A JavaScript library for extracting colors from images.",
        published: new Date("2023-06-20"),
        author: "Loris Sigrist",
        draft: true
    }
}