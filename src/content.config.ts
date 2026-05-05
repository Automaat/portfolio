import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const trips = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/trips' }),
  schema: z.object({
    title: z.string(),
    location: z.string(),
    date: z.string(),
    description: z.string(),
    thumbnail: z.string(),
    featured: z.boolean().default(false),
    images: z.array(z.string()).optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    image: z.string(),
    excerpt: z.string().optional(),
  }),
});

export const collections = {
  trips,
  blog,
};
