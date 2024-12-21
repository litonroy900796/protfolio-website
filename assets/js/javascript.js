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
