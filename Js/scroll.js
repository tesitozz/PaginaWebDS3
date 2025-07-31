// Obtenemos el contenedor que tiene los ítems de navegación
const navContainer = document.querySelector(".nav-container");

// Variables para detectar el inicio del movimiento del mouse/touch
let isDown = false;
let startX;
let scrollLeft;

// Cuando el mouse se presiona, inicia el movimiento
navContainer.addEventListener("mousedown", (e) => {
  isDown = true;
  navContainer.classList.add("active");
  startX = e.pageX - navContainer.offsetLeft; // Posición inicial
  scrollLeft = navContainer.scrollLeft; // Posición actual del scroll
});

// Cuando el mouse se mueve, desplazamos el contenedor
navContainer.addEventListener("mousemove", (e) => {
  if (!isDown) return; // Solo si el mouse está presionado
  e.preventDefault(); // Evita que se seleccione texto mientras arrastras
  const x = e.pageX - navContainer.offsetLeft;
  const walk = (x - startX) * 3; // Factor de desplazamiento
  navContainer.scrollLeft = scrollLeft - walk;
});

// Cuando el mouse se deja de presionar, detiene el movimiento
navContainer.addEventListener("mouseup", () => {
  isDown = false;
  navContainer.classList.remove("active");
});

// Para permitir desplazamiento táctil en dispositivos móviles
navContainer.addEventListener("touchstart", (e) => {
  isDown = true;
  startX = e.touches[0].pageX - navContainer.offsetLeft;
  scrollLeft = navContainer.scrollLeft;
});

navContainer.addEventListener("touchmove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.touches[0].pageX - navContainer.offsetLeft;
  const walk = (x - startX) * 3;
  navContainer.scrollLeft = scrollLeft - walk;
});

navContainer.addEventListener("touchend", () => {
  isDown = false;
});
