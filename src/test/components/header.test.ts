import { describe, it, expect } from 'vitest';

describe('Header Navigation', () => {
  const navLinks = [
    { href: '/work', label: 'Work' },
    { href: '/motion', label: 'Motion' },
    { href: '/blog', label: 'Journal' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const socialLinks = [
    {
      href: 'https://www.instagram.com/marcinskalski_photo/',
      label: 'Instagram',
      icon: 'instagram',
    },
    { href: 'https://www.youtube.com/@marcinskalski2201', label: 'YouTube', icon: 'youtube' },
  ];

  it('has all required navigation links', () => {
    expect(navLinks).toHaveLength(5);
    expect(navLinks.map((l) => l.href)).toContain('/work');
    expect(navLinks.map((l) => l.href)).toContain('/motion');
    expect(navLinks.map((l) => l.href)).toContain('/blog');
  });

  it('has valid navigation link structure', () => {
    navLinks.forEach((link) => {
      expect(link).toHaveProperty('href');
      expect(link).toHaveProperty('label');
      expect(link.href).toMatch(/^\//);
      expect(link.label.length).toBeGreaterThan(0);
    });
  });

  it('has social media links', () => {
    expect(socialLinks).toHaveLength(2);
    expect(socialLinks[0].href).toContain('instagram.com');
    expect(socialLinks[1].href).toContain('youtube.com');
  });

  it('social links have required accessibility properties', () => {
    socialLinks.forEach((link) => {
      expect(link).toHaveProperty('label');
      expect(link).toHaveProperty('icon');
      expect(link.href).toMatch(/^https:\/\//);
    });
  });
});
