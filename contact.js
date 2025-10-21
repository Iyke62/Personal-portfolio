document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    // Get form values
    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    // Get error message elements
    const nameError = document.getElementById("error-name");
    const emailError = document.getElementById("error-email");
    const subjectError = document.getElementById("error-subject");
    const messageError = document.getElementById("error-message");

    // Reset all errors and success message
    nameError.textContent = "";
    emailError.textContent = "";
    subjectError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;

    // Validate Full Name
    if (fullName.value.trim() === "") {
      nameError.textContent = "Full name is required.";
      isValid = false;
    }

    // Validate Email
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.value.trim() === "") {
      emailError.textContent = "Email is required.";
      isValid = false;
    } else if (!emailPattern.test(email.value.trim())) {
      emailError.textContent = "Please enter a valid email address.";
      isValid = false;
    }

    // Validate Subject
    if (subject.value.trim() === "") {
      subjectError.textContent = "Subject is required.";
      isValid = false;
    }

    // Validate Message (must be at least 10 characters)
    const messageText = message.value.trim();
    if (messageText === "") {
      messageError.textContent = "Message cannot be empty.";
      isValid = false;
    } else if (messageText.length < 10) {
      messageError.textContent = "Message must be at least 10 characters long.";
      isValid = false;
    }

    // If valid, show success message
    if (isValid) {
      successMessage.textContent = "✅ Message sent successfully!";
      successMessage.style.color = "green";

      form.reset(); // Clear form

      // Hide success message after 3 seconds
      setTimeout(() => {
        successMessage.textContent = "";
      }, 3000);
    }
  });
});
