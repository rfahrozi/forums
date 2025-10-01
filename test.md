panduan lengkap dan urutan langkah teknis untuk menyelesaikan submission Menerapkan Automation Testing dan CI/CD pada Aplikasi ini

Langkah 1: Persiapan Proyek

Pastikan aplikasi merupakan React (bukan React Native), terstruktur baik.
Pastikan semua fungsionalitas utama, bug highlighting, dan arsitektur tetap sesuai ketentuan sebelumnya.

Langkah 2: Automation Testing

Reducer Tests:

Buat minimal 2 unit test untuk fungsi reducer (gunakan Jest/RTL).

Pilih reducer dengan kondisi kompleks jika bisa.

Thunk Function Tests:

Buat minimal 2 unit test untuk thunk (function side effect di Redux).

React Component Tests:

Buat minimal 2 unit test untuk komponen React.

End-to-End Test:

Buat 1 E2E test (gunakan Cypress atau sejenis) untuk alur login aplikasi.

Skenario Test:

Tulis skenario pengujian pada masing-masing berkas test.

Pastikan:

Semua pengujian bisa dijalankan via npm test dan npm run e2e.

Langkah 3: Deployment & CI/CD

Buat Repository Private di GitHub.

Setup CI/CD:

Pakai GitHub Actions untuk otomatisasi pengujian (npm test, npm run e2e) pada setiap push/PR.

Setup Continuous Deployment ke Vercel (tambah integrasi Vercel di repo).

Branch Protection:

Aktifkan proteksi branch utama (master/main) di GitHub (requiring reviews, CI passing).

Dokumentasi Deployment:

Ambil screenshot dan simpan dalam folder proyek (lalu zip):

CI check error (test gagal).

CI check pass (test lolos).

Halaman branch protection pada PR GitHub.

Copy URL aplikasi Vercel.

Langkah 4: Ecosystem React

Pilih minimal 1 library React Ecosystem dari daftar GitHub Dicoding yang diperbolehkan, selain yang dikecualikan.

Integrasikan dan gunakan dengan jelas agar reviewer bisa mengidentifikasi penggunaannya.

Langkah 5: Kriteria Maksimum Penilaian

Lebih dari 3 pengujian reducer, thunk, komponen.

Minimal 2 stories pada komponen.

Terapkan saran submission sebelumnya (vote, leaderboard, filter thread per kategori).

Pastikan UI/UX menarik dan mudah digunakan.

Langkah 6: Siapkan Berkas Submission

Kompres folder proyek (React, render via react-dom) ke ZIP.

Hapus node_modules dari ZIP agar file tidak terlalu besar dan bisa direview.

Pastikan screenshot dan dokumen (README/txt berisi instruksi, link Vercel, dan deskripsi) ada di ZIP.

Jangan mengirim code yang sudah di-minify.

Jangan gunakan framework/library selain React yang dilarang.

Pastikan tidak ada tindakan plagiasi.

Langkah 7: Submit ke Dicoding

Buka halaman submission tugas ini pada Dicoding.

Upload ZIP folder aplikasi.

Masukkan URL aplikasi Vercel pada catatan submission.

Pastikan semua dokumen dan screenshot sesuai panduan.

Setelah submit, tunggu review (max 3 hari kerja, via email dan halaman submission Dicoding).

Catatan Penting

Jangan submit berkali-kali agar proses review tidak terhambat.

Pastikan semua instruksi dan checklist di atas sudah kamu lakukan.

Lihat detail dan daftar library React Ecosystem di GitHub Dicoding.

