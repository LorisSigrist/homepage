import * as v from 'valibot';

export const ArticleMetadataSchema = v.object({
	title: v.string(),

	description: v.string(),
	published: v.optional(v.date()),
	author: v.optional(v.string(), 'Loris Sigrist'),

	draft: v.optional(v.boolean(), false)
});

/** @typedef {v.InferInput<typeof ArticleMetadataSchema>} ArticleMetadata */


/**
 * @typedef {{ link: string, metadata: ArticleMetadata }} Article
 */