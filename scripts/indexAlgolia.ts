import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import { algoliasearch } from 'algoliasearch';

interface PortfolioItem {
  objectID: string;
  title: string;
  description: string;
  category: 'project' | 'blog' | 'skill' | 'experience';
  url: string;
  image?: string;
  tags?: string[];
  date?: string;
  featured?: boolean;
}

const indexPortfolioData = async () => {
  const client = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!,
    process.env.ALGOLIA_ADMIN_API_KEY!
  ) as any;

  const index = client.initIndex('portfolio_content'); // ✅ Node uses initIndex

  const portfolioData: PortfolioItem[] = [
    {
      objectID: '1',
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with Next.js, TypeScript, and Stripe',
      category: 'project',
      url: '/projects/ecommerce-platform',
      image: '/projects/ecommerce.jpg',
      tags: ['Next.js', 'TypeScript', 'Stripe', 'TailwindCSS'],
      date: '2024-01-15',
      featured: true,
    }
  ];

  try {
    await index.setSettings({
      searchableAttributes: ['title', 'description', 'tags', 'category'],
      attributesForFaceting: ['category', 'tags', 'featured'],
      customRanking: ['desc(featured)', 'desc(date)'],
      attributesToHighlight: ['title', 'description'],
      highlightPreTag: '<mark>',
      highlightPostTag: '</mark>'
    });

    const { objectIDs } = await index.saveObjects(portfolioData);
    console.log(`✅ Indexed ${objectIDs.length} items successfully!`);
  } catch (error) {
    console.error('❌ Error indexing data:', error);
  }
};

indexPortfolioData()
  .then(() => {
    console.log('🎉 Indexing complete!');
    process.exit(0);
  })
  .catch((err) => {
    console.error('💥 Indexing failed:', err);
    process.exit(1);
  });
