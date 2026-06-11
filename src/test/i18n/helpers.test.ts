import { describe, it, expect } from 'vitest';
import {
  altPath,
  entryLocale,
  entrySlug,
  formatDate,
  localeFromPath,
  localePath,
  tripTime,
} from '../../i18n';

describe('localePath', () => {
  it('leaves English paths unprefixed', () => {
    expect(localePath('en', '/')).toBe('/');
    expect(localePath('en', '/work')).toBe('/work');
  });

  it('prefixes Polish paths with /pl', () => {
    expect(localePath('pl', '/work')).toBe('/pl/work');
    expect(localePath('pl', '/trips/patagonia-2024')).toBe('/pl/trips/patagonia-2024');
  });

  it('maps the Polish root to /pl without trailing slash', () => {
    expect(localePath('pl', '/')).toBe('/pl');
  });
});

describe('altPath', () => {
  it('maps English pages to their Polish counterpart', () => {
    expect(altPath('/')).toEqual({ locale: 'pl', href: '/pl' });
    expect(altPath('/work')).toEqual({ locale: 'pl', href: '/pl/work' });
  });

  it('maps Polish pages back to English', () => {
    expect(altPath('/pl')).toEqual({ locale: 'en', href: '/' });
    expect(altPath('/pl/work')).toEqual({ locale: 'en', href: '/work' });
    expect(altPath('/pl/trips/patagonia-2024')).toEqual({
      locale: 'en',
      href: '/trips/patagonia-2024',
    });
  });

  it('does not treat /plain paths as Polish', () => {
    expect(altPath('/plain').locale).toBe('pl');
  });
});

describe('localeFromPath', () => {
  it('detects locale from pathname', () => {
    expect(localeFromPath('/')).toBe('en');
    expect(localeFromPath('/work')).toBe('en');
    expect(localeFromPath('/pl')).toBe('pl');
    expect(localeFromPath('/pl/work')).toBe('pl');
    expect(localeFromPath('/plain')).toBe('en');
  });
});

describe('entrySlug / entryLocale', () => {
  it('strips the locale folder from entry ids', () => {
    expect(entrySlug('en/patagonia-2024')).toBe('patagonia-2024');
    expect(entrySlug('pl/patagonia-2024')).toBe('patagonia-2024');
  });

  it('derives the locale from entry ids', () => {
    expect(entryLocale('en/patagonia-2024')).toBe('en');
    expect(entryLocale('pl/patagonia-2024')).toBe('pl');
  });
});

describe('tripTime', () => {
  it('orders English month-year dates', () => {
    expect(tripTime('March 2024')).toBeGreaterThan(tripTime('July 2023'));
    expect(tripTime('July 2023')).toBeGreaterThan(tripTime('February 2023'));
  });

  it('distinguishes Polish months within the same year', () => {
    // V8's Date.parse would collapse both to Jan 1, 2023
    expect(tripTime('Lipiec 2023')).toBeGreaterThan(tripTime('Luty 2023'));
  });

  it('gives translated dates the same timestamp', () => {
    expect(tripTime('Marzec 2024')).toBe(tripTime('March 2024'));
    expect(tripTime('Wrzesień 2022')).toBe(tripTime('September 2022'));
  });

  it('returns 0 for unparseable input', () => {
    expect(tripTime('soon')).toBe(0);
  });
});

describe('formatDate', () => {
  it('formats YYYY-MM-DD as a local calendar date in both locales', () => {
    expect(formatDate('en', '2024-03-15')).toBe('March 15, 2024');
    expect(formatDate('pl', '2024-03-15')).toBe('15 marca 2024');
  });

  it('keeps the calendar day regardless of timezone', () => {
    // Would render March 14 in negative-offset timezones if parsed as UTC
    expect(formatDate('en', '2024-03-15')).toContain('15');
  });
});
