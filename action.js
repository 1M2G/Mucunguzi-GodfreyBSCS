document.addEventListener("DOMContentLoaded", function(){
    
    const loginForm = document.querySelector("form:nth-of-type(1)");
    const registerForm = document.querySelector("form:nth-of-type(2)");

        // Password toggle functionality
    const togglePassword = document.getElementById("togglePassword");
    const passwordInput = document.getElementById("password");

    if (togglePassword && passwordInput) {
        togglePassword.addEventListener("click", function(){
            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                togglePassword.textContent = "📪"; // Change to closed eye icon
            } else {
                passwordInput.type = "password";
                togglePassword.textContent = "📭"; // Open eye icon
            }
        });
    }

    loginForm.addEventListener("submit", function(event){
        event.preventDefault();

        const username = loginForm.querySelector("input[name='username']").value.trim();
        const password = loginForm.querySelector("input[name='password']").value.trim();

        if (!username || !password){
            alert("Please enter both username and password.");
            return;
        }

        // simulated authentication with real authentication logic
        if(username === "admin1" && password === "password@123"){
            alert("Login successful! Redirecting to dashbord...");
            sessionStorage.setItem("authenticated", "true");
            window.location.href = "dashboard.html";

        }else {
            alert("Invalid user or password");
        }
    });


    registerForm.addEventListener("submit", function (event){
        event.preventDefault();

        const email = registerForm.querySelector("input[name='email']").value.trim();
        const newPassword = registerForm.querySelector("input[name='new-password']").value.trim();
        const confirmPassword = registerForm.querySelector("input[name='confirm-password']").value.trim();


        if(!email || !newPassword || !confirmPassword){
            alert("All fields are required");
            return;
        }

        if(!validateEmail(email)) {
            alert("Invalid email format");
            return;
        }

        if (newPassword.length < 8){
            alert("Password must be atleast 8 characters long ");
            return;
        }

        if (newPassword !== confirmPassword){
            alert("Passwords do not match. Try again");
            return;
        }

        alert("Registration successful!");
        registerForm.reset();
    });

    function validateEmail(email){
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }


    // Dashboard authentication check
    if (window.location.pathname.includes("dashboard.html")) {
        if (sessionStorage.getItem("authenticated") !== "true"){
        alert("Access denied! Please Log in First.");
        window.location.href = "index.html";
        }
    }

    const welcomeMessage = document.getElementById("welcome-message");

    // Get the username from sessionStorage
    const username = sessionStorage.getItem("username") || "Guest";

    // Update welcome message
    welcomeMessage.textContent = `You are welcome, ${username}`;

    // Logout function
    window.logout = function () {
        sessionStorage.clear();
        alert("Logged out successfully!");
        window.location.href = "index.html"; // Redirect to login page
    };

});

