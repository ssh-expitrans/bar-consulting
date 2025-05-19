document.getElementById("contactForm").addEventListener("submit", function(event) {
    const submitBtn = document.getElementById("submitBtn");
    const spinner = document.getElementById("spinner");

    // Show spinner and disable button right away
    submitBtn.disabled = true;
    spinner.style.display = "inline-block";

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

        // Hide spinner and re-enable button
        submitBtn.disabled = false;
        spinner.style.display = "none";
        return;
    }

    // Validate email or phone is provided
    if (!email && !phone) {
        event.preventDefault(); // Stop form submit
        alert("Please provide either an email or a phone number.");

        // Hide spinner and re-enable button
        submitBtn.disabled = false;
        spinner.style.display = "none";
        return;
    }

    // If validation passes, DO NOT preventDefault
    // The form will submit normally and open mail client using mailto:
    alert("Thank you for your message! Your email client will open to send your request.");

    // Optionally clear form after a tiny delay so spinner is visible briefly
    setTimeout(() => {
      document.getElementById("contactForm").reset();
      submitBtn.disabled = false;
      spinner.style.display = "none";
    }, 500);
});
