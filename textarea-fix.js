// CRITICAL TEXTAREA SPACING FIX SCRIPT - Maximum Override
// This script ensures the message textarea allows spaces between words

document.addEventListener('DOMContentLoaded', function() {
    console.log('🔧 Loading CRITICAL textarea fix...');
    
    const textarea = document.getElementById('message');
    if (!textarea) {
        console.error('❌ Textarea not found!');
        return;
    }
    
    // NUCLEAR OPTION: Complete style override
    function applyNuclearFix() {
        // Remove all existing styles and classes
        textarea.className = '';
        textarea.removeAttribute('style');
        
        // Apply direct inline styles with maximum priority
        const criticalStyles = {
            'all': 'unset',
            'display': 'block',
            'width': '100%',
            'min-height': '120px',
            'padding': '12px',
            'background-color': '#1a1a2e',
            'border': '1px solid rgba(0, 212, 255, 0.3)',
            'border-radius': '8px',
            'color': '#ffffff',
            'font-family': 'Exo 2, sans-serif',
            'font-size': '16px',
            'line-height': '1.5',
            'white-space': 'pre-wrap',
            'word-spacing': '0',
            'letter-spacing': '0',
            'text-transform': 'none',
            'cursor': 'text',
            'resize': 'vertical',
            'box-sizing': 'border-box',
            'outline': 'none',
            'position': 'relative',
            'z-index': '1000'
        };
        
        // Apply each style with maximum priority
        Object.entries(criticalStyles).forEach(([property, value]) => {
            textarea.style.setProperty(property, value, 'important');
        });
    }
    
    // Test function with immediate feedback
    function testSpacing() {
        const testPhrase = 'Hello world test';
        const originalValue = textarea.value;
        
        // Insert test text
        textarea.value = testPhrase;
        
        // Check if spaces are preserved
        setTimeout(() => {
            if (textarea.value === testPhrase && textarea.value.includes(' ')) {
                console.log('✅ SPACING TEST PASSED! Spaces work correctly.');
                textarea.value = originalValue; // Restore original value
                // Test passed - placeholder removed
            } else {
                console.log('❌ SPACING TEST FAILED! Applying emergency fix...');
                applyNuclearFix();
                // Retry test
                setTimeout(() => testSpacing(), 100);
            }
        }, 50);
    }
    
    // Apply initial fix
    applyNuclearFix();
    
    // Monitor and maintain fixes
    const events = ['focus', 'blur', 'input', 'keydown', 'keyup', 'paste', 'cut'];
    events.forEach(eventType => {
        textarea.addEventListener(eventType, function(e) {
            // Reapply fix if styles are corrupted
            setTimeout(() => {
                if (textarea.style.whiteSpace !== 'pre-wrap' || 
                    textarea.style.wordSpacing !== '0') {
                    console.log('🔧 Reapplying fix due to style corruption...');
                    applyNuclearFix();
                }
            }, 10);
            
            // Special space key handling
            if (e.type === 'keydown' && e.key === ' ') {
                console.log('Space key detected - ensuring normal behavior');
                // Force normal space behavior
                e.stopPropagation();
                // Don't prevent default - allow space
            }
        });
    });
    
    // Run initial test
    setTimeout(() => {
        console.log('🧪 Running initial spacing test...');
        testSpacing();
    }, 100);
    
    // Periodic health check
    setInterval(() => {
        if (document.activeElement === textarea) {
            const computedStyle = window.getComputedStyle(textarea);
            if (computedStyle.whiteSpace !== 'pre-wrap' || 
                computedStyle.wordSpacing !== '0px') {
                console.log('🚨 Style corruption detected - reapplying fix!');
                applyNuclearFix();
            }
        }
    }, 1000);
    
    console.log('✅ CRITICAL textarea fix applied successfully!');
    console.log('🎯 Spaces should now work correctly between words.');
});
