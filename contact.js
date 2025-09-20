// ===== CONTACT PAGE SPECIFIC JAVASCRIPT =====

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    initializeContactForm();
    initializeFAQ();
    initializeAnimations();
    initializeSmoothScrolling();
});

// ===== CONTACT FORM =====
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
        
        // Add real-time validation
        const inputs = contactForm.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearFieldError);
        });
        
        // Fix textarea spacing issues
        const messageTextarea = document.getElementById('message');
        if (messageTextarea) {
            // Ensure proper text input handling
            messageTextarea.addEventListener('input', function(e) {
                // Allow all characters including spaces
                e.target.style.textTransform = 'none';
                e.target.style.letterSpacing = 'normal';
                e.target.style.wordSpacing = 'normal';
            });
            
            messageTextarea.addEventListener('keydown', function(e) {
                // Ensure space key works properly
                if (e.key === ' ' || e.keyCode === 32) {
                    // Allow space character
                    return true;
                }
            });
        }
    }
}

function handleFormSubmit(e) {
    // Don't prevent default - let FormSubmit handle it
    const form = e.target;
    
    // Validate form before submission
    if (!validateForm(form)) {
        e.preventDefault();
        return;
    }
    
    // Show loading state
    const submitBtn = form.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    
    // Show success modal after a short delay
    setTimeout(() => {
        showSuccessModal();
        console.log('✅ Form submitted to FormSubmit.co for aani64257@gmail.com');
        
        // Reset form and button after modal is shown
        setTimeout(() => {
            form.reset();
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        }, 2000);
    }, 1000);
}

function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    
    inputs.forEach(input => {
        if (!validateField({ target: input })) {
            isValid = false;
        }
    });
    
    return isValid;
}

function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    const fieldName = field.name;
    let isValid = true;
    let errorMessage = '';
    
    // Remove existing error
    clearFieldError(e);
    
    // Required field validation
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = `${getFieldLabel(fieldName)} is required`;
    }
    
    // Email validation
    if (fieldName === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address';
        }
    }
    
    // Name validation
    if ((fieldName === 'firstName' || fieldName === 'lastName') && value) {
        if (value.length < 2) {
            isValid = false;
            errorMessage = 'Name must be at least 2 characters long';
        }
    }
    
    // Message validation
    if (fieldName === 'message' && value) {
        if (value.length < 10) {
            isValid = false;
            errorMessage = 'Message must be at least 10 characters long';
        }
    }
    
    // Show error if invalid
    if (!isValid) {
        showFieldError(field, errorMessage);
    }
    
    return isValid;
}

function clearFieldError(e) {
    const field = e.target;
    const errorElement = field.parentNode.querySelector('.field-error');
    if (errorElement) {
        errorElement.remove();
    }
    field.classList.remove('error');
}

function showFieldError(field, message) {
    field.classList.add('error');
    
    const errorElement = document.createElement('div');
    errorElement.className = 'field-error';
    errorElement.textContent = message;
    errorElement.style.cssText = `
        color: var(--accent-secondary);
        font-size: 0.8rem;
        margin-top: 0.25rem;
        display: flex;
        align-items: center;
        gap: 0.25rem;
    `;
    
    field.parentNode.appendChild(errorElement);
}

function getFieldLabel(fieldName) {
    const labels = {
        'firstName': 'First Name',
        'lastName': 'Last Name',
        'email': 'Email',
        'subject': 'Subject',
        'message': 'Message'
    };
    return labels[fieldName] || fieldName;
}

function showSuccessModal() {
    // Create success modal
    const modal = document.createElement('div');
    modal.className = 'success-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="success-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <h3>Message Sent Successfully!</h3>
            <p>Thank you for reaching out! Your message has been sent to aani64257@gmail.com and Devesh will receive it shortly. You should also receive a confirmation email. I'll get back to you as soon as possible!</p>
            <button class="btn-primary" onclick="closeSuccessModal()">Got it!</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Show modal with animation
    setTimeout(() => {
        modal.classList.add('show');
    }, 100);
}

function showErrorMessage(message) {
    // Create error modal
    const modal = document.createElement('div');
    modal.className = 'error-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="error-icon">
                <i class="fas fa-exclamation-triangle"></i>
            </div>
            <h3>Error Sending Message</h3>
            <p>${message}</p>
            <button class="btn-primary" onclick="closeErrorModal()">OK</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Show modal with animation
    setTimeout(() => {
        modal.classList.add('show');
    }, 100);
}

function closeSuccessModal() {
    const modal = document.querySelector('.success-modal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}

function closeErrorModal() {
    const modal = document.querySelector('.error-modal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}

// ===== FAQ FUNCTIONALITY =====
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
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
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll(
        '.contact-method, .location-item, .faq-item, .stat-item, .contact-form-section'
    );
    
    animatedElements.forEach(el => observer.observe(el));
}

// ===== SMOOTH SCROLLING =====
function initializeSmoothScrolling() {
    // Smooth scroll for anchor links
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
}

// ===== FORM ENHANCEMENTS =====
function initializeFormEnhancements() {
    // Add floating labels effect
    const formGroups = document.querySelectorAll('.form-group');
    
    formGroups.forEach(group => {
        const input = group.querySelector('input, select, textarea');
        if (input) {
            // Add focus/blur effects
            input.addEventListener('focus', () => {
                group.classList.add('focused');
            });
            
            input.addEventListener('blur', () => {
                if (!input.value) {
                    group.classList.remove('focused');
                }
            });
            
            // Check if input has value on load
            if (input.value) {
                group.classList.add('focused');
            }
        }
    });
}

// ===== CONTACT METHOD INTERACTIONS =====
function initializeContactMethodInteractions() {
    const contactMethods = document.querySelectorAll('.contact-method');
    
    contactMethods.forEach(method => {
        method.addEventListener('click', () => {
            // Add click animation
            method.style.transform = 'scale(0.98)';
            setTimeout(() => {
                method.style.transform = '';
            }, 150);
        });
        
        // Add hover effects
        method.addEventListener('mouseenter', () => {
            const icon = method.querySelector('.method-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
            }
        });
        
        method.addEventListener('mouseleave', () => {
            const icon = method.querySelector('.method-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
}

// ===== ADDITIONAL CSS STYLES =====
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
    .form-group.focused label {
        color: var(--accent-primary);
        transform: translateY(-2px);
    }
    
    .form-group input.error,
    .form-group select.error,
    .form-group textarea.error {
        border-color: var(--accent-secondary);
        box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.1);
    }
    
    .field-error {
        color: var(--accent-secondary);
        font-size: 0.8rem;
        margin-top: 0.25rem;
        display: flex;
        align-items: center;
        gap: 0.25rem;
    }
    
    .field-error::before {
        content: '⚠';
        font-size: 0.75rem;
    }
    
    .contact-method {
        transition: all 0.3s ease;
    }
    
    .method-icon {
        transition: all 0.3s ease;
    }
    
    .faq-item {
        transition: all 0.3s ease;
    }
    
    .faq-question {
        transition: all 0.3s ease;
    }
    
    .faq-answer {
        transition: all 0.3s ease;
    }
    
    .stat-item {
        transition: all 0.3s ease;
    }
    
    .location-item {
        transition: all 0.3s ease;
    }
    
    .contact-form-section {
        transition: all 0.3s ease;
    }
    
    .success-modal {
        transition: all 0.3s ease;
    }
    
    .success-icon {
        animation: bounce 2s infinite;
    }
    
    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-10px);
        }
        60% {
            transform: translateY(-5px);
        }
    }
    
    .fade-in {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    .fade-in.visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(additionalStyles);

// ===== PERFORMANCE OPTIMIZATION =====
// Debounce form validation
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

// Apply debouncing to form validation
const debouncedValidate = debounce(validateField, 300);

// ===== INITIALIZE ALL FEATURES =====
document.addEventListener('DOMContentLoaded', () => {
    initializeFormEnhancements();
    initializeContactMethodInteractions();
});

// ===== GLOBAL FUNCTIONS =====
window.closeSuccessModal = closeSuccessModal;

// ===== FORM SUBMISSION HANDLING =====
// In a real application, you would send the form data to a server
// For now, we'll simulate the submission process

function simulateFormSubmission(formData) {
    // This would typically be an API call to your backend
    return new Promise((resolve) => {
        setTimeout(() => {
            // Simulate successful submission
            console.log('Form data received:', Object.fromEntries(formData));
            resolve({ success: true, message: 'Message sent successfully!' });
        }, 2000);
    });
}

// ===== EMAIL VALIDATION ENHANCEMENT =====
function enhanceEmailValidation() {
    const emailInput = document.getElementById('email');
    if (emailInput) {
        emailInput.addEventListener('input', (e) => {
            const email = e.target.value;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (email && !emailRegex.test(email)) {
                e.target.style.borderColor = 'var(--accent-secondary)';
            } else {
                e.target.style.borderColor = 'rgba(0, 212, 255, 0.3)';
            }
        });
    }
}

// Initialize email validation enhancement
document.addEventListener('DOMContentLoaded', enhanceEmailValidation);

// ===== FIX FOR TEXTAREA SPACING ISSUE =====
document.addEventListener('DOMContentLoaded', function() {
    // Fix textarea spacing issues
    const messageTextarea = document.getElementById('message');
    if (messageTextarea) {
        // Ensure textarea allows spaces and normal text input
        messageTextarea.style.letterSpacing = 'normal';
        messageTextarea.style.wordSpacing = 'normal';
        messageTextarea.style.textTransform = 'none';
        messageTextarea.style.fontVariant = 'normal';
        
        // Add event listener to ensure text input works correctly
        messageTextarea.addEventListener('input', function(e) {
            // Ensure the value preserves spaces and formatting
            const value = e.target.value;
            console.log('Textarea input:', value); // Debug log
        });
        
        // Test placeholder
        messageTextarea.placeholder = 'Write your message here';
    }
    
    // Fix all input fields
    const allInputs = document.querySelectorAll('input, textarea, select');
    allInputs.forEach(input => {
        input.style.letterSpacing = 'normal';
        input.style.wordSpacing = 'normal';
        input.style.textTransform = 'none';
    });
});
