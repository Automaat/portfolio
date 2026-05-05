import { describe, it, expect } from 'vitest';
import { z } from 'zod';

// Test schemas match content/config.ts
const tripsSchema = z.object({
  title: z.string(),
  location: z.string(),
  date: z.string(),
  description: z.string(),
  thumbnail: z.string(),
  featured: z.boolean().default(false),
  images: z.array(z.string()).optional(),
  client: z.string().optional(),
  role: z.string().optional(),
  deliverables: z.array(z.string()).optional(),
  outcome: z.string().optional(),
  brief: z.string().optional(),
  format: z.string().optional(),
});

const blogSchema = z.object({
  title: z.string(),
  date: z.string(),
  description: z.string(),
  image: z.string(),
  excerpt: z.string().optional(),
});

describe('Trips Schema', () => {
  it('validates valid trip data', () => {
    const validTrip = {
      title: 'Patagonia Adventure',
      location: 'Argentina',
      date: '2024-01-15',
      description: 'Epic trek through mountains',
      thumbnail: '/images/patagonia-thumb.jpg',
      featured: true,
      images: ['/images/p1.jpg', '/images/p2.jpg'],
    };

    expect(() => tripsSchema.parse(validTrip)).not.toThrow();
  });

  it('requires all mandatory fields', () => {
    const invalidTrip = {
      title: 'Test Trip',
      location: 'Test Location',
    };

    expect(() => tripsSchema.parse(invalidTrip)).toThrow();
  });

  it('sets featured to false by default', () => {
    const trip = {
      title: 'Test',
      location: 'Location',
      date: '2024-01-01',
      description: 'Description',
      thumbnail: '/thumb.jpg',
    };

    const result = tripsSchema.parse(trip);
    expect(result.featured).toBe(false);
  });

  it('allows optional images array', () => {
    const tripWithoutImages = {
      title: 'Test',
      location: 'Location',
      date: '2024-01-01',
      description: 'Description',
      thumbnail: '/thumb.jpg',
    };

    expect(() => tripsSchema.parse(tripWithoutImages)).not.toThrow();
  });

  it('rejects invalid image arrays', () => {
    const tripWithInvalidImages = {
      title: 'Test',
      location: 'Location',
      date: '2024-01-01',
      description: 'Description',
      thumbnail: '/thumb.jpg',
      images: 'not-an-array',
    };

    expect(() => tripsSchema.parse(tripWithInvalidImages)).toThrow();
  });
});

describe('Blog Schema', () => {
  it('validates valid blog data', () => {
    const validBlog = {
      title: 'My Adventure Story',
      date: '2024-01-15',
      description: 'A tale of adventure',
      image: '/images/blog-hero.jpg',
      excerpt: 'Short excerpt',
    };

    expect(() => blogSchema.parse(validBlog)).not.toThrow();
  });

  it('requires all mandatory fields', () => {
    const invalidBlog = {
      title: 'Test Blog',
      date: '2024-01-01',
    };

    expect(() => blogSchema.parse(invalidBlog)).toThrow();
  });

  it('allows optional excerpt', () => {
    const blogWithoutExcerpt = {
      title: 'Test',
      date: '2024-01-01',
      description: 'Description',
      image: '/image.jpg',
    };

    expect(() => blogSchema.parse(blogWithoutExcerpt)).not.toThrow();
  });

  it('rejects non-string fields', () => {
    const invalidBlog = {
      title: 123,
      date: '2024-01-01',
      description: 'Description',
      image: '/image.jpg',
    };

    expect(() => blogSchema.parse(invalidBlog)).toThrow();
  });
});
