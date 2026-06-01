export const TOUR_DATA = [
  {
    id: 'hunza-valley-explorer',
    slug: 'hunza-valley-explorer',
    title: 'Hunza Valley Explorer',
    destination: 'Gilgit-Baltistan',
    type: 'Cultural Tours',
    difficulty: 'Moderate',
    priceRange: '$1,200 - $1,500',
    duration: '9-11 days',
    maxAltitude: '3,850m',
    image: '/assets/tours/hunza.jpg',
    heroImage: '/assets/tours/hunza.jpg',
    description: 'Explore Hunza Valley with cultural villages, alpine meadows, and striking mountain views.',
    highlights: [
      'Village stays with local hospitality',
      'Sunrise views of Rakaposhi and Ultar Sar',
      'Light hikes through terraced orchards',
    ],
    itinerary: [
      {
        day: 'Day 01',
        title: 'Arrival in Gilgit',
        description: 'Meet your guide and transfer to Hunza. Evening stroll through Karimabad bazaar.',
      },
      {
        day: 'Day 02',
        title: 'Hunza Valley Exploration',
        description: 'Visit Baltit and Altit Forts, then drive to scenic viewpoints and local villages.',
      },
      {
        day: 'Day 03',
        title: 'Fairy Meadows Viewpoint',
        description: 'Enjoy a day trip to the Fairy Meadows viewpoint with picnic lunch and mountain panoramas.',
      },
    ],
    inclusions: [
      'Accommodation in guesthouses',
      'All ground transfers',
      'Guided village tours',
      'Meals as described',
    ],
    exclusions: [
      'International flights',
      'Travel insurance',
      'Personal expenses',
      'Optional activities',
    ],
    requiredGear: [
      'Warm layers and rain jacket',
      'Comfortable hiking boots',
      'Sun protection and sunglasses',
      'Reusable water bottle',
    ],
    reviews: [
      {
        author: 'Amina Hassan',
        rating: 5,
        text: 'A magical journey. The guides were incredibly friendly and the scenery unforgettable.',
      },
      {
        author: 'Daniel Kim',
        rating: 5,
        text: 'Perfect blend of culture and nature with comfortable accommodations throughout.',
      },
    ],
    related: ['skardu-adventure', 'fairy-meadows-trek'],
  },
  {
    id: 'fairy-meadows-trek',
    slug: 'fairy-meadows-trek',
    title: 'Fairy Meadows Trek',
    destination: 'Gilgit-Baltistan',
    type: 'Trekking & Hiking',
    difficulty: 'Moderate',
    priceRange: '$900 - $1,200',
    duration: '7 days',
    maxAltitude: '3,100m',
    image: '/assets/tours/fairy_meadows.jpg',
    heroImage: '/assets/tours/fairy_meadows.jpg',
    description: 'Trek to Fairy Meadows with close-up views of Nanga Parbat, alpine pastures, and restful camping.',
    highlights: [
      'Trek through pine forests and meadows',
      'Stunning Nanga Parbat vistas',
      'Authentic mountain camping experience',
    ],
    itinerary: [
      {
        day: 'Day 01',
        title: 'Arrival in Raikot Bridge',
        description: 'Drive to Raikot Bridge then jeep to Tattu village. Short acclimatization hike in the evening.',
      },
      {
        day: 'Day 02',
        title: 'Trek to Fairy Meadows',
        description: 'Start the trek through the valley along the Indus River to the famous meadowlands.',
      },
      {
        day: 'Day 03',
        title: 'Nanga Parbat Sunrise',
        description: 'Enjoy sunrise over Nanga Parbat, guided meadow walks, and free time for photography.',
      },
    ],
    inclusions: [
      'Tented accommodation',
      'All trek support and porterage',
      'Meals on trek days',
      'Local trekking guide',
    ],
    exclusions: [
      'Park entry fees',
      'Specialty equipment',
      'Personal hiking gear',
      'Extra accommodation before/after trek',
    ],
    requiredGear: [
      'Hiking boots',
      'Thermal layers',
      'Headlamp with spare batteries',
      'Waterproof daypack',
    ],
    reviews: [
      {
        author: 'Sara Ali',
        rating: 5,
        text: 'The trek was absolutely incredible. Every step had a new view.',
      },
      {
        author: 'Mark Jensen',
        rating: 4,
        text: 'Organized and safe. The meadow scenery is a once-in-a-lifetime experience.',
      },
    ],
    related: ['hunza-valley-explorer', 'skardu-adventure'],
  },
  {
    id: 'skardu-adventure',
    slug: 'skardu-adventure',
    title: 'Skardu Adventure',
    destination: 'Gilgit-Baltistan',
    type: 'Jeep Safaris',
    difficulty: 'Moderate',
    priceRange: '$1,000 - $1,400',
    duration: '6 days',
    maxAltitude: '2,900m',
    image: '/assets/tours/skardu.jpg',
    heroImage: '/assets/tours/skardu.jpg',
    description: 'Discover Skardu’s lakes, valleys, and off-road trails on a thrilling jeep safari adventure.',
    highlights: [
      'Jeep ride through alpine landscapes',
      'Visit Shangrila and Satpara Lake',
      'Local Balti cuisine and culture',
    ],
    itinerary: [
      {
        day: 'Day 01',
        title: 'Arrival in Skardu',
        description: 'Airport pickup, hotel check-in, and evening orientation with the local guide.',
      },
      {
        day: 'Day 02',
        title: 'Shangrila & Satpara Lake',
        description: 'Full day exploring Shangrila resort, Satpara Lake, and mountain viewpoints.',
      },
      {
        day: 'Day 03',
        title: 'Jeep Safari to Upper Kachura',
        description: 'Drive through rugged trails to alpine lakes, followed by village walk and sunset views.',
      },
    ],
    inclusions: [
      'Jeep transfers',
      'Accommodation with breakfast',
      'Local guide and driver',
      'Entry permits and fees',
    ],
    exclusions: [
      'Lunch and dinner',
      'Personal expenses',
      'Travel insurance',
      'Optional activities',
    ],
    requiredGear: [
      'Light layers and jacket',
      'Sun hat and sunscreen',
      'Camera with extra battery',
      'Comfortable walking shoes',
    ],
    reviews: [
      {
        author: 'Nadia Iqbal',
        rating: 5,
        text: 'Brilliant jeep safari with unforgettable mountain views and warm hosts.',
      },
      {
        author: 'Omar Khan',
        rating: 5,
        text: 'Great mix of adventure and culture. Very well planned.',
      },
    ],
    related: ['fairy-meadows-trek', 'hunza-valley-explorer'],
  },
  {
    id: 'k2-base-camp-expedition',
    slug: 'k2-base-camp-expedition',
    title: 'K2 Base Camp Expedition',
    destination: 'Gilgit-Baltistan',
    type: 'Mountaineering',
    difficulty: 'Advanced',
    priceRange: '$1,700 - $2,200',
    duration: '14 days',
    maxAltitude: '5,150m',
    image: '/assets/tours/k2.jpg',
    heroImage: '/assets/tours/k2.jpg',
    description: 'An epic mountaineering expedition to the base of K2, the world’s second highest peak.',
    highlights: [
      'High altitude trekking to base camp',
      'Views of K2, Broad Peak, and Gasherbrum',
      'Camp life under towering glaciers',
    ],
    itinerary: [
      {
        day: 'Day 01',
        title: 'Islamabad to Skardu',
        description: 'Fly or drive to Skardu and meet the expedition team in the evening.',
      },
      {
        day: 'Day 05',
        title: 'Trek to Askole',
        description: 'Start the journey along the Braldu River toward the first mountain village.',
      },
      {
        day: 'Day 12',
        title: 'Arrival at K2 Base Camp',
        description: 'Reach the spectacular base camp and take in the panoramic views of the Karakoram giants.',
      },
    ],
    inclusions: [
      'Expedition support staff',
      'Camping equipment',
      'Meals during the trek',
      'Porters and logistics',
    ],
    exclusions: [
      'Climbing permits',
      'Specialized mountaineering gear',
      'Insurance for high-altitude travel',
      'International airfare',
    ],
    requiredGear: [
      'High-altitude boots',
      'Insulated jacket and down layers',
      'Crampons and ice axe',
      'Technical harness and helmet',
    ],
    reviews: [
      {
        author: 'Leila Murad',
        rating: 5,
        text: 'A demanding but deeply rewarding expedition. Expert guides made it feel safe.',
      },
      {
        author: 'Jason Wright',
        rating: 4,
        text: 'The landscape and team spirit were incredible. Highly recommended for experienced trekkers.',
      },
    ],
    related: ['hunza-valley-explorer', 'skardu-adventure'],
  },
]

export const getTourBySlug = (slug) => TOUR_DATA.find((tour) => tour.slug === slug)
export const getRelatedTours = (tour) => TOUR_DATA.filter((item) => tour.related.includes(item.slug))

export const TOUR_OVERVIEW_FIELDS = {
  name: 'Tour Name',
  duration: 'Duration',
  difficulty: 'Difficulty',
  destination: 'Destination',
}
