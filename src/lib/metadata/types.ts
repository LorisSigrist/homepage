import { z } from "zod";

export const MetadataSchema = z.object({
    title: z.string(),
    description: z.string(),
    published: z.date().optional(),
    author: z.string().optional().default("Loris Sigrist"),
});

export type Metadata = z.infer<typeof MetadataSchema>;
