// ============================================
// CONTINUOUS MOVING CARDS ANIMATION - NEWS TICKER STYLE
// ============================================
const showreelsGrid = document.querySelector('.showreels-grid');

// Setup infinite animation carousel like news websites
function setupContinuousAnimation() {
    if (!showreelsGrid) return;

    // Get original cards
    const originalCards = Array.from(showreelsGrid.querySelectorAll('.showreel-card'));
    
    // Clone cards multiple times for seamless infinite scrolling
    for (let i = 0; i < 5; i++) {
        originalCards.forEach(card => {
            const clonedCard = card.cloneNode(true);
            clonedCard.addEventListener('click', handleVideoClick);
            showreelsGrid.appendChild(clonedCard);
        });
    }

    // Enable CSS animation
    showreelsGrid.classList.add('continuous-animation');
}

// Handle video click
function handleVideoClick() {
    const videoId = this.getAttribute('data-video-id');
    const videoTitle = this.getAttribute('data-title');
    
    const embedUrl = `https://drive.google.com/file/d/${videoId}/preview`;
    
    videoModal.classList.add('active');
    modalVideoFrame.src = embedUrl;
    document.body.style.overflow = 'hidden';
}

// Initialize on page load
window.addEventListener('load', setupContinuousAnimation);

// Pause animation on hover
if (showreelsGrid) {
    showreelsGrid.addEventListener('mouseenter', () => {
        showreelsGrid.classList.add('paused');
    });

    showreelsGrid.addEventListener('mouseleave', () => {
        showreelsGrid.classList.remove('paused');
    });
}


const videoModal = document.getElementById('videoModal');
const modalVideo = document.getElementById('modalVideo');
const modalVideoSource = document.getElementById('modalVideoSource');
const modalVideoFrame = document.getElementById('modalVideoFrame');
const modalClose = document.querySelector('.modal-close');
const clickableVideos = document.querySelectorAll('.clickable-video');

// Open modal and auto-play video on click
clickableVideos.forEach(videoCard => {
    videoCard.addEventListener('click', function() {
        const videoId = this.getAttribute('data-video-id');
        const videoTitle = this.getAttribute('data-title');
        
        // Use Google Drive embed URL for better compatibility
        const embedUrl = `https://drive.google.com/file/d/${videoId}/preview`;
        
        // Set iframe source for auto-play
        modalVideoFrame.src = embedUrl;
        
        // Show modal
        videoModal.classList.add('active');
        
        // Prevent page scroll
        document.body.style.overflow = 'hidden';
    });
});

// Close modal
modalClose.addEventListener('click', closeVideoModal);
videoModal.addEventListener('click', function(e) {
    if (e.target === this) {
        closeVideoModal();
    }
});

// Close modal function
function closeVideoModal() {
    videoModal.classList.remove('active');
    modalVideoFrame.src = ''; // Clear iframe
    modalVideo.pause();
    document.body.style.overflow = 'auto';
}

// Close with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && videoModal.classList.contains('active')) {
        closeVideoModal();
    }
});


const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    updateHamburgerIcon();
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        updateHamburgerIcon();
        setActiveNavLink(link);
    });
});

// Update hamburger icon animation
function updateHamburgerIcon() {
    const spans = hamburger.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(10px, 10px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(8px, -8px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
}

// Set active nav link
function setActiveNavLink(element) {
    navLinks.forEach(link => link.classList.remove('active'));
    element.classList.add('active');
}

// ============================================
// PORTFOLIO FILTERING
// ============================================
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        // Filter items
        portfolioItems.forEach(item => {
            const category = item.getAttribute('data-category');
            
            if (filter === 'all' || category === filter) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                }, 10);
            } else {
                item.style.opacity = '0';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// ============================================
// CONTACT FORM HANDLING
// ============================================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const formData = new FormData(contactForm);
    const name = contactForm.elements[0].value;
    const email = contactForm.elements[1].value;
    const subject = contactForm.elements[2].value;
    const message = contactForm.elements[3].value;

    // Validate form
    if (!name || !email || !subject || !message) {
        showNotification('Please fill all fields', 'error');
        return;
    }

    // Validate email
    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email', 'error');
        return;
    }

    // Show success message
    showNotification('Message sent successfully!', 'success');

    // Reset form
    contactForm.reset();

    // In a real application, you would send this data to a server
    console.log({
        name,
        email,
        subject,
        message
    });
});

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show notification
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 15px 25px;
        border-radius: 5px;
        background: ${type === 'success' ? '#4caf50' : '#f44336'};
        color: white;
        z-index: 2000;
        animation: slideIn 0.3s ease;
        font-weight: 600;
    `;

    document.body.appendChild(notification);

    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.portfolio-item, .skill-card, .about-wrapper').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }

    // Update active nav link based on scroll position
    updateActiveNavLink();
});

// Update active nav link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}

// ============================================
// SMOOTH SCROLL POLYFILL
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();

            const target = document.querySelector(href);
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// VIDEO LAZY LOADING
// ============================================
if ('IntersectionObserver' in window) {
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target.querySelector('video');
            
            if (entry.isIntersecting && !video.src) {
                const source = video.querySelector('source');
                if (source) {
                    video.src = source.src;
                    video.load();
                }
            }
        });
    });

    document.querySelectorAll('.video-container').forEach(container => {
        videoObserver.observe(container);
    });
}

// ============================================
// PORTFOLIO ITEM HOVER EFFECTS
// ============================================
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        const video = this.querySelector('video');
        if (video && video.paused) {
            // Add hover effect
            this.style.transform = 'translateY(-10px)';
        }
    });

    item.addEventListener('mouseleave', function() {
        this.style.transform = '';
    });
});

// ============================================
// SKILL CARDS COUNTER ANIMATION
// ============================================
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const counter = setInterval(() => {
        current += increment;
        
        if (current >= target) {
            element.textContent = target;
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Animate stats when visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.hasAttribute('data-animated')) {
            const numbers = entry.target.querySelectorAll('.stat h3');
            
            numbers.forEach(stat => {
                const target = parseInt(stat.textContent);
                if (!isNaN(target)) {
                    animateCounter(stat, target);
                }
            });
            
            entry.target.setAttribute('data-animated', 'true');
        }
    });
}, { threshold: 0.5 });

const aboutStats = document.querySelector('.about-stats');
if (aboutStats) {
    statsObserver.observe(aboutStats);
}

// ============================================
// PAGE LOAD ANIMATION
// ============================================
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    
    // Add entrance animation for hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.animation = 'fadeInUp 0.8s ease-out';
    }
});

// ============================================
// KEYBOARD SHORTCUTS
// ============================================
document.addEventListener('keydown', (e) => {
    // Close mobile menu with Escape key
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        updateHamburgerIcon();
    }
});

// ============================================
// CONSOLE MESSAGE
// ============================================
console.log('%cWelcome to Hari\'s Portfolio', 'font-size: 20px; color: #ff006e; font-weight: bold;');
console.log('%cCheck out the amazing video editing work!', 'font-size: 14px; color: #fb5607;');
