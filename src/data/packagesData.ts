export interface Package {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  duration: string;
  locations: string[];
  price: string;
  highlights: string[];
  inclusions: string[];
  accommodation: {
    location: string;
    nights: string;
    resort: string;
  }[];
  description: string;
  itinerary: {
    day: string;
    title: string;
    activities: string[];
  }[];
  category: string[];
  featured: boolean;
  rating: number;
  reviewCount: number;
}

export const packages: Package[] = [
  {
    id: "sacred-kashmir-complete",
    title: "Sacred Kashmir",
    subtitle: "Complete Spiritual Journey",
    image: "https://static.vecteezy.com/system/resources/previews/032/190/016/non_2x/the-stunning-landscapes-in-kashmir-captures-the-serene-beauty-generative-ai-free-photo.jpg",
    duration: "15 Days 14 Nights",
    locations: ["Srinagar", "Anantnag", "Ganderbal", "Pahalgam"],
    price: "$3,999",
    highlights: [
      "Guided by renowned spiritual teacher Andrew Harvey",
      "Visit to sacred Samkaropala (Shiva Sutra Rock)",
      "Meditation sessions and spiritual healing",
      "Traditional Sufi Music Night",
      "Exclusive Kashmiri Art Exhibition"
    ],
    inclusions: [
      "14 Nights at Designated Cultural Resorts",
      "All meals (Breakfast, Lunch & Dinner)",
      "English Speaking Tour Guide",
      "Shikara Ride in Dal Lake",
      "Transfers & Sightseeing",
      "Pilgrim visits to Temples, Ashram & Shrines",
      "Sufi Music Night",
      "Arts & Handicrafts Exhibition",
      "Spiritual Healer sessions",
      "Meditation & Satsang"
    ],
    accommodation: [
      {
        location: "Srinagar",
        nights: "12 Nights",
        resort: "MAQAM"
      },
      {
        location: "Pahalgam",
        nights: "1 Night",
        resort: "SOJOURN COTTAGES"
      },
      {
        location: "Lidwas Meadow",
        nights: "1 Night",
        resort: "Base Camp"
      }
    ],
    description: "Our flagship tour guided by renowned spiritual teacher Andrew Harvey. This complete 15-day spiritual journey takes you through the mystical landscapes of Kashmir, offering profound experiences of self-discovery, healing, and spiritual awakening. Each day is thoughtfully designed to immerse you in Kashmiri culture, spirituality, and natural beauty.",
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival",
        activities: [
          "Transfer from Airport to Resort in Srinagar",
          "Traditional welcome with Herbal Tea & Kashmiri Breads",
          "Pilgrim Induction and introductions"
        ]
      },
      {
        day: "Days 2-3",
        title: "Sacred Pilgrimage to Samkaropala",
        activities: [
          "Trek to the sacred Shiva Sutra Rock",
          "Overnight camping at Lidwas Meadow",
          "Meditation and Satsang at Samkaropala"
        ]
      },
      {
        day: "Days 4-14",
        title: "Spiritual Immersion",
        activities: [
          "Visit to temples, shrines, and sacred sites",
          "Healing sessions and meditation practices",
          "Cultural experiences including Sufi Music Night",
          "Traditional Wazwan feast on final evening"
        ]
      },
      {
        day: "Day 15",
        title: "Farewell",
        activities: [
          "Final contemplation session",
          "Farewell lunch",
          "Transfer to Airport"
        ]
      }
    ],
    category: ["spiritual", "cultural", "adventure"],
    featured: true,
    rating: 4.9,
    reviewCount: 48
  },
  {
    id: "kashmir-spiritual-essence",
    title: "Kashmir Spiritual Essence",
    subtitle: "Sacred Sites & Meditation",
    image: "https://images.unsplash.com/photo-1566837486475-98933a0ecdbf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    duration: "10 Days 9 Nights",
    locations: ["Srinagar", "Anantnag"],
    price: "$2,599",
    highlights: [
      "Daily meditation sessions with expert guides",
      "Visit to Shankaracharya Temple",
      "Kheer Bhawani Temple experience",
      "Spiritual healing workshops",
      "Shikara meditation ride on Dal Lake"
    ],
    inclusions: [
      "9 Nights at Premium Spiritual Retreats",
      "All meals with vegetarian options",
      "Daily meditation and yoga sessions",
      "Temple and shrine visits",
      "Airport transfers",
      "Local transportation",
      "Spiritual guide and interpreter"
    ],
    accommodation: [
      {
        location: "Srinagar",
        nights: "8 Nights",
        resort: "MAQAM"
      },
      {
        location: "Anantnag",
        nights: "1 Night",
        resort: "Heritage Retreat"
      }
    ],
    description: "This focused 10-day journey centers on the spiritual essence of Kashmir, with an emphasis on meditation, temple visits, and inner healing. Perfect for those seeking a transformative spiritual experience in the sacred landscapes of Kashmir, with daily meditation practices and visits to powerful energy centers.",
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & Orientation",
        activities: [
          "Welcome ceremony at resort",
          "Introduction to Kashmiri spirituality",
          "Evening meditation by the lake"
        ]
      },
      {
        day: "Days 2-4",
        title: "Sacred Temple Circuit",
        activities: [
          "Visit Shankaracharya Temple",
          "Meditation at Kheer Bhawani",
          "Spiritual healing workshop"
        ]
      },
      {
        day: "Days 5-7",
        title: "Meditation Immersion",
        activities: [
          "Daily sunrise and sunset meditation",
          "Shikara meditation ride on Dal Lake",
          "Satsang with local spiritual teachers"
        ]
      },
      {
        day: "Days 8-10",
        title: "Integration & Departure",
        activities: [
          "Integration practices",
          "Final blessing ceremony",
          "Return journey"
        ]
      }
    ],
    category: ["spiritual", "meditation", "wellness"],
    featured: true,
    rating: 4.8,
    reviewCount: 36
  },
  {
    id: "kashmir-cultural-heritage",
    title: "Kashmir Cultural Heritage",
    subtitle: "Arts, Crafts & Traditions",
    image: "https://images.unsplash.com/photo-1583249598754-110018cb6851?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    duration: "7 Days 6 Nights",
    locations: ["Srinagar", "Ganderbal"],
    price: "$1,899",
    highlights: [
      "Artisan workshops and demonstrations",
      "Traditional Kashmiri cuisine experiences",
      "Sufi Music Night",
      "Visit to local craft villages",
      "Shopping at authentic artisan markets"
    ],
    inclusions: [
      "6 Nights at Heritage Accommodations",
      "All meals featuring traditional Kashmiri cuisine",
      "Artisan workshops",
      "Cultural performances",
      "Local market visits with guide",
      "Craft village excursions",
      "Traditional Wazwan feast"
    ],
    accommodation: [
      {
        location: "Srinagar",
        nights: "6 Nights",
        resort: "Heritage Houseboat & MAQAM"
      }
    ],
    description: "Immerse yourself in the rich cultural heritage of Kashmir with this 7-day journey focusing on traditional arts, crafts, and cultural experiences. Meet master artisans, learn about ancient craft techniques, enjoy authentic cuisine, and experience the living cultural traditions of this beautiful region.",
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & Cultural Welcome",
        activities: [
          "Traditional Kashmiri welcome ceremony",
          "Introduction to local crafts",
          "Evening cultural performance"
        ]
      },
      {
        day: "Days 2-3",
        title: "Artisan Immersion",
        activities: [
          "Visit to handicraft workshops",
          "Pashmina weaving demonstration",
          "Paper mache art lesson"
        ]
      },
      {
        day: "Days 4-5",
        title: "Culinary & Musical Traditions",
        activities: [
          "Kashmiri cooking class",
          "Sufi Music Night",
          "Visit to local spice markets"
        ]
      },
      {
        day: "Days 6-7",
        title: "Cultural Integration & Departure",
        activities: [
          "Shopping at authentic markets",
          "Traditional Wazwan feast",
          "Departure with cultural souvenirs"
        ]
      }
    ],
    category: ["cultural", "arts", "culinary"],
    featured: false,
    rating: 4.7,
    reviewCount: 29
  },
  {
    id: "kashmir-nature-expedition",
    title: "Kashmir Nature Expedition",
    subtitle: "Mountains, Lakes & Valleys",
    image: "https://images.unsplash.com/photo-1527786356703-4b100091cd2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    duration: "8 Days 7 Nights",
    locations: ["Srinagar", "Pahalgam", "Sonamarg"],
    price: "$2,199",
    highlights: [
      "Trekking in the Himalayan foothills",
      "Sunrise at Sonamarg mountains",
      "Shikara ride on Dal Lake",
      "Forest meditation experiences",
      "Alpine meadow picnics"
    ],
    inclusions: [
      "7 Nights at Nature Retreats",
      "All meals including packed lunches for treks",
      "Professional trekking guides",
      "All transportation",
      "Nature meditation sessions",
      "Wildlife spotting excursions",
      "Photography guidance"
    ],
    accommodation: [
      {
        location: "Srinagar",
        nights: "3 Nights",
        resort: "MAQAM"
      },
      {
        location: "Pahalgam",
        nights: "2 Nights",
        resort: "SOJOURN COTTAGES"
      },
      {
        location: "Sonamarg",
        nights: "2 Nights",
        resort: "Mountain Lodge"
      }
    ],
    description: "Connect with the breathtaking natural beauty of Kashmir through this 8-day nature expedition. Trek through beautiful valleys, meditate by pristine lakes, witness stunning sunrises over snow-capped peaks, and immerse yourself in the healing power of Kashmir's legendary landscapes.",
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & Nature Orientation",
        activities: [
          "Welcome at Srinagar resort",
          "Introduction to Kashmir's ecology",
          "Evening walk along Dal Lake"
        ]
      },
      {
        day: "Days 2-3",
        title: "Dal Lake & Forest Immersion",
        activities: [
          "Shikara ride with birdwatching",
          "Forest meditation walk",
          "Sunset at Pari Mahal gardens"
        ]
      },
      {
        day: "Days 4-6",
        title: "Mountain Exploration",
        activities: [
          "Trek to alpine meadows",
          "Sonamarg mountain sunrise",
          "Riverside meditation in Pahalgam"
        ]
      },
      {
        day: "Days 7-8",
        title: "Nature Integration & Departure",
        activities: [
          "Final nature communion experience",
          "Farewell ceremony in garden setting",
          "Departure with nature photography collection"
        ]
      }
    ],
    category: ["nature", "adventure", "wellness"],
    featured: true,
    rating: 4.8,
    reviewCount: 42
  },
  {
    id: "sufi-mystical-journey",
    title: "Sufi Mystical Journey",
    subtitle: "Following the Path of Saints",
    image: "https://static.vecteezy.com/system/resources/previews/032/189/944/non_2x/the-stunning-landscapes-in-kashmir-captures-the-serene-beauty-generative-ai-free-photo.jpg",
    duration: "9 Days 8 Nights",
    locations: ["Srinagar", "Anantnag", "Bijbehara"],
    price: "$2,399",
    highlights: [
      "Visit to significant Sufi shrines",
      "Exclusive Sufi Music Night",
      "Meeting with Sufi practitioners",
      "Whirling meditation workshop",
      "Study of Lalleshwari's poetry"
    ],
    inclusions: [
      "8 Nights at Spiritual Accommodations",
      "All meals with traditional Sufi influences",
      "Specialized Sufi guide",
      "All shrine entrance fees",
      "Private Sufi music performances",
      "Poetry and spiritual text study materials",
      "Transportation to remote shrines"
    ],
    accommodation: [
      {
        location: "Srinagar",
        nights: "6 Nights",
        resort: "MAQAM"
      },
      {
        location: "Anantnag",
        nights: "2 Nights",
        resort: "Sufi Retreat"
      }
    ],
    description: "Follow the mystical path of Sufism in Kashmir with this specialized 9-day journey. Visit important Sufi shrines, study the poetic wisdom of saints like Lalleshwari, experience the transcendent power of Sufi music, and learn about the unique blend of Sufi traditions that flourished in Kashmir's sacred valleys.",
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & Sufi Introduction",
        activities: [
          "Welcome at Srinagar resort",
          "Introduction to Kashmir's Sufi heritage",
          "Evening Sufi poetry reading"
        ]
      },
      {
        day: "Days 2-4",
        title: "Srinagar Sufi Circuit",
        activities: [
          "Visit to major Sufi shrines in Srinagar",
          "Meeting with Sufi practitioners",
          "Evening zikr ceremony"
        ]
      },
      {
        day: "Days 5-7",
        title: "Anantnag & Bijbehara Pilgrimage",
        activities: [
          "Visit Lalleshwari's grave at Bijbehara",
          "Sufi Music Night experience",
          "Whirling meditation workshop"
        ]
      },
      {
        day: "Days 8-9",
        title: "Mystical Integration & Departure",
        activities: [
          "Final Sufi wisdom teachings",
          "Personal reflection ceremony",
          "Departure with Sufi poetry collection"
        ]
      }
    ],
    category: ["spiritual", "cultural", "musical"],
    featured: false,
    rating: 4.9,
    reviewCount: 24
  }
];

export const packageCategories = [
  { value: "spiritual", label: "Spiritual" },
  { value: "cultural", label: "Cultural" },
  { value: "adventure", label: "Adventure" },
  { value: "meditation", label: "Meditation" },
  { value: "wellness", label: "Wellness" },
  { value: "nature", label: "Nature" },
  { value: "arts", label: "Arts & Crafts" },
  { value: "culinary", label: "Culinary" },
  { value: "musical", label: "Musical" }
];
