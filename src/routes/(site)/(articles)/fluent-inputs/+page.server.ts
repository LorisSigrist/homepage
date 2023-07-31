import type { ArticleMetadata } from "$lib/articles/types";

export function load(): ArticleMetadata {
    return {
        title: "Fluent Inputs",
        description: "TODO",
        published: new Date("2023-08-10"),
        author: "Loris Sigrist",
        draft: true,
    }
}