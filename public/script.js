document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.hidden-section');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible-section');
        } else {
          entry.target.classList.remove('visible-section');
        }
      });
    }, {
      threshold: 0.1
    });
  
    sections.forEach(section => {
      observer.observe(section);
    });
});
  