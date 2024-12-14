// Rotating Text Animation (Letter by Letter)
const titles = ["Data Scientist", "Data Analyst", "Business Analyst"];
let index = 0;
let charIndex = 0;
const speed = 100; // Speed of typing (in ms)


function typeEffect() {
    const titleElement = document.getElementById("rotating-title");
    if (charIndex < titles[index].length) {
        // Add next character
        titleElement.textContent += titles[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, speed);
    } else {
        // Pause before erasing
        setTimeout(eraseEffect, 1000);
    }
}

function eraseEffect() {
    const titleElement = document.getElementById("rotating-title");
    if (charIndex > 0) {
        // Remove last character
        titleElement.textContent = titles[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, speed);
    } else {
        // Move to next title and start typing again
        index = (index + 1) % titles.length;
        setTimeout(typeEffect, speed);
    }
}

// Start the animation
document.addEventListener("DOMContentLoaded", typeEffect);


// Select all navigation links and sections----------------------------------------------------------1stnegivation
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links li a");

// Add scroll event listener
window.addEventListener("scroll", () => {
  let currentSection = "";

  // Find the current section in the viewport
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 50; // Adjust for navbar height
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id"); // Assuming each section has an ID
    }
  });

  // Highlight the active link
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(currentSection)) {
      link.classList.add("active");
    }
  });
});

//      ----------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const elementsToAnimate = document.querySelectorAll(".scroll-appear");

  const observerOptions = {
    root: null, // Observe within the viewport
    threshold: 0.1, // Trigger when 10% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Stop observing once visible
      }
    });
  }, observerOptions);

  elementsToAnimate.forEach(el => observer.observe(el));
});






