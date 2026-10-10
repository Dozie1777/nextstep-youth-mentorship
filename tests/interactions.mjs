import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
function element(dataset = {}) {
  return { dataset, hidden: false, attrs: {}, listeners: {}, value: '', textContent: '',
    setAttribute(key, value) { this.attrs[key] = value; },
    addEventListener(event, callback) { this.listeners[event] = callback; } };
}
const filters = ['all', 'technology', 'growth', 'community'].map(filter => element({ filter }));
const cards = ['technology', 'growth', 'community'].map(category => element({ category }));
const ids = Object.fromEntries(['resource-count', 'join-form', 'persona', 'path', 'form-result'].map(id => [id, element()]));
vm.runInNewContext(fs.readFileSync(new URL('../js/script.js', import.meta.url), 'utf8'), {
  document: {
    querySelectorAll: selector => selector === '[data-filter]' ? filters : cards,
    getElementById: id => ids[id]
  }
});
for (const chosen of [...filters, filters[0]]) {
  chosen.listeners.click();
  for (const card of cards) assert.equal(card.hidden, chosen.dataset.filter !== 'all' && chosen.dataset.filter !== card.dataset.category);
  for (const filter of filters) assert.equal(filter.attrs['aria-pressed'], String(filter === chosen));
  const count = chosen.dataset.filter === 'all' ? 3 : 1;
  assert.equal(ids['resource-count'].textContent, `Showing ${count} ${count === 1 ? 'resource' : 'resources'}.`);
}
function submit() {
  let prevented = false;
  ids['join-form'].listeners.submit({ preventDefault() { prevented = true; } });
  assert(prevented);
}
for (const [path, expected] of Object.entries({ technology: 'Your very first web page', growth: 'Make your next goal smaller', community: 'Spot a problem. Start an idea.' })) {
  for (const person of ['Alex', 'Sam', 'Jordan']) {
    ids.persona.value = person; ids.path.value = path; submit();
    assert(ids['form-result'].textContent.startsWith(`${person}’s demo next step:`));
    assert(ids['form-result'].textContent.includes(expected));
    assert(ids['form-result'].textContent.includes('nothing has been submitted or saved'));
  }
}
for (const [person, path] of [['', ''], ['Unknown', 'technology'], ['Alex', 'unknown']]) {
  ids['form-result'].textContent = ''; ids.persona.value = person; ids.path.value = path;
  submit(); assert.equal(ids['form-result'].textContent, '');
}
console.log('PASS: filters, card visibility, pressed states, announcements, all nine demo combinations, and invalid values.');
