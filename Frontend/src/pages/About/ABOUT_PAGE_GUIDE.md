# About Page Implementation Guide

## Overview
The About page is a fully responsive, SEO-optimized component that manages dynamic content from an admin panel. It features reusable sections and is data-driven for easy content management.

## Architecture

### Component Structure
```
About.jsx (Main Component)
├── AboutHero (Hero section with background image)
├── StorySection (Company story/narrative)
├── MissionVisionSection (Mission & Vision cards)
├── ValuesSection (Core values grid)
├── StatsSection (Key statistics)
├── TimelineSection (Company milestones)
└── CTASection (Call-to-action buttons)
```

### Data Flow
```
Admin Panel → Backend API → useFetch Hook → About Component → Render Sections
              ↓
        Fallback Data (DEFAULT_ABOUT_DATA) if API fails
```

## Features

### 1. **Data-Driven Content**
- All content managed through the admin panel
- Automatic fallback to `DEFAULT_ABOUT_DATA` if API is unavailable
- Real-time updates without code changes

### 2. **SEO Optimization**
- Structured data (Schema.org Organization type)
- Rich meta tags (og:title, og:description, og:image)
- Semantic HTML with proper heading hierarchy
- Descriptive alt text for all images
- SR-only hidden content for accessibility

### 3. **Reusable Components**
- Each section is a standalone component
- Easy to add/remove sections
- Modular design for code reuse

### 4. **Responsive Design**
- Mobile-first approach
- Tailwind CSS utilities for responsive breakpoints
- Proper spacing and typography on all devices

### 5. **Performance**
- Lazy loading for images
- Efficient data fetching with fallback
- Optimized bundle size

## API Integration

### Endpoint
```
GET /api/about
```

### Expected Data Structure
```javascript
{
  companyName: "Mountain Soul Adventure",
  tagline: "Bringing the soul back to mountain adventure",
  mission: "Mission statement...",
  vision: "Vision statement...",
  story: {
    title: "Our Story",
    content: "Multi-paragraph story text...",
    image: "https://..."
  },
  values: [
    {
      id: "authenticity",
      title: "Authenticity",
      description: "Description...",
      icon: "✨"
    },
    // ... more values
  ],
  timeline: [
    {
      id: "timeline-1",
      year: "2010",
      title: "The Beginning",
      description: "...",
      icon: "🚀"
    },
    // ... more timeline items
  ],
  stats: [
    {
      label: "Expeditions Completed",
      value: "500+",
      icon: "⛰️"
    },
    // ... more stats
  ]
}
```

## Admin Panel Integration

### How to Update Content

#### 1. **Basic Information**
```javascript
// Update company name, tagline, mission, vision
PATCH /api/about
{
  companyName: "...",
  tagline: "...",
  mission: "...",
  vision: "..."
}
```

#### 2. **Story Section**
```javascript
PATCH /api/about
{
  story: {
    title: "Our Story",
    content: "Multi-paragraph\n\ntext...",  // Separate paragraphs with \n\n
    image: "https://..."
  }
}
```

#### 3. **Core Values**
```javascript
PATCH /api/about
{
  values: [
    {
      id: "value-id",
      title: "Value Title",
      description: "Value description",
      icon: "emoji"  // Single emoji or icon character
    }
  ]
}
```

#### 4. **Timeline**
```javascript
PATCH /api/about
{
  timeline: [
    {
      id: "timeline-id",
      year: "2010",
      title: "Event Title",
      description: "Event description",
      icon: "emoji"
    }
  ]
}
```

#### 5. **Statistics**
```javascript
PATCH /api/about
{
  stats: [
    {
      label: "Stat Label",
      value: "123+",
      label2: "Optional secondary label",  // Optional
      icon: "emoji"
    }
  ]
}
```

## Hooks Usage

### useAbout Hook
```javascript
import { useAbout } from '../../hooks/useAPI'

function MyComponent() {
  const { data, loading, error, refetch } = useAbout()
  
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  
  return <div>{data.companyName}</div>
}
```

### useFetch Hook (Generic)
```javascript
const { data, loading, error, refetch } = useFetch(
  aboutAPI.getAbout,
  true,  // immediate fetch
  DEFAULT_ABOUT_DATA  // fallback data
)
```

## Customization

### Adding New Sections

1. **Create a new component**
```javascript
function NewSection({ data }) {
  return (
    <section className="py-16 md:py-24 bg-white">
      {/* Your content */}
    </section>
  )
}
```

2. **Add to About page**
```javascript
export default function About() {
  // ... existing code
  
  return (
    <>
      {/* ... existing sections ... */}
      <NewSection data={aboutData.newSection} />
      {/* ... */}
    </>
  )
}
```

3. **Update data structure**
```javascript
const DEFAULT_ABOUT_DATA = {
  // ... existing fields ...
  newSection: {
    // Your data structure
  }
}
```

### Styling

All sections use Tailwind CSS utility classes:
- `py-16 md:py-24` - Vertical padding (responsive)
- `bg-white` / `bg-gray-50` / `bg-green-700` - Background colors
- `max-w-6xl mx-auto` - Max width container with auto margins
- `px-6` - Horizontal padding

## SEO Features

### Schema.org Structured Data
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "...",
  "description": "...",
  "url": "...",
  "logo": "...",
  "foundingDate": "2010",
  "areaServed": "Pakistan",
  "mission": "...",
  "vision": "...",
  "sameAs": ["social-links"]
}
```

### Meta Tags
- Title: Optimized for keywords and brand
- Description: Clear, compelling company description
- OG tags: Social media sharing optimization
- Keywords: Relevant search terms

### Accessibility
- Semantic HTML (`<article>`, `<section>`)
- ARIA labels for sections
- Alt text for all images
- Proper heading hierarchy (h1, h2, h3)

## Performance Tips

1. **Image Optimization**
   - Use appropriate image sizes
   - Consider WebP format for better compression
   - Implement lazy loading (already done)

2. **Content Optimization**
   - Keep story content concise but engaging
   - Use bullet points in descriptions
   - Limit timeline to 4-6 key milestones

3. **API Calls**
   - Cache data on the client side
   - Implement request deduplication
   - Use fallback data for offline support

## Testing

### Manual Testing Checklist
- [ ] Page loads without errors
- [ ] All sections render correctly
- [ ] Images load properly
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] Links work (CTA buttons)
- [ ] SEO tags are present
- [ ] Structured data validates at schema.org
- [ ] Fallback data displays when API is down

### Automated Testing
```javascript
describe('About Page', () => {
  it('should render all sections', () => {
    // Test implementation
  })
  
  it('should display fallback data', () => {
    // Test implementation
  })
  
  it('should handle API errors gracefully', () => {
    // Test implementation
  })
})
```

## Troubleshooting

### Page Not Displaying
- Check API endpoint is correct
- Verify `react-helmet-async` is properly configured
- Check browser console for errors

### Data Not Updating
- Verify API returns correct data structure
- Check `useFetch` hook is being called
- Ensure admin panel updates are saved

### Styling Issues
- Verify Tailwind CSS is configured
- Check class names match Tailwind utilities
- Clear browser cache

### SEO Issues
- Validate structured data at schema.org
- Check meta tags in page source
- Use SEO tools (Google Search Console, Lighthouse)

## Future Enhancements

1. **Dynamic Sections** - Add/remove sections from admin
2. **Rich Text Editor** - For story content formatting
3. **Image Gallery** - Integrate with gallery component
4. **Testimonials** - Include customer testimonials
5. **Team Integration** - Link to team members
6. **Blog Integration** - Latest articles section
7. **Video Support** - Embed company videos
8. **Multi-language** - Support multiple languages

## Files Modified

- `/src/pages/About/About.jsx` - Main About page component
- `/src/pages/About/index.js` - Exports file
- `/src/hooks/useAPI.js` - Already includes useAbout hook
- `/src/services/apiService.js` - Already includes aboutAPI

## Related Files

- `/src/components/Header.jsx` - Responsive header
- `/src/components/Footer.jsx` - Footer component
- `/src/constants/apiConfig.js` - API configuration
- `/src/utils/seoHelpers.js` - SEO utilities
