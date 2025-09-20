// ===== GLOBAL VARIABLES =====
let currentTheme = localStorage.getItem('theme') || 'dark';
let isLoaderVisible = true;
let typewriterIndex = 0;
let typewriterText = '';
let isDeleting = false;
let typewriterSpeed = 100;

// Typewriter phrases
const typewriterPhrases = [
    "Full Stack Developer",
    "Machine Learning Engineer", 
    "Space Explorer",
    "Gaming Enthusiast",
    "Tech Innovator",
    "Code Warrior"
];

// Tooltip messages for different elements
const tooltipMessages = {
    'nav-link': {
        'Home': 'Welcome to my cosmic journey!',
        'About': 'Learn about my space exploration mission',
        'Projects': 'Discover my digital creations and innovations',
        'Blog': 'Read my space logs and tech insights',
        'Contact': 'Reach out to this space explorer'
    },
    'tech-item': {
        'C++': 'My first programming language - the foundation of my coding journey',
        'Python': 'My go-to for AI, automation, and data science adventures',
        'React': 'Building dynamic and interactive user interfaces',
        'Node.js': 'Powering the backend universe with JavaScript',
        'ML': 'Teaching computers to think and learn from data'
    },
    'btn-primary': 'Download my mission report and technical specifications',
    'btn-secondary': 'Explore more about my journey and achievements',
    'profile-card': 'This is me - your friendly neighborhood space explorer!',
    'social-links': 'Connect with me across the digital universe'
};

// ===== DOM ELEMENTS =====
const cosmicLoader = document.getElementById('cosmic-loader');
const customCursor = document.getElementById('custom-cursor');
const robotAssistant = document.getElementById('robot-assistant');
const tooltip = document.getElementById('tooltip');
const themeToggle = document.getElementById('theme-toggle');
const typewriterElement = document.getElementById('typewriter');

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    initializeLoader();
    initializeCursor();
    initializeRobotAssistant();
    initializeTypewriter();
    initializeScrollAnimations();
    initializeTooltips();
    initializeParallax();
    
    // Enhanced loader runs longer for better experience
    // Loader will auto-hide when sequence completes
});

// ===== THEME MANAGEMENT =====
function initializeTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon();
}

function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeIcon();
    
    // Add theme transition effect
    document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    setTimeout(() => {
        document.body.style.transition = '';
    }, 300);
}

function updateThemeIcon() {
    const icon = themeToggle.querySelector('i');
    if (currentTheme === 'dark') {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

// ===== LOADER ANIMATION =====
function initializeLoader() {
    // Check if we're on the home page by checking if cosmicLoader exists
    if (!cosmicLoader) return;
    
    // Check if this is the first time loading the home page in this session
    const isFirstLoad = !sessionStorage.getItem('homePageLoaded');
    
    if (!isFirstLoad) {
        // If not the first load, hide the loader immediately
        cosmicLoader.style.display = 'none';
        isLoaderVisible = false;
        return;
    }
    
    // Mark that the home page has been loaded in this session
    sessionStorage.setItem('homePageLoaded', 'true');
    
    // Play the full animation sequence only on first load (3 second total duration)
    const typingText = document.getElementById('typing-text');
    if (typingText) {
        const loaderTexts = [
            'Booting Portfolio.exe...',
            'Loading digital cosmos...'
        ];
        
        let textIndex = 0;
        let charIndex = 0;
        
        function typeLoaderText() {
            const currentText = loaderTexts[textIndex];
            
            if (charIndex <= currentText.length) {
                typingText.textContent = currentText.substring(0, charIndex);
                charIndex++;
                setTimeout(typeLoaderText, 50); // Faster typing for shorter duration
            } else {
                // Move to next text after a short pause
                setTimeout(() => {
                    textIndex++;
                    charIndex = 0;
                    
                    if (textIndex < loaderTexts.length) {
                        setTimeout(typeLoaderText, 150); // Shorter pause between texts
                    } else {
                        // Finished all texts, hide loader after a brief final delay
                        setTimeout(() => {
                            hideLoader();
                        }, 500); // Shorter final delay for 3 second total
                    }
                }, 300); // Shorter pause before final delay
            }
        }
        
        typeLoaderText();
    }
}

function hideLoader() {
    if (cosmicLoader) {
        cosmicLoader.classList.add('hidden');
        setTimeout(() => {
            cosmicLoader.style.display = 'none';
            isLoaderVisible = false;
        }, 500);
    }
}

// ===== CUSTOM CURSOR =====
function initializeCursor() {
    if (!customCursor) return;
    
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateCursor() {
        const deltaX = mouseX - cursorX;
        const deltaY = mouseY - cursorY;
        
        // Use smoother easing and prevent excessive updates
        if (Math.abs(deltaX) > 0.1 || Math.abs(deltaY) > 0.1) {
            cursorX += deltaX * 0.1;
            cursorY += deltaY * 0.1;
            
            customCursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
        }
        
        requestAnimationFrame(animateCursor);
    }
    
    animateCursor();
    
    // Add hover effects with stable protection against element disappearing
    const hoverElements = document.querySelectorAll('a, button, .tech-item, .profile-card, .contact-method, .faq-item, .stat-item, .location-item, .contact-form-section, .form-group');
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            customCursor.classList.add('hover');
            // Ensure element stays visible and functional without excessive DOM manipulation
            if (element.style.visibility !== 'visible') {
                element.style.visibility = 'visible';
                element.style.opacity = '1';
                element.style.pointerEvents = 'auto';
            }
        });
        
        element.addEventListener('mouseleave', () => {
            customCursor.classList.remove('hover');
        });
    });
}

// ===== ROBOT ASSISTANT =====
function initializeRobotAssistant() {
    if (!robotAssistant || !tooltip) return;
    
    let currentTooltip = '';
    let tooltipTimeout;
    
    // Robot click animation
    robotAssistant.addEventListener('click', () => {
        robotAssistant.style.transform = 'scale(0.9)';
        setTimeout(() => {
            robotAssistant.style.transform = 'scale(1)';
        }, 150);
        
        // Show random message
        const messages = [
            'Hello! I\'m your AI assistant!',
            'Hover over elements to learn more!',
            'Welcome to the digital cosmos!',
            'Ready to explore? Let\'s go!',
            'I\'m here to help you navigate!'
        ];
        
        showTooltip(messages[Math.floor(Math.random() * messages.length)]);
    });
    
    // Show tooltip function
    function showTooltip(message) {
        if (tooltipTimeout) clearTimeout(tooltipTimeout);
        
        tooltip.querySelector('.tooltip-text').textContent = message;
        tooltip.classList.add('show');
        
        tooltipTimeout = setTimeout(() => {
            tooltip.classList.remove('show');
        }, 3000);
    }
    
    // Update tooltip based on hovered element
    document.addEventListener('mouseover', (e) => {
        const element = e.target.closest('[data-tooltip]');
        if (element && element.dataset.tooltip !== currentTooltip) {
            currentTooltip = element.dataset.tooltip;
            showTooltip(currentTooltip);
        }
    });
    
    document.addEventListener('mouseout', (e) => {
        const element = e.target.closest('[data-tooltip]');
        if (element) {
            setTimeout(() => {
                if (!document.querySelector(':hover[data-tooltip]')) {
                    tooltip.classList.remove('show');
                    currentTooltip = '';
                }
            }, 100);
        }
    });
}

// ===== TYPEWRITER EFFECT =====
function initializeTypewriter() {
    if (!typewriterElement) return;
    
    function typeWriter() {
        const currentPhrase = typewriterPhrases[typewriterIndex];
        
        if (isDeleting) {
            typewriterText = currentPhrase.substring(0, typewriterText.length - 1);
        } else {
            typewriterText = currentPhrase.substring(0, typewriterText.length + 1);
        }
        
        typewriterElement.textContent = typewriterText;
        
        let speed = typewriterSpeed;
        if (isDeleting) speed /= 2;
        
        if (!isDeleting && typewriterText === currentPhrase) {
            speed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && typewriterText === '') {
            isDeleting = false;
            typewriterIndex = (typewriterIndex + 1) % typewriterPhrases.length;
            speed = 500; // Pause before next phrase
        }
        
        setTimeout(typeWriter, speed);
    }
    
    typeWriter();
}

// ===== SCROLL ANIMATIONS =====
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.tech-item, .stat-item, .about-text, .about-image');
    animatedElements.forEach(el => observer.observe(el));
}

// ===== TOOLTIPS =====
function initializeTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', (e) => {
            const tooltipText = e.target.dataset.tooltip;
            if (tooltipText && robotAssistant) {
                const tooltip = robotAssistant.querySelector('.tooltip-text');
                if (tooltip) {
                    tooltip.textContent = tooltipText;
                    robotAssistant.querySelector('.tooltip').classList.add('show');
                }
            }
        });
        
        element.addEventListener('mouseleave', () => {
            if (robotAssistant) {
                robotAssistant.querySelector('.tooltip').classList.remove('show');
            }
        });
    });
}

// ===== PARALLAX EFFECTS =====
function initializeParallax() {
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.starfield');
        
        // Only apply parallax to starfield, not profile elements
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            element.style.transform = `translateY(${scrolled * speed}px)`;
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

// ===== SMOOTH SCROLLING =====
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// ===== PARTICLE SYSTEM =====
function createParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
    `;
    
    document.body.appendChild(particleContainer);
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: var(--accent-primary);
            border-radius: 50%;
            pointer-events: none;
        `;
        
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = '100%';
        particle.style.animation = `floatUp ${3 + Math.random() * 4}s linear forwards`;
        
        particleContainer.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 7000);
    }
    
    // Create particles periodically
    setInterval(createParticle, 200);
    
    // Add CSS animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatUp {
            to {
                transform: translateY(-100vh);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// ===== GAMING EFFECTS =====
function initializeGamingEffects() {
    // Add keyboard sound effects (visual feedback)
    document.addEventListener('keydown', (e) => {
        if (e.key === ' ') {
            e.preventDefault();
            // Add space bar effect
            createRippleEffect(e.clientX, e.clientY);
        }
    });
    
    // Add click effects
    document.addEventListener('click', (e) => {
        createRippleEffect(e.clientX, e.clientY);
    });
}

function createRippleEffect(x, y) {
    const ripple = document.createElement('div');
    ripple.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: 20px;
        height: 20px;
        border: 2px solid var(--accent-primary);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
        z-index: 9999;
        animation: ripple 0.6s ease-out forwards;
    `;
    
    document.body.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
    
    // Add ripple animation CSS
    if (!document.querySelector('#ripple-styles')) {
        const style = document.createElement('style');
        style.id = 'ripple-styles';
        style.textContent = `
            @keyframes ripple {
                0% {
                    width: 20px;
                    height: 20px;
                    opacity: 1;
                }
                100% {
                    width: 100px;
                    height: 100px;
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// ===== EVENT LISTENERS =====
if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

// Initialize gaming effects
document.addEventListener('DOMContentLoaded', () => {
    initializeGamingEffects();
    createParticles();
});

// ===== PERFORMANCE OPTIMIZATION =====
// Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Optimize scroll listener
window.addEventListener('scroll', throttle(() => {
    // Scroll-based animations can be added here
}, 16)); // ~60fps

// ===== ACCESSIBILITY =====
// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
});

// Add focus styles for keyboard navigation
const style = document.createElement('style');
style.textContent = `
    .keyboard-navigation *:focus {
        outline: 2px solid var(--accent-primary) !important;
        outline-offset: 2px;
    }
`;
document.head.appendChild(style);

// ===== ERROR HANDLING =====
window.addEventListener('error', (e) => {
    console.error('Portfolio Error:', e.error);
    // Gracefully handle errors without breaking the user experience
});

// ===== CODING SHOWCASE FUNCTIONALITY =====
function initializeCodingShowcase() {
    // Terminal typing animation
    initializeTerminalAnimation();
    
    // Skill node interactions
    initializeSkillNodes();
    
    // Achievement popup animation
    initializeAchievementPopup();
    
    // Tech stack interactions
    initializeTechStack();
    
    // Interactive floating elements
    initializeFloatingElements();
}

// Terminal Animation
function initializeTerminalAnimation() {
    const typingCommand = document.querySelector('.typing-command');
    if (!typingCommand) return;
    
    const commands = [
        './run_portfolio.sh',
        'npm start',
        'python main.py',
        'git push origin main',
        'docker run app'
    ];
    
    let commandIndex = 0;
    
    function rotateCommand() {
        typingCommand.textContent = commands[commandIndex];
        commandIndex = (commandIndex + 1) % commands.length;
    }
    
    // Rotate command every 4 seconds
    setInterval(rotateCommand, 4000);
}

// Skill Nodes Interaction
function initializeSkillNodes() {
    const skillNodes = document.querySelectorAll('.skill-node');
    if (!skillNodes.length) return;
    
    skillNodes.forEach(node => {
        node.addEventListener('mouseenter', () => {
            // Show skill tooltip
            const skillName = node.dataset.skill;
            if (skillName && robotAssistant) {
                showSkillTooltip(skillName);
            }
            
            // Add visual effect
            node.style.transform = 'scale(1.2)';
            node.style.zIndex = '10';
        });
        
        node.addEventListener('mouseleave', () => {
            node.style.transform = 'scale(1)';
            node.style.zIndex = '1';
        });
        
        node.addEventListener('click', () => {
            // Toggle active state
            node.classList.toggle('active');
            
            // Create ripple effect
            createSkillRipple(node);
        });
    });
    
    // Auto-activate nodes sequentially
    let nodeIndex = 0;
    function autoActivateNodes() {
        skillNodes.forEach(node => node.classList.remove('active'));
        
        if (skillNodes[nodeIndex]) {
            skillNodes[nodeIndex].classList.add('active');
            nodeIndex = (nodeIndex + 1) % skillNodes.length;
        }
    }
    
    // Auto-activate every 2 seconds
    setInterval(autoActivateNodes, 2000);
}

// Skill Tooltip
function showSkillTooltip(skillName) {
    const skillMessages = {
        'Python': 'My go-to language for AI and backend development',
        'JavaScript': 'Building dynamic and interactive web experiences',
        'C++': 'Foundation language for competitive programming',
        'React': 'Creating modern, responsive user interfaces',
        'Node.js': 'Powering server-side applications',
        'AI/ML': 'Machine learning and artificial intelligence'
    };
    
    const message = skillMessages[skillName] || `Expertise in ${skillName}`;
    
    if (robotAssistant && tooltip) {
        tooltip.querySelector('.tooltip-text').textContent = message;
        tooltip.classList.add('show');
        
        setTimeout(() => {
            tooltip.classList.remove('show');
        }, 3000);
    }
}

// Skill Ripple Effect
function createSkillRipple(node) {
    const ripple = document.createElement('div');
    ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(0, 212, 255, 0.3);
        transform: scale(0);
        animation: skillRipple 0.6s linear;
        pointer-events: none;
        width: 60px;
        height: 60px;
        top: 0;
        left: 0;
    `;
    
    node.style.position = 'relative';
    node.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
    
    // Add ripple animation CSS if not exists
    if (!document.querySelector('#skill-ripple-styles')) {
        const style = document.createElement('style');
        style.id = 'skill-ripple-styles';
        style.textContent = `
            @keyframes skillRipple {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Achievement Popup Animation
function initializeAchievementPopup() {
    const achievementPopup = document.querySelector('.achievement-popup');
    if (!achievementPopup) return;
    
    const achievements = [
        {
            title: 'Achievement Unlocked!',
            desc: 'Full Stack Developer'
        },
        {
            title: 'Level Up!',
            desc: 'Frontend Expert'
        },
        {
            title: 'New Skill Acquired!',
            desc: 'Backend Specialist'
        },
        {
            title: 'Quest Complete!',
            desc: 'Modern Web Developer'
        },
        {
            title: 'Milestone Reached!',
            desc: 'API Architect'
        }
    ];
    
    let achievementIndex = 0;
    
    function rotateAchievement() {
        const achievement = achievements[achievementIndex];
        const titleElement = achievementPopup.querySelector('.achievement-title');
        const descElement = achievementPopup.querySelector('.achievement-desc');
        
        if (titleElement && descElement) {
            titleElement.textContent = achievement.title;
            descElement.textContent = achievement.desc;
            
            // Add pop animation
            achievementPopup.style.transform = 'scale(1.05)';
            setTimeout(() => {
                achievementPopup.style.transform = 'scale(1)';
            }, 200);
        }
        
        achievementIndex = (achievementIndex + 1) % achievements.length;
    }
    
    // Rotate achievement every 5 seconds
    setInterval(rotateAchievement, 5000);
    
    // Click interaction
    achievementPopup.addEventListener('click', () => {
        rotateAchievement();
        createAchievementParticles(achievementPopup);
    });
}

// Achievement Particles
function createAchievementParticles(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 8px;
            height: 8px;
            background: #ffd700;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            left: ${centerX}px;
            top: ${centerY}px;
        `;
        
        document.body.appendChild(particle);
        
        const angle = (i * 45) * Math.PI / 180;
        const velocity = 100 + Math.random() * 50;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        let x = 0, y = 0, opacity = 1;
        
        function animateParticle() {
            x += vx * 0.02;
            y += vy * 0.02 + 2; // gravity
            opacity -= 0.02;
            
            particle.style.transform = `translate(${x}px, ${y}px)`;
            particle.style.opacity = opacity;
            
            if (opacity > 0) {
                requestAnimationFrame(animateParticle);
            } else {
                particle.remove();
            }
        }
        
        requestAnimationFrame(animateParticle);
    }
}

// Tech Stack Card Interactions
function initializeTechStack() {
    const techBadges = document.querySelectorAll('.tech-badge');
    if (!techBadges.length) return;
    
    techBadges.forEach(badge => {
        badge.addEventListener('mouseenter', () => {
            // Show tech tooltip
            const techName = badge.querySelector('span').textContent;
            if (techName && robotAssistant) {
                showTechTooltip(techName);
            }
            
            // Add visual effect
            badge.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        badge.addEventListener('mouseleave', () => {
            badge.style.transform = 'translateY(0) scale(1)';
        });
        
        badge.addEventListener('click', () => {
            // Create tech ripple effect
            createTechRipple(badge);
        });
    });
    
    // Experience bar animation
    const experienceFill = document.querySelector('.experience-fill');
    if (experienceFill) {
        // Animate on scroll into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    experienceFill.style.animation = 'fillExperience 3s ease-in-out infinite';
                }
            });
        });
        
        observer.observe(experienceFill);
    }
}

// Tech Tooltip
function showTechTooltip(techName) {
    const techMessages = {
        'React': 'Building dynamic and interactive user interfaces with modern React',
        'JavaScript': 'Creating powerful web applications with ES6+ features',
        'HTML5': 'Semantic markup and modern web standards',
        'CSS3': 'Beautiful styling with animations and responsive design',
        'Python': 'Backend development and data science powerhouse',
        'Node.js': 'Server-side JavaScript for scalable applications'
    };
    
    const message = techMessages[techName] || `Expertise in ${techName} development`;
    
    if (robotAssistant && tooltip) {
        tooltip.querySelector('.tooltip-text').textContent = message;
        tooltip.classList.add('show');
        
        setTimeout(() => {
            tooltip.classList.remove('show');
        }, 3000);
    }
}

// Tech Ripple Effect
function createTechRipple(badge) {
    const ripple = document.createElement('div');
    ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(97, 218, 251, 0.3);
        transform: scale(0);
        animation: techRipple 0.6s linear;
        pointer-events: none;
        width: 30px;
        height: 30px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
    `;
    
    badge.style.position = 'relative';
    badge.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
    
    // Add ripple animation CSS if not exists
    if (!document.querySelector('#tech-ripple-styles')) {
        const style = document.createElement('style');
        style.id = 'tech-ripple-styles';
        style.textContent = `
            @keyframes techRipple {
                to {
                    transform: translate(-50%, -50%) scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Interactive Floating Elements
function initializeFloatingElements() {
    const floatingElements = document.querySelectorAll('.floating-icon');
    if (!floatingElements.length) return;
    
    floatingElements.forEach((element, index) => {
        element.addEventListener('mouseenter', () => {
            element.style.animationPlayState = 'paused';
            element.style.transform = 'scale(1.3)';
            element.style.zIndex = '10';
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.animationPlayState = 'running';
            element.style.transform = 'scale(1)';
            element.style.zIndex = '1';
        });
        
        element.addEventListener('click', () => {
            // Create explosion effect
            createFloatingIconExplosion(element);
        });
    });
}

// Floating Icon Explosion
function createFloatingIconExplosion(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Get the icon class from the element
    const iconElement = element.querySelector('i');
    const iconClass = iconElement ? iconElement.className : 'fas fa-star';
    
    for (let i = 0; i < 6; i++) {
        const particle = document.createElement('i');
        particle.className = iconClass;
        particle.style.cssText = `
            position: fixed;
            font-size: 1rem;
            color: ${element.classList.contains('code-icon') ? 'var(--accent-primary)' : '#ff6b6b'};
            pointer-events: none;
            z-index: 9999;
            left: ${centerX}px;
            top: ${centerY}px;
        `;
        
        document.body.appendChild(particle);
        
        const angle = (i * 60) * Math.PI / 180;
        const velocity = 80 + Math.random() * 40;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        let x = 0, y = 0, opacity = 1, rotation = 0;
        
        function animateExplosion() {
            x += vx * 0.02;
            y += vy * 0.02;
            opacity -= 0.015;
            rotation += 5;
            
            particle.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
            particle.style.opacity = opacity;
            
            if (opacity > 0) {
                requestAnimationFrame(animateExplosion);
            } else {
                particle.remove();
            }
        }
        
        requestAnimationFrame(animateExplosion);
    }
}

// Frontend Zone Stats Animation
function initializeFrontendStats() {
    const frontendStats = document.querySelectorAll('.stat-frontend');
    if (!frontendStats.length) return;
    
    frontendStats.forEach(stat => {
        stat.addEventListener('click', () => {
            // Add pulse animation
            stat.style.animation = 'none';
            setTimeout(() => {
                stat.style.animation = 'statPulse 0.6s ease-out';
            }, 10);
        });
    });
    
    // Add stat pulse animation CSS
    if (!document.querySelector('#stat-pulse-styles')) {
        const style = document.createElement('style');
        style.id = 'stat-pulse-styles';
        style.textContent = `
            @keyframes statPulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.1); }
                100% { transform: scale(1); }
            }
        `;
        document.head.appendChild(style);
    }
}

// Backend Zone Stats Animation
function initializeBackendStats() {
    const backendStats = document.querySelectorAll('.stat-backend');
    if (!backendStats.length) return;
    
    backendStats.forEach(stat => {
        stat.addEventListener('click', () => {
            // Add glow effect
            stat.style.boxShadow = '0 0 30px rgba(104, 211, 145, 0.5)';
            setTimeout(() => {
                stat.style.boxShadow = '';
            }, 1000);
        });
    });
}

// Initialize all coding showcase features
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        initializeCodingShowcase();
        initializeFrontendStats();
        initializeBackendStats();
    }, 1000); // Delay to ensure DOM is ready
});

// ===== HOBBIES API FUNCTIONS =====

// Chess.com API functions
async function fetchChessStats() {
    try {
        const response = await fetch('https://api.chess.com/pub/player/deveshsamanthero/stats');
        const data = await response.json();
        
        if (data.chess_daily) {
            const daily = data.chess_daily;
            document.getElementById('chess-rating').textContent = daily.last.rating || 'N/A';
            document.getElementById('chess-games').textContent = daily.record.win + daily.record.loss + daily.record.draw || '0';
            
            const totalGames = daily.record.win + daily.record.loss + daily.record.draw;
            const winRate = totalGames > 0 ? Math.round((daily.record.win / totalGames) * 100) : 0;
            document.getElementById('chess-winrate').textContent = winRate + '%';
        } else {
            // Fallback to rapid if daily not available
            const rapid = data.chess_rapid;
            if (rapid) {
                document.getElementById('chess-rating').textContent = rapid.last.rating || 'N/A';
                document.getElementById('chess-games').textContent = rapid.record.win + rapid.record.loss + rapid.record.draw || '0';
                
                const totalGames = rapid.record.win + rapid.record.loss + rapid.record.draw;
                const winRate = totalGames > 0 ? Math.round((rapid.record.win / totalGames) * 100) : 0;
                document.getElementById('chess-winrate').textContent = winRate + '%';
            } else {
                throw new Error('No chess data available');
            }
        }
    } catch (error) {
        console.error('Error fetching chess stats:', error);
        document.getElementById('chess-rating').textContent = 'N/A';
        document.getElementById('chess-games').textContent = 'N/A';
        document.getElementById('chess-winrate').textContent = 'N/A';
    }
}

// Valorant API functions (using tracker.gg API)
async function fetchValorantStats() {
    try {
        // Note: Valorant API requires authentication and has rate limits
        // For demo purposes, we'll show placeholder data
        // In production, you'd need to implement proper API authentication
        
        // Simulate API call with placeholder data
        setTimeout(() => {
            document.getElementById('valorant-rank').textContent = 'Gold 2';
            document.getElementById('valorant-rr').textContent = '1,250';
            document.getElementById('valorant-level').textContent = '45';
        }, 1000);
        
        // Uncomment below for actual API implementation:
        /*
        const response = await fetch('https://api.tracker.gg/api/v2/valorant/standard/profile/riot/Bardock%20ka%20papa%23ReAl', {
            headers: {
                'TRN-Api-Key': 'YOUR_API_KEY_HERE'
            }
        });
        const data = await response.json();
        
        if (data.data) {
            const stats = data.data.segments[0].stats;
            document.getElementById('valorant-rank').textContent = stats.rank?.displayValue || 'N/A';
            document.getElementById('valorant-rr').textContent = stats.rankedRating?.displayValue || 'N/A';
            document.getElementById('valorant-level').textContent = stats.level?.displayValue || 'N/A';
        }
        */
    } catch (error) {
        console.error('Error fetching Valorant stats:', error);
        document.getElementById('valorant-rank').textContent = 'N/A';
        document.getElementById('valorant-rr').textContent = 'N/A';
        document.getElementById('valorant-level').textContent = 'N/A';
    }
}

// Refresh functions
function refreshChessStats() {
    const elements = ['chess-rating', 'chess-games', 'chess-winrate'];
    elements.forEach(id => {
        const element = document.getElementById(id);
        element.textContent = 'Loading...';
        element.classList.add('loading');
    });
    
    fetchChessStats().then(() => {
        elements.forEach(id => {
            document.getElementById(id).classList.remove('loading');
        });
    });
}

function refreshValorantStats() {
    const elements = ['valorant-rank', 'valorant-rr', 'valorant-level'];
    elements.forEach(id => {
        const element = document.getElementById(id);
        element.textContent = 'Loading...';
        element.classList.add('loading');
    });
    
    fetchValorantStats().then(() => {
        elements.forEach(id => {
            document.getElementById(id).classList.remove('loading');
        });
    });
}

// Initialize hobbies data when page loads
function initializeHobbies() {
    // Add a small delay to ensure DOM is ready
    setTimeout(() => {
        if (document.getElementById('chess-rating')) {
            fetchChessStats();
            fetchValorantStats();
        }
    }, 1000);
}

// ===== EXPORT FUNCTIONS FOR GLOBAL USE =====
window.scrollToSection = scrollToSection;
window.toggleTheme = toggleTheme;
window.refreshChessStats = refreshChessStats;
window.refreshValorantStats = refreshValorantStats;
