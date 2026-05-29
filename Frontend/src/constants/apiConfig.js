// Backend API Configuration
// This file defines the API endpoints and data structures
// that will be shared between frontend, backend, and admin panel

export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

// ============================================
// API ENDPOINTS
// ============================================

export const API_ENDPOINTS = {
  // Services
  SERVICES: `${API_BASE_URL}/services`,
  SERVICE_BY_ID: (id) => `${API_BASE_URL}/services/${id}`,

  // Destinations
  DESTINATIONS: `${API_BASE_URL}/destinations`,
  DESTINATION_BY_ID: (id) => `${API_BASE_URL}/destinations/${id}`,

  // Tours/Programs
  TOURS: `${API_BASE_URL}/tours`,
  TOUR_BY_ID: (id) => `${API_BASE_URL}/tours/${id}`,

  // Specialized Programs
  PROGRAMS: `${API_BASE_URL}/programs`,
  PROGRAM_BY_ID: (id) => `${API_BASE_URL}/programs/${id}`,

  // Gallery
  GALLERY: `${API_BASE_URL}/gallery`,
  GALLERY_BY_CATEGORY: (category) => `${API_BASE_URL}/gallery/category/${category}`,

  // About
  ABOUT: `${API_BASE_URL}/about`,

  // Contact/Bookings
  BOOKINGS: `${API_BASE_URL}/bookings`,
  CONTACT: `${API_BASE_URL}/contact`,
};

// ============================================
// DATA STRUCTURES
// ============================================

/**
 * Service Data Structure
 * Used for: Core services section
 */
export const SERVICE_STRUCTURE = {
  id: 'unique-id', // e.g., 'mountaineering'
  title: 'Service Name', // e.g., 'Mountaineering'
  description: 'Short description', // Display on card
  longDescription: 'Detailed description', // For SEO (sr-only)
  icon: '⛰️', // Emoji icon
  image: 'https://image-url.com/image.jpg', // Optional hero image
  slug: 'service-slug', // URL-friendly name
  category: 'adventure', // Category for filtering
  duration: 'Varies', // Duration info
  difficulty: 'Advanced', // Difficulty level
  groupSize: '2-8 people', // Group size
  price: {
    min: 1000,
    max: 5000,
    currency: 'USD'
  },
  features: [
    'Feature 1',
    'Feature 2',
    'Feature 3'
  ],
  includes: [
    'Professional guide',
    'Safety equipment',
    'Meals'
  ],
  excludes: [
    'Personal equipment',
    'Travel insurance'
  ],
  seo: {
    metaTitle: 'Custom meta title',
    metaDescription: 'Custom meta description',
    keywords: ['keyword1', 'keyword2']
  },
  isActive: true,
  createdAt: '2026-05-25T12:00:00Z',
  updatedAt: '2026-05-25T12:00:00Z'
};

/**
 * Destination Data Structure
 * Used for: Destinations section
 */
export const DESTINATION_STRUCTURE = {
  id: 'unique-id',
  name: 'Destination Name',
  slug: 'destination-slug',
  description: 'Short description',
  longDescription: 'Detailed description',
  image: 'https://image-url.com/image.jpg',
  images: [
    'https://image-url-1.com/image.jpg',
    'https://image-url-2.com/image.jpg'
  ],
  location: {
    lat: 35.5017,
    lng: 74.3373,
    region: 'Gilgit-Baltistan',
    country: 'Pakistan'
  },
  altitude: 5000, // in meters
  bestSeason: ['June', 'July', 'August'],
  difficulty: 'Moderate',
  highlights: [
    'Highlight 1',
        'Highlight 2'
  ],
  attractions: [
    'Attraction 1',
    'Attraction 2'
  ],
  relatedServices: ['service-id-1', 'service-id-2'],
  seo: {
    metaTitle: 'Custom meta title',
    metaDescription: 'Custom meta description',
    keywords: ['keyword1', 'keyword2']
  },
  isActive: true,
  createdAt: '2026-05-25T12:00:00Z',
  updatedAt: '2026-05-25T12:00:00Z'
};

/**
 * Specialized Program Data Structure
 * Used for: Specialized Programs section
 */
export const PROGRAM_STRUCTURE = {
  id: 'unique-id',
  title: 'Program Name',
  slug: 'program-slug',
  description: 'Short description',
  longDescription: 'Detailed description',
  icon: '🎫',
  image: 'https://image-url.com/image.jpg',
  category: 'specialized', // hunting, exchange, volunteerism, etc.
  highlights: ['Highlight 1', 'Highlight 2'],
  features: ['Feature 1', 'Feature 2'],
  pricing: {
    amount: 2000,
    currency: 'USD',
    note: 'Price per person'
  },
  requirements: ['Requirement 1', 'Requirement 2'],
  seo: {
    metaTitle: 'Custom meta title',
    metaDescription: 'Custom meta description',
    keywords: ['keyword1', 'keyword2']
  },
  isActive: true,
  createdAt: '2026-05-25T12:00:00Z',
  updatedAt: '2026-05-25T12:00:00Z'
};

/**
 * Tour/Program Data Structure
 * Used for: Tours/Programs section
 */
export const TOUR_STRUCTURE = {
  id: 'unique-id',
  title: 'Tour Name',
  slug: 'tour-slug',
  description: 'Short description',
  longDescription: 'Detailed description',
  thumbnail: 'https://image-url.com/thumb.jpg',
  images: [
    'https://image-url-1.com/image.jpg',
    'https://image-url-2.com/image.jpg'
  ],
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
    amount: 2500,
    currency: 'USD',
    perPerson: true
  },
  destinations: ['destination-id-1', 'destination-id-2'],
  serviceType: 'trekking', // Reference to service
  itinerary: [
    {
      day: 1,
      title: 'Day 1: Title',
      description: 'Day description',
      location: 'Location',
      altitude: 2000,
      distance: '5km',
      activities: ['Activity 1', 'Activity 2']
    }
  ],
  includes: [
    'Professional guide',
    'Meals',
    'Accommodation'
  ],
  excludes: [
    'Personal equipment'
  ],
  bestSeason: ['June', 'July', 'August'],
  highlights: ['Highlight 1', 'Highlight 2'],
  requirements: ['Good fitness', 'Basic experience'],
  seo: {
    metaTitle: 'Custom meta title',
    metaDescription: 'Custom meta description',
    keywords: ['keyword1', 'keyword2']
  },
  isActive: true,
  createdAt: '2026-05-25T12:00:00Z',
  updatedAt: '2026-05-25T12:00:00Z'
};

/**
 * Gallery Image Data Structure
 * Used for: Gallery section
 */
export const GALLERY_STRUCTURE = {
  id: 'unique-id',
  title: 'Image Title',
  description: 'Image description',
  image: 'https://image-url.com/image.jpg',
  thumbnail: 'https://image-url.com/thumb.jpg',
  category: 'mountaineering', // Reference to service
  destination: 'destination-id', // Reference to destination
  tour: 'tour-id', // Reference to tour
  photographer: 'Photographer Name',
  location: 'Location Name',
  altText: 'Descriptive alt text for SEO',
  tags: ['tag1', 'tag2', 'tag3'],
  isActive: true,
  createdAt: '2026-05-25T12:00:00Z',
  updatedAt: '2026-05-25T12:00:00Z'
};

/**
 * About Us Data Structure
 * Used for: About section
 */
export const ABOUT_STRUCTURE = {
  id: 'about',
  title: 'About Mountain Soul Adventure',
  missionTitle: 'Our Mission',
  missionDescription: 'Mission statement...',
  visionTitle: 'Our Vision',
  visionDescription: 'Vision statement...',
  values: [
    {
      title: 'Value 1',
      description: 'Description',
      icon: '❤️'
    }
  ],
  team: [
    {
      id: 'team-member-1',
      name: 'Name',
      role: 'Role',
      bio: 'Biography',
      image: 'https://image-url.com/image.jpg',
      experience: '10+ years',
      specialties: ['Specialty 1', 'Specialty 2']
    }
  ],
  stats: {
    yearsInBusiness: 10,
    toursCompleted: 500,
    happyClients: 5000,
    destinationsCovered: 50
  },
  seo: {
    metaTitle: 'About Mountain Soul Adventure',
    metaDescription: 'Learn about our mission, vision, and team',
    keywords: ['about', 'mission', 'team']
  }
};

/**
 * Contact Form Data Structure
 * Used for: Contact submissions
 */
export const CONTACT_FORM_STRUCTURE = {
  id: 'unique-id',
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com',
  phone: '+1-555-0000',
  subject: 'Inquiry about services',
  message: 'Message content',
  serviceInterest: 'mountaineering', // Reference to service
  tourInterest: 'tour-id', // Reference to tour
  preferredDates: {
    startDate: '2026-06-15',
    endDate: '2026-06-22'
  },
  groupSize: 4,
  specialRequirements: 'Special requests',
  status: 'new', // new, responded, archived
  createdAt: '2026-05-25T12:00:00Z',
  respondedAt: null
};

/**
 * Booking Data Structure
 * Used for: Tour bookings
 */
export const BOOKING_STRUCTURE = {
  id: 'unique-id',
  tourId: 'tour-id',
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com',
  phone: '+1-555-0000',
  participants: 3,
  startDate: '2026-06-15',
  specialRequirements: 'Special requests',
  totalPrice: 7500,
  currency: 'USD',
  status: 'pending', // pending, confirmed, cancelled, completed
  paymentStatus: 'unpaid', // unpaid, partial, paid
  createdAt: '2026-05-25T12:00:00Z',
  updatedAt: '2026-05-25T12:00:00Z'
};

// ============================================
// RESPONSE STRUCTURES
// ============================================

/**
 * Standard API Response Structure
 * All API responses should follow this format
 */
export const API_RESPONSE_STRUCTURE = {
  success: true,
  message: 'Operation successful',
  data: {}, // Can be object or array
  error: null,
  timestamp: '2026-05-25T12:00:00Z',
  statusCode: 200
};

/**
 * Paginated Response Structure
 * Used for list endpoints with pagination
 */
export const PAGINATED_RESPONSE_STRUCTURE = {
  success: true,
  data: [],
  pagination: {
    page: 1,
    limit: 10,
    total: 100,
    pages: 10,
    hasNext: true,
    hasPrev: false
  },
  timestamp: '2026-05-25T12:00:00Z',
  statusCode: 200
};

export default {
  API_BASE_URL,
  API_ENDPOINTS,
  SERVICE_STRUCTURE,
  DESTINATION_STRUCTURE,
  TOUR_STRUCTURE,
  GALLERY_STRUCTURE,
  ABOUT_STRUCTURE,
  CONTACT_FORM_STRUCTURE,
  BOOKING_STRUCTURE,
  API_RESPONSE_STRUCTURE,
  PAGINATED_RESPONSE_STRUCTURE
};
