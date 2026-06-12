export interface CountryPhoto {
  src: string;
  alt: string;
}

export interface VisitedRegion {
  /**
   * Lowercase region code matching the svg-maps location ids:
   * ISO 3166-1 alpha-2 for countries (@svg-maps/world),
   * USPS abbreviation for US states (@svg-maps/usa).
   */
  code: string;
  /** Trip slug under src/content/trips, linked from the region panel */
  trip?: string;
  photos: CountryPhoto[];
}

// England, Scotland, and Northern Ireland are a single 'gb' shape on the map;
// Isle of Man ('im'), Faroe Islands ('fo'), and Åland ('ax') are separate.
export const visitedCountries: VisitedRegion[] = [
  {
    code: 'ar',
    trip: 'patagonia-2024',
    photos: [
      { src: '/images/trips/patagonia-1.jpg', alt: 'Torres del Paine peaks' },
      { src: '/images/trips/patagonia-2.jpg', alt: 'Patagonian glacier field' },
      { src: '/images/trips/patagonia-3.jpg', alt: 'Fitz Roy at dawn' },
    ],
  },
  { code: 'at', photos: [] },
  { code: 'ax', photos: [] },
  { code: 'bg', photos: [] },
  { code: 'ca', photos: [] },
  { code: 'cn', photos: [] },
  { code: 'cz', photos: [] },
  { code: 'de', photos: [] },
  { code: 'dk', photos: [] },
  { code: 'es', photos: [] },
  { code: 'fi', photos: [] },
  { code: 'fo', photos: [] },
  {
    code: 'gb',
    trip: 'scottish-highlands-2022',
    photos: [
      { src: '/images/trips/scotland-1.jpg', alt: 'Highland glen' },
      { src: '/images/trips/scotland-2.jpg', alt: 'Scottish coast' },
      { src: '/images/trips/scotland-3.jpg', alt: 'Munro summit weather' },
    ],
  },
  { code: 'gr', photos: [] },
  { code: 'hr', photos: [] },
  { code: 'hu', photos: [] },
  { code: 'ie', photos: [] },
  { code: 'im', photos: [] },
  {
    code: 'is',
    trip: 'iceland-2023',
    photos: [
      { src: '/images/trips/iceland-1.jpg', alt: 'Icelandic highlands' },
      { src: '/images/trips/iceland-2.jpg', alt: 'Glacier lagoon' },
      { src: '/images/trips/iceland-3.jpg', alt: 'Aurora over the coast' },
    ],
  },
  {
    code: 'it',
    trip: 'dolomites-2022',
    photos: [
      { src: '/images/trips/dolomites-1.jpg', alt: 'Dolomites ridgeline' },
      { src: '/images/trips/dolomites-2.jpg', alt: 'Alpine meadow below the towers' },
      { src: '/images/trips/dolomites-3.jpg', alt: 'Dolomites storm light' },
    ],
  },
  { code: 'jp', photos: [] },
  { code: 'kr', photos: [] },
  { code: 'ma', photos: [] },
  { code: 'me', photos: [] },
  { code: 'nl', photos: [] },
  {
    code: 'no',
    trip: 'norwegian-fjords-2023',
    photos: [
      { src: '/images/trips/norway-1.jpg', alt: 'Norwegian fjord walls' },
      { src: '/images/trips/norway-2.jpg', alt: 'Fjord village at dusk' },
      { src: '/images/trips/norway-3.jpg', alt: 'Sailing the fjords' },
    ],
  },
  { code: 'pl', photos: [] },
  { code: 'pt', photos: [] },
  { code: 'se', photos: [] },
  { code: 'sk', photos: [] },
  { code: 'th', photos: [] },
];

/**
 * The USA is tracked state by state on its own map. Any entry here marks the
 * United States as visited on the world map — attach US photos to states, not
 * to a 'us' country entry.
 */
export const visitedUsStates: VisitedRegion[] = [
  { code: 'az', photos: [] },
  { code: 'il', photos: [] },
  { code: 'nv', photos: [] },
  { code: 'ut', photos: [] },
];
