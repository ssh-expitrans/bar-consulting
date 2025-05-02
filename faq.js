/* For the FAQ page */

document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const item = button.closest('.faq-item');
      item.classList.toggle('active');
    });
  });
  
  