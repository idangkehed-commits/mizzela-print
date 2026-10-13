/**
 * MIZZELAA & PRINT x MIZELA DESIGN STUDIO
 * Application Logic - Natural Corporate Light UI
 * Complete E-Commerce Catalog, Interactive Design Studio, Cart & Checkout,
 * Order Tracker, Portfolio Gallery with Upload Feature, and Maps Integration.
 */

// ===================================================================
// BUSINESS CONFIGURATION & DATABASE
// ===================================================================
const CONFIG = {
  businessName: "Mizzelaa & Print",
  studioName: "Mizela Design Studio",
  instagramHandle: "@mizela_design_studio",
  instagramUrl: "https://instagram.com/mizela_design_studio",
  address: "Jl. Bojongloa, Kopo, Kec. Bojongloa Kaler, Kota Bandung, Jawa Barat 40233",
  mapsUrl: "https://maps.google.com/?q=Jl.+Bojongloa,+Kopo,+Kec.+Bojongloa+Kaler,+Kota+Bandung,+Jawa+Barat+40233",
  whatsappNumber: "6287727577451",
  phoneNumber: "0877-2757-7451",
  email: "mizela.designstudio@gmail.com",
  operationalHours: "Senin - Sabtu: 08:30 - 20:00 WIB | Minggu: 10:00 - 17:00 WIB"
};

// Default Homepage Visuals (Hero image, overlay text, & promo banner)
const DEFAULT_HOMEPAGE_VISUALS = {
  heroImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
  heroBadgeTitle: "Mizzelaa & Print Workshop",
  heroBadgeSub: "Jl. Bojongloa, Kopo, Bandung",
  heroBadgeRating: "4.9 / 5.0 (500+ Mitra)",
  promoEnabled: false,
  promoTitle: "Penawaran Spesial Cetak Grosir",
  promoSubtitle: "Dapatkan gratis ongkir se-Bandung & gratis mockup desain untuk setiap pemesanan di atas 1.000 pcs.",
  promoButtonText: "Konsultasi via WhatsApp"
};

// Comprehensive Catalog Data
const CATALOG_PRODUCTS = [
  // Category: Cup Minuman
  {
    id: "prod-cup-pp16",
    category: "cup",
    categoryName: "Cup Minuman",
    name: "Sablon Cup PP 16oz Slim",
    subtitle: "Pilihan utama kedai kopi kekinian & boba",
    image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
    minQty: 500,
    unit: "pcs",
    basePrice: 650,
    featured: true,
    tiers: [
      { min: 500, max: 999, price: 650 },
      { min: 1000, max: 2999, price: 590 },
      { min: 3000, max: 4999, price: 540 },
      { min: 5000, max: 999999, price: 490 }
    ],
    specs: "Bahan Plastik PP Food Grade, Tebal 7-8 gram, Tahan panas & dingin, Sablon 1 warna rekat kuat anti luntur.",
    productionDays: "3 - 4 Hari Kerja"
  },
  {
    id: "prod-cup-pet14",
    category: "cup",
    categoryName: "Cup Minuman",
    name: "Sablon Cup PET 14oz Bening",
    subtitle: "Gelas kaku super transparan kelas kafe premium",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80",
    minQty: 500,
    unit: "pcs",
    basePrice: 850,
    featured: false,
    tiers: [
      { min: 500, max: 999, price: 850 },
      { min: 1000, max: 2999, price: 790 },
      { min: 3000, max: 999999, price: 720 }
    ],
    specs: "Bahan PET Super Clear (seperti kaca), khusus minuman dingin, tebal & kokoh.",
    productionDays: "3 - 5 Hari Kerja"
  },
  {
    id: "prod-cup-inj500",
    category: "cup",
    categoryName: "Cup Minuman",
    name: "Cup Injection 500ml + Tutup Sambung",
    subtitle: "Gelas plastik tebal premium bisa digunakan ulang",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    minQty: 300,
    unit: "pcs",
    basePrice: 1450,
    featured: false,
    tiers: [
      { min: 300, max: 999, price: 1450 },
      { min: 1000, max: 2999, price: 1350 },
      { min: 3000, max: 999999, price: 1250 }
    ],
    specs: "Bahan Injection PP tebal, sudah termasuk tutup & stopper love, cocok untuk mocktail/cheese tea.",
    productionDays: "4 - 5 Hari Kerja"
  },
  {
    id: "prod-sealer-roll",
    category: "cup",
    categoryName: "Cup Minuman",
    name: "Lid Sealer Cup Roll Full Print",
    subtitle: "Plastik penutup press seal gelas minuman",
    image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=800&q=80",
    minQty: 1,
    unit: "roll (1000 cup)",
    basePrice: 120000,
    featured: false,
    tiers: [
      { min: 1, max: 4, price: 120000 },
      { min: 5, max: 9, price: 110000 },
      { min: 10, max: 999999, price: 100000 }
    ],
    specs: "Bahan plastik foodgrade berpori sensor, cetak rotogravure full color tajam, isi ± 1.000 cup per roll.",
    productionDays: "5 - 7 Hari Kerja"
  },

  // Category: Sablon Baju & Apparel DTF
  {
    id: "prod-kaos-combed24s",
    category: "baju",
    categoryName: "Sablon Baju",
    name: "Kaos Cotton Combed 24s + DTF A3",
    subtitle: "Standar kaos distro streetwear Bandung",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
    minQty: 6,
    unit: "pcs",
    basePrice: 72000,
    featured: true,
    tiers: [
      { min: 6, max: 11, price: 72000 },
      { min: 12, max: 49, price: 67000 },
      { min: 50, max: 99, price: 63000 },
      { min: 100, max: 999999, price: 58000 }
    ],
    specs: "Kain 100% Katun Combed 24s reaktif gramasi 180-190 gsm, sablon DTF resolusi 1440 DPI, anti retak.",
    productionDays: "2 - 3 Hari Kerja"
  },
  {
    id: "prod-kaos-combed30s",
    category: "baju",
    categoryName: "Sablon Baju",
    name: "Kaos Cotton Combed 30s + DTF A3",
    subtitle: "Kaos harian adem, halus & menyerap keringat",
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80",
    minQty: 6,
    unit: "pcs",
    basePrice: 65000,
    featured: false,
    tiers: [
      { min: 6, max: 11, price: 65000 },
      { min: 12, max: 49, price: 60000 },
      { min: 50, max: 99, price: 56000 },
      { min: 100, max: 999999, price: 52000 }
    ],
    specs: "Kain katun combed 30s gramasi 140-150 gsm lembut, sablon transfer film warna tajam presisi.",
    productionDays: "2 - 3 Hari Kerja"
  },
  {
    id: "prod-hoodie-fleece",
    category: "baju",
    categoryName: "Sablon Baju",
    name: "Hoodie Jumper Katun Fleece + DTF",
    subtitle: "Jaket hangat komunitas & merchandise kantor",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
    minQty: 6,
    unit: "pcs",
    basePrice: 125000,
    featured: false,
    tiers: [
      { min: 6, max: 11, price: 125000 },
      { min: 12, max: 49, price: 118000 },
      { min: 50, max: 999999, price: 110000 }
    ],
    specs: "Bahan Cotton Fleece tebal 280 gsm berbulu halus di bagian dalam, sablon DTF besar area punggung/dada.",
    productionDays: "3 - 5 Hari Kerja"
  },
  {
    id: "prod-dtf-meteran",
    category: "baju",
    categoryName: "Sablon Baju",
    name: "Print DTF Meteran (Area 58 x 100 cm)",
    subtitle: "Jasa cetak film DTF siap press untuk konveksi",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80",
    minQty: 1,
    unit: "meter",
    basePrice: 30000,
    featured: false,
    tiers: [
      { min: 1, max: 4, price: 30000 },
      { min: 5, max: 19, price: 27000 },
      { min: 20, max: 999999, price: 24000 }
    ],
    specs: "PET Film lebar 58cm, tinta textile original, bubuk lem hotmelt merata, tinggal press suhu 160°C 15 detik.",
    productionDays: "1 Hari Kerja (Bisa Ditunggu)"
  },

  // Category: Benda Datar & UV Flatbed
  {
    id: "prod-plakat-akrilik",
    category: "flat",
    categoryName: "Benda Datar & UV",
    name: "Plakat Akrilik 15x20cm + Stand Kayu",
    subtitle: "Penghargaan kenang-kenangan & trofi wisuda",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
    minQty: 1,
    unit: "pcs",
    basePrice: 85000,
    featured: true,
    tiers: [
      { min: 1, max: 4, price: 85000 },
      { min: 5, max: 19, price: 78000 },
      { min: 20, max: 999999, price: 68000 }
    ],
    specs: "Akrilik bening tebal 5mm atau 8mm potong laser presisi, print UV Flatbed langsung timbul + dudukan kayu jati belanda.",
    productionDays: "1 - 2 Hari Kerja"
  },
  {
    id: "prod-tumbler-uv",
    category: "flat",
    categoryName: "Benda Datar & UV",
    name: "Tumbler Stainless Vacuum 500ml UV",
    subtitle: "Souvenir eksklusif tahan panas dingin 12 jam",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
    minQty: 5,
    unit: "pcs",
    basePrice: 55000,
    featured: true,
    tiers: [
      { min: 5, max: 19, price: 55000 },
      { min: 20, max: 49, price: 49000 },
      { min: 50, max: 999999, price: 44000 }
    ],
    specs: "Tumbler bahan Stainless SUS 304 doff, print UV rotary atau flatbed 1 sisi / 2 sisi.",
    productionDays: "2 - 3 Hari Kerja"
  },
  {
    id: "prod-emoney-custom",
    category: "flat",
    categoryName: "Benda Datar & UV",
    name: "Cetak Kartu E-Money / Flazz / ID Card",
    subtitle: "Print UV timbul bolak-balik tahan gores",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80",
    minQty: 2,
    unit: "pcs",
    basePrice: 35000,
    featured: false,
    tiers: [
      { min: 2, max: 9, price: 35000 },
      { min: 10, max: 49, price: 30000 },
      { min: 50, max: 999999, price: 25000 }
    ],
    specs: "Kartu resmi saldo 0, cetak UV flatbed doff/glossy langsung ke kartu, tidak mudah pudar.",
    productionDays: "1 - 2 Hari Kerja"
  },

  // Category: Stiker & Kemasan
  {
    id: "prod-stiker-vinyl",
    category: "kemasan",
    categoryName: "Stiker & Kemasan",
    name: "Stiker Vinyl A3+ Kiss Cut (Tahan Air)",
    subtitle: "Label kemasan toples, botol & cup minuman",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80",
    minQty: 5,
    unit: "lembar A3+",
    basePrice: 15000,
    featured: false,
    tiers: [
      { min: 5, max: 19, price: 15000 },
      { min: 20, max: 49, price: 13000 },
      { min: 50, max: 999999, price: 11000 }
    ],
    specs: "Bahan vinyl susu tahan air & minyak, laminasi doff/glossy, sudah dicutting sesuai bentuk pola logo.",
    productionDays: "1 - 2 Hari Kerja"
  }
];

// Helper: Get catalog products from localStorage or default
function getCatalogProducts() {
  const saved = localStorage.getItem('mizzela_catalog_products');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    } catch (e) {}
  }
  return CATALOG_PRODUCTS;
}

// Order Tracking Mock Database (Demo orders for real customer experience)
const MOCK_ORDERS = {
  "MZL-8821": {
    orderId: "MZL-8821",
    customerName: "Kopi Sudut Kopo (Mas Dimas)",
    product: "Sablon Cup PP 16oz Slim",
    qty: "2.000 pcs",
    orderDate: "12 Okt 2026",
    estComplete: "15 Okt 2026",
    currentStep: 3, // 1: File Acc, 2: Mesin Cetak, 3: QC & Packing, 4: Siap Ambil / Kirim
    statusText: "Tahap Quality Control (QC) & Pengepakan Kardus",
    shippingMethod: "Ambil Sendiri di Workshop Jl. Bojongloa Kopo"
  },
  "MZL-7742": {
    orderId: "MZL-7742",
    customerName: "Urban Syndicate Clothing",
    product: "Kaos Combed 24s Hitam + DTF A3",
    qty: "60 pcs",
    orderDate: "11 Okt 2026",
    estComplete: "14 Okt 2026",
    currentStep: 2,
    statusText: "Sedang Berjalan di Mesin Sablon DTF Epson i3200",
    shippingMethod: "Pengiriman Gosend Instant Area Bandung"
  },
  "MZL-9104": {
    orderId: "MZL-9104",
    customerName: "PT Nusantara Inovasi",
    product: "Plakat Akrilik 15x20cm Stand Kayu UV",
    qty: "25 pcs",
    orderDate: "10 Okt 2026",
    estComplete: "12 Okt 2026",
    currentStep: 4,
    statusText: "Selesai & Telah Diserahkan ke Klien",
    shippingMethod: "Telah Diambil di Workshop"
  }
};

// Initial Portfolio Gallery
const DEFAULT_GALLERY = [
  {
    id: "gal-1",
    title: "Sablon Cup PP 16oz Slim Doff",
    category: "cup",
    categoryName: "Cup Minuman",
    client: "Kopi Sudut Kopo",
    desc: "Cetak sablon presisi tinggi 1 warna solid hitam pekat, hasil tahan gesek & anti kelupas saat kena es batu dingin.",
    image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
    date: "12 Okt 2026"
  },
  {
    id: "gal-2",
    title: "Kaos Combed 24s DTF Streetwear",
    category: "baju",
    categoryName: "Sablon Baju",
    client: "Brand Distro Bandung",
    desc: "Sablon Direct to Film (DTF) resolusi 1440 DPI, gradasi warna menyala dengan ketahanan cuci hingga 100x tanpa pecah.",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
    date: "10 Okt 2026"
  },
  {
    id: "gal-3",
    title: "Plakat Akrilik UV Flatbed & Stand Kayu",
    category: "flat",
    categoryName: "Benda Datar & Akrilik",
    client: "PT Inovasi Digital",
    desc: "Akrilik tebal 8mm potong laser presisi dipadu cetak UV Flatbed timbul tekstur dan dudukan kayu jati belanda.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
    date: "08 Okt 2026"
  },
  {
    id: "gal-4",
    title: "Tumbler Stainless Vacuum UV 360°",
    category: "flat",
    categoryName: "Benda Datar & Akrilik",
    client: "Komunitas Barista",
    desc: "Print UV rotary mengitari tumbler stainless dove, detail garis super halus tidak mudah tergores.",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
    date: "05 Okt 2026"
  },
  {
    id: "gal-5",
    title: "Cup Injection 500ml + Tutup Sambung",
    category: "cup",
    categoryName: "Cup Minuman",
    client: "Bobatea Cafe",
    desc: "Cup plastik injection tebal premium dengan sablon logo 2 warna cerah, cocok untuk brand minuman kelas mall.",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80",
    date: "02 Okt 2026"
  },
  {
    id: "gal-6",
    title: "Stiker Vinyl Die-Cut Laminasi Doff",
    category: "kemasan",
    categoryName: "Stiker & Kemasan",
    client: "Kedai Kopi & Donat",
    desc: "Stiker tahan air (waterproof) dan tahan minyak untuk label toples makanan dan cup take away.",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80",
    date: "25 Sep 2026"
  }
];

// ===================================================================
// APPLICATION STATE
// ===================================================================
let state = {
  currentView: 'home',
  cart: [],
  gallery: [],
  selectedCatalogProduct: null,
  
  // Customizer State
  studio: {
    productType: 'cup-pp16',
    category: 'cup',
    colorOrLiquid: '#78350f',
    logoUrl: null,
    logoText: 'KOPI MIZELA',
    logoScale: 1,
    logoY: 0,
    qty: 500
  }
};

// ===================================================================
// APP INITIALIZATION
// ===================================================================
document.addEventListener('DOMContentLoaded', () => {
  loadBusinessSettings();
  loadHomepageVisuals();
  renderHomeFeaturedProducts();
  initOperationalStatus();
  initNavigation();
  initCatalogView();
  initStudioCustomizer();
  initGalleryView();
  initCart();
});

// Load Homepage Visuals from localStorage or fallback
function loadHomepageVisuals() {
  let visuals = DEFAULT_HOMEPAGE_VISUALS;
  const saved = localStorage.getItem('mizzela_homepage_visuals');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      visuals = { ...DEFAULT_HOMEPAGE_VISUALS, ...parsed };
    } catch (e) {}
  }

  const heroImg = document.getElementById('hero-banner-img');
  if (heroImg && visuals.heroImage) heroImg.src = visuals.heroImage;

  const heroTitle = document.getElementById('hero-badge-title');
  if (heroTitle && visuals.heroBadgeTitle) heroTitle.innerText = visuals.heroBadgeTitle;

  const heroSub = document.getElementById('hero-badge-sub');
  if (heroSub && visuals.heroBadgeSub) heroSub.innerText = visuals.heroBadgeSub;

  const heroRating = document.getElementById('hero-badge-rating');
  if (heroRating && visuals.heroBadgeRating) {
    heroRating.innerHTML = `<i class="fa-solid fa-star"></i> ${visuals.heroBadgeRating}`;
  }

  // Home Promo Banner
  const promoWrap = document.getElementById('home-promo-banner');
  if (promoWrap) {
    if (visuals.promoEnabled) {
      promoWrap.style.display = 'block';
      promoWrap.innerHTML = `
        <div class="home-promo-banner-card">
          <div>
            <div style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em; background: rgba(255,255,255,0.2); display: inline-block; padding: 2px 8px; border-radius: 4px; margin-bottom: 8px; font-weight: 700;">
              <i class="fa-solid fa-bullhorn"></i> Informasi & Promo Spesial
            </div>
            <h3>${visuals.promoTitle || 'Promo Menarik Percetakan Mizzelaa'}</h3>
            <p>${visuals.promoSubtitle || 'Hubungi WhatsApp kami untuk konsultasi sampel gratis dan potongan harga khusus partai besar.'}</p>
          </div>
          <a href="https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent('Halo Mizzelaa, saya ingin konsultasi penawaran cetak promo.')}" target="_blank" class="home-promo-banner-btn">
            <i class="fa-brands fa-whatsapp"></i> ${visuals.promoButtonText || 'Klaim Promo via WhatsApp'}
          </a>
        </div>
      `;
    } else {
      promoWrap.style.display = 'none';
    }
  }
}

// Render Featured Products dynamically on Beranda
function renderHomeFeaturedProducts() {
  const container = document.getElementById('home-featured-products-grid');
  if (!container) return;

  const allProducts = getCatalogProducts();
  let featured = allProducts.filter(p => p.featured === true);
  if (featured.length === 0) {
    featured = allProducts.slice(0, 4);
  }

  container.innerHTML = featured.map(p => {
    const lowestPrice = (p.tiers && p.tiers.length > 0) 
      ? p.tiers[p.tiers.length - 1].price 
      : p.basePrice;

    return `
      <div class="product-item-card">
        <div class="product-img-holder">
          <span class="product-cat-chip">${p.categoryName || 'Percetakan'}</span>
          <img src="${p.image}" alt="${p.name}" loading="lazy">
        </div>
        <div class="product-body-content">
          <h4 class="product-title">${p.name}</h4>
          <p class="product-spec-bullet">${p.subtitle || p.specs || ''}</p>
          <div class="product-price-section">
            <div>
              <div class="price-unit-label">Mulai dari:</div>
              <div class="price-unit-number">Rp ${formatRupiah(lowestPrice)} <span style="font-size:0.75rem; font-weight:normal; color:#64748b;">/ ${p.unit}</span></div>
            </div>
            <button class="btn btn-primary btn-sm" onclick="openProductDetailModal('${p.id}')">Pesan Sekarang</button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function loadBusinessSettings() {
  const saved = localStorage.getItem('mizzela_business_settings');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (parsed.businessName) CONFIG.businessName = parsed.businessName;
      if (parsed.studioName) CONFIG.studioName = parsed.studioName;
      if (parsed.whatsappNumber) CONFIG.whatsappNumber = parsed.whatsappNumber;
      if (parsed.phoneNumber) CONFIG.phoneNumber = parsed.phoneNumber;
      if (parsed.instagramHandle) CONFIG.instagramHandle = parsed.instagramHandle;
      if (parsed.instagramUrl) CONFIG.instagramUrl = parsed.instagramUrl;
      if (parsed.address) CONFIG.address = parsed.address;
      if (parsed.operationalHours) CONFIG.operationalHours = parsed.operationalHours;
      applySettingsToDOM();
    } catch (e) {}
  }
}

function applySettingsToDOM() {
  // Update brand name
  document.querySelectorAll('.brand-title').forEach(el => {
    const parts = CONFIG.businessName.split('&');
    if (parts.length > 1) {
      el.innerHTML = `${parts[0].trim()} <span>& ${parts[1].trim()}</span>`;
    } else {
      el.innerText = CONFIG.businessName;
    }
  });

  // Update brand subtitle
  document.querySelectorAll('.brand-subtitle').forEach(el => {
    el.innerText = CONFIG.studioName;
  });

  // Update WhatsApp links
  document.querySelectorAll('a[href*="wa.me"]').forEach(el => {
    el.href = `https://wa.me/${CONFIG.whatsappNumber}`;
  });

  // Update Instagram links
  document.querySelectorAll('a[href*="instagram.com"]').forEach(el => {
    el.href = CONFIG.instagramUrl;
    el.innerHTML = `<i class="fa-brands fa-instagram"></i> ${CONFIG.instagramHandle}`;
  });
}

// Update Workshop Live Status (Senin - Sabtu: 08:30 - 20:00, Minggu: 10:00 - 17:00)
function initOperationalStatus() {
  const statusEl = document.getElementById('top-status-indicator');
  if (!statusEl) return;

  const now = new Date();
  const day = now.getDay();
  const decHour = now.getHours() + now.getMinutes() / 60;

  let isOpen = false;
  if (day === 0) {
    if (decHour >= 10 && decHour < 17) isOpen = true;
  } else {
    if (decHour >= 8.5 && decHour < 20) isOpen = true;
  }

  if (isOpen) {
    statusEl.className = 'top-status-indicator';
    statusEl.innerHTML = `<span class="top-status-dot"></span> Workshop Buka Hari Ini (08:30 - 20:00 WIB)`;
  } else {
    statusEl.className = 'top-status-indicator closed';
    statusEl.innerHTML = `<span class="top-status-dot"></span> Workshop Buka Besok Jam 08:30 WIB`;
  }
}

// Multi-View Page Switching
function initNavigation() {
  const navBtns = document.querySelectorAll('.nav-item-btn');
  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const view = btn.dataset.view;
      switchView(view);
    });
  });

  // Mobile menu toggle
  const mobileToggle = document.querySelector('.mobile-menu-btn');
  const navbarNav = document.querySelector('.navbar-nav');
  if (mobileToggle && navbarNav) {
    mobileToggle.addEventListener('click', () => {
      navbarNav.classList.toggle('mobile-nav-active');
    });
  }
}

window.switchView = function(viewId) {
  state.currentView = viewId;

  // Update navbar buttons
  document.querySelectorAll('.nav-item-btn').forEach(btn => {
    if (btn.dataset.view === viewId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Close mobile nav if opened
  const navbarNav = document.querySelector('.navbar-nav');
  if (navbarNav) navbarNav.classList.remove('mobile-nav-active');

  // Toggle active view panes
  document.querySelectorAll('.main-view-pane').forEach(pane => {
    pane.classList.remove('active');
  });

  const targetPane = document.getElementById(`view-${viewId}`);
  if (targetPane) {
    targetPane.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Refresh dynamic content when views switch
  if (viewId === 'home') {
    loadHomepageVisuals();
    renderHomeFeaturedProducts();
  } else if (viewId === 'catalog') {
    renderCatalogProducts('all');
  }
};

// ===================================================================
// CATALOG VIEW & MODAL DETAIL
// ===================================================================
function initCatalogView() {
  renderCatalogProducts('all');

  const filterBtns = document.querySelectorAll('.catalog-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.cat;
      renderCatalogProducts(cat);
    });
  });

  const searchInput = document.getElementById('catalog-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      filterCatalogSearch(query);
    });
  }
}

function renderCatalogProducts(catFilter) {
  const container = document.getElementById('catalog-products-list');
  if (!container) return;

  const allProducts = getCatalogProducts();
  const items = (!catFilter || catFilter === 'all') 
    ? allProducts 
    : allProducts.filter(p => p.category === catFilter);

  if (items.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; background: #fff; border: 1px solid #e2e8f0; border-radius: 8px;">
        <p style="color: #64748b; font-size: 0.95rem;">Belum ada produk untuk kategori ini. Tambahkan produk melalui Portal Admin.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = items.map(p => {
    const lowestPrice = (p.tiers && p.tiers.length > 0) 
      ? p.tiers[p.tiers.length - 1].price 
      : p.basePrice;

    return `
      <div class="product-item-card">
        <div class="product-img-holder">
          <span class="product-cat-chip">${p.categoryName || 'Percetakan'}</span>
          <img src="${p.image}" alt="${p.name}" loading="lazy">
        </div>
        <div class="product-body-content">
          <h4 class="product-title">${p.name}</h4>
          <p class="product-spec-bullet">${p.subtitle || ''}. Min. order ${p.minQty} ${p.unit}.</p>
          <div class="product-price-section">
            <div>
              <div class="price-unit-label">Mulai dari:</div>
              <div class="price-unit-number">Rp ${formatRupiah(lowestPrice)} <span style="font-size:0.75rem; font-weight:normal; color:#64748b;">/${p.unit}</span></div>
            </div>
            <button class="btn btn-primary btn-sm" onclick="openProductDetailModal('${p.id}')">
              Detail & Pesan
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function filterCatalogSearch(query) {
  const container = document.getElementById('catalog-products-list');
  if (!container) return;

  const allProducts = getCatalogProducts();
  const filtered = allProducts.filter(p => 
    p.name.toLowerCase().includes(query) || 
    (p.categoryName && p.categoryName.toLowerCase().includes(query)) ||
    (p.specs && p.specs.toLowerCase().includes(query)) ||
    (p.subtitle && p.subtitle.toLowerCase().includes(query))
  );

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; background: #fff; border: 1px solid #e2e8f0; border-radius: 8px;">
        <p style="color: #64748b; font-size: 0.95rem;">Produk yang Anda cari tidak ditemukan. Hubungi admin kami untuk cetak custom.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(p => {
    const lowestPrice = (p.tiers && p.tiers.length > 0) 
      ? p.tiers[p.tiers.length - 1].price 
      : p.basePrice;

    return `
      <div class="product-item-card">
        <div class="product-img-holder">
          <span class="product-cat-chip">${p.categoryName || 'Percetakan'}</span>
          <img src="${p.image}" alt="${p.name}">
        </div>
        <div class="product-body-content">
          <h4 class="product-title">${p.name}</h4>
          <p class="product-spec-bullet">${p.subtitle || ''}</p>
          <div class="product-price-section">
            <div>
              <div class="price-unit-label">Mulai dari:</div>
              <div class="price-unit-number">Rp ${formatRupiah(lowestPrice)} / ${p.unit}</div>
            </div>
            <button class="btn btn-primary btn-sm" onclick="openProductDetailModal('${p.id}')">
              Detail & Pesan
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

window.openProductDetailModal = function(productId) {
  const allProducts = getCatalogProducts();
  const product = allProducts.find(p => p.id === productId);
  if (!product) return;

  state.selectedCatalogProduct = product;
  const modal = document.getElementById('product-detail-modal');

  document.getElementById('modal-prod-img').src = product.image;
  document.getElementById('modal-prod-name').innerText = product.name;
  document.getElementById('modal-prod-cat').innerText = product.categoryName;
  document.getElementById('modal-prod-specs').innerText = product.specs;
  document.getElementById('modal-prod-leadtime').innerText = product.productionDays;
  document.getElementById('modal-prod-minqty').innerText = `${product.minQty} ${product.unit}`;

  // Render Tier Table
  const tierWrap = document.getElementById('modal-prod-tier-table');
  tierWrap.innerHTML = `
    <table style="width:100%; border-collapse:collapse; font-size:0.86rem; margin-top:8px;">
      <thead>
        <tr style="background:#f1f5f9; text-align:left; border-bottom:1px solid #cbd5e1;">
          <th style="padding:6px 10px;">Rentang Kuantitas</th>
          <th style="padding:6px 10px;">Harga Satuan</th>
        </tr>
      </thead>
      <tbody>
        ${product.tiers.map(t => `
          <tr style="border-bottom:1px solid #e2e8f0;">
            <td style="padding:6px 10px;">${t.min.toLocaleString('id-ID')} ${t.max < 900000 ? '- ' + t.max.toLocaleString('id-ID') : '+'} ${product.unit}</td>
            <td style="padding:6px 10px; font-weight:700; color:#1e40af;">Rp ${formatRupiah(t.price)} / ${product.unit}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;

  // Set initial qty input
  const qtyInput = document.getElementById('modal-order-qty');
  qtyInput.value = product.minQty;
  qtyInput.min = product.minQty;
  updateModalCalc();

  if (modal) modal.classList.add('active');
};

window.closeProductDetailModal = function() {
  const modal = document.getElementById('product-detail-modal');
  if (modal) modal.classList.remove('active');
};

window.updateModalCalc = function() {
  const product = state.selectedCatalogProduct;
  if (!product) return;

  const qtyInput = document.getElementById('modal-order-qty');
  let qty = parseInt(qtyInput.value) || product.minQty;
  if (qty < 1) qty = 1;

  let unitPrice = product.basePrice;
  for (const t of product.tiers) {
    if (qty >= t.min && qty <= t.max) {
      unitPrice = t.price;
      break;
    }
  }

  const total = unitPrice * qty;
  document.getElementById('modal-calc-unit').innerText = `Rp ${formatRupiah(unitPrice)} / ${product.unit}`;
  document.getElementById('modal-calc-total').innerText = `Rp ${formatRupiah(total)}`;
};

window.addModalItemToCart = function() {
  const product = state.selectedCatalogProduct;
  if (!product) return;

  const qty = parseInt(document.getElementById('modal-order-qty').value) || product.minQty;
  const notes = document.getElementById('modal-order-notes').value.trim();

  let unitPrice = product.basePrice;
  for (const t of product.tiers) {
    if (qty >= t.min && qty <= t.max) {
      unitPrice = t.price;
      break;
    }
  }

  const cartItem = {
    id: 'cart-' + Date.now(),
    productId: product.id,
    name: product.name,
    categoryName: product.categoryName,
    qty: qty,
    unit: product.unit,
    unitPrice: unitPrice,
    totalPrice: unitPrice * qty,
    notes: notes || 'Standar cetak',
    image: product.image
  };

  state.cart.push(cartItem);
  saveCart();
  closeProductDetailModal();
  openCartDrawer();
  showToast(`✅ "${product.name}" berhasil dimasukkan ke keranjang!`);
};

// ===================================================================
// DESIGN STUDIO / CUSTOMIZER
// ===================================================================
function initStudioCustomizer() {
  renderStudioControls();
  renderStudioStage();
  recalcStudioPrice();

  const qtyInput = document.getElementById('studio-qty-input');
  if (qtyInput) {
    qtyInput.addEventListener('input', (e) => {
      state.studio.qty = Math.max(1, parseInt(e.target.value) || 1);
      recalcStudioPrice();
    });
  }
}

function renderStudioControls() {
  const container = document.getElementById('studio-dynamic-controls');
  if (!container) return;

  const prod = state.studio.productType;

  if (prod.startsWith('cup')) {
    container.innerHTML = `
      <div class="form-field-group">
        <label class="field-label">Pilih Jenis Cup Minuman</label>
        <div class="radio-pills-row">
          <div class="radio-pill-item ${state.studio.productType === 'cup-pp16' ? 'active' : ''}" onclick="setStudioProduct('cup-pp16', 'cup')">Cup PP 16oz Slim</div>
          <div class="radio-pill-item ${state.studio.productType === 'cup-pet14' ? 'active' : ''}" onclick="setStudioProduct('cup-pet14', 'cup')">Cup PET 14oz Bening</div>
          <div class="radio-pill-item ${state.studio.productType === 'cup-inj500' ? 'active' : ''}" onclick="setStudioProduct('cup-inj500', 'cup')">Cup Injection 500ml</div>
        </div>
      </div>

      <div class="form-field-group">
        <label class="field-label">Simulasi Warna Isi Minuman</label>
        <div class="clean-color-swatches">
          <div class="swatch-circle ${state.studio.colorOrLiquid === '#78350f' ? 'active' : ''}" style="background:#78350f;" title="Kopi Susu" onclick="setStudioColor('#78350f')"></div>
          <div class="swatch-circle ${state.studio.colorOrLiquid === '#166534' ? 'active' : ''}" style="background:#166534;" title="Matcha Latte" onclick="setStudioColor('#166534')"></div>
          <div class="swatch-circle ${state.studio.colorOrLiquid === '#c2410c' ? 'active' : ''}" style="background:#c2410c;" title="Thai Tea" onclick="setStudioColor('#c2410c')"></div>
          <div class="swatch-circle ${state.studio.colorOrLiquid === 'transparent' ? 'active' : ''}" style="background:#e2e8f0;" title="Bening / Kosong" onclick="setStudioColor('transparent')"></div>
        </div>
      </div>
    `;
  } else if (prod.startsWith('kaos')) {
    container.innerHTML = `
      <div class="form-field-group">
        <label class="field-label">Pilih Jenis Kaos / Apparel</label>
        <div class="radio-pills-row">
          <div class="radio-pill-item ${state.studio.productType === 'kaos-24s' ? 'active' : ''}" onclick="setStudioProduct('kaos-24s', 'baju')">Cotton Combed 24s</div>
          <div class="radio-pill-item ${state.studio.productType === 'kaos-30s' ? 'active' : ''}" onclick="setStudioProduct('kaos-30s', 'baju')">Cotton Combed 30s</div>
        </div>
      </div>

      <div class="form-field-group">
        <label class="field-label">Pilih Warna Kain Kaos</label>
        <div class="clean-color-swatches">
          <div class="swatch-circle ${state.studio.colorOrLiquid === '#0f172a' ? 'active' : ''}" style="background:#0f172a;" title="Hitam Jet Black" onclick="setStudioColor('#0f172a')"></div>
          <div class="swatch-circle ${state.studio.colorOrLiquid === '#ffffff' ? 'active' : ''}" style="background:#ffffff;" title="Putih Bersih" onclick="setStudioColor('#ffffff')"></div>
          <div class="swatch-circle ${state.studio.colorOrLiquid === '#1e3a8a' ? 'active' : ''}" style="background:#1e3a8a;" title="Navy Blue" onclick="setStudioColor('#1e3a8a')"></div>
          <div class="swatch-circle ${state.studio.colorOrLiquid === '#14532d' ? 'active' : ''}" style="background:#14532d;" title="Forest Green" onclick="setStudioColor('#14532d')"></div>
          <div class="swatch-circle ${state.studio.colorOrLiquid === '#881337' ? 'active' : ''}" style="background:#881337;" title="Maroon" onclick="setStudioColor('#881337')"></div>
        </div>
      </div>
    `;
  } else if (prod.startsWith('flat')) {
    container.innerHTML = `
      <div class="form-field-group">
        <label class="field-label">Pilih Produk Datar / Akrilik</label>
        <div class="radio-pills-row">
          <div class="radio-pill-item ${state.studio.productType === 'flat-plakat' ? 'active' : ''}" onclick="setStudioProduct('flat-plakat', 'flat')">Plakat Akrilik Stand Kayu</div>
          <div class="radio-pill-item ${state.studio.productType === 'flat-tumbler' ? 'active' : ''}" onclick="setStudioProduct('flat-tumbler', 'flat')">Tumbler Stainless UV</div>
          <div class="radio-pill-item ${state.studio.productType === 'flat-emoney' ? 'active' : ''}" onclick="setStudioProduct('flat-emoney', 'flat')">Kartu E-Money UV</div>
        </div>
      </div>
    `;
  }
}

function renderStudioStage() {
  const stage = document.getElementById('studio-canvas-content');
  if (!stage) return;

  const prod = state.studio.productType;
  const logoUrl = state.studio.logoUrl;
  const scale = state.studio.logoScale;
  const posY = state.studio.logoY;
  const logoText = state.studio.logoText;

  if (prod.startsWith('cup')) {
    const liquid = state.studio.colorOrLiquid;
    stage.innerHTML = `
      <div class="cup-preview-obj">
        <div class="cup-top-rim"></div>
        <div class="cup-cone-body">
          ${liquid !== 'transparent' ? `<div class="cup-fill-liquid" style="background-color: ${liquid};"></div>` : ''}
          ${logoUrl 
            ? `<img src="${logoUrl}" class="cup-center-logo" style="transform: translate(-50%, calc(-50% + ${posY}px)) scale(${scale});" alt="Logo Sablon">` 
            : `<div class="cup-center-logo" style="transform: translate(-50%, calc(-50% + ${posY}px)) scale(${scale}); text-align:center; color:#fff; font-weight:800; font-size:0.85rem; border:2px dashed #ffffff; padding:6px 10px; border-radius:6px; background:rgba(0,0,0,0.3);">
                 <i class="fa-solid fa-mug-hot"></i><br>${logoText}
               </div>`
          }
        </div>
      </div>
    `;
  } else if (prod.startsWith('kaos')) {
    const shirtColor = state.studio.colorOrLiquid;
    stage.innerHTML = `
      <div class="tshirt-preview-obj">
        <svg viewBox="0 0 400 400" style="width:100%; height:100%;" fill="${shirtColor}">
          <path d="M 120 40 L 160 70 C 180 85 220 85 240 70 L 280 40 L 370 110 L 325 160 L 290 135 L 290 350 C 290 360 280 370 270 370 L 130 370 C 120 370 110 360 110 350 L 110 135 L 75 160 L 30 110 Z" stroke="#94a3b8" stroke-width="2"/>
          <path d="M 160 70 C 180 95 220 95 240 70" fill="none" stroke="#64748b" stroke-width="3"/>
        </svg>
        ${logoUrl 
          ? `<img src="${logoUrl}" class="tshirt-center-logo" style="transform: translate(-50%, calc(-50% + ${posY}px)) scale(${scale});" alt="Artwork DTF">` 
          : `<div class="tshirt-center-logo" style="transform: translate(-50%, calc(-50% + ${posY}px)) scale(${scale}); text-align:center; color:${shirtColor === '#ffffff' ? '#0f172a' : '#ffffff'}; font-weight:800; font-size:0.9rem; border:2px dashed currentColor; padding:8px 12px; border-radius:6px;">
               <i class="fa-solid fa-shirt"></i><br>${logoText}
             </div>`
        }
      </div>
    `;
  } else if (prod.startsWith('flat')) {
    stage.innerHTML = `
      <div class="acrylic-preview-obj">
        <div class="acrylic-board">
          ${logoUrl 
            ? `<img src="${logoUrl}" class="acrylic-center-logo" style="transform: scale(${scale}) translateY(${posY}px);" alt="Artwork Akrilik">` 
            : `<div class="acrylic-center-logo" style="text-align:center; color:#1e40af; font-weight:800; font-size:0.85rem; border:2px dashed #3b82f6; padding:10px 14px; border-radius:6px;">
                 <i class="fa-solid fa-award" style="font-size:1.6rem; color:#f59e0b; margin-bottom:4px;"></i><br>${logoText}
               </div>`
          }
        </div>
        <div class="acrylic-wood-stand"></div>
      </div>
    `;
  }
}

function recalcStudioPrice() {
  const prodType = state.studio.productType;
  const qty = state.studio.qty;

  let basePrice = 650;
  let unitName = "pcs";
  let prodLabel = "Cup PP 16oz Slim";

  if (prodType === 'cup-pp16') {
    prodLabel = "Cup PP 16oz Slim";
    basePrice = qty >= 5000 ? 490 : (qty >= 3000 ? 540 : (qty >= 1000 ? 590 : 650));
  } else if (prodType === 'cup-pet14') {
    prodLabel = "Cup PET 14oz Bening";
    basePrice = qty >= 3000 ? 720 : (qty >= 1000 ? 790 : 850);
  } else if (prodType === 'cup-inj500') {
    prodLabel = "Cup Injection 500ml + Tutup";
    basePrice = qty >= 3000 ? 1250 : (qty >= 1000 ? 1350 : 1450);
  } else if (prodType === 'kaos-24s') {
    prodLabel = "Kaos Combed 24s + DTF A3";
    basePrice = qty >= 100 ? 58000 : (qty >= 50 ? 63000 : (qty >= 12 ? 67000 : 72000));
  } else if (prodType === 'kaos-30s') {
    prodLabel = "Kaos Combed 30s + DTF A3";
    basePrice = qty >= 100 ? 52000 : (qty >= 50 ? 56000 : (qty >= 12 ? 60000 : 65000));
  } else if (prodType === 'flat-plakat') {
    prodLabel = "Plakat Akrilik 15x20cm Stand Kayu";
    basePrice = qty >= 20 ? 68000 : (qty >= 5 ? 78000 : 85000);
  } else if (prodType === 'flat-tumbler') {
    prodLabel = "Tumbler Stainless Vacuum 500ml UV";
    basePrice = qty >= 50 ? 44000 : (qty >= 20 ? 49000 : 55000);
  } else if (prodType === 'flat-emoney') {
    prodLabel = "Kartu E-Money Custom UV 2 Sisi";
    basePrice = qty >= 50 ? 25000 : (qty >= 10 ? 30000 : 35000);
  }

  const total = basePrice * qty;

  const unitEl = document.getElementById('studio-unit-price');
  const totalEl = document.getElementById('studio-total-price');
  const labelEl = document.getElementById('studio-product-label');

  if (unitEl) unitEl.innerText = `Rp ${formatRupiah(basePrice)} / ${unitName}`;
  if (totalEl) totalEl.innerText = `Rp ${formatRupiah(total)}`;
  if (labelEl) labelEl.innerText = prodLabel;
}

window.setStudioProduct = function(type, category) {
  state.studio.productType = type;
  state.studio.category = category;
  if (category === 'cup') state.studio.colorOrLiquid = '#78350f';
  if (category === 'baju') state.studio.colorOrLiquid = '#0f172a';
  renderStudioControls();
  renderStudioStage();
  recalcStudioPrice();
};

window.setStudioColor = function(color) {
  state.studio.colorOrLiquid = color;
  renderStudioControls();
  renderStudioStage();
};

window.handleStudioLogoUpload = function(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    state.studio.logoUrl = e.target.result;
    renderStudioStage();
    showToast("✅ Logo berhasil dimuat ke kanvas simulasi!");
  };
  reader.readAsDataURL(file);
};

window.updateStudioScale = function(val) {
  state.studio.logoScale = parseFloat(val);
  const lbl = document.getElementById('studio-scale-val');
  if (lbl) lbl.innerText = `${Math.round(val * 100)}%`;
  renderStudioStage();
};

window.updateStudioPosY = function(val) {
  state.studio.logoY = parseInt(val);
  renderStudioStage();
};

window.addStudioItemToCart = function() {
  const prodType = state.studio.productType;
  const qty = state.studio.qty;
  const notes = document.getElementById('studio-notes-input')?.value.trim() || 'Desain dikonfigurasi via Studio Kustomisasi';

  let basePrice = 650;
  let prodName = "Cup PP 16oz Slim (Custom)";
  let unit = "pcs";

  if (prodType === 'cup-pp16') {
    prodName = "Sablon Cup PP 16oz Slim";
    basePrice = qty >= 5000 ? 490 : (qty >= 3000 ? 540 : (qty >= 1000 ? 590 : 650));
  } else if (prodType === 'cup-pet14') {
    prodName = "Sablon Cup PET 14oz Bening";
    basePrice = qty >= 3000 ? 720 : (qty >= 1000 ? 790 : 850);
  } else if (prodType === 'cup-inj500') {
    prodName = "Cup Injection 500ml + Tutup";
    basePrice = qty >= 3000 ? 1250 : (qty >= 1000 ? 1350 : 1450);
  } else if (prodType === 'kaos-24s') {
    prodName = "Kaos Combed 24s + Sablon DTF";
    basePrice = qty >= 100 ? 58000 : (qty >= 50 ? 63000 : (qty >= 12 ? 67000 : 72000));
  } else if (prodType === 'kaos-30s') {
    prodName = "Kaos Combed 30s + Sablon DTF";
    basePrice = qty >= 100 ? 52000 : (qty >= 50 ? 56000 : (qty >= 12 ? 60000 : 65000));
  } else if (prodType === 'flat-plakat') {
    prodName = "Plakat Akrilik 15x20cm Stand Kayu";
    basePrice = qty >= 20 ? 68000 : (qty >= 5 ? 78000 : 85000);
  } else if (prodType === 'flat-tumbler') {
    prodName = "Tumbler Stainless Vacuum UV";
    basePrice = qty >= 50 ? 44000 : (qty >= 20 ? 49000 : 55000);
  } else if (prodType === 'flat-emoney') {
    prodName = "Kartu E-Money UV Custom";
    basePrice = qty >= 50 ? 25000 : (qty >= 10 ? 30000 : 35000);
  }

  const cartItem = {
    id: 'cart-custom-' + Date.now(),
    productId: prodType,
    name: prodName,
    categoryName: state.studio.category === 'cup' ? 'Cup Minuman' : (state.studio.category === 'baju' ? 'Sablon Baju' : 'Benda Datar'),
    qty: qty,
    unit: unit,
    unitPrice: basePrice,
    totalPrice: basePrice * qty,
    notes: `${notes} [Warna: ${state.studio.colorOrLiquid}]`,
    image: state.studio.logoUrl || "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=400&q=80"
  };

  state.cart.push(cartItem);
  saveCart();
  openCartDrawer();
  showToast(`✅ "${prodName}" dari Studio berhasil dimasukkan ke Keranjang!`);
};

// ===================================================================
// SHOPPING CART & CHECKOUT
// ===================================================================
function initCart() {
  const saved = localStorage.getItem('mizzela_user_cart');
  if (saved) {
    try {
      state.cart = JSON.parse(saved);
    } catch (e) {
      state.cart = [];
    }
  }
  updateCartBadge();
}

function saveCart() {
  localStorage.setItem('mizzela_user_cart', JSON.stringify(state.cart));
  updateCartBadge();
}

function updateCartBadge() {
  const count = state.cart.length;
  const badges = document.querySelectorAll('.cart-badge');
  badges.forEach(b => {
    b.innerText = count;
  });
}

window.openCartDrawer = function() {
  const overlay = document.getElementById('cart-drawer-overlay');
  renderCartDrawerItems();
  if (overlay) overlay.classList.add('active');
};

window.closeCartDrawer = function() {
  const overlay = document.getElementById('cart-drawer-overlay');
  if (overlay) overlay.classList.remove('active');
};

function renderCartDrawerItems() {
  const container = document.getElementById('cart-items-container');
  const subtotalEl = document.getElementById('cart-drawer-subtotal');
  const checkoutBtn = document.getElementById('cart-checkout-btn');

  if (!container) return;

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-message">
        <i class="fa-solid fa-basket-shopping" style="font-size:2.5rem; color:#cbd5e1; margin-bottom:12px;"></i>
        <h4>Keranjang Belanja Kosong</h4>
        <p style="font-size:0.86rem; color:#64748b; margin-top:4px;">Pilih produk di katalog atau buat kustomisasi di Studio.</p>
      </div>
    `;
    if (subtotalEl) subtotalEl.innerText = "Rp 0";
    if (checkoutBtn) checkoutBtn.disabled = true;
    return;
  }

  let subtotal = 0;
  container.innerHTML = state.cart.map((item, idx) => {
    subtotal += item.totalPrice;
    return `
      <div class="cart-item-row">
        <img src="${item.image}" class="cart-item-img" alt="${item.name}">
        <div class="cart-item-info">
          <div class="cart-item-title">${item.name}</div>
          <div class="cart-item-meta">${item.qty.toLocaleString('id-ID')} ${item.unit} x Rp ${formatRupiah(item.unitPrice)}</div>
          <div class="cart-item-meta" style="font-style:italic;">Catatan: ${item.notes}</div>
          <div class="cart-item-price">Rp ${formatRupiah(item.totalPrice)}</div>
        </div>
        <button onclick="removeCartItem(${idx})" style="background:none; border:none; color:#ef4444; cursor:pointer; align-self:flex-start;" title="Hapus item">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `;
  }).join('');

  if (subtotalEl) subtotalEl.innerText = `Rp ${formatRupiah(subtotal)}`;
  if (checkoutBtn) checkoutBtn.disabled = false;
}

window.removeCartItem = function(index) {
  state.cart.splice(index, 1);
  saveCart();
  renderCartDrawerItems();
  showToast("Item berhasil dihapus dari keranjang.");
};

window.openCheckoutModal = function() {
  closeCartDrawer();
  const modal = document.getElementById('checkout-modal');
  if (modal) modal.classList.add('active');
  renderCheckoutSummary();
};

window.closeCheckoutModal = function() {
  const modal = document.getElementById('checkout-modal');
  if (modal) modal.classList.remove('active');
};

function renderCheckoutSummary() {
  const summaryBox = document.getElementById('checkout-items-summary');
  if (!summaryBox) return;

  let total = 0;
  summaryBox.innerHTML = state.cart.map(item => {
    total += item.totalPrice;
    return `
      <div style="display:flex; justify-content:space-between; margin-bottom:6px; font-size:0.88rem;">
        <span>${item.name} (${item.qty.toLocaleString('id-ID')} ${item.unit})</span>
        <strong>Rp ${formatRupiah(item.totalPrice)}</strong>
      </div>
    `;
  }).join('');

  document.getElementById('checkout-grand-total').innerText = `Rp ${formatRupiah(total)}`;
}

window.submitOrderWhatsApp = function() {
  const name = document.getElementById('checkout-name').value.trim();
  const phone = document.getElementById('checkout-phone').value.trim();
  const brand = document.getElementById('checkout-brand').value.trim();
  const shipping = document.getElementById('checkout-shipping').value;
  const notes = document.getElementById('checkout-notes').value.trim();

  if (!name || !phone) {
    alert("Mohon isi nama lengkap dan nomor WhatsApp Anda.");
    return;
  }

  let total = 0;
  let itemsList = state.cart.map((item, i) => {
    total += item.totalPrice;
    return `${i + 1}. *${item.name}*%0A   Jumlah: ${item.qty.toLocaleString('id-ID')} ${item.unit} (@ Rp ${formatRupiah(item.unitPrice)})%0A   Subtotal: Rp ${formatRupiah(item.totalPrice)}%0A   Catatan: ${item.notes}`;
  }).join('%0A%0A');

  const text = `Halo Admin Mizzelaa & Print / Mizela Design Studio! 👋%0A%0A` +
    `Saya ingin konfirmasi pemesanan resmi via website:%0A%0A` +
    `👤 *DATA PEMESAN:*%0A` +
    `• Nama: ${encodeURIComponent(name)}%0A` +
    `• No. WhatsApp: ${encodeURIComponent(phone)}%0A` +
    `• Brand / Usaha: ${encodeURIComponent(brand || '-')}%0A` +
    `• Opsi Pengiriman: ${encodeURIComponent(shipping)}%0A%0A` +
    `📦 *DAFTAR ITEM PESANAN:*%0A` +
    `${itemsList}%0A%0A` +
    `💰 *TOTAL ESTIMASI: Rp ${formatRupiah(total)}*%0A` +
    (notes ? `📝 *Catatan Khusus:* ${encodeURIComponent(notes)}%0A%0A` : '%0A') +
    `Mohon info ketersediaan slot antrean mesin dan nomor rekening untuk transfer DP ya kak. Terima kasih! 🙏`;

  const waUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${text}`;
  window.open(waUrl, '_blank');
  closeCheckoutModal();
  showToast("🚀 Menghubungkan pesanan Anda ke WhatsApp Admin Mizzelaa...");
};

window.printInvoicePreview = function() {
  const name = document.getElementById('checkout-name').value.trim() || 'Pelanggan';
  const phone = document.getElementById('checkout-phone').value.trim() || '-';
  const shipping = document.getElementById('checkout-shipping').value;

  let total = 0;
  const itemsHtml = state.cart.map((item, idx) => {
    total += item.totalPrice;
    return `
      <tr>
        <td style="padding:8px; border-bottom:1px solid #ddd;">${idx + 1}</td>
        <td style="padding:8px; border-bottom:1px solid #ddd;"><strong>${item.name}</strong><br><small>${item.notes}</small></td>
        <td style="padding:8px; border-bottom:1px solid #ddd; text-align:center;">${item.qty.toLocaleString('id-ID')} ${item.unit}</td>
        <td style="padding:8px; border-bottom:1px solid #ddd; text-align:right;">Rp ${formatRupiah(item.unitPrice)}</td>
        <td style="padding:8px; border-bottom:1px solid #ddd; text-align:right;">Rp ${formatRupiah(item.totalPrice)}</td>
      </tr>
    `;
  }).join('');

  const win = window.open('', '_blank');
  win.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Nota Pemesanan - Mizzelaa & Print</title>
      <style>
        body { font-family: sans-serif; padding: 30px; color: #111; }
        .header { display: flex; justify-content: space-between; border-bottom: 2px solid #0f172a; padding-bottom: 15px; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th { background: #f1f5f9; text-align: left; padding: 10px 8px; border-bottom: 2px solid #cbd5e1; }
      </style>
    </head>
    <body>
      <div class="header">
        <div>
          <h2>MIZZELAA & PRINT</h2>
          <p style="margin:2px 0; color:#555;">Mizela Design Studio</p>
          <small>Jl. Bojongloa, Kopo, Bojongloa Kaler, Kota Bandung 40233</small>
        </div>
        <div style="text-align:right;">
          <h3>NOTA ESTIMASI ORDER</h3>
          <p style="margin:2px 0;">Tanggal: ${new Date().toLocaleDateString('id-ID')}</p>
          <small>Pemesan: ${name} (${phone})</small>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Item / Spesifikasi</th>
            <th style="text-align:center;">Jumlah</th>
            <th style="text-align:right;">Harga Satuan</th>
            <th style="text-align:right;">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          ${itemsHtml}
        </tbody>
      </table>

      <div style="text-align:right; margin-top:20px;">
        <h3>TOTAL ESTIMASI: Rp ${formatRupiah(total)}</h3>
        <p style="color:#555;">Pengiriman: ${shipping}</p>
      </div>

      <div style="margin-top:40px; border-top:1px dashed #aaa; padding-top:15px; font-size:0.85rem; color:#666;">
        <p>* Nota ini merupakan estimasi resmi pemesanan digital dari website Mizzelaa & Print.</p>
        <p>* Hubungi WhatsApp: 0877-2757-7451 untuk konfirmasi pembayaran DP & validasi file cetak.</p>
      </div>
      <script>window.print();</script>
    </body>
    </html>
  `);
  win.document.close();
};

// ===================================================================
// ORDER TRACKER FEATURE
// ===================================================================
window.trackOrderById = function(orderIdInput) {
  const query = (orderIdInput || document.getElementById('tracker-input-id')?.value || '').trim().toUpperCase();
  const resultCard = document.getElementById('tracker-result-card');

  if (!query) {
    alert("Mohon masukkan nomor pesanan Anda (contoh: MZL-8821).");
    return;
  }

  const order = MOCK_ORDERS[query];

  if (!order) {
    resultCard.innerHTML = `
      <div style="text-align:center; padding:30px; color:#64748b;">
        <i class="fa-solid fa-triangle-exclamation" style="font-size:2rem; color:#f59e0b; margin-bottom:10px;"></i>
        <h4>Nomor Pesanan "${query}" Tidak Ditemukan</h4>
        <p style="font-size:0.88rem; margin-top:4px;">Pastikan nomor pesanan sesuai format invoice Anda, atau hubungi CS WhatsApp kami untuk pengecekan manual.</p>
      </div>
    `;
    resultCard.style.display = 'block';
    return;
  }

  resultCard.innerHTML = `
    <div style="border-bottom:1px solid #e2e8f0; padding-bottom:16px; margin-bottom:20px;">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
        <div>
          <span style="font-size:0.75rem; font-weight:700; color:#1e40af; background:#eff6ff; padding:3px 8px; border-radius:4px; text-transform:uppercase;">No. Order: ${order.orderId}</span>
          <h3 style="font-size:1.3rem; margin-top:4px; color:#0f172a;">${order.customerName}</h3>
        </div>
        <div style="text-align:right;">
          <div style="font-size:0.8rem; color:#64748b;">Estimasi Siap:</div>
          <strong style="color:#16a34a; font-size:1rem;">${order.estComplete}</strong>
        </div>
      </div>
      <div style="margin-top:10px; font-size:0.88rem; color:#334155;">
        <strong>Produk:</strong> ${order.product} (${order.qty}) &bull; <strong>Metode:</strong> ${order.shippingMethod}
      </div>
    </div>

    <!-- Stepper -->
    <div class="order-status-stepper">
      <div class="stepper-item ${order.currentStep >= 1 ? (order.currentStep > 1 ? 'completed' : 'current') : ''}">
        <div class="stepper-circle">${order.currentStep > 1 ? '✓' : '1'}</div>
        <div class="stepper-label">File Desain Disetujui</div>
        <div class="stepper-sub">Validasi CMYK & Resolusi</div>
      </div>
      <div class="stepper-item ${order.currentStep >= 2 ? (order.currentStep > 2 ? 'completed' : 'current') : ''}">
        <div class="stepper-circle">${order.currentStep > 2 ? '✓' : '2'}</div>
        <div class="stepper-label">Proses Produksi</div>
        <div class="stepper-sub">Mesin Cetak & Sablon</div>
      </div>
      <div class="stepper-item ${order.currentStep >= 3 ? (order.currentStep > 3 ? 'completed' : 'current') : ''}">
        <div class="stepper-circle">${order.currentStep > 3 ? '✓' : '3'}</div>
        <div class="stepper-label">Quality Control</div>
        <div class="stepper-sub">Cek Hasil & Packing</div>
      </div>
      <div class="stepper-item ${order.currentStep >= 4 ? 'completed' : ''}">
        <div class="stepper-circle">${order.currentStep >= 4 ? '✓' : '4'}</div>
        <div class="stepper-label">Siap Diambil / Kirim</div>
        <div class="stepper-sub">Pengambilan Workshop</div>
      </div>
    </div>

    <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:16px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px;">
      <div>
        <div style="font-size:0.78rem; color:#64748b; text-transform:uppercase; font-weight:700;">Status Terakhir:</div>
        <div style="font-weight:700; color:#0f172a; font-size:0.95rem;">${order.statusText}</div>
      </div>
      <a href="https://wa.me/${CONFIG.whatsappNumber}?text=Halo%20Admin%2C%20mau%20tanya%20update%20pesanan%20dengan%20No%20${order.orderId}" target="_blank" class="btn btn-whatsapp btn-sm">
        <i class="fa-brands fa-whatsapp"></i> Tanya Admin via WA
      </a>
    </div>
  `;
  resultCard.style.display = 'block';
};

// ===================================================================
// PORTFOLIO GALLERY & UPLOAD PHOTO FEATURE
// ===================================================================
function initGalleryView() {
  const saved = localStorage.getItem('mizzela_user_gallery');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        state.gallery = parsed;
      } else {
        state.gallery = [...DEFAULT_GALLERY];
      }
    } catch (e) {
      state.gallery = [...DEFAULT_GALLERY];
    }
  } else {
    state.gallery = [...DEFAULT_GALLERY];
    try {
      localStorage.setItem('mizzela_user_gallery', JSON.stringify(DEFAULT_GALLERY));
    } catch (e) {}
  }

  renderGalleryGrid('all');

  // Filter chips
  const filterChips = document.querySelectorAll('.filter-chip-btn');
  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      renderGalleryGrid(chip.dataset.filter);
    });
  });
}

function renderGalleryGrid(catFilter) {
  const container = document.getElementById('gallery-cards-container');
  if (!container) return;

  const items = catFilter === 'all'
    ? state.gallery
    : state.gallery.filter(g => g.category === catFilter);

  if (items.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align:center; padding:50px; background:#fff; border:1px solid #e2e8f0; border-radius:8px;">
        <p style="color:#64748b;">Belum ada foto hasil cetak untuk kategori ini.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = items.map(item => `
    <div class="gallery-card-item">
      <div class="gallery-card-media">
        ${item.isCustom ? `<span class="badge-custom-user">Karya Baru</span>` : ''}
        <img src="${item.image}" alt="${item.title}" loading="lazy">
      </div>
      <div class="gallery-card-details">
        <span class="gallery-card-cat">${item.categoryName}</span>
        <h4 class="gallery-card-name">${item.title}</h4>
        <div class="gallery-card-client-tag"><i class="fa-solid fa-crown" style="font-size:0.7rem;"></i> ${item.client}</div>
        <p class="gallery-card-desc-text">${item.desc}</p>
        <div class="gallery-card-bottom">
          <span><i class="fa-regular fa-calendar"></i> ${item.date}</span>
          <button class="btn btn-outline btn-sm" onclick="switchView('studio'); setStudioProduct('${item.category === 'cup' ? 'cup-pp16' : (item.category === 'baju' ? 'kaos-24s' : 'flat-plakat')}', '${item.category}')">
            Pesan Mirip Ini
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

window.openAddPhotoModal = function() {
  const modal = document.getElementById('add-photo-modal');
  if (modal) modal.classList.add('active');
};

window.closeAddPhotoModal = function() {
  const modal = document.getElementById('add-photo-modal');
  if (modal) modal.classList.remove('active');
};

let tempUploadedPhotoBase64 = null;
window.handleGalleryPhotoUpload = function(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    tempUploadedPhotoBase64 = e.target.result;
    const preview = document.getElementById('gallery-photo-preview');
    if (preview) {
      preview.src = tempUploadedPhotoBase64;
      preview.style.display = 'block';
    }
  };
  reader.readAsDataURL(file);
};

window.saveNewGalleryPhoto = function(event) {
  event.preventDefault();

  const title = document.getElementById('photo-title').value.trim();
  const category = document.getElementById('photo-category').value;
  const client = document.getElementById('photo-client').value.trim() || 'Klien Mizzelaa';
  const desc = document.getElementById('photo-desc').value.trim() || 'Hasil produksi rapi dan presisi di workshop Bandung.';
  const urlFallback = document.getElementById('photo-url-fallback').value.trim();

  const finalImg = tempUploadedPhotoBase64 || urlFallback;

  if (!title) {
    alert("Mohon masukkan judul karya foto.");
    return;
  }
  if (!finalImg) {
    alert("Mohon pilih file foto dari perangkat Anda atau masukkan URL gambar.");
    return;
  }

  const catNames = {
    cup: "Cup Minuman",
    baju: "Sablon Baju",
    flat: "Benda Datar & Akrilik",
    kemasan: "Stiker & Kemasan"
  };

  const newPhoto = {
    id: 'user-photo-' + Date.now(),
    title: title,
    category: category,
    categoryName: catNames[category] || "Hasil Cetak",
    client: client,
    desc: desc,
    image: finalImg,
    date: new Date().toLocaleDateString('id-ID'),
    isCustom: true
  };

  state.gallery.unshift(newPhoto);

  // Save custom photos
  const saved = localStorage.getItem('mizzela_user_gallery');
  let customList = [];
  if (saved) {
    try { customList = JSON.parse(saved); } catch (e) {}
  }
  customList.unshift(newPhoto);
  localStorage.setItem('mizzela_user_gallery', JSON.stringify(customList));

  // Reset form
  document.getElementById('add-photo-form').reset();
  tempUploadedPhotoBase64 = null;
  const preview = document.getElementById('gallery-photo-preview');
  if (preview) preview.style.display = 'none';

  closeAddPhotoModal();
  renderGalleryGrid('all');
  showToast("🎉 Foto karya baru berhasil ditambahkan ke Galeri!");
};

// ===================================================================
// LOCATION & MAPS
// ===================================================================
window.copyWorkshopAddress = function() {
  navigator.clipboard.writeText(CONFIG.address).then(() => {
    showToast("📍 Alamat workshop berhasil disalin ke clipboard!");
  }).catch(() => {
    prompt("Salin alamat workshop Mizzelaa & Print:", CONFIG.address);
  });
};

window.openGoogleMapsDirection = function() {
  window.open(CONFIG.mapsUrl, '_blank');
};

// ===================================================================
// UTILITY FUNCTIONS
// ===================================================================
function formatRupiah(num) {
  return new Intl.NumberFormat('id-ID').format(num);
}

function showToast(msg) {
  let container = document.querySelector('.toast-clean-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-clean-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast-clean-msg';
  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #4ade80;"></i> <span>${msg}</span>`;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-10px)';
    toast.style.transition = 'all 0.25s ease';
    setTimeout(() => toast.remove(), 250);
  }, 3200);
}
