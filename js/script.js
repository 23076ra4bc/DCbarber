// script.js - Core application functionality

// Global variables
window.currentFilter = 'all';
window.currentSlide = 0;
window.currentHairstyle = null;

// DOM Elements
let hairstyleGrid, hairstyleModal, modalTitle, imageSlider, sliderNav;
let faceType, hairLength, serviceTime, price, rating;

// Initialize DOM Elements
function initializeDOMElements() {
    hairstyleGrid = document.getElementById('hairstyleGrid');
    hairstyleModal = document.getElementById('hairstyleModal');
    modalTitle = document.getElementById('modalTitle');
    imageSlider = document.getElementById('imageSlider');
    sliderNav = document.getElementById('sliderNav');
    faceType = document.getElementById('faceType');
    hairLength = document.getElementById('hairLength');
    serviceTime = document.getElementById('serviceTime');
    price = document.getElementById('price');
    rating = document.getElementById('rating');
}

// Generate hairstyle cards with filter
function generateHairstyleCards(filter = 'all') {
    if (!hairstyleGrid) {
        console.error('hairstyleGrid not found');
        return;
    }
    
    hairstyleGrid.innerHTML = '';
    
    const filteredHairstyles = filter === 'all' 
        ? hairstyles 
        : hairstyles.filter(style => style.category === filter);
    
    if (filteredHairstyles.length === 0) {
        hairstyleGrid.innerHTML = `
            <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #666;">
                <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 15px; opacity: 0.5;"></i>
                <h3>မတွေ့ပါ</h3>
                <p>ဤအမျိုးအစားအတွက် ဆံပင်ပုံစံများ မရှိပါ</p>
            </div>
        `;
        return;
    }
    
    filteredHairstyles.forEach(hairstyle => {
        const avgRating = window.RatingSystem.calculateAverageRating(hairstyle.userRatings);
        const card = document.createElement('div');
        card.className = 'hairstyle-card';
        card.innerHTML = `
            <img src="${hairstyle.images[0]}" alt="${hairstyle.name}" onerror="this.src='https://via.placeholder.com/300x150?text=No+Image'">
            <div class="hairstyle-info">
                <div class="hairstyle-name">${hairstyle.name}</div>
                <div class="hairstyle-price">${hairstyle.price}</div>
                <div class="rating">
                    ${window.RatingSystem.generateStarRating(avgRating)} (${hairstyle.userRatings.length})
                </div>
            </div>
        `;
        card.addEventListener('click', () => openHairstyleModal(hairstyle));
        hairstyleGrid.appendChild(card);
    });
}

// Open hairstyle modal
function openHairstyleModal(hairstyle) {
    if (!hairstyleModal || !modalTitle || !faceType || !hairLength || !serviceTime || !price || !rating) {
        console.error('Required modal elements not found');
        return;
    }

    window.currentHairstyle = hairstyle;
    window.currentSlide = 0;
    
    // Set modal content
    modalTitle.textContent = hairstyle.name;
    faceType.textContent = hairstyle.faceType;
    hairLength.textContent = hairstyle.hairLength;
    serviceTime.textContent = hairstyle.serviceTime;
    price.textContent = hairstyle.price;
    
    // Calculate and display average rating
    const avgRating = window.RatingSystem.calculateAverageRating(hairstyle.userRatings);
    const starsContainer = rating.querySelector('.stars');
    const ratingText = rating.querySelector('.rating-text');
    
    if (starsContainer && ratingText) {
        starsContainer.textContent = window.RatingSystem.generateStarRating(avgRating);
        ratingText.textContent = ` (${hairstyle.userRatings.length} ယောက်သတ်မှတ်ထားသည်)`;
    }
    
    // Clear previous slides and dots
    if (imageSlider && sliderNav) {
        imageSlider.innerHTML = '';
        sliderNav.innerHTML = '';
        
        // Add slides
        hairstyle.images.forEach((image, index) => {
            const slide = document.createElement('div');
            slide.className = 'slide';
            slide.innerHTML = `<img src="${image}" alt="${hairstyle.name} ${index + 1}" onerror="this.src='https://via.placeholder.com/500x250?text=No+Image'">`;
            imageSlider.appendChild(slide);
            
            // Add dots
            const dot = document.createElement('div');
            dot.className = `slider-dot ${index === 0 ? 'active' : ''}`;
            dot.addEventListener('click', () => {
                window.SliderSystem.goToSlide(index);
                window.SliderSystem.resetAutoSlide();
            });
            sliderNav.appendChild(dot);
        });
    }
    
    // Show modal
    hairstyleModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    window.SliderSystem.updateSlider();
    
    // Start auto slide if there are multiple images
    if (hairstyle.images.length > 1) {
        window.SliderSystem.startAutoSlide();
    }
}

// Main initialization - ဒီလိုပြောင်းပါ
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 DOM loaded, initializing app...');
    
    // Initialize DOM elements first
    initializeDOMElements();
    
    // Check if hairstyles data is available
    if (typeof hairstyles === 'undefined') {
        console.error('❌ hairstyles data not found. Make sure hairstyle.js is loaded.');
        return;
    }
    
    // Generate hairstyle cards immediately (don't wait for ratings)
    generateHairstyleCards();
    
    // Initialize all other systems
    if (window.ModalSystem) {
        window.ModalSystem.initializeModalSystem();
    }
    
    if (window.SliderSystem) {
        window.SliderSystem.initializeSliderSystem();
    }
    
    if (window.FABSystem) {
        window.FABSystem.initializeFABSystem();
    }
    
    if (window.FilterSystem) {
        window.FilterSystem.generateFilterOptions();
    }
    
    // Ratings will initialize automatically with delay
    console.log('✅ App initialization complete');
});

// script.js - Add this debug code
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 DOM loaded, initializing app...');
    
    // Test if alerts work immediately
    setTimeout(() => {
        if (window.showSimpleAlert) {
            console.log('✅ showSimpleAlert function is available');
            window.showSimpleAlert('System loaded successfully!', 'success');
        } else {
            console.error('❌ showSimpleAlert function NOT available');
        }
    }, 1000);
    
    // ... rest of your existing code
});
// Export core functions
window.CoreApp = {
    generateHairstyleCards,
    openHairstyleModal
};

// Touch events for mobile
document.addEventListener('touchmove', function (e) {
    // Allow scrolling
}, { passive: true });