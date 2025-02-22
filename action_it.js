// Function to display a greeting when the page loads
function greet() {
    alert("Welcome to the dynamic World");
}

document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("internalJsClick");
    const changeTextButton = document.getElementById("changeText"); 
    const toggleTextButton = document.getElementById("toggleText");
    const textElement = document.getElementById("text");
    const colorButton = document.getElementById("setColor");
    const resetButton = document.getElementById("resetColor");
    const colorInput = document.getElementById("colorInput");
    const bgColorDisplay = document.getElementById("bgColorDisplay");
    const errorMessage = document.getElementById("errorMessage");

    let originalText = textElement?.innerHTML || "";
    let newText = "I am testing JavaScript";
    let isOriginalText = true;

    // Ensure the button exists before adding event listeners
    if (button) {
        // Change text color to yellow when clicked and show an alert
        button.addEventListener("click", function () {
            button.style.color = "yellow";
            alert("This button was Clicked");
        });

        // Change text color to blue when hovered over
        button.addEventListener("mouseover", function () {
            button.style.color = "blue";
        });

        // Restore text color to yellow when mouse leaves
        button.addEventListener("mouseout", function () {
            button.style.color = "yellow";
        });
    }

    // Toggle paragraph text when "Change Text" button is clicked
    if (changeTextButton) {
        changeTextButton.addEventListener("click", function () {
            textElement.innerHTML = isOriginalText ? newText : originalText;
            isOriginalText = !isOriginalText; // Toggle state
        });
    }

    // Function to check if a given color is valid
    function isValidColor(color) {
        let testDiv = document.createElement("div");
        testDiv.style.color = color;
        return testDiv.style.color !== ""; // If empty, the color is invalid
    }

    // Change background color based on user input
    if (colorButton) {
        colorButton.addEventListener("click", function () {
            let userColor = colorInput.value.trim();

            if (isValidColor(userColor)) {
                document.body.style.backgroundColor = userColor;
                bgColorDisplay.innerText = `Current Background: ${userColor}`;
                errorMessage.innerText = "";
            } else {
                errorMessage.innerText = "Invalid color. Please enter a valid color name, hex, or RGB.";
            }
        });
    }

    // Reset background to default
    if (resetButton) {
        resetButton.addEventListener("click", function () {
            document.body.style.backgroundColor = "white";
            bgColorDisplay.innerText = "Current Background: white";
            errorMessage.innerText = "";
            colorInput.value = "";
        });
    }

    // Toggle button text
    if (changeTextButton) {
        changeTextButton.addEventListener("click", function () {
            changeTextButton.innerText =
                changeTextButton.innerText === "Change Text" ? "Text Changed!" : "Change Text";
        });
    }

    // Toggle paragraph text
    if (toggleTextButton) {
        toggleTextButton.addEventListener("click", function () {
            textElement.innerHTML = textElement.innerHTML === originalText ? newText : originalText;
        });
    }
});
