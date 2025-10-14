// fab.js - FAB menu functionality

// Toggle FAB menu
function toggleFabMenu() {
    const fabMenu = document.getElementById('fabMenu');
    if (fabMenu) {
        fabMenu.classList.toggle('active');
    }
}

// Native Share Function
async function nativeShare() {
    const websiteUrl = window.location.href;
    const websiteTitle = "Diamond Crown Barber Shop - ဆံပင်ညှပ်ဆိုင်";
    const websiteDescription = "Diamond Crown ဆံပင်ညှပ်ဆိုင်သည် မျက်နှာအမျိုးအစားအားလုံးအတွက် လိုက်ဖတ်မည့် ဆံပင်ပုံစံများကို ကျွမ်းကျင်စွာ ပြုလုပ်ပေးနေပါသည်။";

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

// Initialize FAB menu event listeners
function initializeFABSystem() {
    const fabButton = document.getElementById('fabButton');
    const fabMenu = document.getElementById('fabMenu');
    const nativeShareBtn = document.getElementById('nativeShareBtn');
    
    // FAB menu toggle
    if (fabButton) {
        fabButton.addEventListener('click', toggleFabMenu);
    }
    
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

// Export functions
window.FABSystem = {
    toggleFabMenu,
    nativeShare,
    initializeFABSystem
};
