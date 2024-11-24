// Mostrar/ocultar botón "Volver al inicio"
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});
