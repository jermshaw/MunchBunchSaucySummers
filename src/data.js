export const CARD_COLORS = ['#ed5043', '#7475b2', '#fbb622', '#37bf65']

export const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'festivals', label: '🎪 Festivals' },
  { id: 'outdoors', label: '🌿 Outdoors' },
  { id: 'food-drink', label: '🍷 Food & Drink' },
  { id: 'arts', label: '🎨 Arts & Culture' },
  { id: 'sports', label: '⚾ Sports' },
  { id: 'water', label: '💧 Water' },
]

export const events = [
  // --- Confirmed Events ---
  {
    id: 1,
    confirmed: true,
    date: 'June 12',
    dayOfWeek: 'Fri',
    month: 'Jun',
    day: '12',
    gcalDate: '20260612',
    title: 'Sunset Night Market',
    location: 'Outer Sunset, Irving St.',
    category: 'festivals',
    description:
      'Sunset Night Market is basically the Outer Sunset turning into a huge Asian-inspired street festival for one night. Irving Street gets shut down between 20th–25th Ave and fills with food vendors, local makers, live music, DJs, performances, and thousands of people wandering around eating skewers, dumplings, noodles, and desserts. It feels more neighborhood-driven and local than a lot of SF festivals, which is part of why people love it.',
  },
  {
    id: 2,
    confirmed: true,
    date: 'June 13',
    dayOfWeek: 'Sat',
    month: 'Jun',
    day: '13',
    gcalDate: '20260613',
    title: 'West Coast Craft',
    location: 'Fort Mason',
    category: 'festivals',
    description:
      'West Coast Craft is one of the best summer events in SF for people who like good design, food, and wandering around without much of a plan. Hosted at Fort Mason, it\'s a huge curated market featuring hundreds of local artists, designers, ceramicists, clothing brands, furniture makers, and food vendors. The crowd is very Bay Area creative energy in the best way, and the waterfront setting makes it especially good in the late afternoon when the fog starts rolling in.',
  },
  {
    id: 3,
    confirmed: true,
    date: 'June 14',
    dayOfWeek: 'Sun',
    month: 'Jun',
    day: '14',
    gcalDate: '20260614',
    title: 'West Coast Craft',
    location: 'Fort Mason',
    category: 'festivals',
    description:
      'West Coast Craft continues on Sunday — same great vibes. It\'s the kind of event where you grab a drink, slowly explore, discover weirdly beautiful things you definitely don\'t need, and then roll into dinner nearby afterward.',
  },
  {
    id: 4,
    confirmed: true,
    date: 'June 19',
    dayOfWeek: 'Thu',
    month: 'Jun',
    day: '19',
    gcalDate: '20260619',
    title: 'Off the Grid',
    location: 'Fort Mason',
    category: 'festivals',
    description:
      'Off the Grid Fort Mason Center is basically SF\'s ideal summer Friday night. The historic Fort Mason waterfront turns into a giant outdoor night market with rotating food trucks, local craft vendors, bars, DJs, live music, and tons of people hanging out with Golden Gate views as the sun goes down. The 2026 season runs monthly on select Fridays from 5–10pm.',
  },
  {
    id: 5,
    confirmed: true,
    date: 'June 20',
    dayOfWeek: 'Fri',
    month: 'Jun',
    day: '20',
    gcalDate: '20260620',
    title: 'Richmond Night Market',
    location: 'Richmond',
    category: 'festivals',
    description:
      'Richmond Night Market is a smaller, more neighborhood-driven version of the bigger SF night markets, which honestly makes it one of the best. Clement Street fills with food vendors, local makers, music, and pop-up stands, with a strong Asian street food focus. It\'s the kind of summer night that turns into an accidental crawl through the neighborhood.',
  },
  {
    id: 6,
    confirmed: true,
    date: 'July 18',
    dayOfWeek: 'Sat',
    month: 'Jul',
    day: '18',
    gcalDate: '20260718',
    title: 'Richmond Night Market',
    location: 'Richmond',
    category: 'festivals',
    description:
      'Richmond Night Market returns in July! Clement Street fills with food vendors, local makers, music, and pop-up stands, with a strong Asian street food focus and a really local Richmond District vibe.',
  },
  {
    id: 7,
    confirmed: true,
    date: 'August 7',
    dayOfWeek: 'Fri',
    month: 'Aug',
    day: '7',
    gcalDate: '20260807',
    title: 'Outside Lands',
    location: 'Golden Gate Park',
    category: 'festivals',
    description:
      'Outside Lands is basically SF\'s biggest summer weekend and turns Golden Gate Park and the entire Sunset into a giant music, food, and party-filled city takeover. Inside the festival there\'s a mix of major music acts, incredible local food vendors, wine and cocktail tents, art installations, and some of the best people watching in the city.',
  },
  {
    id: 8,
    confirmed: true,
    date: 'August 8',
    dayOfWeek: 'Sat',
    month: 'Aug',
    day: '8',
    gcalDate: '20260808',
    title: 'Outside Lands',
    location: 'Golden Gate Park',
    category: 'festivals',
    description:
      'Outside Lands Day 2 — the best version is usually less about catching every set and more about leaning into the overall atmosphere: grabbing food in the Sunset, meeting friends in the park, catching a few artists, and ending the night somewhere nearby once the fog rolls in.',
  },
  {
    id: 9,
    confirmed: true,
    date: 'August 9',
    dayOfWeek: 'Sun',
    month: 'Aug',
    day: '9',
    gcalDate: '20260809',
    title: 'Outside Lands',
    location: 'Golden Gate Park',
    category: 'festivals',
    description:
      'Outside Lands Day 3 — wrap up the festival weekend with the best acts and best food before the summer winds down.',
  },
  {
    id: 10,
    confirmed: true,
    date: 'August 15',
    dayOfWeek: 'Sat',
    month: 'Aug',
    day: '15',
    gcalDate: '20260815',
    title: 'Richmond Night Market',
    location: 'Richmond',
    category: 'festivals',
    description:
      'Richmond Night Market in August — it usually ends with Ocean Beach, a bonfire, or one last drink somewhere nearby.',
  },

  // --- Possibilities (TBD) ---
  {
    id: 11,
    confirmed: false,
    title: 'Monet in Venice',
    location: 'De Young Museum',
    category: 'arts',
    description:
      'The de Young\'s Monet: Venice and the Sea exhibition brings together Monet\'s dreamy late-career paintings focused on water, light, and coastal landscapes, many rarely shown together. Set inside Golden Gate Park, it\'s an easy summer SF outing to pair with park wandering, the observation tower, or dinner nearby in the Richmond or Sunset.',
  },
  {
    id: 12,
    confirmed: false,
    title: 'Berkeley Wine Tour',
    location: 'Broc Cellars, Berkeley',
    category: 'food-drink',
    description:
      'A Berkeley wine afternoon is one of the best underrated Bay Area summer hangs. The move is to head over to the Gilman area and start at Broc Cellars, a laid-back natural wine spot with a warehouse-meets-wine-bar vibe. Their Friday happy hour is especially fun, with people spilling outside, good music, and an easygoing social atmosphere.',
  },
  {
    id: 13,
    confirmed: false,
    title: 'Giants Friday Night Game',
    location: 'Oracle Park',
    category: 'sports',
    description:
      'A Friday night Giants game is one of the best summer traditions in SF, even if you barely care about baseball. Oracle Park gets an incredible atmosphere on warm evenings, with the whole China Basin and Mission Bay area buzzing before and after the game with bars, beer gardens, food spots, and people wandering along the waterfront.',
  },
  {
    id: 14,
    confirmed: false,
    title: 'Giants Afternoon Game',
    location: 'Oracle Park',
    category: 'sports',
    description:
      'A Saturday afternoon Giants game is peak classic SF summer energy. Day games are especially good because the stadium views really shine, with the bay, boats, kayakers, and city skyline all visible from the stands. It\'s the kind of event that works best when you treat it as an all-day hang rather than just a baseball game.',
  },
  {
    id: 15,
    confirmed: false,
    title: 'Paddle Boats',
    location: 'Heron Lake, Golden Gate Park',
    category: 'outdoors',
    description:
      'Renting paddle boats at Heron Lake in Golden Gate Park is one of those surprisingly wholesome SF summer activities that ends up being way more fun than expected. The lake is tucked into a quieter, wooded part of the park, so once you\'re out on the water it barely feels like you\'re still in the city.',
  },
  {
    id: 16,
    confirmed: false,
    title: 'Angel Island Picnic',
    location: 'Angel Island',
    category: 'outdoors',
    description:
      'An Angel Island picnic is one of the best Bay Area summer day trips because it somehow feels both adventurous and incredibly relaxed at the same time. You take the ferry over from SF, bring a big picnic setup and drinks, and spend the day biking, hiking, or just hanging out with insane views of the city, Marin, and the Golden Gate Bridge.',
  },
  {
    id: 17,
    confirmed: false,
    title: 'Matisse at SFMOMA',
    location: 'SFMOMA',
    category: 'arts',
    description:
      'The Matisse exhibition at SFMOMA is one of those perfect slower summer activities where you can spend a few hours wandering through bold color, huge cut-outs, paintings, and sketches that somehow still feel incredibly modern. It\'s an especially good SF outing because you can pair it with coffee, drinks, or dinner nearby in SoMa afterward.',
  },
  {
    id: 18,
    confirmed: false,
    title: 'Food Trucks + Mini Golf',
    location: 'SPARK Social, Mission Bay',
    category: 'food-drink',
    description:
      'SPARK Social is a giant outdoor hangout spot in Mission Bay with rotating food trucks, drinks, picnic tables, fire pits, and mini golf all packed into one place. It\'s one of the easiest summer group activities in SF because everyone can grab different food, hang out outside for hours, and casually rotate between eating, drinks, lawn games, and mini golf.',
  },
  {
    id: 19,
    confirmed: false,
    title: 'Alameda Distillery Tour',
    location: 'Spirits Alley, Alameda',
    category: 'food-drink',
    description:
      'An Alameda distillery day is best centered around Spirits Alley at the old naval base. The highlight is St. George Spirits, a massive waterfront distillery known for whiskey, gin, absinthe, and incredible bay views from its airplane hangar tasting room. Best move is to ferry over from SF and slowly bounce between spots.',
  },
  {
    id: 20,
    confirmed: false,
    title: 'Tomales Bay Day Trip',
    location: 'Tomales Bay',
    category: 'outdoors',
    description:
      'A Tomales Bay day is one of the best classic Northern California summer escapes. The whole area feels quiet, coastal, and a little removed from the rest of the Bay Area, with oysters, small towns, foggy beaches, and incredible drives. The ideal version is grabbing oysters and wine along the bay, hanging out by the water for a few hours, and maybe kayaking or stopping at Point Reyes beaches.',
  },
  {
    id: 21,
    confirmed: false,
    title: 'Black Sands Beach',
    location: 'Marin Headlands',
    category: 'outdoors',
    description:
      'Black Sands Beach feels like one of those hidden Northern California spots that somehow still feels undiscovered. Tucked below the Marin Headlands, the beach has dark volcanic sand, dramatic cliffs, huge ocean views, and a much wilder, quieter vibe than most beaches closer to the city.',
  },
  {
    id: 22,
    confirmed: false,
    title: 'Mid-Day Movie',
    location: 'San Francisco',
    category: 'arts',
    description:
      'A mid-day movie is one of the most underrated summer plans in SF, especially on those random foggy or overly hot afternoons when nobody knows what to do. There\'s something really good about disappearing into a cold theater for a couple hours in the middle of the day.',
  },
  {
    id: 23,
    confirmed: false,
    title: 'Electric Boat Excursion',
    location: 'Richardson Bay, Sausalito',
    category: 'water',
    description:
      'An electric boat day on Richardson Bay is one of the best low-effort Bay Area summer activities. You rent a quiet little Duffy-style electric boat out of Sausalito, bring snacks and drinks onboard, and slowly cruise around the bay past floating homes, sailboats, wildlife, and views back toward SF and Belvedere.',
  },
  {
    id: 24,
    confirmed: false,
    title: 'Alcatraz Night Tour',
    location: 'Alcatraz Island',
    category: 'water',
    description:
      'The Alcatraz night tour is one of the few classic SF tourist activities that still genuinely feels worth doing, even for locals. Going at night completely changes the atmosphere. The ferry ride across the bay after sunset is beautiful, the prison feels way more eerie and immersive in the dark.',
  },
  {
    id: 25,
    confirmed: false,
    title: 'Ferry Building + Water Taxi',
    location: 'Ferry Building, SF',
    category: 'water',
    description:
      'A Ferry Building + water taxi day is one of the easiest ways to make SF feel fun and new again without really planning much. The move is to start with snacks, oysters, coffee, or drinks at the Ferry Building, then hop on a water taxi or ferry ride around the bay for skyline views, sea air, and a totally different perspective on the city.',
  },
]
