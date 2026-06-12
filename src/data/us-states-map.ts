import { feature } from 'topojson-client';
import { geoAlbersUsa, geoPath } from 'd3-geo';
import type { Topology, GeometryCollection } from 'topojson-specification';
import statesTopoJson from 'us-atlas/states-10m.json';

interface StateProps {
  name: string;
}

// US state outlines generated at build time from us-atlas (ISC license,
// public-domain US Census Bureau cartography). Keyed by lowercase USPS
// code to match the visitedUsStates data. Territories without a USPS
// mapping here (PR, GU, VI, AS, MP) are dropped, as is anything the
// AlbersUsa composite projection cannot place.
const FIPS_TO_USPS: Record<string, string> = {
  '01': 'al',
  '02': 'ak',
  '04': 'az',
  '05': 'ar',
  '06': 'ca',
  '08': 'co',
  '09': 'ct',
  '10': 'de',
  '11': 'dc',
  '12': 'fl',
  '13': 'ga',
  '15': 'hi',
  '16': 'id',
  '17': 'il',
  '18': 'in',
  '19': 'ia',
  '20': 'ks',
  '21': 'ky',
  '22': 'la',
  '23': 'me',
  '24': 'md',
  '25': 'ma',
  '26': 'mi',
  '27': 'mn',
  '28': 'ms',
  '29': 'mo',
  '30': 'mt',
  '31': 'ne',
  '32': 'nv',
  '33': 'nh',
  '34': 'nj',
  '35': 'nm',
  '36': 'ny',
  '37': 'nc',
  '38': 'nd',
  '39': 'oh',
  '40': 'ok',
  '41': 'or',
  '42': 'pa',
  '44': 'ri',
  '45': 'sc',
  '46': 'sd',
  '47': 'tn',
  '48': 'tx',
  '49': 'ut',
  '50': 'vt',
  '51': 'va',
  '53': 'wa',
  '54': 'wv',
  '55': 'wi',
  '56': 'wy',
};

const topo = statesTopoJson as unknown as Topology<{ states: GeometryCollection<StateProps> }>;
const statesGeo = feature(topo, topo.objects.states);
const toPath = geoPath(geoAlbersUsa().scale(1300).translate([487.5, 305]));

export interface UsStateLocation {
  id: string;
  name: string;
  path: string;
}

export const usaMap: { viewBox: string; locations: UsStateLocation[] } = {
  viewBox: '0 0 975 610',
  locations: statesGeo.features.flatMap((f) => {
    const id = FIPS_TO_USPS[String(f.id)];
    const path = toPath(f);
    return id && path ? [{ id, name: f.properties.name, path }] : [];
  }),
};
