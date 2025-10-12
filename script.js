// Hairstyle data ကို hairstyle.js ကနေ import လုပ်မယ်

// Auto slide variables
let autoSlideInterval;
const AUTO_SLIDE_INTERVAL = 3000; // 3 seconds

// Real-time Rating Functions
function calculateAverageRating(ratings) {
    if (ratings.length === 0) return 0;
    const sum = ratings.reduce((total, rating) => total + rating, 0);
    return (sum / ratings.length).toFixed(1);
}

function generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
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

// Load ratings - empty arrays only (no storage)
function loadRealRatings() {
    console.log('🔄 Initializing empty ratings...');
    // All ratings remain as empty arrays
    console.log('✅ Ratings initialized as empty arrays');
}

// Filter System
let currentFilter = 'all';
const categories = [
    { id: 'all', name: 'အားလုံး', count: 63 },
    { id: 'fade', name: 'Fade Styles', count: 7 },
    { id: 'buzz', name: 'Buzz Cut', count: 6 },
    { id: 'undercut', name: 'Undercut', count: 5 },
    { id: 'pompadour', name: 'Pompadour', count: 5 },
    { id: 'quiff', name: 'Quiff', count: 5 },
    { id: 'side-part', name: 'Side Part', count: 5 },
    { id: 'slick-back', name: 'Slick Back', count: 5 },
    { id: 'curly', name: 'Curly Hair', count: 5 },
    { id: 'long', name: 'Long Hair', count: 5 },
    { id: 'french-crop', name: 'French Crop', count: 5 },
    { id: 'comb-over', name: 'Comb Over', count: 5 },
    { id: 'spiky', name: 'Spiky', count: 5 }
];

// DOM Elements
let hairstyleGrid, hairstyleModal, closeModal, modalTitle, imageSlider, sliderNav;
let prevSlide, nextSlide, faceType, hairLength, serviceTime, price, rating;
let starsContainer, ratingText, userRatingStars, submitRatingBtn;
let fabButton, fabMenu, infoBtn, mapBtn, contactBtn, servicesBtn, nativeShareBtn, filterBtn;
let infoModal, closeInfoModal, mapModal, closeMapModal, contactModal, closeContactModal;
let servicesModal, closeServicesModal, filterModal, closeFilterModal;

// Current slide index for the modal
let currentSlide = 0;
let currentHairstyle = null;
let userRating = 0;

// Initialize DOM Elements
function initializeDOMElements() {
    hairstyleGrid = document.getElementById('hairstyleGrid');
    hairstyleModal = document.getElementById('hairstyleModal');
    closeModal = document.getElementById('closeModal');
    modalTitle = document.getElementById('modalTitle');
    imageSlider = document.getElementById('imageSlider');
    sliderNav = document.getElementById('sliderNav');
    prevSlide = document.getElementById('prevSlide');
    nextSlide = document.getElementById('nextSlide');
    faceType = document.getElementById('faceType');
    hairLength = document.getElementById('hairLength');
    serviceTime = document.getElementById('serviceTime');
    price = document.getElementById('price');
    rating = document.getElementById('rating');
    
    if (rating) {
        starsContainer = rating.querySelector('.stars');
        ratingText = rating.querySelector('.rating-text');
    }
    
    userRatingStars = document.querySelectorAll('.user-rating .star');
    submitRatingBtn = document.getElementById('submitRating');

    // FAB Menu Elements
    fabButton = document.getElementById('fabButton');
    fabMenu = document.getElementById('fabMenu');
    infoBtn = document.getElementById('infoBtn');
    mapBtn = document.getElementById('mapBtn');
    contactBtn = document.getElementById('contactBtn');
    servicesBtn = document.getElementById('servicesBtn');
    nativeShareBtn = document.getElementById('nativeShareBtn');
    filterBtn = document.getElementById('filterBtn');

    // Modal Elements
    infoModal = document.getElementById('infoModal');
    closeInfoModal = document.getElementById('closeInfoModal');
    mapModal = document.getElementById('mapModal');
    closeMapModal = document.getElementById('closeMapModal');
    contactModal = document.getElementById('contactModal');
    closeContactModal = document.getElementById('closeContactModal');
    servicesModal = document.getElementById('servicesModal');
    closeServicesModal = document.getElementById('closeServicesModal');
    filterModal = document.getElementById('filterModal');
    closeFilterModal = document.getElementById('closeFilterModal');
}

// Start auto slide
function startAutoSlide() {
    if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
    }
    
    autoSlideInterval = setInterval(() => {
        if (currentHairstyle && currentHairstyle.images.length > 1) {
            nextSlideFunc();
        }
    }, AUTO_SLIDE_INTERVAL);
}

// Stop auto slide
function stopAutoSlide() {
    if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
    }
}

// Reset auto slide timer
function resetAutoSlide() {
    stopAutoSlide();
    if (currentHairstyle && currentHairstyle.images.length > 1) {
        startAutoSlide();
    }
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
        const avgRating = calculateAverageRating(hairstyle.userRatings);
        const card = document.createElement('div');
        card.className = 'hairstyle-card';
        card.innerHTML = `
            <img src="${hairstyle.images[0]}" alt="${hairstyle.name}" onerror="this.src='https://via.placeholder.com/300x150?text=No+Image'">
            <div class="hairstyle-info">
                <div class="hairstyle-name">${hairstyle.name}</div>
                <div class="hairstyle-price">${hairstyle.price}</div>
                <div class="rating">
                    ${generateStarRating(avgRating)} (${hairstyle.userRatings.length})
                </div>
            </div>
        `;
        card.addEventListener('click', () => openHairstyleModal(hairstyle));
        hairstyleGrid.appendChild(card);
    });
}

// Generate filter options
function generateFilterOptions() {
    const filterContainer = document.getElementById('filterOptions');
    if (!filterContainer) {
        console.error('filterOptions not found');
        return;
    }
    
    filterContainer.innerHTML = '';
    
    categories.forEach(category => {
        const filterItem = document.createElement('div');
        filterItem.className = `filter-item ${currentFilter === category.id ? 'active' : ''}`;
        filterItem.innerHTML = `
            <span class="filter-name">${category.name}</span>
            <span class="filter-count">${category.count}</span>
        `;
        filterItem.addEventListener('click', () => {
            currentFilter = category.id;
            generateHairstyleCards(category.id);
            updateActiveFilter();
            closeAllModals();
        });
        filterContainer.appendChild(filterItem);
    });
}

// Update active filter style
function updateActiveFilter() {
    document.querySelectorAll('.filter-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelectorAll('.filter-item').forEach(item => {
        if (item.querySelector('.filter-name').textContent === categories.find(cat => cat.id === currentFilter)?.name) {
            item.classList.add('active');
        }
    });
}

// Open hairstyle modal
function openHairstyleModal(hairstyle) {
    if (!hairstyleModal || !modalTitle || !faceType || !hairLength || !serviceTime || !price || !rating) {
        console.error('Required modal elements not found');
        return;
    }

    currentHairstyle = hairstyle;
    currentSlide = 0;
    userRating = 0;
    
    // Set modal content
    modalTitle.textContent = hairstyle.name;
    faceType.textContent = hairstyle.faceType;
    hairLength.textContent = hairstyle.hairLength;
    serviceTime.textContent = hairstyle.serviceTime;
    price.textContent = hairstyle.price;
    
    // Calculate and display average rating
    const avgRating = calculateAverageRating(hairstyle.userRatings);
    if (starsContainer && ratingText) {
        starsContainer.textContent = generateStarRating(avgRating);
        ratingText.textContent = ` (${hairstyle.userRatings.length} ယောက်သတ်မှတ်ထားသည်)`;
    }
    
    // Reset user rating stars
    userRatingStars.forEach(star => {
        star.classList.remove('active');
    });
    
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
                goToSlide(index);
                resetAutoSlide(); // Reset auto slide when manually clicking dots
            });
            sliderNav.appendChild(dot);
        });
    }
    
    // Show modal
    hairstyleModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    updateSlider();
    
    // Start auto slide if there are multiple images
    if (hairstyle.images.length > 1) {
        startAutoSlide();
    }
}

// Update slider position
function updateSlider() {
    if (imageSlider) {
        imageSlider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
    
    // Update active dot
    const dots = document.querySelectorAll('.slider-dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Go to specific slide
function goToSlide(index) {
    currentSlide = index;
    updateSlider();
}

// Next slide
function nextSlideFunc() {
    if (currentHairstyle && currentSlide < currentHairstyle.images.length - 1) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }
    updateSlider();
}

// Previous slide
function prevSlideFunc() {
    if (currentSlide > 0) {
        currentSlide--;
    } else if (currentHairstyle) {
        currentSlide = currentHairstyle.images.length - 1;
    }
    updateSlider();
}

// Native Share Function
async function nativeShare() {
    const websiteUrl = window.location.href;
    const websiteTitle = "Diamond Crown Barber Shop - ဆံပင်ညှပ်ဆိုင်";
    const websiteDescription = "Diamond Crown ဆံပင်ညှပ်ဆိုင်သည် အတွေ့အကြုံရှိ ဆံပင်ညှပ်ပညာရှင်များနှင့် ခေတ်မီနည်းစနစ်များဖြင့် အဆင့်မြင့် ဆံပင်ညှပ်ဝန်ဆောင်မှုများ ပေးဝေနေပါသည်။";

    if (navigator.share) {
        try {
            await navigator.share({
                title: websiteTitle,
                text: websiteDescription,
                url: websiteUrl,
            });
        } catch (error) {
            if (error.name !== 'AbortError') {
                console.error('မျှဝေရာတွင်အမှားတစ်ခုဖြစ်နေပါသည်:', error);
            }
        }
    } else {
        // Native share not supported - show simple alert
        alert('မျှဝေခြင်းအတွက် ဤ browser ကိုအထောက်အပံ့မပေးပါ။\n\nလင့်ခ်: ' + websiteUrl);
    }
}

// Toggle FAB menu
function toggleFabMenu() {
    if (fabMenu) {
        fabMenu.classList.toggle('active');
    }
}

// Close all modals
function closeAllModals() {
    const modals = [hairstyleModal, infoModal, mapModal, contactModal, servicesModal, filterModal];
    modals.forEach(modal => {
        if (modal) modal.style.display = 'none';
    });
    document.body.style.overflow = 'auto';
    
    // Stop auto slide when closing modal
    stopAutoSlide();
}

// Event Listeners
function initializeEventListeners() {
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        const modals = [hairstyleModal, infoModal, mapModal, contactModal, servicesModal, filterModal];
        modals.forEach(modal => {
            if (modal && e.target === modal) closeAllModals();
        });
    });
    
    // Close modal with close button
    if (closeModal) closeModal.addEventListener('click', closeAllModals);
    if (closeInfoModal) closeInfoModal.addEventListener('click', closeAllModals);
    if (closeMapModal) closeMapModal.addEventListener('click', closeAllModals);
    if (closeContactModal) closeContactModal.addEventListener('click', closeAllModals);
    if (closeServicesModal) closeServicesModal.addEventListener('click', closeAllModals);
    if (closeFilterModal) closeFilterModal.addEventListener('click', closeAllModals);
    
    // Slider navigation with auto slide reset
    if (prevSlide) {
        prevSlide.addEventListener('click', () => {
            prevSlideFunc();
            resetAutoSlide();
        });
    }
    if (nextSlide) {
        nextSlide.addEventListener('click', () => {
            nextSlideFunc();
            resetAutoSlide();
        });
    }
    
    // Touch events for mobile sliding
    let touchStartX = 0;
    let touchEndX = 0;
    
    if (imageSlider) {
        imageSlider.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            stopAutoSlide(); // Pause auto slide during touch
        });
        
        imageSlider.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
            resetAutoSlide(); // Resume auto slide after touch
        });
    }
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - next slide
                nextSlideFunc();
            } else {
                // Swipe right - previous slide
                prevSlideFunc();
            }
        }
    }
    
    // Pause auto slide on hover (for desktop)
    if (imageSlider) {
        imageSlider.addEventListener('mouseenter', stopAutoSlide);
        imageSlider.addEventListener('mouseleave', () => {
            if (currentHairstyle && currentHairstyle.images.length > 1 && hairstyleModal.style.display === 'block') {
                startAutoSlide();
            }
        });
    }
    
    // User rating stars
    userRatingStars.forEach(star => {
        star.addEventListener('click', () => {
            const value = parseInt(star.getAttribute('data-value'));
            userRating = value;
            
            // Update star display
            userRatingStars.forEach(s => {
                const sValue = parseInt(s.getAttribute('data-value'));
                if (sValue <= value) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
        });
    });
    
    // Submit rating - Temporary session only (no storage)
    if (submitRatingBtn) {
        submitRatingBtn.addEventListener('click', () => {
            if (userRating > 0 && currentHairstyle) {
                // Show loading state
                const originalText = submitRatingBtn.textContent;
                submitRatingBtn.textContent = 'သိမ်းဆည်းနေသည်...';
                submitRatingBtn.disabled = true;
                
                // Simulate saving process
                setTimeout(() => {
                    try {
                        // Add rating to current hairstyle for current session only
                        currentHairstyle.userRatings.push(userRating);
                        
                        // Update display
                        const avgRating = calculateAverageRating(currentHairstyle.userRatings);
                        if (starsContainer && ratingText) {
                            starsContainer.textContent = generateStarRating(avgRating);
                            ratingText.textContent = ` (${currentHairstyle.userRatings.length} ယောက်သတ်မှတ်ထားသည်)`;
                        }
                        
                        // Reset user rating
                        userRating = 0;
                        userRatingStars.forEach(star => {
                            star.classList.remove('active');
                        });
                        
                        // Update grid display
                        generateHairstyleCards(currentFilter);
                        
                        alert('ကျေးဇူးတင်ပါသည်! သင်၏ အဆင့်သတ်မှတ်ချက်ကို ယာယီသိမ်းဆည်းပြီးပါပြီ။\n(ဤအဆင့်သတ်မှတ်ချက်သည် page ကို refresh လုပ်လျှင် ပျက်သွားမည်)');
                    } catch (error) {
                        console.error('Error in rating submission:', error);
                        alert('အဆင့်သတ်မှတ်ချက် မှတ်တမ်းတင်ရာတွင် အမှားတစ်ခုဖြစ်နေပါသည်။');
                    } finally {
                        // Reset button state
                        submitRatingBtn.textContent = originalText;
                        submitRatingBtn.disabled = false;
                    }
                }, 500);
            } else {
                alert('ကျေးဇူးပြု၍ အဆင့်သတ်မှတ်ချက်ကို ရွေးချယ်ပါ။');
            }
        });
    }
    
    // FAB menu
    if (fabButton) {
        fabButton.addEventListener('click', toggleFabMenu);
    }
    
    // FAB menu items
    if (infoBtn) infoBtn.addEventListener('click', () => {
        if (infoModal) infoModal.style.display = 'block';
        if (fabMenu) fabMenu.classList.remove('active');
        document.body.style.overflow = 'hidden';
    });
    
    if (mapBtn) mapBtn.addEventListener('click', () => {
        if (mapModal) mapModal.style.display = 'block';
        if (fabMenu) fabMenu.classList.remove('active');
        document.body.style.overflow = 'hidden';
    });
    
    if (contactBtn) contactBtn.addEventListener('click', () => {
        if (contactModal) contactModal.style.display = 'block';
        if (fabMenu) fabMenu.classList.remove('active');
        document.body.style.overflow = 'hidden';
    });
    
    if (servicesBtn) servicesBtn.addEventListener('click', () => {
        if (servicesModal) servicesModal.style.display = 'block';
        if (fabMenu) fabMenu.classList.remove('active');
        document.body.style.overflow = 'hidden';
    });
    
    // Filter Button
    if (filterBtn) filterBtn.addEventListener('click', () => {
        if (filterModal) filterModal.style.display = 'block';
        if (fabMenu) fabMenu.classList.remove('active');
        document.body.style.overflow = 'hidden';
    });
    
    // Native Share Button
    if (nativeShareBtn) {
        nativeShareBtn.addEventListener('click', () => {
            nativeShare();
            if (fabMenu) fabMenu.classList.remove('active');
        });
    }
    
    // Close FAB menu when clicking outside
    document.addEventListener('click', (e) => {
        if (fabButton && fabMenu && !fabButton.contains(e.target) && !fabMenu.contains(e.target)) {
            fabMenu.classList.remove('active');
        }
    });
}

// Main initialization
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 DOM loaded, initializing app...');
    
    // Initialize DOM elements
    initializeDOMElements();
    
    // Check if hairstyles data is available
    if (typeof hairstyles === 'undefined') {
        console.error('❌ hairstyles data not found. Make sure hairstyle.js is loaded.');
        return;
    }
    
    // Initialize empty ratings
    loadRealRatings();
    
    // Generate filter options
    generateFilterOptions();
    
    // Generate hairstyle cards with empty ratings
    generateHairstyleCards();
    
    // Initialize event listeners
    initializeEventListeners();
    
    console.log('✅ App initialization complete');
});

// Touch events for mobile
document.addEventListener('touchmove', function (e) {
    // Allow scrolling
}, { passive: true });