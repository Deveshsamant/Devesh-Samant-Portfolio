#!/usr/bin/env node

// ===== INSTALLATION SCRIPT FOR DEVESH SAMANT PORTFOLIO =====

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Installing Devesh Samant Portfolio...\n');

// Check if Node.js is installed
function checkNodeVersion() {
    try {
        const version = process.version;
        const majorVersion = parseInt(version.slice(1).split('.')[0]);
        
        if (majorVersion < 14) {
            console.error('❌ Node.js version 14 or higher is required');
            console.error(`   Current version: ${version}`);
            process.exit(1);
        }
        
        console.log(`✅ Node.js version: ${version}`);
        return true;
    } catch (error) {
        console.error('❌ Node.js is not installed');
        console.error('   Please install Node.js from https://nodejs.org/');
        process.exit(1);
    }
}

// Install dependencies
function installDependencies() {
    try {
        console.log('📦 Installing dependencies...');
        execSync('npm install', { stdio: 'inherit' });
        console.log('✅ Dependencies installed successfully');
        return true;
    } catch (error) {
        console.error('❌ Failed to install dependencies');
        console.error('   Please run: npm install');
        return false;
    }
}

// Create necessary directories
function createDirectories() {
    const dirs = ['uploads', 'logs'];
    
    dirs.forEach(dir => {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
            console.log(`📁 Created directory: ${dir}`);
        }
    });
}

// Check if all required files exist
function checkRequiredFiles() {
    const requiredFiles = [
        'index.html',
        'about.html',
        'projects.html',
        'blog.html',
        'contact.html',
        'styles.css',
        'script.js',
        'server.js',
        'package.json'
    ];
    
    const missingFiles = requiredFiles.filter(file => !fs.existsSync(file));
    
    if (missingFiles.length > 0) {
        console.error('❌ Missing required files:');
        missingFiles.forEach(file => console.error(`   - ${file}`));
        return false;
    }
    
    console.log('✅ All required files present');
    return true;
}

// Display success message
function displaySuccessMessage() {
    console.log('\n🎉 Installation completed successfully!');
    console.log('\n📋 Next steps:');
    console.log('   1. Start the development server: npm run dev');
    console.log('   2. Open your browser: http://localhost:3000');
    console.log('   3. For production: npm start');
    console.log('\n🔧 Admin Panel:');
    console.log('   Username: admin');
    console.log('   Password: space2024');
    console.log('\n📚 Documentation: README.md');
    console.log('\n🌟 Enjoy exploring the digital cosmos!');
}

// Main installation process
function main() {
    console.log('🌌 Devesh Samant - Space Portfolio');
    console.log('=====================================\n');
    
    // Check Node.js version
    if (!checkNodeVersion()) {
        return;
    }
    
    // Check required files
    if (!checkRequiredFiles()) {
        return;
    }
    
    // Create directories
    createDirectories();
    
    // Install dependencies
    if (!installDependencies()) {
        return;
    }
    
    // Display success message
    displaySuccessMessage();
}

// Run installation
main();
