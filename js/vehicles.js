/*
 * ============================================
 * VEHICLE INVENTORY DATA
 * ============================================
 * Edit this file to add, remove, or update vehicle listings.
 *
 * Each vehicle entry supports:
 *   - id: Unique identifier (increment for new vehicles)
 *   - photos: Array of image URLs (first image is the main/card image)
 *   - title: Display title for the vehicle
 *   - year: Model year (number)
 *   - make: Manufacturer (e.g., "Mercedes-Benz")
 *   - model: Model name (e.g., "Sprinter")
 *   - price: Price in dollars (number) — displayed formatted
 *   - mileage: Odometer reading (number)
 *   - status: One of "for-sale", "sold", or "coming-soon"
 *   - type: One of "custom-build", "used", "project", or "trailer"
 *   - description: Short paragraph about the vehicle
 *   - features: Array of key feature strings
 *   - specs: Object with vehicle specifications
 *   - dimensions: Object with detailed interior/cargo dimensions
 *
 * To add a vehicle, copy an existing entry and change the values.
 * To mark as sold, change status to "sold".
 * To remove, delete the entire object from the array.
 * ============================================
 */

const vehicles = [
  {
    id: 1,
    photos: [
      "https://placehold.co/800x600/2d2d2d/f5f0e8?text=2022+Sprinter+4x4+Front",
      "https://placehold.co/800x600/2d2d2d/f5f0e8?text=2022+Sprinter+4x4+Side",
      "https://placehold.co/800x600/2d2d2d/f5f0e8?text=2022+Sprinter+4x4+Interior",
      "https://placehold.co/800x600/2d2d2d/f5f0e8?text=2022+Sprinter+4x4+Rear"
    ],
    title: "2022 Mercedes-Benz Sprinter 2500 4x4 — Camp Ready",
    year: 2022,
    make: "Mercedes-Benz",
    model: "Sprinter 2500",
    price: 0, /* Contact for pricing */
    priceDisplay: "Contact for Price",
    mileage: 45000,
    status: "for-sale",
    type: "used",
    description: "Recently serviced 2022 Sprinter 2500 4x4 with the 3.0L V6 Turbodiesel. This van is camp-ready and comes with 1 free service gifted by Mercedes-Benz still included. The 4x4 system features a 2-speed transfer case with high/low range. Solid platform for overlanding or van life.",
    features: [
      "4x4 w/ 2-Speed Transfer Case (Hi/Lo)",
      "3.0L V6 Turbodiesel",
      "Camp-Ready Setup",
      "Service Recently Maintained",
      "1 Free Mercedes-Benz Service Included",
      "7-Speed Automatic Transmission",
      "144\" Wheelbase — High Roof"
    ],
    specs: {
      engine: "3.0L V6 Turbodiesel (OM642)",
      horsepower: "188 hp",
      torque: "325 lb-ft",
      transmission: "7G-TRONIC Plus 7-Speed Automatic",
      drivetrain: "4x4 w/ 2-Speed Transfer Case",
      gvwr: "9,050 lbs",
      towingCapacity: "5,000 lbs",
      fuelTank: "24.5 gallons",
      fuelType: "Diesel"
    },
    dimensions: {
      title: "Interior Cargo Dimensions (144\" WB, High Roof)",
      measurements: [
        { label: "Cargo Length", value: "132.9 in (11 ft 1 in)" },
        { label: "Max Width (at floor)", value: "70.1 in (5 ft 10 in)" },
        { label: "Width Between Wheel Wells", value: "53.0 in (4 ft 5 in)" },
        { label: "Standing Height (interior)", value: "79.1 in (6 ft 7 in)" },
        { label: "Cargo Volume", value: "319 cu ft" },
        { label: "Load Floor Height", value: "27.9 in" },
        { label: "Rear Door Opening Width", value: "61.0 in" },
        { label: "Rear Door Opening Height", value: "72.4 in" },
        { label: "Side Door Opening Width", value: "51.2 in" },
        { label: "Side Door Opening Height", value: "72.4 in" }
      ],
      exterior: [
        { label: "Overall Length", value: "233.5 in (19 ft 6 in)" },
        { label: "Overall Height", value: "107.5 in (8 ft 11 in)" },
        { label: "Overall Width", value: "79.1 in (6 ft 7 in)" },
        { label: "Wheelbase", value: "144.3 in" }
      ]
    },
  },
  {
    id: 2,
    photos: [
      "https://placehold.co/800x600/2d2d2d/f5f0e8?text=2022+Ram+Rebel+Front",
      "https://placehold.co/800x600/2d2d2d/f5f0e8?text=2022+Ram+Rebel+Side",
      "https://placehold.co/800x600/2d2d2d/f5f0e8?text=2022+Ram+Rebel+Rooftop+Camper",
      "https://placehold.co/800x600/2d2d2d/f5f0e8?text=2022+Ram+Rebel+Rear"
    ],
    title: "2022 Ram 1500 Rebel 4x4 — Rooftop Camper Ready",
    year: 2022,
    make: "Ram",
    model: "1500 Rebel",
    price: 0,
    priceDisplay: "Contact for Price",
    mileage: 12500,
    status: "for-sale",
    type: "custom-build",
    description: "Low-mileage 2022 Ram Rebel 4x4 with the 5.7L HEMI V8 and eTorque. This truck is set up and ready to camp — hardtop rooftop camper with built-in water and shower setup. Front-mounted winch for recovery. Transmission warranty valid through 2027. Only 12,500 miles.",
    features: [
      "5.7L HEMI V8 w/ eTorque",
      "Hardtop Rooftop Camper",
      "Water & Shower Setup — Camp Ready",
      "Front-Mounted Winch",
      "Transmission Warranty Until 2027",
      "8-Speed Automatic (TorqueFlite 8HP75)",
      "Only 12,500 Miles"
    ],
    specs: {
      engine: "5.7L HEMI V8 MDS VVT w/ eTorque",
      horsepower: "395 hp @ 5,600 rpm",
      torque: "410 lb-ft @ 3,950 rpm",
      transmission: "8-Speed Automatic (TorqueFlite 8HP75)",
      drivetrain: "4x4",
      gvwr: "7,100 lbs",
      curbWeight: "5,397 lbs",
      towingCapacity: "7,820 lbs (3.21 axle) / 10,920 lbs (3.92 axle)",
      payloadCapacity: "1,700 lbs",
      fuelTank: "26 gallons (33 gal optional)",
      fuelType: "Gasoline"
    },
    dimensions: {
      title: "Bed Dimensions (5'7\" Box) & Cabin Interior",
      measurements: [
        { label: "Bed Length", value: "67.4 in (5 ft 7 in)" },
        { label: "Bed Width (wall to wall)", value: "66.4 in (5 ft 6 in)" },
        { label: "Bed Width (between wheel wells)", value: "51.0 in (4 ft 3 in)" },
        { label: "Bed Depth", value: "21.4 in" },
        { label: "Bed Volume", value: "53.9 cu ft" },
        { label: "Tailgate Width", value: "64.0 in" },
        { label: "Tailgate Opening Height", value: "21.4 in" }
      ],
      cabin: [
        { label: "Front Headroom", value: "40.9 in" },
        { label: "Front Legroom", value: "40.9 in" },
        { label: "Front Shoulder Room", value: "66.0 in" },
        { label: "Front Hip Room", value: "63.4 in" },
        { label: "Rear Headroom", value: "39.8 in" },
        { label: "Rear Legroom", value: "45.2 in" },
        { label: "Rear Shoulder Room", value: "65.7 in" },
        { label: "Rear Hip Room", value: "63.4 in" }
      ],
      exterior: [
        { label: "Overall Length", value: "232.9 in (19 ft 5 in)" },
        { label: "Overall Height", value: "77.6 in (6 ft 6 in)" },
        { label: "Overall Width (w/ mirrors)", value: "88.0 in (7 ft 4 in)" },
        { label: "Wheelbase", value: "144.5 in" }
      ]
    },
  },
  {
    id: 3,
    photos: [
      "https://placehold.co/800x600/2d2d2d/f5f0e8?text=2017+Keystone+Bullet+Exterior",
      "https://placehold.co/800x600/2d2d2d/f5f0e8?text=2017+Keystone+Bullet+Interior",
      "https://placehold.co/800x600/2d2d2d/f5f0e8?text=2017+Keystone+Bullet+Kitchen",
      "https://placehold.co/800x600/2d2d2d/f5f0e8?text=2017+Keystone+Bullet+Floor+Plan"
    ],
    title: "2017 Keystone Bullet Ultra Lite 248RKS Travel Trailer",
    year: 2017,
    make: "Keystone",
    model: "Bullet Ultra Lite 248RKS",
    price: 0,
    priceDisplay: "Contact for Price",
    mileage: 0,
    mileageDisplay: "N/A — Travel Trailer",
    status: "for-sale",
    type: "trailer",
    description: "Rear kitchen floor plan with 1 power slide-out. Sleeps up to 6 with a queen bed and convertible sofa. Fully self-contained with generous tank capacities. Great layout for couples or small families who want a comfortable home base at camp.",
    features: [
      "Rear Kitchen (RKS) Floor Plan",
      "1 Power Slide-Out",
      "Queen Bed + Convertible Sofa — Sleeps 6",
      "43-Gallon Fresh Water Tank",
      "Power Awning",
      "Dual 20 lb LP Gas Tanks",
      "2 Axles — Easy Towing"
    ],
    specs: {
      dryWeight: "5,012 lbs",
      gvwr: "6,500 lbs",
      payloadCapacity: "1,488 lbs (CCC)",
      hitchWeight: "535 lbs",
      freshWater: "43 gallons",
      grayWater: "60 gallons",
      blackWater: "30 gallons",
      lpGas: "9.4 gal / 40 lbs (2 tanks)",
      sleeps: "6",
      slideOuts: "1 (power)",
      axles: "2",
      tires: "205/75R14C"
    },
    dimensions: {
      title: "Trailer Dimensions & Living Space",
      measurements: [
        { label: "Interior Height", value: "78.0 in (6 ft 6 in)" },
        { label: "Entry Door Width", value: "30.0 in" },
        { label: "Entry Door Height", value: "72.0 in" },
        { label: "Slide-Out Depth (extended)", value: "~36 in" },
        { label: "Queen Bed Size", value: "60 x 80 in" },
        { label: "Rear Kitchen Counter Length", value: "~96 in (8 ft)" },
        { label: "Bathroom Width", value: "~36 in" }
      ],
      exterior: [
        { label: "Overall Length", value: "346 in (28 ft 10 in)" },
        { label: "Overall Width", value: "96 in (8 ft 0 in)" },
        { label: "Overall Height", value: "127 in (10 ft 7 in)" },
        { label: "Ground Clearance", value: "~15 in" }
      ]
    },
  }
];

/* Make available globally */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = vehicles;
}
