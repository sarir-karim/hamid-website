# Frontend Project Structure

## 📚 Project Overview

This is a data-driven React + Vite + Tailwind CSS frontend for Mountain Soul Adventure. It's designed to seamlessly integrate with a backend API and admin panel.

---

## 📁 Directory Structure

```
Frontend/
├── public/                          # Static assets
│   ├── robots.txt                  # SEO: Search engine crawling rules
│   └── sitemap.xml                 # SEO: Site map for indexing
│
├── src/
│   ├── components/                 # Reusable React components
│   │   ├── Header.jsx             # Navigation header
│   │   ├── HeroSection.jsx        # Landing hero section
│   │   └── Services.jsx           # Services showcase (data-driven)
│   │
│   ├── services/                  # API service layer
│   │   └── apiService.js          # All API endpoints & calls
│   │
│   ├── hooks/                     # Custom React hooks
│   │   └── useAPI.js              # Data fetching hooks with caching
│   │
│   ├── constants/                 # Configuration & constants
│   │   └── apiConfig.js           # API endpoints, data structures, configs
│   │
│   ├── utils/                     # Utility functions
│   │   └── seoHelpers.js          # SEO generation helpers
│   │
│   ├── App.jsx                    # Main app component
│   ├── main.jsx                   # React entry point
│   └── index.css                  # Global styles
│
├── index.html                     # HTML entry point (SEO optimized)
├── vite.config.js                # Vite configuration
├── tailwind.config.js             # Tailwind CSS configuration
├── postcss.config.js              # PostCSS configuration
├── eslint.config.js              # ESLint configuration
├── package.json                   # Dependencies & scripts
├── .env.example                   # Environment variables template
└── SEO_OPTIMIZATION.md            # SEO implementation guide
```

---

## 🎯 Key Files Explained

### **Components** (`src/components/`)

**Purpose**: Reusable React components for the UI

- `Header.jsx` - Navigation header with logo and menu
- `HeroSection.jsx` - Hero banner with CTA buttons  
- `Services.jsx` - Services grid (data-driven, fetches from API)

**Pattern**: 
- All components are SEO-optimized with Helmet
- Semantic HTML for accessibility
- Responsive design with Tailwind CSS
- Components fetch data via custom hooks

---

### **API Service** (`src/services/apiService.js`)

**Purpose**: Single source of truth for all backend communication

**Exports**:
- `servicesAPI` - Service operations (CRUD)
- `destinationsAPI` - Destination operations
- `toursAPI` - Tour operations
- `galleryAPI` - Gallery operations
- `aboutAPI` - About page content
- `contactAPI` - Contact & booking submissions

**Usage**:
```javascript
import { servicesAPI } from '../services/apiService'
const services = await servicesAPI.getAllServices()
```

---

### **Custom Hooks** (`src/hooks/useAPI.js`)

**Purpose**: Reusable hooks for data fetching with state management

**Pre-built Hooks**:
- `useServices()` - Fetch all services
- `useService(id)` - Fetch single service
- `useDestinations()` - Fetch all destinations
- `useTours()` - Fetch tours with pagination
- `useGallery()` - Fetch gallery images
- `useAbout()` - Fetch about content

**Features**:
- Automatic loading state
- Error handling
- Manual refresh capability
- Fallback to default data

**Usage**:
```javascript
import { useServices } from '../hooks/useAPI'

const { data, loading, error, refetch } = useServices()
```

---

### **API Configuration** (`src/constants/apiConfig.js`)

**Purpose**: Centralized configuration for all API operations

**Contains**:
- Base API URL
- All endpoint definitions
- Data structure schemas/templates
- Response format definitions

**Usage**:
```javascript
import { API_ENDPOINTS, SERVICE_STRUCTURE } from '../constants/apiConfig'
```

---

### **SEO Optimization** (`src/utils/seoHelpers.js`)

**Purpose**: Helper functions for SEO implementation

**Functions**:
- `generateStructuredData()` - Create Schema.org JSON-LD
- `createMetaTags()` - Generate meta tag configurations
- `generateBreadcrumbs()` - Create breadcrumb structured data

---

## 🔄 Data Flow

```
Component
    ↓
Custom Hook (useServices)
    ↓
API Service (servicesAPI.getAllServices)
    ↓
API Config (API_ENDPOINTS.SERVICES)
    ↓
Backend API
    ↓
Database
```

---

## 🚀 Adding New Sections

### Step 1: Define Data Structure

In `src/constants/apiConfig.js`:

```javascript
export const MY_RESOURCE_STRUCTURE = {
  id: 'string',
  title: 'string',
  // ... other fields
}
```

### Step 2: Add API Endpoints

In `src/constants/apiConfig.js`:

```javascript
export const API_ENDPOINTS = {
  // ... existing
  MY_RESOURCES: `${API_BASE_URL}/my-resources`,
  MY_RESOURCE_BY_ID: (id) => `${API_BASE_URL}/my-resources/${id}`,
}
```

### Step 3: Create API Service

In `src/services/apiService.js`:

```javascript
export const myResourceAPI = {
  getAll: async () => fetchData(API_ENDPOINTS.MY_RESOURCES),
  getById: async (id) => fetchData(API_ENDPOINTS.MY_RESOURCE_BY_ID(id)),
  create: async (data, token) => fetchData(API_ENDPOINTS.MY_RESOURCES, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { Authorization: `Bearer ${token}` },
  }),
}
```

### Step 4: Create Custom Hook

In `src/hooks/useAPI.js`:

```javascript
export const useMyResources = () => {
  return useFetch(() => myResourceAPI.getAll())
}
```

### Step 5: Create Component

In `src/components/MySection.jsx`:

```javascript
import { Helmet } from 'react-helmet-async'
import { useMyResources } from '../hooks/useAPI'

export default function MySection() {
  const { data, loading, error } = useMyResources()

  return (
    <>
      <Helmet>
        <title>My Section - Mountain Soul Adventure</title>
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

### Step 6: Add to App

In `src/App.jsx`:

```javascript
import MySection from './components/MySection'

export default function App() {
  return (
    <>
      {/* ... other components */}
      <MySection />
    </>
  )
}
```

---

## 🔐 Security Considerations

1. **API Keys**: Never commit `.env` files with real keys
2. **Authentication**: Use Bearer tokens for admin operations
3. **CORS**: Backend should only allow requests from frontend domain
4. **Input Validation**: Always validate user input
5. **XSS Prevention**: React escapes content by default, but use sanitization for rich text

---

## 📦 Dependencies

**Core Dependencies**:
- `react` - UI library
- `react-dom` - React DOM rendering
- `react-helmet-async` - Meta tag management (SEO)

**Development Dependencies**:
- `vite` - Build tool
- `tailwindcss` - Utility CSS framework
- `eslint` - Code linting
- `@vitejs/plugin-react` - React plugin for Vite

---

## 🎨 Styling

- **Utility Framework**: Tailwind CSS
- **Global Styles**: `src/index.css`
- **Responsive Design**: Mobile-first approach
- **Color Scheme**: Green (#047857, #065f46) + Gray

---

## ♿ Accessibility

All components follow accessibility best practices:

- Semantic HTML tags
- ARIA labels and attributes
- Keyboard navigation support
- Screen reader friendly
- Color contrast compliance

---

## 📱 Responsive Design

Breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

---

## 🔍 SEO Features

- ✅ Meta tags & Open Graph
- ✅ Semantic HTML
- ✅ Structured data (Schema.org)
- ✅ Mobile-friendly
- ✅ Fast loading (Vite optimization)
- ✅ Sitemap & robots.txt
- ✅ Accessibility (A11y)

---

## 🧪 Testing

Recommended tools:
- Vitest - Unit tests
- React Testing Library - Component tests
- Cypress - E2E tests

---

## 🚢 Deployment

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Deployment Options

- Vercel (recommended for React/Vite)
- Netlify
- AWS Amplify
- Docker + Cloud Run

---

## 📚 Additional Resources

- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [React Helmet Async](https://www.npmjs.com/package/react-helmet-async)
- [Schema.org](https://schema.org)

---

## 🤝 Contributing

1. Create feature branch: `git checkout -b feature/name`
2. Commit changes: `git commit -m 'Add feature'`
3. Push to remote: `git push origin feature/name`
4. Create pull request

---

## 📝 Version History

- **v1.0.0** (May 25, 2026) - Initial release
  - Header component
  - Hero section
  - Services section (data-driven)
  - SEO optimization
  - Backend-ready architecture

---

## 📧 Support

For questions or issues:
1. Check the [BACKEND_INTEGRATION_GUIDE.md](./BACKEND_INTEGRATION_GUIDE.md)
2. Check the [SEO_OPTIMIZATION.md](./Frontend/SEO_OPTIMIZATION.md)
3. Review component comments
4. Contact development team

---

**Last Updated**: May 25, 2026
