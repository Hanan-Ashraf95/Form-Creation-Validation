// Wait for the entire HTML document to be loaded and ready.
document.addEventListener('DOMContentLoaded', () => {

    // Select all the important elements from our HTML page.
    const form = document.getElementById('registration-form');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const feedbackDiv = document.getElementById('form-feedback');

    // --- Validation Functions ---
    // We create separate functions to keep our code clean.

    function validateUsername() {
        const username = usernameInput.value.trim();
        const errorSpan = usernameInput.nextElementSibling; // The span right after the input

        if (username.length >= 3) {
            usernameInput.classList.add('valid');
            usernameInput.classList.remove('invalid');
            errorSpan.textContent = '';
            return true;
        } else {
            usernameInput.classList.add('invalid');
            usernameInput.classList.remove('valid');
            errorSpan.textContent = 'Username must be at least 3 characters long.';
            return false;
        }
    }

    function validateEmail() {
        const email = emailInput.value.trim();
        const errorSpan = emailInput.nextElementSibling;
        // This is a Regular Expression (regex) for better email validation.
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailPattern.test(email)) {
            emailInput.classList.add('valid');
            emailInput.classList.remove('invalid');
            errorSpan.textContent = '';
            return true;
        } else {
            emailInput.classList.add('invalid');
            emailInput.classList.remove('valid');
            errorSpan.textContent = 'Please enter a valid email address.';
            return false;
        }
    }

    function validatePassword() {
        const password = passwordInput.value.trim();
        const errorSpan = passwordInput.nextElementSibling;

        if (password.length >= 8) {
            passwordInput.classList.add('valid');
            passwordInput.classList.remove('invalid');
            errorSpan.textContent = '';
            return true;
        } else {
            passwordInput.classList.add('invalid');
            passwordInput.classList.remove('valid');
            errorSpan.textContent = 'Password must be at least 8 characters long.';
            return false;
        }
    }

    // --- Real-time Event Listeners ---
    // These run the validation function every time the user types.

    usernameInput.addEventListener('input', validateUsername);
    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);

    // --- Form Submission Event Listener ---
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Stop the form from submitting.

        // Run all validations one last time before submitting.
        const isUsernameValid = validateUsername();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();

        // Check if the entire form is valid.
        if (isUsernameValid && isEmailValid && isPasswordValid) {
            feedbackDiv.style.display = 'block';
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745';
            feedbackDiv.style.backgroundColor = '#d4edda';
        } else {
            feedbackDiv.style.display = 'block';
            feedbackDiv.textContent = 'Please correct the errors above.';
            feedbackDiv.style.color = '#dc3545';
            feedbackDiv.style.backgroundColor = '#f8d7da';
        }
    });
});
