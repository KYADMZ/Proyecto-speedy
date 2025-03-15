document.addEventListener("DOMContentLoaded", function() {
    const contenedores = document.querySelectorAll(".contenedor");

    contenedores.forEach(contenedor => {
        const imagen = contenedor.querySelector(".imagen");
        const info = contenedor.querySelector(".info");

        // Obtener el texto de la descripción desde data-info
        info.innerText = contenedor.getAttribute("data-info");

        contenedor.addEventListener("mouseover", function() {
            imagen.style.transform = "scale(1.2)";
            info.style.opacity = "1";
        });

        contenedor.addEventListener("mouseout", function() {
            imagen.style.transform = "scale(1)";
            info.style.opacity = "0";
        });
    });
});
