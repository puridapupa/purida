import re

def fix_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Step 1: For PDFs
    content = content.replace(
        '<div class="w-full rounded-xl border border-sidebar/10 overflow-hidden"\n                        style="aspect-ratio: 210/297">',
        '<div class="w-full relative rounded-xl border border-sidebar/10 shadow-sm" style="height: 75vh; min-height: 500px; max-height: 900px; overflow-y: auto; -webkit-overflow-scrolling: touch;">'
    )
    # The iframe classes inside PDFs
    content = content.replace(
        '<iframe src="/assets/pdf_files/1.1/แผนการสอน.pdf" class="w-full h-full"',
        '<iframe src="/assets/pdf_files/1.1/แผนการสอน.pdf" class="w-full" style="min-height: 100%; border: none;" scrolling="auto"'
    )
    content = content.replace(
        '<iframe src="/assets/pdf_files/1.4/โครงร่างวิจัย.pdf" class="w-full h-full"',
        '<iframe src="/assets/pdf_files/1.4/โครงร่างวิจัย.pdf" class="w-full" style="min-height: 100%; border: none;" scrolling="auto"'
    )

    # Step 2: For Heyzine in sec_section
    content = content.replace(
        '<iframe\n                            src="https://heyzine.com/flip-book/09ccbf9e80.html"\n                            class="w-full h-full" title="การเก็บข้อมูล">\n                        </iframe>',
        '<iframe\n                            src="https://heyzine.com/flip-book/09ccbf9e80.html"\n                            class="absolute top-0 left-0 w-full h-full" style="border: none;" scrolling="no" allowfullscreen="true" allow="clipboard-write" title="การเก็บข้อมูล">\n                        </iframe>'
    )

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

fix_file('src/first_section.html')
fix_file('src/sec_section.html')

print("Updated iframe wrappers for mobile scrolling!")
