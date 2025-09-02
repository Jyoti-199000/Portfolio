
document.addEventListener('DOMContentLoaded', function() {
    
    // Navigation scroll effect
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    // Handle navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking links
    document.querySelectorAll('.mobile-nav-link, .nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
            // Close mobile menu
            mobileMenuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });
    
    // Typing animation
    const typingText = document.getElementById('typing-text');
    const texts = [
        'Software Engineering Student',
        'Full Stack Developer', 
        'Problem Solver',
        'Tech Enthusiast'
    ];
    let currentTextIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    
    function typeText() {
        const currentText = texts[currentTextIndex];
        
        if (isDeleting) {
            typingText.textContent = currentText.substring(0, currentCharIndex - 1);
            currentCharIndex--;
        } else {
            typingText.textContent = currentText.substring(0, currentCharIndex + 1);
            currentCharIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && currentCharIndex === currentText.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && currentCharIndex === 0) {
            isDeleting = false;
            currentTextIndex = (currentTextIndex + 1) % texts.length;
            typeSpeed = 500;
        }
        
        setTimeout(typeText, typeSpeed);
    }
    
    // Start typing animation
    typeText();
    
    // Particle animation
    function createParticles() {
        const particlesContainer = document.getElementById('particles');
        
        function createParticle() {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDuration = (Math.random() * 20 + 10) + 's';
            particle.style.animationDelay = Math.random() * 5 + 's';
            particlesContainer.appendChild(particle);
            
            // Remove particle after animation
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 25000);
        }
        
        // Create particles periodically
        setInterval(createParticle, 300);
        
        // Create initial particles
        for (let i = 0; i < 50; i++) {
            setTimeout(createParticle, i * 100);
        }
    }
    
    createParticles();
    
    // Scroll down button
    document.getElementById('scroll-down').addEventListener('click', () => {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    });
    
    // Animate skills on scroll
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach((tag, index) => {
        tag.style.animationDelay = `${index * 100}ms`;
    });
    
    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    const toast = document.getElementById('toast');
    const submitBtn = document.getElementById('submit-btn');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            // Show success toast
            toast.classList.add('show');
            
            // Reset form
            contactForm.reset();
            submitBtn.textContent = 'Send Message';
            submitBtn.disabled = false;
            
            // Hide toast after 5 seconds
            setTimeout(() => {
                toast.classList.remove('show');
            }, 5000);
        }, 2000);
    });
    
    // Back to top button
    document.getElementById('back-to-top').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Update current year
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    document.querySelectorAll('.animate-fade-in-up, .animate-fade-in-down, .animate-slide-in-left, .animate-slide-in-right').forEach(el => {
        observer.observe(el);
    });
    
    // Service card hover effects
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
    
    // Project card hover effects
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            const overlay = card.querySelector('.project-overlay');
            if (overlay) {
                overlay.style.opacity = '1';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            const overlay = card.querySelector('.project-overlay');
            if (overlay) {
                overlay.style.opacity = '0';
            }
        });
    });
    
});