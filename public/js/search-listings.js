document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.querySelector('.search-input');
  const searchForm = searchInput ? searchInput.closest('form') : null;
  const listingsContainer = document.querySelector('#listing-grid');

  if (!searchInput || !listingsContainer) return;

  if (searchForm) {
    searchForm.addEventListener('submit', function(event) {
      event.preventDefault();
    });
  }

  // Store original order of listing columns
  const originalItems = Array.from(listingsContainer.children);

  searchInput.addEventListener('input', function() {
    const query = searchInput.value.trim().toLowerCase();

    if (!query) {
      listingsContainer.innerHTML = '';
      originalItems.forEach(item => listingsContainer.appendChild(item));
      return;
    }

    const items = Array.from(listingsContainer.children);
    const matching = [];
    const nonMatching = [];

    items.forEach(item => {
      const card = item.querySelector('.card');
      const text = card ? card.textContent.toLowerCase() : '';
      if (text.includes(query)) {
        matching.push(item);
      } else {
        nonMatching.push(item);
      }
    });

    listingsContainer.innerHTML = '';
    matching.forEach(item => listingsContainer.appendChild(item));
    nonMatching.forEach(item => listingsContainer.appendChild(item));
  });
});
