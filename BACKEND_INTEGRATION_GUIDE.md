# Backend Integration Guide

## Overview

The frontend is structured to seamlessly integrate with a backend API. All components follow a consistent data-driven architecture that enables easy management through an admin panel.

---

## 📁 Frontend Architecture

### Key Files for Backend Integration

```
Frontend/
├── src/
│   ├── components/          # React components (UI)
│   ├── services/
│   │   └── apiService.js   # API calls & endpoints
│   ├── hooks/
│   │   └── useAPI.js       # Custom hooks for data fetching
│   ├── constants/
│   │   └── apiConfig.js    # API configuration & data structures
│   └── pages/              # Page components (future)
```

---

## 🔌 API Integration

### 1. **API Configuration**

**File**: `src/constants/apiConfig.js`

This file contains:
- Base API URL configuration
- All API endpoints
- Data structure definitions (schemas)
- Response structures

**Update for your backend:**

```javascript
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api'
```

Set in `.env` or `.env.local`:

```env
REACT_APP_API_URL=http://your-backend-url/api
```

### 2. **API Service**

**File**: `src/services/apiService.js`

Contains modular API functions organized by resource:

- `servicesAPI` - Service CRUD operations
- `destinationsAPI` - Destination operations
- `toursAPI` - Tour/Program operations
- `galleryAPI` - Gallery image operations
- `aboutAPI` - About page content
- `contactAPI` - Contact form & bookings

**Usage in components:**

```javascript
import { servicesAPI } from '../services/apiService'

const data = await servicesAPI.getAllServices()
```

### 3. **Custom Hooks**

**File**: `src/hooks/useAPI.js`

Pre-built React hooks for data fetching with loading and error states:

```javascript
import { useServices } from '../hooks/useAPI'

export default function MyComponent() {
  const { data, loading, error, refetch } = useServices()
  
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && <p>Services loaded: {data.length}</p>}
    </div>
  )
}
```

---

## 📊 Backend API Specifications

### Required Endpoints

All endpoints follow REST conventions and return consistent response structures.

#### **Services Endpoints**

```
GET    /api/services              # Get all services
GET    /api/services/:id          # Get single service
POST   /api/services              # Create service (admin)
PUT    /api/services/:id          # Update service (admin)
DELETE /api/services/:id          # Delete service (admin)
```

**Service Data Structure:**

```json
{
  "id": "mountaineering",
  "title": "Mountaineering",
  "description": "Expert expeditions to Pakistan's highest peaks",
  "longDescription": "Detailed description...",
  "icon": "⛰️",
  "image": "https://...",
  "slug": "mountaineering",
  "category": "adventure",
  "duration": "Varies",
  "difficulty": "Advanced",
  "groupSize": "2-8 people",
  "price": {
    "min": 1000,
    "max": 5000,
    "currency": "USD"
  },
  "features": ["Feature 1", "Feature 2"],
  "includes": ["Guide", "Equipment"],
  "excludes": ["Travel"],
  "seo": {
    "metaTitle": "Mountaineering - Mountain Soul Adventure",
    "metaDescription": "Expert mountaineering expeditions...",
    "keywords": ["mountaineering", "peaks", "Pakistan"]
  },
  "isActive": true,
  "createdAt": "2026-05-25T12:00:00Z",
  "updatedAt": "2026-05-25T12:00:00Z"
}
```

---

#### **Destinations Endpoints**

```
GET    /api/destinations              # Get all destinations
GET    /api/destinations/:id          # Get single destination
POST   /api/destinations              # Create destination (admin)
PUT    /api/destinations/:id          # Update destination (admin)
DELETE /api/destinations/:id          # Delete destination (admin)
```

**Destination Data Structure:**

```json
{
  "id": "hunza-valley",
  "name": "Hunza Valley",
  "slug": "hunza-valley",
  "description": "Paradise on earth",
  "longDescription": "Detailed description...",
  "image": "https://...",
  "images": ["url1", "url2"],
  "location": {
    "lat": 36.8406,
    "lng": 74.8993,
    "region": "Gilgit-Baltistan",
    "country": "Pakistan"
  },
  "altitude": 2500,
  "bestSeason": ["June", "July", "August"],
  "difficulty": "Moderate",
  "highlights": ["Breathtaking views", "Local culture"],
  "attractions": ["Attraction 1", "Attraction 2"],
  "relatedServices": ["service-id-1"],
  "seo": {
    "metaTitle": "Hunza Valley - Pakistan's Most Beautiful Destination",
    "metaDescription": "Explore Hunza Valley...",
    "keywords": ["hunza", "valley", "Pakistan"]
  },
  "isActive": true,
  "createdAt": "2026-05-25T12:00:00Z",
  "updatedAt": "2026-05-25T12:00:00Z"
}
```

---

#### **Tours/Programs Endpoints**

```
GET    /api/tours?page=1&limit=10      # Get all tours (paginated)
GET    /api/tours/:id                   # Get single tour
POST   /api/tours                       # Create tour (admin)
PUT    /api/tours/:id                   # Update tour (admin)
DELETE /api/tours/:id                   # Delete tour (admin)
```

**Tour Data Structure:**

```json
{
  "id": "hunza-7days",
  "title": "Hunza Valley Explorer - 7 Days",
  "slug": "hunza-7days",
  "description": "Explore Hunza Valley",
  "thumbnail": "https://...",
  "images": ["url1", "url2"],
  "duration": {
    "days": 7,
    "nights": 6
  },
  "difficulty": "Moderate",
  "groupSize": {
    "min": 2,
    "max": 8
  },
  "price": {
    "amount": 2500,
    "currency": "USD",
    "perPerson": true
  },
  "destinations": ["hunza-valley"],
  "serviceType": "trekking",
  "itinerary": [
    {
      "day": 1,
      "title": "Arrival in Gilgit",
      "description": "Arrive and settle",
      "location": "Gilgit",
      "altitude": 1500,
      "distance": "0km",
      "activities": ["Arrival", "Rest"]
    }
  ],
  "includes": ["Guide", "Meals"],
  "excludes": ["Travel insurance"],
  "bestSeason": ["June", "July"],
  "highlights": ["Views", "Culture"],
  "requirements": ["Good fitness"],
  "seo": {
    "metaTitle": "Hunza Valley 7-Day Tour",
    "metaDescription": "Explore Hunza Valley in 7 days...",
    "keywords": ["hunza", "tour", "7 days"]
  },
  "isActive": true,
  "createdAt": "2026-05-25T12:00:00Z",
  "updatedAt": "2026-05-25T12:00:00Z"
}
```

---

#### **Gallery Endpoints**

```
GET    /api/gallery?page=1&limit=12                # Get all images (paginated)
GET    /api/gallery/category/:category             # Get images by category
POST   /api/gallery                                 # Upload image (admin, multipart/form-data)
DELETE /api/gallery/:id                            # Delete image (admin)
```

**Gallery Data Structure:**

```json
{
  "id": "img-001",
  "title": "Mountain Peak at Sunset",
  "description": "Beautiful sunset view",
  "image": "https://...",
  "thumbnail": "https://...",
  "category": "mountaineering",
  "destination": "hunza-valley",
  "tour": "hunza-7days",
  "photographer": "John Doe",
  "location": "Hunza Valley",
  "altText": "Mountain peak at sunset in Hunza Valley, Pakistan",
  "tags": ["sunset", "mountains", "hunza"],
  "isActive": true,
  "createdAt": "2026-05-25T12:00:00Z",
  "updatedAt": "2026-05-25T12:00:00Z"
}
```

---

#### **Contact Endpoints**

```
POST   /api/contact          # Submit contact form
POST   /api/bookings         # Submit booking (with payment)
GET    /api/bookings         # Get all bookings (admin, requires auth)
PATCH  /api/bookings/:id     # Update booking status (admin, requires auth)
```

**Contact Form Data:**

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "+1-555-0000",
  "subject": "Inquiry about mountaineering",
  "message": "I'm interested in...",
  "serviceInterest": "mountaineering",
  "tourInterest": "hunza-7days",
  "preferredDates": {
    "startDate": "2026-06-15",
    "endDate": "2026-06-22"
  },
  "groupSize": 4,
  "specialRequirements": "Vegetarian meals needed"
}
```

**Booking Data:**

```json
{
  "tourId": "hunza-7days",
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "+1-555-0000",
  "participants": 3,
  "startDate": "2026-06-15",
  "specialRequirements": "Vegetarian meals",
  "totalPrice": 7500,
  "currency": "USD",
  "status": "pending",
  "paymentStatus": "unpaid"
}
```

---

### Standard Response Format

All API responses should follow this format:

**Success Response (200):**

```json
{
  "success": true,
  "message": "Operation successful",
  "data": {},
  "error": null,
  "timestamp": "2026-05-25T12:00:00Z",
  "statusCode": 200
}
```

**Paginated Response:**

```json
{
  "success": true,
  "data": [],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 100,
    "pages": 10,
    "hasNext": true,
    "hasPrev": false
  },
  "timestamp": "2026-05-25T12:00:00Z",
  "statusCode": 200
}
```

**Error Response (400+):**

```json
{
  "success": false,
  "message": "Descriptive error message",
  "data": null,
  "error": {
    "code": "INVALID_INPUT",
    "details": "Field 'email' is required"
  },
  "timestamp": "2026-05-25T12:00:00Z",
  "statusCode": 400
}
```

---

## 🔐 Authentication

### Admin/Protected Routes

Use Bearer token authentication for admin operations:

```javascript
// In apiService.js
const response = await fetch(endpoint, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${authToken}`
  },
  body: JSON.stringify(data)
})
```

**Expected endpoints:**

```
POST   /api/auth/login          # User login
POST   /api/auth/logout         # User logout
POST   /api/auth/register       # Admin registration
GET    /api/auth/me             # Get current user
```

---

## 🗄️ Database Schema Recommendations

### MongoDB Collections

```javascript
// Services Collection
db.services.insertOne({
  _id: ObjectId(),
  id: "mountaineering",
  title: "Mountaineering",
  // ... other fields
  createdAt: new Date(),
  updatedAt: new Date()
})

// Indexes (recommended)
db.services.createIndex({ "slug": 1 })
db.services.createIndex({ "category": 1 })
db.services.createIndex({ "isActive": 1 })
```

Similar structure for: `destinations`, `tours`, `gallery`, `bookings`, `contacts`

---

## 🔄 Workflow Example

### Adding a New Section

1. **Define Data Structure** in `apiConfig.js`
2. **Create API Service** in `apiService.js`
3. **Create Custom Hook** in `useAPI.js`
4. **Create React Component** that uses the hook
5. **Create Backend API** following the defined structure
6. **Update Admin Panel** to manage the data

---

## 🚀 Deployment

### Environment Variables

Create `.env` files for different environments:

**.env.development:**
```env
REACT_APP_API_URL=http://localhost:3000/api
```

**.env.production:**
```env
REACT_APP_API_URL=https://api.mountainsouldventure.com
```

### Build Command

```bash
npm run build
```

---

## 📝 Component Template

Use this template for new sections:

```javascript
import { Helmet } from 'react-helmet-async'
import { useYourResource } from '../hooks/useAPI'

export default function YourSection() {
  const { data, loading, error } = useYourResource()

  return (
    <>
      <Helmet>
        <title>Your Section - Mountain Soul Adventure</title>
        <meta name="description" content="..." />
      </Helmet>

      <section>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {data && (
          // Render content
        )}
      </section>
    </>
  )
}
```

---

## ✅ Checklist for Backend Developer

- [ ] Implement all API endpoints listed above
- [ ] Follow the exact data structures provided
- [ ] Return responses in the standard format
- [ ] Implement proper authentication (JWT/Bearer tokens)
- [ ] Add CORS headers for frontend domain
- [ ] Implement input validation
- [ ] Add error handling and meaningful error messages
- [ ] Create database indexes for performance
- [ ] Implement pagination for list endpoints
- [ ] Add file upload handling for gallery images
- [ ] Create admin authentication endpoints
- [ ] Add logging and monitoring

---

## 🎯 Next Steps

1. **Backend Setup** - Create Node.js/Express/MongoDB API
2. **Admin Panel** - Create admin dashboard for content management
3. **Frontend Updates** - Update API_BASE_URL when backend is ready
4. **Testing** - Test integration between frontend and backend
5. **Deployment** - Deploy frontend and backend to production

---

**Last Updated**: May 25, 2026  
**For Questions**: Contact development team
