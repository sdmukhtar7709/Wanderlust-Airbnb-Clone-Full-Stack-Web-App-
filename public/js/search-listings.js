document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.querySelector('.search-input');
  const listingsContainer = document.querySelector('.listing-links');

  if (!searchInput || !listingsContainer) return;

  // Store original order of cards
  const originalCards = Array.from(listingsContainer.children);

  searchInput.addEventListener('input', function() {
    const query = searchInput.value.trim().toLowerCase();

    if (!query) {
      // Reset to original order if search is empty
      listingsContainer.innerHTML = '';
      originalCards.forEach(card => listingsContainer.appendChild(card));
      return;
    }

    const cards = Array.from(listingsContainer.querySelectorAll('.card'));
    const matching = [];
    const nonMatching = [];

    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      if (text.includes(query)) {
        matching.push(card);
      } else {
        nonMatching.push(card);
      }
    });

    listingsContainer.innerHTML = '';
    matching.forEach(card => listingsContainer.appendChild(card));
    nonMatching.forEach(card => listingsContainer.appendChild(card));
  });
});
