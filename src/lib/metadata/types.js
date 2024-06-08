import * as v from 'valibot';

export const MetadataSchema = v.object({
	title: v.string(),
	description: v.string(),
	published: v.optional(v.date()),
	author: v.optional(v.string(), 'Loris Sigrist')
});

/** @typedef {v.InferInput<typeof MetadataSchema>} Metadata */
