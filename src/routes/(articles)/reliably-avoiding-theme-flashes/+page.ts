import type { ArticleMetadata } from "$lib/articles/types";

export function load(): ArticleMetadata {
    return {
        title: "Reliably Avoiding Theme flashes",
        description: "askljfh",
        published: new Date("2023-07-10"),
        author: "Loris Sigrist",
        draft: true,
    }
}