document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Validation for name
        const nameField = form.querySelector('input[type="text"]');
        if (nameField.value.trim() === '') {
            alert('Please enter your name.');
            nameField.focus();
            return false;
        }
        
        // Validation for email
        const emailField = form.querySelector('input[type="email"]');
        if (emailField.value.trim() === '') {
            alert('Please enter a valid email address.');
            emailField.focus();
            return false;
        }
        
        // Validation for password and confirm password
        const passwordField = form.querySelector('input[type="password"]');
        const confirmPasswordField = form.querySelectorAll('input[type="password"]')[1];
        if (passwordField.value.trim() === '' || confirmPasswordField.value.trim() === '') {
            alert('Please enter and confirm your password.');
            passwordField.focus();
            return false;
        }
        if (passwordField.value !== confirmPasswordField.value) {
            alert('Passwords do not match.');
            confirmPasswordField.focus();
            return false;
        }

        // Validation for gender
        const genderField = form.querySelector('#gender');
        if (genderField.value === 'gender') {
            alert('Please select your gender.');
            genderField.focus();
            return false;
        }

        // Validation for terms and conditions
        const agreeTermsCheckbox = form.querySelector('#agreeTerms');
        if (!agreeTermsCheckbox.checked) {
            alert('Please agree to the terms and conditions.');
            return false;
        }

        // If all validations pass, submit the form
        alert('Form submitted successfully!');
        form.submit();
        window.location.href = 'homepage.html';
    });
});
