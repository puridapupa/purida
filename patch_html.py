import os
import glob

files = glob.glob('src/*.html')
script_tag = '<script src="../assets/js/wow_effects.js"></script>\n</body>'

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if 'wow_effects.js' not in content:
        content = content.replace('</body>', script_tag)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)

print(f"Patched {len(files)} HTML files successfully!")
