// ===== ABOUT PAGE SPECIFIC JAVASCRIPT =====

document.addEventListener('DOMContentLoaded', function() {
    initializeAboutAnimations();
    initializeSkillBars();
    initializeTimelineAnimations();
    initializeInterestCards();
    initializeParallaxEffects();
});

// ===== ABOUT PAGE ANIMATIONS =====
function initializeAboutAnimations() {
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                
                // Special animations for specific elements
                if (entry.target.classList.contains('stat-item')) {
                    animateStatItem(entry.target);
                }
                
                if (entry.target.classList.contains('timeline-item')) {
                    animateTimelineItem(entry.target);
                }
                
                if (entry.target.classList.contains('interest-card')) {
                    animateInterestCard(entry.target);
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll(
        '.stat-item, .timeline-item, .skill-category, .interest-card, .mission-content, .cta-content'
    );
    
    animatedElements.forEach(el => observer.observe(el));
}

// ===== SKILL BARS ANIMATION =====
function initializeSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.style.width;
                
                // Reset width and animate
                progressBar.style.width = '0%';
                setTimeout(() => {
                    progressBar.style.width = width;
                }, 200);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => skillObserver.observe(bar));
}

// ===== TIMELINE ANIMATIONS =====
function initializeTimelineAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach((item, index) => {
        // Add staggered animation delay
        item.style.animationDelay = `${index * 0.2}s`;
        
        // Add hover effects
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateX(10px)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateX(0)';
        });
    });
}

// ===== INTEREST CARDS ANIMATIONS =====
function initializeInterestCards() {
    const interestCards = document.querySelectorAll('.interest-card');
    
    interestCards.forEach((card, index) => {
        // Add staggered animation delay
        card.style.animationDelay = `${index * 0.1}s`;
        
        // Add interactive effects
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('.interest-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
                icon.style.boxShadow = '0 0 30px rgba(0, 212, 255, 0.5)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('.interest-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
                icon.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.3)';
            }
        });
    });
}

// ===== PARALLAX EFFECTS =====
function initializeParallaxEffects() {
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.floating-icons .icon-float');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.3 + (index * 0.1);
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
}

// ===== INDIVIDUAL ANIMATION FUNCTIONS =====
function animateStatItem(element) {
    const icon = element.querySelector('.stat-icon');
    const content = element.querySelector('.stat-content h3');
    
    if (icon) {
        icon.style.animation = 'bounceIn 0.6s ease-out';
    }
    
    if (content) {
        content.style.animation = 'slideInUp 0.6s ease-out 0.2s both';
    }
}

function animateTimelineItem(element) {
    const marker = element.querySelector('.timeline-marker');
    const content = element.querySelector('.timeline-content');
    
    if (marker) {
        marker.style.animation = 'scaleIn 0.5s ease-out';
    }
    
    if (content) {
        content.style.animation = 'slideInRight 0.6s ease-out 0.2s both';
    }
}

function animateInterestCard(element) {
    const icon = element.querySelector('.interest-icon');
    const title = element.querySelector('h3');
    const text = element.querySelector('p');
    
    if (icon) {
        icon.style.animation = 'zoomIn 0.5s ease-out';
    }
    
    if (title) {
        title.style.animation = 'fadeInUp 0.6s ease-out 0.1s both';
    }
    
    if (text) {
        text.style.animation = 'fadeInUp 0.6s ease-out 0.2s both';
    }
}

// ===== ADDITIONAL CSS ANIMATIONS =====
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
    @keyframes bounceIn {
        0% {
            transform: scale(0);
            opacity: 0;
        }
        50% {
            transform: scale(1.2);
            opacity: 1;
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes scaleIn {
        from {
            transform: scale(0);
            opacity: 0;
        }
        to {
            transform: scale(1);
            opacity: 1;
        }
    }
    
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes zoomIn {
        from {
            transform: scale(0);
            opacity: 0;
        }
        to {
            transform: scale(1);
            opacity: 1;
        }
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .timeline-item {
        opacity: 0;
        transform: translateX(-20px);
        transition: all 0.6s ease;
    }
    
    .timeline-item.fade-in {
        opacity: 1;
        transform: translateX(0);
    }
    
    .interest-card {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.6s ease;
    }
    
    .interest-card.fade-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .stat-item {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.6s ease;
    }
    
    .stat-item.fade-in {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(additionalStyles);

// ===== INTERACTIVE FEATURES =====
function initializeInteractiveFeatures() {
    // Add click effects to skill items
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('click', () => {
            // Add ripple effect
            createRippleEffect(item);
            
            // Highlight the skill
            item.style.background = 'rgba(0, 212, 255, 0.2)';
            setTimeout(() => {
                item.style.background = 'rgba(0, 212, 255, 0.05)';
            }, 300);
        });
    });
    
    // Add hover effects to timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const marker = item.querySelector('.timeline-marker');
            if (marker) {
                marker.style.transform = 'scale(1.1)';
                marker.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.5)';
            }
        });
        
        item.addEventListener('mouseleave', () => {
            const marker = item.querySelector('.timeline-marker');
            if (marker) {
                marker.style.transform = 'scale(1)';
                marker.style.boxShadow = '0 0 10px rgba(0, 212, 255, 0.3)';
            }
        });
    });
}

// ===== RIPPLE EFFECT =====
function createRippleEffect(element) {
    const ripple = document.createElement('div');
    const rect = element.getBoundingClientRect();
    
    ripple.style.cssText = `
        position: absolute;
        left: ${rect.width / 2}px;
        top: ${rect.height / 2}px;
        width: 20px;
        height: 20px;
        border: 2px solid var(--accent-primary);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
        z-index: 9999;
        animation: ripple 0.6s ease-out forwards;
    `;
    
    element.style.position = 'relative';
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// ===== SCROLL TO TOP FUNCTIONALITY REMOVED =====
// This functionality was removed per user request

// ===== INITIALIZE ALL FEATURES =====
document.addEventListener('DOMContentLoaded', () => {
    initializeInteractiveFeatures();
    // Removed addScrollToTop() - scroll to top button removed as requested
});

// ===== PERFORMANCE OPTIMIZATION =====
// Debounce scroll events
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

// Apply debouncing to scroll events
const debouncedParallax = debounce(updateParallax, 10);
window.addEventListener('scroll', debouncedParallax);
