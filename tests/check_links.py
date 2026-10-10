"""Dependency-free local asset and anchor checks; no external network required."""
import re
import sys
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path

root = Path(sys.argv[1] if len(sys.argv) > 1 else '.').resolve()
class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids, self.anchors, self.paths = [], [], []
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            self.ids.append(attrs['id'])
        if tag == 'img':
            assert attrs.get('alt', '').strip(), 'Missing image alt text'
            assert int(attrs['width']) > 0 and int(attrs['height']) > 0
        for key in ('href', 'src'):
            value = attrs.get(key, '')
            if not value:
                continue
            if value.startswith('#'):
                self.anchors.append(value[1:])
            elif not re.match(r'^(?:https?:|mailto:|data:)', value):
                self.paths.append(value.split('#')[0])
page = Page()
page.feed((root / 'index.html').read_text())
assert all(count == 1 for count in Counter(page.ids).values()), 'Duplicate IDs'
assert set(page.anchors) <= set(page.ids), 'Broken section anchors'
for path in page.paths:
    assert (root / path).is_file(), f'Missing asset: {path}'
css = (root / 'css/style.css').read_text()
for path in re.findall(r'url\([\"\']?([^\)\"\']+)', css):
    if not path.startswith(('data:', 'http')):
        assert (root / 'css' / path).is_file(), f'Missing CSS asset: {path}'
for target in re.findall(r'\]\(([^)]+)\)', (root / 'README.md').read_text()):
    if not target.startswith(('http:', 'https:', '#')):
        assert (root / target).is_file(), f'Broken README link: {target}'
html = (root / 'index.html').read_text()
assert 'styles.css' not in html and 'README.txt' not in html
assert 'href="css/style.css"' in html and 'src="js/script.js"' in html
assert 'Copyright (c) 2026 Chidozie Philip Nwabueze' in (root / 'LICENSE').read_text()
print(f'PASS: assets, anchors, unique IDs, image attributes, README links and license in {root.name}.')
