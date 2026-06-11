export const locales = ['en', 'pl'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

// Path prefix for a locale: '' for en, '/pl' for pl
export function localePath(locale: Locale, path: string): string {
  return locale === defaultLocale ? path : `/pl${path === '/' ? '' : path}` || '/pl';
}

// Equivalent URL of the same page in the other locale
export function altPath(pathname: string): { locale: Locale; href: string } {
  if (pathname === '/pl' || pathname.startsWith('/pl/')) {
    return { locale: 'en', href: pathname.replace(/^\/pl/, '') || '/' };
  }
  return { locale: 'pl', href: pathname === '/' ? '/pl' : `/pl${pathname}` };
}

export function localeFromPath(pathname: string): Locale {
  return pathname === '/pl' || pathname.startsWith('/pl/') ? 'pl' : 'en';
}

// Strip the locale folder from a content entry id: 'pl/patagonia-2024' -> 'patagonia-2024'
export function entrySlug(id: string): string {
  return id.replace(/^(en|pl)\//, '');
}

export function entryLocale(id: string): Locale {
  return id.startsWith('pl/') ? 'pl' : 'en';
}

const dateLocales: Record<Locale, string> = { en: 'en-US', pl: 'pl-PL' };

const plMonths = [
  'styczeń',
  'luty',
  'marzec',
  'kwiecień',
  'maj',
  'czerwiec',
  'lipiec',
  'sierpień',
  'wrzesień',
  'październik',
  'listopad',
  'grudzień',
];

// Sortable timestamp for trip display dates like 'March 2024' or 'Marzec 2024'.
// Polish months go first: V8's Date.parse ignores unknown words and would
// collapse 'Lipiec 2023' and 'Luty 2023' both to Jan 1, 2023.
export function tripTime(dateStr: string): number {
  const [month, year] = dateStr.toLowerCase().split(/\s+/);
  const idx = plMonths.indexOf(month);
  if (idx >= 0 && year) return new Date(Number(year), idx, 1).getTime();
  const parsed = Date.parse(dateStr);
  return Number.isNaN(parsed) ? 0 : parsed;
}

export function formatDate(locale: Locale, dateStr: string): string {
  return new Date(dateStr).toLocaleDateString(dateLocales[locale], {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export const ui = {
  en: {
    'nav.work': 'Work',
    'nav.journal': 'Journal',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'footer.email': 'Email',
    'band.start': 'Start a project →',
    'trip.back': 'Back to work',
    'trip.project': 'Project',
    'trip.client': 'Client',
    'trip.format': 'Format',
    'trip.role': 'Role',
    'trip.location': 'Location',
    'trip.year': 'Year',
    'trip.deliverables': 'Deliverables',
    'trip.selectedFrames': 'Selected frames',
    'trip.fromTheField': 'From the field',
    'trip.outcome': 'Outcome',
    'trip.nextStep': 'Next step',
    'trip.similar': 'Have a similar route, brief, or destination in mind?',
    'trip.start': 'Start a project',
    'trip.more': 'See more work',
    'blog.journal': 'Journal',
    'blog.back': 'Back to journal',
    'form.name': 'Name',
    'form.namePlaceholder': 'Your name',
    'form.email': 'Email',
    'form.emailPlaceholder': 'your@email.com',
    'form.projectType': 'Project Type',
    'form.projectTypePlaceholder': 'Select project type',
    'form.type.adventure': 'Adventure campaign',
    'form.type.tourism': 'Destination / tourism',
    'form.type.marine': 'Marine / sailing',
    'form.type.motion': 'Motion only',
    'form.type.hybrid': 'Hybrid photo + video',
    'form.type.other': 'Other',
    'form.budget': 'Budget Range',
    'form.budgetPlaceholder': 'Select budget range',
    'form.budget.under3k': 'Under EUR 3k',
    'form.budget.3k7k': 'EUR 3k to 7k',
    'form.budget.7k15k': 'EUR 7k to 15k',
    'form.budget.15kPlus': 'EUR 15k+',
    'form.location': 'Location',
    'form.locationPlaceholder': 'Country, region, or route',
    'form.timeline': 'Timeline',
    'form.timelinePlaceholder': 'Shoot window or delivery deadline',
    'form.deliverables': 'Deliverables',
    'form.deliverablesPlaceholder':
      'Stills, reel, drone, social cutdowns, content library, usage needs...',
    'form.message': 'Message',
    'form.messagePlaceholder': 'Context, goals, references, crew size, or anything else useful...',
    'form.submit': 'Send Message',
    'form.sending': 'Sending...',
    'form.success': 'Thank you! Your message has been sent successfully.',
    'form.error': 'Sorry, there was an error sending your message. Please try again.',
  },
  pl: {
    'nav.work': 'Prace',
    'nav.journal': 'Dziennik',
    'nav.about': 'O mnie',
    'nav.contact': 'Kontakt',
    'footer.email': 'E-mail',
    'band.start': 'Rozpocznij projekt →',
    'trip.back': 'Wróć do prac',
    'trip.project': 'Projekt',
    'trip.client': 'Klient',
    'trip.format': 'Format',
    'trip.role': 'Rola',
    'trip.location': 'Lokalizacja',
    'trip.year': 'Rok',
    'trip.deliverables': 'Materiały',
    'trip.selectedFrames': 'Wybrane kadry',
    'trip.fromTheField': 'Z terenu',
    'trip.outcome': 'Rezultat',
    'trip.nextStep': 'Kolejny krok',
    'trip.similar': 'Masz w głowie podobną trasę, brief albo kierunek?',
    'trip.start': 'Rozpocznij projekt',
    'trip.more': 'Zobacz więcej prac',
    'blog.journal': 'Dziennik',
    'blog.back': 'Wróć do dziennika',
    'form.name': 'Imię i nazwisko',
    'form.namePlaceholder': 'Twoje imię',
    'form.email': 'E-mail',
    'form.emailPlaceholder': 'twoj@email.com',
    'form.projectType': 'Rodzaj projektu',
    'form.projectTypePlaceholder': 'Wybierz rodzaj projektu',
    'form.type.adventure': 'Kampania outdoorowa',
    'form.type.tourism': 'Destynacja / turystyka',
    'form.type.marine': 'Morze / żeglarstwo',
    'form.type.motion': 'Tylko wideo',
    'form.type.hybrid': 'Hybryda foto + wideo',
    'form.type.other': 'Inny',
    'form.budget': 'Budżet',
    'form.budgetPlaceholder': 'Wybierz przedział budżetu',
    'form.budget.under3k': 'Poniżej 3 tys. EUR',
    'form.budget.3k7k': '3–7 tys. EUR',
    'form.budget.7k15k': '7–15 tys. EUR',
    'form.budget.15kPlus': 'Powyżej 15 tys. EUR',
    'form.location': 'Lokalizacja',
    'form.locationPlaceholder': 'Kraj, region lub trasa',
    'form.timeline': 'Termin',
    'form.timelinePlaceholder': 'Okno zdjęciowe lub deadline dostawy',
    'form.deliverables': 'Materiały',
    'form.deliverablesPlaceholder':
      'Zdjęcia, reel, dron, cutdowny social, biblioteka contentu, zakres licencji...',
    'form.message': 'Wiadomość',
    'form.messagePlaceholder':
      'Kontekst, cele, referencje, wielkość ekipy — wszystko, co pomoże...',
    'form.submit': 'Wyślij wiadomość',
    'form.sending': 'Wysyłanie...',
    'form.success': 'Dziękuję! Wiadomość została wysłana.',
    'form.error': 'Przepraszam, wystąpił błąd podczas wysyłania. Spróbuj ponownie.',
  },
} as const;

export type UIKey = keyof (typeof ui)['en'];

export function useTranslations(locale: Locale) {
  return function t(key: UIKey): string {
    return ui[locale][key] ?? ui[defaultLocale][key];
  };
}
