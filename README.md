# eFutsal 3D — repaired prototype

Prototype modular browser futsal. Pemain dan arena dibuat procedural (tidak perlu model eksternal).

## Jalankan lokal
Karena memakai ES Modules, jalankan dari server lokal, bukan file://.
- Python: `python -m http.server 8000` di folder proyek
- Buka `http://localhost:8000`

## GitHub Pages
Upload seluruh isi folder ini ke root repository. Settings → Pages → Deploy from a branch → `main` → `/root`.

## Admin
Password admin: `rahasia`. Panel admin mengelola roster lokal di browser (`localStorage`). Ini bukan autentikasi aman untuk website publik; password berada di JavaScript dan hanya untuk prototipe.

## Kontrol
- Gerak: WASD / Arrow Keys / joystick
- Pass: J, Z, Space
- Through: K, X
- Shoot: L, Enter
- Sprint: Shift / tombol SPRINT
- Switch: Q / E
- Mobile: joystick + tombol layar

## Catatan fitur
- VS BOT adalah mode yang bisa dimainkan. Online P2P masih prototipe koneksi PeerJS/room dan belum menyinkronkan state gameplay penuh; jika koneksi gagal, bot tetap berjalan.
- Match timer, skor, pergerakan pemain terpilih, bot sederhana, passing/shooting dasar tersedia. Rules futsal, multiplayer state sync, dan mode tie-breaker belum lengkap.
- Three.js dan PeerJS memerlukan internet/CDN. Jika CDN/WebGL gagal, game menampilkan fallback dan kembali ke menu.
