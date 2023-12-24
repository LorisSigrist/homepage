import { MetadataSchema } from "$lib/metadata/types";
import { z } from "zod";

export const ArticleMetadataSchema = MetadataSchema.required().extend({
    draft: z.boolean().default(false).optional(),
});

export const ArticleSchema = ArticleMetadataSchema.extend({
    link: z.string(),
});


/** @typedef {z.infer<typeof ArticleMetadataSchema>} ArticleMetadata */
/** @typedef {z.infer<typeof ArticleSchema>} Article */