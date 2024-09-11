document.addEventListener('DOMContentLoaded', function () {
    const projectsDiv = document.getElementById('projects');
    const projects = [
        { name: 'Project 1', description: 'Description of Project 1' },
        { name: 'Project 2', description: 'Description of Project 2' },
        { name: 'Project 3', description: 'Description of Project 3' }
    ];

    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.innerHTML = `<h3>${project.name}</h3><p>${project.description}</p>`;
        projectsDiv.appendChild(projectDiv);
    });
});

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
      threshold: 0.1 // Adjust the percentage of the section that needs to be visible to trigger the animation
    });
  
    sections.forEach(section => {
      observer.observe(section);
    });
  });
  