document.getElementById("contactForm").addEventListener("submit", function(event) {
    // Get input values, trim spaces
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let date = document.getElementById("date").value.trim();
    let message = document.getElementById("message").value.trim();

    // Validate required fields
    if (!name || !date || !message) {
        event.preventDefault(); // Stop form submit
        alert("Please fill out your name, preferred consultation date, and a message.");
        return;
    }

    // Validate email or phone is provided
    if (!email && !phone) {
        event.preventDefault(); // Stop form submit
        alert("Please provide either an email or a phone number.");
        return;
    }

    // If validation passes, DO NOT preventDefault
    // The form will submit normally and open mail client using mailto:
    alert("Thank you for your message! Your email client will open to send your request.");
    
    // Optionally, clear the form after submission (may happen before user sends email)
    // document.getElementById("contactForm").reset();
});

window.addEventListener('DOMContentLoaded', () => {
  const dateInput = document.getElementById('date');
  const today = new Date().toISOString().split('T')[0]; // format: yyyy-mm-dd
  dateInput.min = today;
});
