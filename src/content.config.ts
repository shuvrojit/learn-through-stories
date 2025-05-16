import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		category: z.string().default('Uncategorized'),
		tags: z.array(z.string()).default([]),
		author: z.string().default('AI Storyteller'),
		featured: z.boolean().default(false),
		difficulty: z.enum(['Beginner', 'Intermediate', 'Advanced']).default('Beginner'),
	}),
});

export const collections = { blog };
