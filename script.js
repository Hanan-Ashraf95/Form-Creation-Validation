// Requirement: Wrap the entire script in a DOMContentLoaded event listener.
document.addEventListener('DOMContentLoaded', function() { // Using traditional function

    // Requirement: Select the form.
    const form = document.getElementById('registration-form');
    
    // Requirement: Select the feedback division.
    const feedbackDiv = document.getElementById('form-feedback');

    // Requirement: Add a 'submit' event listener to the form.
    form.addEventListener('submit', function(event) { // Using traditional function
        
        // Requirement: Prevent the default form submission.
        event.preventDefault();

        // Requirement: Retrieve and trim user inputs.
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Requirement: Initialize validation variables.
        let isValid = true;
        const messages = [];

        // Requirement: Username Validation (at least 3 characters).
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Requirement: Email Validation (must include '@' and '.').
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Please enter a valid email address.');
        }

        // Requirement: Password Validation (at least 8 characters).
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        // Requirement: Displaying Feedback Logic.
        feedbackDiv.style.display = "block"; // Make the feedback div visible.

        if (isValid) {
            // If all checks pass...
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
        } else {
            // If any check fails...
            feedbackDiv.innerHTML = messages.join('<br>'); // Join messages with line breaks.
            feedbackDiv.style.color = "#dc3545";
        }
    });
});
