// lib/gallery.ts

export interface GalleryItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  imageSrc: string;
  description: string;
}

export const galleryData: GalleryItem[] = [
  {
    id: "1",
    slug: "about-our-kitchen",
    title: "About Our Kitchen",
    category: "About",
    imageSrc: "https://images.unsplash.com/photo-1555244162-803834f70033?w=1200&q=80",
    description: "Explore the heart of CaterServ where our expert chefs create culinary masterpieces. Our industry-level kitchens are equipped with the best facilities to serve 1000+ guests seamlessly."
  },
  {
    id: "2",
    slug: "premium-event-setup",
    title: "Premium Event Setup",
    category: "Event",
    imageSrc: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80",
    description: "A glimpse into our luxurious wedding and corporate event setups. We provide elegant seating, beautiful floral arrangements, and top-tier table services."
  },
  {
    id: "3",
    slug: "exclusive-menu-tasting",
    title: "Exclusive Menu Tasting",
    category: "Menu",
    imageSrc: "https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&q=80",
    description: "Our signature dishes crafted with fresh, locally sourced ingredients. From sizzling appetizers to decadent desserts, our menu is designed to delight your taste buds."
  },
  {
    id: "4",
    slug: "blog-culinary-trends",
    title: "Culinary Trends 2024",
    category: "Blog",
    imageSrc: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&q=80",
    description: "Read our latest blog on the emerging trends in the catering industry. Discover how fusion cuisines and sustainable food practices are changing the way we celebrate."
  },
  {
    id: "5",
    slug: "outdoor-bbq-event",
    title: "Outdoor BBQ Event",
    category: "Event",
    imageSrc: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&q=80",
    description: "Live BBQ stations for outdoor parties. Savor the smoky flavors of grilled meats and fresh vegetables, cooked live by our expert pitmasters."
  },
  {
    id: "6",
    slug: "gourmet-desserts-menu",
    title: "Gourmet Desserts",
    category: "Menu",
    imageSrc: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=1200&q=80",
    description: "End your meals on a sweet note with our handcrafted desserts, pastries, and customized event cakes."
  }
];