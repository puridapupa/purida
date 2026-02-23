import re
import glob

def enhance_cards(content):
    # Accordions
    content = content.replace(
        'class="group bg-white rounded-2xl shadow-sm border border-sidebar/10 overflow-hidden"',
        'class="group bg-white rounded-2xl shadow-sm border border-sidebar/10 overflow-hidden card-hover-lift"'
    )
    # Simple cards
    content = re.sub(
        r'class="bg-white rounded-2xl shadow-sm p-6 md:p-8 hover:-translate-y-1 transition-transform duration-300 hover:shadow-md(.*?)"',
        r'class="bg-white rounded-2xl shadow-sm p-6 md:p-8 card-hover-lift\1"',
        content
    )
    # Contact cards
    content = re.sub(
        r'class="(.*?)bg-white rounded-2xl shadow-sm p-6(.*?)"',
        r'class="\1bg-white rounded-2xl p-6 shadow-md card-hover-lift\2"',
        content
    )
    return content

def enhance_glass_nav(content):
    content = content.replace(
        'class="fixed top-0 left-0 right-0 z-50 md:hidden"\n        style="background: linear-gradient(135deg, #705C53 0%, #4A3F38 100%)"',
        'class="fixed top-0 left-0 right-0 z-50 md:hidden glass-nav"\n        style=""'
    )
    content = content.replace(
        'id="mobileMenu" class="hidden bg-sidebar/95 backdrop-blur-sm"',
        'id="mobileMenu" class="hidden glass-nav"'
    )
    # Sidebar
    content = content.replace(
        'class="fixed left-0 top-0 h-full w-64 text-white p-6 flex-col transition-transform duration-300 z-40 hidden md:flex"\n            style="background: linear-gradient(180deg, #705C53 0%, #5D4B44 40%, #4A3F38 70%, #3D322C 100%)"',
        'class="fixed left-0 top-0 h-full w-64 text-white p-6 flex-col transition-transform duration-300 z-40 hidden md:flex glass-nav shadow-2xl"\n            style="background: rgba(112, 92, 83, 0.95); backdrop-filter: blur(20px);"'
    )
    return content
    
def enhance_headings(content):
    content = re.sub(
        r'<h1 class="(.*?text-sidebar.*?)">(.*?)</h1>',
        r'<h1 class="\1"><span class="text-gradient-earth">\2</span></h1>',
        content
    )
    return content

def enhance_images(content):
    # Wrap standard images in img-zoom-wrapper
    content = re.sub(
        r'<img src="(.*?)"(.*?)class="(.*?)"(.*?)>',
        r'<div class="img-zoom-wrapper rounded-xl w-full h-full overflow-hidden">\n<img src="\1"\2class="\3 img-zoom-target"\4>\n</div>',
        content
    )
    return content


files = glob.glob('src/*_section.html') + ['src/contactpage.html']

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    content = enhance_cards(content)
    content = enhance_glass_nav(content)
    content = enhance_headings(content)
    content = enhance_images(content)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print(f"Patched section files successfully!")
