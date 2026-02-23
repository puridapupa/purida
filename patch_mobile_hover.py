import re

file_path = 'assets/css/custom_background.css'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Add :active states alongside :hover states for mobile touch interaction
content = content.replace('.card-hover-lift:hover {', '.card-hover-lift:hover,\n.card-hover-lift:active {')
content = content.replace('.img-zoom-wrapper:hover .img-zoom-target {', '.img-zoom-wrapper:hover .img-zoom-target,\n.img-zoom-wrapper:active .img-zoom-target {')
content = content.replace('.btn-premium:hover::before {', '.btn-premium:hover::before,\n.btn-premium:active::before {')

# Enable interaction scaling for mobile on interactive elements like buttons and accordion summaries
mobile_css = """
/* ===== Mobile Touch Enablement ===== */
/* Adding active states to emulate hover interactions on mobile tap */
@media (hover: none) and (pointer: coarse) {
    .card-hover-lift:active {
        transform: translateY(-6px) scale(1.01) !important;
        box-shadow: 0 20px 25px -5px rgba(112, 92, 83, 0.1), 0 8px 10px -6px rgba(112, 92, 83, 0.1) !important;
        border-color: rgba(112, 92, 83, 0.15);
        transition-duration: 0.1s !important;
    }
    .img-zoom-wrapper:active .img-zoom-target {
        transform: scale(1.08) !important;
        transition-duration: 0.3s !important;
    }
    .btn-premium:active::before {
        left: 100%;
        transition-duration: 0.3s;
    }
    
    /* Ensure elements can handle touch-action */
    .card-hover-lift, .img-zoom-wrapper, .btn-premium {
        -webkit-tap-highlight-color: transparent;
    }
}
"""

if '/* ===== Mobile Touch Enablement ===== */' not in content:
    content += '\n' + mobile_css

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated custom_background.css for mobile interactions successfully!")
