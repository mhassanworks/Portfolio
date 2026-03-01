// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu toggle functionality (if needed in future)
const createMobileMenu = () => {
    const navbar = document.querySelector('.navbar .container');
    const navMenu = document.querySelector('.nav-menu');
    
    if (window.innerWidth <= 768) {
        if (!document.querySelector('.menu-toggle')) {
            const menuToggle = document.createElement('button');
            menuToggle.className = 'menu-toggle';
            menuToggle.innerHTML = '☰';
            menuToggle.setAttribute('aria-label', 'Toggle navigation menu');
            
            menuToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
            });
            
            navbar.insertBefore(menuToggle, navMenu);
        }
    }
};

// Add active state to navigation on scroll
const handleScroll = () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    // Check for mobile menu needs
    createMobileMenu();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Handle window resize
    window.addEventListener('resize', () => {
        createMobileMenu();
    });
});

// Add intersection observer for fade-in effects (optional, minimal)
const observeElements = () => {
    const elements = document.querySelectorAll('.expertise-card, .project-card, .experience-item, .metric-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        observer.observe(el);
    });
};

// Call observe function if animations are desired (currently minimal)
// Uncomment the line below if you want subtle fade-in effects
// document.addEventListener('DOMContentLoaded', observeElements);
