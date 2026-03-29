// Mobile menu toggle
const menuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Smooth scroll for anchor links (fallback for older browsers)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            const offset = 80; // account for sticky nav
            const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});

// Newsletter form handler
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        if (email) {
            this.innerHTML = '<p style="color: white; font-size: 1.1rem; font-weight: 600;">Thanks! Check your inbox for the guide.</p>';
        }
    });
}

// Affiliate link click tracking (placeholder for analytics)
document.querySelectorAll('[data-product]').forEach(btn => {
    btn.addEventListener('click', function (e) {
        const product = this.dataset.product;
        // Replace with actual analytics tracking (e.g., Google Analytics event)
        console.log(`Affiliate click: ${product}`);
        // In production, this would redirect to the actual affiliate link
    });
});
