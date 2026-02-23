import os
import glob

files = glob.glob('src/*.html')
script_tag = '<script src="../assets/js/wow_effects.js"></script>\n'

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if script_tag in content:
        content = content.replace(script_tag, '')
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)

print(f"Cleaned up HTML files")
