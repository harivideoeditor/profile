# GitHub Upload Guide

## Step-by-step instructions to upload your portfolio to GitHub

### 1. **Initialize Git Repository (if not already done)**
```bash
cd "C:\Users\PC2\Desktop\Hari Profile"
git init
```

### 2. **Add All Files**
```bash
git add .
```

### 3. **Create Initial Commit**
```bash
git commit -m "Initial commit: Professional video editing portfolio"
```

### 4. **Create GitHub Repository**
1. Go to https://github.com/new
2. Repository name: `Hari-Profile` (or your preferred name)
3. Description: "Professional video editing portfolio with modern UI and auto-scrolling carousel"
4. Choose visibility: Public (for portfolio) or Private
5. Click "Create repository"

### 5. **Add Remote and Push**
```bash
git remote add origin https://github.com/YOUR_USERNAME/Hari-Profile.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

### 6. **Deploy to GitHub Pages (Optional)**
1. Go to your repository settings
2. Under "Pages" section
3. Select "Deploy from a branch"
4. Choose `main` branch, `/ (root)` folder
5. Click Save
6. Your site will be live at: `https://YOUR_USERNAME.github.io/Hari-Profile`

## 📂 Project Structure for GitHub

```
Hari-Profile/
├── index.html              # Main file
├── css/
│   └── styles.css         # Styles
├── js/
│   └── main.js            # JavaScript
├── images/                # Thumbnails
├── assets/                # Assets
├── .gitignore             # Git ignore rules
├── README.md              # Project documentation
└── GOOGLE_DRIVE_SETUP.txt # Setup guide
```

## ✅ Pre-upload Checklist

- [ ] Update personal information in index.html
- [ ] Replace Google Drive video IDs with yours
- [ ] Update social media links
- [ ] Add profile thumbnail images
- [ ] Check all links work correctly
- [ ] Test on mobile devices
- [ ] Update email in contact form

## 🔑 Important Files

- **.gitignore** - Tells Git which files to ignore
- **README.md** - Project description and instructions
- **index.html** - Main portfolio file
- **css/styles.css** - All styling
- **js/main.js** - Interactive features

## 🚀 After Upload

1. Add a description and tags to GitHub repository
2. Update README with your actual information
3. Add a project thumbnail/screenshot
4. Enable GitHub Pages if you want free hosting
5. Share your portfolio link!

## 💡 Tips

- Keep your main branch clean
- Use descriptive commit messages
- Update README regularly
- Add screenshots to README
- Test links before pushing

---

For more help: https://docs.github.com/en/get-started/quickstart/hello-world
