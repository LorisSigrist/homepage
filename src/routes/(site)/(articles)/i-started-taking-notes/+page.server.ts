import type { ArticleMetadata } from "$lib/articles/types";

export function load(): ArticleMetadata {
    return {
        title: "I've Started Taking Notes",
        description: "There is a sea of content out there to consume. Only some of it is worth your time. Taking notes has helped me choose better & be more satisfied with my time.",
        published: new Date("2024-03-21"),
        draft: true,
        author: "Loris Sigrist",
    }
}