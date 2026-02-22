import zipfile
import re

z = zipfile.ZipFile('7 semester guide.oxps')
keywords = ['Holm', 'Kuada', 'Saunders', 'pensum', 'kilder', 'litteratur', 'metode', 'videnskabsteori', '2023', '2022', '2024']

all_matches = []
for name in z.namelist():
    try:
        content = z.read(name).decode('utf-8', errors='ignore')
        for kw in keywords:
            if kw.lower() in content.lower():
                # Extract context around keyword
                idx = content.lower().find(kw.lower())
                context = content[max(0, idx-200):min(len(content), idx+200)]
                all_matches.append(f'\n---FILE: {name}---\nKEYWORD: {kw}\n{context}\n')
                break
    except:
        pass

with open('extracted_text.txt', 'w', encoding='utf-8') as f:
    f.write('\n'.join(all_matches))
print(f"Found matches in {len(all_matches)} files")
z.close()
