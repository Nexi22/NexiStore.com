"Use strict"

const slider = document.querySelector('.slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;
let intervalId;

// Función para mostrar la diapositiva siguiente
function showNextSlide() {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateSlider();
}

// Función para mostrar la diapositiva anterior
function showPrevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = slides.length - 1;
  }
  updateSlider();
}

// Función para actualizar el carrusel
function updateSlider() {
  const translateX = -currentIndex * 100;
  slider.style.transform = `translateX(${translateX}%)`;
}

// Función para iniciar el carrusel automático
function startAutoSlider() {
  intervalId = setInterval(showNextSlide, 5000); // Cambia de slide cada 3 segundos
}

// Función para detener el carrusel automático
function stopAutoSlider() {
  clearInterval(intervalId);
}

// Iniciar el carrusel automático al cargar la página
startAutoSlider();
