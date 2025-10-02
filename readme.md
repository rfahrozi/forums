# Aplikasi Forum Dicoding

Aplikasi forum berbasis React untuk komunitas Dicoding. Aplikasi ini memungkinkan pengguna untuk mendaftar, login, membuat thread, berkomentar, dan berinteraksi melalui voting. Dibangun dengan Redux untuk state management, React Router untuk navigasi, dan integrasi API Dicoding.

## Fitur Utama
- **Autentikasi**: Registrasi dan login pengguna dengan validasi error.
- **Thread Management**: Buat, lihat, dan detail thread beserta komentar.
- **Voting System**: Upvote/downvote pada thread dan komentar.
- **Leaderboard**: Papan peringkat pengguna berdasarkan aktivitas.
- **Responsive Design**: Antarmuka yang ramah mobile.

## Teknologi yang Digunakan
- **Frontend**: React 18, Redux Toolkit, React Router DOM
- **Styling**: CSS Modules
- **Testing**:
  - Unit Tests: Jest + React Testing Library
  - E2E Tests: Cypress (login flow berhasil diuji)
- **API**: Integrasi dengan Forum API Dicoding (https://forum-api.dicoding.dev/v1)
- **Deployment**: Vercel (dikonfigurasi via vercel.json)
- **CI/CD**: GitHub Actions untuk build, test, dan e2e pada push/PR ke master

## Cara Menjalankan Lokal
1. **Install Dependencies**:
   ```
   npm install
   ```
   (Atau gunakan Bun: `bun install` jika tersedia)

2. **Jalankan Development Server**:
   ```
   npm start
   ```
   Aplikasi akan berjalan di `http://localhost:3000`.

3. **Jalankan Unit Tests**:
   ```
   npm test
   ```

4. **Jalankan E2E Tests** (Cypress):
   ```
   npm run e2e
   ```
   Pastikan server dev berjalan terlebih dahulu. Test login flow mencakup registrasi, login sukses, dan error handling.

5. **Build untuk Production**:
   ```
   npm run build
   ```

## Pengujian End-to-End
- Test Cypress untuk flow login: Registrasi akun baru, login dengan kredensial valid, verifikasi navigasi ke home dan tombol "Keluar" terlihat.
- Test invalid login menampilkan pesan error "email or password is wrong".
- Semua test passing tanpa error, dikonfigurasi di `cypress.config.js` (supportFile: false untuk menghindari warning).

## CI/CD Workflow
- Workflow GitHub Actions di `.github/workflows/ci.yml` otomatis menjalankan:
  - Install dependencies
  - Build aplikasi
  - Unit tests
  - E2E tests dengan Cypress
- Hanya merge ke master jika semua check passing (branch protection aktif).

## Branch Protection & Pull Requests
- Gunakan branch baru untuk perubahan (contoh: `testing/demo-branch-protection`).
- PR memerlukan CI checks passing sebelum merge.
- Lihat contoh PR: [Link PR Demo](https://github.com/rfahrozi/forums/pull/new/testing/demo-branch-protection)

## Kontribusi
1. Fork repository ini.
2. Buat branch baru: `git checkout -b fitur-baru`.
3. Commit perubahan: `git commit -m "Deskripsi perubahan"`.
4. Push ke branch: `git push origin fitur-baru`.
5. Buat Pull Request.

Pastikan kode mengikuti ESLint dan Prettier standards.

## Lisensi
MIT License - lihat file LICENSE untuk detail.

Terima kasih telah berkontribusi ke Forum Dicoding! 🚀
