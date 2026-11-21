export interface Safari {
    slug: string;
    title: string;
    category: 'uganda' | 'outbound' | 'special';
    duration: string;
    price: number; // USD per person
    image: string;
    shortDesc: string;
    longDesc: string;
    highlights?: string[];
    inclusions?: string[];
    exclusions?: string[];
}

export const safaris: Safari[] = [
    // ─── UGANDA SAFARIS ───
    {
        slug: 'kampala-city-tour',
        title: 'Kampala City Tour',
        category: 'uganda',
        duration: '1 Day',
        price: 35,
        image: '/images/safaris/kampala-city-tour.jpg',
        shortDesc: "Uncover Kampala's hospitality, culture and history on a half or full day city tour.",
        longDesc:
            "Uncover Kampala's Hospitality, culture and history by going on our half or full day city tour featuring the Kabaka's Palace, Namugongo Shrines, Kasubi Tombs, Uganda Museum, Gadhaffi Mosque, Namugongo and Namirembe Cathedrals, Bahai Temple, Makerere University, Parliament Buildings, etc.",
    },
    {
        slug: 'jinja-tour',
        title: 'Jinja Tour',
        category: 'uganda',
        duration: '1 Day',
        price: 50,
        image: '/images/safaris/jinja-tour.jpg',
        shortDesc: 'The East African adventure capital and the Source of the River Nile.',
        longDesc:
            'Visit this East African adventure capital and explore the Nile River at the source of the River Nile, Kyabirwa or Sezibwa Falls, Quad bike along the River shore and visit the nearby villages, bungy jump, Kayak and white water raft. In the evening a site seeing sunset cruise on the former Bujagali falls takes you closer to nature.',
    },
    {
        slug: 'uganda-hotspots-queen-elizabeth-murchison',
        title: 'Uganda Hotspots: Queen Elizabeth & Murchison Falls',
        category: 'uganda',
        duration: '6 Days / 5 Nights',
        price: 500,
        image: '/images/safaris/uganda-hotspots.jpg',
        shortDesc: "Two boat cruises on the Victoria Nile and Kazinga Channel for the 'big five'.",
        longDesc:
            "Enjoy two boat cruises on the Victoria Nile and Kazinga Channel to maximise game viewing of the 'big five' watering along the shores. Early morning game drives along the Buligi Circuits near the delta area in Murchison Falls Park and the Kasenyi Area will take you close to the lions where there's a high chance of meeting the cats in action. An abundance of wildlife calls these parks home: Jackson's hartebeests, Lions, buffaloes, giraffes, warthogs, leopards, waterbucks, hippos, Nile Crocodiles, Uganda Kobs, Oribi, Impalas, Elephants, plus an impressive variety of birdlife. The Murchison Falls itself and the explosion craters of Queen Elizabeth Park are the icing.",
    },
    {
        slug: 'lake-mburo-park-tour',
        title: 'Lake Mburo Park Tour',
        category: 'uganda',
        duration: '2 Days / 1 Night',
        price: 250,
        image: '/images/safaris/lake-mburo.jpg',
        shortDesc: 'The closest park to Kampala — zebras, elands, giraffes and boat cruises.',
        longDesc:
            "Indulge yourself in the beauty of the Lake Mburo Wilderness. A continuation of the vast Serengeti Plains of Northern Tanzania, this park is the closest to Kampala featuring Burchell's Zebras, the rare and endemic Gigantic Elands, Impalas, Rothchild's Giraffes, Buffaloes, etc, plus an impressive variety of birdlife. Game Walks and Boat Cruises taking you closer to nature are also popular activities. Spend the night at an upmarket Lodge like Mihingo and indulge in the culinary pleasures or Rwonyo Budget Bandas, overlooking the Lake Mburo.",
    },
    {
        slug: 'queen-elizabeth-park',
        title: 'Queen Elizabeth Park',
        category: 'uganda',
        duration: '4 Days / 3 Nights',
        price: 400,
        image: '/images/safaris/Queen Elizabeth Park Tour.jpg',
        shortDesc: 'Tree-climbing lions, Kazinga Channel, and explosion crater lakes.',
        longDesc:
            "This second largest protected area in Uganda sits at the bottom of the East African Rift Valley and along the Mt. Rwenzori Ranges featuring magnificent explosion crater lakes and a beautiful savanna Habitat and Rain Forest. You can track chimpanzees and other primates in the Maramagambo Forest or Kyambura Gorge. In case of the big five, an early morning game drive along the Kasenyi tracks is truly rewarding. Big cats are commonly found here in action along with herds of buffaloes, elephants, Uganda Kobs, Bush Bucks, etc. The park is also home to the rare tree climbing lions of Ishasha and the Kazinga Channel where it is a paradise of colorful birdlife and aquatic mammals.",
    },
    {
        slug: 'gorilla-tracking-bwindi',
        title: 'Gorilla Tracking in Bwindi',
        category: 'uganda',
        duration: '4 Days / 3 Nights',
        price: 1200,
        image: '/images/safaris/Gorilla Tracking in Uganda.jpg',
        shortDesc: 'Up close and personal with the endangered Mountain Gorillas.',
        longDesc:
            'The endangered Mountain Gorilla tour in Uganda takes you up close and personal with the gentle giants — an exciting and memorable event indeed! You will have picnic lunch in the forest after trekking and finding a gorilla family in these ancient African untouched virgin rainforests.',
    },
    {
        slug: 'murchison-falls-park',
        title: 'Murchison Falls Park',
        category: 'uganda',
        duration: '3 Days / 2 Nights',
        price: 450,
        image: '/images/safaris/murchison-falls.jpg',
        shortDesc: 'The spectacular falls, game drives and boat cruises on the Nile.',
        longDesc:
            "The spectacular Murchison falls can be accessed through the famous Luweero Triangle and Masindi. At Kichumbanyobo gate, you will be welcomed by the delightful chattering of Olive baboons, bush babies, black and white colobus monkeys, vervet monkeys, among other monkey tribes. A forest Nature walk at Kaniyo Pabidi will take you closer to the resident Chimpanzees. Further ahead is the 'Top of the Falls' where you will see the falls from above, feel the rock literally tremble as the whole River Nile presses through a seven meter crevice, to plunge 75 metres below in a series of cascades and a beautiful rainbow. In the mornings, early game drives along the Buligi circuits takes you close to Lions, elephants, buffalo herds, Jackson's Hartebeests, bush bucks, water bucks, Giraffes, Hornbills, Shoebill Storks near the delta area, Leopards, among others. There are panoramic double decked boat cruises in the afternoons to the bottom view of the Murchison falls giving you a truly remarkable experience.",
    },
    {
        slug: 'semuliki-kidepo-flight-tour',
        title: 'Semuliki & Kidepo Flight Tour',
        category: 'uganda',
        duration: '5 Days / 4 Nights',
        price: 3500,
        image: '/images/safaris/kidepo-semuliki.jpg',
        shortDesc: 'Remote wildernesses, ostriches, cheetahs and Karimojong culture.',
        longDesc:
            "The Semuliki and Kidepo parks abound at the most western and north eastern fringes of Uganda offering the most remote wildernesses and rarest wildlife. Wildlife not found anywhere else in Uganda are the Ostriches, Cheetahs, African Hunting Dogs, plus a truly authentic tribal experience of the Karimojong People of Moroto or the Batwa Pygmies of the Ntandi Village in Bundibugyo. You can be part of the 'local life' by visiting their Manyattas and take part in a local traditional dance. Flight tours are available by chartered domestic flight mixed with ground transportation on arrival. Accommodation is at the upmarket Semuliki and Apoka Lodges, which are under the same management.",
    },
    {
        slug: 'mt-rwenzori-climb',
        title: 'Mt. Rwenzori Climb',
        category: 'uganda',
        duration: '10 Days / 9 Nights',
        price: 2000,
        image: '/images/safaris/rwenzori.jpg',
        shortDesc: 'The Mountains of the Moon — snow at the equator.',
        longDesc:
            "These Mountains of the moon offer something for both the experienced mountaineer and the beginner explorer who wants to experience the awe of mountain ranges. Comfortable huts are available at the varying altitudes to welcome climbers with their crew. The lofty Margherita peak which features 'snow at the equator' has always been accessed in 8-10 days. There are also the easier 3-6 day trails taking you through heath and moorland, rainforests, and spectacular views of both Ugandan Savanna to the east and the thick Ituri Rainforest of the Congo.",
    },
    {
        slug: 'mt-elgon-climb',
        title: 'Mt. Elgon Climb',
        category: 'uganda',
        duration: '5 Days / 4 Nights',
        price: 450,
        image: '/images/safaris/mt-elgon.jpg',
        shortDesc: 'A milder climb to the Wagagai Peak near Sipi Falls.',
        longDesc:
            "A milder mountain climbing experience abides in Eastern Uganda near the Sipi Falls. You can access the Wagagai Peak in 3-5 days and enjoy spectacular view of this extinct volcano. Arrive at 'Rose's Last Chance' hotel at the trailhead and after spending a night, you can scale the mountain with your crew of experienced guides, cooks and porters.",
    },
    {
        slug: 'kibale-chimpanzee-tracking',
        title: 'Kibale Chimpanzee Tracking',
        category: 'uganda',
        duration: '3 Days / 2 Nights',
        price: 600,
        image: '/images/safaris/kibale-chimps.jpg',
        shortDesc: 'Up close and personal with our intelligent cousins in Kibale Forest.',
        longDesc:
            "This three day tour from Kampala takes you to the Uganda Tourism Capital of 'Fort Portal'. Surrounded by sharply crater lakes and evergreen mountainous scenery, the Kibale Forest features several primate species including the endemic red-tailed monkey and the Chimpanzees in their natural habitat. A guided trek in the forest takes you up close and personal to these intelligent cousins in their natural environment. After pictures and a picnic lunch in the forest, you will return to your accommodations near Fort Portal and eventual drive back to Kampala.",
    },
    {
        slug: 'best-of-uganda-14-days',
        title: '14 Day Best of Uganda Holiday Tour',
        category: 'uganda',
        duration: '14 Days / 13 Nights',
        price: 4500,
        image: '/images/safaris/best-of-uganda.jpg',
        shortDesc: "The ultimate two-week blend of city tours and Uganda's greatest national parks.",
        longDesc:
            "This two weeks best of Uganda is a blend of City tours and the National Parks spanning across Uganda. You can opt for a mix of midrange and upmarket or Budget Accommodations. The tour starts from Kampala, to Jinja which is the 'Source of the River Nile'. Later to Lakes Mburo and Bunyonyi via the Ssese Islands in Lake Victoria. The Mountain Gorilla Sanctuary is accessed via Ruhija or Nkuringo or Mgahinga overlooking Uganda, Rwanda and DR Congo. After an encounter with the Mountain Gorillas, we travel to Queen Elizabeth Park via Ishasha, the area re-known for its tree climbing lions. Overnight in Maramagambo Forest or Mweya Lodge at the fringes of the Kazinga Channel and Lake Edward. We visit the Semuliki Park and Hot springs, later track Chimpanzees in Kibale Forest before concluding the tour in Murchison Falls National Park in Northern Uganda. You will enjoy unforgettable game drives, primate tracking, boat cruises, nature walks and hikes, site seeing and bird watching. Later, we return to Kampala for overnight before your onward flight back home from Entebbe.",
    },
    {
        slug: 'entebbe-ngamba-island',
        title: 'Entebbe & Ngamba Island',
        category: 'uganda',
        duration: '1 Day',
        price: 200,
        image: '/images/safaris/Ngamba Island.jpg',
        shortDesc: 'Chimpanzee sanctuary, botanical gardens and the Entebbe Zoo.',
        longDesc:
            "Ngamba Island Chimpanzee Sanctuary takes you close to Uganda's Chimpanzees where you can view and feed them from a viewing platform. Access is by speed boat or traditional boat ride from Entebbe. Entebbe itself is the home of the botanical gardens, Entebbe Airport, and the Uganda Wildlife Education Centre or 'Entebbe Zoo'.",
    },
    {
        slug: 'ssese-islands',
        title: 'Ssese Islands',
        category: 'uganda',
        duration: '3 Days / 2 Nights',
        price: 300,
        image: '/images/safaris/ssese-islands.jpg',
        shortDesc: "White sand beaches on Lake Victoria — a honeymooner's paradise.",
        longDesc:
            "The Ssese Islands in Uganda are the only location where you will relax in the natural white sand beaches. Renown as a honeymooner's paradise, you will need to relax here after a long safari tour of Uganda or simply unwind after hectic business engagements in Kampala. A modern ferry operates at Nakiwogo in Entebbe and Bukakata near Masaka.",
    },

    // ─── OUTBOUND TRAVEL ───
    {
        slug: 'mombasa',
        title: 'Mombasa',
        category: 'outbound',
        duration: '3 Days / 2 Nights',
        price: 350,
        image: '/images/safaris/mombasa.jpg',
        shortDesc: 'World-class white sand beaches on the Indian Ocean and Swahili culture.',
        longDesc:
            'Relax in the world class white sand beaches on the Indian ocean, be part of the local Swahili culture.',
        inclusions: ['Accommodation', 'Daily Breakfast', 'Airport Transfers from Moi International Airport', 'Haller Park Tour', 'Mombasa City Tour featuring Fort Jesus', 'Tamarind Boat Cruise'],
        exclusions: ['International flights', 'Beverages', 'Tips and personal expenses'],
    },
    {
        slug: 'mombasa-malindi-lamu',
        title: 'Mombasa, Malindi & Lamu',
        category: 'outbound',
        duration: '6 Days / 5 Nights',
        price: 550,
        image: '/images/safaris/lamu.jpg',
        shortDesc: 'The East African Swahili Coast — beaches and world class cuisine.',
        longDesc: 'Explore the East African Swahili Coast with the pristine white sand beaches and world class cuisine.',
        inclusions: ['Accommodations', 'Daily Breakfast', 'Airport transfers', 'Local Tours'],
    },
    {
        slug: 'dubai',
        title: 'Dubai',
        category: 'outbound',
        duration: '3 Days / 2 Nights',
        price: 350,
        image: '/images/safaris/dubai.jpg',
        shortDesc: 'Modern architecture, snow in the desert, and the Burj Khalifa.',
        longDesc:
            "Feel the vibe of modern world class architecture and snow in the middle of a desert! A boat cruise on the Dubai Creek or Dubai Marina, Desert Safari, Miracle Garden, Museum of the future, Wild Wadi Water park, Burj Khalifa (world's tallest building), among other activities.",
    },
    {
        slug: 'dubai-abu-dhabi',
        title: 'Dubai & Abu Dhabi',
        category: 'outbound',
        duration: '4 Days / 3 Nights',
        price: 500,
        image: '/images/safaris/abu-dhabi.jpg',
        shortDesc: 'Ferrari World, Warner Brothers, Gold Souk and desert safari.',
        longDesc: 'Visit the Ferrari World, Warner Brothers, Desert Safari, Gold Souk, Creek boat cruise, etc.',
    },
    {
        slug: 'seychelles',
        title: 'Seychelles',
        category: 'outbound',
        duration: '4 Days / 3 Nights',
        price: 350,
        image: '/images/safaris/seychelles.jpg',
        shortDesc: 'City tour of Mahe Island and white sand honeymoon beaches.',
        longDesc: 'Take a city tour of Mahe Island and relax on the white sand beaches in this world renown honeymoon destination.',
    },
    {
        slug: 'seychelles-dubai',
        title: 'Seychelles & Dubai',
        category: 'outbound',
        duration: '6 Days / 5 Nights',
        price: 1000,
        image: '/images/safaris/seychelles-dubai.jpg',
        shortDesc: 'Shopping in Dubai and relaxing on Mahe beaches via Addis Ababa.',
        longDesc:
            'This special tour connecting Seychelles and Dubai via Bole Airport in Addis Ababa offers shopping opportunities in Dubai and the glitzy activities such as Dubai Ain, Dolphinarium, Helicopter Tour plus a relaxing escape on the Mahe white sand beaches in Seychelles.',
    },
];

export const getSafariBySlug = (slug: string) => safaris.find((s) => s.slug === slug);