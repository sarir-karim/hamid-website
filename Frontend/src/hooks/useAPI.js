// Custom Hooks for API Data Fetching
// Reusable hooks for components to fetch and manage data

import { useState, useEffect, useCallback } from 'react'
import { servicesAPI, destinationsAPI, toursAPI, programsAPI, galleryAPI, aboutAPI } from '../services/apiService'

/**
 * Generic data fetching hook
 * @param {Function} fetchFn - API function to call
 * @param {boolean} immediate - Whether to fetch immediately on mount
 * @param {any} fallbackData - Optional fallback data to use if fetch fails
 * @returns {Object} { data, loading, error, refetch }
 */
export const useFetch = (fetchFn, immediate = true, fallbackData = null) => {
  const [data, setData] = useState(fallbackData)
  // Only show loading state if there's NO fallback data
  const [loading, setLoading] = useState(immediate && !fallbackData)
  const [error, setError] = useState(null)

  const fetchData = useCallback(async () => {
    try {
      // Only show loading if there's no fallback data
      if (!fallbackData) {
        setLoading(true)
      }
      setError(null)
      const result = await fetchFn()
      setData(result)
    } catch (err) {
      // If fallback data exists, silently use it (don't show error)
      if (fallbackData) {
        setData(fallbackData)
        console.warn('API fetch failed, using fallback data:', err.message)
      } else {
        setError(err.message || 'Failed to fetch data')
        console.error('Fetch error:', err)
      }
    } finally {
      setLoading(false)
    }
  }, [fetchFn, fallbackData])

  useEffect(() => {
    if (immediate) {
      fetchData()
    }
  }, [fetchData, immediate])

  return { data, loading, error, refetch: fetchData }
}

// ============================================
// SERVICES HOOKS
// ============================================

/**
 * Fetch all services
 * @returns {Object}
 */
export const useServices = () => {
  return useFetch(() => servicesAPI.getAllServices(), true, DEFAULT_SERVICES)
}

/**
 * Fetch single service
 * @param {string} serviceId
 * @returns {Object}
 */
export const useService = (serviceId) => {
  return useFetch(() => servicesAPI.getServiceById(serviceId), !!serviceId)
}

// ============================================
// DESTINATIONS HOOKS
// ============================================

/**
 * Fetch all destinations
 * @returns {Object}
 */
export const useDestinations = () => {
  return useFetch(() => destinationsAPI.getAllDestinations(), true, DEFAULT_DESTINATIONS)
}

/**
 * Fetch single destination
 * @param {string} destinationId
 * @returns {Object}
 */
export const useDestination = (destinationId) => {
  return useFetch(() => destinationsAPI.getDestinationById(destinationId), !!destinationId)
}

// ============================================
// TOURS HOOKS
// ============================================

/**
 * Fetch all tours with pagination
 * @param {number} page
 * @param {number} limit
 * @returns {Object}
 */
export const useTours = (page = 1, limit = 10) => {
  return useFetch(() => toursAPI.getAllTours(page, limit), true, DEFAULT_FEATURED_TOURS)
}

/**
 * Fetch featured tours (limited to 3)
 * @returns {Object}
 */
export const useFeaturedTours = () => {
  return useFetch(() => toursAPI.getAllTours(1, 3), true, DEFAULT_FEATURED_TOURS)
}

/**
 * Fetch single tour
 * @param {string} tourId
 * @returns {Object}
 */
export const useTour = (tourId) => {
  return useFetch(() => toursAPI.getTourById(tourId), !!tourId)
}

// ============================================
// SPECIALIZED PROGRAMS HOOKS
// ============================================

/**
 * Fetch all specialized programs
 * @returns {Object}
 */
export const usePrograms = () => {
  return useFetch(() => programsAPI.getAllPrograms(), true, DEFAULT_PROGRAMS)
}

/**
 * Fetch single program
 * @param {string} programId
 * @returns {Object}
 */
export const useProgram = (programId) => {
  return useFetch(() => programsAPI.getProgramById(programId), !!programId)
}

// ============================================
// DEFAULT GALLERY DATA
// ============================================

/**
 * Default gallery images data structure
 * Used as fallback when API is unavailable
 */
export const DEFAULT_GALLERY = [
  {
    id: 'gallery-1',
    title: 'Mountain Trekkers',
    description: 'Group trekking at high altitude with stunning mountain views',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop',
    category: 'trekking',
    alt: 'Mountain trekkers on a high altitude trail with snowy peaks in background'
  },
  {
    id: 'gallery-2',
    title: 'Local Guide',
    description: 'Expert local guide leading adventure',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=400&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
    category: 'people',
    alt: 'Experienced local mountain guide in traditional attire'
  },
  {
    id: 'gallery-3',
    title: 'Sunset Camping',
    description: 'Camping under the stars with mountain backdrop',
    image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=500&h=400&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=300&h=300&fit=crop',
    category: 'camping',
    alt: 'Sunset view with camping tents and mountains in the distance'
  },
  {
    id: 'gallery-4',
    title: 'Team Celebration',
    description: 'Happy team celebrating at summit',
    image: 'https://images.unsplash.com/photo-1517456213526-c1e2b7c3dbbe?w=500&h=400&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1517456213526-c1e2b7c3dbbe?w=300&h=300&fit=crop',
    category: 'team',
    alt: 'Adventure group celebrating together at mountain summit'
  },
  {
    id: 'gallery-5',
    title: 'Traditional Food',
    description: 'Local cuisine and traditional meals',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=400&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=300&fit=crop',
    category: 'culture',
    alt: 'Traditional Pakistani dishes and local cuisine'
  },
  {
    id: 'gallery-6',
    title: 'Desert Adventure',
    description: 'Jeep safari through scenic landscapes',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&h=400&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=300&h=300&fit=crop',
    category: 'safari',
    alt: 'Jeep safari vehicle driving through desert landscape'
  },
  {
    id: 'gallery-7',
    title: 'Snow Peak Trek',
    description: 'Trekking through snowy mountain passes',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop',
    category: 'trekking',
    alt: 'Trekkers on snowy mountain with colorful outfits'
  },
  {
    id: 'gallery-8',
    title: 'Night Sky Camping',
    description: 'Stargazing under pristine night sky',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500&h=400&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=300&h=300&fit=crop',
    category: 'camping',
    alt: 'Camping tent lit up under starry night sky'
  }
]

// ============================================
// GALLERY HOOKS
// ============================================

/**
 * Fetch gallery images with pagination
 * @param {number} page
 * @param {number} limit
 * @returns {Object}
 */
export const useGallery = (page = 1, limit = 12) => {
  return useFetch(() => galleryAPI.getAllGalleryImages(page, limit), true, DEFAULT_GALLERY)
}

/**
 * Fetch gallery by category
 * @param {string} category
 * @param {number} page
 * @param {number} limit
 * @returns {Object}
 */
export const useGalleryByCategory = (category, page = 1, limit = 12) => {
  return useFetch(() => galleryAPI.getGalleryByCategory(category, page, limit), !!category)
}

// ============================================
// ABOUT HOOKS
// ============================================

/**
 * Fetch about page content
 * @returns {Object}
 */
export const useAbout = () => {
  return useFetch(() => aboutAPI.getAbout())
}

// ============================================
// FALLBACK DATA (For offline/development)
// ============================================

/**
 * Default services data structure
 * Used as fallback when API is unavailable
 */
export const DEFAULT_SERVICES = [
  {
    id: 'mountaineering',
    title: 'Mountaineering',
    description: 'Expert expeditions to Pakistan\'s highest peaks',
    longDescription: 'Experience world-class mountaineering expeditions with professional guides. Tackle Pakistan\'s most challenging peaks with safety and expertise.',
    icon: '⛰️',
    slug: 'mountaineering',
    category: 'adventure',
  },
  {
    id: 'trekking-hiking',
    title: 'Trekking & Hiking',
    description: 'Scenic trails through valleys and mountain passes',
    longDescription: 'Explore breathtaking trails through diverse landscapes. From easy day hikes to challenging multi-day treks, suitable for all levels.',
    icon: '🥾',
    slug: 'trekking-hiking',
    category: 'adventure',
  },
  {
    id: 'jeep-safaris',
    title: 'Jeep Safaris',
    description: 'Off-road adventures through rugged terrain',
    longDescription: 'Experience thrilling off-road adventures through Pakistan\'s most remote and scenic regions. Comfortable yet adventurous.',
    icon: '🚙',
    slug: 'jeep-safaris',
    category: 'adventure',
  },
  {
    id: 'cultural-tours',
    title: 'Cultural Tours',
    description: 'Immersive heritage and community experiences',
    longDescription: 'Discover authentic local culture, traditions, and heritage. Connect with communities and experience real Pakistan.',
    icon: '🏛️',
    slug: 'cultural-tours',
    category: 'cultural',
  },
]

/**
 * Default featured tours data structure
 * Used as fallback when API is unavailable
 */
export const DEFAULT_FEATURED_TOURS = [
  {
    id: 'hunza-valley-explorer',
    title: 'Hunza Valley Explorer',
    slug: 'hunza-valley-explorer',
    description: 'Experience the magical meadows beneath Nanga Parbat\'s towering presence',
    longDescription: '7 days of cultural immersion and scenic trekking in the heart of Hunza. Discover remote villages, ancient traditions, and breathtaking mountain landscapes.',
    thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=350&fit=crop',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    duration: {
      days: 7,
      nights: 6
    },
    difficulty: 'Moderate',
    groupSize: {
      min: 2,
      max: 8
    },
    price: {
      amount: 1200,
      currency: 'USD',
      perPerson: true
    },
    highlights: [
      'Cultural immersion and scenic trekking',
      'Remote villages and ancient traditions',
      'Breathtaking mountain landscapes'
    ],
    serviceType: 'trekking',
  },
  {
    id: 'fairy-meadows-trek',
    title: 'Fairy Meadows Trek',
    slug: 'fairy-meadows-trek',
    description: 'Experience the magical meadows beneath Nanga Parbat\'s towering presence',
    longDescription: '5 days exploring the stunning Fairy Meadows with views of Nanga Parbat. Perfect for nature lovers and photographers seeking alpine beauty.',
    thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=350&fit=crop',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    duration: {
      days: 5,
      nights: 4
    },
    difficulty: 'Easy to Moderate',
    groupSize: {
      min: 2,
      max: 10
    },
    price: {
      amount: 900,
      currency: 'USD',
      perPerson: true
    },
    highlights: [
      'Views of Nanga Parbat',
      'Alpine meadows and pristine nature',
      'Photography paradise'
    ],
    serviceType: 'trekking',
  },
  {
    id: 'skardu-adventure',
    title: 'Skardu Adventure',
    slug: 'skardu-adventure',
    description: 'Explore Baltistan\'s stunning lakes, forts, and mountain landscapes',
    longDescription: '6 days exploring Baltistan\'s stunning lakes, ancient forts, and dramatic mountain landscapes. Visit Kalam, Swat Valley, and historic sites.',
    thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=350&fit=crop',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    duration: {
      days: 6,
      nights: 5
    },
    difficulty: 'Moderate',
    groupSize: {
      min: 2,
      max: 8
    },
    price: {
      amount: 1000,
      currency: 'USD',
      perPerson: true
    },
    highlights: [
      'Stunning lakes and landscapes',
      'Ancient forts and historic sites',
      'Local culture and traditions'
    ],
    serviceType: 'trekking',
  },
]

/**
 * Default destinations data structure
 * Used as fallback when API is unavailable
 */
export const DEFAULT_DESTINATIONS = [
  {
    id: 'gilgit-baltistan',
    name: 'Gilgit-Baltistan',
    slug: 'gilgit-baltistan',
    description: 'Home to K2 and the world\'s highest peaks',
    longDescription: 'Explore the world\'s highest peaks and most dramatic mountain landscapes. Gilgit-Baltistan is home to K2 and four of the world\'s 14 eight-thousanders.',
    thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=350&fit=crop',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    region: 'Northern Areas',
    bestSeason: 'June to September',
    highlights: [
      'K2 Base Camp',
      'Hunza Valley',
      'Fairy Meadows',
      'Mountain trekking'
    ]
  },
  {
    id: 'chitral-hindu-kush',
    name: 'Chitral & Hindu Kush',
    slug: 'chitral-hindu-kush',
    description: 'Remote valleys and ancient cultures',
    longDescription: 'Discover remote valleys nestled in the Hindu Kush mountains with ancient cultures and pristine natural beauty. Chitral offers a unique blend of adventure and cultural immersion.',
    thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=350&fit=crop',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    region: 'Khyber Pakhtunkhwa',
    bestSeason: 'May to October',
    highlights: [
      'Kalash culture',
      'Hindu Kush mountains',
      'Remote valleys',
      'Traditional villages'
    ]
  },
  {
    id: 'kashmir-northern-punjab',
    name: 'Kashmir & Northern Punjab',
    slug: 'kashmir-northern-punjab',
    description: 'Lush valleys and pristine nature',
    longDescription: 'Experience the verdant landscapes of Kashmir and Northern Punjab. Known as the Switzerland of Asia, Kashmir offers breathtaking alpine meadows, serene lakes, and lush green valleys.',
    thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=350&fit=crop',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    region: 'Northern Areas',
    bestSeason: 'April to October',
    highlights: [
      'Dal Lake',
      'Alpine meadows',
      'Gulmarg skiing',
      'Nature trekking'
    ]
  },
  {
    id: 'balochistan',
    name: 'Balochistan',
    slug: 'balochistan',
    description: 'Rugged beauty and untouched wilderness',
    longDescription: 'Explore the rugged landscapes of Balochistan with its untouched wilderness and unique geological formations. Perfect for adventurous travelers seeking off-the-beaten-path experiences.',
    thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=350&fit=crop',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    region: 'Balochistan',
    bestSeason: 'September to May',
    highlights: [
      'Unique geology',
      'Desert landscapes',
      'Makran Coastal Highway',
      'Adventure camping'
    ]
  },
]

/**
 * Default specialized programs data structure
 * Used as fallback when API is unavailable
 */
export const DEFAULT_PROGRAMS = [
  {
    id: 'hunting-expeditions',
    title: 'Hunting Expeditions',
    description: 'Legal, licensed, and ethically managed hunting programs in accordance with Pakistan\'s wildlife regulations.',
    longDescription: 'Experience professionally guided hunting expeditions. Legal, licensed, and ethically managed programs following all Pakistan wildlife regulations.',
    icon: '🎫',
    slug: 'hunting-expeditions',
    category: 'hunting',
  },
  {
    id: 'exchange-programs',
    title: 'Exchange Programs',
    description: 'Cultural and educational exchanges connecting local communities with international travelers and professionals.',
    longDescription: 'Cultural and educational exchange programs connecting local communities with international travelers and professionals for meaningful cultural experiences.',
    icon: '👥',
    slug: 'exchange-programs',
    category: 'exchange',
  },
  {
    id: 'volunteerism-programs',
    title: 'Volunteerism Programs',
    description: 'Community-based volunteer opportunities in education, environment, culture, and sustainable tourism.',
    longDescription: 'Community-based volunteer opportunities in education, environment, culture, and sustainable tourism. Make a real impact while experiencing authentic Pakistan.',
    icon: '🤝',
    slug: 'volunteerism-programs',
    category: 'volunteerism',
  },
]

export default {
  useFetch,
  useServices,
  useService,
  useDestinations,
  useDestination,
  useTours,
  useTour,
  useGallery,
  useGalleryByCategory,
  useAbout,
  DEFAULT_SERVICES,
  DEFAULT_PROGRAMS,
  DEFAULT_FEATURED_TOURS,
  DEFAULT_DESTINATIONS,
  DEFAULT_GALLERY,
}
