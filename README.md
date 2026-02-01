# Hari's Video Editing Portfolio

A professional, modern, and responsive portfolio website showcasing video editing skills, projects, and social media presence. Built with vanilla HTML, CSS, and JavaScript.

![Portfolio Preview](#) <!-- Add screenshot URL here -->

## ✨ Features

- **🎬 Continuous News Ticker Carousel** - Auto-scrolling showreel section with smooth animations
- **📱 Fully Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **🎯 Modern Dark Theme** - Sleek UI with neon gradients and glassmorphism effects
- **🎨 Hero Section** - Eye-catching landing area with call-to-action button
- **👤 About Section** - Personal introduction with statistics and achievements
- **📹 Featured Showreels** - Showcase video edits in an animated carousel
- **💼 Portfolio Gallery** - Organized video projects with filtering
- **🛠️ Skills Section** - Display technical expertise and editing tools
- **📱 Social Media Integration** - Links to YouTube, Instagram, TikTok, Twitter, LinkedIn
- **💬 Contact Form** - Easy client inquiry form
- **🎬 Auto-Play Video Modal** - Click to play videos with embedded Google Drive support
- **⏸️ Pause on Hover** - Interactive carousel that pauses when hovering
- **📊 Loading Bar Animation** - Animated top indicator bar

## 📁 Project Structure

```
Hari-Profile/
├── index.html                 # Main HTML file
├── css/
│   └── styles.css            # All styling (responsive design, animations)
├── js/
│   └── main.js               # JavaScript for interactivity
├── images/                   # Thumbnail images for showreels
│   ├── showreel1.jpg
│   ├── showreel2.jpg
│   └── ... (more thumbnails)
├── assets/                   # Additional assets (logo, icons, etc.)
├── .gitignore               # Git ignore file
├── README.md                # This file
└── GOOGLE_DRIVE_SETUP.txt   # Google Drive integration guide
```

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/Hari-Profile.git
   cd Hari-Profile
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
   ```bash
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

3. **Customize with your content**
   - Replace video IDs in `index.html` with your Google Drive video links
   - Update personal information (name, email, social links)
   - Add your thumbnail images to `/images` folder
   - Update social media links in the footer

## 🛠️ Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling features:
  - CSS Grid & Flexbox layouts
  - Keyframe animations
  - Gradient effects
  - Backdrop filter (glassmorphism)
  - Media queries for responsiveness
- **JavaScript (Vanilla)** - No frameworks or dependencies required
- **Font Awesome 6.4.0** - Icon library (CDN)
- **Google Drive** - Video hosting and embedding

## 📺 Video Integration

This portfolio uses Google Drive for video hosting. Videos are embedded using Google Drive's preview endpoint for better compatibility and auto-play support.

**To add your videos:**
1. Upload videos to a Google Drive folder
2. Get the file IDs from the sharing link
3. Replace `data-video-id` attributes in `index.html`
4. Videos will auto-play in the modal when clicked

## 🎨 Customization

### Colors
- Edit color values in `css/styles.css`
- Main colors: Dark background (#0a0e27), Neon accents (#00ff88, #00d4ff, #ff00ff)

### Animation Speed
- Carousel loop: 15 seconds (adjust `newsTicker` animation in styles.css)
- Other animations: Modify keyframe durations in CSS

### Layout
- Max container width: 1400px
- Gap between cards: 1rem
- All responsive breakpoints at 768px and 480px

## 📱 Responsive Design

- **Desktop** - Full layout with all features
- **Tablet** (≤768px) - Adjusted grid and spacing
- **Mobile** (≤480px) - Single column layout, optimized navigation

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Sections

### Navigation
- Fixed navbar with smooth scrolling
- Active link highlighting
- Mobile hamburger menu

### Hero Section
- Full-width with gradient text
- Call-to-action button

### Featured Showreels
- **Animated News Ticker** - 15-second continuous loop
- 12+ video cards with thumbnails
- Click to play in modal

### Portfolio
- Filter by category
- Grid layout with hover effects

### Skills
- Tool categories and descriptions
- Icon representations

### Contact
- Form with validation
- Social media links

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available for personal use.

## 📧 Contact

For questions or suggestions, feel free to reach out via:
- Email: [your-email@example.com]
- Social: [Add your social links]

---

**Made with ❤️ by Hari**

- **Responsive Design** - Mobile-first approach

## 📝 How to Use

### 1. Setup Your Videos
- Add your video files to the `videos/` folder
- Update the `<source>` tags in `index.html` with correct file paths
- Recommended: Use MP4 format for best browser compatibility

### 2. Add Thumbnails
- Add video thumbnail images to the `images/` folder
- Update the `poster` attribute in video tags with thumbnail paths

### 3. Customize Content
Edit `index.html` to update:
- Your name and title
- About section text
- Portfolio project titles and descriptions
- Social media links
- Contact information

### 4. Update Social Media Links
Find this section in `index.html` and replace URLs:
```html
<a href="https://youtube.com" class="social-btn youtube">
<a href="https://instagram.com" class="social-btn instagram">
<a href="https://tiktok.com" class="social-btn tiktok">
<a href="https://twitter.com" class="social-btn twitter">
<a href="https://linkedin.com" class="social-btn linkedin">
```

### 5. Update Contact Information
Replace these with your actual details:
- Email: `hari@example.com`
- Phone: `+1 (234) 567-8900`
- Location: `Your City, Your Country`

## 🎯 Portfolio Categories

Videos are organized by category:
- **All** - Display all videos
- **Promotional** - Commercial and promotional videos
- **Social Media** - Reels, TikToks, and short-form content
- **Cinematic** - Long-form cinematic projects

To add a video to a category, modify the `data-category` attribute:
```html
<div class="portfolio-item" data-category="promo">
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## ✨ Key Sections

### Navigation Bar
- Fixed navbar with smooth scroll effects
- Active link highlighting
- Mobile hamburger menu

### Hero Section
- Full-height landing area
- Gradient text effects
- Call-to-action button

### About Section
- Personal introduction
- Statistics (projects, clients, experience)
- Profile image placeholder

### Portfolio Grid
- Responsive grid layout
- Filter buttons for categories
- Video player integration
- Hover effects and animations

### Skills Cards
- 6 main skill categories
- Icons and descriptions
- Hover animations

### Social Media Section
- Quick links to all platforms
- Brand-colored buttons
- Hover animations

### Contact Section
- Contact information display
- Functional contact form
- Form validation

## 🔧 Customization

### Colors
The main colors are defined in CSS:
- Primary Gradient: `#ff006e` to `#fb5607`
- Text: `#333`
- Background: `#f8f9fa`

To change colors, update these gradient values in `css/styles.css`.

### Fonts
Default font: `Segoe UI, Tahoma, Geneva, Verdana, sans-serif`

To change fonts, modify the `font-family` in the `body` selector in `css/styles.css`.

### Animations
- Fade-in animations on scroll
- Hover effects on cards
- Smooth transitions throughout

## 📧 Contact Form

The contact form currently displays a success message but doesn't send emails. To enable email functionality:

1. Use a service like Formspree, EmailJS, or your own backend
2. Modify the form submission handler in `js/main.js`
3. Add the necessary API calls

Example with Formspree:
```javascript
// In the form submit handler
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: formData
});
```

## 🚀 Performance Tips

- Optimize video files (compress before uploading)
- Use appropriate video formats (MP4 recommended)
- Add thumbnail images for faster loading
- Keep video file sizes under 50MB each
- Use CDN for faster asset delivery

## 🌐 Deployment

To deploy this portfolio:

1. **GitHub Pages** - Free hosting for static sites
   - Push to GitHub
   - Enable GitHub Pages in repository settings

2. **Netlify** - Drag and drop deployment
   - Connect your GitHub repo
   - Deploy automatically

3. **Vercel** - Optimized for modern web apps
   - Connect your GitHub repo
   - Automatic deployments

4. **Traditional Hosting** - FTP/SFTP upload
   - Upload all files to your web host

## 📊 SEO Optimization

- Semantic HTML5 structure
- Meta tags for page description
- Alt text for images (add these)
- Mobile-responsive design
- Fast loading times

To improve SEO further:
1. Add `<meta name="description">` tag
2. Add `<meta name="keywords">` tag
3. Add `<meta property="og:image">` for social sharing
4. Create a `sitemap.xml`
5. Create a `robots.txt`

## 🐛 Troubleshooting

### Videos not playing
- Check file paths in `index.html`
- Ensure videos are in the `videos/` folder
- Try different video format (MP4)
- Check browser console for errors

### Mobile menu not working
- Ensure `js/main.js` is properly linked
- Check browser console for JavaScript errors

### Images not showing
- Verify image file paths are correct
- Check that images exist in the `images/` folder

### Form not working
- Add backend service integration
- Check console for JavaScript errors

## 📄 License

Feel free to use and modify this template for your portfolio.

## 🎬 Tips for Portfolio Videos

1. **Quality** - Use high-quality footage (1080p minimum)
2. **Variety** - Showcase different editing styles
3. **Length** - Keep videos concise (under 2 minutes)
4. **Audio** - Include clear audio and good sound design
5. **Subtitles** - Add subtitles for accessibility
6. **Branding** - Maintain consistent color grading

## 📞 Support

For questions or issues:
1. Check the troubleshooting section
2. Review the HTML/CSS/JS comments
3. Validate your video file paths
4. Check browser console for errors

---

**Created with ❤️ for Video Editors**

Happy Editing! 🎬✨
