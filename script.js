// Array con las entradas
const entradas = ['varsovia', 'cracovia', 'lodz'];

// Función para incrementar el contador de visitas de una entrada
function sumar_visitas(entrada) {
    let visitas = localStorage.getItem(entrada) || 0; //Si es null consigue 0
    visitas = parseInt(visitas) + 1;
    localStorage.setItem(entrada, visitas); //Guarda el número modificado
    return visitas;
}

// Función para mostrar el contador de visitas en la página principal
function mostrar_visitas() {
    entradas.forEach(entrada => { //Recorre cada elemento del array de entradas
        const visitas = localStorage.getItem(entrada) || 0; //Si es null muestra 0
        const span = document.getElementById(`visitas-${entrada}`); 
        if (span) { //Verifica que existe el elemento para evitar errores
            span.textContent = visitas;
        }
    });
}

function activar_resumenes() {
    const botones = document.querySelectorAll('.boton_resumen');

    botones.forEach(button => { //Recorre cada botón con clase boton_resumen del html
        button.addEventListener('click', () => {
            const resumen = button.nextElementSibling;

            // Alterna la clase .oculto
            resumen.classList.toggle('oculto');

            // Si ahora está oculto, texto "Ver resumen"; si no muestra el texto, "Ocultar resumen"
            const isHidden = resumen.classList.contains('oculto');
            button.textContent = isHidden ? 'Ver resumen' : 'Ocultar resumen';
        });
    });
}