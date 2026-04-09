/* ============================================
   OVERLAND ROUTE CO. — Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initCookieBanner();
  initActiveNav();
  initBreadcrumb();
  initTextUsButton();
  initScrollHeader();
  initScrollIndicator();
  initFormValidation();
  initAnalyticsTracking();

  /* Page-specific initializers */
  if (document.getElementById('featured-vehicles')) initFeaturedVehicles();
  if (document.getElementById('inventory-grid')) initInventory();
  if (document.getElementById('gallery-grid')) initGallery();
  if (document.getElementById('reviews-grid')) initReviews();
  /* Contact form is now handled natively by Netlify Forms */
  if (document.getElementById('blog-listing')) initBlog();
  if (document.getElementById('blog-post-detail')) initBlogPost();
});

/* ---- Google Analytics Event Tracking ----
   To activate: Go to analytics.google.com, create a GA4 property, get your
   Measurement ID (G-XXXXXXXXXX), and replace the placeholder in every HTML file.
   Until then trackEvent() is a safe no-op (it checks for window.gtag). */
function trackEvent(name, params) {
  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', name, params || {});
    }
  } catch (e) { /* ignore */ }
}

function initAnalyticsTracking() {
  /* Click tracking — delegated so it covers dynamically rendered cards */
  document.addEventListener('click', (e) => {
    const target = e.target.closest('a, button');
    if (!target) return;
    const text = (target.textContent || '').trim().toLowerCase();
    const href = target.getAttribute('href') || '';

    if (target.classList.contains('call-for-pricing-btn') || text === 'call for pricing') {
      trackEvent('click_call_for_pricing', {
        vehicle: target.dataset.vehicleName || '',
        link_url: href
      });
    } else if (target.classList.contains('view-details-btn') || text === 'view details') {
      trackEvent('click_view_details', { vehicle: target.dataset.vehicleName || '' });
    } else if (text === 'check price on amazon') {
      trackEvent('click_check_price_amazon', { product: target.previousElementSibling?.textContent || '', link_url: href });
    } else if (target.classList.contains('ask-us-btn') || text === 'ask us about this') {
      trackEvent('click_ask_us_about_this', {
        product: target.dataset.productName || '',
        category: target.dataset.productCategory || ''
      });
    } else if (text === 'get a quote' || text === 'get a free quote' || (href && href.indexOf('quote.html') !== -1 && target.classList.contains('nav-cta'))) {
      trackEvent('click_get_a_quote', { link_url: href });
    }

    /* Shop product category filter clicks */
    if (target.parentElement && target.parentElement.id === 'shop-filters') {
      trackEvent('shop_category_click', { category: target.dataset.filter || target.textContent });
    }
  });

  /* Newsletter form submission tracking. The contact / quote / vehicle-inquiry
     forms are tracked from inside submitForm() before the cloned form POSTs.
     Newsletter forms submit natively with no JS, so we track them here. */
  document.querySelectorAll('form.newsletter-form').forEach(form => {
    form.addEventListener('submit', () => {
      trackEvent('form_submit', {
        form_name: form.getAttribute('name') || 'unknown',
        submitted_from: (form.querySelector('[name="submitted-from"]') || {}).value || ''
      });
    });
  });

  /* Scroll depth tracking — fire once at 25/50/75/100% */
  const milestones = [25, 50, 75, 100];
  const fired = {};
  window.addEventListener('scroll', () => {
    const doc = document.documentElement;
    const scrollTop = window.scrollY || doc.scrollTop;
    const max = doc.scrollHeight - window.innerHeight;
    if (max <= 0) return;
    const pct = Math.round((scrollTop / max) * 100);
    milestones.forEach(m => {
      if (pct >= m && !fired[m]) {
        fired[m] = true;
        trackEvent('scroll_depth', { percent: m, page: window.location.pathname });
      }
    });
  }, { passive: true });
}

/* ---- Mobile Navigation ---- */
function initMobileNav() {
  const hamburger = document.querySelector('.hamburger');
  const navList = document.querySelector('.nav-list');
  if (!hamburger || !navList) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navList.classList.toggle('open');
  });

  navList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navList.classList.remove('open');
    });
  });
}

/* ---- Breadcrumb Navigation + Structured Data ---- */
function initBreadcrumb() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  if (currentPage === 'index.html' || currentPage === '') return;

  const pageNames = {
    'about.html': 'About',
    'services.html': 'Services',
    'inventory.html': 'Inventory',
    'gallery.html': 'Gallery',
    'shop.html': 'Shop',
    'blog.html': 'Blog',
    'resources.html': 'Resources',
    'testimonials.html': 'Testimonials',
    'contact.html': 'Contact',
    'privacy.html': 'Privacy Policy',
    'terms.html': 'Terms of Service',
    'quote.html': 'Get a Quote'
  };

  const pageName = pageNames[currentPage];
  if (!pageName) return;

  const pageHero = document.querySelector('.page-hero .container');
  if (!pageHero) return;

  const breadcrumbEl = document.createElement('nav');
  breadcrumbEl.className = 'breadcrumb';
  breadcrumbEl.setAttribute('aria-label', 'Breadcrumb');
  breadcrumbEl.innerHTML = `<a href="index.html">Home</a><span>/</span>${pageName}`;
  pageHero.insertBefore(breadcrumbEl, pageHero.firstChild);

  /* Breadcrumb structured data */
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://overlandrouteco.com/' },
      { '@type': 'ListItem', 'position': 2, 'name': pageName, 'item': 'https://overlandrouteco.com/' + currentPage }
    ]
  };
  const scriptEl = document.createElement('script');
  scriptEl.type = 'application/ld+json';
  scriptEl.textContent = JSON.stringify(schema);
  document.head.appendChild(scriptEl);
}

/* ---- Floating Text Us Button ---- */
function initTextUsButton() {
  const btn = document.createElement('a');
  btn.href = 'sms:+16502720334';
  btn.className = 'text-us-btn';
  btn.setAttribute('aria-label', 'Text us');
  btn.setAttribute('title', 'Text us at (650) 272-0334');
  btn.innerHTML = '&#9993;';
  document.body.appendChild(btn);
}

/* ---- Scroll Header Darkening ---- */
function initScrollHeader() {
  const header = document.querySelector('.header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

/* ---- Scroll Indicator Arrow (homepage only) ---- */
function initScrollIndicator() {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  const arrow = document.createElement('div');
  arrow.className = 'scroll-indicator';
  arrow.innerHTML = '&#8964;';
  hero.appendChild(arrow);
}

/* ---- Active Nav Link ---- */
function initActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-list a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* ---- Custom Form Validation ----
   Runs on submit for the contact, quote-request, and vehicle-inquiry forms.
   Validates required fields, email format, phone format, and reCAPTCHA.
   Shows inline red error messages and prevents submission on failure. */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function clearFieldError(field) {
  field.classList.remove('has-error');
  const next = field.parentNode.querySelector('.field-error');
  if (next) next.remove();
}

function showFieldError(field, msg) {
  field.classList.add('has-error');
  let err = field.parentNode.querySelector('.field-error');
  if (!err) {
    err = document.createElement('span');
    err.className = 'field-error';
    field.parentNode.appendChild(err);
  }
  err.textContent = msg;
}

function validateEmail(value) {
  const v = value.trim();
  if (!v) return false;
  if (v.indexOf('@') === -1) return false;
  if (!EMAIL_RE.test(v)) return false;
  /* Reject domains without a dot (require valid TLD) */
  const domain = v.split('@')[1] || '';
  if (domain.indexOf('.') === -1) return false;
  return true;
}

function validatePhone(value) {
  /* Accept (650) 272-0334, 650-272-0334, 650.272.0334, 6502720334, +1 6502720334 */
  const digits = value.replace(/\D/g, '');
  return digits.length === 10 || digits.length === 11;
}

function validateContactForm(form) {
  let valid = true;
  let firstInvalid = null;

  /* Clear previous errors */
  form.querySelectorAll('.field-error').forEach(el => el.remove());
  form.querySelectorAll('.has-error').forEach(el => el.classList.remove('has-error'));

  /* Skip honeypot/hidden fields */
  const fields = form.querySelectorAll('input, textarea, select');
  fields.forEach(field => {
    if (field.type === 'hidden') return;
    if (field.name === 'bot-field' || field.name === 'website' || field.name === 'form-name') return;
    /* Skip the honeypot wrapper (off-screen) */
    const wrapper = field.closest('[aria-hidden="true"]');
    if (wrapper) return;

    const value = (field.value || '').trim();

    if (field.required && !value) {
      showFieldError(field, 'This field is required');
      valid = false;
      if (!firstInvalid) firstInvalid = field;
      return;
    }
    if (field.type === 'email' && value) {
      if (!validateEmail(value)) {
        showFieldError(field, 'Please enter a valid email address');
        valid = false;
        if (!firstInvalid) firstInvalid = field;
        return;
      }
    }
    /* Phone fields are validated only by their `required` attribute —
       no format check, since users enter phone numbers in many shapes. */
  });

  /* reCAPTCHA validation. Matches both vanilla Google reCAPTCHA (.g-recaptcha)
     and Netlify's built-in reCAPTCHA ([data-netlify-recaptcha="true"]). */
  const recaptcha = form.querySelector('.g-recaptcha, [data-netlify-recaptcha="true"]');
  if (recaptcha && typeof grecaptcha !== 'undefined') {
    let response = '';
    try { response = grecaptcha.getResponse(); } catch (e) { response = ''; }
    if (!response) {
      let err = recaptcha.parentNode.querySelector('.field-error');
      if (!err) {
        err = document.createElement('span');
        err.className = 'field-error';
        recaptcha.parentNode.appendChild(err);
      }
      err.textContent = 'Please confirm you are not a robot';
      valid = false;
      if (!firstInvalid) firstInvalid = recaptcha;
    }
  }

  /* Quote form: enforce file count/size limits */
  const fileInput = form.querySelector('input[type="file"]');
  if (fileInput && fileInput.files && fileInput.files.length > 0) {
    if (fileInput.files.length > 3) {
      alert('Please upload a maximum of 3 files.');
      valid = false;
    } else {
      for (let i = 0; i < fileInput.files.length; i++) {
        if (fileInput.files[i].size > 5 * 1024 * 1024) {
          alert('Each file must be under 5MB. "' + fileInput.files[i].name + '" is too large.');
          valid = false;
          break;
        }
      }
    }
  }

  if (!valid && firstInvalid && firstInvalid.focus) {
    firstInvalid.focus();
    firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  return valid;
}

function initFormValidation() {
  /* Contact form only — quote-request and vehicle-inquiry are still
     submitting natively without JS while we confirm they land in Netlify. */
  document.querySelectorAll('form[name="contact-form"]').forEach(form => {
    form.noValidate = true;

    form.addEventListener('submit', (e) => {
      if (validateContactForm(form) !== true) {
        e.preventDefault();
        return;
      }
      /* Validation passed — track the submission, then let the browser
         POST natively to Netlify. We do NOT call preventDefault here. */
      trackEvent('form_submit', {
        form_name: form.getAttribute('name') || 'unknown',
        submitted_from: (form.querySelector('[name="submitted-from"]') || {}).value || ''
      });
    });

    /* Live-clear errors as the user fixes them */
    form.querySelectorAll('input, textarea, select').forEach(field => {
      field.addEventListener('input', () => clearFieldError(field));
      field.addEventListener('change', () => clearFieldError(field));
    });
  });
}

/* ---- Cookie Consent ---- */
function initCookieBanner() {
  const banner = document.querySelector('.cookie-banner');
  if (!banner) return;
  if (localStorage.getItem('cookieConsent')) return;

  banner.classList.add('show');

  banner.querySelector('.cookie-accept')?.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'accepted');
    banner.classList.remove('show');
    enableAnalytics();
  });

  banner.querySelector('.cookie-decline')?.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'declined');
    banner.classList.remove('show');
  });
}

function enableAnalytics() {
  /* GA4 is now loaded directly from the <head> of every page (placeholder
     G-XXXXXXXXXX). This function is kept as a no-op to preserve the cookie
     banner click handler — see initCookieBanner. */
}

/* ---- Helper: format mileage ---- */
function formatMileage(v) {
  if (v.mileageDisplay) return v.mileageDisplay;
  if (v.mileage === 0) return 'N/A';
  return v.mileage.toLocaleString() + ' mi';
}

/* ---- Featured Vehicles (Home Page) ---- */
function initFeaturedVehicles() {
  const grid = document.getElementById('featured-vehicles');
  if (!grid || typeof vehicles === 'undefined') return;

  const featured = vehicles.filter(v => v.status === 'for-sale').slice(0, 3);
  grid.innerHTML = featured.map(v => vehicleCardHTML(v)).join('');
  grid.querySelectorAll('.view-details-btn').forEach(btn => {
    btn.addEventListener('click', () => openVehicleModal(Number(btn.dataset.id)));
  });
}

/* ---- Inventory Page ---- */
function initInventory() {
  const grid = document.getElementById('inventory-grid');
  if (!grid || typeof vehicles === 'undefined') return;

  const filterStatus = document.getElementById('filter-status');
  const filterType = document.getElementById('filter-type');
  const filterYear = document.getElementById('filter-year');
  const filterSort = document.getElementById('filter-sort');

  /* Populate year filter dynamically */
  if (filterYear) {
    const years = [...new Set(vehicles.map(v => v.year))].sort((a, b) => b - a);
    years.forEach(y => {
      const opt = document.createElement('option');
      opt.value = y;
      opt.textContent = y;
      filterYear.appendChild(opt);
    });
  }

  function render() {
    let filtered = [...vehicles];

    if (filterStatus && filterStatus.value) {
      filtered = filtered.filter(v => v.status === filterStatus.value);
    }
    if (filterType && filterType.value) {
      filtered = filtered.filter(v => v.type === filterType.value);
    }
    if (filterYear && filterYear.value) {
      filtered = filtered.filter(v => v.year === Number(filterYear.value));
    }
    if (filterSort) {
      switch (filterSort.value) {
        case 'year-new': filtered.sort((a, b) => b.year - a.year); break;
        case 'year-old': filtered.sort((a, b) => a.year - b.year); break;
        case 'mileage': filtered.sort((a, b) => a.mileage - b.mileage); break;
      }
    }

    if (filtered.length === 0) {
      grid.innerHTML = '<div class="no-results">No vehicles match your filters. Try adjusting your search.</div>';
    } else {
      grid.innerHTML = filtered.map(v => vehicleCardHTML(v)).join('');
      grid.querySelectorAll('.view-details-btn').forEach(btn => {
        btn.addEventListener('click', () => openVehicleModal(Number(btn.dataset.id)));
      });
    }
  }

  [filterStatus, filterType, filterYear, filterSort].forEach(el => {
    if (el) el.addEventListener('change', render);
  });

  render();
}

/* ---- Vehicle Card HTML ---- */
function vehicleCardHTML(v) {
  const statusLabel = {
    'for-sale': 'For Sale',
    'sold': 'Sold',
    'coming-soon': 'Coming Soon'
  };
  const badgeClass = {
    'for-sale': 'badge-for-sale',
    'sold': 'badge-sold',
    'coming-soon': 'badge-coming-soon'
  };

  return `
    <article class="vehicle-card">
      <div class="vehicle-card-img-wrap">
        <img class="vehicle-card-img" src="${v.photos[0]}" alt="${v.title}" loading="lazy">
        <span class="vehicle-badge ${badgeClass[v.status]}">${statusLabel[v.status]}</span>
      </div>
      <div class="vehicle-card-body">
        <h3>${v.title}</h3>
        <div class="vehicle-meta">
          <span>${formatMileage(v)}</span>
          <span>${v.year}</span>
        </div>
        <div class="vehicle-features">
          ${v.features.slice(0, 4).map(f => `<span>${f}</span>`).join('')}
        </div>
        <div style="display:flex;gap:8px;margin-top:16px;flex-wrap:wrap;">
          <a href="contact.html?vehicle=${encodeURIComponent(v.title)}" class="btn btn-primary call-for-pricing-btn" data-vehicle-name="${v.title}" style="flex:1;padding:10px 16px;font-size:0.85rem;text-align:center;min-width:120px;">Call for Pricing</a>
          <button class="btn btn-outline view-details-btn" data-id="${v.id}" data-vehicle-name="${v.title}" style="flex:1;padding:10px 16px;font-size:0.85rem;min-width:120px;">View Details</button>
        </div>
      </div>
    </article>`;
}

/* ---- Vehicle Detail Modal ---- */
function openVehicleModal(id) {
  const v = vehicles.find(v => v.id === id);
  if (!v) return;

  let modal = document.getElementById('vehicle-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'vehicle-modal';
    modal.className = 'vehicle-modal';
    document.body.appendChild(modal);
  }

  const statusLabel = { 'for-sale': 'For Sale', 'sold': 'Sold', 'coming-soon': 'Coming Soon' };

  /* Build organized specs sections */
  let specsHTML = '';
  if (v.specs) {
    const powertrainKeys = ['engine','horsepower','torque','transmission','drivetrain','fuelType','fuelTank'];
    const capacityKeys = ['gvwr','curbWeight','towingCapacity','payloadCapacity','dryWeight','hitchWeight','freshWater','grayWater','blackWater','lpGas','sleeps','slideOuts','axles','tires'];
    const specLabels = {
      engine:'Engine',horsepower:'Horsepower',torque:'Torque',transmission:'Transmission',drivetrain:'Drivetrain',
      gvwr:'GVWR',curbWeight:'Curb Weight',towingCapacity:'Towing Capacity',payloadCapacity:'Payload Capacity',
      fuelTank:'Fuel Tank',fuelType:'Fuel Type',dryWeight:'Dry Weight',hitchWeight:'Hitch Weight',
      freshWater:'Fresh Water',grayWater:'Gray Water',blackWater:'Black Water',
      lpGas:'LP Gas',sleeps:'Sleeps',slideOuts:'Slide-Outs',axles:'Axles',tires:'Tires'
    };
    function buildTable(keys) {
      const rows = keys.filter(k => v.specs[k]).map(k =>
        `<tr><td class="spec-label">${specLabels[k]||k}</td><td class="spec-value">${v.specs[k]}</td></tr>`
      );
      return rows.length ? `<table class="specs-table">${rows.join('')}</table>` : '';
    }
    const ptTable = buildTable(powertrainKeys);
    const capTable = buildTable(capacityKeys);
    specsHTML = `<div class="modal-specs">
      ${ptTable ? `<h3>Powertrain</h3>${ptTable}` : ''}
      ${capTable ? `<h3 style="margin-top:20px;">Capacities</h3>${capTable}` : ''}
    </div>`;
  }

  /* Build dimensions sections */
  let dimensionsHTML = '';
  if (v.dimensions) {
    const d = v.dimensions;
    dimensionsHTML = `<div class="modal-dimensions">
      ${d.exterior ? `<h3>Exterior Dimensions</h3>
        <table class="specs-table">${d.exterior.map(m => `<tr><td class="spec-label">${m.label}</td><td class="spec-value">${m.value}</td></tr>`).join('')}</table>` : ''}
      ${d.measurements ? `<h3 style="margin-top:20px;">${d.cabin ? 'Cargo Dimensions' : d.title || 'Interior Dimensions'}</h3>
        <table class="specs-table">${d.measurements.map(m => `<tr><td class="spec-label">${m.label}</td><td class="spec-value">${m.value}</td></tr>`).join('')}</table>` : ''}
      ${d.cabin ? `<h3 style="margin-top:20px;">Cabin Interior</h3>
        <table class="specs-table">${d.cabin.map(m => `<tr><td class="spec-label">${m.label}</td><td class="spec-value">${m.value}</td></tr>`).join('')}</table>` : ''}
    </div>`;
  }

  modal.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h2>${v.title}</h2>
        <button class="modal-close" aria-label="Close">&times;</button>
      </div>
      <div class="modal-gallery">
        ${v.photos.map(src => `<img src="${src}" alt="${v.title}" loading="lazy">`).join('')}
      </div>
      <div class="modal-body">
        <div class="vehicle-meta" style="margin-bottom:20px;">
          <span>${formatMileage(v)}</span>
          <span>${v.year} ${v.make} ${v.model}</span>
          <span class="vehicle-badge ${v.status === 'for-sale' ? 'badge-for-sale' : v.status === 'sold' ? 'badge-sold' : 'badge-coming-soon'}" style="position:static;">${statusLabel[v.status]}</span>
        </div>
        <p>${v.description}</p>
        <h3 style="margin-bottom:12px;">Key Features</h3>
        <div class="modal-features">
          ${v.features.map(f => `<span>${f}</span>`).join('')}
        </div>
        ${specsHTML}
        ${dimensionsHTML}
        ${v.status === 'for-sale' ? `
          <div class="vehicle-inquiry">
            <h3>Interested? Get More Info</h3>
            <form name="vehicle-inquiry" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/thank-you.html">
              <input type="hidden" name="form-name" value="vehicle-inquiry" />
              <div style="display:none"><input name="bot-field" /></div>
              <input type="hidden" name="vehicle" value="${v.title.replace(/"/g, '&quot;')}" />
              <input type="hidden" name="submitted-from" value="inventory" />
              <div class="form-group"><label>Name *</label><input type="text" name="name" required placeholder="Your name"></div>
              <div class="form-group"><label>Phone *</label><input type="tel" name="phone" required placeholder="(555) 123-4567"></div>
              <div class="form-group"><label>Email *</label><input type="email" name="email" required placeholder="you@example.com"></div>
              <div class="form-group"><label>Message *</label><textarea name="message" required placeholder="Tell us what you'd like to know...">I am interested in the ${v.title}. Please send me more information.</textarea></div>
              <!-- Google reCAPTCHA v2 - TEMPORARILY DISABLED while we confirm Netlify form submission -->
              <div class="inquiry-actions">
                <button type="submit" class="btn btn-primary" style="padding:10px 20px;font-size:0.85rem;">Send Inquiry</button>
                <a href="tel:+16502720334" class="btn btn-outline" style="padding:10px 20px;font-size:0.85rem;">Call Now</a>
              </div>
            </form>
            <p style="margin-top:16px;color:var(--tan);font-size:0.9rem;">Prefer to call? <a href="tel:+16502720334" style="font-weight:600;">(650) 272-0334</a></p>
          </div>` : ''}
      </div>
    </div>`;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  modal.querySelector('.modal-close').addEventListener('click', closeVehicleModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeVehicleModal();
  });

  /* Vehicle inquiry form: zero JavaScript touching it for now. Submits
     natively to Netlify via its type="submit" button. The reCAPTCHA widget
     in the template is also commented out while we confirm submissions land. */

  trackEvent('view_vehicle_details', { vehicle: v.title, vehicle_id: v.id });
}

/* Retry-render a g-recaptcha element until grecaptcha is loaded */
function renderRecaptchaWhenReady(div, attempts) {
  attempts = attempts || 0;
  if (attempts > 50) return; /* give up after ~10s */
  if (window.grecaptcha && typeof grecaptcha.render === 'function') {
    /* Avoid double-render: skip if already rendered */
    if (div.dataset.rendered === 'true') return;
    try {
      grecaptcha.render(div, { sitekey: '6LfvVK8sAAAAAGmEGo6Gd8XlfM1yL1ginllduNgx' });
      div.dataset.rendered = 'true';
    } catch (e) { /* swallow — may already be rendered by auto-init */ }
  } else {
    setTimeout(() => renderRecaptchaWhenReady(div, attempts + 1), 200);
  }
}

function closeVehicleModal() {
  const modal = document.getElementById('vehicle-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/* ---- Gallery ---- */
function initGallery() {
  const grid = document.getElementById('gallery-grid');
  if (!grid || typeof galleryImages === 'undefined') return;

  const filterBtns = document.querySelectorAll('.gallery-filters button');
  let lightbox = document.getElementById('lightbox');

  function render(category) {
    const imgs = category === 'all'
      ? galleryImages
      : galleryImages.filter(img => img.category === category);

    grid.innerHTML = imgs.map((img, i) => `
      <div class="gallery-item" data-index="${i}" data-category="${img.category}">
        <img src="${img.src}" alt="${img.alt}" loading="lazy">
        <div class="gallery-caption">${img.caption}</div>
      </div>
    `).join('');

    grid.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('click', () => {
        openLightbox(item.querySelector('img').src, item.querySelector('.gallery-caption').textContent);
      });
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      render(btn.dataset.filter);
    });
  });

  render('all');

  /* Lightbox */
  function openLightbox(src, caption) {
    if (!lightbox) {
      lightbox = document.createElement('div');
      lightbox.id = 'lightbox';
      lightbox.className = 'lightbox';
      document.body.appendChild(lightbox);
    }
    lightbox.innerHTML = `
      <button class="lightbox-close" aria-label="Close">&times;</button>
      <img src="${src}" alt="${caption}">
      <div class="lightbox-caption">${caption}</div>`;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';

    lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  function closeLightbox() {
    if (lightbox) {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  }
}

/* ---- Reviews ---- */
function initReviews() {
  const grid = document.getElementById('reviews-grid');
  if (!grid || typeof reviews === 'undefined') return;

  grid.innerHTML = reviews.map(r => {
    const stars = '&#9733;'.repeat(r.rating) + '&#9734;'.repeat(5 - r.rating);
    return `
      <div class="review-card">
        <div class="review-header">
          ${r.photo ? `<img class="review-avatar" src="${r.photo}" alt="${r.name}">` : ''}
          <div class="review-info">
            <h4>${r.name}</h4>
            <span class="review-location">${r.location}</span>
          </div>
        </div>
        <div class="review-stars">${stars}</div>
        <div class="review-vehicle">${r.vehicle}</div>
        <p class="review-text">${r.text}</p>
        <div class="review-date">${r.date}</div>
      </div>`;
  }).join('');
}

/* ---- Blog Listing ---- */
function initBlog() {
  const listing = document.getElementById('blog-listing');
  if (!listing || typeof blogPosts === 'undefined') return;

  const sorted = [...blogPosts].sort((a, b) => b.dateISO.localeCompare(a.dateISO));

  if (sorted.length === 0) {
    listing.innerHTML = '<p class="no-results">No blog posts yet. Check back soon!</p>';
    return;
  }

  listing.innerHTML = sorted.map(post => `
    <article class="blog-card">
      ${post.image ? `<img class="blog-card-img" src="${post.image}" alt="${post.title}" loading="lazy">` : ''}
      <div class="blog-card-body">
        <div class="blog-meta">
          <span>${post.date}</span>
          ${post.tags ? `<span class="blog-tags">${post.tags.join(' / ')}</span>` : ''}
        </div>
        <h2>${post.title}</h2>
        <p>${post.excerpt}</p>
        <a href="blog.html?post=${post.id}" class="btn btn-outline" style="padding:10px 20px;font-size:0.85rem;">Read More</a>
      </div>
    </article>
  `).join('');
}

/* ---- Blog Post Detail ---- */
function initBlogPost() {
  const container = document.getElementById('blog-post-detail');
  if (!container || typeof blogPosts === 'undefined') return;

  const params = new URLSearchParams(window.location.search);
  const postId = Number(params.get('post'));
  const post = blogPosts.find(p => p.id === postId);

  if (!post) {
    container.innerHTML = `
      <div class="text-center" style="padding:40px 0;">
        <h2>Post Not Found</h2>
        <p style="color:var(--tan);margin:16px 0;">The blog post you're looking for doesn't exist.</p>
        <a href="blog.html" class="btn btn-outline">Back to Blog</a>
      </div>`;
    return;
  }

  /* Update page title */
  document.title = post.title + ' — Overland Route Co. Blog';

  container.innerHTML = `
    <article class="blog-post">
      <div class="blog-post-header">
        <div class="blog-meta">
          <span>${post.date}</span>
          <span>By ${post.author}</span>
          ${post.tags ? `<span class="blog-tags">${post.tags.join(' / ')}</span>` : ''}
        </div>
        <h1>${post.title}</h1>
      </div>
      ${post.image ? `<img class="blog-post-hero-img" src="${post.image}" alt="${post.title}">` : ''}
      <div class="blog-post-content">
        ${post.content}
      </div>
      ${post.youtubeId ? `
        <div class="blog-video">
          <div class="video-wrapper">
            <iframe
              src="https://www.youtube-nocookie.com/embed/${post.youtubeId}"
              title="${post.title} — Video"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              loading="lazy"
            ></iframe>
          </div>
        </div>` : ''}
      <div class="share-buttons" style="margin-top:32px;">
        <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}" target="_blank" rel="noopener noreferrer" class="share-btn share-btn-facebook">Share on Facebook</a>
        <a href="https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}" target="_blank" rel="noopener noreferrer" class="share-btn share-btn-twitter">Share on Twitter</a>
        <button class="share-btn share-btn-copy" onclick="navigator.clipboard.writeText(window.location.href);this.textContent='Copied!';">Copy Link</button>
      </div>
      <div style="margin-top:24px;">
        <a href="blog.html" class="btn btn-outline">Back to Blog</a>
      </div>
    </article>`;
}

/* Contact, quote, and vehicle-inquiry forms submit natively to Netlify.
   Validation is handled by initFormValidation()/validateContactForm() above. */
