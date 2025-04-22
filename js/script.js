document.addEventListener("DOMContentLoaded", () => {
  console.log("HealthyLife website loaded successfully.");

  let slides = document.querySelectorAll(".image-slider .slide");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });
  }

  if (slides.length > 0) {
    showSlide(currentSlide);
    setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }, 3000);
  }

  const accordions = document.querySelectorAll(".accordion-item");
  accordions.forEach(button => {
    button.addEventListener("click", () => {
      const panel = button.nextElementSibling;
      panel.style.display = panel.style.display === "block" ? "none" : "block";
    });
  });

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
      e.preventDefault();
      const name = e.target.name.value;
      const email = e.target.email.value;
      const message = e.target.message.value;

      if (!name || !email || !message) {
        alert("All fields are required.");
        return;
      }

      alert("Thank you for contacting us! We will get back to you soon.");
      e.target.reset();
    });
  }

  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const savedEmail = localStorage.getItem("userEmail");
      const savedPassword = localStorage.getItem("userPassword");

      if (email === savedEmail && password === savedPassword) {
        alert("Login successful!");
        localStorage.setItem("loggedIn", "true");
        window.location.href = "index.html";
      } else {
        alert("Invalid credentials, please try again.");
      }
    });
  }

  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", function(e) {
      e.preventDefault();
      const email = document.getElementById("regEmail").value;
      const password = document.getElementById("regPassword").value;

      if (!email || !password) {
        alert("All fields are required.");
        return;
      }

      localStorage.setItem("userEmail", email);
      localStorage.setItem("userPassword", password);
      alert("Registration successful! You can now log in.");
      window.location.href = "login.html";
    });
  }

  const resetForm = document.getElementById("resetForm");
  if (resetForm) {
    resetForm.addEventListener("submit", function(e) {
      e.preventDefault();
      const email = document.getElementById("resetEmail").value;
      const newPassword = document.getElementById("newPassword").value;
      const savedEmail = localStorage.getItem("userEmail");

      if (email === savedEmail) {
        localStorage.setItem("userPassword", newPassword);
        alert("Password reset successful!");
        window.location.href = "login.html";
      } else {
        alert("Email not found. Please try again.");
      }
    });
  }
});
