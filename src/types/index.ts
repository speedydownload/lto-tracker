export type StatusType = 'pending' | 'processing' | 'available' | 'released' | 'returned';

export interface Branch {
  id: string;
  name: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  lat: number;
  lng: number;
  hours: string;
  services: string[];
}

export interface TrackerResult {
  plateNumber: string;
  mvFileNumber: string;
  status: string;
  statusCode: StatusType;
  estimatedRelease: string | null;
  branch: string;
  remarks: string;
}

export interface LicenseResult {
  licenseNumber: string;
  name: string;
  status: string;
  expiryDate: string;
  restrictions: string;
  conditions: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Guide {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  datePublished: string;
  dateModified: string;
  author: string;
  readTime: string;
}

export interface Tool {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  features: string[];
  longDescription: string;
}
