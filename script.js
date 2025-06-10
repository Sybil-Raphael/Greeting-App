// Get the input field, button, and message elements from the page using their IDs
let nameInput = document.getElementById("nameInput");
let button = document.getElementById("welcomeBtn");
let messageDiv = document.getElementById("message");

// Add a click event to the button
button.addEventListener("click", function() {
    // Get the name entered by the user
    let userName = nameInput.value;

    // If the user entered a name, show a fun personalized message
    if (userName !== "") {
        messageDiv.textContent = "Welcome, " + userName + "! 🎉 You are awesome!";
    } else {
        // If no name is entered, ask the user to enter their name
        messageDiv.textContent = "Please enter your name above!";
    }

    // Clear the input field after clicking the button
    nameInput.value = "";
});

// Print a welcome message to the console (for practice)
console.log("Welcome, " + userName + "!");