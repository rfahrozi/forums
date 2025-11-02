# 📸 PANDUAN SCREENSHOT YANG BENAR

**PENTING:** Dicoding hanya menerima PNG atau JPG, BUKAN PDF!

---

## ⚠️ KESALAHAN UMUM

### ❌ YANG SALAH:

1. **Format PDF** - Dicoding tidak terima!
2. **Screenshot dari Workflow page** - Harus dari PR page!
3. **Screenshot blur/tidak jelas** - Harus terlihat jelas
4. **Tidak terlihat status check** - Harus ada ✅ check mark

---

## ✅ YANG BENAR

### Screenshot 1: CI Check Pass

**Lokasi:** Halaman Pull Request (bukan workflow page!)

**URL:** `https://github.com/rfahrozi/forums/pull/[NUMBER]`

**Yang harus terlihat:**
- ✅ "All checks have passed" atau "All checks successful"
- ✅ Status check "test" dengan centang hijau ✅
- ✅ URL GitHub terlihat di browser
- ✅ Nama repository terlihat

**Cara ambil:**
1. Buka Pull Request yang sudah dibuat
2. Scroll ke bagian checks (biasanya di tengah/bawah)
3. Tunggu sampai semua check ✅ (hijau)
4. Screenshot area yang menunjukkan:
   ```
   ✅ All checks have passed
   
   test ✅
   Required
   ```

**Format:** `screenshot/ci_check_pass.png` atau `.jpg`

---

### Screenshot 2: Branch Protection

**Lokasi:** Settings → Branches

**URL:** `https://github.com/rfahrozi/forums/settings/branches`

**Yang harus terlihat:**
- ✅ Branch protection rule untuk `master`
- ✅ Status "Active" atau enabled
- ✅ Rules yang dicentang:
  - Require pull request
  - Require status checks
  - Status check: test
- ✅ URL GitHub terlihat di browser

**Cara ambil:**
1. Buka Settings repository
2. Klik "Branches" di menu kiri
3. Lihat branch protection rules
4. Screenshot area yang menunjukkan rule untuk `master`

**Format:** `screenshot/branch_protection.png` atau `.jpg`

---

## 🖼️ CARA MENGAMBIL SCREENSHOT

### Windows:

**Option 1: Snipping Tool (Recommended)**
1. Tekan `Windows + Shift + S`
2. Pilih area yang ingin di-screenshot
3. Screenshot otomatis tersimpan di clipboard
4. Buka Paint atau aplikasi lain
5. Paste (`Ctrl + V`)
6. Save as PNG atau JPG

**Option 2: Print Screen**
1. Tekan `PrtScn` atau `Alt + PrtScn`
2. Buka Paint
3. Paste (`Ctrl + V`)
4. Crop jika perlu
5. Save as PNG atau JPG

---

### Mac:

**Option 1: Screenshot Area (Recommended)**
1. Tekan `Cmd + Shift + 4`
2. Drag untuk pilih area
3. File otomatis tersimpan di Desktop
4. Format default: PNG ✅

**Option 2: Screenshot Window**
1. Tekan `Cmd + Shift + 4`
2. Tekan `Space`
3. Klik window yang ingin di-screenshot
4. File otomatis tersimpan di Desktop

---

### Linux:

**Option 1: GNOME Screenshot**
1. Tekan `PrtScn` atau `Shift + PrtScn`
2. Pilih area
3. Save as PNG atau JPG

**Option 2: Flameshot (jika terinstall)**
1. Jalankan `flameshot gui`
2. Pilih area
3. Save as PNG atau JPG

---

## 📁 MENYIMPAN SCREENSHOT

### Lokasi:
```
forums/
└── screenshot/
    ├── ci_check_pass.png      ← Screenshot 1
    └── branch_protection.png  ← Screenshot 2
```

### Nama File:
- ✅ `ci_check_pass.png` atau `ci_check_pass.jpg`
- ✅ `branch_protection.png` atau `branch_protection.jpg`
- ❌ JANGAN: `screenshot1.pdf`, `ci-check.pdf`, dll

### Format:
- ✅ PNG (recommended)
- ✅ JPG/JPEG
- ❌ PDF (Dicoding tidak terima!)
- ❌ BMP, GIF, TIFF, dll

---

## ✅ CHECKLIST SCREENSHOT

Sebelum submit, pastikan:

### Screenshot 1 (CI Check Pass):
- [ ] Format PNG atau JPG (bukan PDF)
- [ ] Dari halaman Pull Request (bukan workflow)
- [ ] Terlihat "All checks have passed"
- [ ] Terlihat status check "test" dengan ✅
- [ ] URL GitHub terlihat
- [ ] Gambar jelas (tidak blur)
- [ ] Ukuran file < 5 MB

### Screenshot 2 (Branch Protection):
- [ ] Format PNG atau JPG (bukan PDF)
- [ ] Dari Settings → Branches
- [ ] Terlihat branch protection rule untuk `master`
- [ ] Terlihat rules yang aktif
- [ ] URL GitHub terlihat
- [ ] Gambar jelas (tidak blur)
- [ ] Ukuran file < 5 MB

---

## 🔄 CONVERT PDF KE PNG

Jika sudah terlanjur screenshot PDF:

### Online (Mudah):
1. Buka: https://www.ilovepdf.com/pdf_to_jpg
2. Upload PDF
3. Convert to JPG
4. Download hasil

### Windows:
1. Buka PDF di browser
2. Screenshot dengan Snipping Tool
3. Save as PNG

### Mac:
1. Buka PDF di Preview
2. File → Export
3. Format: PNG
4. Save

---

## 🎯 CONTOH YANG BENAR

### Screenshot 1: CI Check Pass

**Harus terlihat seperti ini:**
```
github.com/rfahrozi/forums/pull/1

[Pull Request Title]

✅ All checks have passed

Checks:
  test ✅
  Required
  
  Details →
```

### Screenshot 2: Branch Protection

**Harus terlihat seperti ini:**
```
github.com/rfahrozi/forums/settings/branches

Branch protection rules

master
  ✅ Require a pull request before merging
  ✅ Require status checks to pass before merging
  ✅ Require branches to be up to date before merging
  
  Status checks found in the last week:
    ✅ test
```

---

## ⚠️ TROUBLESHOOTING

### Screenshot terlalu besar?
**Solusi:**
1. Crop hanya bagian penting
2. Compress dengan https://tinypng.com
3. Atau resize dengan Paint/Preview

### Screenshot blur?
**Solusi:**
1. Ambil ulang dengan resolusi lebih tinggi
2. Jangan zoom terlalu besar
3. Gunakan full screen browser

### Tidak bisa screenshot?
**Solusi:**
1. Coba browser lain
2. Disable browser extensions
3. Gunakan incognito mode

### PDF sudah terlanjur di-upload?
**Solusi:**
1. Convert ke PNG/JPG
2. Upload ulang
3. Hapus PDF dari submission

---

## 💡 TIPS PENTING

1. **Ambil screenshot saat check sudah ✅**
   - Jangan screenshot saat masih loading
   - Tunggu sampai semua check hijau

2. **Full screen browser**
   - Agar URL terlihat jelas
   - Agar tidak ada distraction

3. **Light mode recommended**
   - Lebih jelas untuk screenshot
   - Lebih mudah dibaca reviewer

4. **Simpan backup**
   - Simpan di 2 tempat
   - Jaga-jaga jika perlu ambil ulang

5. **Verifikasi sebelum submit**
   - Buka file screenshot
   - Pastikan bisa dibuka
   - Pastikan jelas dan lengkap

---

## 📋 QUICK CHECKLIST

Sebelum submit ke Dicoding:

```bash
# Cek file screenshot
ls -la screenshot/

# Harus ada 2 file:
# ci_check_pass.png (atau .jpg)
# branch_protection.png (atau .jpg)

# Verifikasi format
file screenshot/*.png
# Output harus: PNG image data

# Verifikasi ukuran
du -h screenshot/*.png
# Harus < 5 MB per file
```

---

## 🎉 SELESAI!

Jika kedua screenshot sudah:
- ✅ Format PNG/JPG
- ✅ Dari halaman yang benar
- ✅ Terlihat jelas
- ✅ Ukuran < 5 MB

**Anda siap submit!** 🚀

---

**Referensi:**
- `QUICK_START_GUIDE.md` - Panduan lengkap submission
- `INTERACTIVE_CHECKLIST.md` - Checklist step-by-step
- `PERBAIKAN_SCREENSHOT.md` - Dokumentasi perbaikan screenshot

---

*Screenshot Guide v1.0*
