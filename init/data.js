const sampleListings = [
  // =====================================================
  // BEACH
  // =====================================================

  {
    title: "Cozy Beachfront Cottage",
    description:
      "Wake up to the sound of waves in this cozy beachfront cottage in Malibu. Enjoy beautiful ocean views, a peaceful outdoor space, and direct access to the beach. Perfect for couples and small families looking for a relaxing coastal escape.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    category: "beach",
    location: "Malibu",
    country: "United States",
  },

  {
    title: "Beachfront Paradise",
    description:
      "Step directly onto the sandy beach from this bright and comfortable coastal home in Cancun. Spend your mornings by the ocean, relax on the terrace, and enjoy spectacular sunsets just outside your door.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    category: "beach",
    location: "Cancun",
    country: "Mexico",
  },

  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Escape to a peaceful beachfront bungalow surrounded by tropical greenery in Bali. Enjoy your own private pool, easy beach access, and a relaxed island atmosphere that makes it easy to slow down and recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    category: "beach",
    location: "Bali",
    country: "Indonesia",
  },

  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy crystal-clear Mediterranean waters from this elegant beachfront villa in Mykonos. Spend the day by the sea, relax in the outdoor spaces, and experience the charm of Greek island living.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    category: "beach",
    location: "Mykonos",
    country: "Greece",
  },

  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Find your own quiet corner of the Pacific coast in this secluded beach house in Costa Rica. Surf, explore nearby nature, or simply relax with the ocean breeze and beautiful tropical surroundings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    category: "beach",
    location: "Costa Rica",
    country: "Costa Rica",
  },

  // =====================================================
  // MOUNTAINS
  // =====================================================

  {
    title: "Mountain Retreat",
    description:
      "Unplug and reconnect with nature at this peaceful mountain retreat in Aspen. Surrounded by scenic landscapes, the home offers a quiet escape while keeping you close to hiking trails and outdoor adventures.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    category: "mountains",
    location: "Aspen",
    country: "United States",
  },

  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Stay just steps from the slopes in this charming ski-in/ski-out chalet in Verbier. After a day of skiing, return home to warm interiors and spectacular Alpine scenery.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    category: "mountains",
    location: "Verbier",
    country: "Switzerland",
  },

  {
    title: "Mountain View Cabin in Banff",
    description:
      "Wake up to breathtaking views of the Canadian Rockies from this cozy cabin in Banff. Spend your days exploring nearby trails and your evenings relaxing in the peaceful mountain surroundings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    category: "mountains",
    location: "Banff",
    country: "Canada",
  },

  {
    title: "Ski Chalet in Aspen",
    description:
      "Experience a comfortable mountain getaway in this stylish ski chalet in Aspen. With easy access to the resort and beautiful alpine scenery, it is an ideal base for a winter adventure.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    category: "mountains",
    location: "Aspen",
    country: "United States",
  },

  // =====================================================
  // VILLAS
  // =====================================================

  {
    title: "Historic Villa in Tuscany",
    description:
      "Stay in a beautifully restored Tuscan villa surrounded by rolling hills and countryside. Enjoy classic architecture, peaceful outdoor spaces, and easy access to charming towns and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    category: "villas",
    location: "Florence",
    country: "Italy",
  },

  {
    title: "Tropical Villa in Phuket",
    description:
      "Enjoy a private tropical escape in this beautiful Phuket villa. Relax beside the infinity pool, explore nearby beaches, and experience the best of Thailand from your own peaceful retreat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    category: "villas",
    location: "Phuket",
    country: "Thailand",
  },

  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy crystal-clear Mediterranean waters from this elegant beachfront villa in Mykonos. Spend the day by the sea, relax in the outdoor spaces, and experience the charm of Greek island living.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    category: "villas",
    location: "Mykonos",
    country: "Greece",
  },

  // =====================================================
  // CABINS
  // =====================================================

  {
    title: "Rustic Cabin by the Lake",
    description:
      "Slow down beside the water in this rustic lakeside cabin. Spend your days fishing, kayaking, hiking, or simply enjoying peaceful mornings surrounded by nature.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    category: "cabins",
    location: "Lake Tahoe",
    country: "United States",
  },

  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Escape the noise of everyday life in this warm and comfortable log cabin surrounded by Montana's natural beauty. A peaceful choice for travelers who want fresh air, open landscapes, and a slower pace.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    category: "cabins",
    location: "Montana",
    country: "United States",
  },

  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend a peaceful getaway beside the lake in this cozy New Hampshire cabin. Enjoy scenic views, quiet mornings, and easy access to the natural beauty of the White Mountains.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    category: "cabins",
    location: "New Hampshire",
    country: "United States",
  },

  // =====================================================
  // CITY
  // =====================================================

  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of New York City in this stylish downtown loft. Enjoy a comfortable urban base close to restaurants, shopping, entertainment, and some of the city's most popular attractions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    category: "city",
    location: "New York City",
    country: "United States",
  },

  {
    title: "Historic Canal House",
    description:
      "Experience Amsterdam from this charming historic canal house. Enjoy the character of traditional architecture while staying within easy reach of cafés, museums, markets, and the city's famous canals.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    category: "city",
    location: "Amsterdam",
    country: "Netherlands",
  },

  {
    title: "Historic Brownstone in Boston",
    description:
      "Step into classic Boston charm with a stay in this elegant historic brownstone. Enjoy a character-filled home in a convenient city location close to restaurants, shops, and local attractions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    category: "city",
    location: "Boston",
    country: "United States",
  },

  {
    title: "Art Deco Apartment in Miami",
    description:
      "Stay in a stylish Art Deco apartment inspired by Miami's iconic architecture. Explore South Beach, enjoy the local food scene, and return to a comfortable home after a day in the city.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    category: "city",
    location: "Miami",
    country: "United States",
  },

  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore Tokyo from this modern and centrally located apartment. Enjoy easy access to the city's neighborhoods, restaurants, shopping districts, and vibrant nightlife.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    category: "city",
    location: "Tokyo",
    country: "Japan",
  },

  // =====================================================
  // LUXURY
  // =====================================================

  {
    title: "Luxury Penthouse with City Views",
    description:
      "Enjoy elevated city living in this luxurious penthouse with sweeping views of Los Angeles. Relax in stylish interiors and experience the city from a comfortable and sophisticated home.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    category: "luxury",
    location: "Los Angeles",
    country: "United States",
  },

  {
    title: "Private Island Retreat",
    description:
      "Enjoy an unforgettable escape with the privacy of your own island retreat in Fiji. Surrounded by turquoise waters and tropical landscapes, this is a place to disconnect and enjoy complete tranquility.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?auto=format&fit=crop&w=800&q=60",
    },
    price: 10000,
    category: "luxury",
    location: "Fiji",
    country: "Fiji",
  },

  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience a luxurious escape in the heart of the Dubai desert. Relax beside your private pool, enjoy stylish interiors, and experience the contrast between modern comfort and peaceful desert landscapes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    category: "luxury",
    location: "Dubai",
    country: "United Arab Emirates",
  },

  {
    title: "Luxury Villa in the Maldives",
    description:
      "Wake up above the Indian Ocean in this stunning overwater villa in the Maldives. Enjoy uninterrupted views, peaceful surroundings, and the kind of tropical escape made for special occasions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    category: "luxury",
    location: "Maldives",
    country: "Maldives",
  },

  // =====================================================
  // UNIQUE STAYS
  // =====================================================

  {
    title: "Secluded Treehouse Getaway",
    description:
      "Spend a memorable night among the treetops in this secluded treehouse retreat. Surrounded by greenery, it offers a peaceful escape for travelers looking for something different from a traditional stay.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    category: "unique",
    location: "Portland",
    country: "United States",
  },

  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Experience the quiet charm of the English countryside in this cozy Cotswolds cottage. Enjoy the traditional character of the home and explore picturesque villages, walking trails, and local countryside.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    category: "unique",
    location: "Cotswolds",
    country: "United Kingdom",
  },

  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty during your stay in this historic Scottish castle. Discover the dramatic landscapes of the Highlands while enjoying a unique property filled with character and history.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    category: "unique",
    location: "Scottish Highlands",
    country: "United Kingdom",
  },

  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Reconnect with nature in this eco-friendly treehouse hidden among the forests of Costa Rica. Enjoy a peaceful atmosphere, beautiful surroundings, and a stay designed for travelers who love the outdoors.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?auto=format&fit=crop&w=800&q=60",
    },
    price: 750,
    category: "unique",
    location: "Costa Rica",
    country: "Costa Rica",
  },

  {
    title: "Historic Cottage in Charleston",
    description:
      "Stay in a beautifully restored cottage in historic Charleston. Enjoy classic architecture, a private garden, and easy access to the city's charming streets, restaurants, and cultural attractions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    category: "unique",
    location: "Charleston",
    country: "United States",
  },

  // =====================================================
  // EXPERIENCES
  // =====================================================

  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the wild from a comfortable safari lodge near the Serengeti. Wake up surrounded by nature, discover incredible wildlife, and enjoy unforgettable evenings beneath the African sky.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    category: "experiences",
    location: "Serengeti National Park",
    country: "Tanzania",
  },
];

module.exports = { data: sampleListings };