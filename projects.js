// ===== PROJECTS PAGE SPECIFIC JAVASCRIPT =====

// Project data
const projectData = {
    mobile: {
        title: 'Mobile Price Prediction',
        category: 'Machine Learning',
        description: `
        <div class="detailed-description">
            <h4>🎯 Project Overview</h4>
            <p>An intelligent machine learning system that predicts mobile phone prices with exceptional accuracy using advanced algorithms and comprehensive feature analysis.</p>
            
            <h4>🔧 Key Features</h4>
            <ul>
                <li><strong>High Accuracy:</strong> Achieved 92% prediction accuracy using Random Forest algorithm</li>
                <li><strong>Comprehensive Analysis:</strong> Analyzes 20+ device specifications including RAM, storage, camera quality, brand value</li>
                <li><strong>Real-time Predictions:</strong> Instant price predictions through interactive web interface</li>
                <li><strong>Data Processing:</strong> Handles 10,000+ mobile device records with advanced preprocessing</li>
                <li><strong>User-friendly Interface:</strong> Clean Streamlit web app for easy interaction</li>
            </ul>
            
            <h4>⚡ Technical Implementation</h4>
            <ul>
                <li><strong>Algorithm:</strong> Random Forest Classifier with hyperparameter tuning</li>
                <li><strong>Data Processing:</strong> Feature engineering, outlier detection, and normalization</li>
                <li><strong>Model Validation:</strong> Cross-validation and performance metrics analysis</li>
                <li><strong>Deployment:</strong> Cloud-hosted Streamlit application with real-time inference</li>
            </ul>
            
            <h4>📊 Performance Metrics</h4>
            <ul>
                <li><strong>Accuracy:</strong> 92% on test dataset</li>
                <li><strong>Processing Speed:</strong> < 2 seconds per prediction</li>
                <li><strong>Model Size:</strong> Optimized for web deployment</li>
                <li><strong>Feature Importance:</strong> RAM and Brand are top predictors</li>
            </ul>
        </div>
        `,
        image: 'mobile.jpg',
        tech: ['Python', 'Scikit-learn', 'Pandas', 'Streamlit', 'NumPy'],
        stats: [
            { icon: 'fas fa-chart-line', text: '92% Accuracy' },
            { icon: 'fas fa-database', text: '10K+ Records' },
            { icon: 'fas fa-clock', text: 'Real-time Prediction' }
        ],
        github: 'https://github.com/Deveshsamant/Mobile-range-Prediction-using-Random-Forest',
        demo: 'https://mobile-price.streamlit.app/'
    },
    hand: {
        title: 'Hand Gesture Recognition',
        category: 'AI & Computer Vision',
        description: `
        <div class="detailed-description">
            <h4>🎯 Project Overview</h4>
            <p>A cutting-edge real-time hand gesture recognition system leveraging computer vision and machine learning for intuitive human-computer interaction.</p>
            
            <h4>🔧 Key Features</h4>
            <ul>
                <li><strong>Real-time Processing:</strong> 30+ FPS gesture detection with minimal latency</li>
                <li><strong>Multi-gesture Support:</strong> Recognizes 10+ different hand gestures and poses</li>
                <li><strong>High Accuracy:</strong> MediaPipe integration ensures 95%+ detection accuracy</li>
                <li><strong>Accessibility Focus:</strong> Designed for assistive technology applications</li>
                <li><strong>Cross-platform:</strong> Compatible with Windows, macOS, and Linux systems</li>
            </ul>
            
            <h4>⚡ Technical Implementation</h4>
            <ul>
                <li><strong>Computer Vision:</strong> OpenCV for video processing and frame analysis</li>
                <li><strong>Hand Detection:</strong> MediaPipe for robust hand landmark detection</li>
                <li><strong>Gesture Classification:</strong> Custom neural network for gesture recognition</li>
                <li><strong>Real-time Processing:</strong> Optimized pipeline for live video streams</li>
            </ul>
            
            <h4>📊 Performance Metrics</h4>
            <ul>
                <li><strong>Detection Accuracy:</strong> 95%+ in various lighting conditions</li>
                <li><strong>Processing Speed:</strong> 30-60 FPS real-time performance</li>
                <li><strong>Latency:</strong> < 50ms gesture response time</li>
                <li><strong>Range:</strong> Works effectively from 0.5m to 3m distance</li>
            </ul>
        </div>
        `,
        image: 'hand.jpg',
        tech: ['Python', 'OpenCV', 'MediaPipe', 'NumPy', 'TensorFlow'],
        stats: [
            { icon: 'fas fa-clock', text: 'Real-time Processing' },
            { icon: 'fas fa-hand-paper', text: '10+ Gestures' },
            { icon: 'fas fa-eye', text: 'Computer Vision' }
        ],
        github: '#',
        demo: '#'
    },
    movie: {
        title: 'Movie Recommendation System',
        category: 'Machine Learning',
        description: `
        <div class="detailed-description">
            <h4>🎯 Project Overview</h4>
            <p>An intelligent movie recommendation engine that provides personalized movie suggestions using advanced machine learning algorithms and content-based filtering.</p>
            
            <h4>🔧 Key Features</h4>
            <ul>
                <li><strong>Content-based Filtering:</strong> Analyzes movie genres, directors, actors, and plot keywords</li>
                <li><strong>Cosine Similarity:</strong> Advanced algorithm for finding similar movies</li>
                <li><strong>Large Dataset:</strong> Processes 5000+ movies with comprehensive metadata</li>
                <li><strong>Personalized Recommendations:</strong> Tailored suggestions based on user preferences</li>
                <li><strong>Multi-factor Analysis:</strong> Considers ratings, popularity, and release year</li>
            </ul>
            
            <h4>⚡ Technical Implementation</h4>
            <ul>
                <li><strong>Data Processing:</strong> Advanced text preprocessing and feature extraction</li>
                <li><strong>Similarity Engine:</strong> TF-IDF vectorization with cosine similarity</li>
                <li><strong>Recommendation Logic:</strong> Hybrid approach combining multiple factors</li>
                <li><strong>Web Interface:</strong> Flask-based API for seamless integration</li>
            </ul>
            
            <h4>📊 Performance Metrics</h4>
            <ul>
                <li><strong>Dataset Size:</strong> 5000+ movies with rich metadata</li>
                <li><strong>Recommendation Speed:</strong> < 1 second response time</li>
                <li><strong>Accuracy:</strong> High relevance based on user feedback</li>
                <li><strong>Coverage:</strong> Supports movies from 1920 to present</li>
            </ul>
        </div>
        `,
        image: 'movie.jpg',
        tech: ['Python', 'Pandas', 'Scikit-learn', 'Flask', 'NumPy'],
        stats: [
            { icon: 'fas fa-film', text: '5000+ Movies' },
            { icon: 'fas fa-star', text: 'High Accuracy' },
            { icon: 'fas fa-users', text: 'Personalized' }
        ],
        github: '#',
        demo: '#'
    },
    portfolio: {
        title: 'Space-Themed Portfolio',
        category: 'Web Development',
        description: `
        <div class="detailed-description">
            <h4>🎯 Project Overview</h4>
            <p>A stunning, interactive portfolio website featuring a space-themed design with cutting-edge web technologies and immersive user experience.</p>
            
            <h4>🔧 Key Features</h4>
            <ul>
                <li><strong>Responsive Design:</strong> Perfect viewing experience across all devices and screen sizes</li>
                <li><strong>Custom Animations:</strong> Smooth transitions, particle effects, and interactive elements</li>
                <li><strong>Dark/Light Mode:</strong> Dynamic theme switching with smooth transitions</li>
                <li><strong>Robot Assistant:</strong> Interactive AI companion with contextual tooltips</li>
                <li><strong>Modern UI/UX:</strong> Clean, intuitive interface with space-gaming aesthetics</li>
            </ul>
            
            <h4>⚡ Technical Implementation</h4>
            <ul>
                <li><strong>Frontend:</strong> Vanilla HTML5, CSS3 with custom properties and animations</li>
                <li><strong>JavaScript:</strong> ES6+ with modular architecture and event handling</li>
                <li><strong>Backend:</strong> Node.js with Express for serving and optional blog functionality</li>
                <li><strong>Performance:</strong> Optimized with lazy loading, debounced events, and efficient DOM manipulation</li>
            </ul>
            
            <h4>📊 Performance Metrics</h4>
            <ul>
                <li><strong>Load Time:</strong> < 3 seconds initial load</li>
                <li><strong>Lighthouse Score:</strong> 90+ in all categories</li>
                <li><strong>Cross-browser:</strong> Compatible with all modern browsers</li>
                <li><strong>Mobile Optimized:</strong> 100% responsive design</li>
            </ul>
        </div>
        `,
        image: 'myphoto.jpg',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Express'],
        stats: [
            { icon: 'fas fa-mobile-alt', text: 'Responsive Design' },
            { icon: 'fas fa-palette', text: 'Custom Theme' },
            { icon: 'fas fa-robot', text: 'AI Assistant' }
        ],
        github: 'https://github.com/Deveshsamant',
        demo: 'index.html'
    },
    ecommerce: {
        title: 'E-commerce Platform',
        category: 'Web Development',
        description: `
        <div class="detailed-description">
            <h4>🎯 Project Overview</h4>
            <p>A comprehensive full-stack e-commerce platform providing complete online shopping experience with modern architecture and secure payment processing.</p>
            
            <h4>🔧 Key Features</h4>
            <ul>
                <li><strong>User Management:</strong> Complete authentication system with JWT tokens and role-based access</li>
                <li><strong>Product Catalog:</strong> Advanced product management with categories, search, and filtering</li>
                <li><strong>Shopping Cart:</strong> Persistent cart with real-time updates and quantity management</li>
                <li><strong>Payment Integration:</strong> Secure Stripe payment processing with multiple payment methods</li>
                <li><strong>Order Management:</strong> Complete order tracking and status management system</li>
            </ul>
            
            <h4>⚡ Technical Implementation</h4>
            <ul>
                <li><strong>Frontend:</strong> React with Redux for state management and responsive UI components</li>
                <li><strong>Backend:</strong> Node.js with Express REST API and middleware architecture</li>
                <li><strong>Database:</strong> MongoDB with Mongoose ODM for flexible data modeling</li>
                <li><strong>Security:</strong> JWT authentication, input validation, and secure payment handling</li>
            </ul>
            
            <h4>📊 Performance Metrics</h4>
            <ul>
                <li><strong>Scalability:</strong> Supports 1000+ concurrent users</li>
                <li><strong>Security:</strong> PCI DSS compliant payment processing</li>
                <li><strong>Performance:</strong> < 2 seconds page load times</li>
                <li><strong>Uptime:</strong> 99.9% availability with error handling</li>
            </ul>
        </div>
        `,
        image: '',
        tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Express'],
        stats: [
            { icon: 'fas fa-users', text: 'Multi-user Support' },
            { icon: 'fas fa-credit-card', text: 'Payment Ready' },
            { icon: 'fas fa-shopping-cart', text: 'Full Cart System' }
        ],
        github: '#',
        demo: '#'
    },
    weather: {
        title: 'Weather App',
        category: 'Mobile App',
        description: `
        <div class="detailed-description">
            <h4>🎯 Project Overview</h4>
            <p>A sophisticated cross-platform weather application delivering accurate real-time weather data with intuitive design and comprehensive forecasting capabilities.</p>
            
            <h4>🔧 Key Features</h4>
            <ul>
                <li><strong>Real-time Data:</strong> Live weather updates with accurate meteorological information</li>
                <li><strong>Location Services:</strong> GPS-based weather for current location and saved cities</li>
                <li><strong>7-Day Forecast:</strong> Detailed weather predictions with hourly breakdowns</li>
                <li><strong>Weather Alerts:</strong> Push notifications for severe weather conditions</li>
                <li><strong>Beautiful UI:</strong> Dynamic backgrounds reflecting current weather conditions</li>
            </ul>
            
            <h4>⚡ Technical Implementation</h4>
            <ul>
                <li><strong>Cross-platform:</strong> React Native for iOS and Android deployment</li>
                <li><strong>API Integration:</strong> OpenWeatherMap API for reliable weather data</li>
                <li><strong>Location Services:</strong> Native GPS integration with permission handling</li>
                <li><strong>Offline Support:</strong> Cached data for offline weather viewing</li>
            </ul>
            
            <h4>📊 Performance Metrics</h4>
            <ul>
                <li><strong>Accuracy:</strong> 95%+ weather prediction accuracy</li>
                <li><strong>Performance:</strong> < 3 seconds data refresh time</li>
                <li><strong>Battery Optimization:</strong> Efficient location and network usage</li>
                <li><strong>Offline Mode:</strong> 24-hour cached data availability</li>
            </ul>
        </div>
        `,
        image: '',
        tech: ['React Native', 'API Integration', 'Location Services', 'Push Notifications'],
        stats: [
            { icon: 'fas fa-mobile-alt', text: 'Cross-platform' },
            { icon: 'fas fa-map-marker-alt', text: 'Location-based' },
            { icon: 'fas fa-cloud-sun', text: 'Real-time Data' }
        ],
        github: '#',
        demo: '#'
    }
};

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    initializeProjectFilters();
    initializeProjectCards();
    initializeModals();
    initializeAnimations();
});

// ===== PROJECT FILTERS =====
function initializeProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Get filter value
            const filter = button.dataset.filter;
            
            // Filter projects
            projectCards.forEach(card => {
                const category = card.dataset.category;
                
                if (filter === 'all' || category === filter) {
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
        });
    });
}

function addFilterAnimation() {
    const grid = document.querySelector('.projects-grid');
    grid.style.transform = 'scale(0.95)';
    grid.style.opacity = '0.7';
    
    setTimeout(() => {
        grid.style.transform = 'scale(1)';
        grid.style.opacity = '1';
    }, 150);
}

// ===== PROJECT CARDS =====
function initializeProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        // Add hover effects
        card.addEventListener('mouseenter', () => {
            const image = card.querySelector('.project-image img');
            if (image) {
                image.style.transform = 'scale(1.05)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            const image = card.querySelector('.project-image img');
            if (image) {
                image.style.transform = 'scale(1)';
            }
        });
        
        // Add click effects
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.action-btn')) {
                const projectId = card.dataset.category;
                openProjectModal(projectId);
            }
        });
    });
}

// ===== MODALS =====
function initializeModals() {
    // Close modals when clicking outside
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('project-modal')) {
            closeProjectModal();
        }
        if (e.target.classList.contains('coming-soon-modal')) {
            closeComingSoon();
        }
    });
    
    // Close modals with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeProjectModal();
            closeComingSoon();
        }
    });
}

function openProjectModal(projectId) {
    const modal = document.getElementById('projectModal');
    const project = projectData[projectId];
    
    if (!project) return;
    
    // Update modal content
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalCategory').innerHTML = `
        <i class="fas fa-code"></i>
        <span>${project.category}</span>
    `;
    document.getElementById('modalDescription').innerHTML = project.description;
    
    // Update image
    const modalImage = document.getElementById('modalImage');
    if (project.image) {
        modalImage.src = project.image;
        modalImage.alt = project.title;
    } else {
        modalImage.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMDA0NDU1Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Qcm9qZWN0IEltYWdlPC90ZXh0Pgo8L3N2Zz4K';
    }
    
    // Update tech tags
    const modalTech = document.getElementById('modalTech');
    modalTech.innerHTML = project.tech.map(tech => 
        `<span class="tech-tag">${tech}</span>`
    ).join('');
    
    // Update stats
    const modalStats = document.getElementById('modalStats');
    modalStats.innerHTML = project.stats.map(stat => 
        `<div class="stat">
            <i class="${stat.icon}"></i>
            <span>${stat.text}</span>
        </div>`
    ).join('');
    
    // Update links
    document.getElementById('modalGithub').href = project.github;
    document.getElementById('modalDemo').href = project.demo;
    
    // Show modal first
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    
    // Reset scroll position to top AFTER modal is shown
    // Use requestAnimationFrame to ensure DOM is updated
    requestAnimationFrame(() => {
        const modalContent = modal.querySelector('.modal-content');
        if (modalContent) {
            modalContent.scrollTop = 0;
        }
        
        // Additional safety: reset any other potential scrollable elements
        const allScrollableElements = modal.querySelectorAll('[style*="overflow"], .modal-body, .modal-info, .detailed-description');
        allScrollableElements.forEach(element => {
            if (element.scrollTop !== undefined) {
                element.scrollTop = 0;
            }
        });
    });
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
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
                
                // Stagger animation for project cards
                if (entry.target.classList.contains('project-card')) {
                    const cards = Array.from(document.querySelectorAll('.project-card'));
                    const index = cards.indexOf(entry.target);
                    entry.target.style.animationDelay = `${index * 0.1}s`;
                }
            }
        });
    }, observerOptions);
    
    // Observe project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => observer.observe(card));
    
    // Add hover animations
    addHoverAnimations();
}

function addHoverAnimations() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const image = card.querySelector('.project-image');
        const content = card.querySelector('.project-content');
        
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
    .project-card {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    .project-card.fade-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .project-image {
        transition: transform 0.3s ease;
    }
    
    .project-content {
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
    
    /* Detailed Description Styles */
    .detailed-description {
        color: var(--text-secondary);
        line-height: 1.6;
    }
    
    .detailed-description h4 {
        color: var(--accent-primary);
        font-family: 'Orbitron', monospace;
        font-size: 1.1rem;
        margin: 1.5rem 0 0.75rem 0;
        padding-bottom: 0.5rem;
        border-bottom: 2px solid rgba(0, 212, 255, 0.2);
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .detailed-description h4:first-child {
        margin-top: 0;
    }
    
    .detailed-description ul {
        margin: 0.75rem 0;
        padding-left: 0;
        list-style: none;
    }
    
    .detailed-description li {
        margin: 0.5rem 0;
        padding: 0.5rem 0 0.5rem 1.5rem;
        position: relative;
        background: rgba(0, 212, 255, 0.05);
        border-radius: var(--radius-md);
        border-left: 3px solid var(--accent-primary);
        transition: all 0.3s ease;
    }
    
    .detailed-description li:hover {
        background: rgba(0, 212, 255, 0.1);
        transform: translateX(5px);
    }
    
    .detailed-description li::before {
        content: '•';
        color: var(--accent-primary);
        position: absolute;
        left: 0.75rem;
        font-weight: bold;
    }
    
    .detailed-description strong {
        color: var(--text-primary);
        font-weight: 600;
    }
    
    .detailed-description p {
        margin: 0.75rem 0;
        color: var(--text-secondary);
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
window.openProjectModal = openProjectModal;
window.closeProjectModal = closeProjectModal;
window.showComingSoon = showComingSoon;
window.closeComingSoon = closeComingSoon;
