
// Professional Hairstyle Details Database - All 63 Styles with Barber Expertise
const hairstyleDetails = {
    // Fade Hairstyles (7)
    1: {
        name: "Low Fade",
        details: `**Clipper Work:** #2 → #1 → #0.5 | **Blend Zone:** 2-inch gradual | **Top:** 3-4" scissor cut | **Texture:** Natural maintenance | **Face:** Oval, Square, Heart | **Maintenance:** 3-4 weeks`
    },
    2: {
        name: "Mid Fade",
        details: `**Clipper Work:** #3 → #2 → #1 → #0 | **Blend Zone:** 1.5-inch smooth | **Top:** 4-5" textured layers | **Texture:** Medium density | **Face:** Square, Oval, Diamond | **Maintenance:** 2-3 weeks`
    },
    3: {
        name: "High Fade",
        details: `**Clipper Work:** #4 → #3 → #2 → #1 → #0 | **Blend Zone:** 1-inch dramatic | **Top:** 5-6" voluminous | **Texture:** Thick hair | **Face:** Round, Oval | **Maintenance:** 2 weeks`
    },
    4: {
        name: "Skin Fade",
        details: `**Clipper Work:** #2 → #1 → #0 (skin) | **Blend Zone:** Skin exposure | **Top:** 2-6" variable | **Texture:** All types | **Face:** All shapes | **Maintenance:** 10-14 days`
    },
    5: {
        name: "Drop Fade",
        details: `**Clipper Work:** #2 → #1 → #0 | **Blend Zone:** Curved downward | **Top:** 4-5" maintained | **Texture:** Medium-thick | **Face:** All, especially Square | **Maintenance:** 2-3 weeks`
    },
    6: {
        name: "Burst Fade",
        details: `**Clipper Work:** #2 → #1 → #0 | **Blend Zone:** Circular pattern | **Top:** 3-4" uniform | **Texture:** Straight-wavy | **Face:** Oval, Round | **Maintenance:** 2-3 weeks`
    },
    7: {
        name: "Taper Fade",
        details: `**Clipper Work:** #3 → #2 → #1 | **Blend Zone:** 2.5-inch subtle | **Top:** 3-5" versatile | **Texture:** Fine-medium | **Face:** All shapes | **Maintenance:** 3-4 weeks`
    },

    // Buzz Cut Styles (6)
    8: {
        name: "Induction Cut",
        details: `**Guard:** #0 or #1 | **Length:** 1/16" or 1/8" | **Style:** Uniform military | **Texture:** All types | **Face:** Oval, Square | **Maintenance:** Weekly`
    },
    9: {
        name: "Burr Cut",
        details: `**Guard:** #1 or #2 | **Length:** 1/8" or 1/4" | **Style:** Slight texture | **Texture:** Straight-wavy | **Face:** All shapes | **Maintenance:** 10-14 days`
    },
    10: {
        name: "Butch Cut",
        details: `**Guard:** #2 or #3 | **Length:** 1/4" or 3/8" | **Style:** Medium uniform | **Texture:** All types | **Face:** Oval, Round, Square | **Maintenance:** 2-3 weeks`
    },
    11: {
        name: "Crew Cut",
        details: `**Top:** #3-4 | **Sides:** #1-2 | **Style:** Longer top | **Texture:** Straight, thick | **Face:** Square, Oval | **Maintenance:** 3 weeks`
    },
    12: {
        name: "Ivy League Cut",
        details: `**Top:** #4-5 | **Sides:** #2-3 | **Style:** Blended professional | **Texture:** Straight-wavy | **Face:** Oval, Diamond | **Maintenance:** 4 weeks`
    },
    13: {
        name: "Fade Buzz Cut",
        details: `**Top:** #2-3 | **Sides:** Fade progression | **Style:** Modern hybrid | **Texture:** All types | **Face:** All shapes | **Maintenance:** 2 weeks`
    },

    // Undercut Styles (5)
    14: {
        name: "Classic Undercut",
        details: `**Sides:** #1-2 | **Top:** 3-5" disconnected | **Blend:** Sharp contrast | **Texture:** All types | **Face:** Square, Round | **Maintenance:** 3 weeks`
    },
    15: {
        name: "Disconnected Undercut",
        details: `**Sides:** #0-1 | **Top:** 4-6" dramatic | **Blend:** No blend | **Texture:** Thick hair | **Face:** Oval, Square | **Maintenance:** 2 weeks`
    },
    16: {
        name: "Textured Undercut",
        details: `**Sides:** #1-2 | **Top:** 3-5" textured | **Blend:** Soft transition | **Texture:** Medium | **Face:** Oval, Square | **Maintenance:** 3 weeks`
    },
    17: {
        name: "Slick Back Undercut",
        details: `**Sides:** #1-2 | **Top:** 4-7" length | **Blend:** Clean lines | **Texture:** Straight | **Face:** Oval, Square | **Maintenance:** 2 weeks`
    },
    18: {
        name: "Side Part Undercut",
        details: `**Sides:** #1-2 | **Top:** 3-5" parted | **Blend:** Defined part | **Texture:** All types | **Face:** Oval, Square | **Maintenance:** 3 weeks`
    },

    // Pompadour Styles (5)
    19: {
        name: "Classic Pompadour",
        details: `**Front:** 4-6" volume | **Sides:** #2-3 | **Style:** Vintage volume | **Texture:** Thick | **Face:** Oval, Long | **Maintenance:** 2 weeks`
    },
    20: {
        name: "Modern Pompadour",
        details: `**Front:** 4-6" height | **Sides:** Tapered | **Style:** Contemporary | **Texture:** Medium-thick | **Face:** Oval, Square | **Maintenance:** 2 weeks`
    },
    21: {
        name: "Fade Pompadour",
        details: `**Front:** 4-6" volume | **Sides:** Faded | **Style:** Modern classic | **Texture:** All types | **Face:** All shapes | **Maintenance:** 2 weeks`
    },
    22: {
        name: "Textured Pompadour",
        details: `**Front:** 4-6" textured | **Sides:** #2-3 | **Style:** Natural volume | **Texture:** Wavy | **Face:** Oval, Square | **Maintenance:** 2 weeks`
    },
    23: {
        name: "Short Pompadour",
        details: `**Front:** 3-5" modest | **Sides:** #1-2 | **Style:** Subtle volume | **Texture:** Fine-medium | **Face:** Round, Oval | **Maintenance:** 3 weeks`
    },

    // Quiff Styles (5)
    24: {
        name: "Classic Quiff",
        details: `**Front:** 4-6" lift | **Sides:** #2-3 | **Style:** Traditional sweep | **Texture:** Thick | **Face:** Oval, Heart | **Maintenance:** 2 weeks`
    },
    25: {
        name: "Modern Quiff",
        details: `**Front:** 4-6" textured | **Sides:** Tapered | **Style:** Updated classic | **Texture:** Medium | **Face:** Oval, Square | **Maintenance:** 2 weeks`
    },
    26: {
        name: "Fade Quiff",
        details: `**Front:** 4-6" volume | **Sides:** Faded | **Style:** Contemporary | **Texture:** All types | **Face:** All shapes | **Maintenance:** 2 weeks`
    },
    27: {
        name: "Short Quiff",
        details: `**Front:** 3-5" modest | **Sides:** #1-2 | **Style:** Subtle lift | **Texture:** Fine-medium | **Face:** Round, Oval | **Maintenance:** 3 weeks`
    },
    28: {
        name: "Side Quiff",
        details: `**Front:** 4-6" directional | **Sides:** #2-3 | **Style:** Angled volume | **Texture:** Medium | **Face:** Oval, Square | **Maintenance:** 2 weeks`
    },

    // Side Part Styles (5)
    29: {
        name: "Classic Side Part",
        details: `**Part:** Clean line | **Sides:** #2-3 | **Top:** 3-5" combed | **Texture:** Straight | **Face:** Oval, Square | **Maintenance:** 3 weeks`
    },
    30: {
        name: "Hard Part",
        details: `**Part:** Razor sharp | **Sides:** #1-2 | **Top:** 3-5" precise | **Texture:** All types | **Face:** Square, Oval | **Maintenance:** 2 weeks`
    },
    31: {
        name: "Textured Side Part",
        details: `**Part:** Soft line | **Sides:** #2-3 | **Top:** 3-5" textured | **Texture:** Wavy | **Face:** Oval, Square | **Maintenance:** 3 weeks`
    },
    32: {
        name: "Fade Side Part",
        details: `**Part:** Defined | **Sides:** Faded | **Top:** 3-5" styled | **Texture:** All types | **Face:** All shapes | **Maintenance:** 2 weeks`
    },
    33: {
        name: "Curtain Part",
        details: `**Part:** Center/natural | **Sides:** #3-4 | **Top:** 4-6" flowing | **Texture:** Wavy | **Face:** Oval, Heart | **Maintenance:** 3 weeks`
    },

    // Slick Back Styles (5)
    34: {
        name: "Classic Slick Back",
        details: `**Length:** 4-7" back | **Sides:** #2-3 | **Style:** Smooth back | **Texture:** Straight | **Face:** Oval, Square | **Maintenance:** 2 weeks`
    },
    35: {
        name: "Textured Slick Back",
        details: `**Length:** 4-7" textured | **Sides:** #2-3 | **Style:** Natural back | **Texture:** Wavy | **Face:** Oval, Square | **Maintenance:** 2 weeks`
    },
    36: {
        name: "Wet Look Slick Back",
        details: `**Length:** 4-7" glossy | **Sides:** #2-3 | **Style:** High shine | **Texture:** Straight | **Face:** Oval, Square | **Maintenance:** 2 weeks`
    },
    37: {
        name: "Dry Slick Back",
        details: `**Length:** 4-7" matte | **Sides:** #2-3 | **Style:** Natural finish | **Texture:** All types | **Face:** Oval, Square | **Maintenance:** 2 weeks`
    },
    38: {
        name: "Slick Back Undercut",
        details: `**Length:** 4-7" back | **Sides:** #0-1 | **Style:** Dramatic contrast | **Texture:** Straight | **Face:** Oval, Square | **Maintenance:** 2 weeks`
    },

    // Curly Hair Styles (5)
    39: {
        name: "Curly Fade",
        details: `**Top:** 3-6" curls | **Sides:** Faded | **Style:** Curly contrast | **Texture:** Curly | **Face:** Oval, Square | **Maintenance:** 2 weeks`
    },
    40: {
        name: "Curly Top",
        details: `**Top:** 4-7" volume | **Sides:** #2-3 | **Style:** Natural curls | **Texture:** Curly | **Face:** Round, Oval | **Maintenance:** 3 weeks`
    },
    41: {
        name: "Textured Curls",
        details: `**Top:** 4-6" defined | **Sides:** #2-3 | **Style:** Enhanced curls | **Texture:** Curly | **Face:** Oval, Square | **Maintenance:** 3 weeks`
    },
    42: {
        name: "Short Curls",
        details: `**Top:** 2-4" tight | **Sides:** #1-2 | **Style:** Compact curls | **Texture:** Curly | **Face:** Round, Oval | **Maintenance:** 3 weeks`
    },
    43: {
        name: "Afro Style",
        details: `**Top:** 6"+ volume | **Sides:** Natural | **Style:** Full round | **Texture:** Afro | **Face:** Round, Square | **Maintenance:** 4 weeks`
    },

    // Long Hair Styles (5)
    44: {
        name: "Man Bun",
        details: `**Length:** 6"+ for bun | **Sides:** Natural | **Style:** Tied back | **Texture:** All types | **Face:** Oval, Square | **Maintenance:** 6 weeks`
    },
    45: {
        name: "Long Layers",
        details: `**Length:** 6"+ layered | **Sides:** Blended | **Style:** Flowing layers | **Texture:** All types | **Face:** Oval, Long | **Maintenance:** 6 weeks`
    },
    46: {
        name: "Half Bun",
        details: `**Length:** 6"+ partial | **Sides:** Natural | **Style:** Partially tied | **Texture:** All types | **Face:** Oval, Square | **Maintenance:** 6 weeks`
    },
    47: {
        name: "Pony Tail",
        details: `**Length:** 6"+ gathered | **Sides:** Natural | **Style:** Pulled back | **Texture:** All types | **Face:** All shapes | **Maintenance:** 6 weeks`
    },
    48: {
        name: "Natural Long",
        details: `**Length:** 6"+ natural | **Sides:** Blended | **Style:** Free flowing | **Texture:** All types | **Face:** All shapes | **Maintenance:** 8 weeks`
    },

    // French Crop Styles (5)
    49: {
        name: "Classic French Crop",
        details: `**Top:** 2-4" textured | **Sides:** #1-2 | **Style:** Short textured | **Texture:** All types | **Face:** Round, Oval | **Maintenance:** 3 weeks`
    },
    50: {
        name: "Textured French Crop",
        details: `**Top:** 2-4" enhanced | **Sides:** #1-2 | **Style:** Detailed texture | **Texture:** Medium | **Face:** Round, Oval | **Maintenance:** 3 weeks`
    },
    51: {
        name: "Fade French Crop",
        details: `**Top:** 2-4" crop | **Sides:** Faded | **Style:** Modern crop | **Texture:** All types | **Face:** All shapes | **Maintenance:** 2 weeks`
    },
    52: {
        name: "Long French Crop",
        details: `**Top:** 3-5" length | **Sides:** #2-3 | **Style:** Extended crop | **Texture:** All types | **Face:** Round, Oval | **Maintenance:** 3 weeks`
    },
    53: {
        name: "Short French Crop",
        details: `**Top:** 1-3" tight | **Sides:** #0-1 | **Style:** Ultra crop | **Texture:** All types | **Face:** Round, Oval | **Maintenance:** 2 weeks`
    },

    // Comb Over Styles (5)
    54: {
        name: "Classic Comb Over",
        details: `**Top:** 3-5" swept | **Sides:** #2-3 | **Style:** Traditional sweep | **Texture:** Straight | **Face:** Oval, Square | **Maintenance:** 3 weeks`
    },
    55: {
        name: "Modern Comb Over",
        details: `**Top:** 3-5" textured | **Sides:** Tapered | **Style:** Updated sweep | **Texture:** Medium | **Face:** Oval, Square | **Maintenance:** 3 weeks`
    },
    56: {
        name: "Volume Comb Over",
        details: `**Top:** 4-6" lifted | **Sides:** #2-3 | **Style:** Heightened sweep | **Texture:** Thick | **Face:** Oval, Square | **Maintenance:** 2 weeks`
    },
    57: {
        name: "Fade Comb Over",
        details: `**Top:** 3-5" swept | **Sides:** Faded | **Style:** Contemporary | **Texture:** All types | **Face:** All shapes | **Maintenance:** 2 weeks`
    },
    58: {
        name: "Short Comb Over",
        details: `**Top:** 2-4" modest | **Sides:** #1-2 | **Style:** Subtle sweep | **Texture:** Fine-medium | **Face:** Round, Oval | **Maintenance:** 3 weeks`
    },

    // Spiky Styles (5)
    59: {
        name: "Textured Spikes",
        details: `**Top:** 3-5" spikes | **Sides:** #2-3 | **Style:** Natural spikes | **Texture:** All types | **Face:** Round, Oval | **Maintenance:** 3 weeks`
    },
    60: {
        name: "Sharp Spikes",
        details: `**Top:** 4-6" defined | **Sides:** #2-3 | **Style:** Precise spikes | **Texture:** Straight | **Face:** Oval, Square | **Maintenance:** 2 weeks`
    },
    61: {
        name: "Fade Spikes",
        details: `**Top:** 3-5" spikes | **Sides:** Faded | **Style:** Modern spikes | **Texture:** All types | **Face:** All shapes | **Maintenance:** 2 weeks`
    },
    62: {
        name: "Short Spikes",
        details: `**Top:** 2-4" tight | **Sides:** #1-2 | **Style:** Compact spikes | **Texture:** All types | **Face:** Round, Oval | **Maintenance:** 3 weeks`
    },
    63: {
        name: "Long Spikes",
        details: `**Top:** 5-7" dramatic | **Sides:** #3-4 | **Style:** Extended spikes | **Texture:** Thick | **Face:** Oval, Square | **Maintenance:** 2 weeks`
    }
};

// AI Image Generation Prompt Template - Updated with your exact specifications
const PROMPT_TEMPLATE = `Generate 3 ultra-realistic portrait images in a horizontal 1×3 grid layout with consistent framing:

· Left panel: Front-facing view (direct camera view)
· Center panel: Side profile view (90° left or right, matching original photo orientation)
· Right panel: Back view (rear of the head and neck)

Keep the person's face, skin tone, facial identity, and all features 100% identical to the original photo. Do NOT change face structure, age, expression, or proportions.
Only apply the following hairstyle with natural blending and realistic detail.

HAIRSTYLE TO APPLY: [HAIRSTYLE_NAME]
HAIRSTYLE DETAILS: [HAIRSTYLE_DETAILS]

Requirements:

· Each image must clearly showcase the hairstyle from its specific angle
· Use soft, natural lighting with subtle shadows to enhance hair texture and depth
· High-resolution photorealistic rendering with lifelike hair strands and seamless integration
· Maintain exact facial features, skin texture, and proportions from the original
· Ensure the hairstyle looks naturally grown and perfectly blended with the hairline
· Label each panel below the image with:
    "Front | [HAIRSTYLE_NAME]"
    "Side | [HAIRSTYLE_NAME]"
    "Back | [HAIRSTYLE_NAME]"
    using a clean, modern, sans-serif font
· All three images must be aligned in a single 1×3 grid with consistent size and spacing`;

// Generate Prompt
function generatePrompt(hairstyleId) {
    const hairstyle = hairstyleDetails[hairstyleId];
    if (!hairstyle) return null;

    return PROMPT_TEMPLATE
        .replace(/\[HAIRSTYLE_NAME\]/g, hairstyle.name)
        .replace('[HAIRSTYLE_DETAILS]', hairstyle.details);
}

// Copy to Clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showCopySuccess();
    }).catch(err => {
        // Fallback
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showCopySuccess();
    });
}

// Show Success Message
function showCopySuccess() {
    const notification = document.createElement('div');
    notification.className = 'prompt-copy-success';
    notification.innerHTML = `
        <div class="success-content">
            <i class="fas fa-check-circle"></i>
            <div class="success-text">
                <strong>Prompt Copied!</strong>
                <span>Ready for AI generation</span>
            </div>
        </div>
    `;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

// Add Prompt Button to Modal - Same size and alignment as rating button
function addPromptButtonToModal() {
    setTimeout(() => {
        const ratingSection = document.querySelector('.rating-section');
        if (ratingSection && !document.getElementById('generatePromptBtn')) {
            // Create button container to match rating button layout
            const promptContainer = document.createElement('div');
            promptContainer.className = 'prompt-button-container';
            
            const promptButton = document.createElement('button');
            promptButton.id = 'generatePromptBtn';
            promptButton.className = 'btn prompt-copy-btn';
            promptButton.innerHTML = '<i class="fas fa-copy"></i> Prompt Copy';
            
            promptButton.addEventListener('click', () => {
                if (window.currentHairstyle) {
                    const prompt = generatePrompt(window.currentHairstyle.id);
                    if (prompt) {
                        copyToClipboard(prompt);
                    }
                }
            });
            
            promptContainer.appendChild(promptButton);
            ratingSection.appendChild(promptContainer);
        }
    }, 100);
}

// Initialize Prompt System
function initializePromptSystem() {
    console.log('🚀 Initializing prompt system...');
    
    // Add styles for prompt button matching rating button
    if (!document.querySelector('#prompt-styles')) {
        const style = document.createElement('style');
        style.id = 'prompt-styles';
        style.textContent = `
            .prompt-button-container {
                margin-top: 15px;
                width: 100%;
            }
            
            .prompt-copy-btn {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
                color: white !important;
                border: none !important;
                padding: 10px 15px !important;
                border-radius: 5px !important;
                cursor: pointer !important;
                font-weight: bold !important;
                font-size: 0.9rem !important;
                width: 100% !important;
                transition: all 0.3s ease !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                gap: 8px !important;
                height: 40px !important;
                box-sizing: border-box !important;
            }
            
            .prompt-copy-btn:hover {
                background: linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%) !important;
                transform: translateY(-1px);
                box-shadow: 0 2px 8px rgba(102, 126, 234, 0.4);
            }
            
            .prompt-copy-btn i {
                font-size: 0.9em;
            }
            
            /* Rating Section Layout */
            .rating-section {
                display: flex;
                flex-direction: column;
                gap: 15px;
            }
            
            /* Ensure both buttons have same width and alignment */
            #submitRating, .prompt-copy-btn {
                min-height: 40px;
                font-size: 0.9rem;
                font-weight: 600;
            }
            
            /* Success Notification */
            .prompt-copy-success {
                position: fixed;
                top: 20px;
                right: 20px;
                background: linear-gradient(135deg, #00b894 0%, #00a085 100%);
                color: white;
                padding: 12px 16px;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0, 184, 148, 0.3);
                z-index: 10000;
                animation: slideInRight 0.3s ease;
            }
            
            .success-content {
                display: flex;
                align-items: center;
                gap: 10px;
            }
            
            .success-content i {
                font-size: 1.2rem;
            }
            
            .success-text {
                display: flex;
                flex-direction: column;
            }
            
            .success-text strong {
                font-size: 0.9rem;
            }
            
            .success-text span {
                font-size: 0.75rem;
                opacity: 0.9;
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
        `;
        document.head.appendChild(style);
    }
    
    // Monitor modal openings
    const originalOpenModal = window.openHairstyleModal;
    if (originalOpenModal) {
        window.openHairstyleModal = function(hairstyle) {
            originalOpenModal(hairstyle);
            window.currentHairstyle = hairstyle;
            setTimeout(addPromptButtonToModal, 50);
        };
    }
    
    console.log('✅ Prompt system initialized - All 63 styles supported');
}

// Wait for dependencies
function waitForDependencies() {
    if (typeof window.openHairstyleModal !== 'undefined') {
        initializePromptSystem();
    } else {
        setTimeout(waitForDependencies, 100);
    }
}

// Start initialization
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', waitForDependencies);
} else {
    waitForDependencies();
}

// Export functions
window.PromptGenerator = {
    generatePrompt,
    copyToClipboard,
    hairstyleDetails
};

console.log('📝 Prompt.js loaded - 63 professional hairstyles ready');
[file content end]