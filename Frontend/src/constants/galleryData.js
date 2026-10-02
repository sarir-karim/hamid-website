const galleryFiles = import.meta.glob('../assets/gallery/*', {
  eager: true,
  query: '?url',
  import: 'default',
})

export const LOCAL_GALLERY_IMAGES = Object.entries(galleryFiles)
  .sort(([firstPath], [secondPath]) => firstPath.localeCompare(secondPath))
  .map(([, image], index) => ({
    id: `local-gallery-${index + 1}`,
    title: `Adventure Moment ${index + 1}`,
    description: 'A moment captured on a Mountain Soul Adventure trip.',
    image,
    thumbnail: image,
    category: 'adventure',
    alt: `Mountain Soul Adventure gallery photo ${index + 1}`,
  }))