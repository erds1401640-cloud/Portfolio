
/* Day 6 – JavaScript Basics */

// Store your name
const studentName = "Your Name";

// Connect HTML elements to JavaScript
const greeting = document.querySelector("#greeting");
const greetButton = document.querySelector("#greet-button");

// Function to display a fixed greeting
function sayHello() {
    greeting.textContent = "Hello! I am " + studentName;
}

// Run the function when the Day 6 button is clicked
greetButton.addEventListener("click", sayHello);


/* Day 7 – JavaScript Input and Conditions */

// Connect the name input, button, and message
const nameInput = document.querySelector("#name-input");
const welcomeButton = document.querySelector("#welcome-button");
const welcomeMessage = document.querySelector("#welcome-message");

// Function to greet the visitor
function greetVisitor() {
    const visitorName = nameInput.value.trim();

    if (visitorName === "") {
        welcomeMessage.textContent = "Enter your name first!";
    } else {
        welcomeMessage.textContent = "Welcome, " + visitorName + "!";
    }
}

// Run the function when the Day 7 button is clicked
welcomeButton.addEventListener("click", greetVisitor);
