/**
 * Centralized data and copy for Ahmed Salama's Portfolio
 * Single source of truth as required by blueprint specifications
 */

export interface Project {
  id: string;
  title: string;
  tag: string;
  description: string;
  highlights: string[];
  technologies: string[];
  livePreviewUrl: string;
  whatsappUrl: string;
  image: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  text: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  text: string;
}

export interface PromiseItem {
  title: string;
  text: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface BusinessTypeOption {
  id: string;
  label: string;
  coreSection: string;
}

export interface FeatureOption {
  id: string;
  label: string;
  blockLabel: string;
}

export const PROFILE = {
  name: 'Ahmed Salama',
  title: 'Frontend Developer',
  location: 'Based in Egypt',
  timezone: 'Egypt time',
  email: 'ahmed.dev.5050@gmail.com',
  whatsappPhone: '+20 150 850 2069',
  whatsappUrl: 'https://wa.me/201508502069',
  instagramHandle: '@ahmed.webdesign',
  instagramUrl: 'https://instagram.com/ahmed.webdesign',
  replySpeed: 'I reply as fast as I can, and within 24 hours at the latest.',
  whatsappGeneralUrl:
    'https://wa.me/201508502069?text=Hi%20Ahmed%2C%20I%20found%20your%20portfolio%20and%20I%27d%20like%20to%20talk%20about%20a%20website%20for%20my%20business.',
};

export const HERO_DATA = {
  smallLabel: 'Frontend developer · Egypt',
  h1: 'Websites for restaurants, hotels and clinics that bring in bookings.',
  paragraph:
    "I'm Ahmed Salama. I build fast, clear websites for businesses in the Gulf and beyond, using React, TypeScript and Tailwind CSS.",
  primaryButtonText: 'Message me on WhatsApp',
  secondaryButtonText: 'See my work',
  underButtonsText: 'I reply as fast as I can, and within 24 hours at the latest.',
  factsLine: '3+ years · 25+ projects · Arabic and English',
};

export const SKETCH_DATA = {
  title: 'Sketch your site',
  subtitle: 'Pick a business type and add what you need.',
  businessTypes: [
    { id: 'restaurant', label: 'Restaurant', coreSection: 'Menu & Prices' },
    { id: 'clinic', label: 'Clinic', coreSection: 'Services & Care' },
    { id: 'hotel', label: 'Hotel', coreSection: 'Rooms & Amenities' },
    { id: 'cafe', label: 'Café', coreSection: 'Roasts & Brews' },
    { id: 'other', label: 'Other', coreSection: 'About & Services' },
  ] as BusinessTypeOption[],
  features: [
    { id: 'booking', label: 'Online booking', blockLabel: 'Booking form' },
    { id: 'menu', label: 'Menu or price list', blockLabel: 'Menu / Price list' },
    { id: 'gallery', label: 'Photo gallery', blockLabel: 'Photo gallery' },
    { id: 'whatsapp', label: 'WhatsApp button', blockLabel: 'Floating WhatsApp CTA' },
    { id: 'bilingual', label: 'Arabic and English', blockLabel: 'Language switcher (AR / EN)' },
  ] as FeatureOption[],
};

import lunaBistroImg from './assets/images/luna-bistro.jpg';
import basmaDentalImg from './assets/images/basma-dental-studio.jpg';
import mareaHotelImg from './assets/images/marea-boutique-hotel.jpg';
import alYaqootImg from './assets/images/al-yaqoot-palace.jpg';
import noirCoffeeImg from './assets/images/noir-specialty-coffee.jpg';

export const PROJECTS: Project[] = [
  {
    id: 'luna-bistro',
    title: 'Luna Bistro',
    tag: 'Restaurant · Concept',
    description:
      'A restaurant site built around the food. It has a full menu with prices, a photo gallery, a story page and a reservation form, all easy to read on a phone.',
    highlights: [
      'Menu by category, with prices',
      'Gallery and About pages',
      'Reservation form with date, time and party size',
    ],
    technologies: ['Vite', 'Tailwind CSS', 'React'],
    livePreviewUrl: 'https://luna-bistro-restaurant-seven.vercel.app',
    whatsappUrl:
      'https://wa.me/201508502069?text=Hi%20Ahmed%2C%20I%20saw%20your%20Luna%20Bistro%20project%20and%20I%27d%20like%20something%20similar%20for%20my%20business.',
    image: lunaBistroImg,
  },
  {
    id: 'basma-dental',
    title: 'Basma Dental Studio',
    tag: 'Clinic · Concept',
    description:
      'A dental clinic site where patients try a tooth shade on a slider before they book. The shade they pick is carried into the consultation form.',
    highlights: [
      'Before and after slider with eight shades',
      'Visit steps and a short FAQ',
      'Consultation form',
    ],
    technologies: ['Vite', 'Tailwind CSS', 'React'],
    livePreviewUrl: 'https://basma-dental-studio-nbs5.vercel.app',
    whatsappUrl:
      'https://wa.me/201508502069?text=Hi%20Ahmed%2C%20I%20saw%20your%20Basma%20Dental%20Studio%20project%20and%20I%27d%20like%20something%20similar%20for%20my%20business.',
    image: basmaDentalImg,
  },
  {
    id: 'marea-hotel',
    title: 'Marea Boutique Hotel',
    tag: 'Hotel · Concept',
    description:
      'A hotel site where guests drag the sun across the day to see each room at sunrise, noon, sunset and night, then book with the room and hour they chose.',
    highlights: [
      'Time of day slider with an illustrated window',
      'Three room types',
      'Booking form with dates and a price estimate',
    ],
    technologies: ['Vite', 'Tailwind CSS', 'React'],
    livePreviewUrl: 'https://marea-hotel-concept-website.vercel.app',
    whatsappUrl:
      'https://wa.me/201508502069?text=Hi%20Ahmed%2C%20I%20saw%20your%20Marea%20Boutique%20Hotel%20project%20and%20I%27d%20like%20something%20similar%20for%20my%20business.',
    image: mareaHotelImg,
  },
  {
    id: 'al-yaqoot-palace',
    title: 'Al-Yaqoot Palace',
    tag: 'Restaurant · Arabic (RTL) · Concept',
    description:
      'An Arabic right-to-left site for a fine-dining restaurant with branches in Riyadh, Jeddah and Khobar. Guests book a table, choose a seating area and pre-order dishes in one flow.',
    highlights: [
      'Booking with branch, seating, time slots and total in SAR',
      'Menu with filters and search',
      'Seating areas and branches',
    ],
    technologies: ['Vite', 'Tailwind CSS', 'React'],
    livePreviewUrl: 'https://el-yaqoot-palace.vercel.app',
    whatsappUrl:
      'https://wa.me/201508502069?text=Hi%20Ahmed%2C%20I%20saw%20your%20Al-Yaqoot%20Palace%20project%20and%20I%27d%20like%20something%20similar%20for%20my%20business.',
    image: alYaqootImg,
  },
  {
    id: 'noir-coffee',
    title: 'NOIR Specialty Coffee',
    tag: 'Café · Concept',
    description:
      'A coffee roastery site with a filterable menu of single-origin lots. Each lot shows tasting notes, a cupping score and a price, and visitors can reserve a table.',
    highlights: [
      'Filter lots by flavor and brew method',
      'Tasting notes, scores and prices',
      'Table reservation',
    ],
    technologies: ['Vite', 'Tailwind CSS', 'React'],
    livePreviewUrl: 'https://noir-specialty-coffe.vercel.app',
    whatsappUrl:
      'https://wa.me/201508502069?text=Hi%20Ahmed%2C%20I%20saw%20your%20NOIR%20Specialty%20Coffee%20project%20and%20I%27d%20like%20something%20similar%20for%20my%20business.',
    image: noirCoffeeImg,
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'landing-pages',
    number: '01',
    title: 'Landing pages and one-page sites',
    text: 'One focused page for a restaurant, a clinic or an offer. A clear message, a booking or WhatsApp button, and a fast load on mobile.',
  },
  {
    id: 'multi-page',
    number: '02',
    title: 'Multi-page websites',
    text: 'Menu, rooms, services, branches, gallery and contact, organised so visitors find what they came for.',
  },
  {
    id: 'redesign',
    number: '03',
    title: 'Redesign of old or weak sites',
    text: 'I keep what works, fix what slows people down, and rebuild the rest.',
  },
  {
    id: 'dashboards',
    number: '04',
    title: 'Dashboards',
    text: 'Admin screens for bookings, menus or content, designed for the people who use them every day.',
  },
  {
    id: 'booking-ordering',
    number: '05',
    title: 'Booking and ordering screens',
    text: 'Table, room or appointment booking with date, time and details. The front end is ready to connect to your booking system.',
  },
  {
    id: 'arabic-english',
    number: '06',
    title: 'Arabic and English versions',
    text: 'Right-to-left Arabic layouts and English layouts, built to read well in both.',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: 'Brief',
    text: 'You tell me about the business and what you want the site to do.',
  },
  {
    number: 2,
    title: 'Plan',
    text: 'I send a clear outline of the pages and features for you to approve.',
  },
  {
    number: 3,
    title: 'Build',
    text: 'I build it in React and Tailwind CSS, and show you progress along the way.',
  },
  {
    number: 4,
    title: 'Review',
    text: 'You check it on your phone and your computer. I fix whatever needs fixing.',
  },
  {
    number: 5,
    title: 'Launch',
    text: 'I publish the site and make sure everything works.',
  },
];

export const PROMISES: PromiseItem[] = [
  {
    title: 'Precise',
    text: 'I check every detail, so the site works the way it should on every screen.',
  },
  {
    title: 'Clear',
    text: 'I understand your business first, then I design. You always know where the project stands.',
  },
  {
    title: 'On time',
    text: "I deliver on the date we agree on, and I don't rush the work to do it.",
  },
];

export const ABOUT_DATA = {
  label: 'About',
  h2: 'A frontend developer who starts with your business',
  paragraphs: [
    "I'm Ahmed Salama, a frontend developer based in Egypt. I've been building websites for more than three years and have completed over 25 projects, mostly with React, TypeScript and Tailwind CSS.",
    'I like taking an idea and turning it into a site that brings a business visitors and customers. Before I write any code, I ask questions until I understand what the business needs the site to do.',
    "I'm careful about details, so what I hand over is accurate. I also deliver on the date we agree on, without rushing the work.",
  ],
  facts: [
    '3+ years of experience',
    '25+ projects completed',
    'Arabic (native) and English',
    'Works with clients in the Gulf and abroad',
  ],
  toolsHeading: 'What I work with',
  specialtyStack: ['React', 'TypeScript', 'Tailwind CSS'],
  alsoStack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Vite', 'Framer Motion', 'Git'],
};

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'start-requirements',
    question: 'What do you need from me to start?',
    answer:
      'A short description of your business, what you want visitors to do (book, call or order), and any photos or logo you already have.',
  },
  {
    id: 'arabic-support',
    question: 'Do you build sites in Arabic?',
    answer: 'Yes. I build in Arabic (right-to-left), in English, or in both.',
  },
  {
    id: 'gulf-clients',
    question: 'Do you work with clients in the Gulf?',
    answer:
      "Yes. I'm based in Egypt and work mostly with clients in the Gulf and abroad, in Arabic or English.",
  },
  {
    id: 'reply-time',
    question: 'How fast do you reply?',
    answer:
      'As fast as I can, and within 24 hours at the latest. WhatsApp is the quickest way to reach me.',
  },
  {
    id: 'tech-stack',
    question: 'Which technologies do you use?',
    answer:
      'React, TypeScript and Tailwind CSS, with Vite and Framer Motion when a project needs them.',
  },
  {
    id: 'how-to-start',
    question: 'How do we start?',
    answer:
      "Send me a message on WhatsApp with a few lines about your business. I'll reply with the next step.",
  },
];
