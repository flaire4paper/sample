
    document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});
    
let scrollIndex = 0;
const carousel = document.getElementById('carousel');
const scrollAmount = 350; // Adjust scroll distance

function nextTestimonial() {
  carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}

function prevTestimonial() {
  carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
}




document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');

  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!email || !message) {
      displayStatus('Please fill in all fields.', 'error');
      return;
    }

    displayStatus('Sending message...', '');

    setTimeout(function() {
      displayStatus('Message sent successfully!', 'success');
      contactForm.reset();
    }, 2000);
  });
});
