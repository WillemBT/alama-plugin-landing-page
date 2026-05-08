/**
 * Alama Landing Page - JavaScript
 * Handles interactivity, animations, and responsive behavior
 */

// DOM Content Loaded
 document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initMobileMenu();
    initSmoothScrolling();
    initScrollAnimations();
    initFAQ();
    initNavbarScrollEffect();
});

/**
 * Navigation functionality
 */
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobileMenuBtn');
            const navLinksContainer = document.getElementById('navLinks');
            
            if (mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                navLinksContainer.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
}

/**
 * Mobile Menu functionality
 */
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (this.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenuBtn.contains(e.target) && !navLinks.contains(e.target)) {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
        
        // Close menu when pressing Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

/**
 * Smooth scrolling for anchor links
 */
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just a hash or empty
            if (href === '#' || href === '') return;
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                // Calculate position with navbar offset
                const navbarHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Scroll animations for elements
 */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.feature-item, .feature-card, .step-item, .use-case-card, .pricing-card');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                
                // Add delay based on data attribute or index
                const delay = entry.target.dataset.delay || 0;
                if (delay) {
                    entry.target.style.animationDelay = delay + 'ms';
                }
                
                // Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Add delays to elements for staggered animation
    animatedElements.forEach((element, index) => {
        element.dataset.delay = index * 100;
        observer.observe(element);
    });
    
    // Also animate section headers
    const sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach(header => {
        observer.observe(header);
    });
}

/**
 * FAQ Accordion functionality
 */
function initFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            toggleFaq(this);
        });
        
        // Allow Enter key to toggle FAQ
        question.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleFaq(this);
            }
        });
    });
}

/**
 * Toggle FAQ item
 * @param {HTMLElement} question - The FAQ question button element
 */
function toggleFaq(question) {
    const answer = question.nextElementSibling;
    const isActive = question.classList.contains('active');
    
    // Close all other FAQ items
    document.querySelectorAll('.faq-question').forEach(q => {
        q.classList.remove('active');
        q.nextElementSibling.classList.remove('active');
    });
    
    // Toggle current item
    if (!isActive) {
        question.classList.add('active');
        answer.classList.add('active');
        
        // Scroll to answer if on mobile
        if (window.innerWidth <= 768) {
            answer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }
}

/**
 * Navbar scroll effect
 */
function initNavbarScrollEffect() {
    const navbar = document.getElementById('navbar');
    
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    function updateNavbar() {
        const scrollY = window.scrollY;
        
        if (scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScrollY = scrollY;
        ticking = false;
    }
    
    // Use requestAnimationFrame for smooth performance
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    }, { passive: true });
    
    // Initial check
    updateNavbar();
}

/**
 * Utility: Debounce function for performance
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Utility: Throttle function for performance
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Check if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Add loading animation on page load
 */
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Trigger initial animations
    setTimeout(() => {
        const heroElements = document.querySelectorAll('.hero-content > *');
        heroElements.forEach((el, index) => {
            el.style.animation = `fadeIn 0.6s ease ${index * 0.1}s forwards`;
        });
    }, 100);
});

/**
 * Handle external link clicks (open in new tab with security)
 */
document.addEventListener('click', function(e) {
    const target = e.target.closest('a');
    
    if (target && target.href) {
        // Check if it's an external link
        const isExternal = target.hostname && target.hostname !== window.location.hostname;
        const isFood4Rhino = target.href.includes('food4rhino.com');
        const isGitHub = target.href.includes('github.com');
        const isInfomaniak = target.href.includes('infomaniak.com');
        
        if (isExternal && (isFood4Rhino || isGitHub || isInfomaniak)) {
            // Add security attributes if not present
            if (!target.hasAttribute('target')) {
                target.setAttribute('target', '_blank');
            }
            if (!target.hasAttribute('rel')) {
                target.setAttribute('rel', 'noopener noreferrer');
            }
        }
    }
});

/**
 * Add keyboard navigation for accessibility
 */
document.addEventListener('keydown', function(e) {
    // Skip if user is typing in an input
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    
    // Handle Tab key for better focus management
    if (e.key === 'Tab') {
        // Add visible focus styles
        document.body.classList.add('keyboard-navigation');
    }
});

// Remove keyboard navigation class when mouse is used
document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
});

/**
 * Console message for developers
 */
console.log('%c Alama Landing Page ', 'background: #2563eb; color: white; font-size: 20px; padding: 10px;');
console.log('%c Built with HTML5, CSS3, and Vanilla JavaScript ', 'color: #64748b; font-size: 14px;');