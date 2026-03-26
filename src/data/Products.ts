export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  description: string;
  rating: number;
  reviewCount: number;
  images: string[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Apple iPhone 15 Pro Max',
    price: 4299,
    originalPrice: 4999,
    category: 'Electronics',
    description:
      'Apple iPhone 15 Pro Max with A17 Pro chip, titanium design, 48MP camera system, and USB-C connectivity.',
    rating: 4.8,
    reviewCount: 2341,
    images: [
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1580910051074-3eb694886571?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=600&h=600&fit=crop',
    ],
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24 Ultra',
    price: 3899,
    originalPrice: 4499,
    category: 'Electronics',
    description:
      'Samsung Galaxy S24 Ultra with Galaxy AI, built-in S Pen, 200MP camera, and titanium frame.',
    rating: 4.7,
    reviewCount: 1876,
    images: [
      'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=600&fit=crop',
    ],
  },
  {
    id: '3',
    name: 'Sony WH-1000XM5 Headphones',
    price: 1199,
    originalPrice: 1499,
    category: 'Audio',
    description:
      'Industry-leading noise cancellation with Auto NC Optimizer, crystal clear hands-free calling, and 30-hour battery life.',
    rating: 4.6,
    reviewCount: 3210,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=600&h=600&fit=crop',
    ],
  },
  {
    id: '4',
    name: 'Apple MacBook Pro 16" M3 Max',
    price: 9999,
    originalPrice: 11499,
    category: 'Laptops',
    description:
      'MacBook Pro 16-inch with M3 Max chip, up to 128GB unified memory, Liquid Retina XDR display.',
    rating: 4.9,
    reviewCount: 987,
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&h=600&fit=crop',
    ],
  },
  {
    id: '5',
    name: 'Nike Air Max 270',
    price: 449,
    originalPrice: 599,
    category: 'Fashion',
    description:
      "Nike's first lifestyle Air Max with the biggest heel Air unit yet for a super-soft ride that feels as impossible as it looks.",
    rating: 4.5,
    reviewCount: 5432,
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop',
    ],
  },
  {
    id: '6',
    name: 'Apple Watch Ultra 2',
    price: 2999,
    originalPrice: 3499,
    category: 'Wearables',
    description:
      'The most rugged Apple Watch with precision dual-frequency GPS, up to 36 hours of battery life, and the brightest display ever.',
    rating: 4.7,
    reviewCount: 1543,
    images: [
      'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1546868871-af0de0ae72be?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop',
    ],
  },
  {
    id: '7',
    name: 'iPad Pro 12.9" M2',
    price: 3799,
    originalPrice: 4299,
    category: 'Electronics',
    description:
      'iPad Pro with M2 chip, Liquid Retina XDR display, Apple Pencil hover, and superfast wireless connectivity.',
    rating: 4.8,
    reviewCount: 2105,
    images: [
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1561154464-82e9aab73a56?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=600&h=600&fit=crop',
    ],
  },
  {
    id: '8',
    name: 'Dyson V15 Detect Vacuum',
    price: 2499,
    originalPrice: 2899,
    category: 'Home',
    description:
      'Dyson V15 Detect with laser dust detection, piezo sensor, and HEPA filtration for whole-machine cleaning.',
    rating: 4.6,
    reviewCount: 876,
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1527515637462-cee1395c8c38?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&h=600&fit=crop',
    ],
  },
  {
    id: '9',
    name: 'Ray-Ban Meta Smart Glasses',
    price: 1099,
    originalPrice: 1299,
    category: 'Wearables',
    description:
      'Next-gen smart glasses with Meta AI, livestreaming, hands-free calls, and integrated speakers.',
    rating: 4.3,
    reviewCount: 654,
    images: [
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&h=600&fit=crop',
    ],
  },
  {
    id: '10',
    name: 'Bose QuietComfort Earbuds II',
    price: 899,
    originalPrice: 1099,
    category: 'Audio',
    description:
      'Personalized noise cancellation with CustomTune technology, immersive sound, and all-day comfort.',
    rating: 4.5,
    reviewCount: 2876,
    images: [
      'https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1598331668826-20cecc596b86?w=600&h=600&fit=crop',
    ],
  },
  {
    id: '11',
    name: 'Samsung 65" Neo QLED 4K TV',
    price: 5499,
    originalPrice: 6999,
    category: 'Electronics',
    description:
      'Samsung Neo QLED with Quantum Matrix Technology, Neural Quantum Processor 4K, and Anti-Reflection screen.',
    rating: 4.7,
    reviewCount: 432,
    images: [
      'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1461151304267-38535e780c79?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=600&h=600&fit=crop',
    ],
  },
  {
    id: '12',
    name: 'Adidas Ultraboost Light',
    price: 599,
    originalPrice: 749,
    category: 'Fashion',
    description:
      'Ultraboost Light with LIGHT BOOST midsole — the lightest Ultraboost ever made, for effortless energy return.',
    rating: 4.4,
    reviewCount: 3654,
    images: [
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&h=600&fit=crop',
    ],
  },
];
