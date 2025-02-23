import { client, BlogPost, CATEGORIES } from '@/lib/contentful';
import SearchBar from '@/components/SearchBar';
import PostCard from '@/components/PostCard';
import { Entry } from 'contentful';

interface Props {
  params: { slug: string };
  searchParams: { search?: string };
}

// Function to get category from slug
function getCategoryFromSlug(slug: string): string | undefined {
  return CATEGORIES.find(
    (category) => category.toLowerCase() === decodeURIComponent(slug).toLowerCase()
  );
}

export async function generateStaticParams() {
  // Generate static paths for all categories
  return CATEGORIES.map((category) => ({
    slug: category.toLowerCase(),
  }));
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const { slug } = params;
  const { search } = searchParams;

  const category = getCategoryFromSlug(slug);
  
  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center text-gray-500 font-light">
          Kategori bulunamadı.
        </div>
      </div>
    );
  }

  // Fetch posts for this category
  const response = await client.getEntries<BlogPost>({
    content_type: 'blogPost',
    'fields.category': category,
    ...(search && {
      'fields.title[match]': search,
    }),
  });

  const posts: Entry<BlogPost>[] = response.items;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-light text-[#E85D45] mb-8 text-center">
        {category}
      </h1>
      
      <SearchBar />
      
      {posts.length > 0 ? (
        <div className="flex justify-center mt-12">
          <div className="grid gap-12 grid-cols-1 md:grid-cols-2 max-w-7xl w-full px-4">
            {posts.map((post) => (
              <PostCard key={post.sys.id} post={post} />
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-500 font-light">
          Bu kategoride henüz içerik bulunmamaktadır.
        </div>
      )}
    </div>
  );
}
