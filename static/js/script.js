// Selector interactivo de habilidades
function selectSkill(cardElement, name, description) {
  // Desactivar todas las tarjetas
  document.querySelectorAll('.skill-card').forEach(card => {
    card.classList.remove('active');
  });

  // Activar la tarjeta seleccionada
  cardElement.classList.add('active');

  // Actualizar la caja de detalle con animación sutil
  const detailBox = document.getElementById('skill-box');
  detailBox.style.opacity = '0.5';

  setTimeout(() => {
    document.getElementById('skill-title').innerText = name;
    document.getElementById('skill-desc').innerText = description;
    detailBox.style.opacity = '1';
  }, 150);
}