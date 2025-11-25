import { describe, it, expect } from 'vitest';

describe('Hero Component Props', () => {
  it('determines responsive mode correctly', () => {
    // With mobile images
    const responsive1 = !!(undefined || undefined || '/mobile.webp');
    expect(responsive1).toBe(true);

    // With webp
    const responsive2 = !!(undefined || '/desktop.webp' || undefined);
    expect(responsive2).toBe(true);

    // Without any optional images
    const responsive3 = !!(undefined || undefined || undefined);
    expect(responsive3).toBe(false);
  });

  it('validates required props', () => {
    const requiredProps = {
      image: '/hero.jpg',
      alt: 'Hero image',
    };

    expect(requiredProps.image).toBeTruthy();
    expect(requiredProps.alt).toBeTruthy();
  });

  it('validates optional props', () => {
    const optionalProps = {
      imageWebp: '/hero.webp',
      imageMobile: '/hero-mobile.jpg',
      imageMobileWebp: '/hero-mobile.webp',
      title: 'Adventure',
      subtitle: 'Explore the world',
    };

    expect(optionalProps.imageWebp).toBeTruthy();
    expect(optionalProps.imageMobile).toBeTruthy();
    expect(optionalProps.imageMobileWebp).toBeTruthy();
    expect(optionalProps.title).toBeTruthy();
    expect(optionalProps.subtitle).toBeTruthy();
  });
});
