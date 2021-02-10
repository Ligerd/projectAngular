export enum BE_ACCESS_ROLES {
  BUSINESS_ADMIN = 'BUSINESS_ADMIN',
}

export interface PAGE {
  number: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

export interface LIST_RESPONSE<T> {
  page: PAGE;
  content: T[];
}

export interface LIST_OPTION {
  id: number;
  name: string;
}

export interface USER {
  id: string;
  token?: string;
  email: string;
  role: BE_ACCESS_ROLES;
  password?: string;
  location?: string;
  createdAt: Date;
}

// ROUTING TREES
export interface ROUTING_TREE {
  id: string;
  status: 'USED' | 'NOT_USED';
  name: string;
  usedIn: string;
  destinationNumber: {
    id: string;
    number: string;
  };
  announcement: {
    id: string;
    name: string;
  };
  activeFrom: Date;
  bsk: string;
  customer: string;
}

// CHANGE LOG
export interface CHANGE_LOG_ENTRY {
  id: string;
  status: string;
  date: Date;
  businessNumbers: string[];
  operation: string;
  changeDescription: string;
  description: string;
  user: string;
}

// ANNOUNCEMENTS
export interface ANNOUNCEMENT {
  id: string;
  title: string;
  author: string;
  description: string;
  imagePath: string;
  rate: string;
  activeFrom:  Date;
}

export interface LANGUAGE_FILE {
  file: any;
  type: 'file' | 'language';
  wording: string;
  useLanguage: string;
}

// DESTINATION NUMBERS
export interface DESTINATION_NUMBER {
  id: string;
  status: 'USED' | 'NOT_USED' | 'INVALID' | 'DELETED';
  number: string;
  name: string;
  usedIn: {
    id: string;
    name: string;
  };
  activeFrom: Date;
  bsk: string;
  customer: string;
  variableEntry: boolean;
  deactivatePlausibilityCheck: boolean;
}
