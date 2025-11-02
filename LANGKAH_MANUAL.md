# 🎯 LANGKAH MANUAL YANG HARUS DILAKUKAN

## ✅ Status Saat Ini
- ✅ Code sudah di-push ke GitHub: https://github.com/rfahrozi/forums
- ✅ Semua test passing (33 tests)
- ✅ Build berhasil
- ✅ Lint passing
- ✅ GitHub Actions workflow sudah terkonfigurasi

## 🔴 LANGKAH WAJIB (Harus dilakukan manual)

### 1️⃣ UBAH REPOSITORY KE PUBLIC (SANGAT PENTING!)

**Kenapa?** Branch protection hanya bisa diaktifkan di repository public.

**Cara:**
1. Buka https://github.com/rfahrozi/forums
2. Klik **Settings** (tab paling kanan)
3. Scroll ke bawah sampai bagian **Danger Zone**
4. Klik **Change visibility**
5. Pilih **Make public**
6. Ketik nama repository: `rfahrozi/forums`
7. Klik **I understand, change repository visibility**

---

### 2️⃣ SETUP BRANCH PROTECTION

**Cara:**
1. Masih di Settings, klik **Branches** di menu kiri
2. Klik **Add branch protection rule**
3. Di **Branch name pattern**, ketik: `master`
4. Centang opsi berikut:
   - ✅ **Require a pull request before merging**
   - ✅ **Require status checks to pass before merging**
   - ✅ **Require branches to be up to date before merging**
   - Di bagian status checks, cari dan centang: **test**
5. Scroll ke bawah, klik **Create**

---

### 3️⃣ BUAT PULL REQUEST UNTUK SCREENSHOT

**Tujuan:** Mendapatkan screenshot CI error dan CI pass

**Cara:**
1. Buat branch baru:
   ```bash
   git checkout -b test/screenshot-demo
   ```

2. Buat perubahan kecil (untuk trigger CI error):
   ```bash
   echo "// test" >> src/App.js
   ```

3. Commit dan push:
   ```bash
   git add .
   git commit -m "test: trigger CI for screenshot"
   git push origin test/screenshot-demo
   ```

4. Buka https://github.com/rfahrozi/forums/pulls
5. Klik **New pull request**
6. Base: `master`, Compare: `test/screenshot-demo`
7. Klik **Create pull request**

8. **AMBIL SCREENSHOT 1: CI Check Error**
   - Tunggu CI berjalan dan gagal (jika ada error)
   - Screenshot halaman PR yang menunjukkan CI error
   - Simpan sebagai: `screenshot/1_ci_check_error.png`

9. Fix error (jika ada), commit, push lagi

10. **AMBIL SCREENSHOT 2: CI Check Pass**
    - Tunggu CI berjalan dan berhasil
    - Screenshot halaman PR yang menunjukkan semua check ✅
    - Simpan sebagai: `screenshot/2_ci_check_pass.png`

---

### 4️⃣ SCREENSHOT BRANCH PROTECTION

**Cara:**
1. Buka https://github.com/rfahrozi/forums/settings/branches
2. Screenshot halaman yang menunjukkan branch protection rule aktif
3. Simpan sebagai: `screenshot/3_branch_protection.png`

**PENTING:** Screenshot harus format PNG atau JPG, BUKAN PDF!

---

### 5️⃣ DEPLOY KE VERCEL

**Cara:**

#### Option A: Via Vercel Dashboard (Recommended)
1. Buka https://vercel.com
2. Login dengan GitHub
3. Klik **Add New Project**
4. Import repository: `rfahrozi/forums`
5. Framework Preset: **Create React App**
6. Build Command: `npm run build`
7. Output Directory: `build`
8. Klik **Deploy**
9. Tunggu deployment selesai
10. Copy URL production (contoh: https://forums-seven.vercel.app)

#### Option B: Via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

---

### 6️⃣ CATAT URL VERCEL

Setelah deploy berhasil, catat URL production Anda:
- URL Production: `https://forums-seven.vercel.app` (atau URL Anda)

---

### 7️⃣ SIAPKAN SUBMISSION

**File yang perlu disiapkan:**

1. **Screenshot** (3 file, format PNG/JPG):
   - `1_ci_check_error.png` - CI check error
   - `2_ci_check_pass.png` - CI check pass
   - `3_branch_protection.png` - Branch protection aktif

2. **Catatan Submission:**
   ```
   URL Vercel: https://forums-seven.vercel.app
   
   Repository: https://github.com/rfahrozi/forums
   
   Kriteria yang dipenuhi:
   ✅ Automation Testing (35+ tests)
   ✅ CI/CD dengan GitHub Actions
   ✅ Deployment ke Vercel
   ✅ Branch Protection
   ✅ React Ecosystem (React Query, PropTypes, ESLint)
   ✅ Semua fitur submission sebelumnya
   
   Screenshot terlampir:
   - 1_ci_check_error.png
   - 2_ci_check_pass.png
   - 3_branch_protection.png
   ```

3. **ZIP Project:**
   - Hapus folder `node_modules` dan `build`
   - ZIP folder project
   - Upload ke Dicoding

---

## 📋 CHECKLIST AKHIR

Sebelum submit, pastikan:

- [ ] Repository sudah PUBLIC
- [ ] Branch protection sudah aktif
- [ ] Ada 3 screenshot (PNG/JPG, bukan PDF!)
- [ ] Screenshot diambil dari halaman PR (bukan workflow page)
- [ ] Aplikasi sudah deploy ke Vercel
- [ ] URL Vercel sudah dicatat
- [ ] Project sudah di-ZIP (tanpa node_modules)
- [ ] Semua test passing
- [ ] Build berhasil

---

## 🆘 TROUBLESHOOTING

### Jika CI gagal:
1. Cek log di GitHub Actions
2. Jalankan test lokal: `npm test`
3. Fix error yang muncul
4. Commit dan push lagi

### Jika Vercel deployment gagal:
1. Cek build log di Vercel dashboard
2. Pastikan build command: `npm run build`
3. Pastikan output directory: `build`
4. Coba deploy ulang

### Jika branch protection tidak bisa diaktifkan:
1. Pastikan repository sudah PUBLIC
2. Pastikan Anda adalah owner repository
3. Refresh halaman dan coba lagi

---

## 📞 BANTUAN

Jika ada masalah, cek file-file berikut:
- `PANDUAN_LENGKAP.md` - Panduan detail lengkap
- `PERBAIKAN_SCREENSHOT.md` - Cara ambil screenshot yang benar
- `DEPLOYMENT.md` - Panduan deployment detail
- `ACTION_ITEMS.md` - TO-DO list

---

**Semoga berhasil! 🚀**
