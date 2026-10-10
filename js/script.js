'use strict';
const filters = document.querySelectorAll('[data-filter]');
const resources = document.querySelectorAll('[data-category]');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  let count = 0;
  resources.forEach(card => {
    card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;
    if (!card.hidden) count++;
  });
  document.getElementById('resource-count').textContent = `Showing ${count} ${count === 1 ? 'resource' : 'resources'}.`;
}));
const nextSteps = {
  technology: 'Try “Your very first web page” in the resources section. Build a heading and a paragraph, then show someone what you made.',
  growth: 'Try “Make your next goal smaller” in the resources section. Choose one 20-minute action for this week.',
  community: 'Try “Spot a problem. Start an idea.” in the resources section. Pick a community challenge and sketch one small improvement.'
};
document.getElementById('join-form').addEventListener('submit', event => {
  event.preventDefault();
  const learner = document.getElementById('persona').value;
  const path = document.getElementById('path').value;
  if (!['Alex', 'Sam', 'Jordan'].includes(learner) || !Object.hasOwn(nextSteps, path)) return;
  document.getElementById('form-result').textContent = `${learner}’s demo next step: ${nextSteps[path]} This is a preview only; nothing has been submitted or saved.`;
});
