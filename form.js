// scripts.js
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Basic validation (optional)
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
  
    if (name && email && message) {
      alert("Thank you for your message! We will get back to you soon.");
      // Here, you can add the logic to send the form data to your server.
      // For example, you can use AJAX or a form-handling service like Formspree.
      document.getElementById("contactForm").reset(); // Clear the form
    } else {
      alert("Please fill out all required fields.");
    }
  });
  