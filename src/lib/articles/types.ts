import { MetadataSchema } from "$lib/metadata/types";
import { z } from "zod";

export const ArticleMetadataSchema = MetadataSchema.required().extend({
    draft: z.boolean().default(false).optional(),
});

export type ArticleMetadata = z.infer<typeof ArticleMetadataSchema>;

export const ArticleSchema = ArticleMetadataSchema.extend({
    link: z.string(),
});

export type Article = z.infer<typeof ArticleSchema>;