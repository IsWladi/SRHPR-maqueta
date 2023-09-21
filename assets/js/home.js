document.addEventListener("DOMContentLoaded", function () {
    // Seleccionar elementos del DOM
    const carousel = document.querySelector(".carousel");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
  
    // Obtener todas las imágenes del carrusel
    const images = carousel.querySelectorAll("img");
    let currentIndex = 0;
  
    // Función para mostrar la imagen actual
    function showImage(index) {
      // Ocultar todas las imágenes
      images.forEach((image) => (image.style.display = "none"));
      
      // Mostrar la imagen actual
      images[index].style.display = "block";
    }
  
    // Mostrar la primera imagen al cargar la página
    showImage(currentIndex);
  
    // Función para avanzar a la siguiente imagen
    function nextImage() {
      currentIndex++;
      if (currentIndex >= images.length) {
        currentIndex = 0; // Volver al principio si llegamos al final
      }
      showImage(currentIndex);
    }
  
    // Función para retroceder a la imagen anterior
    function prevImage() {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = images.length - 1; // Ir al final si estamos en la primera imagen
      }
      showImage(currentIndex);
    }
  
    // Agregar event listeners a los botones
    nextButton.addEventListener("click", nextImage);
    prevButton.addEventListener("click", prevImage);
  });
  