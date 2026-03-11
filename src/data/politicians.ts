export type PoliticalType =
  | 'Democrat'
  | 'Republican'
  | 'Independent'
  | 'Socialist'
  | 'Libertarian'
  | 'Green';

export type PoliticalAbility =
  | 'Filibuster'
  | 'Executive Order'
  | 'Veto Power'
  | 'Grassroots Surge'
  | 'Super PAC'
  | 'Tweet Storm'
  | 'Bipartisan Bridge'
  | 'Whistleblower'
  | 'Union Rally'
  | 'Tax Cut Slash'
  | 'Healthcare Blitz'
  | 'Border Wall'
  | 'Green New Deal'
  | 'Deregulation'
  | 'Infrastructure Bill'
  | 'Impeachment';

export interface Politician {
  id: number;
  name: string;
  title: string;
  type: PoliticalType;
  secondaryType?: PoliticalType;
  sprite: string;         // emoji used as avatar
  description: string;
  stats: {
    charisma: number;     // public appeal
    policy: number;       // legislative record
    experience: number;   // years in office
    fundraising: number;  // campaign war chest
    approval: number;     // approval rating
    controversy: number;  // scandal meter
  };
  abilities: PoliticalAbility[];
  height: string;
  weight: string;
  party: string;
  state: string;
  firstElected: number;
  evolutionFrom?: number;  // predecessor
}

export const politicians: Politician[] = [
  {
    id: 1,
    name: 'Bidenite',
    title: 'The Comeback Kid',
    type: 'Democrat',
    sprite: '👴',
    description:
      'A veteran senator turned president, Bidenite wields decades of political experience. Its Bipartisan Bridge ability is rarely seen in the wild.',
    stats: {
      charisma: 62,
      policy: 78,
      experience: 95,
      fundraising: 85,
      approval: 45,
      controversy: 60,
    },
    abilities: ['Bipartisan Bridge', 'Infrastructure Bill', 'Executive Order'],
    height: "6'0\"",
    weight: '178 lbs',
    party: 'Democratic Party',
    state: 'Delaware',
    firstElected: 1972,
  },
  {
    id: 2,
    name: 'Trumpasaurus',
    title: 'The Disruptor',
    type: 'Republican',
    sprite: '🦁',
    description:
      'A business mogul turned political phenomenon. Trumpasaurus uses Tweet Storm attacks that shake the entire political ecosystem.',
    stats: {
      charisma: 88,
      policy: 55,
      experience: 48,
      fundraising: 95,
      approval: 46,
      controversy: 99,
    },
    abilities: ['Tweet Storm', 'Tax Cut Slash', 'Executive Order'],
    height: "6'3\"",
    weight: '215 lbs',
    party: 'Republican Party',
    state: 'Florida',
    firstElected: 2016,
  },
  {
    id: 3,
    name: 'Sanderton',
    title: 'The Revolutionary',
    type: 'Democrat',
    secondaryType: 'Socialist',
    sprite: '✊',
    description:
      'A fiery independent who channels the power of the working class. Its Grassroots Surge can topple much stronger opponents.',
    stats: {
      charisma: 85,
      policy: 80,
      experience: 82,
      fundraising: 78,
      approval: 55,
      controversy: 55,
    },
    abilities: ['Grassroots Surge', 'Union Rally', 'Healthcare Blitz'],
    height: "5'11\"",
    weight: '174 lbs',
    party: 'Independent / Democratic Socialist',
    state: 'Vermont',
    firstElected: 1990,
  },
  {
    id: 4,
    name: 'Obameon',
    title: 'The Orator',
    type: 'Democrat',
    sprite: '🌟',
    description:
      'A once-in-a-generation political force whose Charisma stat is among the highest ever recorded. Its speeches can change entire policy landscapes.',
    stats: {
      charisma: 98,
      policy: 82,
      experience: 72,
      fundraising: 95,
      approval: 63,
      controversy: 42,
    },
    abilities: ['Grassroots Surge', 'Healthcare Blitz', 'Bipartisan Bridge'],
    height: "6'1\"",
    weight: '180 lbs',
    party: 'Democratic Party',
    state: 'Illinois',
    firstElected: 2004,
  },
  {
    id: 5,
    name: 'McConnelite',
    title: 'The Tactician',
    type: 'Republican',
    sprite: '🐢',
    description:
      'A master of legislative procedure, McConnelite uses Filibuster with devastating effect. Its slow-and-steady strategy has outlasted countless opponents.',
    stats: {
      charisma: 30,
      policy: 85,
      experience: 98,
      fundraising: 88,
      approval: 22,
      controversy: 72,
    },
    abilities: ['Filibuster', 'Super PAC', 'Deregulation'],
    height: "5'7\"",
    weight: '165 lbs',
    party: 'Republican Party',
    state: 'Kentucky',
    firstElected: 1984,
  },
  {
    id: 6,
    name: 'AOCfire',
    title: 'The Progressive',
    type: 'Democrat',
    secondaryType: 'Socialist',
    sprite: '🔥',
    description:
      'A young firebrand from New York who shocked the political world on her first election. AOCfire\'s Green New Deal move reshapes the climate debate.',
    stats: {
      charisma: 90,
      policy: 70,
      experience: 42,
      fundraising: 82,
      approval: 52,
      controversy: 65,
    },
    abilities: ['Green New Deal', 'Grassroots Surge', 'Tweet Storm'],
    height: "5'6\"",
    weight: '130 lbs',
    party: 'Democratic Party',
    state: 'New York',
    firstElected: 2018,
  },
  {
    id: 7,
    name: 'Paulibur',
    title: 'The Libertarian',
    type: 'Republican',
    secondaryType: 'Libertarian',
    sprite: '🗽',
    description:
      'An ideologically pure libertarian who distrusts government power above all else. Paulibur\'s Deregulation and Whistleblower abilities confound both parties.',
    stats: {
      charisma: 65,
      policy: 78,
      experience: 75,
      fundraising: 60,
      approval: 40,
      controversy: 45,
    },
    abilities: ['Deregulation', 'Filibuster', 'Whistleblower'],
    height: "5'8\"",
    weight: '155 lbs',
    party: 'Republican / Libertarian',
    state: 'Kentucky',
    firstElected: 2010,
  },
  {
    id: 8,
    name: 'Pelosirex',
    title: 'The Speaker',
    type: 'Democrat',
    sprite: '🦅',
    description:
      'A legendary political operator whose Veto Power and Impeachment moves are feared across the aisle. Pelosirex has survived decades of political warfare.',
    stats: {
      charisma: 72,
      policy: 90,
      experience: 96,
      fundraising: 92,
      approval: 40,
      controversy: 68,
    },
    abilities: ['Impeachment', 'Veto Power', 'Super PAC'],
    height: "5'5\"",
    weight: '120 lbs',
    party: 'Democratic Party',
    state: 'California',
    firstElected: 1987,
  },
  {
    id: 9,
    name: 'Gabbidian',
    title: 'The Maverick',
    type: 'Independent',
    sprite: '🌊',
    description:
      'A unique specimen that began as a Democrat and evolved into an Independent. Gabbidian defies easy categorization and surprises opponents with unexpected moves.',
    stats: {
      charisma: 78,
      policy: 62,
      experience: 60,
      fundraising: 55,
      approval: 35,
      controversy: 70,
    },
    abilities: ['Whistleblower', 'Tweet Storm', 'Bipartisan Bridge'],
    height: "5'8\"",
    weight: '138 lbs',
    party: 'Independent',
    state: 'Hawaii',
    firstElected: 2002,
  },
  {
    id: 10,
    name: 'Naderix',
    title: 'The Idealist',
    type: 'Green',
    sprite: '🌿',
    description:
      'The rarest type of political creature, Naderix prioritizes principle over power. Its Green New Deal and Whistleblower combo is ecologically devastating.',
    stats: {
      charisma: 70,
      policy: 85,
      experience: 78,
      fundraising: 30,
      approval: 5,
      controversy: 55,
    },
    abilities: ['Green New Deal', 'Whistleblower', 'Grassroots Surge'],
    height: "6'0\"",
    weight: '185 lbs',
    party: 'Green Party',
    state: 'Connecticut',
    firstElected: 1996,
  },
  {
    id: 11,
    name: 'Harrisite',
    title: 'The Barrier Breaker',
    type: 'Democrat',
    sprite: '⚖️',
    description:
      'A former prosecutor who ascended to the highest office in the land. Harrisite\'s courtroom-forged Policy stat is matched only by its historic significance.',
    stats: {
      charisma: 75,
      policy: 74,
      experience: 68,
      fundraising: 88,
      approval: 42,
      controversy: 52,
    },
    abilities: ['Healthcare Blitz', 'Executive Order', 'Infrastructure Bill'],
    height: "5'2\"",
    weight: '125 lbs',
    party: 'Democratic Party',
    state: 'California',
    firstElected: 2004,
  },
  {
    id: 12,
    name: 'DeSantoid',
    title: 'The Culture Warrior',
    type: 'Republican',
    sprite: '🐊',
    description:
      'A Florida governor who turned a swing state red. DeSantoid\'s culture-war attacks are super effective against liberal-type opponents.',
    stats: {
      charisma: 68,
      policy: 72,
      experience: 62,
      fundraising: 85,
      approval: 48,
      controversy: 78,
    },
    abilities: ['Tax Cut Slash', 'Deregulation', 'Border Wall'],
    height: "6'0\"",
    weight: '198 lbs',
    party: 'Republican Party',
    state: 'Florida',
    firstElected: 2018,
  },
];

export const typeColors: Record<PoliticalType, string> = {
  Democrat: '#2563eb',
  Republican: '#dc2626',
  Independent: '#6b21a8',
  Socialist: '#be123c',
  Libertarian: '#ca8a04',
  Green: '#16a34a',
};

export const typeEmoji: Record<PoliticalType, string> = {
  Democrat: '🔵',
  Republican: '🔴',
  Independent: '🟣',
  Socialist: '🌹',
  Libertarian: '🗽',
  Green: '🌿',
};
