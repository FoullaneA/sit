const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click",() => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active")
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
}))



function submitForm() {
    const form = document.getElementById('contact-form');
    const formData = new FormData(form);
  
    fetch('https://formspree.io/f/mdorevkk', {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      },
      body: formData
    })
    .then(response => {
      if (response.ok) {
        // Clear form fields
        form.reset();
        
        // Remove existing success message if present
        const existingSuccessMessage = form.parentNode.querySelector('.success-message');
        if (existingSuccessMessage) {
          existingSuccessMessage.remove();
        }
        
        // Display success message
        const successMessage = document.createElement('p');
        successMessage.textContent = 'Your message has been sent successfully!';
        successMessage.style.color = 'green';
        successMessage.className = 'success-message'; // Add a class for identification
        form.parentNode.insertBefore(successMessage, form.nextSibling);
      } else {
        // Handle error (display an error message, etc.)
      }
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle error (display an error message, etc.)
    });
  }
  