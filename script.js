// Stripe Integration
document.addEventListener('DOMContentLoaded', function() {
  const buyBtn = document.getElementById('buy-btn');
  
  if (buyBtn && window.Stripe) {
    const stripe = window.Stripe(buyBtn.dataset.publicKey);
    
    buyBtn.addEventListener('click', function() {
      stripe.redirectToCheckout({
        lineItems: [{ 
          price: buyBtn.dataset.priceId, 
          quantity: 1 
        }],
        mode: 'payment',
        successUrl: window.location.origin + '?success=true',
        cancelUrl: window.location.origin + '?canceled=true'
      }).then(function(result) {
        if (result.error) {
          alert(result.error.message);
        }
      });
    });
  }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Excerpt Toggle
const readMoreBtn = document.getElementById('read-more-btn');
const excerptHidden = document.getElementById('excerpt-hidden');

if (readMoreBtn && excerptHidden) {
  readMoreBtn.addEventListener('click', function() {
    excerptHidden.classList.toggle('show');
    
    if (excerptHidden.classList.contains('show')) {
      readMoreBtn.textContent = 'Read Less';
    } else {
      readMoreBtn.textContent = 'Read More';
    }
  });
}

// FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', function() {
    const faqIndex = this.dataset.faq;
    const answer = document.querySelector(`[data-answer="${faqIndex}"]`);
    
    // Close all other FAQ items
    faqQuestions.forEach(otherQuestion => {
      if (otherQuestion !== this) {
        otherQuestion.classList.remove('active');
        const otherIndex = otherQuestion.dataset.faq;
        const otherAnswer = document.querySelector(`[data-answer="${otherIndex}"]`);
        if (otherAnswer) {
          otherAnswer.classList.remove('active');
        }
      }
    });
    
    // Toggle current FAQ item
    this.classList.toggle('active');
    if (answer) {
      answer.classList.toggle('active');
    }
  });
});

// Newsletter Form Handling
const newsletterForm = document.getElementById('mc-form');

if (newsletterForm) {
  newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = this.querySelector('input[name="EMAIL"]').value;
    
    if (!email) {
      alert('Please enter your email address.');
      return;
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    
    // Show success message (in real implementation, this would submit to Mailchimp)
    alert('Thank you for subscribing! You\'ll receive a confirmation email shortly.');
    this.reset();
    
    // Uncomment the line below when you have a real Mailchimp URL
    // this.submit();
  });
}

// Intersection Observer for Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.benefit-card, .faq-item, .author-content').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'all 0.6s ease-out';
  observer.observe(el);
});

// Success/Cancel URL handling
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('success')) {
  alert('Payment successful! Check your email for download links.');
}
if (urlParams.get('canceled')) {
  alert('Payment was canceled. You can try again anytime.');
}

// Mobile menu toggle (if needed for future enhancements)
function toggleMobileMenu() {
  const mobileMenu = document.querySelector('.mobile-menu');
  if (mobileMenu) {
    mobileMenu.classList.toggle('active');
  }
}

// Lazy loading for images
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// Performance optimization: Debounced scroll handler
let ticking = false;

function updateScrollPosition() {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelector('.hero');
  
  if (parallax) {
    parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
  
  ticking = false;
}

function requestTick() {
  if (!ticking) {
    requestAnimationFrame(updateScrollPosition);
    ticking = true;
  }
}

window.addEventListener('scroll', requestTick);