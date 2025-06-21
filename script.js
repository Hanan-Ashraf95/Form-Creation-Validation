// Step 1: Wait for the entire HTML document to be loaded and ready.
document.addEventListener('DOMContentLoaded', () => {

    // Step 2: Select the important elements from our HTML page.
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // Step 3: Add an event listener to watch for the 'submit' event on our form.
    form.addEventListener('submit', (event) => {
        
        // Step 4: Stop the form from submitting right away.
        // Our "security guard" says "WAIT! Let me check your info."
        event.preventDefault();

        // Step 5: Get the user's input and trim any extra spaces from the ends.
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Step 6: Prepare for validation.
        let isValid = true; // A flag to track if everything is correct.
        const messages = []; // A list to hold any error messages.

        // Step 7: Perform the validation checks.
        
        // Username Validation
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Email Validation
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Please enter a valid email address.');
        }

        // Password Validation
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        // Step 8: Display feedback to the user.
        feedbackDiv.style.display = 'block'; // Make the feedback box visible.

        if (isValid) {
            // If everything is correct...
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745'; // Green for success
            feedbackDiv.style.backgroundColor = '#d4edda'; // Light green background
        } else {
            // If there are errors...
            feedbackDiv.innerHTML = messages.join('<br>'); // Join messages with line breaks.
            feedbackDiv.style.color = '#dc3545'; // Red for error
            feedback-div.style.backgroundColor = '#f8d7da'; // Light red background
        }
    });
});
