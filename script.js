 var nameInput = document.getElementById("name");
        var emailInput = document.getElementById("email");
        var passwordInput = document.getElementById("password");
        var submitBtn = document.getElementById("submitBtn");
        var form = document.getElementById("registerForm");

        function validateForm() {

            var name = nameInput.value.trim();
            var email = emailInput.value.trim();
            var password = passwordInput.value;

            var nameValid = false;
            var emailValid = false;
            var passwordValid = false;

            // Name validation
            if (name === "") {
                document.getElementById("nameError").textContent =
                    "Name cannot be empty";
            } else {
                document.getElementById("nameError").textContent = "";
                nameValid = true;
            }

            // Email validation
            var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {
                document.getElementById("emailError").textContent =
                    "Enter a valid email address";
            } else {
                document.getElementById("emailError").textContent = "";
                emailValid = true;
            }

            // Password validation
            if (password.length < 6) {
                document.getElementById("passwordError").textContent =
                    "Password must contain at least 6 characters";
            } else {
                document.getElementById("passwordError").textContent = "";
                passwordValid = true;
            }

            // Enable button only when all fields are valid
            submitBtn.disabled = !(
                nameValid && emailValid && passwordValid
            );
        }

        // Real-time validation
        nameInput.addEventListener("input", validateForm);
        emailInput.addEventListener("input", validateForm);
        passwordInput.addEventListener("input", validateForm);

        // Form submission
        form.addEventListener("submit", function(event) {
            event.preventDefault();

            validateForm();

            if (!submitBtn.disabled) {
                document.getElementById("result").textContent =
                    "Registration successful!";
            }
        });