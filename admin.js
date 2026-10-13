/**
 * MIZZELAA & PRINT x MIZELA DESIGN STUDIO
 * Admin Portal Logic - Complete Product Catalog CRUD, Homepage Visuals Editor,
 * Gallery Management, Business Settings & Password Manager
 */

// Initial Default Products Catalog
const INITIAL_PRODUCTS = [
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

// Initial Homepage Visuals (Hero image, overlay text, & promo banner)
const DEFAULT_HOMEPAGE_VISUALS = {
  heroImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
  heroBadgeTitle: "Mizela Design Studio Workshop",
  heroBadgeSub: "Jl. Bojongloa, Kopo, Bandung",
  heroBadgeRating: "4.9 / 5.0 (500+ Mitra)",
  promoEnabled: false,
  promoTitle: "Penawaran Spesial Cetak Grosir",
  promoSubtitle: "Dapatkan gratis ongkir se-Bandung & gratis mockup desain untuk setiap pemesanan di atas 1.000 pcs.",
  promoButtonText: "Konsultasi via WhatsApp"
};

// Initial Default Gallery
const INITIAL_GALLERY = [
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

// Default Business Settings
const DEFAULT_BUSINESS_SETTINGS = {
  businessName: "Mizela Design Studio",
  studioName: "Digital Printing & Custom Merchandise",
  logoUrl: "",
  phoneNumber: "0877-2757-7451",
  whatsappNumber: "6287727577451",
  instagramHandle: "@mizela_design_studio",
  instagramUrl: "https://instagram.com/mizela_design_studio",
  address: "Jl. Bojongloa, Kopo, Kec. Bojongloa Kaler, Kota Bandung, Jawa Barat 40233",
  operationalHours: "Senin - Sabtu: 08:30 - 20:00 WIB | Minggu: 10:00 - 17:00 WIB"
};

// Global Admin State
let adminState = {
  isLoggedIn: false,
  currentUser: 'admin',
  products: [],
  visuals: {},
  gallery: [],
  settings: {},
  filterCat: 'all',
  searchQuery: '',
  tempProductImageBase64: null,
  tempHeroImageBase64: null,
  tempGalleryImageBase64: null,
  tempLogoBase64: null
};

// ===================================================================
// INIT ON DOM LOAD
// ===================================================================
document.addEventListener('DOMContentLoaded', () => {
  initCredentials();
  initProducts();
  initHomepageVisuals();
  initGallery();
  initBusinessSettings();
  checkAuth();
});

// ===================================================================
// 1. AUTHENTICATION & LOGIN
// ===================================================================
function initCredentials() {
  const savedCreds = localStorage.getItem('mizzela_admin_creds');
  if (!savedCreds) {
    const defaultCreds = {
      username: 'admin',
      password: 'admin123'
    };
    localStorage.setItem('mizzela_admin_creds', JSON.stringify(defaultCreds));
  }
}

function getStoredCredentials() {
  try {
    return JSON.parse(localStorage.getItem('mizzela_admin_creds')) || { username: 'admin', password: 'admin123' };
  } catch (e) {
    return { username: 'admin', password: 'admin123' };
  }
}

function checkAuth() {
  const sessionUser = sessionStorage.getItem('mizzela_admin_session');
  if (sessionUser) {
    adminState.isLoggedIn = true;
    adminState.currentUser = sessionUser;
    showDashboard();
  } else {
    adminState.isLoggedIn = false;
    showLogin();
  }
}

function showLogin() {
  document.getElementById('admin-login-view').style.display = 'flex';
  document.getElementById('admin-dashboard-view').style.display = 'none';
}

function showDashboard() {
  document.getElementById('admin-login-view').style.display = 'none';
  document.getElementById('admin-dashboard-view').style.display = 'block';

  // Update header badges
  const badge = document.getElementById('current-username-badge');
  if (badge) badge.innerText = adminState.currentUser;

  const creds = getStoredCredentials();
  const userInput = document.getElementById('security-new-username');
  if (userInput) userInput.value = creds.username;

  renderAdminProducts();
  populateVisualsForm();
  renderAdminPhotos();
  populateSettingsForm();
}

window.handleAdminLogin = function(event) {
  event.preventDefault();
  const usernameInput = document.getElementById('login-username').value.trim();
  const passwordInput = document.getElementById('login-password').value.trim();

  const creds = getStoredCredentials();

  if (usernameInput === creds.username && passwordInput === creds.password) {
    sessionStorage.setItem('mizzela_admin_session', usernameInput);
    adminState.isLoggedIn = true;
    adminState.currentUser = usernameInput;
    showDashboard();
    showAdminToast(`👋 Selamat datang kembali, Administrator ${usernameInput}!`);
  } else {
    alert("❌ Username atau password admin tidak sesuai! Silakan coba lagi.");
  }
};

window.handleAdminLogout = function() {
  if (confirm("Apakah Anda yakin ingin keluar dari panel admin?")) {
    sessionStorage.removeItem('mizzela_admin_session');
    adminState.isLoggedIn = false;
    showLogin();
    showAdminToast("🔒 Anda telah berhasil keluar.");
  }
};

// ===================================================================
// TAB SWITCHING
// ===================================================================
window.switchAdminTab = function(tabName) {
  document.querySelectorAll('.admin-tab-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.tab === tabName);
  });

  document.querySelectorAll('.admin-content-pane').forEach(p => {
    p.classList.toggle('active', p.id === `admin-pane-${tabName}`);
  });

  if (tabName === 'products') renderAdminProducts();
  if (tabName === 'visuals') populateVisualsForm();
  if (tabName === 'gallery') renderAdminPhotos();
  if (tabName === 'settings') populateSettingsForm();
};

// ===================================================================
// 2. PRODUCT MANAGEMENT (CRUD: ADD, EDIT, DELETE, FEATURED)
// ===================================================================
function initProducts() {
  const saved = localStorage.getItem('mizzela_catalog_products');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        adminState.products = parsed;
        return;
      }
    } catch (e) {}
  }
  adminState.products = JSON.parse(JSON.stringify(INITIAL_PRODUCTS));
  saveProducts();
}

function saveProducts() {
  localStorage.setItem('mizzela_catalog_products', JSON.stringify(adminState.products));
  updateProductStats();
}

function updateProductStats() {
  const total = adminState.products.length;
  const featuredCount = adminState.products.filter(p => p.featured).length;
  const cupCount = adminState.products.filter(p => p.category === 'cup').length;
  const bajuCount = adminState.products.filter(p => p.category === 'baju').length;
  const flatCount = adminState.products.filter(p => p.category === 'flat').length;

  const statTab = document.getElementById('stat-total-products');
  if (statTab) statTab.innerText = total;

  const setEl = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.innerText = val;
  };
  setEl('stat-card-total-prod', total);
  setEl('stat-card-featured-prod', featuredCount);
  setEl('stat-card-cup-prod', cupCount);
  setEl('stat-card-baju-prod', bajuCount);
  setEl('stat-card-flat-prod', flatCount);
}

function getCategoryLabel(cat) {
  switch (cat) {
    case 'cup': return 'Cup Minuman';
    case 'baju': return 'Sablon Baju';
    case 'flat': return 'Benda Datar & UV';
    case 'kemasan': return 'Stiker & Kemasan';
    default: return 'Percetakan';
  }
}

function formatRupiah(num) {
  if (isNaN(num)) return "0";
  return Number(num).toLocaleString('id-ID');
}

function renderAdminProducts() {
  const tbody = document.getElementById('admin-products-table-body');
  if (!tbody) return;

  updateProductStats();

  let list = adminState.products;

  // Apply Category Filter
  if (adminState.filterCat && adminState.filterCat !== 'all') {
    list = list.filter(p => p.category === adminState.filterCat);
  }

  // Apply Search Keyword
  if (adminState.searchQuery) {
    const q = adminState.searchQuery.toLowerCase();
    list = list.filter(p => 
      p.name.toLowerCase().includes(q) || 
      (p.subtitle && p.subtitle.toLowerCase().includes(q)) ||
      (p.specs && p.specs.toLowerCase().includes(q))
    );
  }

  if (list.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align: center; padding: 36px; color: #64748b;">
          Tidak ada produk yang cocok dengan pencarian atau filter.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = list.map(prod => {
    const lowestPrice = (prod.tiers && prod.tiers.length > 0)
      ? prod.tiers[prod.tiers.length - 1].price
      : prod.basePrice;

    const isFeatured = !!prod.featured;

    return `
      <tr>
        <td>
          <div class="admin-prod-thumb-cell">
            <img src="${prod.image}" alt="${prod.name}">
          </div>
        </td>
        <td>
          <div class="admin-prod-name">${prod.name}</div>
          <div class="admin-prod-sub">${prod.subtitle || prod.specs || '-'}</div>
        </td>
        <td>
          <span class="product-cat-chip" style="font-size:0.75rem;">${prod.categoryName || getCategoryLabel(prod.category)}</span>
        </td>
        <td>
          <strong>${prod.minQty}</strong> ${prod.unit}
        </td>
        <td>
          <div style="font-weight: 700; color: #1e40af;">Rp ${formatRupiah(lowestPrice)} <span style="font-size:0.75rem; font-weight:normal; color:#64748b;">/${prod.unit}</span></div>
          <div style="font-size: 0.76rem; color: #64748b;">Normal: Rp ${formatRupiah(prod.basePrice)}</div>
        </td>
        <td>
          <button class="admin-featured-toggle-btn ${isFeatured ? 'active' : ''}" onclick="toggleProductFeatured('${prod.id}')" title="Klik untuk mengaktifkan/nonaktifkan produk ini di Beranda">
            <i class="fa-solid fa-star"></i> ${isFeatured ? 'Aktif di Beranda' : 'Tidak Aktif'}
          </button>
        </td>
        <td style="text-align: center;">
          <div class="admin-action-btn-group" style="justify-content: center;">
            <button class="btn btn-outline btn-icon-sm" onclick="openAdminProductModal('${prod.id}')" title="Edit Produk">
              <i class="fa-solid fa-pen-to-square" style="color: #1e40af;"></i>
            </button>
            <button class="btn btn-outline btn-icon-sm" onclick="handleAdminProductDelete('${prod.id}')" title="Hapus Produk" style="border-color: #fca5a5; color: #dc2626;">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

window.handleAdminProductSearch = function(query) {
  adminState.searchQuery = query.trim();
  renderAdminProducts();
};

window.handleAdminProductCatFilter = function(cat) {
  adminState.filterCat = cat;
  renderAdminProducts();
};

window.toggleProductFeatured = function(productId) {
  const prod = adminState.products.find(p => p.id === productId);
  if (!prod) return;

  prod.featured = !prod.featured;
  saveProducts();
  renderAdminProducts();
  showAdminToast(`${prod.featured ? '⭐ Ditampilkan' : 'Dihapus dari'} Produk Unggulan Beranda: ${prod.name}`);
};

window.openAdminProductModal = function(productId) {
  const modal = document.getElementById('admin-product-modal');
  const title = document.getElementById('admin-product-modal-title');
  const form = document.getElementById('admin-product-form');
  const preview = document.getElementById('prod-upload-preview');

  adminState.tempProductImageBase64 = null;
  form.reset();
  preview.style.display = 'none';

  if (!productId) {
    // Mode Tambah Baru
    title.innerText = "Tambah Produk Baru";
    document.getElementById('prod-form-id').value = '';
    document.getElementById('prod-form-minqty').value = '100';
    document.getElementById('prod-form-unit').value = 'pcs';
    document.getElementById('prod-form-leadtime').value = '2 - 3 Hari Kerja';
    document.getElementById('prod-form-featured').checked = false;
  } else {
    // Mode Edit
    const prod = adminState.products.find(p => p.id === productId);
    if (!prod) return;

    title.innerText = `Edit Produk: ${prod.name}`;
    document.getElementById('prod-form-id').value = prod.id;
    document.getElementById('prod-form-name').value = prod.name;
    document.getElementById('prod-form-subtitle').value = prod.subtitle || '';
    document.getElementById('prod-form-cat').value = prod.category;
    document.getElementById('prod-form-unit').value = prod.unit;
    document.getElementById('prod-form-minqty').value = prod.minQty;
    document.getElementById('prod-form-baseprice').value = prod.basePrice;

    const lowestPrice = (prod.tiers && prod.tiers.length > 0)
      ? prod.tiers[prod.tiers.length - 1].price
      : prod.basePrice;
    document.getElementById('prod-form-wholesaleprice').value = lowestPrice;

    document.getElementById('prod-form-specs').value = prod.specs || '';
    document.getElementById('prod-form-leadtime').value = prod.productionDays || '2 - 3 Hari Kerja';
    document.getElementById('prod-form-featured').checked = !!prod.featured;
    document.getElementById('prod-form-img-url').value = prod.image || '';

    if (prod.image) {
      preview.src = prod.image;
      preview.style.display = 'block';
    }
  }

  if (modal) modal.classList.add('active');
};

window.closeAdminProductModal = function() {
  const modal = document.getElementById('admin-product-modal');
  if (modal) modal.classList.remove('active');
};

window.handleAdminProductFileSelect = function(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    compressImage(e.target.result, 800, 800, 0.75, (compressedBase64) => {
      adminState.tempProductImageBase64 = compressedBase64;
      const preview = document.getElementById('prod-upload-preview');
      preview.src = compressedBase64;
      preview.style.display = 'block';
    });
  };
  reader.readAsDataURL(file);
};

window.handleProdImgUrlInput = function(url) {
  const preview = document.getElementById('prod-upload-preview');
  if (url && url.startsWith('http')) {
    preview.src = url;
    preview.style.display = 'block';
  }
};

window.handleAdminProductSubmit = function(event) {
  event.preventDefault();

  const id = document.getElementById('prod-form-id').value;
  const name = document.getElementById('prod-form-name').value.trim();
  const subtitle = document.getElementById('prod-form-subtitle').value.trim();
  const category = document.getElementById('prod-form-cat').value;
  const categoryName = getCategoryLabel(category);
  const unit = document.getElementById('prod-form-unit').value.trim() || 'pcs';
  const minQty = parseInt(document.getElementById('prod-form-minqty').value) || 1;
  const basePrice = parseInt(document.getElementById('prod-form-baseprice').value) || 1000;
  const wholesaleInput = document.getElementById('prod-form-wholesaleprice').value;
  const wholesalePrice = wholesaleInput ? parseInt(wholesaleInput) : basePrice;
  const specs = document.getElementById('prod-form-specs').value.trim();
  const productionDays = document.getElementById('prod-form-leadtime').value.trim() || '2 - 3 Hari Kerja';
  const featured = document.getElementById('prod-form-featured').checked;

  let image = adminState.tempProductImageBase64 || document.getElementById('prod-form-img-url').value.trim();

  // Generate Tier Pricing
  const tiers = [];
  if (wholesalePrice < basePrice) {
    tiers.push({ min: minQty, max: Math.max(minQty * 2 - 1, minQty), price: basePrice });
    tiers.push({ min: minQty * 2, max: minQty * 5 - 1, price: Math.round((basePrice + wholesalePrice) / 2) });
    tiers.push({ min: minQty * 5, max: 999999, price: wholesalePrice });
  } else {
    tiers.push({ min: minQty, max: 999999, price: basePrice });
  }

  if (id) {
    // Update existing
    const existingIndex = adminState.products.findIndex(p => p.id === id);
    if (existingIndex !== -1) {
      if (!image) image = adminState.products[existingIndex].image;
      adminState.products[existingIndex] = {
        ...adminState.products[existingIndex],
        name,
        subtitle,
        category,
        categoryName,
        unit,
        minQty,
        basePrice,
        wholesalePrice,
        tiers,
        specs,
        productionDays,
        featured,
        image
      };
      showAdminToast(`✅ Produk "${name}" berhasil diperbarui!`);
    }
  } else {
    // Add New
    if (!image) {
      image = "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80";
    }
    const newProduct = {
      id: `prod-${Date.now()}`,
      name,
      subtitle,
      category,
      categoryName,
      unit,
      minQty,
      basePrice,
      wholesalePrice,
      tiers,
      specs,
      productionDays,
      featured,
      image
    };
    adminState.products.unshift(newProduct);
    showAdminToast(`✨ Produk baru "${name}" berhasil ditambahkan ke katalog!`);
  }

  saveProducts();
  closeAdminProductModal();
  renderAdminProducts();
};

window.handleAdminProductDelete = function(productId) {
  const prod = adminState.products.find(p => p.id === productId);
  if (!prod) return;

  if (confirm(`Apakah Anda yakin ingin menghapus produk "${prod.name}" dari katalog?`)) {
    adminState.products = adminState.products.filter(p => p.id !== productId);
    saveProducts();
    renderAdminProducts();
    showAdminToast(`🗑️ Produk "${prod.name}" berhasil dihapus dari katalog.`);
  }
};

window.resetProductsToDefault = function() {
  if (confirm("Reset seluruh katalog ke daftar produk bawaan awal? Produk yang Anda tambahkan manual akan direset.")) {
    adminState.products = JSON.parse(JSON.stringify(INITIAL_PRODUCTS));
    saveProducts();
    renderAdminProducts();
    showAdminToast("🔄 Katalog produk berhasil direset ke pengaturan awal.");
  }
};

// ===================================================================
// 3. HOMEPAGE VISUALS & PROMO BANNER MANAGEMENT
// ===================================================================
function initHomepageVisuals() {
  const saved = localStorage.getItem('mizzela_homepage_visuals');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      adminState.visuals = { ...DEFAULT_HOMEPAGE_VISUALS, ...parsed };
      return;
    } catch (e) {}
  }
  adminState.visuals = JSON.parse(JSON.stringify(DEFAULT_HOMEPAGE_VISUALS));
  saveHomepageVisuals();
}

function saveHomepageVisuals() {
  localStorage.setItem('mizzela_homepage_visuals', JSON.stringify(adminState.visuals));
}

function populateVisualsForm() {
  const v = adminState.visuals;
  const preview = document.getElementById('admin-hero-preview-img');
  if (preview && v.heroImage) preview.src = v.heroImage;

  const setVal = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.value = val || '';
  };

  setVal('visual-hero-url', v.heroImage);
  setVal('visual-hero-badge-title', v.heroBadgeTitle);
  setVal('visual-hero-badge-sub', v.heroBadgeSub);
  setVal('visual-hero-badge-rating', v.heroBadgeRating);

  // Promo Banner
  const promoCheck = document.getElementById('visual-promo-enabled');
  if (promoCheck) promoCheck.checked = !!v.promoEnabled;
  setVal('visual-promo-title', v.promoTitle);
  setVal('visual-promo-sub', v.promoSubtitle);
  setVal('visual-promo-btn-text', v.promoButtonText);
}

window.handleAdminHeroFileSelect = function(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    compressImage(e.target.result, 1200, 800, 0.78, (compressedBase64) => {
      adminState.tempHeroImageBase64 = compressedBase64;
      const preview = document.getElementById('admin-hero-preview-img');
      preview.src = compressedBase64;
    });
  };
  reader.readAsDataURL(file);
};

window.handleHeroUrlInput = function(url) {
  const preview = document.getElementById('admin-hero-preview-img');
  if (url && url.startsWith('http')) {
    preview.src = url;
  }
};

window.handleSaveHeroVisuals = function(event) {
  event.preventDefault();

  const heroUrlInput = document.getElementById('visual-hero-url').value.trim();
  const heroImage = adminState.tempHeroImageBase64 || heroUrlInput || adminState.visuals.heroImage;

  const badgeTitle = document.getElementById('visual-hero-badge-title').value.trim();
  const badgeSub = document.getElementById('visual-hero-badge-sub').value.trim();
  const badgeRating = document.getElementById('visual-hero-badge-rating').value.trim();

  adminState.visuals.heroImage = heroImage;
  adminState.visuals.heroBadgeTitle = badgeTitle;
  adminState.visuals.heroBadgeSub = badgeSub;
  adminState.visuals.heroBadgeRating = badgeRating;

  saveHomepageVisuals();
  adminState.tempHeroImageBase64 = null;
  showAdminToast("🖼️ Foto workshop & badge hero beranda berhasil disimpan dan langsung aktif!");
};

window.resetHeroVisualsToDefault = function() {
  if (confirm("Reset foto hero workshop beranda ke gambar bawaan?")) {
    adminState.visuals.heroImage = DEFAULT_HOMEPAGE_VISUALS.heroImage;
    adminState.visuals.heroBadgeTitle = DEFAULT_HOMEPAGE_VISUALS.heroBadgeTitle;
    adminState.visuals.heroBadgeSub = DEFAULT_HOMEPAGE_VISUALS.heroBadgeSub;
    adminState.visuals.heroBadgeRating = DEFAULT_HOMEPAGE_VISUALS.heroBadgeRating;
    saveHomepageVisuals();
    populateVisualsForm();
    showAdminToast("🔄 Foto hero beranda berhasil dikembalikan ke bawaan.");
  }
};

window.handleSavePromoVisuals = function(event) {
  event.preventDefault();

  const enabled = document.getElementById('visual-promo-enabled').checked;
  const title = document.getElementById('visual-promo-title').value.trim();
  const sub = document.getElementById('visual-promo-sub').value.trim();
  const btnText = document.getElementById('visual-promo-btn-text').value.trim();

  adminState.visuals.promoEnabled = enabled;
  adminState.visuals.promoTitle = title;
  adminState.visuals.promoSubtitle = sub;
  adminState.visuals.promoButtonText = btnText;

  saveHomepageVisuals();
  showAdminToast(`📢 Banner promo beranda berhasil disimpan (${enabled ? 'Status: Aktif' : 'Status: Nonaktif'}).`);
};

// ===================================================================
// 4. GALLERY MANAGEMENT (PORTOFOLIO)
// ===================================================================
function initGallery() {
  const saved = localStorage.getItem('mizzela_user_gallery');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        adminState.gallery = parsed;
        updateGalleryStats();
        return;
      }
    } catch (e) {}
  }
  adminState.gallery = JSON.parse(JSON.stringify(INITIAL_GALLERY));
  saveGallery();
}

function saveGallery() {
  localStorage.setItem('mizzela_user_gallery', JSON.stringify(adminState.gallery));
  updateGalleryStats();
}

function updateGalleryStats() {
  const statEl = document.getElementById('stat-total-photos');
  if (statEl) statEl.innerText = adminState.gallery.length;
}

function renderAdminPhotos() {
  const container = document.getElementById('admin-photos-grid');
  if (!container) return;

  updateGalleryStats();

  if (adminState.gallery.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px; background: #fff; border: 1px dashed #cbd5e1; border-radius: 8px;">
        <i class="fa-solid fa-images" style="font-size: 2.4rem; color: #94a3b8; margin-bottom: 12px;"></i>
        <h4 style="font-size: 1.1rem; color: #0f172a; margin-bottom: 6px;">Belum Ada Foto Portofolio</h4>
        <p style="color: #64748b; font-size: 0.9rem; margin-bottom: 18px;">Klik tombol "+ Unggah Foto Karya Baru" di atas untuk menambahkan hasil cetakan.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = adminState.gallery.map(item => `
    <div class="admin-photo-card">
      <div class="admin-photo-thumb">
        <img src="${item.image}" alt="${item.title}" loading="lazy">
        <span class="product-cat-chip" style="position: absolute; top: 10px; left: 10px; font-size: 0.72rem;">
          ${item.categoryName || getCategoryLabel(item.category)}
        </span>
      </div>
      <div class="admin-photo-info">
        <div class="admin-photo-title">${item.title}</div>
        <div class="admin-photo-meta">
          <i class="fa-solid fa-user"></i> ${item.client || 'Mitra Mizzelaa'} &bull; <i class="fa-regular fa-calendar"></i> ${item.date || 'Terbaru'}
        </div>
        <p style="font-size: 0.82rem; color: #475569; line-height: 1.4; margin-bottom: 12px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
          ${item.desc || 'Hasil pengerjaan cetak digital printing berkualitas tinggi.'}
        </p>
        <div class="admin-photo-actions">
          <span style="font-size: 0.75rem; color: #15803d; font-weight: 700;">
            <i class="fa-solid fa-check-circle"></i> Tampil di Web
          </span>
          <button onclick="handleAdminDeletePhoto('${item.id}')" class="btn btn-outline btn-sm" style="color: #dc2626; border-color: #fca5a5; padding: 4px 10px; font-size: 0.78rem;">
            <i class="fa-solid fa-trash"></i> Hapus
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

window.openAdminAddPhotoModal = function() {
  const modal = document.getElementById('admin-add-modal');
  adminState.tempGalleryImageBase64 = null;
  const form = document.getElementById('admin-add-photo-form');
  if (form) form.reset();
  const preview = document.getElementById('admin-upload-preview');
  if (preview) {
    preview.src = '';
    preview.style.display = 'none';
  }
  if (modal) modal.classList.add('active');
};

window.closeAdminAddPhotoModal = function() {
  const modal = document.getElementById('admin-add-modal');
  if (modal) modal.classList.remove('active');
};

window.handleAdminPhotoFileSelect = function(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    compressImage(e.target.result, 800, 800, 0.75, (compressedBase64) => {
      adminState.tempGalleryImageBase64 = compressedBase64;
      const preview = document.getElementById('admin-upload-preview');
      preview.src = compressedBase64;
      preview.style.display = 'block';
    });
  };
  reader.readAsDataURL(file);
};

window.handleAdminSubmitPhoto = function(event) {
  event.preventDefault();

  const title = document.getElementById('admin-photo-title').value.trim();
  const cat = document.getElementById('admin-photo-cat').value;
  const client = document.getElementById('admin-photo-client').value.trim() || 'Mitra Mizzelaa';
  const desc = document.getElementById('admin-photo-desc').value.trim();
  const urlInput = document.getElementById('admin-photo-url-input').value.trim();

  let finalImg = adminState.tempGalleryImageBase64 || urlInput;

  if (!finalImg) {
    alert("⚠️ Harap pilih file foto dari komputer atau masukkan URL gambar!");
    return;
  }

  const newPhoto = {
    id: `gal-custom-${Date.now()}`,
    title,
    category: cat,
    categoryName: getCategoryLabel(cat),
    client,
    desc,
    image: finalImg,
    date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
  };

  adminState.gallery.unshift(newPhoto);
  saveGallery();
  closeAdminAddPhotoModal();
  renderAdminPhotos();
  showAdminToast(`📸 Foto "${title}" berhasil ditambahkan ke galeri portofolio!`);
};

window.handleAdminDeletePhoto = function(photoId) {
  const item = adminState.gallery.find(p => p.id === photoId);
  if (!item) return;

  if (confirm(`Apakah Anda yakin ingin menghapus foto "${item.title}" dari galeri website?`)) {
    adminState.gallery = adminState.gallery.filter(p => p.id !== photoId);
    saveGallery();
    renderAdminPhotos();
    showAdminToast(`🗑️ Foto "${item.title}" berhasil dihapus.`);
  }
};

window.resetGalleryToDefault = function() {
  if (confirm("Reset seluruh foto portofolio ke galeri contoh bawaan? Foto unggahan manual Anda akan dihapus.")) {
    adminState.gallery = JSON.parse(JSON.stringify(INITIAL_GALLERY));
    saveGallery();
    renderAdminPhotos();
    showAdminToast("🔄 Galeri berhasil direset ke foto bawaan.");
  }
};

// ===================================================================
// 5. BUSINESS SETTINGS & LOGO WEBSITE
// ===================================================================
function initBusinessSettings() {
  const saved = localStorage.getItem('mizzela_business_settings');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      // Auto-migrate legacy name to Mizela Design Studio
      if (!parsed.businessName || parsed.businessName.includes('Mizzelaa')) {
        parsed.businessName = "Mizela Design Studio";
        parsed.studioName = "Digital Printing & Custom Merchandise";
      }
      adminState.settings = { ...DEFAULT_BUSINESS_SETTINGS, ...parsed };
      return;
    } catch (e) {}
  }
  adminState.settings = JSON.parse(JSON.stringify(DEFAULT_BUSINESS_SETTINGS));
  saveBusinessSettings();
}

function saveBusinessSettings() {
  localStorage.setItem('mizzela_business_settings', JSON.stringify(adminState.settings));
}

function updateAdminLogoPreviews() {
  const previewBox = document.getElementById('admin-logo-preview-box');
  const topNavLogo = document.getElementById('admin-header-logo-container');
  const currentLogo = adminState.tempLogoBase64 || adminState.settings.logoUrl;

  const logoHtml = currentLogo
    ? `<img src="${currentLogo}" alt="Logo" class="brand-logo-img">`
    : `<div class="brand-symbol" style="width:36px; height:36px; font-size:1.1rem;">M</div>`;

  if (previewBox) previewBox.innerHTML = logoHtml;
  if (topNavLogo) topNavLogo.innerHTML = logoHtml;
}

function populateSettingsForm() {
  const s = adminState.settings;
  const setVal = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.value = val || '';
  };

  setVal('setting-business-name', s.businessName);
  setVal('setting-studio-name', s.studioName);
  setVal('setting-phone', s.phoneNumber);
  setVal('setting-instagram', s.instagramHandle);
  setVal('setting-address', s.address);
  setVal('setting-hours', s.operationalHours);
  setVal('setting-logo-url', s.logoUrl || '');

  updateAdminLogoPreviews();
}

window.handleAdminLogoFileSelect = function(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    compressImage(e.target.result, 400, 160, 0.85, (compressedBase64) => {
      adminState.tempLogoBase64 = compressedBase64;
      updateAdminLogoPreviews();
      showAdminToast("🖼️ File logo terpilih! Klik 'Simpan Pengaturan Bisnis' untuk menerapkan.");
    });
  };
  reader.readAsDataURL(file);
};

window.handleLogoUrlInput = function(url) {
  if (url && url.startsWith('http')) {
    adminState.tempLogoBase64 = url;
    updateAdminLogoPreviews();
  }
};

window.handleRemoveLogo = function() {
  adminState.tempLogoBase64 = null;
  adminState.settings.logoUrl = "";
  const urlInput = document.getElementById('setting-logo-url');
  if (urlInput) urlInput.value = "";
  saveBusinessSettings();
  updateAdminLogoPreviews();
  showAdminToast("🔄 Logo direset ke simbol inisial 'M'.");
};

window.handleSaveBusinessSettings = function(event) {
  event.preventDefault();

  const bName = document.getElementById('setting-business-name').value.trim();
  const sName = document.getElementById('setting-studio-name').value.trim();
  const phone = document.getElementById('setting-phone').value.trim();
  const ig = document.getElementById('setting-instagram').value.trim();
  const address = document.getElementById('setting-address').value.trim();
  const hours = document.getElementById('setting-hours').value.trim();
  const logoUrlInput = document.getElementById('setting-logo-url').value.trim();

  let finalLogo = adminState.tempLogoBase64 !== null 
    ? adminState.tempLogoBase64 
    : (logoUrlInput || adminState.settings.logoUrl || "");

  let waClean = phone.replace(/[^0-9]/g, '');
  if (waClean.startsWith('0')) {
    waClean = '62' + waClean.substring(1);
  }

  let igHandle = ig.startsWith('@') ? ig : '@' + ig;
  let igUrl = `https://instagram.com/${igHandle.replace('@', '')}`;

  adminState.settings = {
    businessName: bName || DEFAULT_BUSINESS_SETTINGS.businessName,
    studioName: sName || DEFAULT_BUSINESS_SETTINGS.studioName,
    logoUrl: finalLogo,
    phoneNumber: phone || DEFAULT_BUSINESS_SETTINGS.phoneNumber,
    whatsappNumber: waClean || DEFAULT_BUSINESS_SETTINGS.whatsappNumber,
    instagramHandle: igHandle,
    instagramUrl: igUrl,
    address: address || DEFAULT_BUSINESS_SETTINGS.address,
    operationalHours: hours || DEFAULT_BUSINESS_SETTINGS.operationalHours
  };

  saveBusinessSettings();
  adminState.tempLogoBase64 = null;
  updateAdminLogoPreviews();

  const titleEl = document.getElementById('admin-header-title');
  if (titleEl) titleEl.innerText = `${adminState.settings.businessName} — Panel Admin`;

  showAdminToast("💾 Profil bisnis & logo website berhasil disimpan dan langsung aktif!");
};

// ===================================================================
// 6. PASSWORD & CREDENTIAL SECURITY
// ===================================================================
window.handleChangeAdminPassword = function(event) {
  event.preventDefault();

  const currentCreds = getStoredCredentials();
  const newUsername = document.getElementById('security-new-username').value.trim();
  const curPassword = document.getElementById('security-current-password').value.trim();
  const newPassword = document.getElementById('security-new-password').value.trim();
  const confirmPassword = document.getElementById('security-confirm-password').value.trim();

  if (curPassword !== currentCreds.password) {
    alert("❌ Password saat ini (lama) tidak cocok! Mohon periksa kembali.");
    return;
  }

  if (newPassword.length < 4) {
    alert("❌ Password baru harus minimal 4 karakter.");
    return;
  }

  if (newPassword !== confirmPassword) {
    alert("❌ Konfirmasi password baru tidak sama.");
    return;
  }

  const updatedCreds = {
    username: newUsername || currentCreds.username,
    password: newPassword
  };

  localStorage.setItem('mizzela_admin_creds', JSON.stringify(updatedCreds));
  sessionStorage.setItem('mizzela_admin_session', updatedCreds.username);
  adminState.currentUser = updatedCreds.username;

  const badge = document.getElementById('current-username-badge');
  if (badge) badge.innerText = updatedCreds.username;

  document.getElementById('security-current-password').value = '';
  document.getElementById('security-new-password').value = '';
  document.getElementById('security-confirm-password').value = '';

  showAdminToast("🔑 Username & Password admin berhasil diperbarui!");
};

// ===================================================================
// UTILITIES: CANVAS IMAGE COMPRESSOR & TOAST
// ===================================================================
function compressImage(base64Str, maxWidth, maxHeight, quality, callback) {
  const img = new Image();
  img.onload = function() {
    let width = img.width;
    let height = img.height;

    if (width > height) {
      if (width > maxWidth) {
        height = Math.round((height * maxWidth) / width);
        width = maxWidth;
      }
    } else {
      if (height > maxHeight) {
        width = Math.round((width * maxHeight) / height);
        height = maxHeight;
      }
    }

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, width, height);

    const compressedBase64 = canvas.toDataURL('image/jpeg', quality || 0.75);
    callback(compressedBase64);
  };
  img.src = base64Str;
}

function showAdminToast(msg) {
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
  }, 3400);
}
