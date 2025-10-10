
// Hairstyle data - ဆံပင်ပုံစံ ၁၆ မျိုး (No fake ratings)
const hairstyles = [
    {
        id: 1,
        name: "Classic Fade",
        price: "၃၀၀၀ ကျပ်",
        images: [
            "images/classic-fade-1.jpg",
            "images/classic-fade-2.jpg",
            "images/classic-fade-3.jpg"
        ],
        faceType: "ဘဲဥပုံ၊ စတုရန်းပုံ",
        hairLength: "၁ လက်မမှ ၃ လက်မအထိ",
        serviceTime: "မိနစ် ၃၀",
        userRatings: []
    },
    {
        id: 2,
        name: "Pompadour",
        price: "၃၀၀၀ ကျပ်",
        images: [
            "images/pompadour-1.jpg",
            "images/pompadour-2.jpg",
            "images/pompadour-3.jpg"
        ],
        faceType: "ဘဲဥပုံ၊ ရှည်လျားသောပုံ",
        hairLength: "၄ လက်မမှ ၆ လက်မအထိ",
        serviceTime: "မိနစ် ၄၅",
        userRatings: []
    },
    {
        id: 3,
        name: "Undercut",
        price: "၃၀၀၀ ကျပ်",
        images: [
            "images/undercut-1.jpg",
            "images/undercut-2.jpg",
            "images/undercut-3.jpg"
        ],
        faceType: "စတုရန်းပုံ၊ ဝိုင်းဝိုင်းပုံ",
        hairLength: "၃ လက်မမှ ၅ လက်မအထိ",
        serviceTime: "မိနစ် ၄၀",
        userRatings: []
    },
    {
        id: 4,
        name: "Hight Fade",
        price: "၃၀၀၀ ကျပ်",
        images: [
            "images/hight-fade-3.jpg",
            "images/hight-fade-2.jpg",
            "images/hight-fade-1.jpg"
        ],
        faceType: "အားလုံးသော မျက်နှာအမျိုးအစားများ",
        hairLength: "၀.၅ လက်မမှ 3 လက်မအထိ",
        serviceTime: "မိနစ် ၃၀",
        userRatings: []
    },
      {
        id: 5,
        name: "Textured Crop",
        price: "၃၀၀၀ ကျပ်",
        images: [
            "images/textured-crop-1.jpg",
            "images/textured-crop-2.jpg",
            "images/textured-crop-3.jpg"
        ],
        faceType: "ဝိုင်းဝိုင်းပုံ၊ ဘဲဥပုံ",
        hairLength: "၂ လက်မမှ ၄ လက်မအထိ",
        serviceTime: "မိနစ် ၃၅",
        userRatings: []
    },
    {
        id: 6,
        name: "Buzz Cut",
        price: "၃၀၀၀ ကျပ်",
        images: [
            "images/buzz-cut-1.jpg",
            "images/buzz-cut-2.jpg",
            "images/buzz-cut-3.jpg"
        ],
        faceType: "အားလုံးသော မျက်နှာအမျိုးအစားများ",
        hairLength: "၀.၅ လက်မမှ ၁ လက်မအထိ",
        serviceTime: "မိနစ် ၂၀",
        userRatings: []
    },
    {
        id: 7,
        name: "Slick Back",
        price: "၃၀၀၀ ကျပ်",
        images: [
            "images/slick-back-1.jpg",
            "images/slick-back-2.jpg",
            "images/slick-back-3.jpg"
        ],
        faceType: "ဘဲဥပုံ၊ စတုရန်းပုံ",
        hairLength: "၄ လက်မမှ ၇ လက်မအထိ",
        serviceTime: "မိနစ် ၅၀",
        userRatings: []
    },
    
    {
        id: 8,
        name: "Side Part",
        price: "၃၀၀၀ ကျပ်",
        images: [
            "images/side-part-1.jpg",
            "images/side-part-2.jpg",
            "images/side-part-3.jpg"
        ],
        faceType: "ဘဲဥပုံ၊ စတုရန်းပုံ",
        hairLength: "၃ လက်မမှ ၅ လက်မအထိ",
        serviceTime: "မိနစ် ၃၀",
        userRatings: []
    },
    {
        id: 9,
        name: "Quiff",
        price: "၃၀၀၀ ကျပ်",
        images: [
            "images/quiff-1.jpg",
            "images/quiff-2.jpg",
            "images/quiff-3.jpg"
        ],
        faceType: "ဘဲဥပုံ၊ နှလုံးပုံ",
        hairLength: "၄ လက်မမှ ၆ လက်မအထိ",
        serviceTime: "မိနစ် ၄၅",
        userRatings: []
    },
    {
        id: 10,
        name: "Man Bun",
        price: "၃၀၀၀ ကျပ်",
        images: [
            "images/man-bun-1.jpg",
            "images/man-bun-2.jpg",
            "images/man-bun-3.jpg"
        ],
        faceType: "ဘဲဥပုံ၊ စတုရန်းပုံ",
        hairLength: "၆ လက်မအထက်",
        serviceTime: "မိနစ် ၂၅",
        userRatings: []
    },
    {
        id: 11,
        name: "Taper Fade",
        price: "၃၀၀၀ ကျပ်",
        images: [
            "images/taper-fade-1.jpg",
            "images/taper-fade-2.jpg",
            "images/taper-fade-3.jpg"
        ],
        faceType: "အားလုံးသော မျက်နှာအမျိုးအစားများ",
        hairLength: "၂ လက်မမှ ၄ လက်မအထိ",
        serviceTime: "မိနစ် ၃၅",
        userRatings: []
    },
    {
        id: 12,
        name: "Modern Fade",
        price: "၃၀၀၀ ကျပ်",
        images: [
            "images/modern-fade-1.jpg",
            "images/modern-fade-2.jpg",
            "images/modern-fade-3.jpg"
        ],
        faceType: "အားလုံးသော မျက်နှာအမျိုးအစားများ",
        hairLength: "၂ လက်မမှ ၅ လက်မအထိ",
        serviceTime: "မိနစ် ၄၀",
        userRatings: []
    },
    {
        id: 13,
        name: "Curly Fade",
        price: "၃၀၀၀ ကျပ်",
        images: [
            "images/curly-fade-1.jpg",
            "images/curly-fade-2.jpg",
            "images/curly-fade-3.jpg"
        ],
        faceType: "ဘဲဥပုံ၊ စတုရန်းပုံ",
        hairLength: "၃ လက်မမှ ၆ လက်မအထိ",
        serviceTime: "မိနစ် ၅၀",
        userRatings: []
    },
    {
        id: 14,
        name: "Classic Cut",
        price: "၃၀၀၀ ကျပ်",
        images: [
            "images/classic-cut-1.jpg",
            "images/classic-cut-2.jpg",
            "images/classic-cut-3.jpg"
        ],
        faceType: "အားလုံးသော မျက်နှာအမျိုးအစားများ",
        hairLength: "၂ လက်မမှ ၄ လက်မအထိ",
        serviceTime: "မိနစ် ၂၅",
        userRatings: []
    },
    {
        id: 15,
        name: "Modern Cut",
        price: "၃၀၀၀ ကျပ်",
        images: [
            "images/modern-cut-1.jpg",
            "images/modern-cut-2.jpg",
            "images/modern-cut-3.jpg"
        ],
        faceType: "ဘဲဥပုံ၊ စတုရန်းပုံ",
        hairLength: "၃ လက်မမှ ၇ လက်မအထိ",
        serviceTime: "မိနစ် ၆၀",
        userRatings: []
    },
    {
        id: 16,
        name: "Kids Cut",
        price: "၃၀၀၀ ကျပ်",
        images: [
            "images/kids-cut-1.jpg",
            "images/kids-cut-2.jpg",
            "images/kids-cut-3.jpg"
        ],
        faceType: "အားလုံးသော မျက်နှာအမျိုးအစားများ",
        hairLength: "၁ လက်မမှ ၄ လက်မအထိ",
        serviceTime: "မိနစ် ၂၀",
        userRatings: []
    }
];

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

// Server Communication Functions
async function submitRatingToServer(hairstyleId, ratingValue) {
    try {
        console.log('🔄 Submitting rating to server...', { hairstyleId, ratingValue });
        
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                action: 'submit_rating',
                hairstyle_id: hairstyleId,
                rating: ratingValue,
                timestamp: new Date().toISOString()
            })
        });
        
        console.log('📨 Response status:', response.status);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        console.log('✅ Server response:', result);
        
        return result.success;
        
    } catch (error) {
        console.error('❌ Rating submit error:', error);
        // Fallback to local storage
        storeRatingLocally(hairstyleId, ratingValue);
        return true; // Return true to continue flow
    }
}

async function getRatingsFromServer() {
    try {
        console.log('🔄 Fetching ratings from server...');
        const url = `${GOOGLE_SCRIPT_URL}?action=get_ratings&t=${Date.now()}`;
        
        const response = await fetch(url);
        console.log('📨 Response status:', response.status);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('✅ Server ratings data:', data);
        
        if (data.success && data.ratings) {
            return data.ratings;
        } else {
            throw new Error('Invalid response format from server');
        }
        
    } catch (error) {
        console.error('❌ Ratings fetch error:', error);
        // Fallback to local storage
        return getLocalRatings();
    }
}

// Local storage fallback functions
function storeRatingLocally(hairstyleId, ratingValue) {
    try {
        const localRatings = JSON.parse(localStorage.getItem('barber_ratings') || '{}');
        if (!localRatings[hairstyleId]) {
            localRatings[hairstyleId] = [];
        }
        localRatings[hairstyleId].push(ratingValue);
        localStorage.setItem('barber_ratings', JSON.stringify(localRatings));
        console.log('💾 Rating stored locally');
    } catch (error) {
        console.error('❌ Local storage error:', error);
    }
}

function getLocalRatings() {
    try {
        const ratings = JSON.parse(localStorage.getItem('barber_ratings') || '{}');
        console.log('💾 Local ratings loaded:', ratings);
        return ratings;
    } catch (error) {
        console.error('❌ Local storage read error:', error);
        return {};
    }
}

// Update hairstyles data with real ratings from server
async function loadRealRatings() {
    try {
        console.log('🔄 Loading ratings from server...');
        const serverRatings = await getRatingsFromServer();
        
        if (serverRatings && Object.keys(serverRatings).length > 0) {
            hairstyles.forEach(hairstyle => {
                if (serverRatings[hairstyle.id] && Array.isArray(serverRatings[hairstyle.id])) {
                    hairstyle.userRatings = serverRatings[hairstyle.id];
                } else {
                    hairstyle.userRatings = [];
                }
            });
            console.log('✅ Real ratings loaded from server');
        } else {
            console.log('ℹ️ No ratings found, using empty arrays');
        }
    } catch (error) {
        console.error('❌ Error loading ratings:', error);
    }
}

// DOM Elements
const hairstyleGrid = document.getElementById('hairstyleGrid');
const hairstyleModal = document.getElementById('hairstyleModal');
const closeModal = document.getElementById('closeModal');
const modalTitle = document.getElementById('modalTitle');
const imageSlider = document.getElementById('imageSlider');
const sliderNav = document.getElementById('sliderNav');
const prevSlide = document.getElementById('prevSlide');
const nextSlide = document.getElementById('nextSlide');
const faceType = document.getElementById('faceType');
const hairLength = document.getElementById('hairLength');
const serviceTime = document.getElementById('serviceTime');
const price = document.getElementById('price');
const rating = document.getElementById('rating');
const starsContainer = rating.querySelector('.stars');
const ratingText = rating.querySelector('.rating-text');
const userRatingStars = document.querySelectorAll('.user-rating .star');
const submitRatingBtn = document.getElementById('submitRating');

// FAB Menu Elements
const fabButton = document.getElementById('fabButton');
const fabMenu = document.getElementById('fabMenu');
const infoBtn = document.getElementById('infoBtn');
const mapBtn = document.getElementById('mapBtn');
const contactBtn = document.getElementById('contactBtn');
const servicesBtn = document.getElementById('servicesBtn');
const nativeShareBtn = document.getElementById('nativeShareBtn');

// Modal Elements
const infoModal = document.getElementById('infoModal');
const closeInfoModal = document.getElementById('closeInfoModal');
const mapModal = document.getElementById('mapModal');
const closeMapModal = document.getElementById('closeMapModal');
const contactModal = document.getElementById('contactModal');
const closeContactModal = document.getElementById('closeContactModal');
const servicesModal = document.getElementById('servicesModal');
const closeServicesModal = document.getElementById('closeServicesModal');

// Current slide index for the modal
let currentSlide = 0;
let currentHairstyle = null;
let userRating = 0;

// Generate hairstyle cards
function generateHairstyleCards() {
    hairstyleGrid.innerHTML = '';
    hairstyles.forEach(hairstyle => {
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

// Open hairstyle modal
function openHairstyleModal(hairstyle) {
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
    starsContainer.textContent = generateStarRating(avgRating);
    ratingText.textContent = ` (${hairstyle.userRatings.length} ယောက်သတ်မှတ်ထားသည်)`;
    
    // Reset user rating stars
    userRatingStars.forEach(star => {
        star.classList.remove('active');
    });
    
    // Clear previous slides and dots
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
        dot.addEventListener('click', () => goToSlide(index));
        sliderNav.appendChild(dot);
    });
    
    // Show modal
    hairstyleModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    updateSlider();
}

// Update slider position
function updateSlider() {
    imageSlider.style.transform = `translateX(-${currentSlide * 100}%)`;
    
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
    if (currentSlide < currentHairstyle.images.length - 1) {
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
    } else {
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
    fabMenu.classList.toggle('active');
}

// Close all modals
function closeAllModals() {
    hairstyleModal.style.display = 'none';
    infoModal.style.display = 'none';
    mapModal.style.display = 'none';
    contactModal.style.display = 'none';
    servicesModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Event Listeners
document.addEventListener('DOMContentLoaded', async () => {
    console.log('🚀 DOM loaded, initializing app...');
    
    // Load real ratings from server first
    await loadRealRatings();
    
    // Generate hairstyle cards with real ratings
    generateHairstyleCards();
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === hairstyleModal) closeAllModals();
        if (e.target === infoModal) closeAllModals();
        if (e.target === mapModal) closeAllModals();
        if (e.target === contactModal) closeAllModals();
        if (e.target === servicesModal) closeAllModals();
    });
    
    // Close modal with close button
    closeModal.addEventListener('click', closeAllModals);
    closeInfoModal.addEventListener('click', closeAllModals);
    closeMapModal.addEventListener('click', closeAllModals);
    closeContactModal.addEventListener('click', closeAllModals);
    closeServicesModal.addEventListener('click', closeAllModals);
    
    // Slider navigation
    prevSlide.addEventListener('click', prevSlideFunc);
    nextSlide.addEventListener('click', nextSlideFunc);
    
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
    
    // Submit rating - Real-time with server storage
    submitRatingBtn.addEventListener('click', async () => {
        if (userRating > 0 && currentHairstyle) {
            // Show loading state
            const originalText = submitRatingBtn.textContent;
            submitRatingBtn.textContent = 'သိမ်းဆည်းနေသည်...';
            submitRatingBtn.disabled = true;
            
            try {
                const success = await submitRatingToServer(currentHairstyle.id, userRating);
                
                if (success) {
                    // Add rating to current hairstyle locally for immediate update
                    currentHairstyle.userRatings.push(userRating);
                    
                    // Update display
                    const avgRating = calculateAverageRating(currentHairstyle.userRatings);
                    starsContainer.textContent = generateStarRating(avgRating);
                    ratingText.textContent = ` (${currentHairstyle.userRatings.length} ယောက်သတ်မှတ်ထားသည်)`;
                    
                    // Reset user rating
                    userRating = 0;
                    userRatingStars.forEach(star => {
                        star.classList.remove('active');
                    });
                    
                    // Update grid display
                    generateHairstyleCards();
                    
                    alert('ကျေးဇူးတင်ပါသည်! သင်၏ အဆင့်သတ်မှတ်ချက်ကို အောင်မြင်စွာ သိမ်းဆည်းပြီးပါပြီ။');
                } else {
                    alert('အဆင့်သတ်မှတ်ချက် မှတ်တမ်းတင်ရာတွင် အမှားတစ်ခုဖြစ်နေပါသည်။ ကျေးဇူးပြု၍ နောက်မှ ထပ်ကြိုးစားပါ။');
                }
            } catch (error) {
                console.error('Error in rating submission:', error);
                alert('အဆင့်သတ်မှတ်ချက် မှတ်တမ်းတင်ရာတွင် အမှားတစ်ခုဖြစ်နေပါသည်။');
            } finally {
                // Reset button state
                submitRatingBtn.textContent = originalText;
                submitRatingBtn.disabled = false;
            }
        } else {
            alert('ကျေးဇူးပြု၍ အဆင့်သတ်မှတ်ချက်ကို ရွေးချယ်ပါ။');
        }
    });
    
    // FAB menu
    fabButton.addEventListener('click', toggleFabMenu);
    
    // FAB menu items
    infoBtn.addEventListener('click', () => {
        infoModal.style.display = 'block';
        fabMenu.classList.remove('active');
        document.body.style.overflow = 'hidden';
    });
    
    mapBtn.addEventListener('click', () => {
        mapModal.style.display = 'block';
        fabMenu.classList.remove('active');
        document.body.style.overflow = 'hidden';
    });
    
    contactBtn.addEventListener('click', () => {
        contactModal.style.display = 'block';
        fabMenu.classList.remove('active');
        document.body.style.overflow = 'hidden';
    });
    
    servicesBtn.addEventListener('click', () => {
        servicesModal.style.display = 'block';
        fabMenu.classList.remove('active');
        document.body.style.overflow = 'hidden';
    });
    
    // Native Share Button
    nativeShareBtn.addEventListener('click', () => {
        nativeShare();
        fabMenu.classList.remove('active');
    });
    
    // Close FAB menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!fabButton.contains(e.target) && !fabMenu.contains(e.target)) {
            fabMenu.classList.remove('active');
        }
    });
    
    console.log('✅ App initialization complete');
});

// Touch events for mobile
document.addEventListener('touchmove', function (e) {
    // Allow scrolling
}, { passive: true });