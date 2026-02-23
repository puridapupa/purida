import re

with open('src/homepage.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update text gradients on main headings
content = content.replace(
    'class="text-3xl md:text-4xl font-bold text-sidebar leading-tight"',
    'class="text-4xl md:text-5xl font-extrabold text-gradient-earth leading-tight tracking-tight"'
)

# 2. Update Image Wrapper and Target for Zoom and Float
content = content.replace(
    'class="relative w-72 h-72 md:w-[28rem] md:h-[28rem] rounded-[2rem] overflow-hidden shadow-2xl \n                                        bg-gradient-to-br from-white/50 to-white/30 p-1"',
    'class="relative w-72 h-72 md:w-[28rem] md:h-[28rem] rounded-[2rem] shadow-[0_20px_50px_rgba(112,92,83,0.3)] bg-gradient-to-br from-white/80 to-white/40 p-1 animate-float-slow img-zoom-wrapper"'
)
content = content.replace(
    'class="w-full h-full object-cover object-top scale-110 rounded-[1.75rem]"',
    'class="img-zoom-target rounded-[1.75rem]"'
)

# 3. Enhance timeline cards with card-hover-lift
content = re.sub(
    r'class="flex-1 bg-white rounded-2xl shadow-sm p-5 mb-4 hover:shadow-md transition-shadow(.*?)"',
    r'class="flex-1 bg-white rounded-2xl p-5 mb-4 shadow-sm card-hover-lift\1"',
    content
)

# 4. Enhance Certificates with card-hover-lift and img-zoom
content = content.replace(
    'class="bg-white p-2 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"',
    'class="bg-white p-2 rounded-2xl shadow-sm flex flex-col h-full card-hover-lift"'
)
content = content.replace(
    'class="w-full h-auto rounded-xl border border-gray-100"',
    'class="w-full h-auto rounded-xl border border-gray-100 img-zoom-target"'
)
# Wrap cert images in img-zoom-wrapper
content = re.sub(
    r'(<img src="\.\./assets/images/certificate/.*?" alt=".*?"\n\s*class="w-full h-auto rounded-xl border border-gray-100 img-zoom-target">)',
    r'<div class="img-zoom-wrapper rounded-xl">\1</div>',
    content
)

# 5. Buttons premium glow
content = content.replace(
    'hover:bg-sidebar/90 transition-all duration-200 hover:scale-105',
    'btn-premium shadow-lg shadow-sidebar/30 hover:shadow-sidebar/50'
)
content = content.replace(
    'hover:bg-btn-secondary transition-all duration-200 hover:scale-105',
    'btn-premium shadow-lg shadow-black/5 hover:shadow-black/10'
)


with open('src/homepage.html', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated homepage.html successfully.")
