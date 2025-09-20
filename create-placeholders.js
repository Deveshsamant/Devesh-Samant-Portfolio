// Create placeholder images script
const fs = require('fs');
const path = require('path');

// Create placeholder HTML that generates image-like divs
const createPlaceholder = (name, width, height, text) => {
    return `
<!DOCTYPE html>
<html>
<head>
    <style>
        .placeholder {
            width: ${width}px;
            height: ${height}px;
            background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-family: 'Orbitron', monospace;
            font-size: ${Math.min(width, height) / 10}px;
            font-weight: bold;
            text-align: center;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
        }
    </style>
</head>
<body>
    <div class="placeholder">${text}</div>
</body>
</html>`;
};

// Image configurations
const images = [
    { name: 'myphoto.jpg', width: 400, height: 400, text: 'DEVESH\\nSAMANT' },
    { name: 'python.jpg', width: 600, height: 400, text: 'PYTHON\\nCERTIFICATION' },
    { name: 'web.jpg', width: 600, height: 400, text: 'WEB DEV\\nCERTIFICATION' },
    { name: 'kotlin.jpg', width: 600, height: 400, text: 'KOTLIN\\nCERTIFICATION' },
    { name: 'mobile.jpg', width: 800, height: 600, text: 'MOBILE PRICE\\nPREDICTION' },
    { name: 'hand.jpg', width: 800, height: 600, text: 'HAND GESTURE\\nRECOGNITION' },
    { name: 'movie.jpg', width: 800, height: 600, text: 'MOVIE\\nRECOMMENDATION' },
    { name: 'valo.webp', width: 1920, height: 1080, text: 'VALORANT\\nGAMING' },
    { name: 'cr.jpeg', width: 1920, height: 1080, text: 'CLASH ROYALE\\nGAMING' },
    { name: 'graphic.jpeg', width: 800, height: 600, text: 'GRAPHIC ERA\\nUNIVERSITY' }
];

console.log('🎨 Creating placeholder images...');

// Create placeholder files info
const placeholderInfo = images.map(img => {
    const htmlContent = createPlaceholder(img.name, img.width, img.height, img.text);
    return {
        name: img.name,
        size: `${img.width}x${img.height}`,
        html: `${img.name.split('.')[0]}-placeholder.html`
    };
});

// Create placeholder HTML files for preview
images.forEach(img => {
    const htmlContent = createPlaceholder(img.name, img.width, img.height, img.text);
    const htmlFileName = `${img.name.split('.')[0]}-placeholder.html`;
    
    try {
        fs.writeFileSync(htmlFileName, htmlContent);
        console.log(`✅ Created ${htmlFileName}`);
    } catch (error) {
        console.error(`❌ Error creating ${htmlFileName}:`, error.message);
    }
});

// Create a master preview page
const masterPreview = `
<!DOCTYPE html>
<html>
<head>
    <title>Image Placeholders Preview - Devesh Samant Portfolio</title>
    <style>
        body {
            font-family: 'Exo 2', sans-serif;
            background: #0a0a0f;
            color: white;
            padding: 2rem;
            margin: 0;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }
        .preview-item {
            background: #1a1a2e;
            padding: 1rem;
            border-radius: 10px;
            border: 1px solid rgba(0, 212, 255, 0.3);
        }
        .preview-item h3 {
            color: #00d4ff;
            margin-top: 0;
        }
        iframe {
            width: 100%;
            height: 200px;
            border: none;
            border-radius: 5px;
        }
        .info {
            margin-top: 1rem;
            font-size: 0.9rem;
            color: #b8c5d1;
        }
        h1 {
            text-align: center;
            color: #00d4ff;
            margin-bottom: 0;
        }
        .subtitle {
            text-align: center;
            color: #ff6b35;
            margin-bottom: 2rem;
        }
        .instructions {
            background: #16213e;
            padding: 1rem;
            border-radius: 8px;
            margin-bottom: 2rem;
            border-left: 4px solid #00d4ff;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🎨 Image Placeholders Preview</h1>
        <p class="subtitle">Temporary placeholders for your portfolio images</p>
        
        <div class="instructions">
            <h3>📋 Next Steps:</h3>
            <ol>
                <li>Replace these placeholders with your actual images</li>
                <li>Keep the same filenames for automatic replacement</li>
                <li>Recommended: Use the sizes shown below</li>
                <li>Commit and push to deploy your images</li>
            </ol>
        </div>

        <div class="grid">
            ${placeholderInfo.map(img => `
                <div class="preview-item">
                    <h3>${img.name}</h3>
                    <iframe src="${img.html}"></iframe>
                    <div class="info">
                        <strong>Size:</strong> ${img.size}<br>
                        <strong>Usage:</strong> ${img.name.includes('my') ? 'Profile Photo' : 
                                                  img.name.includes('python') || img.name.includes('web') || img.name.includes('kotlin') ? 'Certification' :
                                                  img.name.includes('mobile') || img.name.includes('hand') || img.name.includes('movie') ? 'Project' :
                                                  img.name.includes('valo') || img.name.includes('cr') ? 'Gaming' : 'University'}
                    </div>
                </div>
            `).join('')}
        </div>
    </div>
</body>
</html>`;

fs.writeFileSync('image-placeholders-preview.html', masterPreview);
console.log('✅ Created image-placeholders-preview.html');
console.log('🎯 Open image-placeholders-preview.html to see all placeholders');
console.log('📝 Check IMAGE-FIX-GUIDE.md for complete instructions');