export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  features: string[];
  icon: 'layout' | 'image' | 'code' | 'pen-tool';
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  link?: string;
}

export interface Asset {
  id: string;
  title: string;
  type: string;
  thumbnail: string;
  downloadCount: number;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export enum AvailabilityStatus {
  AVAILABLE = 'Available for work',
  BUSY = 'Currently booked',
  UNAVAILABLE = 'Unavailable',
}