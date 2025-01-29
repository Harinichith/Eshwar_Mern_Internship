document.getElementById("subscribe-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;

    // Simple form validation
    if (email === "" || name === "") {
        alert("Please fill in all fields.");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Please enter a valid email address.");
    } else {
        // Display thank you message and hide the form
        document.getElementById("thank-you-message").style.display = "block";
        document.getElementById("subscribe-form").style.display = "none";
    }
});
