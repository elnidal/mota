import { createClient } from 'contentful';

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
  };
  fields: {
    title: string;
    category: Category;
    content: any;
    images?: {
      fields: {
        file: {
          url: string;
        };
      };
    }[];
    video?: {
      fields: {
        file: {
          url: string;
        };
      };
    }[];
  };
}
