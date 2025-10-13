// Professional Hairstyle Details Database - Updated with highly descriptive and visual details for AI generation
const hairstyleDetails = {
    // Fade Hairstyles (7)
    1: {
        name: "Low Fade",
        details: `A clean Low Fade that starts just above the ear. Top hair is 3 inches long, swept slightly to the side with natural volume and a matte finish. Sides blend cleanly to skin at the very bottom.`
    },
    2: {
        name: "Mid Fade",
        details: `A balanced Mid Fade starting at the temple. Top hair is 4-5 inches, heavily textured and styled slightly forward for a modern, dry finish. Excellent contrast between top and sides.`
    },
    3: {
        name: "High Fade",
        details: `A dramatic High Fade cut very short near the crown. Top hair is 5-6 inches long, slicked back or styled with significant height and shine for maximum contrast.`
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
        details: `The 4-inch top hair is precisely parted and combed flat to the side using a high-shine product. Sides and back are long, neatly tapered with scissors.`
    },
    30: {
        name: "Hard Part",
        details: `The 3-inch top hair is combed over. A razor is used to shave a bold, distinct line where the part is, sharply separating the long top from the short sides (#1 guard).`
    },
    31: {
        name: "Textured Side Part",
        details: `The 4-inch top hair is parted with a soft, natural line and styled to the side with visible layers and texture, using a matte product for volume.`
    },
    32: {
        name: "Fade Side Part",
        details: `A clean side part on top (3 inches long), paired with a Mid Fade on the sides. The contrast is sharp and clean.`
    },
    33: {
        name: "Curtain Part",
        details: `The 6-inch hair is parted directly down the center, falling symmetrically to frame the face on both sides. Wavy texture, natural movement.`
    },

    // Slick Back Styles (5)
    34: {
        name: "Classic Slick Back",
        details: `6-inch hair on top, combed aggressively straight back, flat against the head. Styled with heavy, oil-based pomade for intense, rigid shine. Sides are tightly tapered.`
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
        details: `Long, loose, natural curly hair (5-6 inches) on top, styled with maximum volume. Sides are cut short with scissors (#3 guard) to frame the curls.`
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

// AI Image Generation Prompt Template - Updated to prioritize fixed identity and hairstyle accuracy
const PROMPT_TEMPLATE = `Generate 3 ultra-realistic portrait images in a horizontal 1×3 grid layout with consistent framing, featuring a single, fixed facial identity:

· Left panel: Front-facing view (direct camera view)
· Center panel: Side profile view (90° left or right, matching original photo orientation)
· Right panel: Back view (rear of the head and neck)

**Crucially, the person's facial identity, skin tone, face structure, age, and expression must be 100% identical and unchanged across all three panels.**

Apply the following specific hairstyle with meticulous, natural blending and hyper-realistic detail:

HAIRSTYLE TO APPLY: **[HAIRSTYLE_NAME]**
HAIRSTYLE DETAILS: **[HAIRSTYLE_DETAILS]**

**Style Requirements:**

· Each image must perfectly and clearly showcase the **[HAIRSTYLE_NAME]** from its specific angle (front, side, back).
· Use **soft, diffused natural studio lighting** with subtle shadows to enhance hair texture, depth, and the shape of the head.
· High-resolution photorealistic rendering with lifelike, individually rendered hair strands and seamless integration with the hairline.
· The hairstyle must look **naturally grown** and professionally styled according to the details provided.
· **Consistency check:** Ensure the hair length and texture are perfectly matched and continuous between the side panel and the back panel.

**Output Format:**
· All three images must be aligned in a single 1x3 grid with consistent size and spacing.
· Label each panel below the image using a clean sans-serif font:
    "Front | [HAIRSTYLE_NAME]"
    "Side | [HAIRSTYLE_NAME]"
    "Back | [HAIRSTYLE_NAME]"`;

// Generate Prompt
function generatePrompt(hairstyleId) {
    const hairstyle = hairstyleDetails[hairstyleId];
    if (!hairstyle) return null;

    // Replace the placeholders with the selected hairstyle name and details
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

// Add Prompt Button to Modal - Horizontal layout with rating button
function addPromptButtonToModal() {
    setTimeout(() => {
        const ratingSection = document.querySelector('.rating-section');
        if (ratingSection && !document.getElementById('generatePromptBtn')) {
            // Create horizontal button container
            const buttonContainer = document.createElement('div');
            buttonContainer.className = 'horizontal-button-container';
            
            // Create prompt button
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
            
            // Add both buttons to container
            const submitRatingBtn = document.getElementById('submitRating');
            if (submitRatingBtn) {
                // Move submit rating button into container
                const submitRatingClone = submitRatingBtn.cloneNode(true);
                submitRatingBtn.remove();
                
                buttonContainer.appendChild(submitRatingClone);
                buttonContainer.appendChild(promptButton);
                
                // Add event listener to the cloned submit button
                submitRatingClone.addEventListener('click', function() {
                    if (userRating > 0 && currentHairstyle) {
                        // Show loading state
                        const originalText = this.textContent;
                        this.textContent = 'သိမ်းဆည်းနေသည်...';
                        this.disabled = true;
                        
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
                                this.textContent = originalText;
                                this.disabled = false;
                            }
                        }, 500);
                    } else {
                        alert('ကျေးဇူးပြု၍ အဆင့်သတ်မှတ်ချက်ကို ရွေးချယ်ပါ။');
                    }
                });
                
                ratingSection.appendChild(buttonContainer);
            } else {
                // Fallback if submit button not found
                buttonContainer.appendChild(promptButton);
                ratingSection.appendChild(buttonContainer);
            }
        }
    }, 100);
}

// Initialize Prompt System
function initializePromptSystem() {
    console.log('🚀 Initializing prompt system...');
    
    // Add styles for horizontal button layout
    if (!document.querySelector('#prompt-styles')) {
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
                padding: 10px 15px !important;
                border-radius: 5px !important;
                cursor: pointer !important;
                font-weight: bold !important;
                font-size: 0.9rem !important;
                transition: all 0.3s ease !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                gap: 8px !important;
                border: none !important;
                min-height: 44px;
            }
            
            /* Rating Button Styles */
            #submitRating {
                background: linear-gradient(135deg, #28a745 0%, #20c997 100%) !important;
                color: white !important;
            }
            
            #submitRating:hover {
                background: linear-gradient(135deg, #218838 0%, #1e9e8a 100%) !important;
                transform: translateY(-1px);
                box-shadow: 0 2px 8px rgba(40, 167, 69, 0.4);
            }
            
            /* Prompt Button Styles */
            .prompt-copy-btn {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
                color: white !important;
            }
            
            .prompt-copy-btn:hover {
                background: linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%) !important;
                transform: translateY(-1px);
                box-shadow: 0 2px 8px rgba(102, 126, 234, 0.4);
            }
            
            .prompt-copy-btn i {
                font-size: 0.9em;
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
            
            /* Responsive adjustments */
            @media (max-width: 480px) {
                .horizontal-button-container {
                    flex-direction: column;
                    gap: 8px;
                }
                
                .horizontal-button-container .btn {
                    min-height: 40px;
                    font-size: 0.85rem !important;
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
