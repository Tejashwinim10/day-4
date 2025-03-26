// Get the modal, open button, and close button
const modal = document.getElementById('modal');
const openModal = document.getElementById('openModal');
const closeModal = document.querySelector('.close-btn');

// Open modal when button is clicked
openModal.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Close modal when close button is clicked
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal when clicking outside of the modal content
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
