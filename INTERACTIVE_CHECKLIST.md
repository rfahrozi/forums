# ✅ INTERACTIVE SUBMISSION CHECKLIST

**Gunakan checklist ini untuk memastikan semua langkah selesai!**

---

## 🎯 PERSIAPAN AWAL

- [ ] ✅ Semua tests passing (35/35)
- [ ] ✅ Build berhasil (`npm run build`)
- [ ] ✅ Lint passing (`npm run lint`)
- [ ] ✅ Code sudah di-push ke GitHub
- [ ] ✅ GitHub Actions workflow configured

**Status:** Semua sudah selesai! ✅

---

## 📋 LANGKAH MANUAL (Ikuti Urutan!)

### STEP 1: Ubah Repository ke PUBLIC ⏳

**Estimasi:** 2 menit

**Checklist:**
- [ ] Buka https://github.com/rfahrozi/forums/settings
- [ ] Scroll ke **Danger Zone**
- [ ] Klik **Change visibility**
- [ ] Pilih **Make public**
- [ ] Ketik: `rfahrozi/forums`
- [ ] Klik **I understand, change repository visibility**
- [ ] ✅ Repository sekarang PUBLIC

**Verifikasi:** Buka repo, pastikan tidak ada label "Private"

---

### STEP 2: Setup Branch Protection ⏳

**Estimasi:** 3 menit

**Checklist:**
- [ ] Di Settings, klik **Branches** (menu kiri)
- [ ] Klik **Add branch protection rule**
- [ ] Branch name pattern: `master`
- [ ] Centang: **Require a pull request before merging**
- [ ] Centang: **Require status checks to pass before merging**
- [ ] Centang: **Require branches to be up to date before merging**
- [ ] Di Status checks, cari dan centang: `test`
- [ ] Klik **Create** (scroll ke bawah)
- [ ] ✅ Branch protection aktif

**Verifikasi:** Lihat badge "Protected" di branch master

---

### STEP 3: Buat Branch Demo ⏳

**Estimasi:** 2 menit

**Option A - Otomatis (Recommended):**
```bash
npm run create-demo-branch
```

**Option B - Manual:**
```bash
git checkout -b test/screenshot-demo
echo "// Demo for screenshot" >> README.md
git add .
git commit -m "test: trigger CI for screenshot"
git push origin test/screenshot-demo
```

**Checklist:**
- [ ] Branch baru dibuat
- [ ] Perubahan di-commit
- [ ] Branch di-push ke GitHub
- [ ] ✅ Branch demo ready

---

### STEP 4: Buat Pull Request ⏳

**Estimasi:** 2 menit

**Checklist:**
- [ ] Buka https://github.com/rfahrozi/forums/pulls
- [ ] Klik **New pull request**
- [ ] Base: `master` ← Compare: `test/screenshot-demo`
- [ ] Klik **Create pull request**
- [ ] Tunggu CI mulai berjalan
- [ ] ✅ Pull Request dibuat

**Verifikasi:** Lihat status check "test" muncul di PR

---

### STEP 5: Ambil Screenshot CI Pass ⏳

**Estimasi:** 3 menit

**Checklist:**
- [ ] Tunggu CI selesai (2-3 menit)
- [ ] Pastikan status: ✅ All checks have passed
- [ ] Pastikan terlihat: Status check "test" dengan ✅
- [ ] Screenshot halaman PR (BUKAN workflow page!)
- [ ] Simpan sebagai: `screenshot/ci_check_pass.png`
- [ ] Format: PNG atau JPG (BUKAN PDF!)
- [ ] ✅ Screenshot CI pass tersimpan

**Tips:** 
- Gunakan Snipping Tool (Windows) atau Screenshot (Mac)
- Pastikan URL terlihat di screenshot
- Pastikan status check terlihat jelas

---

### STEP 6: Ambil Screenshot Branch Protection ⏳

**Estimasi:** 1 menit

**Checklist:**
- [ ] Buka https://github.com/rfahrozi/forums/settings/branches
- [ ] Pastikan branch protection rule untuk `master` terlihat
- [ ] Screenshot halaman settings
- [ ] Simpan sebagai: `screenshot/branch_protection.png`
- [ ] Format: PNG atau JPG (BUKAN PDF!)
- [ ] ✅ Screenshot branch protection tersimpan

---

### STEP 7: Verifikasi Screenshot ⏳

**Estimasi:** 1 menit

**Checklist:**
- [ ] Ada file: `screenshot/ci_check_pass.png`
- [ ] Ada file: `screenshot/branch_protection.png`
- [ ] Kedua file format PNG atau JPG
- [ ] Kedua file bisa dibuka dan jelas
- [ ] Tidak ada file PDF di folder screenshot
- [ ] ✅ Screenshot verified

**Command untuk cek:**
```bash
ls -la screenshot/
```

---

### STEP 8: Deploy ke Vercel ⏳

**Estimasi:** 5 menit

**Option A - Via Dashboard (Mudah):**

**Checklist:**
- [ ] Buka https://vercel.com
- [ ] Login dengan GitHub
- [ ] Klik **Add New** → **Project**
- [ ] Import repository: `rfahrozi/forums`
- [ ] Framework Preset: **Create React App**
- [ ] Build Command: `npm run build`
- [ ] Output Directory: `build`
- [ ] Klik **Deploy**
- [ ] Tunggu deployment selesai (2-3 menit)
- [ ] ✅ Deployment berhasil

**Option B - Via CLI (Cepat):**

**Checklist:**
- [ ] Install: `npm i -g vercel`
- [ ] Login: `vercel login`
- [ ] Deploy: `vercel --prod`
- [ ] ✅ Deployment berhasil

---

### STEP 9: Catat URL Vercel ⏳

**Estimasi:** 1 menit

**Checklist:**
- [ ] Copy URL production dari Vercel
- [ ] Format: `https://forums-xxxxx.vercel.app`
- [ ] Test URL di browser (pastikan aplikasi berjalan)
- [ ] Paste URL ke `SUBMISSION_NOTES.md`
- [ ] ✅ URL dicatat

**URL Saya:** ___________________________________

---

### STEP 10: Update Submission Notes ⏳

**Estimasi:** 2 menit

**Checklist:**
- [ ] Buka file: `SUBMISSION_NOTES.md`
- [ ] Ganti `https://forums-xxxxx.vercel.app` dengan URL Anda
- [ ] Isi nama Anda di bagian atas
- [ ] Review semua informasi
- [ ] Save file
- [ ] ✅ Submission notes ready

---

### STEP 11: Siapkan ZIP Project ⏳

**Estimasi:** 2 menit

**Checklist:**
- [ ] Hapus folder `node_modules` (jika ada)
- [ ] Hapus folder `build` (jika ada)
- [ ] ZIP seluruh folder project
- [ ] Nama ZIP: `forums-submission.zip`
- [ ] Ukuran ZIP < 50 MB
- [ ] ✅ ZIP file ready

**Command:**
```bash
# Hapus folder besar
rm -rf node_modules build

# Atau di Windows
rmdir /s /q node_modules build
```

---

### STEP 12: Final Verification ⏳

**Estimasi:** 2 menit

**Checklist:**
- [ ] Repository PUBLIC ✅
- [ ] Branch protection aktif ✅
- [ ] Screenshot `ci_check_pass.png` ada ✅
- [ ] Screenshot `branch_protection.png` ada ✅
- [ ] Kedua screenshot format PNG/JPG ✅
- [ ] Aplikasi deployed ke Vercel ✅
- [ ] URL Vercel dicatat ✅
- [ ] Submission notes updated ✅
- [ ] Project di-ZIP ✅
- [ ] ✅ READY TO SUBMIT!

**Run verification script:**
```bash
node scripts/verify-submission.js
```

---

### STEP 13: Submit ke Dicoding 🎉

**Estimasi:** 3 menit

**Checklist:**
- [ ] Login ke Dicoding
- [ ] Buka halaman submission
- [ ] Upload `forums-submission.zip`
- [ ] Upload `ci_check_pass.png`
- [ ] Upload `branch_protection.png`
- [ ] Copy-paste isi `SUBMISSION_NOTES.md`
- [ ] Review semua informasi
- [ ] Klik **Submit**
- [ ] ✅ SUBMITTED! 🎉

---

## 🎯 SUMMARY

**Total Steps:** 13  
**Estimated Time:** 20-25 menit  
**Difficulty:** Easy (semua sudah disiapkan!)

**Progress Tracker:**
- [ ] Steps 1-2: GitHub Setup (5 min)
- [ ] Steps 3-7: Screenshots (9 min)
- [ ] Steps 8-9: Deployment (6 min)
- [ ] Steps 10-13: Submission (7 min)

---

## 💡 TIPS SUKSES

1. **Ikuti urutan** - Jangan skip steps!
2. **Screenshot PNG/JPG** - Dicoding tidak terima PDF
3. **Screenshot dari PR page** - Bukan workflow page
4. **Test URL Vercel** - Pastikan aplikasi berjalan
5. **Hapus node_modules** - Sebelum ZIP

---

## 🆘 JIKA ADA MASALAH

### CI Gagal?
```bash
npm test          # Test lokal
npm run build     # Build lokal
# Fix error, lalu push lagi
```

### Vercel Gagal?
- Cek build log di dashboard
- Pastikan build command: `npm run build`
- Pastikan output: `build`

### Screenshot Salah Format?
- Gunakan Snipping Tool / Screenshot app
- Save as PNG atau JPG
- Jangan export ke PDF

---

## 🎉 SELAMAT!

Setelah semua checklist ✅, Anda siap submit!

**Good luck! 🚀**

---

*Checklist version: 1.0*
