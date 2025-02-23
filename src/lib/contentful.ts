import { createClient } from 'contentful';
import { Document } from '@contentful/rich-text-types';

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || 'uht1e3ba21ir',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || 'icJW5fz6x8wmEEQ2ORr8BWYjfL',
});

export const CATEGORIES = [
  'Öykü',
  'Roman',
  'Şiir',
  'Deneme',
  'Makale',
  'Haber',
  'Video',
] as const;

export type Category = typeof CATEGORIES[number];

interface ContentfulFile {
  fields: {
    file: {
      url: string;
    };
  };
}

export interface BlogPost {
  sys: {
    id: string;
    createdAt: string;
    updatedAt: string;
  };
  fields: {
    title: string;
    category: Category;
    content: Document;
    images?: ContentfulFile[];
    video?: ContentfulFile[];
  };
}
