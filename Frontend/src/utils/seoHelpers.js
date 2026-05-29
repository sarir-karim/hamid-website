// SEO Helper Functions

export const SEO_CONFIG = {
  siteName: "Mountain Soul Adventure",
  siteUrl: "https://mountainsoladventure.com",
  description: "Authentic mountain experiences across Pakistan's most breathtaking landscapes. Where mountains meet the soul.",
  keywords: "mountain tours, Pakistan adventure, hiking, trekking, mountain experiences, soul adventure",
  socialImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=630&fit=crop",
};

/**
 * Generate structured data (Schema.org JSON-LD)
 * @param {object} config - Configuration object
 * @returns {object} - Structured data object
 */
export const generateStructuredData = (config = {}) => {
  const {
    type = "Organization",
    name = SEO_CONFIG.siteName,
    description = SEO_CONFIG.description,
    url = SEO_CONFIG.siteUrl,
    logo = `${SEO_CONFIG.siteUrl}/logo.png`,
    image = SEO_CONFIG.socialImage,
  } = config;

  if (type === "Organization") {
    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      name,
      description,
      url,
      logo,
      sameAs: [
        "https://www.facebook.com/mountainsouldventure",
        "https://www.instagram.com/mountainsouldventure",
        "https://twitter.com/mountainsouldventure",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Support",
        email: "info@mountainsouldventure.com",
        telephone: "+92-XXX-XXXXXXX",
      },
    };
  }

  if (type === "LocalBusiness") {
    return {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name,
      description,
      url,
      image,
      address: {
        "@type": "PostalAddress",
        addressCountry: "Pakistan",
        addressLocality: "Islamabad",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "33.6844",
        longitude: "73.0479",
      },
    };
  }

  if (type === "BreadcrumbList") {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: config.items || [],
    };
  }

  return {};
};

/**
 * Meta tags configuration object
 * @param {object} config - Configuration for meta tags
 * @returns {object} - Meta tags object
 */
export const createMetaTags = (config = {}) => {
  const {
    title = SEO_CONFIG.siteName,
    description = SEO_CONFIG.description,
    keywords = SEO_CONFIG.keywords,
    image = SEO_CONFIG.socialImage,
    url = SEO_CONFIG.siteUrl,
    type = "website",
  } = config;

  return {
    title,
    description,
    keywords,
    og: {
      title,
      description,
      image,
      url,
      type,
      siteName: SEO_CONFIG.siteName,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      image,
    },
    canonical: url,
  };
};

/**
 * Generate breadcrumb structured data
 */
export const generateBreadcrumbs = (items = []) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};
