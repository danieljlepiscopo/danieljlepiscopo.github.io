// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Contact Form Submission Handler
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('formMessage');
  
    if (!name || !email || !message) {
      formMessage.textContent = "Please fill out all fields.";
      formMessage.style.color = "red";
      return;
    }
  
    // Simulate a successful submission (replace with real backend logic later)
    formMessage.textContent = "Message sent successfully! I'll get back to you soon.";
    formMessage.style.color = "lightgreen";
  
    // Clear form
    this.reset();
  });
  