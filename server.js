const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

const PORT = process.env.PORT || 3088;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon'
};

const BUSINESS_DATA = {
  name: "Mizzelaa & Print",
  studio: "Mizela Design Studio",
  instagram: "@mizela_design_studio",
  instagramUrl: "https://instagram.com/mizela_design_studio",
  address: "Jl. Bojongloa, Kopo, Kec. Bojongloa Kaler, Kota Bandung, Jawa Barat 40233",
  mapsUrl: "https://maps.google.com/?q=Jl.+Bojongloa,+Kopo,+Kec.+Bojongloa+Kaler,+Kota+Bandung,+Jawa+Barat+40233",
  whatsapp: "6287727577451",
  phone: "0877-2757-7451",
  hours: "Senin - Sabtu: 08:30 - 20:00 WIB | Minggu: 10:00 - 17:00 WIB",
  categories: ["Cetak Cup Minuman", "Sablon Baju & Apparel", "Benda Datar & UV Flatbed", "Stiker & Kemasan", "Layanan Desain Studio"]
};

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('X-Content-Type-Options', 'nosniff');

  let sanitizedUrl = req.url.split('?')[0];

  if (sanitizedUrl === '/api/info') {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify(BUSINESS_DATA));
    return;
  }

  if (sanitizedUrl === '/') sanitizedUrl = '/index.html';

  const filePath = path.join(__dirname, sanitizedUrl);
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        fs.readFile(path.join(__dirname, 'index.html'), (err2, fallback) => {
          if (err2) {
            res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('404 Halaman Tidak Ditemukan');
          } else {
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(fallback, 'utf-8');
          }
        });
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

function getLocalIPs() {
  const interfaces = os.networkInterfaces();
  const addresses = [];
  for (const name in interfaces) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        addresses.push(iface.address);
      }
    }
  }
  return addresses;
}

server.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`  🌟 Mizzelaa & Print x Mizela Design Studio Web Server`);
  console.log(`=======================================================`);
  console.log(`  > Local:   http://localhost:${PORT}`);
  const ips = getLocalIPs();
  ips.forEach(ip => {
    console.log(`  > Network: http://${ip}:${PORT}`);
  });
  console.log(`  > Alamat:  Jl. Bojongloa, Kopo, Bojongloa Kaler, Bandung`);
  console.log(`  > IG:      @mizela_design_studio`);
  console.log(`=======================================================`);
});
