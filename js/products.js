/*
 * ============================================
 * SHOP PRODUCTS DATA
 * ============================================
 * Edit this file to add, remove, or update products in the gear shop.
 *
 * Each product entry supports:
 *   - id: Unique identifier
 *   - name: Product name
 *   - description: Short description
 *   - category: Category for filtering
 *   - image: Product image URL
 *   - buyLink: Link to purchase (Amazon affiliate, your own store, etc.)
 *   - inStock: Whether the product is available (true/false)
 *   - quantity: Number in stock (0 = unlimited/external)
 *   - comingSoon: If true, shows "Coming Soon" instead of buy button
 *
 * To add your Amazon affiliate link or your own store link,
 * change the buyLink value for each product.
 *
 * When ready to sell directly, change buyLink to your own
 * checkout page or add Stripe integration.
 * ============================================
 */

const products = [
  /* ---- Recovery Gear ---- */
  {
    id: 1,
    name: "Smittybilt X2O 12K Winch",
    description: "12,000 lb. capacity synthetic rope winch with wireless remote. Reliable recovery for trucks and full-size rigs.",
    category: "Recovery Gear",
    image: "https://placehold.co/400x400/242418/f5f0e8?text=Smittybilt+X2O+12K",
    buyLink: "#", /* Replace with Amazon affiliate link */
    inStock: true,
    quantity: 0,
    comingSoon: false
  },
  {
    id: 2,
    name: "ARB TRED Pro Recovery Boards",
    description: "All-in-one recovery device — board, shovel, and axe jack base. Rated for 4+ tons.",
    category: "Recovery Gear",
    image: "https://placehold.co/400x400/242418/f5f0e8?text=ARB+TRED+Pro",
    buyLink: "#", /* Replace with Amazon affiliate link */
    inStock: true,
    quantity: 0,
    comingSoon: false
  },
  {
    id: 3,
    name: "Bubba Rope 7/8\" x 30ft Synthetic",
    description: "Kinetic recovery rope rated for 28,600 lbs. Stretches under load to gently pull stuck vehicles free.",
    category: "Recovery Gear",
    image: "https://placehold.co/400x400/242418/f5f0e8?text=Bubba+Rope",
    buyLink: "#", /* Replace with Amazon affiliate link */
    inStock: true,
    quantity: 0,
    comingSoon: false
  },
  {
    id: 4,
    name: "Hi-Lift Jack 48\" Cast Iron",
    description: "The classic off-road jack — lift, winch, clamp, and spread. Built tough for trail recovery.",
    category: "Recovery Gear",
    image: "https://placehold.co/400x400/242418/f5f0e8?text=Hi-Lift+Jack",
    buyLink: "#", /* Replace with Amazon affiliate link */
    inStock: true,
    quantity: 0,
    comingSoon: false
  },

  /* ---- Lighting ---- */
  {
    id: 5,
    name: "Rigid Industries 40\" LED Light Bar",
    description: "Premium combo beam light bar with over 20,000 lumens. Built for serious night driving and trail use.",
    category: "Lighting",
    image: "https://placehold.co/400x400/242418/f5f0e8?text=Rigid+40+Light+Bar",
    buyLink: "#", /* Replace with Amazon affiliate link */
    inStock: true,
    quantity: 0,
    comingSoon: false
  },
  {
    id: 6,
    name: "Baja Designs Squadron Pro LED Pods (Pair)",
    description: "High-output LED pods with spot or combo beam. Built for desert racing, great for overlanding.",
    category: "Lighting",
    image: "https://placehold.co/400x400/242418/f5f0e8?text=Baja+Squadron+Pro",
    buyLink: "#", /* Replace with Amazon affiliate link */
    inStock: true,
    quantity: 0,
    comingSoon: false
  },
  {
    id: 7,
    name: "Rigid Industries 360-Series 4\" Round Spots (Pair)",
    description: "Compact and powerful round LED spots. Great for A-pillar, bumper, or ditch light mounting.",
    category: "Lighting",
    image: "https://placehold.co/400x400/242418/f5f0e8?text=Rigid+360+Spots",
    buyLink: "#", /* Replace with Amazon affiliate link */
    inStock: true,
    quantity: 0,
    comingSoon: false
  },

  /* ---- Roof Racks and Storage ---- */
  {
    id: 8,
    name: "Prinsu Roof Rack for Toyota Tacoma",
    description: "Low-profile modular roof rack. No-drill install, built from lightweight aluminum.",
    category: "Roof Racks and Storage",
    image: "https://placehold.co/400x400/242418/f5f0e8?text=Prinsu+Roof+Rack",
    buyLink: "#", /* Replace with Amazon affiliate link */
    inStock: true,
    quantity: 0,
    comingSoon: false
  },
  {
    id: 9,
    name: "Front Runner Slimline II Rack",
    description: "Modular expedition rack system. Strong, low-profile, and compatible with a huge range of accessories.",
    category: "Roof Racks and Storage",
    image: "https://placehold.co/400x400/242418/f5f0e8?text=Front+Runner+Slimline",
    buyLink: "#", /* Replace with Amazon affiliate link */
    inStock: true,
    quantity: 0,
    comingSoon: false
  },
  {
    id: 10,
    name: "Pelican Cargo Case BX140",
    description: "Waterproof, dustproof, and crushproof cargo case. Lockable with a pressure equalization valve.",
    category: "Roof Racks and Storage",
    image: "https://placehold.co/400x400/242418/f5f0e8?text=Pelican+BX140",
    buyLink: "#", /* Replace with Amazon affiliate link */
    inStock: true,
    quantity: 0,
    comingSoon: false
  },

  /* ---- Camping and Shelter ---- */
  {
    id: 11,
    name: "Roofnest Sparrow EYE Rooftop Tent",
    description: "Hardshell rooftop tent with a panoramic window. Quick setup, sleeps 2, fits most roof racks.",
    category: "Camping and Shelter",
    image: "https://placehold.co/400x400/242418/f5f0e8?text=Roofnest+Sparrow",
    buyLink: "#", /* Replace with Amazon affiliate link */
    inStock: true,
    quantity: 0,
    comingSoon: false
  },
  {
    id: 12,
    name: "ARB Touring Awning with Light 2500mm",
    description: "Quick-deploy vehicle awning with built-in LED light strip. Provides 8+ feet of shade coverage.",
    category: "Camping and Shelter",
    image: "https://placehold.co/400x400/242418/f5f0e8?text=ARB+Touring+Awning",
    buyLink: "#", /* Replace with Amazon affiliate link */
    inStock: true,
    quantity: 0,
    comingSoon: false
  },
  {
    id: 13,
    name: "Dometic CFX3 55IM Powered Cooler",
    description: "55-liter compressor cooler/freezer with ice maker. Runs on 12V or 120V, app-controlled.",
    category: "Camping and Shelter",
    image: "https://placehold.co/400x400/242418/f5f0e8?text=Dometic+CFX3",
    buyLink: "#", /* Replace with Amazon affiliate link */
    inStock: true,
    quantity: 0,
    comingSoon: false
  },

  /* ---- Communication and Safety ---- */
  {
    id: 14,
    name: "Midland MXT275 MicroMobile GMRS Radio",
    description: "15-watt GMRS two-way radio with 8 repeater channels. Great for trail convoys and group communication.",
    category: "Communication and Safety",
    image: "https://placehold.co/400x400/242418/f5f0e8?text=Midland+MXT275",
    buyLink: "#", /* Replace with Amazon affiliate link */
    inStock: true,
    quantity: 0,
    comingSoon: false
  },
  {
    id: 15,
    name: "Garmin inReach Mini 2 Satellite Communicator",
    description: "Two-way satellite messaging and SOS. GPS tracking, weather updates, and global coverage.",
    category: "Communication and Safety",
    image: "https://placehold.co/400x400/242418/f5f0e8?text=Garmin+inReach+Mini",
    buyLink: "#", /* Replace with Amazon affiliate link */
    inStock: true,
    quantity: 0,
    comingSoon: false
  },
  {
    id: 16,
    name: "Adventure Medical Kits Mountain Series Guide Kit",
    description: "Comprehensive first aid kit designed for groups in remote areas. Includes trauma supplies and field guide.",
    category: "Communication and Safety",
    image: "https://placehold.co/400x400/242418/f5f0e8?text=AMK+Guide+Kit",
    buyLink: "#", /* Replace with Amazon affiliate link */
    inStock: true,
    quantity: 0,
    comingSoon: false
  },

  /* ---- Vehicle Protection ---- */
  {
    id: 17,
    name: "CBI Offroad Front Bumper",
    description: "Heavy-duty steel front bumper with winch mount and light provisions. Built for serious off-road use.",
    category: "Vehicle Protection",
    image: "https://placehold.co/400x400/242418/f5f0e8?text=CBI+Front+Bumper",
    buyLink: "#", /* Replace with Amazon affiliate link */
    inStock: true,
    quantity: 0,
    comingSoon: false
  },
  {
    id: 18,
    name: "RCI Metalworks Skid Plates",
    description: "Full underbody skid plate set. Protects oil pan, transmission, and transfer case from trail impacts.",
    category: "Vehicle Protection",
    image: "https://placehold.co/400x400/242418/f5f0e8?text=RCI+Skid+Plates",
    buyLink: "#", /* Replace with Amazon affiliate link */
    inStock: true,
    quantity: 0,
    comingSoon: false
  },
  {
    id: 19,
    name: "Bilstein 5100 Series Shock Absorbers (Set of 4)",
    description: "Monotube gas shocks designed for lifted trucks. Adjustable ride height on front, improved damping.",
    category: "Vehicle Protection",
    image: "https://placehold.co/400x400/242418/f5f0e8?text=Bilstein+5100+Shocks",
    buyLink: "#", /* Replace with Amazon affiliate link */
    inStock: true,
    quantity: 0,
    comingSoon: false
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = products;
}
