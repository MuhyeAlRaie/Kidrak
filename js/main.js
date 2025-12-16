// Form validation
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Get form fields
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const subject = document.getElementById('subject');
      const message = document.getElementById('message');
      
      // Reset previous error states
      document.querySelectorAll('.is-invalid').forEach(el => {
        el.classList.remove('is-invalid');
      });
      
      // Validate form
      let isValid = true;
      
      if (!name.value.trim()) {
        name.classList.add('is-invalid');
        isValid = false;
      }
      
      if (!email.value.trim() || !isValidEmail(email.value)) {
        email.classList.add('is-invalid');
        isValid = false;
      }
      
      if (!subject.value.trim()) {
        subject.classList.add('is-invalid');
        isValid = false;
      }
      
      if (!message.value.trim()) {
        message.classList.add('is-invalid');
        isValid = false;
      }
      
      // Show success or error message
      const formMessage = document.getElementById('formMessage');
      if (isValid) {
        // Get current language
        const currentLang = document.documentElement.lang;
        const successMsg = currentLang === 'ar' ? 
          langContent.ar.contactSuccess : 
          langContent.en.contactSuccess;
        
        formMessage.textContent = successMsg;
        formMessage.className = 'alert alert-success mt-3';
        formMessage.style.display = 'block';
        
        // Reset form
        contactForm.reset();
        
        // Hide message after 5 seconds
        setTimeout(() => {
          formMessage.style.display = 'none';
        }, 5000);
      } else {
        // Get current language
        const currentLang = document.documentElement.lang;
        const errorMsg = currentLang === 'ar' ? 
          langContent.ar.contactError : 
          langContent.en.contactError;
        
        formMessage.textContent = errorMsg;
        formMessage.className = 'alert alert-danger mt-3';
        formMessage.style.display = 'block';
      }
    });
  }
  
  // Email validation helper function
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    });
  });
});