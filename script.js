// Intersection Observer for animations
document.addEventListener('DOMContentLoaded', function() {
    const revealElements = document.querySelectorAll('.reveal-text, .reveal-element');
    
    // Activate header elements immediately
    setTimeout(() => {
        document.querySelectorAll('header .reveal-text, header .reveal-element').forEach(el => {
            el.classList.add('active');
        });
    }, 300);
    
    // Setup intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe all reveal elements
    revealElements.forEach(el => {
        observer.observe(el);
    });
    
    // Subtle parallax effect on scroll
    const parallaxElements = document.querySelectorAll('.section-title, .language-images');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        parallaxElements.forEach(el => {
            const speed = 0.05;
            const yPos = -scrollY * speed;
            el.style.transform = `translateY(${yPos}px)`;
        });
    });
    
    // Wave animation for the hand icon
    const handIcon = document.querySelector('.fa-hand-paper');
    
    if (handIcon) {
        setTimeout(() => {
            handIcon.style.transition = 'transform 0.3s ease';
            handIcon.style.transform = 'rotate(15deg)';
            
            setTimeout(() => {
                handIcon.style.transform = 'rotate(0deg)';
                
                // Set up occasional wave animation
                setInterval(() => {
                    handIcon.style.transform = 'rotate(15deg)';
                    
                    setTimeout(() => {
                        handIcon.style.transform = 'rotate(0deg)';
                    }, 300);
                }, 10000); // Wave every 10 seconds
            }, 300);
        }, 1500);
    }
    
    // Hover effects for language cards
    const languageCards = document.querySelectorAll('.language-card');
    
    languageCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const siblingCards = Array.from(languageCards).filter(item => item !== card);
            siblingCards.forEach(sibling => {
                sibling.style.opacity = '0.6';
                sibling.style.transform = 'scale(0.98)';
            });
        });
        
        card.addEventListener('mouseleave', function() {
            languageCards.forEach(card => {
                card.style.opacity = '1';
                card.style.transform = '';
            });
        });
    });
    
    // Skill items animation on hover
    const skillItems = document.querySelectorAll('.skill-item');
    let isAnyHovered = false;
    
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            isAnyHovered = true;
            const siblingItems = Array.from(skillItems).filter(skill => skill !== item);
            siblingItems.forEach(sibling => {
                sibling.style.opacity = '0.5';
            });
        });
        
        item.addEventListener('mouseleave', function() {
            isAnyHovered = false;
            setTimeout(() => {
                if (!isAnyHovered) {
                    skillItems.forEach(skill => {
                        skill.style.opacity = '1';
                    });
                }
            }, 50);
        });
    });
});