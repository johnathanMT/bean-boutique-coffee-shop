// Subscription tiers + limited bundles, ported from the original offers.html.
export const plans = [
  {
    id: 'daily-grind',
    name: 'The Daily Grind',
    price: 18,
    blurb: 'Perfect for the casual drinker.',
    featured: false,
    features: [
      '1 Bag (12oz) Monthly',
      'House Blends',
      '5% Shop Discount',
      'Free Shipping',
    ],
  },
  {
    id: 'connoisseur',
    name: 'The Connoisseur',
    price: 32,
    blurb: 'Explore the world of flavor.',
    featured: true,
    features: [
      '2 Bags (12oz) Monthly',
      'Single Origin Selection',
      '10% Shop Discount',
      'Exclusive Tasting Notes',
      'Free Shipping',
    ],
  },
  {
    id: 'barista',
    name: 'The Barista',
    price: 55,
    blurb: 'For the serious brewer.',
    featured: false,
    features: [
      '3 Bags (12oz) Monthly',
      'Rare & Limited Editions',
      '15% Shop Discount',
      'Early Access to Gear',
      'Free Shipping',
    ],
  },
]

export const bundles = [
  {
    id: 'starter-kit',
    name: 'The Starter Kit',
    image: 'images/french_press.jpg',
    info: 'French Press + 1 Bag of House Blend + Ceramic Mug',
    oldPrice: 65.0,
    price: 49.99,
  },
  {
    id: 'pro-barista',
    name: 'Pro Barista Set',
    image: 'images/espresso_machine.jpg',
    info: 'Espresso Machine + Electric Grinder + 2 Bags Espresso Roast',
    oldPrice: 600.0,
    price: 520.0,
  },
]
