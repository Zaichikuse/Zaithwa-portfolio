import {
  ctjTecLogo,
  techherLogoMain,
  techherLogo1,
  techherLogo2,
  techherLogo3,
  walakataFlyer,
  walakataSchoolLogo,
  insightEdgeLogo,
  missWakoLogo,
  missWakoFlyer,
  azaiBeautyFlyer,
  braidsByFeliciah,
  maggiesKitchen,
  skinProduct,
  quinBusinessFlyer,
} from '../assets/images';

export interface DesignProject {
  id: number;
  title: string;
  category: string;     // displayed on card tag
  filter: string;       // matches filter button value
  description: string;
  tools: string[];
  images: string[];
  tags: string[];
  hasBrandKit?: boolean;
}

export interface SoftwareProject {
  id: number;
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  features: string[];
  impact: string;
  liveUrl?: string;
  githubUrl?: string;
  status: 'live' | 'in-progress' | 'beta';
}

export const designProjects: DesignProject[] = [
  {
    id: 1,
    title: 'CTJ Tec Motors',
    category: 'Automotive Branding',
    filter: 'Logos',
    description: 'Professional automotive logo design with tire and shock absorber graphics for a spare parts business.',
    tools: ['Adobe Illustrator'],
    images: [ctjTecLogo],
    tags: ['Logo Design', 'Automotive'],
  },
  {
    id: 2,
    title: 'TechHer MW — Brand System',
    category: 'Community Branding',
    filter: 'Branding',
    description: 'Founder & Lead Designer. Complete brand identity system with logo variations, brand guidelines, and interactive documentation for Malawi\'s women-in-tech community.',
    tools: ['Adobe Illustrator', 'Brand System Design'],
    images: [techherLogoMain, techherLogo1, techherLogo2, techherLogo3],
    tags: ['Brand Identity', 'Community', 'Founder'],
    hasBrandKit: true,
  },
  {
    id: 3,
    title: 'Walakata Events',
    category: 'Event Services',
    filter: 'Flyers',
    description: 'Professional event planning flyer with elegant design and venue photography showcase.',
    tools: ['Adobe Photoshop', 'Canva'],
    images: [walakataFlyer],
    tags: ['Flyer Design', 'Events'],
  },
  {
    id: 4,
    title: 'Walakata Private School',
    category: 'Educational Branding',
    filter: 'Logos',
    description: 'Institutional shield logo with academic symbolism — torch, book, and professional positioning for a private school.',
    tools: ['Adobe Illustrator'],
    images: [walakataSchoolLogo],
    tags: ['Logo Design', 'Education'],
  },
  {
    id: 5,
    title: 'Insight Edge Consulting',
    category: 'Professional Services',
    filter: 'Logos',
    description: 'Modern consulting logo with an upward arrow representing growth, precision, and strategic innovation.',
    tools: ['Adobe Illustrator'],
    images: [insightEdgeLogo],
    tags: ['Logo Design', 'Consulting'],
  },
  {
    id: 6,
    title: 'Miss Wako Couture — Logo',
    category: 'Luxury Fashion',
    filter: 'Fashion',
    description: 'Elegant luxury fashion brand logo with crown and decorative elements for a premium Malawian couture label.',
    tools: ['Adobe Illustrator'],
    images: [missWakoLogo],
    tags: ['Logo Design', 'Fashion', 'Luxury'],
  },
  {
    id: 7,
    title: 'Miss Wako Couture — Flyer',
    category: 'Fashion Marketing',
    filter: 'Fashion',
    description: 'Premium fashion marketing flyer with luxury clothing photography and high-end layout design.',
    tools: ['Adobe Photoshop'],
    images: [missWakoFlyer],
    tags: ['Flyer Design', 'Fashion'],
  },
  {
    id: 8,
    title: 'Azai Beauty Studio',
    category: 'Beauty Education',
    filter: 'Beauty',
    description: 'Professional beauty education flyer for lash application training with clear pricing and class information.',
    tools: ['Canva', 'Adobe Photoshop'],
    images: [azaiBeautyFlyer],
    tags: ['Flyer Design', 'Beauty'],
  },
  {
    id: 9,
    title: 'Braids by Feliciah',
    category: 'Hair Services',
    filter: 'Beauty',
    description: 'Professional hair styling service flyer showcasing a portfolio of completed braiding work.',
    tools: ['Adobe Photoshop'],
    images: [braidsByFeliciah],
    tags: ['Flyer Design', 'Hair'],
  },
  {
    id: 10,
    title: "Maggie's Kitchen",
    category: 'Food & Beverage',
    filter: 'Branding',
    description: 'Restaurant branding with warm culinary aesthetic — professional, inviting, and appetite-inspiring.',
    tools: ['Adobe Illustrator'],
    images: [maggiesKitchen],
    tags: ['Branding', 'Restaurant'],
  },
  {
    id: 11,
    title: 'Beauty Product Promotion',
    category: 'E-Commerce',
    filter: 'Beauty',
    description: 'Cosmetics promotional campaign with high-impact "Big Sale" messaging and product photography.',
    tools: ['Canva', 'Adobe Photoshop'],
    images: [skinProduct],
    tags: ['Social Media', 'E-Commerce'],
  },
  {
    id: 12,
    title: 'CS Project Coaching',
    category: 'Educational Services',
    filter: 'Services',
    description: 'Professional service marketing flyer for computer science tutoring and project coaching services.',
    tools: ['Canva'],
    images: [quinBusinessFlyer],
    tags: ['Flyer Design', 'Education', 'Services'],
  },
];

export const softwareProjects: SoftwareProject[] = [
  {
    id: 1,
    name: 'Phunzira',
    tagline: 'AI Study Agent for African Students',
    description: 'AI-powered study assistant for African university students with personalized learning recommendations, real-time responses, and curriculum-aligned study paths.',
    tech: ['React', 'TypeScript', 'Vite', 'Google Gemini API', 'Firebase'],
    features: ['Real-time AI responses', 'Personalized study paths', 'Curriculum alignment', 'Offline capability', 'Progress analytics'],
    impact: 'Making quality AI-powered education accessible to Malawian students.',
    liveUrl: '#',
    githubUrl: '#',
    status: 'live',
  },
  {
    id: 2,
    name: 'MbewuSmart',
    tagline: 'Agricultural Intelligence for Smallholder Farmers',
    description: 'Offline-first agricultural app providing crop diagnosis, weather intelligence, and market prices for smallholder farmers — bilingual in Chichewa and English.',
    tech: ['Flutter', 'Dart', 'Firebase', 'Google Maps SDK', 'ML Kit'],
    features: ['AI crop disease diagnosis', 'Real-time weather', 'Market price aggregation', 'GPS field mapping', 'Offline-first'],
    impact: 'Serving farming communities across Malawi with data-driven agricultural decisions.',
    liveUrl: '#',
    githubUrl: '#',
    status: 'beta',
  },
  {
    id: 3,
    name: 'MOYO',
    tagline: 'Mental Wellness Platform for Africa',
    description: 'Mental wellness app with culturally sensitive AI support for African users — mood tracking, guided wellness, and anonymous peer communities.',
    tech: ['React Native', 'Expo', 'TypeScript', 'Claude API', 'Firebase'],
    features: ['Culturally sensitive AI coach', 'Daily mood tracking', 'Anonymous peer support', 'Guided breathwork', 'Crisis resources'],
    impact: 'Reducing mental health stigma and expanding access to wellness across sub-Saharan Africa.',
    liveUrl: '#',
    githubUrl: '#',
    status: 'in-progress',
  },
  {
    id: 4,
    name: 'GoTicket',
    tagline: 'Event Ticketing & Management',
    description: 'Ticketing and event management application with QR code generation, mobile money integration, and real-time attendance tracking.',
    tech: ['JavaScript', 'Cordova', 'Node.js', 'MongoDB'],
    features: ['QR code ticket generation', 'Mobile money payments', 'Real-time attendance', 'Event discovery', 'Organizer dashboard'],
    impact: 'Digitizing the Malawian events industry and reducing ticketing fraud.',
    liveUrl: '#',
    githubUrl: '#',
    status: 'live',
  },
];

export const designSkills = [
  'Adobe Photoshop',
  'Adobe Illustrator',
  'Canva',
  'CorelDRAW',
  'Logo Design',
  'Brand System Design',
  'Typography',
  'Color Theory',
  'Print & Digital Design',
];

export const engineeringSkills = [
  'React / TypeScript',
  'Flutter / Dart',
  'React Native',
  'JavaScript',
  'Firebase',
  'Python',
  'Google Cloud / AWS',
  'AI Integration',
  'Full-Stack Development',
  'UI/UX Design',
];

export const designCategories = ['All', 'Logos', 'Branding', 'Flyers', 'Fashion', 'Beauty', 'Services'];
