// js/rating.js - IP-Based One-Time Rating System

// Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbySpSo6vS5c4q_xIOh9KBrAREufWc92A61HcXaPPxPPLTRfsKZv-i0ST_soTsHgkhSO/exec';

// Visitor IP storage
let visitorIP = null;
let hasRatedHairstyles = new Set();

// Calculate average rating
function calculateAverageRating(ratings) {
    if (!ratings || !Array.isArray(ratings) || ratings.length === 0) return 0;
    const validRatings = ratings.filter(r => !isNaN(parseFloat(r)));
    if (validRatings.length === 0) return 0;
    
    const sum = validRatings.reduce((total, rating) => total + parseFloat(rating), 0);
    return (sum / validRatings.length).toFixed(1);
}

// Generate star display
function generateStarRating(rating) {
    const numericRating = parseFloat(rating) || 0;
    const fullStars = Math.floor(numericRating);
    const halfStar = numericRating % 1 >= 0.5;
    let stars = '';
    
    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            stars += '★';
        } else if (i === fullStars && halfStar) {
            stars += '½';
        } else {
            stars += '☆';
        }
    }
    
    return stars;
}

// Get visitor IP address
async function getVisitorIP() {
    if (visitorIP) return visitorIP;
    
    try {
        // Try multiple IP detection services
        const responses = await Promise.any([
            fetch('https://api.ipify.org?format=json').then(r => r.json()),
            fetch('https://api64.ipify.org?format=json').then(r => r.json()),
            fetch('https://ipapi.co/json/').then(r => r.json())
        ]);
        
        visitorIP = responses.ip || 'unknown';
        console.log('📡 Visitor IP:', visitorIP);
        return visitorIP;
    } catch (error) {
        console.warn('⚠️ Could not get IP, using fallback');
        visitorIP = 'fallback-' + Math.random().toString(36).substr(2, 9);
        return visitorIP;
    }
}

// Load ratings and visitor data from Google Sheets
async function loadRatingsFromSheet() {
    try {
        const ip = await getVisitorIP();
        const response = await fetch(`${GOOGLE_SCRIPT_URL}?action=getRatings&visitorIP=${ip}&timestamp=${Date.now()}`);
        
        if (!response.ok) {
            throw new Error('Network error');
        }
        
        const data = await response.json();
        
        if (data.success) {
            // Update hairstyles data with ratings from sheet
            if (data.data.ratings) {
                data.data.ratings.forEach(sheetRating => {
                    const hairstyleId = parseInt(sheetRating.hairstyleId);
                    const hairstyle = hairstyles.find(h => h.id === hairstyleId);
                    if (hairstyle) {
                        hairstyle.userRatings = sheetRating.ratings
                            .map(r => parseFloat(r))
                            .filter(r => !isNaN(r) && r >= 1 && r <= 5);
                    }
                });
            }
            
            // Update visitor's rated hairstyles
            if (data.data.visitorRatings) {
                hasRatedHairstyles = new Set(data.data.visitorRatings);
                console.log('📊 Visitor has rated hairstyles:', Array.from(hasRatedHairstyles));
            }
            
            return true;
        }
        return false;
    } catch (error) {
        console.error('❌ Error loading ratings:', error);
        return false;
    }
}

// Submit rating to Google Sheets
async function submitRatingToSheet(hairstyleId, ratingValue) {
    try {
        const ip = await getVisitorIP();
        const response = await fetch(`${GOOGLE_SCRIPT_URL}?action=submitRating&hairstyleId=${hairstyleId}&rating=${ratingValue}&visitorIP=${ip}&timestamp=${Date.now()}`);
        
        if (!response.ok) {
            throw new Error('Network error');
        }
        
        const result = await response.json();
        
        if (result.success) {
            // Add to local cache
            hasRatedHairstyles.add(hairstyleId.toString());
            return { 
                success: true, 
                message: '🌟 ကျေးဇူးတင်ပါသည်! သင်၏ အဆင့်သတ်မှတ်ချက်ကို မှတ်တမ်းတင်ပြီးပါပြီ။' 
            };
        } else {
            throw new Error(result.error || 'Failed to submit rating');
        }
    } catch (error) {
        console.error('❌ Error submitting rating:', error);
        return { 
            success: false, 
            message: '❌ အဆင့်သတ်မှတ်ချက် မှတ်တမ်းတင်ရာတွင် အမှားတစ်ခုဖြစ်နေပါသည်။' 
        };
    }
}

// Check if visitor has already rated a hairstyle
function hasVisitorRated(hairstyleId) {
    return hasRatedHairstyles.has(hairstyleId.toString());
}

// Simple alert function
function showAlert(message, type = 'info') {
    // Remove existing alerts
    const existingAlerts = document.querySelectorAll('.rating-alert');
    existingAlerts.forEach(alert => alert.remove());
    
    const alert = document.createElement('div');
    alert.className = `rating-alert rating-alert-${type}`;
    
    const icons = {
        success: '✓',
        error: '✗',
        warning: '!',
        info: 'i'
    };
    
    alert.innerHTML = `
        <div class="alert-content">
            <span class="alert-icon">${icons[type] || 'i'}</span>
            <span class="alert-message">${message}</span>
            <button class="alert-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;
    
    document.body.appendChild(alert);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
        if (alert.parentNode) {
            alert.remove();
        }
    }, 4000);
}

// Update submit button state
function updateSubmitButton(isLoading, isRated = false) {
    const submitBtn = document.getElementById('submitRating');
    if (!submitBtn) return;
    
    if (isLoading) {
        submitBtn.innerHTML = '⏳ မှတ်တမ်းတင်နေသည်...';
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.7';
    } else if (isRated) {
        submitBtn.innerHTML = '✅ သတ်မှတ်ပြီးပြီ';
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.5';
    } else {
        submitBtn.innerHTML = '⭐ အဆင့်သတ်မှတ်ပါ';
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
    }
}

// Update rating display
function updateRatingDisplay(hairstyle) {
    if (!hairstyle) return;
    
    const avgRating = calculateAverageRating(hairstyle.userRatings);
    const starsContainer = document.querySelector('.stars');
    const ratingText = document.querySelector('.rating-text');
    
    if (starsContainer && ratingText) {
        starsContainer.textContent = generateStarRating(avgRating);
        ratingText.textContent = ` (${hairstyle.userRatings.length} ယောက်သတ်မှတ်ထားသည်)`;
    }
}

// Update UI based on rating status
function updateUIBasedOnRatingStatus(hairstyleId) {
    const stars = document.querySelectorAll('.user-rating .star');
    const submitBtn = document.getElementById('submitRating');
    
    if (hasVisitorRated(hairstyleId)) {
        // Visitor has already rated this hairstyle
        stars.forEach(star => {
            star.style.opacity = '0.5';
            star.style.cursor = 'not-allowed';
        });
        updateSubmitButton(false, true);
        showAlert('ℹ️ ဤဆံပင်ပုံစံကို သင်အဆင့်သတ်မှတ်ပြီးသားဖြစ်ပါသည်။', 'info');
    } else {
        // Visitor can rate this hairstyle
        stars.forEach(star => {
            star.style.opacity = '1';
            star.style.cursor = 'pointer';
        });
        updateSubmitButton(false, false);
    }
}

// Initialize rating system
function initializeRatingSystem() {
    const stars = document.querySelectorAll('.user-rating .star');
    const submitBtn = document.getElementById('submitRating');
    
    if (!stars.length || !submitBtn) {
        setTimeout(initializeRatingSystem, 500);
        return;
    }
    
    let selectedRating = 0;
    
    // Star click events
    stars.forEach(star => {
        star.addEventListener('click', function() {
            if (!window.currentHairstyle || hasVisitorRated(window.currentHairstyle.id)) {
                return; // Don't allow rating if already rated
            }
            
            const rating = parseInt(this.getAttribute('data-value'));
            selectedRating = rating;
            
            // Update star display
            stars.forEach(s => {
                const sRating = parseInt(s.getAttribute('data-value'));
                if (sRating <= rating) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
        });
    });
    
    // Submit button click event
    submitBtn.addEventListener('click', async function() {
        if (!window.currentHairstyle) {
            showAlert('❌ ဆံပင်ပုံစံရွေးချယ်မှုမရှိပါ။', 'error');
            return;
        }
        
        if (hasVisitorRated(window.currentHairstyle.id)) {
            showAlert('⚠️ ဤဆံပင်ပုံစံကို သင်အဆင့်သတ်မှတ်ပြီးသားဖြစ်ပါသည်။', 'warning');
            return;
        }
        
        if (selectedRating === 0) {
            showAlert('⭐ ကျေးဇူးပြု၍ အဆင့်သတ်မှတ်ချက်ကို ရွေးချယ်ပါ။', 'warning');
            return;
        }
        
        // Show loading
        updateSubmitButton(true);
        
        try {
            const result = await submitRatingToSheet(window.currentHairstyle.id, selectedRating);
            
            if (result.success) {
                showAlert(result.message, 'success');
                
                // Reload ratings to get updated data
                await loadRatingsFromSheet();
                
                // Update display
                updateRatingDisplay(window.currentHairstyle);
                updateUIBasedOnRatingStatus(window.currentHairstyle.id);
                
                // Update grid
                if (window.CoreApp && window.CoreApp.generateHairstyleCards && window.currentFilter) {
                    window.CoreApp.generateHairstyleCards(window.currentFilter);
                }
                
                // Reset stars
                selectedRating = 0;
                stars.forEach(star => star.classList.remove('active'));
                
            } else {
                showAlert(result.message, 'error');
                updateSubmitButton(false, false);
            }
        } catch (error) {
            showAlert('❌ မှတ်တမ်းတင်ရာတွင် အမှားတစ်ခုဖြစ်နေပါသည်။', 'error');
            updateSubmitButton(false, false);
        }
    });
}

// Monitor modal openings to update rating status
function monitorModalOpenings() {
    const originalOpenModal = window.openHairstyleModal;
    if (originalOpenModal) {
        window.openHairstyleModal = function(hairstyle) {
            originalOpenModal(hairstyle);
            
            // Update UI based on whether visitor has rated this hairstyle
            setTimeout(() => {
                updateUIBasedOnRatingStatus(hairstyle.id);
            }, 100);
        };
    }
}

// Add styles
function addStyles() {
    if (!document.querySelector('#rating-styles')) {
        const style = document.createElement('style');
        style.id = 'rating-styles';
        style.textContent = `
            .rating-alert {
                position: fixed;
                top: 20px;
                right: 20px;
                background: white;
                border-radius: 8px;
                padding: 12px 16px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                border-left: 4px solid #ddd;
                z-index: 10000;
                max-width: 400px;
                animation: slideInRight 0.3s ease;
                font-family: 'Pyidaungsu', 'Myanmar3', 'Noto Sans Myanmar', sans-serif;
                font-size: 14px;
            }
            
            .rating-alert-success {
                border-left-color: #00b894;
                background: #00b894;
                color: white;
            }
            
            .rating-alert-error {
                border-left-color: #e17055;
                background: #e17055;
                color: white;
            }
            
            .rating-alert-warning {
                border-left-color: #fdcb6e;
                background: #fdcb6e;
                color: white;
            }
            
            .rating-alert-info {
                border-left-color: #74b9ff;
                background: #74b9ff;
                color: white;
            }
            
            .alert-content {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 10px;
            }
            
            .alert-icon {
                font-weight: bold;
                font-size: 16px;
            }
            
            .alert-message {
                flex: 1;
            }
            
            .alert-close {
                background: none;
                border: none;
                color: inherit;
                font-size: 18px;
                cursor: pointer;
                padding: 0;
                width: 20px;
                height: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 0.7;
            }
            
            .alert-close:hover {
                opacity: 1;
            }
            
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            .user-rating .star.active {
                color: #ffc107;
            }
            
            #submitRating:disabled {
                cursor: not-allowed;
            }
            
            .user-rating .star {
                transition: all 0.2s ease;
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize
async function initializeRatings() {
    addStyles();
    monitorModalOpenings();
    
    // Load ratings and visitor data
    await loadRatingsFromSheet();
    
    // Initialize event listeners
    initializeRatingSystem();
    
    // Update grid display
    if (window.CoreApp && window.CoreApp.generateHairstyleCards && window.currentFilter) {
        window.CoreApp.generateHairstyleCards(window.currentFilter);
    }
    
    console.log('✅ Rating system initialized with IP protection');
}

// Export functions
window.RatingSystem = {
    calculateAverageRating,
    generateStarRating,
    loadRatingsFromSheet,
    submitRatingToSheet,
    hasVisitorRated,
    initializeRatingSystem,
    initializeRatings,
    updateRatingDisplay
};

// Start when ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeRatings);
} else {
    initializeRatings();
}