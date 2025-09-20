// ===== CERTIFICATIONS PAGE SPECIFIC JAVASCRIPT =====

// Certification data
const certificationData = {
    python: {
        title: 'Crash Course on Python',
        category: 'Programming',
        issuer: 'Google & Coursera',
        description: 'Intensive course on Python programming fundamentals covering data structures, functions, and object-oriented programming concepts. This comprehensive program provided hands-on experience with Python syntax, control structures, and best practices for writing clean, efficient code.',
        image: 'python.jpg',
        tech: ['Python', 'Programming', 'Data Structures', 'OOP', 'Algorithms'],
        stats: [
            { icon: 'fas fa-calendar', text: '2024' },
            { icon: 'fas fa-clock', text: '40 Hours' },
            { icon: 'fas fa-certificate', text: 'Verified' }
        ],
        verifyUrl: 'https://www.coursera.org/verify/LES49221JBAH',
        downloadUrl: 'python.pdf'
    },
    web: {
        title: 'The Web Developer Bootcamp 2024',
        category: 'Web Development',
        issuer: 'Udemy',
        description: 'Comprehensive full-stack web development course covering front-end and back-end technologies, databases, and deployment strategies. Learned modern web development practices including responsive design, API development, and cloud deployment.',
        image: 'web.jpg',
        tech: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'HTML5', 'CSS3'],
        stats: [
            { icon: 'fas fa-calendar', text: '2024' },
            { icon: 'fas fa-clock', text: '60+ Hours' },
            { icon: 'fas fa-certificate', text: 'Verified' }
        ],
        verifyUrl: 'https://www.udemy.com/certificate/UC-a3a88382-d387-4a2e-93e2-c707ea7586d6/',
        downloadUrl: 'web.pdf'
    },
    kotlin: {
        title: 'Android & Kotlin Development Masterclass',
        category: 'Mobile Development',
        issuer: 'Udemy',
        description: 'Comprehensive course on Android app development using Kotlin, covering UI design, data persistence, networking, and app deployment. Gained expertise in modern Android development practices and mobile app architecture patterns.',
        image: 'kotlin.jpg',
        tech: ['Kotlin', 'Android Studio', 'Mobile Development', 'UI/UX', 'Firebase'],
        stats: [
            { icon: 'fas fa-calendar', text: '2024' },
            { icon: 'fas fa-clock', text: '50+ Hours' },
            { icon: 'fas fa-certificate', text: 'Verified' }
        ],
        verifyUrl: 'https://www.udemy.com/certificate/UC-c05bfd05-f93c-4876-9b84-7fd8f10dc039/',
        downloadUrl: 'kotlin.pdf'
    },
};

let currentFilter = 'all';

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    initializeCertifications();
    initializeFilters();
    initializeModals();
    initializeAnimations();
});

// ===== CERTIFICATIONS FUNCTIONALITY =====
function initializeCertifications() {
    // Add any initialization logic here
    console.log('Certifications page initialized');
}

// ===== FILTERS =====
function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const certificationCards = document.querySelectorAll('.certification-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Get filter value
            currentFilter = button.dataset.filter;
            
            // Filter certifications
            filterCertifications();
        });
    });
}

function filterCertifications() {
    const certificationCards = document.querySelectorAll('.certification-card');
    
    certificationCards.forEach(card => {
        const category = card.dataset.category;
        
        if (currentFilter === 'all' || category === currentFilter) {
            card.classList.remove('hidden');
            setTimeout(() => {
                card.style.display = 'block';
            }, 100);
        } else {
            card.classList.add('hidden');
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
    
    // Add filter animation
    addFilterAnimation();
}

function addFilterAnimation() {
    const grid = document.querySelector('.certifications-grid');
    grid.style.transform = 'scale(0.95)';
    grid.style.opacity = '0.7';
    
    setTimeout(() => {
        grid.style.transform = 'scale(1)';
        grid.style.opacity = '1';
    }, 150);
}

// ===== MODALS =====
function initializeModals() {
    // Close modals when clicking outside
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('cert-modal')) {
            closeCertModal();
        }
        if (e.target.classList.contains('coming-soon-modal')) {
            closeComingSoon();
        }
    });
    
    // Close modals with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCertModal();
            closeComingSoon();
        }
    });
}

function openCertModal(certId) {
    const modal = document.getElementById('certModal');
    const cert = certificationData[certId];
    
    if (!cert) return;
    
    // Update modal content
    document.getElementById('modalTitle').textContent = cert.title;
    document.getElementById('modalCategory').innerHTML = `
        <i class="fas fa-certificate"></i>
        <span>${cert.category}</span>
    `;
    document.getElementById('modalIssuer').textContent = cert.issuer;
    document.getElementById('modalDescription').textContent = cert.description;
    
    // Update image
    const modalImage = document.getElementById('modalImage');
    if (cert.image) {
        modalImage.src = cert.image;
        modalImage.alt = cert.title;
    } else {
        modalImage.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMDA0NDU1Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5DZXJ0aWZpY2F0ZTwvdGV4dD4KPC9zdmc+Cg==';
    }
    
    // Update tech tags
    const modalTech = document.getElementById('modalTech');
    modalTech.innerHTML = cert.tech.map(tech => 
        `<span class="tech-tag">${tech}</span>`
    ).join('');
    
    // Update stats
    const modalStats = document.getElementById('modalStats');
    modalStats.innerHTML = cert.stats.map(stat => 
        `<div class="stat">
            <i class="${stat.icon}"></i>
            <span>${stat.text}</span>
        </div>`
    ).join('');
    
    // Update links
    document.getElementById('modalVerify').href = cert.verifyUrl;
    document.getElementById('modalDownload').href = cert.downloadUrl;
    
    // Show modal
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeCertModal() {
    const modal = document.getElementById('certModal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

function showComingSoon() {
    const modal = document.getElementById('comingSoonModal');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeComingSoon() {
    const modal = document.getElementById('comingSoonModal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// ===== ANIMATIONS =====
function initializeAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                
                // Stagger animation for certification cards
                if (entry.target.classList.contains('certification-card')) {
                    const cards = Array.from(document.querySelectorAll('.certification-card'));
                    const index = cards.indexOf(entry.target);
                    entry.target.style.animationDelay = `${index * 0.1}s`;
                }
            }
        });
    }, observerOptions);
    
    // Observe certification cards
    const certificationCards = document.querySelectorAll('.certification-card');
    certificationCards.forEach(card => observer.observe(card));
    
    // Add hover animations
    addHoverAnimations();
}

function addHoverAnimations() {
    const certificationCards = document.querySelectorAll('.certification-card');
    
    certificationCards.forEach(card => {
        const image = card.querySelector('.cert-image');
        const content = card.querySelector('.cert-content');
        
        card.addEventListener('mouseenter', () => {
            if (image) {
                image.style.transform = 'scale(1.02)';
            }
            if (content) {
                content.style.transform = 'translateY(-5px)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            if (image) {
                image.style.transform = 'scale(1)';
            }
            if (content) {
                content.style.transform = 'translateY(0)';
            }
        });
    });
}

// ===== ADDITIONAL CSS ANIMATIONS =====
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
    .certification-card {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    .certification-card.fade-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .cert-image {
        transition: transform 0.3s ease;
    }
    
    .cert-content {
        transition: transform 0.3s ease;
    }
    
    .filter-btn {
        transition: all 0.3s ease;
    }
    
    .action-btn {
        transition: all 0.3s ease;
    }
    
    .tech-tag {
        transition: all 0.3s ease;
    }
    
    .tech-tag:hover {
        background: rgba(0, 212, 255, 0.2);
        transform: translateY(-2px);
    }
`;
document.head.appendChild(additionalStyles);

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

// Lazy loading for images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', initializeLazyLoading);

// ===== GLOBAL FUNCTIONS =====
window.openCertModal = openCertModal;
window.closeCertModal = closeCertModal;
window.showComingSoon = showComingSoon;
window.closeComingSoon = closeComingSoon;
