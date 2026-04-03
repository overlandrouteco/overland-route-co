/*
 * ============================================
 * BLOG POSTS DATA
 * ============================================
 * Edit this file to add, remove, or update blog posts.
 *
 * Each post entry supports:
 *   - id: Unique identifier (increment for new posts)
 *   - title: Post title
 *   - date: Display date (e.g., "April 2, 2026")
 *   - dateISO: ISO date for sorting (e.g., "2026-04-02")
 *   - author: Author name
 *   - excerpt: Short summary shown on the blog listing
 *   - content: Full post body — supports HTML for formatting
 *   - youtubeId: YouTube video ID to embed (the part after v= in a YouTube URL)
 *              Set to "" or remove to skip the video embed
 *   - tags: Array of tag strings for categorization
 *   - image: Optional featured image URL for the listing card
 *
 * To add a post, copy an existing entry and change the values.
 * To find a YouTube video ID: go to the video, look at the URL —
 *   https://www.youtube.com/watch?v=XXXXXXXXXXX
 *   The ID is the part after "v=" (e.g., "dQw4w9WgXcQ")
 *
 * To remove a post, delete the entire object from the array.
 * Posts are displayed newest first (sorted by dateISO).
 * ============================================
 */

const blogPosts = [
  {
    id: 1,
    title: "Why We Love the Sprinter 4x4 for Overland Builds",
    date: "April 2, 2026",
    dateISO: "2026-04-02",
    author: "Overland Route Co.",
    excerpt: "The Mercedes Sprinter 4x4 has become one of the most popular platforms for overland van builds — and for good reason. Here's why we think it's one of the best starting points for a capable adventure rig.",
    content: `
      <p>If you've spent any time in the overlanding world, you've probably noticed Sprinter vans everywhere — trailheads, campgrounds, Instagram. There's a reason for that. The Sprinter 4x4, especially the 2022 model with the 3.0L V6 Turbodiesel, hits a sweet spot that's hard to beat.</p>

      <h3>The Diesel Advantage</h3>
      <p>The 3.0L V6 turbodiesel puts out 188 hp and 325 lb-ft of torque. Those torque numbers are what matter off-road and when you're hauling a fully built-out interior up a mountain pass. Diesel also means better fuel economy on long highway stretches — which is the reality of most overland travel.</p>

      <h3>Real 4x4 Capability</h3>
      <p>This isn't an AWD crossover system. The Sprinter 4x4 has a proper 2-speed transfer case with high and low range. That low range is a game-changer on loose dirt roads, steep grades, and sandy washes. Pair it with good all-terrain tires and you've got a van that can get to places most RVs can only dream about.</p>

      <h3>The Space Factor</h3>
      <p>With the 144" wheelbase high roof configuration, you're looking at 6'7" of standing height and over 11 feet of cargo length. That's enough room for a proper bed, a kitchen setup, storage, and still have space to move around. The high roof is what makes it livable — no hunching over while you cook dinner.</p>

      <h3>Our Take</h3>
      <p>We currently have a 2022 Sprinter 4x4 in our inventory that's camp-ready with only 45,000 miles. It's been well-maintained and still has a free Mercedes-Benz service included. If you've been thinking about the van life or just want a capable adventure vehicle with serious cargo space, come check it out.</p>

      <p>Give us a call if you want to learn more about it. We're always happy to talk vans.</p>
    `,
    youtubeId: "dQw4w9WgXcQ",  /* <-- REPLACE with your actual YouTube video ID */
    tags: ["Sprinter", "Van Build", "Overland"],
    image: "https://placehold.co/800x450/2d2d2d/f5f0e8?text=Sprinter+4x4+Blog+Post"
  }

  ,{
    id: 2,
    title: "What to Look for When Buying a Used Overland Vehicle",
    date: "April 2, 2026",
    dateISO: "2026-04-02",
    author: "Overland Route Co.",
    excerpt: "Buying a used overland rig can save you serious money — but only if you know what to look for. Here's what we check before putting any vehicle on our lot.",
    content: `
      <p>Whether you're shopping for your first overland rig or upgrading from what you've got, buying used is one of the smartest moves you can make. Someone else already took the depreciation hit, and in many cases, the previous owner already installed thousands of dollars worth of modifications. But you've got to know what to look for — a bad buy can cost you more than a new truck in the long run.</p>

      <h3>Check the Frame First</h3>
      <p>This is the most important thing. Get under the vehicle and look at the frame rails. You're checking for rust, cracks, and signs of previous repairs or welding. Surface rust is normal on older trucks, especially in states that use road salt. But if you see scaling, flaking, or holes — walk away. A rusted frame is a structural issue that's expensive to fix and can be dangerous.</p>
      <p>Pay extra attention to where the frame meets the body mounts, around the rear leaf spring hangers, and near the crossmembers. These are common trouble spots.</p>

      <h3>Suspension and Steering</h3>
      <p>Grab each wheel at the top and bottom and try to rock it. If there's play, you could be looking at worn ball joints, tie rod ends, or wheel bearings. Bounce each corner of the vehicle — it should settle in one or two bounces. If it keeps rocking, the shocks are toast.</p>
      <p>If the truck has a lift kit installed, ask what brand and how it was done. A quality lift (Icon, King, Old Man Emu, Bilstein) is a plus. A cheap spacer lift with no supporting modifications can cause premature wear on CV joints, ball joints, and steering components.</p>

      <h3>Rust — Where to Look Beyond the Frame</h3>
      <p>Check the rocker panels, cab corners, wheel wells, and bed floor. Open all the doors and look at the bottom edges — that's where moisture collects and rust starts. On trucks with bed-mounted accessories (racks, toolboxes), look under them for trapped moisture damage.</p>
      <p>If the truck has been used off-road, check the underside of the body for dents and scrapes. Some trail damage is cosmetic and fine. Deep impacts near structural areas are a different story.</p>

      <h3>Mileage and Maintenance History</h3>
      <p>High mileage isn't automatically a deal-breaker, especially on diesel trucks or Toyota platforms that are known for longevity. What matters more is maintenance history. A 4Runner with 180,000 miles and a stack of service records is a better buy than one with 80,000 miles and no history.</p>
      <p>Ask for records on oil changes, transmission service, transfer case fluid, differential fluid, and coolant flushes. If they can't provide any maintenance history, factor that into your offer price — you'll want to do all of those services right away.</p>

      <h3>Electrical and Modifications</h3>
      <p>If the vehicle has aftermarket electrical work (auxiliary batteries, solar, lighting, winch), look at the wiring. Clean, organized wiring with proper connectors and fusing is a sign that someone who knew what they were doing installed it. Messy wiring with butt connectors and electrical tape is a red flag — and a potential fire hazard.</p>

      <h3>The Test Drive</h3>
      <p>Drive it on the highway and on rough roads if possible. Listen for clunks, rattles, and grinding. Pay attention to how it tracks — does it pull to one side? Does the steering wheel vibrate at speed? Check all the gears, the 4WD system (both high and low range), and the brakes. If anything feels off, get it inspected by a professional before you commit.</p>

      <h3>Get a Pre-Purchase Inspection</h3>
      <p>This is probably the best $100-200 you'll ever spend. Have an independent mechanic (or someone who knows overland vehicles) go over the truck before you buy it. They'll catch things you might miss and give you leverage for negotiation if there are issues.</p>

      <p>If you're in the Fairfield or Bay Area and want a second opinion on a vehicle you're considering, <a href="contact.html">reach out to us</a>. We do vehicle appraisals and can help you figure out if that rig is worth your money.</p>
    `,
    youtubeId: "",
    tags: ["Buying Guide", "Used Vehicles", "Tips"],
    image: "https://placehold.co/800x450/2d2d2d/f5f0e8?text=Used+Vehicle+Buying+Guide"
  }

  /*
   * To add another post, copy an existing entry above and change the values.
   * Posts are displayed newest first (sorted by dateISO).
   */
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = blogPosts;
}
