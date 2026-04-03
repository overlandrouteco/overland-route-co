=======================================
OVERLAND ROUTE CO. — PHOTO GUIDE
=======================================
This file lists every image used on the website,
where to put it, and what size it should be.

HOW TO REPLACE PLACEHOLDER IMAGES:
1. Take or find the photo
2. Resize it to the recommended size (or close to it)
3. Save it as a .jpg file with the exact filename listed below
4. Put it in the correct folder
5. Update the image URL in the file listed under "Referenced in"

TIP: You can use any image editor or a free online tool like
https://www.iloveimg.com/resize-image to resize photos.


=======================================
OPEN GRAPH / SOCIAL SHARING IMAGES
=======================================
These show up when you share a page link on Facebook, Twitter, etc.
Size: 1200 x 630 pixels (landscape)
Folder: images/

  og-home.jpg          — Hero/banner image for the homepage
  og-about.jpg         — Photo for About page sharing
  og-services.jpg      — Photo for Services page sharing
  og-inventory.jpg     — Photo for Inventory page sharing
  og-gallery.jpg       — Photo for Gallery page sharing
  og-shop.jpg          — Photo for Shop page sharing
  og-blog.jpg          — Photo for Blog page sharing
  og-resources.jpg     — Photo for Resources page sharing
  og-testimonials.jpg  — Photo for Testimonials page sharing
  og-contact.jpg       — Photo for Contact page sharing
  og-quote.jpg         — Photo for Quote page sharing

  Referenced in: Each HTML page's <meta property="og:image"> tag


=======================================
HERO / BACKGROUND IMAGES
=======================================
Size: 1920 x 1080 pixels (landscape, high quality)
Folder: images/

  hero-background.jpg  — Main homepage hero background
  Referenced in: css/style.css (search for "Hero+Background")
                 Replace the placehold.co URL with: images/hero-background.jpg


=======================================
VEHICLE PHOTOS
=======================================
Size: 800 x 600 pixels each (landscape)
Take 4 photos per vehicle: front, side, interior, rear

--- 2022 Mercedes-Benz Sprinter 4x4 ---
Folder: images/vehicles/sprinter/

  sprinter-front.jpg     — Front 3/4 view
  sprinter-side.jpg      — Full side profile
  sprinter-interior.jpg  — Interior / cargo area
  sprinter-rear.jpg      — Rear view with doors open

  Referenced in: js/vehicles.js (vehicle id: 1, photos array)
  Replace the placehold.co URLs with:
    "images/vehicles/sprinter/sprinter-front.jpg"
    "images/vehicles/sprinter/sprinter-side.jpg"
    "images/vehicles/sprinter/sprinter-interior.jpg"
    "images/vehicles/sprinter/sprinter-rear.jpg"

--- 2022 Ram 1500 Rebel 4x4 ---
Folder: images/vehicles/ram-rebel/

  ram-rebel-front.jpg     — Front 3/4 view
  ram-rebel-side.jpg      — Full side profile
  ram-rebel-camper.jpg    — Rooftop camper setup
  ram-rebel-rear.jpg      — Rear view

  Referenced in: js/vehicles.js (vehicle id: 2, photos array)
  Replace the placehold.co URLs with:
    "images/vehicles/ram-rebel/ram-rebel-front.jpg"
    "images/vehicles/ram-rebel/ram-rebel-side.jpg"
    "images/vehicles/ram-rebel/ram-rebel-camper.jpg"
    "images/vehicles/ram-rebel/ram-rebel-rear.jpg"

--- 2017 Keystone Bullet Ultra Lite 248RKS ---
Folder: images/vehicles/keystone/

  keystone-exterior.jpg   — Exterior side view
  keystone-interior.jpg   — Interior living area
  keystone-kitchen.jpg    — Kitchen area
  keystone-floorplan.jpg  — Floor plan or bedroom

  Referenced in: js/vehicles.js (vehicle id: 3, photos array)
  Replace the placehold.co URLs with:
    "images/vehicles/keystone/keystone-exterior.jpg"
    "images/vehicles/keystone/keystone-interior.jpg"
    "images/vehicles/keystone/keystone-kitchen.jpg"
    "images/vehicles/keystone/keystone-floorplan.jpg"


=======================================
GALLERY PHOTOS
=======================================
Size: 600 x 400 pixels (landscape)
Folder: images/gallery/

  gallery-01.jpg  — Tacoma suspension & lift install (build process)
  gallery-02.jpg  — 4Runner expedition build complete
  gallery-03.jpg  — Dual battery wiring harness (build process)
  gallery-04.jpg  — Bronco on a desert trail (adventure)
  gallery-05.jpg  — Roof rack fabrication (build process)
  gallery-06.jpg  — Land Cruiser restoration (completed)
  gallery-07.jpg  — Camp kitchen slide-out (build process)
  gallery-08.jpg  — Gladiator in Moab (adventure)
  gallery-09.jpg  — GX460 overland build (build process)
  gallery-10.jpg  — Multiple vehicles / current projects (completed)
  gallery-11.jpg  — Desert sunrise rooftop tent camp (adventure)
  gallery-12.jpg  — Tacoma overland build final (completed)

  Before/After pairs (Build Transformations):
  gallery-before-1.jpg  — Before photo: Tacoma stock
  gallery-after-1.jpg   — After photo: Tacoma built
  gallery-before-2.jpg  — Before photo: 4Runner stock
  gallery-after-2.jpg   — After photo: 4Runner built
  gallery-before-3.jpg  — Before photo: Bronco stock
  gallery-after-3.jpg   — After photo: Bronco built

  Referenced in: js/images.js (galleryImages array)
  Replace the placehold.co URLs with: "images/gallery/gallery-01.jpg" etc.


=======================================
SHOP / PRODUCT IMAGES
=======================================
Size: 400 x 400 pixels (square)
Folder: images/shop/

  smittybilt-x2o-12k.jpg         — Smittybilt X2O 12K Winch
  arb-tred-pro.jpg                — ARB TRED Pro Recovery Boards
  bubba-rope.jpg                  — Bubba Rope 7/8" x 30ft
  hi-lift-jack.jpg                — Hi-Lift Jack 48"
  rigid-40-light-bar.jpg          — Rigid Industries 40" LED Light Bar
  baja-squadron-pro.jpg           — Baja Designs Squadron Pro LED Pods
  rigid-360-spots.jpg             — Rigid Industries 360-Series Spots
  prinsu-roof-rack.jpg            — Prinsu Roof Rack
  front-runner-slimline.jpg       — Front Runner Slimline II Rack
  pelican-bx140.jpg               — Pelican Cargo Case BX140
  roofnest-sparrow.jpg            — Roofnest Sparrow EYE Rooftop Tent
  arb-touring-awning.jpg          — ARB Touring Awning with Light
  dometic-cfx3.jpg                — Dometic CFX3 55IM Powered Cooler
  midland-mxt275.jpg              — Midland MXT275 GMRS Radio
  garmin-inreach-mini.jpg         — Garmin inReach Mini 2
  amk-guide-kit.jpg               — Adventure Medical Kits Guide Kit
  cbi-front-bumper.jpg            — CBI Offroad Front Bumper
  rci-skid-plates.jpg             — RCI Metalworks Skid Plates
  bilstein-5100.jpg               — Bilstein 5100 Series Shocks

  Referenced in: js/products.js (products array, image field)
  Replace the placehold.co URLs with: "images/shop/smittybilt-x2o-12k.jpg" etc.


=======================================
BLOG POST IMAGES
=======================================
Size: 800 x 450 pixels (landscape, 16:9)
Folder: images/

  blog-sprinter.jpg        — Sprinter 4x4 blog post hero image
  blog-buying-guide.jpg    — Used vehicle buying guide hero image

  Referenced in: js/blog-posts.js (image field in each post)


=======================================
INSTAGRAM FEED (Homepage)
=======================================
Size: 400 x 400 pixels (square)
Folder: images/

  instagram-1.jpg through instagram-6.jpg
  — Your best Instagram-style photos (builds, trails, camp setups)

  Referenced in: index.html (Instagram feed section)
  Note: These are placeholder boxes for now. Once your Instagram
  account is active, you can replace this section with an actual
  Instagram feed widget.


=======================================
SERVICE IMAGES
=======================================
Size: 600 x 400 pixels (landscape)
Folder: images/

  service-custom-build.jpg   — Custom build consultation in progress
  service-vehicle-sales.jpg  — Vehicles on display / for sale
  service-appraisals.jpg     — Vehicle inspection / appraisal

  Referenced in: services.html (service-detail-img tags)
  Replace the placehold.co URLs with the real image paths.


=======================================
TIPS FOR BEST RESULTS
=======================================
- Use high-quality photos with good lighting
- Landscape orientation works best for most images
- Keep file sizes under 500KB each for fast loading
  (use https://tinypng.com to compress)
- Use .jpg for photos, .png for logos/graphics
- Name files with lowercase letters and hyphens (no spaces)
- After replacing images, clear your browser cache to see changes
