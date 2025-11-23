import { defineCollection, z } from 'astro:content';

const trips = defineCollection({
  type: 'content',
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
  type: 'content',
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
