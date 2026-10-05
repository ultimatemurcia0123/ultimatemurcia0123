export interface SiteContent {
  brand: {
    name: string;
    tagline: string;
    subtagline: string;
    phone: string;
    whatsappNumber: string;
    email: string;
    location: string;
  };
  hero: {
    badgeTop: string;
    headlinePart1: string;
    headlinePart2: string;
    stickerLife: string;
    stickerSunSeaGolf: string;
    description: string;
    primaryCtaText: string;
    primaryCtaLink: string;
    secondaryCtaText: string;
    secondaryCtaLink: string;
    videoUrl?: string;
    tabs: string[];
    valuePillars: {
      title: string;
      subtitle: string;
      iconType: 'palm' | 'diamond' | 'sun' | 'shield';
    }[];
  };
  featuredPropertiesSection: {
    badge: string;
    title: string;
    viewAllText: string;
    viewAllLink: string;
  };
  discoverMurcia: {
    badge: string;
    titlePart1: string;
    titlePart2: string;
    description: string;
    ctaText: string;
    ctaLink: string;
    polaroids: {
      label: string;
      image: string;
      tilt: 'left' | 'right';
    }[];
  };
  howWeHelp: {
    badge: string;
    title: string;
    description: string;
    ctaText: string;
    ctaLink: string;
    cards: {
      title: string;
      description: string;
      iconType: 'buy' | 'sell' | 'marketing' | 'support';
    }[];
  };
}

export const SITE_CONTENT: SiteContent = {
  brand: {
    name: 'ULTIMATE MURCIA',
    tagline: 'PROPERTY SALES',
    subtagline: 'Costa Cálida & Golf Specialists',
    phone: '+34 617 633 040',
    whatsappNumber: '34617633040',
    email: 'sales@ultimatemurcia.com',
    location: 'Murcia & Costa Cálida, Spain',
  },
  hero: {
    badgeTop: 'MURCIA & COSTA CÁLIDA',
    headlinePart1: 'MORE THAN',
    headlinePart2: 'A HOME',
    stickerLife: 'LIFE IN MURCIA',
    stickerSunSeaGolf: 'SUN|GOLF|SEA|A BRIGHTER|TOMORROW',
    description:
      'Exceptional properties. A brighter lifestyle. We help you buy or sell in Murcia and Costa Cálida.',
    primaryCtaText: 'Browse properties',
    primaryCtaLink: '/properties',
    secondaryCtaText: 'Watch video',
    secondaryCtaLink: '#discover',
    videoUrl: 'https://www.youtube-nocookie.com/embed/S_dfq9rFWAE?autoplay=1',
    tabs: ['Buy', 'Rent', 'New Builds'],
    valuePillars: [
      {
        title: 'Local experts',
        subtitle: 'Based in Murcia',
        iconType: 'palm',
      },
      {
        title: 'Handpicked properties',
        subtitle: 'Quality homes, prime locations',
        iconType: 'diamond',
      },
      {
        title: 'Incredible lifestyle',
        subtitle: 'Sun, sea, golf and more',
        iconType: 'sun',
      },
      {
        title: 'Full support',
        subtitle: 'From start to finish',
        iconType: 'shield',
      },
    ],
  },
  featuredPropertiesSection: {
    badge: 'FEATURED PROPERTIES',
    title: 'OUR LATEST PROPERTIES',
    viewAllText: 'View all properties',
    viewAllLink: '/properties',
  },
  discoverMurcia: {
    badge: 'DISCOVER MURCIA',
    titlePart1: 'SUN. SEA. GOLF.',
    titlePart2: 'A BRIGHTER TOMORROW.',
    description:
      'Over 320 days of sunshine, world-class golf courses, beautiful coastal towns and a relaxed Mediterranean lifestyle. Murcia is a place to live, invest and enjoy.',
    ctaText: 'Explore the lifestyle',
    ctaLink: '/resorts',
    polaroids: [
      {
        label: 'STUNNING COASTLINE',
        image: '/images/discover-coast.webp',
        tilt: 'left',
      },
      {
        label: 'WORLD CLASS GOLF',
        image: '/images/discover-golf.webp',
        tilt: 'right',
      },
    ],
  },
  howWeHelp: {
    badge: 'HOW WE HELP',
    title: 'YOUR PROPERTY IN EXPERT HANDS',
    description:
      "Whether you're buying, selling or simply exploring your options, our local team provides honest advice, professional marketing and a smooth, stress-free process.",
    ctaText: 'Our services',
    ctaLink: '/services',
    cards: [
      {
        title: 'Buy a property',
        description: 'Find your perfect home in the sun.',
        iconType: 'buy',
      },
      {
        title: 'Sell your property',
        description: 'Reach qualified buyers across Europe.',
        iconType: 'sell',
      },
      {
        title: 'Professional marketing',
        description: 'High-quality listings, photos and exposure.',
        iconType: 'marketing',
      },
      {
        title: 'Ongoing support',
        description: "We're with you from start to finish.",
        iconType: 'support',
      },
    ],
  },
};
