const text = "Software Engineer";
const typingSpeed = 100; // Adjust typing speed (milliseconds per character)
const pauseTime = 2000;  // Pause after fully typing (milliseconds)

const animatedTextElement = document.getElementById('animated-text');

let index = 0;
let isDeleting = false;

function typeAnimation() {
  if (!isDeleting && index <= text.length) {
    // Add one character at a time
    animatedTextElement.textContent = text.slice(0, index + 1);
    index++;
  } else if (isDeleting && index >= 0) {
    // Remove one character at a time
    animatedTextElement.textContent = text.slice(0, index - 1);
    index--;
  }

  if (index === text.length && !isDeleting) {
    // Wait at the end before deleting
    isDeleting = true;
    setTimeout(typeAnimation, pauseTime);
  } else if (index === 0 && isDeleting) {
    // Reset for retyping
    isDeleting = false;
  }

  setTimeout(typeAnimation, isDeleting ? typingSpeed / 2 : typingSpeed);
}

// Start the animation
typeAnimation();

const contactEmail = "example@example.com";
const subject = "Contact Form Submission";

const submitForm = (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const mailtoURL = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        name
    )} (${encodeURIComponent(email)}): ${encodeURIComponent(message)}`;

    try {
        window.open(mailtoURL, '_self'); // Open in the current tab
    } catch (error) {
        console.error("Could not open email client:", error);
        alert("Unable to open email client. Please copy the email address and send manually.");
    }
};

document.getElementById("contactForm").addEventListener("submit", submitForm);




