/**
 * MIZZELAA & PRINT x MIZELA DESIGN STUDIO
 * Admin Portal Logic - Gallery Management, Business Settings & Password Manager
 */

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
  businessName: "Mizzelaa & Print",
  studioName: "Mizela Design Studio",
  phoneNumber: "0877-2757-7451",
  whatsappNumber: "6287727577451",
  instagramHandle: "@mizela_design_studio",
  instagramUrl: "https://instagram.com/mizela_design_studio",
  address: "Jl. Bojongloa, Kopo, Kec. Bojongloa Kaler, Kota Bandung, Jawa Barat 40233",
  operationalHours: "Senin - Sabtu: 08:30 - 20:00 WIB | Minggu: 10:00 - 17:00 WIB"
};

// State
let adminState = {
  isLoggedIn: false,
  currentUser: 'admin',
  gallery: [],
  settings: {},
  tempUploadedImageBase64: null
};

// ===================================================================
// INIT ON DOM LOAD
// ===================================================================
document.addEventListener('DOMContentLoaded', () => {
  initCredentials();
  initBusinessSettings();
  initGallery();
  checkAuth();
});

// ===================================================================
// 1. AUTHENTICATION & CREDENTIALS
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

  renderAdminPhotos();
  populateSettingsForm();
}

window.handleAdminLogin = function(event) {
  event.preventDefault();
  const usernameInput = document.getElementById('login-username').value.trim();
  const passwordInput = document.getElementById('login-password').value.trim();

  const stored = getStoredCredentials();

  if (usernameInput === stored.username && passwordInput === stored.password) {
    sessionStorage.setItem('mizzela_admin_session', stored.username);
    adminState.isLoggedIn = true;
    adminState.currentUser = stored.username;
    showDashboard();
    showAdminToast("👋 Selamat datang di Panel Admin Mizzelaa & Print!");
  } else {
    alert("❌ Username atau password yang Anda masukkan salah. Coba lagi!");
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

window.handleChangeAdminPassword = function(event) {
  event.preventDefault();

  const newUsername = document.getElementById('security-new-username').value.trim();
  const currentPassword = document.getElementById('security-current-password').value.trim();
  const newPassword = document.getElementById('security-new-password').value.trim();
  const confirmPassword = document.getElementById('security-confirm-password').value.trim();

  const stored = getStoredCredentials();

  if (currentPassword !== stored.password) {
    alert("❌ Password saat ini (lama) tidak sesuai!");
    document.getElementById('security-current-password').focus();
    return;
  }

  if (newPassword !== confirmPassword) {
    alert("❌ Konfirmasi password baru tidak cocok!");
    document.getElementById('security-confirm-password').focus();
    return;
  }

  if (newPassword.length < 4) {
    alert("❌ Password baru minimal terdiri dari 4 karakter.");
    return;
  }

  const updatedCreds = {
    username: newUsername || stored.username,
    password: newPassword
  };

  localStorage.setItem('mizzela_admin_creds', JSON.stringify(updatedCreds));
  sessionStorage.setItem('mizzela_admin_session', updatedCreds.username);
  adminState.currentUser = updatedCreds.username;

  document.getElementById('admin-password-form').reset();
  document.getElementById('security-new-username').value = updatedCreds.username;
  document.getElementById('current-username-badge').innerText = updatedCreds.username;

  showAdminToast("🔑 Username & Password admin berhasil diperbarui!");
};

// ===================================================================
// 2. TAB NAVIGATION
// ===================================================================
window.switchAdminTab = function(tabName) {
  document.querySelectorAll('.admin-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabName);
  });

  document.querySelectorAll('.admin-content-pane').forEach(pane => {
    pane.classList.remove('active');
  });

  const targetPane = document.getElementById(`admin-pane-${tabName}`);
  if (targetPane) targetPane.classList.add('active');
};

// ===================================================================
// 3. GALLERY MANAGEMENT (TAMBAH & HAPUS FOTO)
// ===================================================================
function initGallery() {
  const saved = localStorage.getItem('mizzela_user_gallery');
  if (saved) {
    try {
      adminState.gallery = JSON.parse(saved);
    } catch (e) {
      adminState.gallery = [...INITIAL_GALLERY];
    }
  } else {
    adminState.gallery = [...INITIAL_GALLERY];
    saveGallery();
  }
}

function saveGallery() {
  localStorage.setItem('mizzela_user_gallery', JSON.stringify(adminState.gallery));
  updateGalleryStats();
}

function updateGalleryStats() {
  const stat = document.getElementById('stat-total-photos');
  if (stat) stat.innerText = adminState.gallery.length;
}

function renderAdminPhotos() {
  const container = document.getElementById('admin-photos-grid');
  if (!container) return;

  updateGalleryStats();

  if (adminState.gallery.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; background: #f8fafc; border: 1px dashed #cbd5e1; border-radius: 8px;">
        <i class="fa-solid fa-camera-retro" style="font-size: 2rem; color: #94a3b8; margin-bottom: 8px;"></i>
        <h4 style="color: #0f172a;">Belum ada foto dalam galeri</h4>
        <p style="color: #64748b; font-size: 0.86rem; margin-top: 4px;">Klik tombol "+ Unggah Foto Karya Baru" di atas untuk menambahkan hasil cetak.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = adminState.gallery.map((item, index) => `
    <div class="admin-photo-card">
      <div class="admin-photo-thumb">
        <span style="position: absolute; top: 8px; left: 8px; background: rgba(15,23,42,0.85); color: #fff; font-size: 0.7rem; font-weight: 700; padding: 2px 8px; border-radius: 4px;">
          ${item.categoryName || 'Hasil Cetak'}
        </span>
        <img src="${item.image}" alt="${item.title}" loading="lazy">
      </div>
      <div class="admin-photo-info">
        <div class="admin-photo-title">${item.title}</div>
        <div class="admin-photo-meta">
          <i class="fa-solid fa-crown" style="color: #ea580c;"></i> ${item.client || 'Klien'} &bull; <i class="fa-regular fa-calendar"></i> ${item.date || '-'}
        </div>
        <p style="font-size: 0.82rem; color: #64748b; line-height: 1.45; margin-bottom: 12px; flex-grow: 1;">
          ${item.desc || '-'}
        </p>
        <div class="admin-photo-actions">
          <span style="font-size: 0.74rem; color: #94a3b8;">ID: #${index + 1}</span>
          <button onclick="handleDeletePhoto(${index})" class="btn btn-outline btn-sm" style="color: #dc2626; border-color: #fca5a5; padding: 5px 12px; font-size: 0.8rem;">
            <i class="fa-solid fa-trash-can"></i> Hapus Foto
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

window.handleDeletePhoto = function(index) {
  const photo = adminState.gallery[index];
  if (!photo) return;

  if (confirm(`Apakah Anda yakin ingin menghapus foto "${photo.title}" dari galeri?`)) {
    adminState.gallery.splice(index, 1);
    saveGallery();
    renderAdminPhotos();
    showAdminToast("🗑️ Foto berhasil dihapus dari galeri!");
  }
};

window.resetGalleryToDefault = function() {
  if (confirm("Kembalikan galeri ke koleksi bawaan pabrik? Foto custom yang belum disimpan di tempat lain akan diganti.")) {
    adminState.gallery = [...INITIAL_GALLERY];
    saveGallery();
    renderAdminPhotos();
    showAdminToast("🔄 Galeri berhasil direset ke foto bawaan!");
  }
};

// Modal Add Photo
window.openAdminAddPhotoModal = function() {
  const modal = document.getElementById('admin-add-modal');
  if (modal) modal.classList.add('active');
};

window.closeAdminAddPhotoModal = function() {
  const modal = document.getElementById('admin-add-modal');
  if (modal) modal.classList.remove('active');
  document.getElementById('admin-add-photo-form')?.reset();
  adminState.tempUploadedImageBase64 = null;
  const preview = document.getElementById('admin-upload-preview');
  if (preview) preview.style.display = 'none';
};

window.handleAdminPhotoFileSelect = function(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    // Compress image using canvas before storing to avoid localStorage limits
    compressImage(e.target.result, 900, 0.85, (compressedBase64) => {
      adminState.tempUploadedImageBase64 = compressedBase64;
      const preview = document.getElementById('admin-upload-preview');
      if (preview) {
        preview.src = compressedBase64;
        preview.style.display = 'block';
      }
    });
  };
  reader.readAsDataURL(file);
};

function compressImage(base64Str, maxWidth, quality, callback) {
  const img = new Image();
  img.src = base64Str;
  img.onload = () => {
    const canvas = document.createElement('canvas');
    let width = img.width;
    let height = img.height;

    if (width > maxWidth) {
      height = Math.round((height * maxWidth) / width);
      width = maxWidth;
    }

    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, width, height);
    callback(canvas.toDataURL('image/jpeg', quality));
  };
  img.onerror = () => callback(base64Str);
}

window.handleAdminSubmitPhoto = function(event) {
  event.preventDefault();

  const title = document.getElementById('admin-photo-title').value.trim();
  const category = document.getElementById('admin-photo-cat').value;
  const client = document.getElementById('admin-photo-client').value.trim() || 'Klien Mizzelaa';
  const desc = document.getElementById('admin-photo-desc').value.trim() || 'Hasil produksi rapi dan presisi di workshop Bandung.';
  const urlFallback = document.getElementById('admin-photo-url-input').value.trim();

  const finalImage = adminState.tempUploadedImageBase64 || urlFallback;

  if (!title) {
    alert("Mohon masukkan judul hasil cetak.");
    return;
  }
  if (!finalImage) {
    alert("Mohon pilih file gambar dari perangkat Anda atau masukkan URL gambar.");
    return;
  }

  const categoryLabels = {
    cup: "Cup Minuman",
    baju: "Sablon Baju",
    flat: "Benda Datar & Akrilik",
    kemasan: "Stiker & Kemasan"
  };

  const newPhotoItem = {
    id: "admin-photo-" + Date.now(),
    title: title,
    category: category,
    categoryName: categoryLabels[category] || "Hasil Cetak",
    client: client,
    desc: desc,
    image: finalImage,
    date: new Date().toLocaleDateString('id-ID'),
    isCustom: true
  };

  adminState.gallery.unshift(newPhotoItem);
  saveGallery();
  closeAdminAddPhotoModal();
  renderAdminPhotos();
  showAdminToast("🎉 Foto baru berhasil ditambahkan ke galeri publik!");
};

// ===================================================================
// 4. BUSINESS SETTINGS MANAGEMENT
// ===================================================================
function initBusinessSettings() {
  const saved = localStorage.getItem('mizzela_business_settings');
  if (saved) {
    try {
      adminState.settings = JSON.parse(saved);
    } catch (e) {
      adminState.settings = { ...DEFAULT_BUSINESS_SETTINGS };
    }
  } else {
    adminState.settings = { ...DEFAULT_BUSINESS_SETTINGS };
    saveBusinessSettings();
  }
}

function saveBusinessSettings() {
  localStorage.setItem('mizzela_business_settings', JSON.stringify(adminState.settings));
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
}

window.handleSaveBusinessSettings = function(event) {
  event.preventDefault();

  const bName = document.getElementById('setting-business-name').value.trim();
  const sName = document.getElementById('setting-studio-name').value.trim();
  const phone = document.getElementById('setting-phone').value.trim();
  const ig = document.getElementById('setting-instagram').value.trim();
  const address = document.getElementById('setting-address').value.trim();
  const hours = document.getElementById('setting-hours').value.trim();

  // Normalize phone to international WA format
  let waClean = phone.replace(/[^0-9]/g, '');
  if (waClean.startsWith('0')) {
    waClean = '62' + waClean.substring(1);
  }

  let igHandle = ig.startsWith('@') ? ig : '@' + ig;
  let igUrl = `https://instagram.com/${igHandle.replace('@', '')}`;

  adminState.settings = {
    businessName: bName || DEFAULT_BUSINESS_SETTINGS.businessName,
    studioName: sName || DEFAULT_BUSINESS_SETTINGS.studioName,
    phoneNumber: phone || DEFAULT_BUSINESS_SETTINGS.phoneNumber,
    whatsappNumber: waClean || DEFAULT_BUSINESS_SETTINGS.whatsappNumber,
    instagramHandle: igHandle,
    instagramUrl: igUrl,
    address: address || DEFAULT_BUSINESS_SETTINGS.address,
    operationalHours: hours || DEFAULT_BUSINESS_SETTINGS.operationalHours
  };

  saveBusinessSettings();

  const titleEl = document.getElementById('admin-header-title');
  if (titleEl) titleEl.innerText = `${adminState.settings.businessName} — Panel Admin`;

  showAdminToast("💾 Pengaturan profil bisnis berhasil disimpan dan langsung aktif di website!");
};

// ===================================================================
// UTILITY: TOAST NOTIFICATIONS
// ===================================================================
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
  }, 3200);
}
