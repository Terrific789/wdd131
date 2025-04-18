// Form validation function
function validateForm() {
    // Get form elements
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const errorMessage = document.getElementById("error-message");

    // Simple validation
    if (name === "" || email === "" || message === "") {
        errorMessage.textContent = "Please fill out all fields!";
        return false; // Prevent form submission
    } else {
        errorMessage.textContent = ""; // Clear error message if valid
        alert("Your message has been sent! Thank you for contacting us.");
        return true; // Proceed with form submission
    }
}
