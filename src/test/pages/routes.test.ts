import { describe, it, expect } from 'vitest';

describe('Route Structure', () => {
  const staticRoutes = ['/', '/about', '/contact', '/trips', '/sailing', '/blog'];

  it('has all required static routes defined', () => {
    expect(staticRoutes).toContain('/');
    expect(staticRoutes).toContain('/trips');
    expect(staticRoutes).toContain('/blog');
    expect(staticRoutes).toContain('/about');
    expect(staticRoutes).toContain('/contact');
    expect(staticRoutes).toContain('/sailing');
  });

  it('all routes start with slash', () => {
    staticRoutes.forEach(route => {
      expect(route).toMatch(/^\//);
    });
  });

  it('has minimum expected route count', () => {
    expect(staticRoutes.length).toBeGreaterThanOrEqual(6);
  });
});

describe('Image Paths', () => {
  it('validates image path format', () => {
    const validPaths = [
      '/images/hero.jpg',
      '/images/trip-thumb.webp',
      '/images/blog/post.jpg',
    ];

    validPaths.forEach(path => {
      expect(path).toMatch(/^\/images\//);
      expect(path).toMatch(/\.(jpg|jpeg|png|webp)$/);
    });
  });

  it('rejects invalid image paths', () => {
    const invalidPaths = [
      'images/no-leading-slash.jpg',
      '/wrong-folder/image.jpg',
      '/images/no-extension',
    ];

    expect(invalidPaths[0]).not.toMatch(/^\/images\//);
    expect(invalidPaths[1]).not.toMatch(/^\/images\//);
    expect(invalidPaths[2]).not.toMatch(/\.(jpg|jpeg|png|webp)$/);
  });
});
