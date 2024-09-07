// product.ts
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category?: string;
  wikiLink?: string; // Add wikiLink property
}

  
  const products: Product[] = [
    {
      id: 1,
      name: 'Product 1 (Painting)',
      description: '...',
      price: 19.99,
      imageUrl: '/assets/art1.jpg',
      category: 'Painting',
      wikiLink: 'https://en.wikipedia.org/wiki/Art'
    },
    {
      id: 2,
      name: 'Product 2 (Sculpture)',
      description: '...',
      price: 99.99,
      imageUrl: '/assets/sculpture1.jpeg',
      category: 'Sculpture',
      wikiLink:'https://en.wikipedia.org/wiki/Sculpture'
    },
    // ... add more products with categories
    {
      id: 3,
      name: 'Product 3 (Drawing)',
      description: '...',
      price: 75.89,
      imageUrl: '/assets/drawing1.jpg',
      category: 'Drawing',
      wikiLink:'https://en.wikipedia.org/wiki/Drawing'
    },
    {
      id: 4,
      name: 'Product 4 (Painting)',
      description: '...',
      price: 49.99,
      imageUrl: '/assets/art2.jpg',
      category: 'Painting',
      wikiLink:'https://en.wikipedia.org/wiki/Fine_art'
    },
    {
      id: 5,
      name: 'Product 5 (Sculpture)',
      description: '...',
      price: 159.99,
      imageUrl: '/assets/sculpture2.jpeg',
      category: 'Sculpture',
      wikiLink:'https://en.wikipedia.org/wiki/Stone_sculpture'
    },
    {
      id: 6,
      name: 'Product 6 (Drawing)',
      description: '...',
      price: 49.99,
      imageUrl: '/assets/drawing2.jpeg',
      category: 'Drawing',
      wikiLink:'https://en.wikipedia.org/wiki/Pencil_drawing'
    },
    // ... other products with categories
  ];
  