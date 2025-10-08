import algoliasearch from 'algoliasearch'

// Sample portfolio data structure
interface PortfolioItem {
  objectID: string
  title: string
  description: string
  category: 'project' | 'blog' | 'skill' | 'experience'
  url: string
  image?: string
  tags?: string[]
  date?: string
  featured?: boolean
}

const indexPortfolioData = async () => {
  // Initialize Algolia admin client
  const client = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!,
    process.env.ALGOLIA_ADMIN_API_KEY!
  )
  
  const index = client.initIndex('portfolio_content')

  // Sample data - replace with your actual portfolio data
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
      featured: true
    },
    {
      objectID: '2',
      title: 'Understanding React Server Components',
      description: 'Deep dive into React Server Components and how they improve performance',
      category: 'blog',
      url: '/blog/react-server-components',
      image: '/blog/rsc.jpg',
      tags: ['React', 'Next.js', 'Performance'],
      date: '2024-02-20'
    },
    {
      objectID: '3',
      title: 'Next.js Development',
      description: 'Expert in building modern web applications with Next.js',
      category: 'skill',
      url: '/skills#nextjs',
      tags: ['Next.js', 'React', 'Full Stack'],
      featured: true
    },
    {
      objectID: '4',
      title: 'Senior Frontend Developer at TechCorp',
      description: 'Led development of enterprise web applications using React and Next.js',
      category: 'experience',
      url: '/experience#techcorp',
      date: '2023-01-01',
      tags: ['React', 'Next.js', 'Leadership']
    }
  ]

  try {
    // Configure index settings
    await index.setSettings({
      searchableAttributes: [
        'title',
        'description',
        'tags',
        'category'
      ],
      attributesForFaceting: [
        'category',
        'tags',
        'featured'
      ],
      customRanking: [
        'desc(featured)',
        'desc(date)'
      ],
      attributesToHighlight: [
        'title',
        'description'
      ],
      highlightPreTag: '<mark>',
      highlightPostTag: '</mark>'
    })

    // Index the data
    const { objectIDs } = await index.saveObjects(portfolioData)
    
    console.log(`✅ Successfully indexed ${objectIDs.length} items`)
    console.log('Indexed IDs:', objectIDs)
    
  } catch (error) {
    console.error('❌ Error indexing data:', error)
    throw error
  }
}

// Run the indexing
indexPortfolioData()
  .then(() => {
    console.log('🎉 Indexing complete!')
    process.exit(0)
  })
  .catch((error) => {
    console.error('💥 Indexing failed:', error)
    process.exit(1)
  })