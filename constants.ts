import { AvailabilityStatus, Project, Service, Asset, Review } from './types';

// Update this file to change website content dynamically
export const PERSONAL_INFO = {
  name: "Momen Ahmed Ali",
  nickname: "Momen",
  role: "UI Developer & Digital Artist",
  bio: "I am a passionate UI Developer and Graduate Artist specializing in creating immersive web experiences. From pixel-perfect icons to complex React applications, I bridge the gap between design and code.",
  availability: AvailabilityStatus.AVAILABLE,
  github: "https://github.com/momenali", // Placeholder
  email: "contact@momenali.dev",
  location: "Remote / Worldwide"
};

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'UI/UX Design',
    description: 'Modern, clean, and user-centric interfaces for web and mobile applications.',
    price: '$500+',
    features: ['Figma Prototypes', 'User Research', 'Design Systems', 'Interactive Mockups'],
    icon: 'layout'
  },
  {
    id: '2',
    title: 'Frontend Development',
    description: 'Converting designs into responsive, high-performance React/TypeScript code.',
    price: '$800+',
    features: ['React & TypeScript', 'Tailwind CSS', 'Performance Optimization', 'SEO Best Practices'],
    icon: 'code'
  },
  {
    id: '3',
    title: 'Digital Art & Thumbnails',
    description: 'Eye-catching thumbnails and digital assets to boost engagement.',
    price: '$50 / asset',
    features: ['YouTube Thumbnails', 'Social Media Assets', 'Custom Illustrations', 'Brand Identity'],
    icon: 'image'
  },
  {
    id: '4',
    title: 'Icon Design',
    description: 'Custom icon sets tailored to your brand language.',
    price: '$100 / set',
    features: ['SVG Vectors', 'Consistent Style', 'Multiple Sizes', 'Animation Ready'],
    icon: 'pen-tool'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Dashboard',
    category: 'Development',
    image: 'https://picsum.photos/800/600?random=1',
    description: 'A full-featured admin dashboard built with React and Tailwind.'
  },
  {
    id: '2',
    title: 'Neon Cyberpunk Art',
    category: 'Art',
    image: 'https://picsum.photos/800/600?random=2',
    description: 'Digital illustration series exploring futuristic cityscapes.'
  },
  {
    id: '3',
    title: 'Finance App UI',
    category: 'UI Design',
    image: 'https://picsum.photos/800/600?random=3',
    description: 'Clean and intuitive mobile banking interface design.'
  },
  {
    id: '4',
    title: 'Gaming Asset Pack',
    category: 'Assets',
    image: 'https://picsum.photos/800/600?random=4',
    description: 'High-quality 2D assets for indie game developers.'
  }
];

export const FREE_ASSETS: Asset[] = [
  {
    id: '1',
    title: 'Glassmorphism UI Kit',
    type: 'Figma',
    thumbnail: 'https://picsum.photos/400/300?random=5',
    downloadCount: 1240
  },
  {
    id: '2',
    title: '30+ React Icons',
    type: 'Code',
    thumbnail: 'https://picsum.photos/400/300?random=6',
    downloadCount: 856
  },
  {
    id: '3',
    title: 'Stream Overlay Pack',
    type: 'Graphics',
    thumbnail: 'https://picsum.photos/400/300?random=7',
    downloadCount: 2300
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Product Manager',
    content: 'Momen delivered the UI design faster than expected, and the quality was outstanding. Highly recommended!',
    rating: 5,
    avatar: 'https://picsum.photos/100/100?random=8'
  },
  {
    id: '2',
    name: 'David Chen',
    role: 'Indie Developer',
    content: 'The free assets are a lifesaver, and his custom development work is clean and bug-free.',
    rating: 5,
    avatar: 'https://picsum.photos/100/100?random=9'
  }
];

// System instruction for the AI assistant
export const AI_SYSTEM_INSTRUCTION = `
You are the AI Assistant for Momen Ahmed Ali's portfolio website. 
Your goal is to answer visitor questions about Momen, his skills, services, and projects.

Here is the context about Momen:
- Name: ${PERSONAL_INFO.name} (${PERSONAL_INFO.nickname})
- Role: ${PERSONAL_INFO.role}
- Bio: ${PERSONAL_INFO.bio}
- Availability: ${PERSONAL_INFO.availability}
- Email: ${PERSONAL_INFO.email}

Services offered:
${SERVICES.map(s => `- ${s.title}: ${s.description} (Starts at ${s.price})`).join('\n')}

Recent Projects:
${PROJECTS.map(p => `- ${p.title} (${p.category}): ${p.description}`).join('\n')}

Tone: Professional, friendly, creative, and concise.
If asked about hiring, direct them to the email contact@momenali.dev.
If asked about technical skills, mention React, TypeScript, Tailwind, Figma, and Digital Art.
`;