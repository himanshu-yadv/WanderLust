document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const listingsContainer = document.querySelector('.row.row-cols-lg-4.row-cols-md-2.row-cols-sm-1');
  
    if (searchForm && searchInput && listingsContainer) {
      searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const searchTerm = searchInput.value.toLowerCase().trim();
  
        // Get all listing cards
        const listingLinks = listingsContainer.querySelectorAll('.listing-link');
  
        listingLinks.forEach(link => {
          const card = link.querySelector('.listing-card');
          const titleElement = card.querySelector('.card-text b');
          const title = titleElement ? titleElement.textContent.toLowerCase() : '';
  
          if (title.includes(searchTerm)) {
            link.style.display = 'block';
          } else {
            link.style.display = 'none';
          }
        });
  
        // Optional: Show message if no results
        const visibleListings = listingsContainer.querySelectorAll('.listing-link[style*="block"]');
        if (visibleListings.length === 0) {
          const noResultsMessage = document.getElementById('no-results-message');
          if (!noResultsMessage) {
            const messageDiv = document.createElement('div');
            messageDiv.id = 'no-results-message';
            messageDiv.className = 'col-12 text-center mt-4';
            messageDiv.innerHTML = `<p>No listings found matching "${searchTerm}"</p>`;
            listingsContainer.parentNode.insertBefore(messageDiv, listingsContainer);
          }
        } else {
          const noResultsMessage = document.getElementById('no-results-message');
          if (noResultsMessage) {
            noResultsMessage.remove();
          }
        }
      });
  
      // Reset search when input is cleared
      searchInput.addEventListener('input', function() {
        if (this.value === '') {
          const listingLinks = listingsContainer.querySelectorAll('.listing-link');
          listingLinks.forEach(link => {
            link.style.display = 'block';
          });
          
          // Remove no results message if it exists
          const noResultsMessage = document.getElementById('no-results-message');
          if (noResultsMessage) {
            noResultsMessage.remove();
          }
        }
      });
    }
  });