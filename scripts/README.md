# 🛠️ Helper Scripts

Scripts untuk mempermudah proses submission.

---

## 📜 Available Scripts

### 1. `create-demo-branch.sh`

**Fungsi:** Membuat branch demo otomatis untuk screenshot CI/CD

**Usage:**
```bash
npm run create-demo-branch
```

**Atau manual:**
```bash
bash scripts/create-demo-branch.sh
```

**Apa yang dilakukan:**
- ✅ Membuat branch baru dengan nama unik
- ✅ Menambahkan perubahan kecil ke README.md
- ✅ Commit dan push ke GitHub
- ✅ Memberikan instruksi next steps

**Output:**
```
🚀 Creating demo branch for screenshot...
📝 Creating branch: test/screenshot-demo-20251101-143022
✅ Added demo change to README.md
💾 Committing changes...
📤 Pushing to GitHub...
✅ Branch created successfully!

📋 NEXT STEPS:
1. Go to: https://github.com/rfahrozi/forums/pulls
2. Click 'New pull request'
...
```

---

### 2. `verify-submission.js`

**Fungsi:** Verifikasi semua requirements submission terpenuhi

**Usage:**
```bash
npm run verify
```

**Atau manual:**
```bash
node scripts/verify-submission.js
```

**Apa yang dicek:**
- ✅ Project structure (package.json, src/, public/)
- ✅ Dependencies (Redux, React Query, PropTypes, dll)
- ✅ Scripts (test, build, e2e, lint)
- ✅ Test files (minimal 6 test files)
- ✅ GitHub Actions workflow
- ✅ Vercel configuration
- ✅ Screenshots (PNG/JPG, bukan PDF)

**Output:**
```
🔍 Verifying Submission Requirements...

📦 Checking Project Structure...
✅ package.json exists
✅ README.md exists
...

📊 VERIFICATION SUMMARY
✅ PASSED CHECKS: 25
⚠️  WARNINGS: 2
❌ FAILED CHECKS: 0

🎉 PROJECT READY FOR SUBMISSION!
```

---

### 3. `prepare-zip.sh` (via npm script)

**Fungsi:** Persiapan project untuk di-ZIP

**Usage:**
```bash
npm run prepare-zip
```

**Apa yang dilakukan:**
- ✅ Menghapus folder `node_modules`
- ✅ Menghapus folder `build`
- ✅ Membersihkan file temporary

**Setelah itu:**
```bash
# ZIP folder project
# Windows: Right-click → Send to → Compressed folder
# Mac: Right-click → Compress
# Linux: zip -r forums-submission.zip .
```

---

## 🚀 Quick Commands

**Verifikasi sebelum submission:**
```bash
npm run verify
```

**Buat branch untuk screenshot:**
```bash
npm run create-demo-branch
```

**Siapkan untuk ZIP:**
```bash
npm run prepare-zip
```

**Lihat semua commands:**
```bash
npm run help
```

---

## 📋 Workflow Lengkap

### Step 1: Verifikasi Project
```bash
npm run verify
```

### Step 2: Buat Branch Demo
```bash
npm run create-demo-branch
```

### Step 3: Buat PR di GitHub
- Buka link yang diberikan script
- Create pull request
- Tunggu CI selesai

### Step 4: Ambil Screenshot
- Screenshot CI pass dari PR page
- Screenshot branch protection dari Settings

### Step 5: Deploy ke Vercel
- Via dashboard atau CLI
- Catat URL production

### Step 6: Siapkan ZIP
```bash
npm run prepare-zip
# Lalu ZIP folder project
```

### Step 7: Submit!
- Upload ZIP
- Upload screenshots
- Submit ke Dicoding

---

## 🆘 Troubleshooting

### Script tidak bisa dijalankan?

**Windows:**
```bash
# Gunakan Git Bash atau WSL
bash scripts/create-demo-branch.sh
```

**Mac/Linux:**
```bash
# Pastikan executable
chmod +x scripts/create-demo-branch.sh
./scripts/create-demo-branch.sh
```

### Node script error?

```bash
# Pastikan Node.js terinstall
node --version

# Jalankan langsung
node scripts/verify-submission.js
```

---

## 📚 Dokumentasi Lengkap

Untuk panduan lengkap, lihat:
- `QUICK_START_GUIDE.md` - Panduan cepat
- `INTERACTIVE_CHECKLIST.md` - Checklist step-by-step
- `SUBMISSION_NOTES.md` - Template catatan submission
- `LANGKAH_MANUAL.md` - Panduan detail manual

---

## 💡 Tips

1. **Jalankan verify dulu** - Sebelum mulai submission
2. **Gunakan create-demo-branch** - Lebih cepat dari manual
3. **Cek output script** - Baca instruksi yang diberikan
4. **Simpan URL** - Catat URL PR dan Vercel

---

*Scripts version: 1.0*
