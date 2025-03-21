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
    image: "/images/gallery/the-stunning-landscapes-in-kashmir-captures-the-serene-beauty-generative-ai-free-photo.jpg",
    duration: "15 Days 14 Nights",
    locations: ["Srinagar", "Anantnag", "Ganderbal", "Pahalgam"],
    price: "₹3,999",
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
      "Special welcome & farewell dinners"
    ],
    accommodation: [
      {
        location: "Srinagar",
        nights: "7 Nights",
        resort: "Sukoon Houseboat & MAQAM Resort"
      },
      {
        location: "Pahalgam",
        nights: "3 Nights",
        resort: "Pine Valley Resort"
      },
      {
        location: "Anantnag",
        nights: "2 Nights",
        resort: "Heritage Mountain Lodge"
      },
      {
        location: "Ganderbal",
        nights: "2 Nights",
        resort: "Forest Retreat"
      }
    ],
    description: "An intensive 15-day spiritual journey through the most sacred locations in Kashmir, guided by globally renowned mystical scholar Andrew Harvey. This transformative experience combines daily meditation practices, visits to ancient power sites, spiritual teachings, and immersion in the breathtaking natural beauty of the Himalayas.",
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & Welcome Ceremony",
        activities: [
          "Welcome at Srinagar Airport",
          "Transfer to luxurious houseboat",
          "Evening blessing ceremony"
        ]
      },
      {
        day: "Days 2-5",
        title: "Srinagar Sacred Sites",
        activities: [
          "Meditation at Shankaracharya Temple",
          "Visit to sacred shrines",
          "Evening teachings with Andrew Harvey",
          "Shikara meditation on Dal Lake"
        ]
      },
      {
        day: "Days 6-8",
        title: "Pahalgam Valley Retreat",
        activities: [
          "Transfer to mountain valley",
          "Forest meditation practices",
          "River purification ceremony",
          "Silent retreat day"
        ]
      },
      {
        day: "Days 9-10",
        title: "Anantnag Sacred Springs",
        activities: [
          "Visit to sacred water sources",
          "Ancient temple meditation",
          "Meeting with local spiritual elders",
          "Traditional Sufi music night"
        ]
      },
      {
        day: "Days 11-12",
        title: "Ganderbal Mountain Practices",
        activities: [
          "Trek to Samkaropala (Shiva Sutra Rock)",
          "Mountain meditation practices",
          "Teaching on Kashmir Shaivism",
          "Sunset fire ceremony"
        ]
      },
      {
        day: "Days 13-15",
        title: "Integration & Return to Srinagar",
        activities: [
          "Final integration practices",
          "Art exhibition visit",
          "Farewell celebration dinner",
          "Transfer to airport for departure"
        ]
      }
    ],
    category: ["spiritual", "meditation", "culture"],
    featured: true,
    rating: 4.9,
    reviewCount: 58
  },
  {
    id: "silent-meditation-retreat",
    title: "Silent Meditation Retreat",
    subtitle: "Inner Journey of Transformation",
    image: "/images/gallery/photo-1566837486475-98933a0ecdbf.jpg",
    duration: "10 Days 9 Nights",
    locations: ["Srinagar", "Pahalgam", "Sonamarg"],
    price: "₹2,599",
    highlights: [
      "Silent Meditation by Dal Lake",
      "Sacred Temple Circuit",
      "Healing energy workshops",
      "Daily yoga and mindfulness practices",
      "One-on-one spiritual guidance"
    ],
    inclusions: [
      "9 Nights at Meditation-focused Resorts",
      "Vegetarian meals with Ayurvedic options",
      "Daily guided meditation sessions",
      "Sacred site entrance fees",
      "Meditation cushions and materials",
      "Journal and spiritual reading materials",
      "Transfer from/to Srinagar Airport"
    ],
    accommodation: [
      {
        location: "Srinagar",
        nights: "5 Nights",
        resort: "Sukoon Houseboat & Meditation Center"
      },
      {
        location: "Pahalgam",
        nights: "3 Nights",
        resort: "Silent Valley Retreat"
      },
      {
        location: "Sonamarg",
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
    image: "/images/gallery/photo-1583249598754-110018cb6851.jpg",
    duration: "7 Days 6 Nights",
    locations: ["Srinagar", "Ganderbal"],
    price: "₹1,899",
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
        title: "Culinary & Music Traditions",
        activities: [
          "Kashmiri cooking class",
          "Traditional Wazwan feast",
          "Sufi music night"
        ]
      },
      {
        day: "Days 6-7",
        title: "Market Experience & Departure",
        activities: [
          "Old city market visit",
          "Souvenir shopping with expert guide",
          "Farewell dinner and departure"
        ]
      }
    ],
    category: ["culture", "arts", "culinary"],
    featured: false,
    rating: 4.7,
    reviewCount: 29
  },
  {
    id: "kashmir-wellness-journey",
    title: "Kashmir Wellness Journey",
    subtitle: "Ayurveda & Himalayan Healing",
    image: "/images/gallery/photo-1574862393418-8cb3ddc0004c.jpg",
    duration: "8 Days 7 Nights",
    locations: ["Srinagar", "Pahalgam"],
    price: "₹2,199",
    highlights: [
      "Personalized Ayurvedic consultations",
      "Traditional healing treatments",
      "Daily yoga and pranayama",
      "Medicinal herb walks",
      "Balance-focused meditation"
    ],
    inclusions: [
      "7 Nights at Wellness-focused Resorts",
      "Ayurvedic meals (3 times daily)",
      "Daily yoga and meditation sessions",
      "Two personalized Ayurvedic treatments",
      "Consultation with Ayurvedic doctor",
      "Herbal tea sessions",
      "Wellness welcome kit"
    ],
    accommodation: [
      {
        location: "Srinagar",
        nights: "4 Nights",
        resort: "Wellness Houseboat"
      },
      {
        location: "Pahalgam",
        nights: "3 Nights",
        resort: "Himalayan Healing Center"
      }
    ],
    description: "Rejuvenate your body, mind, and spirit with this 8-day wellness journey combining traditional Ayurvedic practices with the natural healing energies of the Himalayas. This carefully designed program includes personalized wellness consultations, traditional treatments, daily yoga, and meditation in stunning natural settings.",
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & Wellness Assessment",
        activities: [
          "Welcome and orientation",
          "Ayurvedic constitution assessment",
          "Gentle evening yoga session"
        ]
      },
      {
        day: "Days 2-4",
        title: "Srinagar Wellness Immersion",
        activities: [
          "Daily morning yoga by the lake",
          "Personalized Ayurvedic treatments",
          "Evening meditation sessions"
        ]
      },
      {
        day: "Days 5-7",
        title: "Mountain Healing in Pahalgam",
        activities: [
          "Forest bathing practices",
          "Himalayan herb walk",
          "River meditation",
          "Sound healing session"
        ]
      },
      {
        day: "Day 8",
        title: "Integration & Departure",
        activities: [
          "Final wellness session",
          "Personalized wellness plan to take home",
          "Departure with wellness gift pack"
        ]
      }
    ],
    category: ["wellness", "yoga", "healing"],
    featured: false,
    rating: 4.9,
    reviewCount: 42
  },
  {
    id: "kashmir-nature-immersion",
    title: "Kashmir Nature Immersion",
    subtitle: "Himalayan Wilderness Experience",
    image: "/images/gallery/photo-1527786356703-4b100091cd2c.jpg",
    duration: "8 Days 7 Nights",
    locations: ["Srinagar", "Sonamarg", "Pahalgam"],
    price: "₹2,499",
    highlights: [
      "Himalayan forest meditation walks",
      "Alpine meadow experiences",
      "Riverside meditation practice",
      "Mountain sunrise ceremonies",
      "Nature photography opportunities"
    ],
    inclusions: [
      "7 Nights at Eco-Friendly Resorts",
      "All meals (often in outdoor settings)",
      "Guided nature walks",
      "Forest meditation sessions",
      "Wildlife spotting excursions",
      "Outdoor yoga sessions",
      "Nature journal and field guides"
    ],
    accommodation: [
      {
        location: "Srinagar",
        nights: "2 Nights",
        resort: "Lakeside Eco Lodge"
      },
      {
        location: "Sonamarg",
        nights: "3 Nights",
        resort: "Mountain Wilderness Camp"
      },
      {
        location: "Pahalgam",
        nights: "2 Nights",
        resort: "Riverside Retreat"
      }
    ],
    description: "Experience the profound spiritual beauty of Kashmir's wilderness with this 8-day nature immersion journey. Connect deeply with the Himalayan landscape through forest walks, riverside meditations, mountain ceremonies, and mindful wilderness experiences, all while staying in eco-friendly accommodations integrated with the natural environment.",
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
    image: "/images/gallery/the-stunning-landscapes-in-kashmir-captures-the-serene-beauty-generative-ai-free-photo.jpg",
    duration: "9 Days 8 Nights",
    locations: ["Srinagar", "Anantnag", "Bijbehara"],
    price: "₹2,399",
    highlights: [
      "Visit to significant Sufi shrines",
      "Exclusive Sufi Music Night",
      "Meeting with Sufi practitioners",
      "Whirling meditation workshop",
      "Sacred poetry discussions"
    ],
    inclusions: [
      "8 Nights at Heritage Accommodations",
      "All meals including special Sufi feasts",
      "Shrine entrance and offering fees",
      "Private Sufi music performance",
      "Whirling meditation workshop",
      "Sacred poetry anthology",
      "Transportation to all shrines"
    ],
    accommodation: [
      {
        location: "Srinagar",
        nights: "4 Nights",
        resort: "Heritage Houseboat"
      },
      {
        location: "Anantnag",
        nights: "2 Nights",
        resort: "Sufi Retreat Center"
      },
      {
        location: "Bijbehara",
        nights: "2 Nights",
        resort: "Historical Heritage Home"
      }
    ],
    description: "Journey into the heart of Sufi mysticism in Kashmir with this 9-day pilgrimage to the region's most sacred Sufi shrines and centers. Experience the living traditions of Sufism through music, poetry, meditation practices, and meetings with contemporary practitioners, while exploring the rich spiritual heritage that has shaped Kashmir's unique cultural identity.",
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & Orientation",
        activities: [
          "Welcome ceremony",
          "Introduction to Sufism in Kashmir",
          "Evening Sufi poetry reading"
        ]
      },
      {
        day: "Days 2-4",
        title: "Srinagar Shrines",
        activities: [
          "Visit to Khanqah-e-Moula shrine",
          "Dastageer Sahib shrine meditation",
          "Meeting with Sufi musicians",
          "Whirling meditation workshop"
        ]
      },
      {
        day: "Days 5-6",
        title: "Anantnag Sacred Sites",
        activities: [
          "Visit to Reshi shrines",
          "Meetings with local Sufi practitioners",
          "Evening zikr ceremony",
          "Sacred poetry discussion"
        ]
      },
      {
        day: "Days 7-9",
        title: "Bijbehara & Departure",
        activities: [
          "Visit to ancient Sufi center",
          "Final integration practices",
          "Farewell Sufi music night",
          "Return to Srinagar for departure"
        ]
      }
    ],
    category: ["spiritual", "culture", "heritage"],
    featured: false,
    rating: 4.7,
    reviewCount: 35
  }
];

export const packageCategories = [
  { value: "meditation", label: "Meditation" },
  { value: "spiritual", label: "Spiritual" },
  { value: "yoga", label: "Yoga" },
  { value: "retreat", label: "Retreat" },
  { value: "adventure", label: "Adventure" },
  { value: "culture", label: "Culture" },
  { value: "nature", label: "Nature" },
  { value: "heritage", label: "Heritage" }
];
