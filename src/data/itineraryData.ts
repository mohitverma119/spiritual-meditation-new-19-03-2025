export interface DayActivity {
  day: string;
  title: string;
  activities: string[];
  highlights?: string[];
  description?: string;
}

export interface ItineraryData {
  name: string;
  tour: string;
  duration: string;
  destinations: string[];
  transportation: string[];
  groupSize: string;
  expectedDate: string;
  inclusions: string[];
  accommodations: {
    location: string;
    nights: string;
    resort: string;
  }[];
  days: DayActivity[];
  policies: string[];
  paymentDetails: {
    accountTitle: string;
    accountNumber: string;
    ifscCode: string;
    branch: string;
    upiId: string;
  };
  contact: {
    phone: string[];
    address: string;
    website: string;
  };
}

export const sacredKashmir: ItineraryData = {
  name: "Mr. Andrew Harvey",
  tour: "Sacred Kashmir",
  duration: "15 Days 14 Nights",
  destinations: ["Srinagar", "Anantnag", "Ganderbal"],
  transportation: ["Force Urbania", "Toyota Fortuner"],
  groupSize: "15 Adults",
  expectedDate: "May 2026",
  inclusions: [
    "14 Nights at Designated Cultural Resorts (privately booked)",
    "Breakfast, Lunch & Dinner",
    "English Speaking Tour Guide",
    "Shikara Ride in Dal Lake",
    "Transfers & Sightseeing",
    "Pilgrim visits to Designated Temples, Ashram & Shrines",
    "Sufi Music Night",
    "Arts & Handicrafts Exhibition",
    "Spiritual Healer",
    "Meditation & Satsang",
    "Trek & Camp to Samkaropala",
    "Wazwan"
  ],
  accommodations: [
    {
      location: "Srinagar",
      nights: "12 Nights",
      resort: "MAQAM"
    },
    {
      location: "Pahalgam",
      nights: "1 Night",
      resort: "SOJOURN COTTAGES"
    }
  ],
  days: [
    {
      day: "Day 1",
      title: "Arrival",
      activities: [
        "Transfer from Airport to Resort in Srinagar",
        "Traditional welcome with Herbal Tea & Traditional Kashmiri Breads",
        "Lunch at Resort",
        "Pilgrim Induction",
        "One-on-One Introduction with Pilgrims",
        "Dinner at Resort"
      ]
    },
    {
      day: "Day 2 & 3",
      title: "A Sacred Pilgrimage to the Samkaropala (Shiva Sutra Rock)",
      activities: [
        "Breakfast at Resort",
        "Transfer to Fakir Gujri",
        "The Hike to Samkaropala will start from Fakir Gujri reaching halfway by ponies and then trekking to the Sacred site",
        "Packed Lunch will be served on the way to the Peak",
        "Base camp will be setup at the Lidwas Meadow where Pilgrims will stay overnight in shared camps",
        "Dinner at Base Camp",
        "Breakfast with Herbal Tea in the Morning while soaking in the picturesque views",
        "Trek towards the Sacred site",
        "Upon reaching the Sacred site Mediation and Satsang with Andrew Harvey at the Samkaropala while feeling the energy of Lord Shiva",
        "Start the descend towards Base Camp",
        "Lunch at Base Camp",
        "Descend back to Fakir Gujri",
        "Transfer to the Resort",
        "Dinner at Resort"
      ],
      highlights: [
        "Srikanthanatha, an incarnation of Lord Shiva, is said to have appeared in a dream to sage Vasugupta, guiding him to a sacred rock on Mahadeva Mountain containing secret doctrines",
        "The rock is set amidst the pristine alpine environment of the Himalayas, offering mesmerizing views of the surrounding valleys, forests, and peaks"
      ]
    },
    {
      day: "Day 4",
      title: "A Day at Leisure in Srinagar",
      activities: [
        "Breakfast at Resort",
        "Spend a leisurely morning at the resort",
        "Lunch at Resort",
        "Spend the day as you please exploring Srinagar and ask for recommendation on cafes, restaurants and markets from us",
        "Dinner at Resort"
      ]
    },
    {
      day: "Day 5",
      title: "Karma Cleansing & Healing with Conscious Communication",
      activities: [
        "Breakfast at Resort",
        "Satsang at Resort",
        "Lunch at Resort",
        "Cleansing & Healing with a Spiritual Healer (one-on-one)",
        "Storytelling amongst pilgrims around bon-fire in the evening at Resort",
        "Dinner at Resort"
      ],
      highlights: [
        "Satsang is a Sanskrit term that translates to 'being in the company of truth' It refers to a gathering of individuals who come together to explore and discuss spiritual teachings, truths, and practices"
      ]
    },
    {
      day: "Day 6",
      title: "Karma Cleansing & Healing with Conscious Communication",
      activities: [
        "Breakfast at Resort",
        "Satsang at Resort",
        "Lunch at Resort",
        "Visit Cheshm-e-Shahi (Spring of the Royals)",
        "Shikara Ride in Dal Lake at Sunset time",
        "Transfer to the Resort",
        "Storytelling amongst pilgrims around bon-fire in the evening at Resort",
        "Dinner at Resort"
      ],
      highlights: [
        "The mineral water from the spring is believed to have healing properties and is often consumed by visitors for its purity"
      ]
    },
    {
      day: "Day 7",
      title: "A walk through Kashmiri Shaivism",
      activities: [
        "Early Breakfast at Resort",
        "Visit Swami Lakshamnjoo Ashram",
        "Walk through the Ashram and Pray at Amriteshwara Temple at the Ashram",
        "Mughlai Lunch at Moti Mahal Restaurant near Ashram in Shalimar",
        "Briefing of the Kashmiri Shaivism and exhibition of Swami Lakshmanjoo's belongings",
        "Literary time at the Ashram Library (Dedicated to Kashmiri Shaivism)",
        "Transfer to the Resort in the evening",
        "Dinner at Resort"
      ],
      highlights: [
        "Swami Lakshmanjoo (1907–1991) was a renowned master of Kashmiri Shaivism who dedicated his life to preserving and sharing its teachings"
      ]
    },
    {
      day: "Day 8",
      title: "A Tapestry of Traditions",
      activities: [
        "Breakfast at Resort",
        "Introduction to the Kashmiri Arts & Handicrafts",
        "Lunch at Resort",
        "Experience the Artistry of Kashmir at Resort",
        "Artisan Meet-and-Greets",
        "Dinner at Resort"
      ],
      highlights: [
        "Join us for an exclusive Kashmiri Art Exhibition, showcasing the region's rich craftsmanship",
        "Engage directly with the creators to hear their stories, understand their challenges, and draw inspiration"
      ]
    },
    {
      day: "Day 9",
      title: "Spirit of Temples",
      activities: [
        "Breakfast at Resort",
        "Visit Kheer Bhawani Temple dedicated to Ragnya Devi – an incarnation of Goddess Durga",
        "Lunch at the banks of Sindh River at Wayil",
        "Visit Pandrethan Temple dedicated to Lord Shiva",
        "Visit Shankarachrya Temple dedicated to Lord Shiva",
        "Experience picturesque views of Srinagar Valley and River Jhelum at the Sunset time (the golden hour) while descending from Shankar Acharya Temple",
        "Transfer to Resort in the evening",
        "Dinner at Resort"
      ],
      highlights: [
        "Lord Rama worshipped the Goddess during his exile",
        "The temple is built in the middle of a water tank, with a two-storied pyramidal roof and intricate sculptures",
        "The Shankaracharya Temple sits atop the Takht-e-Suleiman (Throne of Solomon) hill at an elevation of 1,100 feet"
      ]
    },
    {
      day: "Day 10",
      title: "Radiant Health & Healing with Andrew Harvey",
      activities: [
        "Breakfast at Resort",
        "Meditation with Andrew Harvey",
        "Lunch at Resort",
        "Storytelling amongst pilgrims around bon-fire in the evening at Resort",
        "Dinner at Resort"
      ],
      highlights: [
        "Clear out and heal from past Emotional, Physical and Mental pains and trauma to transform your life"
      ]
    },
    {
      day: "Day 11",
      title: "A Mystic Day",
      activities: [
        "Breakfast at Resort",
        "Leave towards Anantnag and visit Lalleshwari Grave at Bijbehara",
        "Lunch on the way to Pahalgam",
        "Visit Martand Sun Temple Dedicated to Lord Surya",
        "Transfer to Pahalgam and take a rest with mountain views at the Resort",
        "Dinner at Resort"
      ],
      highlights: [
        "Lalleshwari influenced the emergence of the Rishi order of Sufi Saints and the development of Kashmiriyat",
        "The Martand Sun Temple is an 8th-century temple dedicated to the Sun God, Surya"
      ]
    },
    {
      day: "Day 12",
      title: "A Sufi Day",
      activities: [
        "Breakfast at Resort",
        "Meditate at the stunning Tuliyan Valley Pass on the way back from Pahalgam",
        "Visit Aishmuqam Shrine",
        "Lunch at Anantnag",
        "Leave towards Srinagar and visit Badamwari (The Orchard of Almonds)",
        "Visit Akhand Mullah Shah Mosque",
        "Transfer to the Resort",
        "Dinner at Resort"
      ],
      highlights: [
        "The Aishmuqam Shrine is dedicated to Sufi saint Baba Zain-ud-Din Rishi",
        "Habba Khatoon, the 'Nightingale of Kashmir,' was a 16th-century poetess known for her soulful verses",
        "Akhund Mullah Shah Mosque is a 17th-century mosque built during the reign of Mughal Emperor Shah Jahan"
      ]
    },
    {
      day: "Day 13",
      title: "Sufi Music Night",
      activities: [
        "Breakfast at Resort",
        "Meditation at Buddha Stupa in Harwan",
        "Transfer to Resort",
        "Lunch at Resort",
        "Soak in the essence of Sufi Music at Resort",
        "Dinner at Resort"
      ],
      highlights: [
        "The Buddha Stupa in Srinagar is an ancient Buddhist site dating back to the 4th-5th century CE",
        "Experience the mystical allure of Kashmir with a Sufi Music Night"
      ]
    },
    {
      day: "Day 14",
      title: "Oscar Night",
      activities: [
        "Breakfast at Resort",
        "Prepare for the Oscar Night",
        "Lunch at Resort",
        "Oscar Night of Spirituality",
        "Traditional Wazwan Dinner"
      ],
      highlights: [
        "On the final evening of your spiritual journey, we invite you to join us for a unique celebration—Oscar Night of Spirituality",
        "Indulge in a memorable Wazwan feast prepared at the resort, featuring a selection of traditional Kashmiri dishes"
      ]
    },
    {
      day: "Day 15",
      title: "Farewell",
      activities: [
        "Breakfast at Resort",
        "A Farewell at the Resort contemplating on the Sacred Journey",
        "Lunch at Resort",
        "Transfer to Airport"
      ]
    }
  ],
  policies: [
    "We are available 24x7 for your assistance",
    "Travelers are requested to pay the booking amount 90 days prior to arrival",
    "All bookings will be confirmed after the advance payment reflects in our bank account",
    "In case of a government-imposed lockdown, your booking amount is safe with us and can be used in the future",
    "Cancellation within 30 days of arrival is retained @ 100% with 0% refund",
    "Cancellation within 30-60 days of arrival is retained @ 50% with 50% refund",
    "Cancellation within 60-90 days of arrival is retained @ 0% with 100% refund",
    "Kindly make the Advance Payments at least 90 days prior to arrival. This helps us to ensure that the Hotels/Resorts are not Sold Out",
    "In case the customer has to extend their stay due to any circumstances such as weather, lockdown or any other exigency as such, we will provide full assistance to facilitate the tour extension and the cost has to be borne by the customer on no-profit no-loss basis",
    "As per Kashmir Tourism Advisory, all Visitors are advised to Hire Union Taxis for Sightseeing within the vicinities of Sonmarg, Pahalgam, Gulmarg & other destinations in Kashmir except Srinagar. Our Drivers will provide full assistance in hiring the Taxis in such locations",
    "Your Prepaid Sim cards will not work on your Trip to Kashmir & Ladakh, kindly arrange a Postpaid/Pre-on-Postpaid Sim on your own or inform us beforehand in case you need us to facilitate such arrangements"
  ],
  paymentDetails: {
    accountTitle: "Multi Destinations",
    accountNumber: "50100555255325",
    ifscCode: "HDFC0008265",
    branch: "Lal Bazar, Srinagar, J&K",
    upiId: "9596336191@ibl"
  },
  contact: {
    phone: ["1800 889 0856", "+91-7006 527 131"],
    address: "1ST FLOOR, PULLOO COMPLEX, MUNAWARABAD, SRINAGAR, 190001, J&K, INDIA",
    website: "www.themultidestinations.com"
  }
};
