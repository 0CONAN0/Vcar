//--- Data Base ---\\
const cars = [
    // SUVs
    {
        id: 1,
        brand: 'Toyota',
        category: 'SUV',
        model: 'RAV4',
        year: 2021,
        review: 'The Toyota RAV4 is a compact SUV known for its reliability and efficiency.',
        image: 'images/toyota_rav4_2021.jpg',
    },
    {
        id: 2,
        brand: 'Honda',
        category: 'SUV',
        model: 'CR-V',
        year: 2021,
        review: 'The Honda CR-V offers a spacious interior and smooth ride.',
        image: 'images/honda_crv_2021.jpg',
    },
    {
        id: 3,
        brand: 'Ford',
        category: 'SUV',
        model: 'Explorer',
        year: 2021,
        review: 'The Ford Explorer is a versatile SUV with ample cargo space.',
        image: 'images/ford_explorer_2021.jpg',
    },
    {
        id: 4,
        brand: 'Jeep',
        category: 'SUV',
        model: 'Grand Cherokee',
        year: 2021,
        review: 'A rugged SUV with off-road capabilities.',
        image: 'images/jeep_grand_cherokee_2021.jpg',
    },
    {
        id: 5,
        brand: 'Subaru',
        category: 'SUV',
        model: 'Forester',
        year: 2021,
        review: 'Known for its safety features and all-wheel drive.',
        image: 'images/subaru_forester_2021.jpg',
    },
    {
        id: 6,
        brand: 'Kia',
        category: 'SUV',
        model: 'Sorento',
        year: 2021,
        review: 'The Kia Sorento is a midsize SUV offering comfort and value.',
        image: 'images/kia_sorento_2021.jpg',
    },
    {
        id: 7,
        brand: 'Hyundai',
        category: 'SUV',
        model: 'Tucson',
        year: 2021,
        review: 'The Hyundai Tucson features modern styling and a smooth ride.',
        image: 'images/hyundai_tucson_2021.jpg',
    },
    {
        id: 8,
        brand: 'Mazda',
        category: 'SUV',
        model: 'CX-5',
        year: 2021,
        review: 'The Mazda CX-5 offers sporty handling and a premium interior.',
        image: 'images/mazda_cx5_2021.jpg',
    },
    {
        id: 9,
        brand: 'Lamborghini',
        category: 'SUV',
        model: 'Urus',
        year: 2021,
        review: 'A super SUV combining performance and practicality.',
        image: 'images/lamborghini_urus_2021.jpg',
    },
    {
        id: 10,
        brand: 'Bentley',
        category: 'SUV',
        model: 'Bentayga',
        year: 2021,
        review: 'A luxury SUV with bespoke craftsmanship.',
        image: 'images/Bentley_Bentayga_V8_(FL)_IMG_0005.jpg',
    },
    {
        id: 11,
        brand: 'Rolls-Royce',
        category: 'SUV',
        model: 'Cullinan',
        year: 2021,
        review: 'An ultra-luxury SUV with unparalleled comfort.',
        image: 'images/rollsroyce_cullinan_2021.jpg',
    },
    // Sedans
    {
        id: 12,
        brand: 'BMW',
        category: 'Sedan',
        model: '3 Series',
        year: 2021,
        review: 'The BMW 3 Series combines performance and luxury in a compact sedan.',
        image: 'images/bmw_3series_2021.jpg',
    },
    {
        id: 13,
        brand: 'Mercedes-Benz',
        category: 'Sedan',
        model: 'C-Class',
        year: 2021,
        review: 'The Mercedes-Benz C-Class offers elegance and cutting-edge technology.',
        image: 'images/mercedes_cclass_2021.jpg',
    },
    {
        id: 14,
        brand: 'Audi',
        category: 'Sedan',
        model: 'A4',
        year: 2021,
        review: 'The Audi A4 is a premium sedan with a refined interior.',
        image: 'images/audi_a4_2021.jpg',
    },
    {
        id: 15,
        brand: 'Lexus',
        category: 'Sedan',
        model: 'ES',
        year: 2021,
        review: 'A luxury sedan offering comfort and reliability.',
        image: 'images/lexus_es_2021.jpg',
    },
    {
        id: 16,
        brand: 'Infiniti',
        category: 'Sedan',
        model: 'Q50',
        year: 2021,
        review: 'A performance-oriented luxury sedan.',
        image: 'images/infiniti_q50_2021.jpg',
    },
    {
        id: 17,
        brand: 'Acura',
        category: 'Sedan',
        model: 'TLX',
        year: 2021,
        review: 'The Acura TLX blends performance with luxury features.',
        image: 'images/acura_tlx_2021.jpg',
    },
    {
        id: 18,
        brand: 'Cadillac',
        category: 'Sedan',
        model: 'CT5',
        year: 2021,
        review: 'The Cadillac CT5 offers a smooth ride and modern amenities.',
        image: 'images/cadillac_ct5_2021.jpg',
    },
    {
        id: 19,
        brand: 'Genesis',
        category: 'Sedan',
        model: 'G70',
        year: 2021,
        review: 'The Genesis G70 is a luxury sedan with sporty dynamics.',
        image: 'images/genesis_g70_2021.jpg',
    },
    // Trucks
    {
        id: 20,
        brand: 'Ford',
        category: 'Truck',
        model: 'F-150',
        year: 2021,
        review: 'The Ford F-150 is a powerful truck with impressive towing capabilities.',
        image: 'images/ford_f150_2021.jpg',
    },
    {
        id: 21,
        brand: 'Chevrolet',
        category: 'Truck',
        model: 'Silverado',
        year: 2021,
        review: 'The Chevrolet Silverado is known for its durability and strength.',
        image: 'images/chevrolet_silverado_2021.jpg',
    },
    {
        id: 22,
        brand: 'RAM',
        category: 'Truck',
        model: '1500',
        year: 2021,
        review: 'The RAM 1500 offers a comfortable ride and advanced features.',
        image: 'images/ram_1500_2021.jpg',
    },
    {
        id: 23,
        brand: 'Toyota',
        category: 'Truck',
        model: 'Tundra',
        year: 2021,
        review: 'A full-size pickup truck with proven reliability.',
        image: 'images/toyota_tundra_2021.jpg',
    },
    {
        id: 24,
        brand: 'GMC',
        category: 'Truck',
        model: 'Sierra',
        year: 2021,
        review: 'Combines power with a touch of luxury.',
        image: 'images/gmc_sierra_2021.jpg',
    },
    {
        id: 25,
        brand: 'Nissan',
        category: 'Truck',
        model: 'Titan',
        year: 2021,
        review: 'The Nissan Titan offers a strong V8 engine and roomy cabin.',
        image: 'images/nissan_titan_2021.jpg',
    },
    {
        id: 26,
        brand: 'Chevrolet',
        category: 'Truck',
        model: 'Colorado',
        year: 2021,
        review: 'A midsize truck with versatile capabilities.',
        image: 'images/chevrolet_colorado_2021.jpg',
    },
    {
        id: 27,
        brand: 'Honda',
        category: 'Truck',
        model: 'Ridgeline',
        year: 2021,
        review: 'The Honda Ridgeline offers a car-like ride and innovative features.',
        image: 'images/honda_ridgeline_2021.jpg',
    },
    // Supercars
    {
        id: 28,
        brand: 'Ferrari',
        category: 'Supercar',
        model: '488 GTB',
        year: 2019,
        review: 'The Ferrari 488 GTB delivers exhilarating performance and stunning design.',
        image: 'images/ferrari_488gtb_2019.jpg',
    },
    {
        id: 29,
        brand: 'Lamborghini',
        category: 'Supercar',
        model: 'Huracán',
        year: 2021,
        review: 'The Lamborghini Huracán combines power with cutting-edge technology.',
        image: 'images/lamborghini_huracan_2021.jpg',
    },
    {
        id: 30,
        brand: 'McLaren',
        category: 'Supercar',
        model: '720S',
        year: 2021,
        review: 'The McLaren 720S is a marvel of engineering and speed.',
        image: 'images/mclaren_720s_2021.jpg',
    },
    {
        id: 31,
        brand: 'Aston Martin',
        category: 'Supercar',
        model: 'DB11',
        year: 2021,
        review: 'A grand tourer with timeless elegance.',
        image: 'images/astonmartin_db11_2021.jpg',
    },
    {
        id: 32,
        brand: 'Ferrari',
        category: 'Supercar',
        model: 'Portofino',
        year: 2021,
        review: 'An open-top sports car with Ferrari performance.',
        image: 'images/ferrari_portofino_2021.jpg',
    },
    {
        id: 33,
        brand: 'Lamborghini',
        category: 'Supercar',
        model: 'Aventador',
        year: 2021,
        review: 'The Aventador is a flagship model with a V12 engine.',
        image: 'images/lamborghini_aventador_2021.jpg',
    },
    {
        id: 34,
        brand: 'McLaren',
        category: 'Supercar',
        model: '600LT',
        year: 2020,
        review: 'A lightweight supercar with track-focused performance.',
        image: 'images/mclaren_600lt_2020.jpg',
    },
    {
        id: 35,
        brand: 'Ferrari',
        category: 'Supercar',
        model: 'F8 Tributo',
        year: 2021,
        review: 'An homage to Ferrari’s V8 engines with impressive power.',
        image: 'images/ferrari_f8tributo_2021.jpg',
    },
    // Hypercars
    {
        id: 36,
        brand: 'Bugatti',
        category: 'Hypercar',
        model: 'Chiron',
        year: 2021,
        review: 'The Bugatti Chiron sets the standard for hypercar performance.',
        image: 'images/bugatti_chiron_2021.jpg',
    },
    {
        id: 37,
        brand: 'Koenigsegg',
        category: 'Hypercar',
        model: 'Agera RS',
        year: 2017,
        review: 'Combines extreme speed with advanced technology.',
        image: 'images/koenigsegg_agerars_2017.jpg',
    },
    {
        id: 38,
        brand: 'Pagani',
        category: 'Hypercar',
        model: 'Huayra',
        year: 2017,
        review: 'A work of art, both in design and performance.',
        image: 'images/pagani_huayra_2017.jpg',
    },
    {
        id: 39,
        brand: 'McLaren',
        category: 'Hypercar',
        model: 'Speedtail',
        year: 2020,
        review: 'McLaren’s fastest car, blending art and speed.',
        image: 'images/mclaren_speedtail_2020.jpg',
    },
    {
        id: 40,
        brand: 'Lamborghini',
        category: 'Hypercar',
        model: 'Sian',
        year: 2021,
        review: 'A hybrid hypercar with futuristic design.',
        image: 'images/lamborghini_sian_2021.jpg',
    },
    {
        id: 41,
        brand: 'Rimac',
        category: 'Hypercar',
        model: 'Nevera',
        year: 2021,
        review: 'An all-electric hypercar with groundbreaking speed.',
        image: 'images/rimac_nevera_2021.jpg',
    },
    {
        id: 42,
        brand: 'Apollo',
        category: 'Hypercar',
        model: 'Intensa Emozione',
        year: 2019,
        review: 'A hypercar focused on delivering pure driving emotion.',
        image: 'images/apollo_ie_2019.jpg',
    },
    {
        id: 43,
        brand: 'Koenigsegg',
        category: 'Hypercar',
        model: 'Jesko',
        year: 2021,
        review: 'Designed for extreme track performance and high speeds.',
        image: 'images/koenigsegg_jesko_2021.jpg',
    },
    {
        id: 44,
        brand: 'Bugatti',
        category: 'Hypercar',
        model: 'Veyron',
        year: 2015,
        review: 'A landmark in automotive engineering and speed.',
        image: 'images/bugatti_veyron_2015.jpg',
    },
    {
        id: 45,
        brand: 'Pagani',
        category: 'Hypercar',
        model: 'Zonda',
        year: 2017,
        review: 'An exotic car with unique styling and performance.',
        image: 'images/pagani_zonda_2017.jpg',
    },
    {
        id: 46,
        brand: 'SSC',
        category: 'Hypercar',
        model: 'Tuatara',
        year: 2021,
        review: 'A hypercar aiming for top speed records.',
        image: 'images/ssc_tuatara_2021.jpg',
    },
    {
        id: 47,
        brand: 'Lamborghini',
        category: 'Hypercar',
        model: 'Veneno',
        year: 2014,
        review: 'A limited-production hypercar with extreme design.',
        image: 'images/lamborghini_veneno_2014.jpg',
    },
    {
        id: 48,
        brand: 'Koenigsegg',
        category: 'Hypercar',
        model: 'Regera',
        year: 2019,
        review: 'Features a hybrid powertrain with immense power.',
        image: 'images/koenigsegg_regera_2019.jpg',
    },
    // Electric Cars
    {
        id: 49,
        brand: 'Tesla',
        category: 'Electric',
        model: 'Model S',
        year: 2021,
        review: 'Offers impressive range and cutting-edge technology.',
        image: 'images/tesla_models_2021.jpg',
    },
    {
        id: 50,
        brand: 'Nissan',
        category: 'Electric',
        model: 'Leaf',
        year: 2021,
        review: 'An affordable electric car with practical range.',
        image: 'images/nissan_leaf_2021.jpg',
    },
    {
        id: 51,
        brand: 'Chevrolet',
        category: 'Electric',
        model: 'Bolt',
        year: 2021,
        review: 'Provides a long electric range in a compact package.',
        image: 'images/chevrolet_bolt_2021.jpg',
    },
    {
        id: 52,
        brand: 'Porsche',
        category: 'Electric',
        model: 'Taycan',
        year: 2021,
        review: 'An electric sports car with Porsche DNA.',
        image: 'images/porsche_taycan_2021.jpg',
    },
    {
        id: 53,
        brand: 'Audi',
        category: 'Electric',
        model: 'e-tron',
        year: 2021,
        review: 'An electric SUV with luxury and performance.',
        image: 'images/audi_etron_2021.jpg',
    },
    {
        id: 54,
        brand: 'Jaguar',
        category: 'Electric',
        model: 'I-PACE',
        year: 2021,
        review: 'Jaguar’s first all-electric performance SUV.',
        image: 'images/jaguar_ipace_2021.jpg',
    },
    {
        id: 55,
        brand: 'BMW',
        category: 'Electric',
        model: 'i3',
        year: 2021,
        review: 'A compact electric car with a distinctive design.',
        image: 'images/bmw_i3_2021.jpg',
    },
    {
        id: 56,
        brand: 'Hyundai',
        category: 'Electric',
        model: 'Kona Electric',
        year: 2021,
        review: 'An electric SUV with impressive range and features.',
        image: 'images/hyundai_konaelectric_2021.jpg',
    },
    // Sports Cars
    {
        id: 57,
        brand: 'Porsche',
        category: 'Sports Car',
        model: '911',
        year: 2021,
        review: 'An iconic sports car with exceptional handling.',
        image: 'images/porsche_911_2021.jpg',
    },
    {
        id: 58,
        brand: 'Chevrolet',
        category: 'Sports Car',
        model: 'Corvette',
        year: 2021,
        review: 'Offers supercar performance at a competitive price.',
        image: 'images/chevrolet_corvette_2021.jpg',
    },
    {
        id: 59,
        brand: 'Ford',
        category: 'Sports Car',
        model: 'Mustang',
        year: 2021,
        review: 'A classic American muscle car with modern features.',
        image: 'images/ford_mustang_2021.jpg',
    },
    {
        id: 60,
        brand: 'Nissan',
        category: 'Sports Car',
        model: 'GT-R',
        year: 2021,
        review: 'Known as "Godzilla" for its track prowess.',
        image: 'images/nissan_gtr_2021.jpg',
    },
    {
        id: 61,
        brand: 'Toyota',
        category: 'Sports Car',
        model: 'Supra',
        year: 2021,
        review: 'A modern revival of a legendary sports car.',
        image: 'images/toyota_supra_2021.jpg',
    },
    {
        id: 62,
        brand: 'BMW',
        category: 'Sports Car',
        model: 'Z4',
        year: 2021,
        review: 'A stylish roadster with dynamic performance.',
        image: 'images/bmw_z4_2021.jpg',
    },
    {
        id: 63,
        brand: 'Chevrolet',
        category: 'Sports Car',
        model: 'Camaro',
        year: 2021,
        review: 'An American muscle car with modern tech.',
        image: 'images/chevrolet_camaro_2021.jpg',
    },
    {
        id: 64,
        brand: 'Audi',
        category: 'Sports Car',
        model: 'R8',
        year: 2021,
        review: 'A supercar with daily drivability.',
        image: 'images/audi_r8_2021.jpg',
    },
    // Luxury Cars
    {
        id: 65,
        brand: 'Rolls-Royce',
        category: 'Luxury',
        model: 'Phantom',
        year: 2021,
        review: 'The pinnacle of luxury and craftsmanship.',
        image: 'images/rollsroyce_phantom_2021.jpg',
    },
    {
        id: 66,
        brand: 'Bentley',
        category: 'Luxury',
        model: 'Continental GT',
        year: 2021,
        review: 'Combines luxury with exhilarating performance.',
        image: 'images/bentley_continentalgt_2021.jpg',
    },
    {
        id: 67,
        brand: 'Mercedes-Benz',
        category: 'Luxury',
        model: 'S-Class',
        year: 2021,
        review: 'Renowned for its luxury and advanced technology.',
        image: 'images/mercedes_sclass_2021.jpg',
    },
    {
        id: 68,
        brand: 'Jaguar',
        category: 'Luxury',
        model: 'XJ',
        year: 2019,
        review: 'A full-size luxury sedan with British elegance.',
        image: 'images/jaguar_xj_2019.jpg',
    },
    {
        id: 69,
        brand: 'Maserati',
        category: 'Luxury',
        model: 'Quattroporte',
        year: 2021,
        review: 'Italian luxury with sporty performance.',
        image: 'images/maserati_quattroporte_2021.jpg',
    },
    {
        id: 70,
        brand: 'Genesis',
        category: 'Luxury',
        model: 'G90',
        year: 2021,
        review: 'Offers luxury features at a competitive price.',
        image: 'images/genesis_g90_2021.jpg',
    },
    {
        id: 71,
        brand: 'Bentley',
        category: 'Luxury',
        model: 'Flying Spur',
        year: 2021,
        review: 'A luxury sedan with exceptional craftsmanship.',
        image: 'images/bentley_flyingspur_2021.jpg',
    },
    {
        id: 72,
        brand: 'Rolls-Royce',
        category: 'Luxury',
        model: 'Ghost',
        year: 2021,
        review: 'Combines luxury with a modern aesthetic.',
        image: 'images/rollsroyce_ghost_2021.jpg',
    },
    // Compact Cars
    {
        id: 73,
        brand: 'Honda',
        category: 'Compact',
        model: 'Civic',
        year: 2021,
        review: 'Offers reliability and fuel efficiency in a compact package.',
        image: 'images/honda_civic_2021.jpg',
    },
    {
        id: 74,
        brand: 'Toyota',
        category: 'Compact',
        model: 'Corolla',
        year: 2021,
        review: 'Known for its dependability and value.',
        image: 'images/toyota_corolla_2021.jpg',
    },
    {
        id: 75,
        brand: 'Volkswagen',
        category: 'Compact',
        model: 'Golf',
        year: 2021,
        review: 'Combines practicality with a fun driving experience.',
        image: 'images/volkswagen_golf_2021.jpg',
    },
    {
        id: 76,
        brand: 'Ford',
        category: 'Compact',
        model: 'Focus',
        year: 2018,
        review: 'A compact car with agile handling.',
        image: 'images/ford_focus_2018.jpg',
    },
    {
        id: 77,
        brand: 'Hyundai',
        category: 'Compact',
        model: 'Elantra',
        year: 2021,
        review: 'Offers value and a comfortable ride.',
        image: 'images/hyundai_elantra_2021.jpg',
    },
    {
        id: 78,
        brand: 'Kia',
        category: 'Compact',
        model: 'Forte',
        year: 2021,
        review: 'A stylish compact car with modern features.',
        image: 'images/kia_forte_2021.jpg',
    },
    {
        id: 79,
        brand: 'Mazda',
        category: 'Compact',
        model: 'Mazda3',
        year: 2021,
        review: 'Known for its sporty handling and upscale interior.',
        image: 'images/mazda_mazda3_2021.jpg',
    },
    {
        id: 80,
        brand: 'Subaru',
        category: 'Compact',
        model: 'Impreza',
        year: 2021,
        review: 'Features all-wheel drive and a practical design.',
        image: 'images/subaru_impreza_2021.jpg',
    },
    // Convertibles
    {
        id: 81,
        brand: 'Mazda',
        category: 'Convertible',
        model: 'MX-5 Miata',
        year: 2021,
        review: 'A lightweight roadster with excellent handling.',
        image: 'images/mazda_miata_2021.jpg',
    },
    {
        id: 82,
        brand: 'BMW',
        category: 'Convertible',
        model: '4 Series Convertible',
        year: 2021,
        review: 'Combines open-top driving with luxury amenities.',
        image: 'images/bmw_4series_convertible_2021.jpg',
    },
    {
        id: 83,
        brand: 'Mercedes-Benz',
        category: 'Convertible',
        model: 'SL-Class',
        year: 2020,
        review: 'A luxury convertible with advanced technology.',
        image: 'images/mercedes_slclass_2020.jpg',
    },
    {
        id: 84,
        brand: 'Audi',
        category: 'Convertible',
        model: 'A5 Cabriolet',
        year: 2021,
        review: 'An elegant convertible with a refined interior.',
        image: 'images/audi_a5_cabriolet_2021.jpg',
    },
    {
        id: 85,
        brand: 'Jaguar',
        category: 'Convertible',
        model: 'F-Type',
        year: 2021,
        review: 'A sports car with distinctive styling.',
        image: 'images/jaguar_ftype_2021.jpg',
    },
    // Hybrid Cars
    {
        id: 86,
        brand: 'Toyota',
        category: 'Hybrid',
        model: 'Prius',
        year: 2021,
        review: 'Pioneering hybrid technology with exceptional efficiency.',
        image: 'images/toyota_prius_2021.jpg',
    },
    {
        id: 87,
        brand: 'Honda',
        category: 'Hybrid',
        model: 'Accord Hybrid',
        year: 2021,
        review: 'Combines efficiency with a spacious interior.',
        image: 'images/honda_accord_hybrid_2021.jpg',
    },
    {
        id: 88,
        brand: 'Ford',
        category: 'Hybrid',
        model: 'Fusion Hybrid',
        year: 2020,
        review: 'An efficient sedan with modern features.',
        image: 'images/ford_fusion_hybrid_2020.jpg',
    },
    {
        id: 89,
        brand: 'Hyundai',
        category: 'Hybrid',
        model: 'Ioniq Hybrid',
        year: 2021,
        review: 'Offers high fuel economy and a comfortable ride.',
        image: 'images/hyundai_ioniq_hybrid_2021.jpg',
    },
    {
        id: 90,
        brand: 'Lexus',
        category: 'Hybrid',
        model: 'RX Hybrid',
        year: 2021,
        review: 'A luxury SUV with hybrid efficiency.',
        image: 'images/lexus_rx_hybrid_2021.jpg',
    },
    // Minivans
    {
        id: 91,
        brand: 'Honda',
        category: 'Minivan',
        model: 'Odyssey',
        year: 2021,
        review: 'A family-friendly minivan with versatile seating.',
        image: 'images/honda_odyssey_2021.jpg',
    },
    {
        id: 92,
        brand: 'Toyota',
        category: 'Minivan',
        model: 'Sienna',
        year: 2021,
        review: 'Offers all-wheel drive and ample cargo space.',
        image: 'images/toyota_sienna_2021.jpg',
    },
    {
        id: 93,
        brand: 'Chrysler',
        category: 'Minivan',
        model: 'Pacifica',
        year: 2021,
        review: 'Features a hybrid option and modern amenities.',
        image: 'images/chrysler_pacifica_2021.jpg',
    },
    {
        id: 94,
        brand: 'Kia',
        category: 'Minivan',
        model: 'Sedona',
        year: 2021,
        review: 'Combines practicality with a comfortable interior.',
        image: 'images/kia_sedona_2021.jpg',
    },
    {
        id: 95,
        brand: 'Dodge',
        category: 'Minivan',
        model: 'Grand Caravan',
        year: 2020,
        review: 'An affordable minivan with flexible seating.',
        image: 'images/dodge_grandcaravan_2020.jpg',
    },
    // Electric Supercars/Hypercars
    {
        id: 96,
        brand: 'Tesla',
        category: 'Electric Supercar',
        model: 'Roadster',
        year: 2022,
        review: 'Promises record-breaking acceleration and range.',
        image: 'images/tesla_roadster_2022.jpg',
    },
    {
        id: 97,
        brand: 'Aspark',
        category: 'Electric Hypercar',
        model: 'Owl',
        year: 2020,
        review: 'An electric hypercar with astonishing acceleration.',
        image: 'images/aspark_owl_2020.jpg',
    },
    {
        id: 98,
        brand: 'NIO',
        category: 'Electric Hypercar',
        model: 'EP9',
        year: 2016,
        review: 'Set records for electric vehicles on various tracks.',
        image: 'images/nio_ep9_2016.jpg',
    },
    {
        id: 99,
        brand: 'Lotus',
        category: 'Electric Hypercar',
        model: 'Evija',
        year: 2021,
        review: 'A British electric hypercar with striking design.',
        image: 'images/lotus_evija_2021.jpg',
    },
    {
        id: 100,
        brand: 'Pininfarina',
        category: 'Electric Hypercar',
        model: 'Battista',
        year: 2021,
        review: 'Combines Italian design with electric power.',
        image: 'images/pininfarina_battista_2021.jpg',
    },
];
// --------------- \\
// Function to display cars
function displayCars(carsToDisplay) {
    const carContainer = document.getElementById('carContainer');
    carContainer.innerHTML = ''; // Clear previous cars

    if (carsToDisplay.length === 0) {
        carContainer.innerHTML = '<p class="text-center">No cars found.</p>';
        return;
    }

    carsToDisplay.forEach(car => {
        const carCard = document.createElement('div');
        carCard.className = 'col-md-4 mb-4';

        carCard.innerHTML = `
            <div class="card h-100">
                <img src="${car.image}" class="card-img-top" alt="${car.model}">
                <div class="card-body">
                    <h5 class="card-title">${car.brand} ${car.model}</h5>
                    <p class="card-text">${car.review}</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Year: ${car.year}</small>
                </div>
            </div>
        `;

        carContainer.appendChild(carCard);
    });
}

// Function to filter cars based on search, body type, and brand
function filterCars() {
    const searchInput = document.getElementById('form-control').value.toLowerCase();
    const selectedBodyType = document.querySelector('.body-type-active')?.dataset.type.toLowerCase() || '';
    const selectedBrand = document.querySelector('.brand-active')?.dataset.brand.toLowerCase() || '';

    let filteredCars = cars;

    if (searchInput) {
        filteredCars = filteredCars.filter(car => 
            car.brand.toLowerCase().includes(searchInput) ||
            car.model.toLowerCase().includes(searchInput)
        );
    }

    if (selectedBodyType) {
        filteredCars = filteredCars.filter(car => car.category.toLowerCase() === selectedBodyType);
    }

    if (selectedBrand) {
        filteredCars = filteredCars.filter(car => car.brand.toLowerCase() === selectedBrand);
    }

    displayCars(filteredCars);
}

// Event listener for search form
document.querySelector('form[role="search"]').addEventListener('submit', function(e) {
    e.preventDefault();
    // Remove active class from body type and brand selection
    document.querySelectorAll('.body-type-link').forEach(link => link.classList.remove('body-type-active'));
    document.querySelectorAll('.brandLogoImages').forEach(img => img.classList.remove('brand-active'));
    filterCars();
});

// Event listeners for body type links
document.querySelectorAll('.body-type-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        // Toggle active class
        document.querySelectorAll('.body-type-link').forEach(l => l.classList.remove('body-type-active'));
        this.classList.add('body-type-active');

        // Clear search input and brand selection
        document.getElementById('form-control').value = '';
        document.querySelectorAll('.brandLogoImages').forEach(img => img.classList.remove('brand-active'));

        filterCars();
    });
});

// Event listeners for brand logos
document.querySelectorAll('.brandLogoImages').forEach(img => {
    img.addEventListener('click', function(e) {
        e.preventDefault();
        // Toggle active class
        document.querySelectorAll('.brandLogoImages').forEach(i => i.classList.remove('brand-active'));
        this.classList.add('brand-active');

        // Clear search input and body type selection
        document.getElementById('form-control').value = '';
        document.querySelectorAll('.body-type-link').forEach(link => link.classList.remove('body-type-active'));

        filterCars();
    });
});

// Toggle View More Function
function toggleViewMore() {
    const hiddenLogos = document.querySelectorAll('.hidden-logos');
    const viewMoreToggle = document.getElementById('view-more-toggle');
    
    hiddenLogos.forEach(logo => {
        if (logo.style.display === 'none' || logo.style.display === '') {
            logo.style.display = 'flex';
        } else {
            logo.style.display = 'none';
        }
    });

    if (viewMoreToggle.textContent === "View Less") {
        viewMoreToggle.textContent = "View All";
    } else {
        viewMoreToggle.textContent = "View Less";
    }
}

// Initialize display on page load
document.addEventListener('DOMContentLoaded', function() {
    displayCars(cars);
});