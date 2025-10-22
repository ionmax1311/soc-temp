// ============================================
// Zovirella Interactive Script
// ============================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

// Mobile Menu Toggle
const mobileToggle = document.getElementById('mobileToggle');
const nav = document.getElementById('nav');
const header = document.getElementById('header');

mobileToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    mobileToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        mobileToggle.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !mobileToggle.contains(e.target)) {
        nav.classList.remove('active');
        mobileToggle.classList.remove('active');
    }
});

// Header scroll effect
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
            const headerHeight = header.offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// FAQ Accordion - Updated for guide-item
const faqItems = document.querySelectorAll('.faq-item');
const guideItems = document.querySelectorAll('.guide-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-item__question');

    if (question) {
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
            });

            if (!isActive) {
                item.classList.add('active');
            }
        });
    }
});

// Guide Accordion
guideItems.forEach(item => {
    const trigger = item.querySelector('.guide-item__trigger');

    if (trigger) {
        trigger.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            guideItems.forEach(guideItem => {
                guideItem.classList.remove('active');
            });

            if (!isActive) {
                item.classList.add('active');
            }
        });
    }
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll(
    '.feature-card, .game-card, .why-item, .faq-item'
);

animateElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.animationDelay = `${index * 0.1}s`;
    observer.observe(el);
});

// Set current year in footer
const yearSpan = document.getElementById('year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Add parallax effect to hero (if motion is not reduced)
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
    const heroSection = document.querySelector('.hero');
    const heroBg = document.querySelector('.hero__bg');
    
    if (heroSection && heroBg) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroHeight = heroSection.offsetHeight;
            
            if (scrolled < heroHeight) {
                heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });
    }
}

// Add hover sound effect placeholders (optional)
// You can add subtle sounds when hovering over buttons/cards

// Console easter egg
const styles = [
    'background: linear-gradient(135deg, #FF7BA3, #FFB86C)',
    'color: white',
    'font-size: 20px',
    'font-weight: bold',
    'padding: 10px 20px',
    'border-radius: 10px'
].join(';');

console.log('%c🍩 Welcome to Zovirella!', styles);
console.log(
    '%cA sweet web-games realm for grown-ups (21+)\n' +
    'Made with 🎨 and ❤️\n' +
    'No real money • Just pure fun!',
    'color: #9C6BFF; font-size: 14px; line-height: 1.8;'
);

// Analytics placeholder
// Add your analytics tracking code here
// Example: Google Analytics, Plausible, etc.

// Age verification (simple version - for demo only)
// In production, implement a proper age gate
const ageVerified = localStorage.getItem('zovirella_age_verified');

if (!ageVerified) {
    // Show age verification modal on first visit
    // For now, we'll just set it automatically
    localStorage.setItem('zovirella_age_verified', 'true');
    console.log('📍 Age verification would appear here in production');
}

// Add loading animation complete
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Handle external game links
const gameLinks = document.querySelectorAll('a[href^="/game/"]');
gameLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Add loading state or transition
        console.log('🎮 Loading game...');
    });
});

// Add button click effects
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            top: ${y}px;
            left: ${x}px;
            pointer-events: none;
            animation: ripple 0.6s ease-out;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        from {
            transform: scale(0);
            opacity: 1;
        }
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add sparkle effect to hero on mouse move (optional)
const heroContent = document.querySelector('.hero__content');
if (heroContent && !prefersReducedMotion) {
    heroContent.addEventListener('mousemove', (e) => {
        // Add subtle parallax or sparkle effect
    });
}

// Performance optimization: Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add copy-to-clipboard functionality for email
const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
emailLinks.forEach(link => {
    link.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        const email = link.textContent.trim();
        
        if (navigator.clipboard) {
            navigator.clipboard.writeText(email).then(() => {
                showNotification('Email copied to clipboard!');
            });
        }
    });
});

// Simple notification system
function showNotification(message, duration = 3000) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: linear-gradient(135deg, #FF7BA3, #FFB86C);
        color: white;
        padding: 16px 24px;
        border-radius: 999px;
        box-shadow: 0 10px 28px rgba(58, 45, 45, 0.18);
        z-index: 9999;
        animation: slideInUp 0.3s ease-out;
        font-weight: 600;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutDown 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, duration);
}

// Add slide animations
const slideStyle = document.createElement('style');
slideStyle.textContent = `
    @keyframes slideInUp {
        from {
            transform: translateY(100px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutDown {
        from {
            transform: translateY(0);
            opacity: 1;
        }
        to {
            transform: translateY(100px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(slideStyle);

// Ready notification
console.log('✨ Zovirella is ready! Have fun!');

}); // End DOMContentLoaded