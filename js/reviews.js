/*
 * ============================================
 * CUSTOMER REVIEWS DATA
 * ============================================
 * Edit this file to add, remove, or update customer reviews.
 *
 * Each review entry supports:
 *   - name: Customer's display name
 *   - location: City/State
 *   - rating: 1 to 5 (whole numbers)
 *   - vehicle: What they purchased or had serviced
 *   - text: The review body
 *   - date: Display date string
 *   - photo: Optional customer/vehicle photo URL (set to "" to hide)
 *
 * To add a review, copy an existing entry and change the values.
 * To remove, delete the entire object from the array.
 * ============================================
 */

const reviews = [
  {
    name: "Jake Morrison",
    location: "San Diego, CA",
    rating: 5,
    vehicle: "2021 Toyota Tacoma Custom Build",
    text: "Overland Route Co. turned my bone-stock Tacoma into an absolute trail beast. The attention to detail on the electrical system and the build quality of the sleeping platform are next level. These guys actually use the rigs they build — and it shows.",
    date: "March 2026",
    photo: "https://placehold.co/80x80/2d2d2d/f5f0e8?text=JM"
  },
  {
    name: "Sarah Chen",
    location: "Portland, OR",
    rating: 5,
    vehicle: "2019 4Runner Expedition Build",
    text: "I drove down from Oregon specifically for these guys after seeing their work online. My 4Runner is now fully kitted for solo overlanding — solar, water, the whole nine. They walked me through every system and made sure I understood how to maintain it all on the road.",
    date: "January 2026",
    photo: "https://placehold.co/80x80/2d2d2d/f5f0e8?text=SC"
  },
  {
    name: "Marcus Davis",
    location: "Phoenix, AZ",
    rating: 5,
    vehicle: "Purchased 2017 Jeep Wrangler",
    text: "Bought a built Wrangler from their lot and couldn't be happier. Unlike other dealers, every modification was done right — proper wiring, quality components, and solid installation. No cut corners anywhere. Already planning my next purchase with them.",
    date: "December 2025",
    photo: "https://placehold.co/80x80/2d2d2d/f5f0e8?text=MD"
  },
  {
    name: "Emily Tran",
    location: "Los Angeles, CA",
    rating: 4,
    vehicle: "Vehicle Appraisal — Land Cruiser",
    text: "Had my Land Cruiser appraised before selling it. Super thorough inspection and fair, honest assessment. The detailed report made it easy to set my asking price with confidence. The only reason for 4 stars is I wish they had weekend hours, but the quality of service is absolutely 5 stars.",
    date: "November 2025",
    photo: "https://placehold.co/80x80/2d2d2d/f5f0e8?text=ET"
  },
  {
    name: "Ryan O'Connell",
    location: "Denver, CO",
    rating: 5,
    vehicle: "2022 Ford Bronco Custom Build",
    text: "Had a full overland camper conversion done on my Bronco. From the initial consultation to final walkthrough, the communication was excellent. They even helped me plan my first big trip to Baja. This is the kind of service every overlander wishes they had locally.",
    date: "October 2025",
    photo: "https://placehold.co/80x80/2d2d2d/f5f0e8?text=RO"
  },
  {
    name: "Diana Reyes",
    location: "Tucson, AZ",
    rating: 5,
    vehicle: "Purchased 2020 Gladiator",
    text: "Found a Gladiator on their site and it was exactly as described — no surprises, no hidden issues. The pre-purchase inspection report they provided was incredibly thorough. Would buy from Overland Route Co. again in a heartbeat.",
    date: "September 2025",
    photo: "https://placehold.co/80x80/2d2d2d/f5f0e8?text=DR"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = reviews;
}
