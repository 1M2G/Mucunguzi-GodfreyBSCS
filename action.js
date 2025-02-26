document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-container");
    const registerForm = document.getElementById("register-container");

    const showRegisterLink = document.getElementById("show-register");
    const showLoginLink = document.getElementById("show-login");

    // Switch to register form
    if (showRegisterLink) {
        showRegisterLink.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent link from refreshing the page
            loginForm.style.display = "none";  // Hide login form
            registerForm.style.display = "block"; // Show register form
        });
    }

    // Switch to login form
    if (showLoginLink) {
        showLoginLink.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent link from refreshing the page
            registerForm.style.display = "none";  // Hide register form
            loginForm.style.display = "block"; // Show login form
        });
    }

    // Password toggle functionality
    function setupPasswordToggle(toggleButtonId, passwordInputId) {
        const toggleButton = document.getElementById(toggleButtonId);
        const passwordInput = document.getElementById(passwordInputId);

        if (toggleButton && passwordInput) {
            toggleButton.addEventListener("click", function () {
                if (passwordInput.type === "password") {
                    passwordInput.type = "text";
                    toggleButton.textContent = "📪"; // Change to closed eye icon
                } else {
                    passwordInput.type = "password";
                    toggleButton.textContent = "📭"; // Open eye icon
                }
            });
        }
    }

    // Apply password toggle for login and register forms
    setupPasswordToggle("toggle-password-login", "password-login");
    setupPasswordToggle("toggle-password-register", "new-password");
    setupPasswordToggle("toggle-password-confirm", "confirm-password");

    // Simulated user data storage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const username = loginForm.querySelector("input[name='username']").value.trim();
            const password = document.getElementById("password-login").value.trim();

            if (!username || !password) {
                alert("Please enter both username and password.");
                return;
            }

            // Check if username exists and password matches
            const user = users.find(user => user.username === username && user.password === password);
            if (user) {
                alert(`Login successful! Welcome, ${username}`);
                sessionStorage.setItem("authenticated", "true");
                sessionStorage.setItem("username", username); // Store username

                document.body.innerHTML = "<h2>Redirecting to dashboard...</h2>";
                setTimeout(() => {
                    window.location.href = "dashboard.html";
                }, 1000);
            } else {
                alert("Invalid username or password.");
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const username = registerForm.querySelector("input[name='username']").value.trim();
            const email = registerForm.querySelector("input[name='email']").value.trim();
            const newPassword = document.getElementById("new-password").value.trim();
            const confirmPassword = document.getElementById("confirm-password").value.trim();

            // Validate all fields
            if (!username || !email || !newPassword || !confirmPassword) {
                alert("All fields are required.");
                return;
            }

            if (!validateEmail(email)) {
                alert("Invalid email format.");
                return;
            }

            if (newPassword.length < 8) {
                alert("Password must be at least 8 characters long.");
                return;
            }

            if (newPassword !== confirmPassword) {
                alert("Passwords do not match. Try again.");
                return;
            }

            // Check if username already exists
            if (users.some(user => user.username === username)) {
                alert("Username already exists. Please choose another one.");
                return;
            }

            // Register the new user
            const newUser = { username, email, password: newPassword };
            users.push(newUser);
            localStorage.setItem("users", JSON.stringify(users));

            alert("Registration successful! You can now log in.");
            registerForm.reset();
            registerForm.style.display = "none"; // Hide register form
            loginForm.style.display = "block";  // Show login form
        });
    }

    // Email validation function
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // Dashboard authentication check
    if (window.location.pathname.includes("dashboard.html")) {
        if (sessionStorage.getItem("authenticated") !== "true") {
            alert("Access denied! Please log in first.");
            window.location.href = "index.html"; // Redirect to login
        }
    }

    // Update welcome message with username
    document.addEventListener("DOMContentLoaded", function () {
        const welcomeMessage = document.getElementById("welcome-message");
        const username = sessionStorage.getItem("username") || "Guest";

        if (welcomeMessage) {
            welcomeMessage.textContent = `You Are Welcome, ${username}!`;
        }
    });

    // Logout function
    window.logout = function () {
        sessionStorage.clear();
        alert("Logged out successfully!");
        window.location.href = "index.html"; // Redirect to login page
    };
});
