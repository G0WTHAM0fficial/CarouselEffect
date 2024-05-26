document.addEventListener('DOMContentLoaded', function () {
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const carouselInner = document.querySelector('.carousel-inner');
    const indicators = document.querySelectorAll('.indicator');
  
    let currentIndex = 0;
    const totalItems = document.querySelectorAll('.carousel-item').length;
  
    function updateCarousel() {
      carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
      indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
      });
    }
  
    prev.addEventListener('click', () => {
      currentIndex = (currentIndex === 0) ? totalItems - 1 : currentIndex - 1;
      updateCarousel();
    });
  
    next.addEventListener('click', () => {
      currentIndex = (currentIndex === totalItems - 1) ? 0 : currentIndex + 1;
      updateCarousel();
    });
  
    indicators.forEach(indicator => {
      indicator.addEventListener('click', () => {
        currentIndex = parseInt(indicator.getAttribute('data-slide'));
        updateCarousel();
      });
    });
  
    // Automatic sliding (optional)
    setInterval(() => {
      next.click();
    }, 5000);
  });
  