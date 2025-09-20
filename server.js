// ===== EXPRESS SERVER FOR PORTFOLIO FUNCTIONALITY =====

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enhanced static file serving for Vercel
app.use(express.static(__dirname, {
    maxAge: '1y',
    etag: false,
    setHeaders: (res, path) => {
        if (path.endsWith('.css')) {
            res.setHeader('Content-Type', 'text/css');
        } else if (path.endsWith('.js')) {
            res.setHeader('Content-Type', 'application/javascript');
        }
    }
}));

// Specific route for CSS files to ensure they load
app.get('/*.css', (req, res) => {
    res.setHeader('Content-Type', 'text/css');
    res.sendFile(path.join(__dirname, req.path));
});

// Specific route for JS files
app.get('/*.js', (req, res) => {
    res.setHeader('Content-Type', 'application/javascript');
    res.sendFile(path.join(__dirname, req.path));
});

// Specific route for image files
app.get('/*.{jpg,jpeg,png,gif,svg,webp,ico}', (req, res) => {
    const imagePath = path.join(__dirname, req.path);
    
    // Check if image exists
    if (fs.existsSync(imagePath)) {
        res.sendFile(imagePath);
    } else {
        // Provide placeholder or default image
        res.status(404).json({ 
            error: 'Image not found',
            path: req.path,
            message: 'Please ensure images are uploaded to your repository'
        });
    }
});

// Admin credentials (in production, use proper authentication)
const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: 'space2024'
};

// ===== ROUTES =====

// Serve static files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// ===== CERTIFICATIONS ROUTES =====

// Get all certifications
app.get('/api/certifications', (req, res) => {
    try {
        const certifications = [
            {
                id: 1,
                title: 'Crash Course on Python',
                category: 'Programming',
                issuer: 'Google & Coursera',
                description: 'Intensive course on Python programming fundamentals covering data structures, functions, and object-oriented programming concepts.',
                image: 'python.jpg',
                tech: ['Python', 'Programming', 'Data Structures', 'OOP', 'Algorithms'],
                stats: [
                    { icon: 'fas fa-calendar', text: '2024' },
                    { icon: 'fas fa-clock', text: '40 Hours' },
                    { icon: 'fas fa-certificate', text: 'Verified' }
                ],
                verifyUrl: 'https://www.coursera.org/verify/LES49221JBAH',
                downloadUrl: 'python.pdf',
                published: true
            },
            {
                id: 2,
                title: 'The Web Developer Bootcamp 2024',
                category: 'Web Development',
                issuer: 'Udemy',
                description: 'Comprehensive full-stack web development course covering front-end and back-end technologies, databases, and deployment strategies.',
                image: 'web.jpg',
                tech: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'HTML5', 'CSS3'],
                stats: [
                    { icon: 'fas fa-calendar', text: '2024' },
                    { icon: 'fas fa-clock', text: '60+ Hours' },
                    { icon: 'fas fa-certificate', text: 'Verified' }
                ],
                verifyUrl: 'https://www.udemy.com/certificate/UC-a3a88382-d387-4a2e-93e2-c707ea7586d6/',
                downloadUrl: 'web.pdf',
                published: true
            },
            {
                id: 3,
                title: 'Android & Kotlin Development Masterclass',
                category: 'Mobile Development',
                issuer: 'Udemy',
                description: 'Comprehensive course on Android app development using Kotlin, covering UI design, data persistence, networking, and app deployment.',
                image: 'kotlin.jpg',
                tech: ['Kotlin', 'Android Studio', 'Mobile Development', 'UI/UX', 'Firebase'],
                stats: [
                    { icon: 'fas fa-calendar', text: '2024' },
                    { icon: 'fas fa-clock', text: '50+ Hours' },
                    { icon: 'fas fa-certificate', text: 'Verified' }
                ],
                verifyUrl: 'https://www.udemy.com/certificate/UC-c05bfd05-f93c-4876-9b84-7fd8f10dc039/',
                downloadUrl: 'kotlin.pdf',
                published: true
            },
        ];
        
        res.json({
            success: true,
            certifications: certifications
        });
    } catch (error) {
        console.error('Error fetching certifications:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch certifications'
        });
    }
});

// Get single certification
app.get('/api/certifications/:id', (req, res) => {
    try {
        const certId = parseInt(req.params.id);
        const certifications = [
            {
                id: 1,
                title: 'Crash Course on Python',
                category: 'Programming',
                issuer: 'Google & Coursera',
                description: 'Intensive course on Python programming fundamentals covering data structures, functions, and object-oriented programming concepts.',
                image: 'python.jpg',
                tech: ['Python', 'Programming', 'Data Structures', 'OOP', 'Algorithms'],
                stats: [
                    { icon: 'fas fa-calendar', text: '2024' },
                    { icon: 'fas fa-clock', text: '40 Hours' },
                    { icon: 'fas fa-certificate', text: 'Verified' }
                ],
                verifyUrl: 'https://www.coursera.org/verify/LES49221JBAH',
                downloadUrl: 'python.pdf',
                published: true
            },
            {
                id: 2,
                title: 'The Web Developer Bootcamp 2024',
                category: 'Web Development',
                issuer: 'Udemy',
                description: 'Comprehensive full-stack web development course covering front-end and back-end technologies, databases, and deployment strategies.',
                image: 'web.jpg',
                tech: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'HTML5', 'CSS3'],
                stats: [
                    { icon: 'fas fa-calendar', text: '2024' },
                    { icon: 'fas fa-clock', text: '60+ Hours' },
                    { icon: 'fas fa-certificate', text: 'Verified' }
                ],
                verifyUrl: 'https://www.udemy.com/certificate/UC-a3a88382-d387-4a2e-93e2-c707ea7586d6/',
                downloadUrl: 'web.pdf',
                published: true
            },
            {
                id: 3,
                title: 'Android & Kotlin Development Masterclass',
                category: 'Mobile Development',
                issuer: 'Udemy',
                description: 'Comprehensive course on Android app development using Kotlin, covering UI design, data persistence, networking, and app deployment.',
                image: 'kotlin.jpg',
                tech: ['Kotlin', 'Android Studio', 'Mobile Development', 'UI/UX', 'Firebase'],
                stats: [
                    { icon: 'fas fa-calendar', text: '2024' },
                    { icon: 'fas fa-clock', text: '50+ Hours' },
                    { icon: 'fas fa-certificate', text: 'Verified' }
                ],
                verifyUrl: 'https://www.udemy.com/certificate/UC-c05bfd05-f93c-4876-9b84-7fd8f10dc039/',
                downloadUrl: 'kotlin.pdf',
                published: true
            }
        ];
        
        const certification = certifications.find(cert => cert.id === certId);
        
        if (!certification) {
            return res.status(404).json({
                success: false,
                message: 'Certification not found'
            });
        }
        
        res.json({
            success: true,
            certification: certification
        });
    } catch (error) {
        console.error('Error fetching certification:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch certification'
        });
    }
});

// Get certification categories
app.get('/api/certifications/categories', (req, res) => {
    try {
        const categories = [
            'Programming',
            'Web Development',
            'Mobile Development',
            'Data Science',
            'Cloud Computing',
            'Cybersecurity',
            'DevOps'
        ];
        
        res.json({
            success: true,
            categories: categories
        });
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch categories'
        });
    }
});

// ===== CONTACT ROUTES =====

// Contact form submission
app.post('/api/contact', (req, res) => {
    try {
        const { firstName, lastName, email, subject, message, newsletter } = req.body;
        
        if (!firstName || !lastName || !email || !subject || !message) {
            return res.status(400).json({ 
                success: false,
                error: 'Missing required fields' 
            });
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ 
                success: false,
                error: 'Invalid email format' 
            });
        }
        
        // In production, you would:
        // 1. Save to database
        // 2. Send email notification to admin
        // 3. Send auto-reply to user
        // 4. Log the submission
        
        console.log('Contact form submission:', {
            firstName,
            lastName,
            email,
            subject,
            message,
            newsletter: newsletter === 'on',
            timestamp: new Date().toISOString()
        });
        
        res.json({ 
            success: true, 
            message: 'Thank you for your message! I\'ll get back to you soon.' 
        });
    } catch (error) {
        console.error('Error processing contact form:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to process contact form'
        });
    }
});

// ===== PROJECTS ROUTES =====

// Get all projects
app.get('/api/projects', (req, res) => {
    try {
        const projects = [
            {
                id: 1,
                title: 'Mobile Price Prediction',
                description: 'Machine learning model using Random Forest to predict mobile phone prices based on specifications.',
                image: 'mobile.jpg',
                category: 'Machine Learning',
                tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Streamlit'],
                github: 'https://github.com/Deveshsamant/mobile-price-prediction',
                live: 'https://mobile-price.streamlit.app/',
                status: 'completed'
            },
            {
                id: 2,
                title: 'Movie Recommendation System',
                description: 'Content-based recommendation system that suggests movies based on user preferences and movie features.',
                image: 'movie.jpg',
                category: 'Machine Learning',
                tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Streamlit'],
                github: 'https://github.com/Deveshsamant/movie-recommendation',
                live: 'https://movie-recommendation.streamlit.app/',
                status: 'completed'
            },
            {
                id: 3,
                title: 'Portfolio Website',
                description: 'Responsive portfolio website with space theme, custom animations, and interactive elements.',
                image: 'web.jpg',
                category: 'Web Development',
                tech: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Express'],
                github: 'https://github.com/Deveshsamant/portfolio',
                live: 'https://devesh-samant.vercel.app/',
                status: 'completed'
            },
            {
                id: 4,
                title: 'Android Weather App',
                description: 'Native Android weather application with real-time data and location-based forecasts.',
                image: 'kotlin.jpg',
                category: 'Mobile Development',
                tech: ['Kotlin', 'Android Studio', 'Retrofit', 'Room Database'],
                github: 'https://github.com/Deveshsamant/weather-app',
                live: '#',
                status: 'in-progress'
            }
        ];
        
        res.json({
            success: true,
            projects: projects
        });
    } catch (error) {
        console.error('Error fetching projects:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch projects'
        });
    }
});

// ===== UTILITY ROUTES =====

// Health check
app.get('/api/health', (req, res) => {
    res.json({
        success: true,
        message: 'Server is running',
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
});

// Get server info
app.get('/api/info', (req, res) => {
    res.json({
        success: true,
        info: {
            name: 'Devesh Samant Portfolio Server',
            version: '1.0.0',
            description: 'Backend server for personal portfolio website',
            author: 'Devesh Samant',
            endpoints: [
                'GET /api/certifications',
                'GET /api/certifications/:id',
                'GET /api/certifications/categories',
                'POST /api/contact',
                'GET /api/projects',
                'GET /api/health',
                'GET /api/info'
            ]
        }
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err.stack);
    res.status(500).json({ 
        success: false,
        error: 'Something went wrong!',
        message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ 
        success: false,
        error: 'Route not found',
        message: `The requested endpoint ${req.method} ${req.path} does not exist`
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`🌌 Space Portfolio Server is online!`);
    console.log(`📡 Visit: http://localhost:${PORT}`);
    console.log(`🔗 API Documentation: http://localhost:${PORT}/api/info`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('🛑 Server shutting down gracefully...');
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log('🛑 Server shutting down gracefully...');
    process.exit(0);
});

module.exports = app;