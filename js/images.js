/*
 * ============================================
 * GALLERY IMAGES CONFIG
 * ============================================
 * Edit this file to manage gallery images.
 *
 * Each image entry supports:
 *   - src: Path to the image (relative or absolute URL)
 *   - alt: Description of the image (important for SEO & accessibility)
 *   - caption: Text shown below/over the image
 *   - category: Used for gallery filtering — use one of:
 *       "builds", "completed", "adventure"
 *
 * To add images:
 *   1. Place your image file in the /images/ folder
 *   2. Add an entry below with src: "images/your-filename.jpg"
 *   OR use a full URL for externally hosted images
 *
 * To remove an image, delete its entry from this array.
 * ============================================
 */

const galleryImages = [
  {
    src: "https://placehold.co/600x400/2d2d2d/f5f0e8?text=Tacoma+Build+Process",
    alt: "Toyota Tacoma overland build in progress showing suspension installation",
    caption: "Tacoma TRD — Suspension & Lift Install",
    category: "builds"
  },
  {
    src: "https://placehold.co/600x400/2d2d2d/f5f0e8?text=4Runner+Completed",
    alt: "Completed Toyota 4Runner expedition build at sunset",
    caption: "4Runner Expedition — Build Complete",
    category: "completed"
  },
  {
    src: "https://placehold.co/600x400/2d2d2d/f5f0e8?text=Wiring+Harness",
    alt: "Custom dual battery wiring harness installation",
    caption: "Dual-Battery System Wiring",
    category: "builds"
  },
  {
    src: "https://placehold.co/600x400/2d2d2d/f5f0e8?text=Bronco+Trail",
    alt: "Ford Bronco overland build on a desert trail",
    caption: "Bronco Badlands — Baja Shakedown",
    category: "adventure"
  },
  {
    src: "https://placehold.co/600x400/2d2d2d/f5f0e8?text=Roof+Rack+Install",
    alt: "Custom roof rack fabrication and installation",
    caption: "Custom Roof Rack Fabrication",
    category: "builds"
  },
  {
    src: "https://placehold.co/600x400/2d2d2d/f5f0e8?text=Land+Cruiser+Resto",
    alt: "FZJ80 Land Cruiser frame-off restoration project",
    caption: "FZJ80 — Frame-Off Restoration",
    category: "completed"
  },
  {
    src: "https://placehold.co/600x400/2d2d2d/f5f0e8?text=Camp+Kitchen",
    alt: "Completed camp kitchen slide-out installation",
    caption: "Camp Kitchen Slide-Out Build",
    category: "builds"
  },
  {
    src: "https://placehold.co/600x400/2d2d2d/f5f0e8?text=Gladiator+Moab",
    alt: "Jeep Gladiator on the trails in Moab Utah",
    caption: "Gladiator Mojave — Moab Trip",
    category: "adventure"
  },
  {
    src: "https://placehold.co/600x400/2d2d2d/f5f0e8?text=GX460+Build",
    alt: "Lexus GX 460 luxury overland build in progress",
    caption: "GX 460 Luxury Overland — In Progress",
    category: "builds"
  },
  {
    src: "https://placehold.co/600x400/2d2d2d/f5f0e8?text=Shop+Floor",
    alt: "Multiple overland vehicles in various stages of build",
    caption: "Current Projects",
    category: "completed"
  },
  {
    src: "https://placehold.co/600x400/2d2d2d/f5f0e8?text=Sunrise+Camp",
    alt: "Rooftop tent camp setup at sunrise in the desert",
    caption: "Desert Sunrise — RTT Camp Setup",
    category: "adventure"
  },
  {
    src: "https://placehold.co/600x400/2d2d2d/f5f0e8?text=Tacoma+Completed",
    alt: "Completed Tacoma overland build full side view",
    caption: "Tacoma TRD — Final Reveal",
    category: "completed"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = galleryImages;
}
