import re

file_path = 'src/first_section.html'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Remove max-height and custom scrollbar classes from accordion contents
content = content.replace('max-h-[200px] overflow-y-auto pr-2 custom-scrollbar', '')
content = content.replace('max-h-[200px] overflow-y-auto pr-1 custom-scrollbar', '')
content = content.replace('max-h-[200px] overflow-y-auto custom-scrollbar', '')

js_code = """
        // --- Exclusive Accordions (Auto-close others) ---
        document.addEventListener('DOMContentLoaded', () => {
            const allDetails = document.querySelectorAll('details');
            allDetails.forEach((targetDetail) => {
                targetDetail.addEventListener('toggle', () => {
                    if (targetDetail.open) {
                        allDetails.forEach((detail) => {
                            if (detail !== targetDetail && detail.open) {
                                detail.open = false;
                            }
                        });
                    }
                });
            });
        });
"""

if '// --- Exclusive Accordions' not in content:
    content = content.replace('// --- Animations on Scroll ---', js_code + '\n        // --- Animations on Scroll ---')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated first_section.html accordions successfully!")
