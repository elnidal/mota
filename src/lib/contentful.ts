import { createClient } from 'contentful';
import { Document } from '@contentful/rich-text-types';

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
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

export interface BlogPost {
  sys: {
    id: string;
    createdAt: string;
  };
  fields: {
    title: string;
    slug: string;
    content: Document;
    excerpt: string;
    category: Category;
    featuredImage?: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
}
