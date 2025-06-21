// Wait for the entire HTML document to be loaded and ready.
document.addEventListener('DOMContentLoaded', () => {

    // Select the form and the feedback div.
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // Add an event listener to the form for the 'submit' event.
    form.addEventListener('submit', (event) => {
        
        // Prevent the form from actually submitting to a server.
        event.preventDefault();

        // Retrieve and trim the user's inputs.
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Initialize validation variables.
        let isValid = true;
        const messages = [];

        // Perform Username Validation.
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Perform Email Validation.
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Please enter a valid email address.');
        }

        // Perform Password Validation.
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        // Displaying Feedback Logic
        feedbackDiv.style.display = "block"; // Make the feedback div visible.

        if (isValid) {
            // If all checks pass, show a success message.
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // Green color for success
            feedbackDiv.style.backgroundColor = "#d4edda";
        } else {
            // If any check fails, show the collected error messages.
            feedbackDiv.innerHTML = messages.join('<br>'); // Join messages with line breaks
            feedbackDiv.style.color = "#dc3545"; // Red color for errors
            feedbackDiv.style.backgroundColor = "#f8d7da";
        }
    });
});
