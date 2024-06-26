document.addEventListener('DOMContentLoaded', () => {
    // FAQ Section Toggle:
    // Adds a click event listener to each FAQ question. When a question is clicked,
    // it toggles the visibility of the corresponding answer with a smooth transition.
    // If the question is clicked again, it hides the answer.
    const faqQuestions = document.querySelectorAll('.faq-question');
  
    faqQuestions.forEach(question => {
      question.addEventListener('click', () => {
        question.classList.toggle('active');
        
        const answer = question.querySelector('p');
        
        if (question.classList.contains('active')) {
          answer.style.maxHeight = `${answer.scrollHeight}px`;
        } else {
          answer.style.maxHeight = '0';
        }
      });
    });
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    // Lazy Loading Images:
    // Implements lazy loading for images. Uses the IntersectionObserver API to load images
    // only when they are about to enter the viewport. This improves page load times by
    // loading images only when necessary.
    const images = document.querySelectorAll('img[data-src]');
  
    const loadImage = (image) => {
      image.src = image.dataset.src;
      image.removeAttribute('data-src');
    }
  
    const imgObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          loadImage(entry.target);
          observer.unobserve(entry.target);
        }
      });
    });
  
    images.forEach(img => {
      imgObserver.observe(img);
    });
  });
  


