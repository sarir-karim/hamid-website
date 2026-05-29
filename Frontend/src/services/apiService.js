// API Service Module
// Handles all API calls and data fetching
// This is the single source of truth for backend communication

import { API_ENDPOINTS } from '../constants/apiConfig'

/**
 * Generic fetch wrapper with error handling and timeout
 */
const fetchData = async (url, options = {}, timeout = 5000) => {
  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), timeout)

    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      signal: controller.signal,
      ...options,
    })

    clearTimeout(timeoutId)

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('API Request Timeout:', url)
      throw new Error('Request timeout - API server not responding')
    }
    console.error('API Error:', error)
    throw error
  }
}

// ============================================
// SERVICES API
// ============================================

export const servicesAPI = {
  /**
   * Get all services
   * @returns {Promise<Array>}
   */
  getAllServices: async () => {
    return fetchData(API_ENDPOINTS.SERVICES)
  },

  /**
   * Get single service by ID
   * @param {string} id - Service ID
   * @returns {Promise<Object>}
   */
  getServiceById: async (id) => {
    return fetchData(API_ENDPOINTS.SERVICE_BY_ID(id))
  },

  /**
   * Create new service (admin)
   * @param {Object} serviceData
   * @param {string} token - Auth token
   * @returns {Promise<Object>}
   */
  createService: async (serviceData, token) => {
    return fetchData(API_ENDPOINTS.SERVICES, {
      method: 'POST',
      body: JSON.stringify(serviceData),
      headers: { Authorization: `Bearer ${token}` },
    })
  },

  /**
   * Update service (admin)
   * @param {string} id - Service ID
   * @param {Object} serviceData
   * @param {string} token - Auth token
   * @returns {Promise<Object>}
   */
  updateService: async (id, serviceData, token) => {
    return fetchData(API_ENDPOINTS.SERVICE_BY_ID(id), {
      method: 'PUT',
      body: JSON.stringify(serviceData),
      headers: { Authorization: `Bearer ${token}` },
    })
  },

  /**
   * Delete service (admin)
   * @param {string} id - Service ID
   * @param {string} token - Auth token
   * @returns {Promise<Object>}
   */
  deleteService: async (id, token) => {
    return fetchData(API_ENDPOINTS.SERVICE_BY_ID(id), {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    })
  },
}

// ============================================
// DESTINATIONS API
// ============================================

export const destinationsAPI = {
  getAllDestinations: async () => {
    return fetchData(API_ENDPOINTS.DESTINATIONS)
  },

  getDestinationById: async (id) => {
    return fetchData(API_ENDPOINTS.DESTINATION_BY_ID(id))
  },

  createDestination: async (destinationData, token) => {
    return fetchData(API_ENDPOINTS.DESTINATIONS, {
      method: 'POST',
      body: JSON.stringify(destinationData),
      headers: { Authorization: `Bearer ${token}` },
    })
  },

  updateDestination: async (id, destinationData, token) => {
    return fetchData(API_ENDPOINTS.DESTINATION_BY_ID(id), {
      method: 'PUT',
      body: JSON.stringify(destinationData),
      headers: { Authorization: `Bearer ${token}` },
    })
  },

  deleteDestination: async (id, token) => {
    return fetchData(API_ENDPOINTS.DESTINATION_BY_ID(id), {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    })
  },
}

// ============================================
// TOURS API
// ============================================

export const toursAPI = {
  getAllTours: async (page = 1, limit = 10) => {
    return fetchData(`${API_ENDPOINTS.TOURS}?page=${page}&limit=${limit}`)
  },

  getTourById: async (id) => {
    return fetchData(API_ENDPOINTS.TOUR_BY_ID(id))
  },

  createTour: async (tourData, token) => {
    return fetchData(API_ENDPOINTS.TOURS, {
      method: 'POST',
      body: JSON.stringify(tourData),
      headers: { Authorization: `Bearer ${token}` },
    })
  },

  updateTour: async (id, tourData, token) => {
    return fetchData(API_ENDPOINTS.TOUR_BY_ID(id), {
      method: 'PUT',
      body: JSON.stringify(tourData),
      headers: { Authorization: `Bearer ${token}` },
    })
  },

  deleteTour: async (id, token) => {
    return fetchData(API_ENDPOINTS.TOUR_BY_ID(id), {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    })
  },
}

// ============================================
// SPECIALIZED PROGRAMS API
// ============================================

export const programsAPI = {
  getAllPrograms: async () => {
    return fetchData(API_ENDPOINTS.PROGRAMS)
  },

  getProgramById: async (id) => {
    return fetchData(API_ENDPOINTS.PROGRAM_BY_ID(id))
  },

  createProgram: async (programData, token) => {
    return fetchData(API_ENDPOINTS.PROGRAMS, {
      method: 'POST',
      body: JSON.stringify(programData),
      headers: { Authorization: `Bearer ${token}` },
    })
  },

  updateProgram: async (id, programData, token) => {
    return fetchData(API_ENDPOINTS.PROGRAM_BY_ID(id), {
      method: 'PUT',
      body: JSON.stringify(programData),
      headers: { Authorization: `Bearer ${token}` },
    })
  },

  deleteProgram: async (id, token) => {
    return fetchData(API_ENDPOINTS.PROGRAM_BY_ID(id), {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    })
  },
}

// ============================================
// GALLERY API
// ============================================

export const galleryAPI = {
  getAllGalleryImages: async (page = 1, limit = 12) => {
    return fetchData(`${API_ENDPOINTS.GALLERY}?page=${page}&limit=${limit}`)
  },

  getGalleryByCategory: async (category, page = 1, limit = 12) => {
    return fetchData(`${API_ENDPOINTS.GALLERY_BY_CATEGORY(category)}?page=${page}&limit=${limit}`)
  },

  uploadImage: async (imageData, token) => {
    const formData = new FormData()
    formData.append('file', imageData.file)
    formData.append('title', imageData.title)
    formData.append('description', imageData.description)
    formData.append('category', imageData.category)
    formData.append('altText', imageData.altText)

    return fetch(API_ENDPOINTS.GALLERY, {
      method: 'POST',
      body: formData,
      headers: { Authorization: `Bearer ${token}` },
    }).then(res => res.json())
  },

  deleteImage: async (id, token) => {
    return fetchData(`${API_ENDPOINTS.GALLERY}/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    })
  },
}

// ============================================
// ABOUT API
// ============================================

export const aboutAPI = {
  getAbout: async () => {
    return fetchData(API_ENDPOINTS.ABOUT)
  },

  updateAbout: async (aboutData, token) => {
    return fetchData(API_ENDPOINTS.ABOUT, {
      method: 'PUT',
      body: JSON.stringify(aboutData),
      headers: { Authorization: `Bearer ${token}` },
    })
  },
}

// ============================================
// CONTACT & BOOKINGS API
// ============================================

export const contactAPI = {
  submitContact: async (contactData) => {
    return fetchData(API_ENDPOINTS.CONTACT, {
      method: 'POST',
      body: JSON.stringify(contactData),
    })
  },

  submitBooking: async (bookingData) => {
    return fetchData(API_ENDPOINTS.BOOKINGS, {
      method: 'POST',
      body: JSON.stringify(bookingData),
    })
  },

  getAllBookings: async (token) => {
    return fetchData(API_ENDPOINTS.BOOKINGS, {
      headers: { Authorization: `Bearer ${token}` },
    })
  },

  updateBookingStatus: async (bookingId, status, token) => {
    return fetchData(`${API_ENDPOINTS.BOOKINGS}/${bookingId}`, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
      headers: { Authorization: `Bearer ${token}` },
    })
  },
}

// ============================================
// DEFAULT EXPORT
// ============================================

export default {
  servicesAPI,
  destinationsAPI,
  toursAPI,
  programsAPI,
  galleryAPI,
  aboutAPI,
  contactAPI,
}
