function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
      .then(response => {
          if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
      })
      .then(data => {
          if (typeof renderBooks === 'function') {
              renderBooks(data);
          } else {
              console.error('renderBooks is not defined');
          }
      })
      .catch(error => console.error('Fetch error:', error));
}

// Export for testing compatibility
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { fetchBooks };
}
