// =======================
// Part 1: Event Handling
// =======================

// Example: Light/Dark mode toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// =======================
// Part 2: Interactive Elements
// =======================

// Counter Game
let count = 0;
const counter = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");

incrementBtn.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});

// Collapsible FAQ Section
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.style.display =
      answer.style.display === "block" ? "none" : "block";
  });
});

// =======================
// Part 3: Form Validation
// =======================

const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop form from submitting

  let errors = [];

  // Name validation
  if (nameInput.value.trim() === "") {
    errors.push("Name cannot be empty.");
  }

  // Email validation (basic regex)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    errors.push("Please enter a valid email.");
  }

  // Password validation
  if (passwordInput.value.length < 6) {
    errors.push("Password must be at least 6 characters long.");
  }

  // Show messages
  if (errors.length > 0) {
    formMessage.textContent = errors.join(" ");
    formMessage.style.color = "red";
  } else {
    formMessage.textContent = "Form submitted successfully ✅";
    formMessage.style.color = "green";
    form.reset();
  }
});
