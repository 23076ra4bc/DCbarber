// prompt.js - Updated with Loading Animation Version

// Google Apps Script Web App URL for Prompt Tracking
const PROMPT_TRACKING_URL = 'https://script.google.com/macros/s/AKfycbxxbSyLPAyj6fcCWEoEFNsmt5gFIMU8o28X1hDAhmFM5Z511RGkHDhV9g3HTkEmGMnq/exec';

// Track currently rated hairstyles in session
let sessionRatedHairstyles = new Set();

// Professional Hairstyle Details Database - Updated with highly descriptive and visual details for AI generation
const hairstyleDetails = {
    // Fade Hairstyles (7)
    1: {
        name: "Low Fade",
        details: `A clean Low Fade that starts just above the ear. Top hair is 3 inches long. Side and back are blend cleanly to skin at the very bottom.`
    },
    2: {
        name: "Mid Fade",
        details: `A balanced Mid Fade starting at the temple. Top hair is 4-5 inches, heavily textured and styled slightly forward for a modern, dry finish. Excellent contrast between top and sides.Side and Back are  hight skin fade.`
    },
    3: {
        name: "High Fade",
        details: `A dramatic High Fade cut . Top hair is 2 inches long . side part or styled with significant height  for Most contrast..`
    },
    4: {
        name: "Skin Fade (Bald Fade)",
        details: `A hyper-clean Skin Fade where the sides are completely shaved down to zero length/skin. Top hair is 3 inches long and textured for a messy, controlled style.`
    },
    5: {
        name: "Drop Fade",
        details: `**Fade Line:** A high, clean fade that curves distinctly down (drops) behind the ear toward the nape. Fades down to a skin-level finish at the bottom. **Top Hair:** 3-4 inches long, heavily textured, and styled forward into a messy, visible fringe (French Crop influence). **Color:** Natural dark brown, slightly damp/wet look.`
    },
    6: {
        name: "Curly Fade",
        details: `**Top Hair:** 4-5 inches of natural, tight, defined curls. Curls must be well-hydrated and styled with visible coil separation. **Sides:** A crisp **Mid Skin Fade** that starts at the temple and blends sharply down to skin level (zero). **Contrast:** Extremely high contrast between the dense volume of the curls and the clean, bald fade. **Shape:** Maintains a slightly squared or round shape on top.`
    },
    7: {
        name: "Taper Fade",
        details: `A subtle Taper Fade focusing only on the hairline, sideburns, and nape. Top hair is 4 inches long and neatly combed with a soft side part. Minimal contrast.`
    },

    // Buzz Cut Styles (6)
    8: {
        name: "Induction Cut",
        details: `The shortest military-style haircut, uniformally cut to a #0 or #1 guard (1/16th inch) all over the entire head. Crisp, clean hairline.`
    },
    9: {
        name: "Buzz Cut",
        details: `A uniform Buzz Cut cut with a #2 guard (1/4 inch) all over the head. Very short, slight texture visible. Crisp lines on the edges.`
    },
    10: {
        name: "Butch Cut",
        details: `A uniform Buzz Cut cut with a #3 guard (3/8 inch) all over the head. Maintains a rounded shape and soft, short texture.`
    },
    11: {
        name: "Crew Cut",
        details: `Hair is short on the sides (#2 guard) and gradually longer on top (up to 1.5 inches), styled slightly up and forward at the forehead. Very neat and masculine.`
    },
    12: {
        name: "Ivy League Cut",
        details: `A professional cut, short on the sides (tapered) and long enough on top (2 inches) to be cleanly parted and swept to the side. Smooth, glossy finish.`
    },
    13: {
        name: "Fade Buzz Cut",
        details: `A Butch Cut (#12 guard) on top hight volume spike hair, perfectly blended with a High Skin Fade on the sides. High-contrast and modern.`
    },

    // Undercut Styles (5)
    14: {
        name: "Classic Undercut",
        details: `Sides and back are cut to a uniform #2 guard, completely disconnected from the 4-inch top hair, which is styled with a slight side sweep and medium shine.`
    },
    15: {
        name: "Disconnected Undercut",
        details: `Sides are shaved to #0 (skin) with a distinct, razor-sharp line where it meets the 5-inch long hair on top. Top hair is voluminous and pushed back.`
    },
    16: {
        name: "Textured Undercut",
        details: `Sides are a #1> #0.5 guard. The 3-inch top hair is hight volume spike hair, messy, piecey texture for volume and a dry finish.`
    },
    17: {
        name: "Slick Back Undercut",
        details: `Sides are a tight #1>#0.5>#0.2>#0 guard. The long top hair (6 inches) is aggressively combed straight back using a high-shine pomade for a glossy, wet-look finish.`
    },
    18: {
        name: "Side Part Undercut",
        details: `**Sides:** The sides are cut to a uniform #1 guard, completely disconnected from the top. **Top Hair:** 4 inches long, parted cleanly to one side with a medium-shine pomade for a sleek, classic look. **Part:** The parting line is precisely defined (can be a Hard Part - razor line). **Volume:** The hair is combed flat to the head with minimal lift, emphasizing the sharp disconnection.`
    },


    // Pompadour Styles (5)
    19: {
        name: "Classic Pompadour",
        details: `High volume roll created by sweeping the 6-inch front hair up and smoothly back over the crown. Sides are neatly tapered (not faded) and slicked back. High shine.`
    },
    20: {
        name: "Modern Pompadour",
        details: `A textured Pompadour with slightly less shine and more separation in the 5-inch hair at the front. Sides are a clean taper/low fade.`
    },
    21: {
        name: "Fade Pompadour",
        details: `A dramatic Pompadour with 5 inches of height, paired with a sharp Mid Skin Fade on the sides and back for extreme contrast and clean lines.`
    },
    22: {
        name: "Textured Pompadour",
        details: `The 5-inch top is styled high, but the texture and layers are visible. Styled with a matte clay for a dry, natural, voluminous finish. Sides are a #2 guard.`
    },
    23: {
        name: "Short Pompadour",
        details: `A low-maintenance Pompadour with only 3 inches of modest lift at the front. Sides are a neat taper, giving a subtle professional lift.`
    },

    // Quiff Styles (5)
    24: {
        name: "Classic Quiff",
        details: `The 5-inch top hair is swept up and slightly forward, then smoothed back to create a full, rounded lift at the forehead. Sides are neatly scissored. Medium shine.`
    },
    25: {
        name: "Modern Quiff",
        details: `The 4-inch top hair has visible texture and is styled upwards and slightly back for a casual, rugged look. Sides are a tight taper.`
    },
    26: {
        name: "Fade Quiff",
        details: `A voluminous Quiff (4-5 inches) on top, paired with a High Fade on the sides and back. The hair is lifted for maximum height.`
    },
    27: {
        name: "Short Quiff",
        details: `A conservative Quiff with only 3 inches of hair on top, offering subtle lift and easy management. Sides are a neat #2 guard.`
    },
    28: {
        name: "Side Quiff",
        details: `The 5-inch top hair is styled up and also strongly directed toward one side, creating a dynamic, sweeping, angled volume. Sides are tapered.`
    },

    // Side Part Styles (5)
    29: {
        name: "Classic Side Part",
        details: `**Top Hair:** Maintained at a uniform length of 2 to 2.5 inches. Styled flat and neatly combed to one side. **Parting:** A razor is used to shave a **perfectly straight, thin, and defined line (Hard Part)** separating the top and side sections. **Sides:** A high-contrast **Mid Skin Fade** is applied, starting at the temple/mid-level and blending aggressively down to a **zero-level/skin finish**. The lowest 0.5 inch is completely razor-shaved. **Finish:** Styled with **high-shine pomade** for a clean, sleek, glossy, and highly professional geometric appearance.`
    },

    30: {
        name: "Hard Part",
        details: `Top Hair: 3.5-4 inches long, expertly swept and combed flat to the side of the hard part. Styled with high-shine pomade for a sleek, glossy finish. Parting: A razor is used to shave a perfectly straight, sharp line (Hard Part) separating the top and side sections. Sides: A high-contrast Mid-High Skin Fade is applied, starting high near the parietal ridge and blending seamlessly down to a zero-level/razor-shaved finish at the base. Contrast: Maximum contrast between the glossy top and the bald skin fade.`
    },
    31: {
        name: "Textured Side Part",
        details: `**Top Hair:** 3.5 to 4.5 inches long, cut with many layers and heavily textured using shears for separation and natural volume. Styled with a **natural, soft parting line** and swept to one side. **Sides:** A **Low Taper Fade** is applied, blending gradually from #3 down to #1, maintaining minimal contrast for a softer look. **Styling:** Styled with a **matte clay or paste** for a dry, natural finish and visible piecey texture. **Volume:** Features medium volume; not slicked flat.`
    },

    32: {
        name: "Fade Side Part",
        details: `A clean side part on top (3 inches long), paired with a Mid Fade on the sides. The contrast is sharp and clean.`
    },
    33: {
        name: "Curtain Part",
        details: `The 4-inch hair is parted directly down the center, falling symmetrically to frame the face on both sides.very Wavy texture, natural movement.`
    },

    // Slick Back Styles (5)
    34: {
        name: "Classic Slick Back",
        details: `6-inch hair on top, combed aggressively straight back, flat against the head. Styled with heavy,low oil-based pomade for intense, rigid shine. Sides are short tightly tapered.`
    },
    35: {
        name: "Textured Slick Back",
        details: `5-inch hair on top, combed back but with layers and texture visible for movement. Styled with a dry clay for volume and zero shine.`
    },
    36: {
        name: "Wet Look Slick Back",
        details: `5-inch hair, combed back using high-shine gel to create an intentional, dripping-wet appearance. Sides are cut with a high taper.`
    },
    37: {
        name: "Dry Slick Back",
        details: `4-inch hair, combed back and set with a matte paste for a natural, voluminous, and non-glossy finish. Subtle side blending.`
    },
    38: {
        name: "Slick Back Undercut",
        details: `6-inch top hair is slicked back with high shine. Sides are completely disconnected, shaved to a #0 guard for maximum visual break.`
    },

    // Curly Hair Styles (5)
    39: {
        name: "Curly Fade",
        details: `Natural, medium-length (3-4 inch) defined curls on top, contrasted sharply with a High Skin Fade on the sides and back.`
    },
    40: {
        name: "Curly Top",
        details: `Start crow to Forehead are natural curly hair (3-4 inches) ,   styled with maximum volume.back  and Sides are hight fade hight volume.`
    },
    41: {
        name: "Textured Curls",
        details: `Defined, ringlet-style curls (4 inches long) that are layered to enhance their natural coil. Used curl-defining product for minimal frizz. Sides are a #2 guard.`
    },
    42: {
        name: "Short Curls",
        details: `Uniformly short, tight curls (2 inches) all over the head. Very low maintenance and neat, emphasizing the natural texture.`
    },
    43: {
        name: "Afro Style",
        details: `A full, perfectly rounded, dense Afro shape (6+ inches) with highly defined natural texture. Clean, sharp, natural hairline around the ears and neck.`
    },

    // Long Hair Styles (5)
    44: {
        name: "Man Bun",
        details: `All long hair (8+ inches) is pulled back tightly and secured into a neat, high bun (top knot) on the crown of the head. Sides are natural length.`
    },
    45: {
        name: "Long Layers",
        details: `Chest-length hair (10+ inches) with long layers cut in for shape and natural movement. Styled naturally with a clean side part and soft flow.`
    },
    46: {
        name: "Half Bun",
        details: `Only the top portion of the long hair (from the temples to the crown) is tied back into a small, tight bun, leaving the rest of the hair hanging loose.`
    },
    47: {
        name: "Pony Tail",
        details: `All long hair is gathered and secured cleanly at the nape of the neck into a low, neat ponytail.`
    },
    48: {
        name: "Natural Long",
        details: `Very long, free-flowing, straight hair (12+ inches) styled with natural texture and minimal product or cutting. Natural center part.`
    },

    // French Crop Styles (5)
    49: {
        name: "Classic French Crop",
        details: `Short hair on top (2-3 inches), brushed forward with a blunt, straight fringe that covers part of the forehead. Sides are cut with a clean #2 guard.`
    },
    50: {
        name: "Textured French Crop",
        details: `The 3-inch hair on top is heavily layered and styled forward, creating a messy, piecey, high-texture fringe. Sides are a #1 guard.`
    },
    51: {
        name: "Fade French Crop",
        details: `A classic French Crop fringe paired with a sharp Mid Skin Fade on the sides and back. High contrast and modern definition.`
    },
    52: {
        name: "Long French Crop",
        details: `The top hair is left longer (4 inches), allowing the fringe to be heavier and styled with more volume and lift forward. Sides are a #3 guard.`
    },
    53: {
        name: "Short French Crop",
        details: `A very tight French Crop. Top hair is 1 inch long and brushed forward into a tiny, neat fringe. Sides are a tight #0.5 guard.`
    },

    // Comb Over Styles (5)
    54: {
        name: "Classic Comb Over",
        details: `4-inch top hair is parted and smoothly combed flat and over to the side. Styled with medium shine pomade. Sides are neatly tapered with scissors.`
    },
    55: {
        name: "Modern Comb Over",
        details: `The 4-inch top hair is combed over, but with visible texture and volume, not slicked flat. Styled with matte clay. Sides are a clean taper.`
    },
    56: {
        name: "Volume Comb Over",
        details: `The 5-inch top hair is blow-dried high before being combed over, creating significant lift and height in the swept section. Sides are a #2 guard.`
    },
    57: {
        name: "Fade Comb Over",
        details: `The 4-inch top hair is combed over with a clean hard part. Sides are cut with a sharp Low Fade for a modern contrast.`
    },
    58: {
        name: "Short Comb Over",
        details: `A subtle comb over with only 2-3 inches of hair on top, making it neat, conservative, and easy to manage. Sides are a #1 guard.`
    },

    // Spiky Styles (5)
    59: {
        name: "Textured Spikes",
        details: `3-4 inch top hair is styled upward into soft, irregular, and piecey spikes using a matte clay for a natural, rugged look. Sides are a #2 guard.`
    },
    60: {
        name: "Sharp Spikes",
        details: `4-5 inch top hair is styled aggressively upward into defined, rigid, needle-like spikes using a strong-hold gel for maximum definition. Sides are a #3 guard.`
    },
    61: {
        name: "Fade Spikes",
        details: `3-inch textured spikes on top, paired with a clean Mid Fade on the sides and back. High contrast with a sharp, youthful look.`
    },
    62: {
        name: "Short Spikes",
        details: `A low-maintenance style with 2 inches of hair on top, spiked straight up for a tight, controlled, and neat finish. Sides are a #1 guard.`
    },
    63: {
        name: "Long Spikes",
        details: `5-6 inch top hair is spiked up into dramatic, separated, long spikes. Requires strong product and significant height. Sides are cut with scissors.`
    }
};

// AI Image Generation Prompt Template
const PROMPT_TEMPLATE = `Generate exactly three ultra-realistic portrait images in a strict horizontal 1×3 grid layout. The three panels must show the same person from three different angles:

· Panel 1: Front-facing view (direct camera view)
· Panel 2: Side profile view (90° left or right)
· Panel 3: Back view (rear of the head and neck)

Crucially, the person's facial identity, skin tone, face structure, age, and expression must be 100% identical and unchanged across all three panels.

Apply the following specific hairstyle with meticulous, natural blending and hyper-realistic detail:

HAIRSTYLE TO APPLY: [HAIRSTYLE_NAME]
HAIRSTYLE DETAILS: [HAIRSTYLE_DETAILS]

Style Requirements:

· Each image must perfectly and clearly showcase the [HAIRSTYLE_NAME] from its specific angle (front, side, back).
· Use soft, diffused natural studio lighting with subtle shadows to enhance hair texture, depth, and the shape of the head.
· High-resolution photorealistic rendering with lifelike, individually rendered hair strands and seamless integration with the hairline.
· The hairstyle must look naturally grown and professionally styled according to the details provided.
· Consistency check: Ensure the hair length and texture are perfectly matched and continuous between the side panel and the back panel.

Output Format:
· All three images must be aligned in a single 1x3 grid with consistent size and spacing.Do not generate more than three views.`;

// Generate Prompt
function generatePrompt(hairstyleId) {
    const hairstyle = hairstyleDetails[hairstyleId];
    if (!hairstyle) return null;

    return PROMPT_TEMPLATE
        .replace(/\[HAIRSTYLE_NAME\]/g, hairstyle.name)
        .replace('[HAIRSTYLE_DETAILS]', hairstyle.details);
}

// Check if current hairstyle is rated (combined check)
function isCurrentHairstyleRated() {
    if (!window.currentHairstyle) return false;
    
    // Check session first (immediate)
    if (sessionRatedHairstyles.has(window.currentHairstyle.id)) {
        return true;
    }
    
    // Then check rating system
    if (window.RatingSystem && window.RatingSystem.hasVisitorRated) {
        return window.RatingSystem.hasVisitorRated(window.currentHairstyle.id);
    }
    
    return false;
}

// Mark hairstyle as rated in session
function markHairstyleAsRated(hairstyleId) {
    sessionRatedHairstyles.add(hairstyleId);
    console.log('✅ Marked hairstyle as rated in session:', hairstyleId);
}

// Get GPS coordinates
async function getGPSLocation() {
    return new Promise((resolve) => {
        if (!navigator.geolocation) {
            resolve({ 
                success: false, 
                error: 'Geolocation not supported',
                timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'Unknown'
            });
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                resolve({
                    success: true,
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'Unknown'
                });
            },
            (error) => {
                let errorMessage = 'Unknown error';
                switch(error.code) {
                    case error.PERMISSION_DENIED:
                        errorMessage = 'Permission denied';
                        break;
                    case error.POSITION_UNAVAILABLE:
                        errorMessage = 'Position unavailable';
                        break;
                    case error.TIMEOUT:
                        errorMessage = 'Request timeout';
                        break;
                }
                resolve({ 
                    success: false, 
                    error: errorMessage,
                    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'Unknown'
                });
            },
            {
                enableHighAccuracy: true,
                timeout: 15000,
                maximumAge: 60000
            }
        );
    });
}

// Track prompt copy to Google Sheets
async function trackPromptCopy(hairstyleId, hairstyleName, locationData) {
    try {
        const params = new URLSearchParams({
            action: 'trackPromptCopy',
            hairstyleId: hairstyleId,
            hairstyleName: hairstyleName,
            timestamp: new Date().toISOString(),
            latitude: locationData.latitude || '',
            longitude: locationData.longitude || '',
            timezone: locationData.timezone || 'Unknown'
        });

        const response = await fetch(`${PROMPT_TRACKING_URL}?${params}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        return result.success;
    } catch (error) {
        console.error('Tracking error:', error);
        return false;
    }
}

// Show alert messages
function showPromptAlert(type, message) {
    const existingAlert = document.querySelector('.prompt-alert');
    if (existingAlert) existingAlert.remove();

    const alert = document.createElement('div');
    alert.className = `prompt-alert prompt-alert-${type}`;
    
    const icons = { success: '✓', error: '✗', warning: '!', info: 'i' };
    
    alert.innerHTML = `
        <div class="alert-content">
            <span class="alert-icon">${icons[type] || 'i'}</span>
            <span class="alert-message">${message}</span>
            <button class="alert-close">×</button>
        </div>
    `;

    alert.querySelector('.alert-close').addEventListener('click', () => alert.remove());
    document.body.appendChild(alert);

    setTimeout(() => {
        if (alert.parentNode) alert.remove();
    }, 5000);
}

// Set copy button loading state
function setCopyButtonLoading(isLoading) {
    const copyButton = document.getElementById('generatePromptBtn');
    if (!copyButton) return;

    if (isLoading) {
        copyButton.disabled = true;
        copyButton.style.opacity = '0.6';
        copyButton.style.cursor = 'wait';
        copyButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';
        copyButton.title = 'Generating prompt, please wait...';
    } else {
        const isRated = isCurrentHairstyleRated();
        if (isRated) {
            copyButton.disabled = false;
            copyButton.style.opacity = '1';
            copyButton.style.cursor = 'pointer';
            copyButton.innerHTML = '<i class="fas fa-copy"></i> Prompt Copy';
            copyButton.title = 'Click to copy AI prompt (GPS required)';
        } else {
            copyButton.disabled = true;
            copyButton.style.opacity = '0.5';
            copyButton.style.cursor = 'not-allowed';
            copyButton.innerHTML = '<i class="fas fa-copy"></i> Prompt Copy';
            copyButton.title = 'Please rate this hairstyle first to copy the prompt';
        }
    }
}

// Copy to Clipboard with GPS tracking
async function copyPromptWithTracking(hairstyleId, hairstyleName) {
    try {
        // Set loading state
        setCopyButtonLoading(true);
        showPromptAlert('info', '📍 Requesting GPS permission for prompt copy...');

        const locationData = await getGPSLocation();

        if (!locationData.success) {
            if (locationData.error === 'Permission denied') {
                setCopyButtonLoading(false);
                showPromptAlert('error', '❌  permission denied. Please allow location access in your browser settings.');
                return false;
            } else {
                showPromptAlert('warning', '⚠️ Prompt Copied ,try nano banana!...');
            }
        } else {
            showPromptAlert('info', '📍 Generating prompt...');
        }

        const prompt = generatePrompt(hairstyleId);
        if (!prompt) {
            setCopyButtonLoading(false);
            showPromptAlert('error', '❌ Failed to generate prompt.');
            return false;
        }

        await navigator.clipboard.writeText(prompt);

        const trackingSuccess = await trackPromptCopy(hairstyleId, hairstyleName, locationData);
        
        // Reset button state
        setCopyButtonLoading(false);
        
        if (trackingSuccess) {
            if (locationData.success) {
                showPromptAlert('success', '✅ Prompt copied , try nano banana!');
            } else {
                showPromptAlert('success', '✅ Prompt copied, try nano banana!');
            }
        } else {
            showPromptAlert('warning', '✅ Prompt copied, try nano banana!');
        }
        
        return true;

    } catch (error) {
        console.error('Copy process error:', error);
        
        // Reset button state on error
        setCopyButtonLoading(false);
        
        if (error.name === 'SecurityError' || error.message.includes('permission')) {
            showPromptAlert('error', '❌ Clipboard permission denied. Please allow clipboard access.');
        } else {
            showPromptAlert('error', '❌ Failed to copy prompt. Please try again.');
        }
        return false;
    }
}

// Update copy button state based on rating status
function updateCopyButtonState() {
    const copyButton = document.getElementById('generatePromptBtn');
    if (!copyButton || !window.currentHairstyle) return;

    const isRated = isCurrentHairstyleRated();

    if (isRated) {
        copyButton.disabled = false;
        copyButton.style.opacity = '1';
        copyButton.style.cursor = 'pointer';
        copyButton.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        copyButton.title = 'Click to copy AI prompt (GPS required)';
        copyButton.innerHTML = '<i class="fas fa-copy"></i> Prompt Copy';
    } else {
        copyButton.disabled = true;
        copyButton.style.opacity = '0.5';
        copyButton.style.cursor = 'not-allowed';
        copyButton.style.background = 'linear-gradient(135deg, #95a5f9 0%, #9d8bb3 100%)';
        copyButton.title = 'Please rate this hairstyle first to copy the prompt';
        copyButton.innerHTML = '<i class="fas fa-copy"></i> Prompt Copy';
    }
}

// Monitor rating submissions to enable copy button
function monitorRatingSubmissions() {
    if (!window.RatingSystem) {
        setTimeout(monitorRatingSubmissions, 1000);
        return;
    }

    // Override the submit function to immediately enable copy button
    const originalSubmit = window.RatingSystem.submitRatingToSheet;
    
    window.RatingSystem.submitRatingToSheet = async function(hairstyleId, ratingValue) {
        const result = await originalSubmit.call(this, hairstyleId, ratingValue);
        
        if (result.success && window.currentHairstyle && hairstyleId === window.currentHairstyle.id) {
            // Immediately mark as rated and enable copy button
            markHairstyleAsRated(hairstyleId);
            updateCopyButtonState();
            
            // Show success message for copy button
            setTimeout(() => {
                showPromptAlert('success', '⭐ Rating submitted! Copy button is now enabled.');
            }, 500);
        }
        
        return result;
    };

    // Also monitor the existing submit button click
    const originalSubmitBtn = document.getElementById('submitRating');
    if (originalSubmitBtn) {
        originalSubmitBtn.addEventListener('click', function() {
            // This will be triggered before the actual submission
            setTimeout(() => {
                if (window.currentHairstyle) {
                    markHairstyleAsRated(window.currentHairstyle.id);
                    updateCopyButtonState();
                }
            }, 100);
        });
    }
}

// Add Prompt Button to Modal
function addPromptButtonToModal() {
    setTimeout(() => {
        const ratingSection = document.querySelector('.rating-section');
        if (!ratingSection || document.getElementById('generatePromptBtn')) return;

        // Create prompt button
        const promptButton = document.createElement('button');
        promptButton.id = 'generatePromptBtn';
        promptButton.className = 'btn prompt-copy-btn';
        promptButton.innerHTML = '<i class="fas fa-copy"></i> Prompt Copy';
        promptButton.disabled = true;
        
        promptButton.addEventListener('click', async () => {
            if (window.currentHairstyle) {
                await copyPromptWithTracking(window.currentHairstyle.id, window.currentHairstyle.name);
            } else {
                showPromptAlert('error', '❌ No hairstyle selected.');
            }
        });

        // Find or create button container
        let buttonContainer = ratingSection.querySelector('.horizontal-button-container');
        if (!buttonContainer) {
            buttonContainer = document.createElement('div');
            buttonContainer.className = 'horizontal-button-container';
            buttonContainer.style.display = 'flex';
            buttonContainer.style.flexDirection = 'row'; // ဒီမှာ ပြင်တာ
            buttonContainer.style.justifyContent = 'space-between'; // ဒီမှာ ပြင်တာ
            buttonContainer.style.alignItems = 'center'; // ဒီမှာ ပြင်တာ
            buttonContainer.style.gap = '10px';
            buttonContainer.style.width = '100%';
            buttonContainer.style.marginTop = '15px';
            
            const submitRatingBtn = document.getElementById('submitRating');
            if (submitRatingBtn) {
                buttonContainer.appendChild(submitRatingBtn);
            }
            
            ratingSection.appendChild(buttonContainer);
        }

        buttonContainer.appendChild(promptButton);
        updateCopyButtonState();

    }, 100);
}
// Monitor modal openings
function monitorModalOpenings() {
    const originalOpen = window.openHairstyleModal;
    
    if (!originalOpen) {
        setTimeout(monitorModalOpenings, 1000);
        return;
    }
    
    window.openHairstyleModal = function(hairstyle) {
        originalOpen(hairstyle);
        
        setTimeout(() => {
            addPromptButtonToModal();
            updateCopyButtonState();
        }, 50);
    };
}

// Add CSS styles
function addPromptStyles() {
    if (document.querySelector('#prompt-styles')) return;

    const style = document.createElement('style');
    style.id = 'prompt-styles';
    style.textContent = `
        .horizontal-button-container {
            display: flex;
            gap: 10px;
            margin-top: 15px;
            width: 100%;
        }
        
        .horizontal-button-container .btn {
            flex: 1;
            padding: 12px 15px;
            border-radius: 8px;
            cursor: pointer;
            font-weight: bold;
            font-size: 14px;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            border: none;
            min-height: 44px;
            font-family: 'Pyidaungsu', 'Myanmar3', 'Noto Sans Myanmar', sans-serif;
        }
        
        /* Rating Button */
        #submitRating {
            background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
            color: white;
        }
        
        #submitRating:hover:not(:disabled) {
            background: linear-gradient(135deg, #218838 0%, #1e9e8a 100%);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(40, 167, 69, 0.3);
        }
        
        /* Prompt Button - Enabled State */
        .prompt-copy-btn:not(:disabled) {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }
        
        .prompt-copy-btn:not(:disabled):hover {
            background: linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }
        
        /* Prompt Button - Disabled State */
        .prompt-copy-btn:disabled {
            background: linear-gradient(135deg, #95a5f9 0%, #9d8bb3 100%);
            color: white;
            opacity: 0.5;
            cursor: not-allowed;
            transform: none;
            box-shadow: none;
        }
        
        /* Prompt Button - Loading State */
        .prompt-copy-btn.loading {
            background: linear-gradient(135deg, #95a5f9 0%, #9d8bb3 100%);
            opacity: 0.6;
            cursor: wait;
        }
        
        /* Spinner Animation */
        .fa-spinner {
            animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        /* Alert Styles */
        .prompt-alert {
            position: fixed;
            top: 20px;
            right: 20px;
            background: white;
            border-radius: 10px;
            padding: 15px 20px;
            box-shadow: 0 6px 20px rgba(0,0,0,0.15);
            border-left: 5px solid #ddd;
            z-index: 10000;
            max-width: 400px;
            animation: slideInRight 0.3s ease;
            font-family: 'Pyidaungsu', 'Myanmar3', 'Noto Sans Myanmar', sans-serif;
        }
        
        .prompt-alert-success { border-left-color: #00b894; background: #00b894; color: white; }
        .prompt-alert-error { border-left-color: #e17055; background: #e17055; color: white; }
        .prompt-alert-warning { border-left-color: #fdcb6e; background: #fdcb6e; color: white; }
        .prompt-alert-info { border-left-color: #74b9ff; background: #74b9ff; color: white; }
        
        .alert-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
        }
        
        .alert-icon { 
            font-weight: bold; 
            font-size: 18px;
            min-width: 20px;
        }
        
        .alert-message { 
            flex: 1; 
            font-size: 14px;
            line-height: 1.4;
        }
        
        .alert-close {
            background: none;
            border: none;
            color: inherit;
            font-size: 20px;
            cursor: pointer;
            padding: 0;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0.8;
        }
        
        .alert-close:hover { opacity: 1; }
        
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @media (max-width: 768px) {
            .horizontal-button-container {
                flex-direction: column;
            }
            
            .horizontal-button-container .btn {
                width: 100%;
            }
            
            .prompt-alert {
                top: 10px;
                right: 10px;
                left: 10px;
                max-width: none;
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize Prompt System
function initPromptSystem() {
    addPromptStyles();
    monitorRatingSubmissions();
    monitorModalOpenings();
    
    // Listen for rating system ready
    if (window.RatingSystem) {
        window.RatingSystem.onRatingReady = function() {
            updateCopyButtonState();
        };
    }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPromptSystem);
} else {
    initPromptSystem();
}

// Export for global access
window.PromptSystem = {
    generatePrompt,
    copyPromptWithTracking,
    updateCopyButtonState,
    isCurrentHairstyleRated,
    markHairstyleAsRated,
    initPromptSystem
};
