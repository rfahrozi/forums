Aplikasi Forum dengan React.
KRITERIA UTAMA (WAJIB)
 Ada halaman/form register dan login (terhubung ke Dicoding Forum API, simpan token jika login sukses).

 Bisa menampilkan daftar thread (API) dan info: judul, (potongan) body, waktu pembuatan, jumlah komentar, nama pembuat, avatar.

 Setelah pilih thread: tampil detail thread dan semua komentar (isi, waktu, nama/ avatar).

 Membuat thread baru (hanya user login).

 Membuat komentar di thread (hanya user login).

 Loading indicator (visual) tiap pengambilan data API.

 Semua pemanggilan API dilakukan di Redux slice/asyncThunk bukan di komponen.

 Semua state API disimpan di Redux store.

 Pemisahan modular antara file slices, api, komponen (UI), dan halaman.

 Komponen modular, reusable.

 Gunakan ESLint (.eslintrc.js) — error perlu 0 (tidak ada warning/fatal).

 Gunakan Code Convention (AirBnB, Dicoding Style Guide, dst.).

 React Strict Mode (<React.StrictMode> di index.js).

KRITERIA SARAN (FITUR UNGGUL)
 Setiap thread bisa upvote dan downvote, tombol warna dan indikator sudah vote.

 Jumlah vote tampil di thread & komentar.

 Optimistically Apply Actions: status vote update langsung di UI setelah klik vote.

 Komentar juga bisa di-vote (bonus, saran unggul!).

 Leaderboard (halaman berbeda): tampil nama, avatar, skor user aktif.

 Filter kategori thread di halaman thread (kategori bisa property thread atau buatan frontend).

 UI mudah digunakan, menarik, dan konsisten, termasuk aksesibilitas warna.

CATATAN PENTING


 Tidak menggunakan framework lain selain React (bukan Next, bukan React Native, bukan Bootstrap).

 Tidak ada code yang di-minify.

 tambahkan catatan manusiawi dengan bahasa indonesia.

 Dapat dijalankan dengan npm install dan npm start/yarn start setelah extract.

Memastikan Fungsional:
Cek semua fitur di browser (register, login, post thread, post komentar, vote, filter, leaderboard).

Pastikan reload halaman, data tetap konsisten dari API, bukan sekadar dummy.

Lint your code: jalankan npx eslint . atau di VSCode, pastikan tidak ada error.

Pastikan seluruh kode tidak ada error merah di console browser.

Test logout dan login, test semua restriction hanya bisa post jika login.

Test mobile view: shrink window, pastikan tetap rapi.

Jika ada kendala/error:
Jika komentar/fitur tidak muncul cek prop dan mapping state/props dari redux dengan benar.

Jika vote tidak berubah, cek thunk, dan pastikan reducer reactif pada action fulfilled.

Jika thread/komentar tidak tampil atau error, cek endpoint API dan response/error API.