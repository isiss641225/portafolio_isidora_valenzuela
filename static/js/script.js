// Selector interactivo de habilidades
function selectSkill(cardElement, name, description) {
  document.querySelectorAll('.skill-card').forEach(card => card.classList.remove('active'));
  cardElement.classList.add('active');

  const detailBox = document.getElementById('skill-box');
  detailBox.style.opacity = '0.4';

  setTimeout(() => {
    document.getElementById('skill-title').innerText = name;
    document.getElementById('skill-desc').innerText = description;
    detailBox.style.opacity = '1';
  }, 150);
}

// Filtro dinámico de proyectos
function filterProjects(category, btnElement) {
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  btnElement.classList.add('active');

  const projects = document.querySelectorAll('.project-card');
  projects.forEach(project => {
    if (category === 'todos' || project.getAttribute('data-category') === category) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
}