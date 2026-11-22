export interface Safari {
    slug: string;
    title: string;
    category: 'uganda' | 'outbound' | 'special';
    categoryLabel?: string;
    duration: string;
    price: number; // USD per person
    image: string;
    shortDesc: string;
    longDesc: string;
    rating?: number;
    reviews?: number;
    maxGroup?: number;
    bestTime?: string;
    location?: string;
    overview?: string;
    attractions?: string[];
    activities?: string[];
    tips?: string[];
    accommodations?: { name: string; tier: 'Luxury' | 'Mid-range' | 'Budget' }[];
    gettingThere?: string;
    highlights?: string[];
    inclusions?: string[];
    exclusions?: string[];
}

export const safaris: Safari[] = [
    // ═══════════════════════════════════════════════════════
    // UGANDA SAFARIS
    // ═══════════════════════════════════════════════════════
    {
        slug: 'kampala-city-tour',
        title: 'Kampala City Tour',
        category: 'uganda',
        categoryLabel: 'City Tour',
        duration: '1 Day',
        price: 35,
        image: '/images/safaris/kampala-city-tour.jpg',
        shortDesc:
            "Uncover Kampala's hospitality, culture and history on a half or full day city tour.",
        longDesc:
            "Uncover Kampala's hospitality, culture and history by going on our half or full day city tour featuring the Kabaka's Palace, Namugongo Shrines, Kasubi Tombs, Uganda Museum, Gadhaffi Mosque, Namugongo and Namirembe Cathedrals, Bahai Temple, Makerere University, Parliament Buildings, etc.",
        rating: 4.6,
        reviews: 89,
        maxGroup: 12,
        bestTime: 'Year-round (dry season best for walking)',
        location: 'Kampala, Uganda',
        overview:
            'Kampala, the capital of Uganda, is a vibrant city built on seven hills. The name comes from "Impala" — the antelope that once roamed these hills. Today it is a bustling cultural melting pot blending traditional Buganda heritage with modern East African life.\n\n' +
            'Our city tour takes you through the historical, cultural, and religious heart of the city — from the sacred Kasubi Tombs (a UNESCO World Heritage Site) to the magnificent Gaddafi Mosque with its panoramic views. You will visit the Uganda Museum, encounter the moving Namugongo Martyrs Shrine, and walk through Makerere University, one of Africa\'s oldest and most prestigious universities.',
        attractions: [
            "Kabaka's Palace (Lubiri)",
            'Namugongo Martyrs Shrine',
            'Kasubi Tombs (UNESCO)',
            'Uganda Museum',
            'Gaddafi National Mosque',
            'Namirembe Cathedral',
            'Bahai Temple',
            'Makerere University',
            'Parliament Buildings',
        ],
        activities: [
            'Guided city walking tour',
            'Museum & heritage site visits',
            'Religious & cultural landmarks tour',
            'Local craft market shopping',
            'Kampala hill-top panoramic views',
        ],
        tips: [
            'Wear comfortable walking shoes',
            'Dress modestly when visiting religious sites',
            'Bring a camera — many photo opportunities',
            'Afternoon tours can be combined with a sunset at Lake Victoria',
        ],
        accommodations: [
            { name: 'Kampala Serena Hotel', tier: 'Luxury' },
            { name: 'Speke Resort Munyonyo', tier: 'Luxury' },
            { name: 'Protea Hotel Kampala', tier: 'Mid-range' },
            { name: 'Acacia Boutique Hotel', tier: 'Mid-range' },
            { name: 'Fat Cat Backpackers', tier: 'Budget' },
        ],
        gettingThere:
            'Tours start from any hotel in central Kampala. Entebbe International Airport is 45 km away (approx. 1 hour drive).',
    },

    {
        slug: 'jinja-tour',
        title: 'Jinja Tour',
        category: 'uganda',
        categoryLabel: 'Adventure Tour',
        duration: '1 Day',
        price: 50,
        image: '/images/safaris/jinja-tour.jpg',
        shortDesc:
            'The East African adventure capital and the Source of the River Nile.',
        longDesc:
            'Visit this East African adventure capital and explore the Nile River at the source of the River Nile, Kyabirwa or Sezibwa Falls, Quad bike along the River shore and visit the nearby villages, bungy jump, Kayak and white water raft. In the evening a site seeing sunset cruise on the former Bujagali falls takes you closer to nature.',
        rating: 4.8,
        reviews: 156,
        maxGroup: 14,
        bestTime: 'Year-round',
        location: 'Jinja, Uganda',
        overview:
            'Jinja — the adventure capital of East Africa — sits at the point where the mighty River Nile begins its 6,650 km journey to the Mediterranean Sea. The town combines adrenaline-pumping activities with laid-back riverside charm.\n\n' +
            'From bungee jumping and white-water rafting to peaceful sunset cruises on the Nile, Jinja offers something for every type of traveler. Visit the Source of the Nile, explore Sezibwa Falls, and experience local village life just a short drive from Kampala.',
        attractions: [
            'Source of the River Nile',
            'Bujagali Falls',
            'Sezibwa Falls',
            'Itanda Falls',
            'Jinja Central Market',
            'Ripon Falls',
        ],
        activities: [
            'Bungee jumping',
            'White-water rafting',
            'Quad biking',
            'Kayaking',
            'Sunset boat cruise',
            'Village walks',
            'Horse riding',
        ],
        tips: [
            'Bring quick-dry clothing for water activities',
            'Book bungee/rafting in advance during peak season',
            'Morning departures allow more activities in one day',
            'Combine with Kampala City Tour for a 2-day itinerary',
        ],
        accommodations: [
            { name: 'Wildwaters Lodge', tier: 'Luxury' },
            { name: 'Jinja Nile Resort', tier: 'Luxury' },
            { name: 'Nile Village Hotel', tier: 'Mid-range' },
            { name: 'Hotel Paradise on the Nile', tier: 'Mid-range' },
            { name: 'Adrift River Base', tier: 'Budget' },
        ],
        gettingThere:
            'By road: 2.5–3 hours from Kampala (80 km via Mukono). Guided day trips typically leave at 7 AM.',
    },

    {
        slug: 'uganda-hotspots-queen-elizabeth-murchison',
        title: 'Uganda Hotspots: Queen Elizabeth & Murchison Falls',
        category: 'uganda',
        categoryLabel: 'Wildlife Safari',
        duration: '6 Days / 5 Nights',
        price: 500,
        image: '/images/safaris/uganda-hotspots.jpg',
        shortDesc:
            "Two boat cruises on the Victoria Nile and Kazinga Channel for the 'big five'.",
        longDesc:
            "Enjoy two boat cruises on the Victoria Nile and Kazinga Channel to maximise game viewing of the 'big five' watering along the shores. Early morning game drives along the Buligi Circuits near the delta area in Murchison Falls Park and the Kasenyi Area will take you close to the lions where there's a high chance of meeting the cats in action. An abundance of wildlife calls these parks home: Jackson's hartebeests, Lions, buffaloes, giraffes, warthogs, leopards, waterbucks, hippos, Nile Crocodiles, Uganda Kobs, Oribi, Impalas, Elephants, plus an impressive variety of birdlife. The Murchison Falls itself and the explosion craters of Queen Elizabeth Park are the icing.",
        rating: 4.9,
        reviews: 203,
        maxGroup: 12,
        bestTime: 'Dry season (June–September, December–February)',
        location: 'Queen Elizabeth & Murchison Falls, Uganda',
        overview:
            'This six-day journey combines Uganda\'s two most iconic national parks — Queen Elizabeth and Murchison Falls — into one unforgettable safari. From the tree-climbing lions of Ishasha to the thundering Murchison Falls, this tour offers a comprehensive taste of Uganda\'s extraordinary biodiversity.\n\n' +
            "The itinerary includes two boat cruises, multiple game drives, and visits to all the major habitats — savanna, rainforest, and wetland. Wildlife encounters include lions, elephants, giraffes, buffaloes, hippos, crocodiles, and countless bird species.",
        attractions: [
            'Murchison Falls (top and bottom view)',
            'Kazinga Channel',
            'Ishasha tree-climbing lions',
            'Buligi game tracks',
            'Victoria Nile delta',
            'Explosion crater lakes',
        ],
        activities: [
            'Morning and evening game drives',
            'Boat cruises on the Nile and Kazinga',
            'Nature walk at Kaniyo Pabidi',
            'Bird watching',
            'Chimpanzee tracking (optional)',
        ],
        tips: [
            'Bring binoculars for distant game viewing',
            'Pack neutral-colored clothing for game drives',
            'Early morning drives offer the best predator sightings',
            'Book permits and accommodations at least 60 days in advance',
        ],
        accommodations: [
            { name: 'Mweya Safari Lodge', tier: 'Luxury' },
            { name: 'Paraa Safari Lodge', tier: 'Luxury' },
            { name: 'Elephant Plains Lodge', tier: 'Mid-range' },
            { name: 'Pakuba Safari Lodge', tier: 'Mid-range' },
            { name: 'Red Chilli Rest Camp', tier: 'Budget' },
        ],
        gettingThere:
            'Flights from Entebbe to Mweya and Pakuba airstrips (1 hour), or by road from Kampala (6–7 hours).',
    },

    {
        slug: 'lake-mburo-park-tour',
        title: 'Lake Mburo Park Tour',
        category: 'uganda',
        categoryLabel: 'Wildlife Safari',
        duration: '2 Days / 1 Night',
        price: 250,
        image: '/images/safaris/lake-mburo.jpg',
        shortDesc:
            'The closest park to Kampala — zebras, elands, giraffes and boat cruises.',
        longDesc:
            "Indulge yourself in the beauty of the Lake Mburo Wilderness. A continuation of the vast Serengeti Plains of Northern Tanzania, this park is the closest to Kampala featuring Burchell's Zebras, the rare and endemic Gigantic Elands, Impalas, Rothchild's Giraffes, Buffaloes, etc, plus an impressive variety of birdlife. Game Walks and Boat Cruises taking you closer to nature are also popular activities. Spend the night at an upmarket Lodge like Mihingo and indulge in the culinary pleasures or Rwonyo Budget Bandas, overlooking the Lake Mburo.",
        rating: 4.7,
        reviews: 112,
        maxGroup: 10,
        bestTime: 'Dry season (June–September, December–February)',
        location: 'Lake Mburo National Park, Uganda',
        overview:
            'Lake Mburo National Park is the smallest but most accessible of Uganda\'s savanna parks — a perfect weekend escape from Kampala. Its rolling hills, acacia woodland, and network of lakes create a serene landscape rich with wildlife.\n\n' +
            'Unlike many other parks, Lake Mburo permits guided walking safaris, allowing visitors to get remarkably close to zebras, giraffes, and elands on foot. Boat trips on the lake reveal hippos, crocodiles, and abundant birdlife.',
        attractions: [
            'Lake Mburo and its five surrounding lakes',
            'Burchell\'s zebra herds',
            'Rothschild\'s giraffes',
            'Eland antelope',
            'Rwonyo swamp',
            'Salt lick observation point',
        ],
        activities: [
            'Game drives',
            'Guided nature walks',
            'Boat cruise on Lake Mburo',
            'Horseback safaris',
            'Night game drives (predator spotting)',
            'Bird watching',
        ],
        tips: [
            'Book the night game drive — rare chance to spot leopards',
            'Wear neutral clothing for walking safaris',
            'Mihingo Lodge offers the best sunset views in the park',
            'Perfect 2-day trip for those short on time',
        ],
        accommodations: [
            { name: 'Mihingo Lodge', tier: 'Luxury' },
            { name: 'Kigambira Safari Lodge', tier: 'Luxury' },
            { name: 'Arcadia Cottages', tier: 'Mid-range' },
            { name: 'Rwonyo Rest Camp', tier: 'Budget' },
            { name: 'Leopard Rest Camp', tier: 'Budget' },
        ],
        gettingThere:
            'By road: 3.5–4 hours from Kampala via Masaka (240 km). Ideal weekend getaway.',
    },

    {
        slug: 'queen-elizabeth-park',
        title: 'Queen Elizabeth National Park',
        category: 'uganda',
        categoryLabel: 'Wildlife Safari',
        duration: '4 Days / 3 Nights',
        price: 400,
        image: '/images/safaris/Queen-Elizabeth-National-Park.jpg',
        shortDesc:
            'Tree-climbing lions, Kazinga Channel, and explosion crater lakes.',
        longDesc:
            "This second largest protected area in Uganda sits at the bottom of the East African Rift Valley and along the Mt. Rwenzori Ranges featuring magnificent explosion crater lakes and a beautiful savanna Habitat and Rain Forest. You can track chimpanzees and other primates in the Maramagambo Forest or Kyambura Gorge. In case of the big five, an early morning game drive along the Kasenyi tracks is truly rewarding. Big cats are commonly found here in action along with herds of buffaloes, elephants, Uganda Kobs, Bush Bucks, etc. The park is also home to the rare tree climbing lions of Ishasha and the Kazinga Channel where it is a paradise of colorful birdlife and aquatic mammals.",
        rating: 4.8,
        reviews: 127,
        maxGroup: 15,
        bestTime: 'Dry season (June–July and January–February)',
        location: 'Queen Elizabeth National Park, Uganda',
        overview:
            "Queen Elizabeth National Park is Uganda's most popular savanna park, spanning 1,978 square kilometers across western Uganda. Established in 1952, the park is named after Queen Elizabeth II and offers diverse ecosystems including savanna, wetlands, and forests.\n\n" +
            "The park is famous for its tree-climbing lions in the Ishasha sector, large herds of elephants, and over 600 bird species. The Kazinga Channel connects Lake Edward and Lake George, providing incredible boat safari opportunities with the highest concentration of hippos in Africa.\n\n" +
            'This park offers classic African safari experiences with dramatic landscapes, including volcanic craters, grassy plains, and tropical forest.',
        attractions: [
            'Tree-climbing Lions (Ishasha sector)',
            'Kazinga Channel Boat Cruise',
            'Volcanic Crater Lakes',
            'Kyambura Gorge Chimpanzees',
            'Maramagambo Forest',
            'Katwe Salt Lake',
        ],
        activities: [
            'Game Drives (morning and evening)',
            'Boat Safari on Kazinga Channel',
            'Chimpanzee Trekking',
            'Nature Walks',
            'Bird Watching',
            'Salt Mining Experience',
        ],
        tips: [
            'Book early morning game drives for best wildlife viewing',
            "Don't miss the Kazinga Channel boat cruise",
            'Spend time in Ishasha sector for tree-climbing lions',
            'Carry binoculars for bird watching',
            'Bring sunscreen and a hat',
        ],
        accommodations: [
            { name: 'Mweya Safari Lodge', tier: 'Luxury' },
            { name: 'Kyambura Gorge Lodge', tier: 'Luxury' },
            { name: 'Elephant Plains Lodge', tier: 'Mid-range' },
            { name: 'Simba Safari Camp', tier: 'Mid-range' },
            { name: 'Pumba Safari Cottages', tier: 'Budget' },
        ],
        gettingThere:
            'By Road: 6–7 hours from Kampala via Mbarara. Flights available from Entebbe to Mweya or Kasese airstrips (1 hour).',
    },

    {
        slug: 'gorilla-tracking-bwindi',
        title: 'Gorilla Tracking in Bwindi',
        category: 'uganda',
        categoryLabel: 'Primate Safari',
        duration: '4 Days / 3 Nights',
        price: 1200,
        image: '/images/safaris/bwindi-gorilla.avif',
        shortDesc: 'Up close and personal with the endangered Mountain Gorillas.',
        longDesc:
            'The endangered Mountain Gorilla tour in Uganda takes you up close and personal with the gentle giants — an exciting and memorable event indeed! You will have picnic lunch in the forest after trekking and finding a gorilla family in these ancient African untouched virgin rainforests.',
        rating: 5.0,
        reviews: 342,
        maxGroup: 8,
        bestTime: 'Dry season (June–September, December–February)',
        location: 'Bwindi Impenetrable Forest, Uganda',
        overview:
            'Bwindi Impenetrable National Park is a UNESCO World Heritage Site and home to nearly half of the world\'s remaining mountain gorillas. Trekking through the ancient rainforest to spend one precious hour with a habituated gorilla family is one of the most profound wildlife experiences on Earth.\n\n' +
            'The trek can take between 2 and 8 hours depending on the location of the gorilla family, but every step is worth it. Encountering a silverback, mothers, and playful juveniles in their natural habitat is a memory you will treasure forever.',
        attractions: [
            'Mountain gorilla families',
            'Bwindi Impenetrable Forest (UNESCO)',
            'Batwa cultural experience',
            'Buhoma community walks',
            'Ishasha tree-climbing lions (on extension)',
            'Lake Bunyonyi (nearby)',
        ],
        activities: [
            'Gorilla trekking (permit included)',
            'Batwa cultural encounter',
            'Nature walks and birding',
            'Community village visits',
            'Tea plantation tours',
        ],
        tips: [
            'Book gorilla permits 3–6 months in advance — they sell out',
            'Bring waterproof hiking boots and rain gear',
            'Pack gloves, long pants, and long sleeves — the forest is dense',
            'Porters are available to hire ($15-20) — highly recommended',
            'Maintain 7-meter distance from gorillas',
        ],
        accommodations: [
            { name: 'Sanctuary Gorilla Forest Camp', tier: 'Luxury' },
            { name: 'Bwindi Lodge', tier: 'Luxury' },
            { name: 'Silverback Lodge', tier: 'Mid-range' },
            { name: 'Engagi Lodge', tier: 'Mid-range' },
            { name: 'Broadbill Forest Camp', tier: 'Budget' },
        ],
        gettingThere:
            'By Road: 8–9 hours from Kampala. Domestic flights from Entebbe to Kihihi airstrip (1 hour) then 1.5-hour drive.',
    },

    {
        slug: 'murchison-falls-park',
        title: 'Murchison Falls Park',
        category: 'uganda',
        categoryLabel: 'Wildlife Safari',
        duration: '3 Days / 2 Nights',
        price: 450,
        image: '/images/safaris/murchison-falls.jpg',
        shortDesc:
            'The spectacular falls, game drives and boat cruises on the Nile.',
        longDesc:
            "The spectacular Murchison falls can be accessed through the famous Luweero Triangle and Masindi. At Kichumbanyobo gate, you will be welcomed by the delightful chattering of Olive baboons, bush babies, black and white colobus monkeys, vervet monkeys, among other monkey tribes. A forest Nature walk at Kaniyo Pabidi will take you closer to the resident Chimpanzees. Further ahead is the 'Top of the Falls' where you will see the falls from above, feel the rock literally tremble as the whole River Nile presses through a seven meter crevice, to plunge 75 metres below in a series of cascades and a beautiful rainbow. In the mornings, early game drives along the Buligi circuits takes you close to Lions, elephants, buffalo herds, Jackson's Hartebeests, bush bucks, water bucks, Giraffes, Hornbills, Shoebill Storks near the delta area, Leopards, among others. There are panoramic double decked boat cruises in the afternoons to the bottom view of the Murchison falls giving you a truly remarkable experience.",
        rating: 4.9,
        reviews: 178,
        maxGroup: 12,
        bestTime: 'Dry season (December–February, June–September)',
        location: 'Murchison Falls National Park, Uganda',
        overview:
            'Murchison Falls National Park is Uganda\'s largest protected area — a 3,840 square kilometer expanse where the mighty Victoria Nile forces its way through a 7-meter gap in the Rift Valley escarpment, plunging 43 meters with a thunderous roar.\n\n' +
            'The park is home to 76 species of mammals including four of the Big Five (lion, leopard, elephant, buffalo), plus iconic wildlife like Rothschild\'s giraffes, Jackson\'s hartebeests, and countless water birds. The double-decked boat cruise to the base of the falls is arguably the highlight of any Ugandan safari.',
        attractions: [
            'Murchison Falls (top and bottom views)',
            'Victoria Nile delta (shoebill habitat)',
            'Buligi game tracks',
            'Kaniyo Pabidi forest',
            'Karuma Falls',
            'Lake Albert',
        ],
        activities: [
            'Boat cruise to base of the falls',
            'Morning game drives',
            'Hike to top of the falls',
            'Chimpanzee tracking at Kaniyo Pabidi',
            'Bird watching (over 450 species)',
            'Sport fishing on the Nile',
        ],
        tips: [
            'Take the boat cruise early morning for best wildlife sightings',
            'Hike to the Top of the Falls for spectacular views',
            'Carry insect repellent — tsetse flies are present',
            'The Nile delta boat safari offers the best chance of seeing a shoebill',
        ],
        accommodations: [
            { name: 'Baker\'s Lodge', tier: 'Luxury' },
            { name: 'Paraa Safari Lodge', tier: 'Luxury' },
            { name: 'Pakuba Safari Lodge', tier: 'Mid-range' },
            { name: 'Fort Murchison Lodge', tier: 'Mid-range' },
            { name: 'Red Chilli Rest Camp', tier: 'Budget' },
        ],
        gettingThere:
            'By road: 5–6 hours from Kampala via Masindi. Flights available from Entebbe to Pakuba airstrip (1 hour).',
    },

    {
        slug: 'semuliki-kidepo-flight-tour',
        title: 'Semuliki & Kidepo Flight Tour',
        category: 'uganda',
        categoryLabel: 'Wilderness Expedition',
        duration: '5 Days / 4 Nights',
        price: 3500,
        image: '/images/safaris/kidepo-semuliki.jpg',
        shortDesc:
            'Remote wildernesses, ostriches, cheetahs and Karimojong culture.',
        longDesc:
            "The Semuliki and Kidepo parks abound at the most western and north eastern fringes of Uganda offering the most remote wildernesses and rarest wildlife. Wildlife not found anywhere else in Uganda are the Ostriches, Cheetahs, African Hunting Dogs, plus a truly authentic tribal experience of the Karimojong People of Moroto or the Batwa Pygmies of the Ntandi Village in Bundibugyo. You can be part of the 'local life' by visiting their Manyattas and take part in a local traditional dance. Flight tours are available by chartered domestic flight mixed with ground transportation on arrival. Accommodation is at the upmarket Semuliki and Apoka Lodges, which are under the same management.",
        rating: 4.9,
        reviews: 64,
        maxGroup: 8,
        bestTime: 'Dry season (December–February, June–September)',
        location: 'Kidepo Valley & Semuliki, Uganda',
        overview:
            'This exclusive fly-in safari takes you to two of Uganda\'s most remote and untouched wildernesses — Kidepo Valley in the far northeast and Semuliki in the west. Kidepo is consistently rated among Africa\'s top national parks by CNN Travel and is the only place in Uganda where you can see cheetahs, ostriches, and African wild dogs.\n\n' +
            'The journey combines chartered flights, cultural encounters with the Karimojong and Batwa peoples, and upmarket lodge accommodation at Apoka and Semuliki, both managed by the same operator. This is the safari for the discerning traveler seeking true wilderness beyond the crowds.',
        attractions: [
            'Kidepo Valley (Uganda\'s remotest park)',
            'Narus Valley',
            'Hot springs at Semuliki',
            'Karimojong manyattas',
            'Batwa pygmy villages',
            'Kanangorok hot springs',
        ],
        activities: [
            'Chartered domestic flights',
            'Game drives (ostriches, cheetahs, wild dogs)',
            'Karimojong cultural encounters',
            'Batwa community visit',
            'Nature walks',
            'Night game drives',
        ],
        tips: [
            'Pack light — luggage limit for charter flights is 15 kg',
            'Bring a warm layer — Kidepo nights can be cool',
            'Cultural experiences are a highlight — engage respectfully',
            'Photography of the Karimojong requires permission',
        ],
        accommodations: [
            { name: 'Apoka Safari Lodge', tier: 'Luxury' },
            { name: 'Semuliki Safari Lodge', tier: 'Luxury' },
            { name: 'Kidepo Savannah Lodge', tier: 'Mid-range' },
        ],
        gettingThere:
            'Chartered flights from Entebbe to Kidepo (2 hours) and Semuliki (1.5 hours), with ground transfers within parks.',
    },

    {
        slug: 'mt-rwenzori-climb',
        title: 'Mt. Rwenzori Climb',
        category: 'uganda',
        categoryLabel: 'Mountain Expedition',
        duration: '10 Days / 9 Nights',
        price: 2000,
        image: '/images/safaris/rwenzori.jpg',
        shortDesc: 'The Mountains of the Moon — snow at the equator.',
        longDesc:
            "These Mountains of the moon offer something for both the experienced mountaineer and the beginner explorer who wants to experience the awe of mountain ranges. Comfortable huts are available at the varying altitudes to welcome climbers with their crew. The lofty Margherita peak which features 'snow at the equator' has always been accessed in 8-10 days. There are also the easier 3-6 day trails taking you through heath and moorland, rainforests, and spectacular views of both Ugandan Savanna to the east and the thick Ituri Rainforest of the Congo.",
        rating: 4.7,
        reviews: 47,
        maxGroup: 10,
        bestTime: 'Dry season (December–February, June–August)',
        location: 'Rwenzori Mountains, Uganda',
        overview:
            'The Rwenzori Mountains — the "Mountains of the Moon" — are one of Africa\'s most extraordinary mountain ranges. Rising to 5,109 meters at Margherita Peak, they are home to glaciers at the equator, bizarre giant heather, and some of the world\'s most unique plant species.\n\n' +
            'This 10-day expedition follows the classic Central Circuit route, ascending through montane forest, bamboo, heather, and alpine zones to reach the summit. Comfortable mountain huts welcome climbers at each stage, with experienced guides, cooks, and porters supporting the journey.',
        attractions: [
            'Margherita Peak (5,109m)',
            'Glaciers at the equator',
            'Giant groundsel and lobelia',
            'Mobuku Valley',
            'Bujuku Lake',
            'Mount Stanley',
        ],
        activities: [
            'High-altitude trekking',
            'Glacier hiking',
            'Mountain wildlife viewing',
            'Photography of unique flora',
            'Camp life at high altitude',
        ],
        tips: [
            'Only attempt if you have good fitness — summit day is 14+ hours',
            'Bring proper cold-weather gear for the glacier section',
            'Acclimatize — altitude sickness is real above 4,000m',
            'Book through Kasese-based guides only — they know the mountain',
        ],
        accommodations: [
            { name: 'Equator Snow Lodge', tier: 'Luxury' },
            { name: 'Rwenzori Mountain Lodge', tier: 'Mid-range' },
            { name: 'Mountain Huts (Mandatory)', tier: 'Budget' },
        ],
        gettingThere:
            'By road: 7 hours from Kampala to Kasese. Flights to Kasese airstrip available (1 hour).',
    },

    {
        slug: 'mt-elgon-climb',
        title: 'Mt. Elgon Climb',
        category: 'uganda',
        categoryLabel: 'Mountain Climb',
        duration: '5 Days / 4 Nights',
        price: 450,
        image: '/images/safaris/mt-elgon.jpg',
        shortDesc: 'A milder climb to the Wagagai Peak near Sipi Falls.',
        longDesc:
            "A milder mountain climbing experience abides in Eastern Uganda near the Sipi Falls. You can access the Wagagai Peak in 3-5 days and enjoy spectacular view of this extinct volcano. Arrive at 'Rose's Last Chance' hotel at the trailhead and after spending a night, you can scale the mountain with your crew of experienced guides, cooks and porters.",
        rating: 4.6,
        reviews: 58,
        maxGroup: 12,
        bestTime: 'Dry season (December–February, June–August)',
        location: 'Mount Elgon, Eastern Uganda',
        overview:
            'Mount Elgon is an extinct shield volcano on the Uganda-Kenya border, with its Wagagai Peak reaching 4,321 meters — the eighth-highest peak in Africa. The climb is gentler than Rwenzori, making it accessible to hikers of moderate fitness.\n\n' +
            'The 5-day Sasa Trail takes you through coffee plantations, montane forest, bamboo, and heather zones, culminating in spectacular views from the caldera. The nearby Sipi Falls add a magnificent finish to your adventure.',
        attractions: [
            'Wagagai Peak (4,321m)',
            'Sipi Falls (three-tiered)',
            'Caldera rim',
            'Hot springs at the summit',
            'Coffee plantations',
            'Endemic birdlife',
        ],
        activities: [
            'Mountain trekking',
            'Sipi Falls abseiling',
            'Coffee plantation tours',
            'Cave exploration',
            'Cultural encounters with Bagisu',
        ],
        tips: [
            'Easier than Rwenzori — good for first-time mountain climbers',
            'Bring warm and waterproof layers',
            'Hire local guides and porters at Budadiri trailhead',
            'Combine with Sipi Falls for a 7-day adventure',
        ],
        accommodations: [
            { name: 'Sipi River Lodge', tier: 'Luxury' },
            { name: 'Lacam Lodge', tier: 'Mid-range' },
            { name: 'Rose\'s Last Chance', tier: 'Budget' },
            { name: 'Mountain Huts', tier: 'Budget' },
        ],
        gettingThere:
            'By road: 4–5 hours from Kampala to Mbale, then to Budadiri trailhead.',
    },

    {
        slug: 'kibale-chimpanzee-tracking',
        title: 'Kibale Chimpanzee Tracking',
        category: 'uganda',
        categoryLabel: 'Primate Safari',
        duration: '3 Days / 2 Nights',
        price: 600,
        image: '/images/safaris/kibale-chimps.jpg',
        shortDesc:
            'Up close and personal with our intelligent cousins in Kibale Forest.',
        longDesc:
            "This three day tour from Kampala takes you to the Uganda Tourism Capital of 'Fort Portal'. Surrounded by sharply crater lakes and evergreen mountainous scenery, the Kibale Forest features several primate species including the endemic red-tailed monkey and the Chimpanzees in their natural habitat. A guided trek in the forest takes you up close and personal to these intelligent cousins in their natural environment. After pictures and a picnic lunch in the forest, you will return to your accommodations near Fort Portal and eventual drive back to Kampala.",
        rating: 4.8,
        reviews: 143,
        maxGroup: 8,
        bestTime: 'Year-round (dry season best for trekking)',
        location: 'Kibale Forest National Park, Uganda',
        overview:
            'Kibale Forest National Park boasts the highest concentration of primates in East Africa — 13 species including chimpanzees, red colobus monkeys, and the endemic Uganda mangabey. The park is a critical research site where Jane Goodall\'s legacy continues through the Kibale Chimpanzee Project.\n\n' +
            'Chimpanzee tracking here is considered among the best in Africa, with a 95%+ success rate of encountering habituated groups. The forest itself is stunning — towering trees, dappled sunlight, and the constant sound of birds and monkeys.',
        attractions: [
            'Chimpanzee communities',
            '13 primate species',
            'Bigodi Wetland Sanctuary',
            'Crater lakes near Fort Portal',
            'Tea plantations',
            'Rwenzori views from the north',
        ],
        activities: [
            'Chimpanzee tracking',
            'Chimpanzee habituation experience',
            'Bigodi swamp walk',
            'Night forest walks',
            'Bird watching (375 species)',
            'Crater lake hike',
        ],
        tips: [
            'Wear long pants, long sleeves, and closed shoes',
            'Carry rain gear — the forest is lush year-round',
            'Book chimp permits in advance during peak season',
            'Binoculars and zoom lenses are essential for photography',
        ],
        accommodations: [
            { name: 'Primate Lodge Kibale', tier: 'Luxury' },
            { name: 'Kyaninga Lodge', tier: 'Luxury' },
            { name: 'Chimp Nest Lodge', tier: 'Mid-range' },
            { name: 'Isunga Lodge', tier: 'Mid-range' },
            { name: 'Chimpanzee Guest House', tier: 'Budget' },
        ],
        gettingThere:
            'By road: 5–6 hours from Kampala via Fort Portal (320 km). Flights to Kasese available (1 hour + drive).',
    },

    {
        slug: 'best-of-uganda-14-days',
        title: '14 Day Best of Uganda Holiday Tour',
        category: 'uganda',
        categoryLabel: 'Grand Tour',
        duration: '14 Days / 13 Nights',
        price: 4500,
        image: '/images/safaris/best-of-uganda.jpg',
        shortDesc:
            "The ultimate two-week blend of city tours and Uganda's greatest national parks.",
        longDesc:
            "This two weeks best of Uganda is a blend of City tours and the National Parks spanning across Uganda. You can opt for a mix of midrange and upmarket or Budget Accommodations. The tour starts from Kampala, to Jinja which is the 'Source of the River Nile'. Later to Lakes Mburo and Bunyonyi via the Ssese Islands in Lake Victoria. The Mountain Gorilla Sanctuary is accessed via Ruhija or Nkuringo or Mgahinga overlooking Uganda, Rwanda and DR Congo. After an encounter with the Mountain Gorillas, we travel to Queen Elizabeth Park via Ishasha, the area re-known for its tree climbing lions. Overnight in Maramagambo Forest or Mweya Lodge at the fringes of the Kazinga Channel and Lake Edward. We visit the Semuliki Park and Hot springs, later track Chimpanzees in Kibale Forest before concluding the tour in Murchison Falls National Park in Northern Uganda. You will enjoy unforgettable game drives, primate tracking, boat cruises, nature walks and hikes, site seeing and bird watching. Later, we return to Kampala for overnight before your onward flight back home from Entebbe.",
        rating: 5.0,
        reviews: 87,
        maxGroup: 10,
        bestTime: 'Year-round (dry seasons best)',
        location: 'Uganda (multiple parks)',
        overview:
            'This 14-day grand tour is the definitive Ugandan safari — a comprehensive journey that captures every facet of the Pearl of Africa. From the urban energy of Kampala to the serene Source of the Nile at Jinja, from mountain gorillas deep in Bwindi to the thunder of Murchison Falls, this is Uganda at its most complete.\n\n' +
            'The itinerary is carefully paced to include game drives, boat cruises, primate tracking, cultural experiences, and scenic drives through some of Africa\'s most beautiful landscapes. Accommodation tiers can be customized to your budget and preferences.',
        attractions: [
            'Bwindi gorillas',
            'Murchison Falls',
            'Queen Elizabeth Park',
            'Kibale chimpanzees',
            'Lake Bunyonyi',
            'Ssese Islands',
            'Source of the Nile',
            'Semuliki hot springs',
        ],
        activities: [
            'Gorilla trekking',
            'Chimpanzee tracking',
            'Game drives in multiple parks',
            'Boat cruises (Nile, Kazinga)',
            'Cultural encounters',
            'City tours (Kampala, Jinja, Fort Portal)',
            'Birding and nature walks',
        ],
        tips: [
            'Book gorilla permits as early as possible',
            'Expect long drives — bring a good book or podcast',
            'Pack layers — climate varies dramatically across the country',
            'Budget for extra activities like gorilla habituation',
            'Purchase travel insurance that covers altitude and trekking',
        ],
        accommodations: [
            { name: 'Mix of Luxury & Mid-range', tier: 'Luxury' },
            { name: 'Mid-range lodges throughout', tier: 'Mid-range' },
            { name: 'Budget-friendly mix available', tier: 'Budget' },
        ],
        gettingThere:
            'Start and end at Entebbe International Airport. All ground transfers included.',
    },

    {
        slug: 'entebbe-ngamba-island',
        title: 'Entebbe & Ngamba Island',
        category: 'uganda',
        categoryLabel: 'Wildlife Day Trip',
        duration: '1 Day',
        price: 200,
        image: '/images/safaris/Ngamba Island.jpg',
        shortDesc:
            'Chimpanzee sanctuary, botanical gardens and the Entebbe Zoo.',
        longDesc:
            "Ngamba Island Chimpanzee Sanctuary takes you close to Uganda's Chimpanzees where you can view and feed them from a viewing platform. Access is by speed boat or traditional boat ride from Entebbe. Entebbe itself is the home of the botanical gardens, Entebbe Airport, and the Uganda Wildlife Education Centre or 'Entebbe Zoo'.",
        rating: 4.7,
        reviews: 134,
        maxGroup: 12,
        bestTime: 'Year-round',
        location: 'Entebbe & Ngamba Island, Uganda',
        overview:
            'Ngamba Island Chimpanzee Sanctuary, located on a 100-acre island in Lake Victoria, is home to over 50 rescued chimpanzees that cannot be released into the wild. The sanctuary provides a safe haven and offers visitors a rare opportunity to observe and even feed these remarkable primates.\n\n' +
            'The nearby Entebbe Botanical Gardens (famous as a filming location for Tarzan movies) and the Uganda Wildlife Education Centre round out a perfect day trip from Kampala — ideal for those with a spare day before or after a longer safari.',
        attractions: [
            'Ngamba Island Chimpanzee Sanctuary',
            'Entebbe Botanical Gardens',
            'Uganda Wildlife Education Centre',
            'Lake Victoria shoreline',
            'Entebbe beaches',
            'Zika Forest',
        ],
        activities: [
            'Chimpanzee feeding experience',
            'Boat ride on Lake Victoria',
            'Bird watching',
            'Botanical garden walks',
            'Wildlife education center visit',
        ],
        tips: [
            'Book chimp viewing in advance — limited daily slots',
            'Morning boats are smoother on the lake',
            'Bring sun protection — little shade on the island',
            'Perfect day trip if you have a late flight from Entebbe',
        ],
        accommodations: [
            { name: 'Lake Victoria Serena', tier: 'Luxury' },
            { name: 'Hotel No. 5', tier: 'Luxury' },
            { name: 'Airport View Hotel', tier: 'Mid-range' },
            { name: 'ViaVia Entebbe', tier: 'Budget' },
        ],
        gettingThere:
            'Boat from Entebbe pier: 45 minutes by speedboat or 90 minutes by traditional boat.',
    },

    {
        slug: 'ssese-islands',
        title: 'Ssese Islands',
        category: 'uganda',
        categoryLabel: 'Beach Holiday',
        duration: '3 Days / 2 Nights',
        price: 300,
        image: '/images/safaris/ssese-islands.jpg',
        shortDesc:
            "White sand beaches on Lake Victoria — a honeymooner's paradise.",
        longDesc:
            "The Ssese Islands in Uganda are the only location where you will relax in the natural white sand beaches. Renown as a honeymooner's paradise, you will need to relax here after a long safari tour of Uganda or simply unwind after hectic business engagements in Kampala. A modern ferry operates at Nakiwogo in Entebbe and Bukakata near Masaka.",
        rating: 4.6,
        reviews: 92,
        maxGroup: 20,
        bestTime: 'Year-round (dry seasons best for beach)',
        location: 'Ssese Islands, Lake Victoria, Uganda',
        overview:
            'The Ssese Islands are an archipelago of 84 islands scattered across the northwest corner of Lake Victoria — a true hidden gem for beach lovers. The largest island, Bugala, offers pristine white sand beaches, tropical forest, and the laid-back vibe of island life.\n\n' +
            'Perfect as a honeymoon escape or post-safari decompression, the Ssese Islands combine the beauty of a tropical beach holiday with the authenticity of rural Uganda. Fresh fish, stunning sunsets, and starry skies make this an unforgettable relaxation destination.',
        attractions: [
            'Bugala Island beaches',
            'Lake Victoria sunsets',
            'Kalangala palm plantations',
            'Fishing villages',
            'Tropical rainforest trails',
            'Birdlife',
        ],
        activities: [
            'Beach relaxation',
            'Sunset boat cruises',
            'Kayaking',
            'Fishing trips',
            'Nature walks',
            'Bicycle tours',
        ],
        tips: [
            'Book ferry tickets in advance during peak season',
            'Bring insect repellent — mosquitoes on the lake',
            'Cash is needed — limited ATMs on the islands',
            'Ferry from Entebbe takes about 3.5 hours',
        ],
        accommodations: [
            { name: 'Pearl Gardens Beach Resort', tier: 'Luxury' },
            { name: 'Brovad Sands Lodge', tier: 'Mid-range' },
            { name: 'Ssese Palm Beach Hotel', tier: 'Mid-range' },
            { name: 'Hornbill Camping Resort', tier: 'Budget' },
        ],
        gettingThere:
            'Ferry from Nakiwogo (Entebbe) or Bukakata (Masaka) — 3.5 to 4 hours. Daily departures.',
    },

    // ═══════════════════════════════════════════════════════
    // OUTBOUND TRAVEL
    // ═══════════════════════════════════════════════════════
    {
        slug: 'mombasa',
        title: 'Mombasa',
        category: 'outbound',
        categoryLabel: 'Beach Holiday',
        duration: '3 Days / 2 Nights',
        price: 350,
        image: '/images/safaris/mombasa.jpg',
        shortDesc:
            'World-class white sand beaches on the Indian Ocean and Swahili culture.',
        longDesc:
            'Relax in the world class white sand beaches on the Indian ocean, be part of the local Swahili culture.',
        rating: 4.7,
        reviews: 178,
        maxGroup: 30,
        bestTime: 'December–March, July–October',
        location: 'Mombasa, Kenya',
        overview:
            'Mombasa is Kenya\'s second-largest city and the cultural heart of the Swahili Coast. Its mix of Arab, Portuguese, Indian, and African influences has created one of Africa\'s most vibrant and historically rich destinations.\n\n' +
            'With stunning Indian Ocean beaches, historic Fort Jesus (UNESCO), the famous Haller Park, and the Tamarind dhow cruise, Mombasa offers the perfect introduction to the East African coast.',
        attractions: [
            'Fort Jesus (UNESCO)',
            'Diani Beach',
            'Haller Park',
            'Old Town Mombasa',
            'Tamarind Dhow',
            'Bamburi Beach',
        ],
        activities: [
            'Beach relaxation',
            'Dhow cruise with dinner',
            'City heritage tour',
            'Haller Park wildlife visit',
            'Snorkeling and diving',
            'Swahili cuisine tasting',
        ],
        tips: [
            'Bring light, breathable clothing — humidity is high',
            'Visit Fort Jesus early morning to avoid crowds',
            'Book dhow cruise in advance — evenings fill up',
            'Moi International Airport is 15 minutes from most hotels',
        ],
        inclusions: [
            'Accommodation',
            'Daily Breakfast',
            'Airport Transfers from Moi International Airport',
            'Haller Park Tour',
            'Mombasa City Tour featuring Fort Jesus',
            'Tamarind Boat Cruise',
        ],
        exclusions: [
            'International flights',
            'Beverages',
            'Tips and personal expenses',
        ],
        gettingThere:
            'Direct flights from Entebbe to Moi International Airport (1.5 hours) — multiple daily departures.',
    },

    {
        slug: 'mombasa-malindi-lamu',
        title: 'Mombasa, Malindi & Lamu',
        category: 'outbound',
        categoryLabel: 'Coastal Escape',
        duration: '6 Days / 5 Nights',
        price: 550,
        image: '/images/safaris/lamu.jpg',
        shortDesc:
            'The East African Swahili Coast — beaches and world class cuisine.',
        longDesc:
            'Explore the East African Swahili Coast with the pristine white sand beaches and world class cuisine.',
        rating: 4.8,
        reviews: 96,
        maxGroup: 20,
        bestTime: 'December–March, July–October',
        location: 'Kenya Coast (Mombasa, Malindi, Lamu)',
        overview:
            'This six-day journey takes you along the entire Kenyan coast — from the bustling port city of Mombasa to the Italian-influenced resort town of Malindi, ending in the UNESCO-listed Swahili town of Lamu where donkeys outnumber cars and time slows down.\n\n' +
            'Expect pristine beaches, world-class seafood, centuries-old architecture, and a cultural immersion few travelers to Africa experience.',
        attractions: [
            'Lamu Old Town (UNESCO)',
            'Dhow sailing to the Lamu archipelago',
            'Malindi Marine Park',
            'Gede Ruins',
            'Watamu beaches',
            'Mombasa Old Town',
        ],
        activities: [
            'Beach hopping',
            'Dhow sailing',
            'Snorkeling and diving',
            'Swahili cultural experiences',
            'Historical tours',
            'Seafood dining',
        ],
        tips: [
            'Book Lamu accommodation in advance — limited options',
            'Bring cash — ATMs are scarce on Lamu',
            'Respect local Swahili culture and dress modestly',
            'The Lamu ferry is slow but scenic',
        ],
        inclusions: [
            'Accommodations',
            'Daily Breakfast',
            'Airport transfers',
            'Local Tours',
        ],
        gettingThere:
            'Fly Entebbe → Mombasa. Internal flights or road transfers between Mombasa, Malindi, and Lamu.',
    },

    {
        slug: 'dubai',
        title: 'Dubai',
        category: 'outbound',
        categoryLabel: 'City & Desert',
        duration: '3 Days / 2 Nights',
        price: 350,
        image: '/images/safaris/dubai.jpg',
        shortDesc: 'Modern architecture, snow in the desert, and the Burj Khalifa.',
        longDesc:
            "Feel the vibe of modern world class architecture and snow in the middle of a desert! A boat cruise on the Dubai Creek or Dubai Marina, Desert Safari, Miracle Garden, Museum of the future, Wild Wadi Water park, Burj Khalifa (world's tallest building), among other activities.",
        rating: 4.8,
        reviews: 267,
        maxGroup: 20,
        bestTime: 'November–March',
        location: 'Dubai, UAE',
        overview:
            'Dubai has transformed from a small pearl-diving village into one of the world\'s most futuristic cities in just 50 years. From the world\'s tallest building (Burj Khalifa) to indoor ski slopes and man-made islands, Dubai consistently pushes the limits of what\'s possible.\n\n' +
            'This 3-day escape covers the highlights — the Burj Khalifa observation deck, a desert safari with dune bashing, a dhow cruise on Dubai Creek, and time to explore the opulent malls and traditional souks.',
        attractions: [
            'Burj Khalifa (world\'s tallest building)',
            'Dubai Mall and Fountain Show',
            'Palm Jumeirah',
            'Dubai Creek and souks',
            'Desert Safari dunes',
            'Museum of the Future',
        ],
        activities: [
            'Burj Khalifa At The Top observation deck',
            'Desert safari with BBQ dinner',
            'Dhow cruise dinner',
            'Dubai Mall shopping',
            'Dubai Frame visit',
            'Wild Wadi Waterpark',
        ],
        tips: [
            'Book Burj Khalifa tickets online — cheaper than at the door',
            'Dress modestly in public areas (shoulders and knees covered)',
            'The metro is fast and air-conditioned — use it',
            'Friday is the weekend — many shops open late',
        ],
        gettingThere:
            'Direct flights Entebbe → Dubai (5 hours). Dubai International Airport is the world\'s busiest.',
    },

    {
        slug: 'dubai-abu-dhabi',
        title: 'Dubai & Abu Dhabi',
        category: 'outbound',
        categoryLabel: 'City Combo',
        duration: '4 Days / 3 Nights',
        price: 500,
        image: '/images/safaris/abu-dhabi.jpg',
        shortDesc:
            'Ferrari World, Warner Brothers, Gold Souk and desert safari.',
        longDesc:
            'Visit the Ferrari World, Warner Brothers, Desert Safari, Gold Souk, Creek boat cruise, etc.',
        rating: 4.8,
        reviews: 187,
        maxGroup: 20,
        bestTime: 'November–March',
        location: 'Dubai & Abu Dhabi, UAE',
        overview:
            'This combined Dubai and Abu Dhabi tour gives you the best of the UAE in four days. Dubai offers the glitz, glamour, and futuristic skyline; Abu Dhabi is the refined capital with cultural landmarks like the Sheikh Zayed Grand Mosque and world-class theme parks.\n\n' +
            'Perfect for families with kids (Ferrari World, Warner Bros) and adults alike (Grand Mosque, Louvre Abu Dhabi).',
        attractions: [
            'Sheikh Zayed Grand Mosque',
            'Ferrari World Abu Dhabi',
            'Warner Bros. World',
            'Louvre Abu Dhabi',
            'Burj Khalifa',
            'Yas Island',
        ],
        activities: [
            'Theme park visits',
            'Grand Mosque tour',
            'Desert safari',
            'Dhow cruise',
            'Gold Souk shopping',
            'Ferrari World rides',
        ],
        tips: [
            'Book theme park tickets online in advance',
            'Dress modestly for the Grand Mosque (women must cover hair)',
            'Abu Dhabi is ~1.5 hours from Dubai by car',
            'Skip Fridays for the mosque — it\'s busiest',
        ],
        gettingThere:
            'Fly Entebbe → Dubai (5 hours). Intercity transfers between Dubai and Abu Dhabi by luxury bus or private car.',
    },

    {
        slug: 'seychelles',
        title: 'Seychelles',
        category: 'outbound',
        categoryLabel: 'Beach Holiday',
        duration: '4 Days / 3 Nights',
        price: 350,
        image: '/images/safaris/seychelles.jpg',
        shortDesc:
            'City tour of Mahe Island and white sand honeymoon beaches.',
        longDesc:
            'Take a city tour of Mahe Island and relax on the white sand beaches in this world renown honeymoon destination.',
        rating: 4.9,
        reviews: 214,
        maxGroup: 20,
        bestTime: 'April–May, October–November',
        location: 'Mahé, Seychelles',
        overview:
            'The Seychelles is a 115-island archipelago in the Indian Ocean, famous for its granite boulders, palm-fringed beaches, and pristine coral reefs. Often ranked among the world\'s best honeymoon destinations, the country is a haven of natural beauty.\n\n' +
            'This 4-day Mahé Island escape combines a guided island tour with ample beach time, giving you a taste of the Seychelles\' unique Creole culture and world-class beaches.',
        attractions: [
            'Beau Vallon Beach',
            'Victoria (capital) market',
            'Morne Seychellois National Park',
            'Anse Intendance',
            'Ste Anne Marine Park',
            'Eden Island',
        ],
        activities: [
            'Beach relaxation',
            'Snorkeling and diving',
            'Island hopping tours',
            'Creole cuisine tasting',
            'Nature trails',
            'Sunset cruises',
        ],
        tips: [
            'Rent a car to explore the island at your own pace',
            'Beaches are public — all are free to access',
            'Bring reef-safe sunscreen',
            'April–May and Oct–Nov have the calmest seas',
        ],
        gettingThere:
            'Flights Entebbe → Seychelles (via Nairobi or Addis Ababa) — 6–8 hours total.',
    },

    {
        slug: 'seychelles-dubai',
        title: 'Seychelles & Dubai',
        category: 'outbound',
        categoryLabel: 'Multi-Country',
        duration: '6 Days / 5 Nights',
        price: 1000,
        image: '/images/safaris/seychelles-dubai.jpg',
        shortDesc:
            'Shopping in Dubai and relaxing on Mahe beaches via Addis Ababa.',
        longDesc:
            'This special tour connecting Seychelles and Dubai via Bole Airport in Addis Ababa offers shopping opportunities in Dubai and the glitzy activities such as Dubai Ain, Dolphinarium, Helicopter Tour plus a relaxing escape on the Mahe white sand beaches in Seychelles.',
        rating: 4.9,
        reviews: 78,
        maxGroup: 20,
        bestTime: 'November–March, April–May',
        location: 'Dubai & Seychelles',
        overview:
            'This unique 6-day combination gives you the best of both worlds — Dubai\'s urban excitement and Seychelles\' pristine natural beauty — conveniently connected via Addis Ababa.\n\n' +
            'In Dubai, enjoy shopping, the Ain Dubai observation wheel, helicopter tours, and the dolphinarium. In Seychelles, unwind on Mahé\'s white sand beaches and explore the island\'s unique Creole culture.',
        attractions: [
            'Burj Khalifa & Dubai Mall',
            'Ain Dubai (world\'s largest observation wheel)',
            'Dubai Dolphinarium',
            'Mahé beaches',
            'Victoria Market, Seychelles',
            'Morne Seychellois National Park',
        ],
        activities: [
            'City tours in Dubai',
            'Helicopter tour over Dubai',
            'Beach relaxation in Seychelles',
            'Shopping',
            'Dhow cruise',
            'Island hopping',
        ],
        tips: [
            'Two very different climates — pack for both',
            'Visa requirements differ for UAE and Seychelles',
            'Book connecting flights early for best fares',
            'Allow buffer time for the Addis Ababa connection',
        ],
        gettingThere:
            'Flights Entebbe → Addis Ababa → Dubai → Seychelles (multi-city itinerary).',
    },
];

export const getSafariBySlug = (slug: string) => safaris.find((s) => s.slug === slug);