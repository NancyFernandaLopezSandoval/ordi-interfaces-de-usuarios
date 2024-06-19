document.getElementById('menuButton').onclick = function() {
    var menu = document.getElementById('accessibilityMenu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
};
// Obtener referencias a los elementos del DOM
const menuButton = document.getElementById('menuButton');
const accessibilityMenu = document.getElementById('accessibilityMenu');

// Función para alternar la visibilidad del menú de accesibilidad
function toggleAccessibilityMenu() {
    accessibilityMenu.classList.toggle('show');
}

// Event listener para el botón de accesibilidad
menuButton.addEventListener('click', function(event) {
    event.preventDefault();
    toggleAccessibilityMenu();
});
document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menuButton');
    const accessibilityMenu = document.getElementById('accessibilityMenu');

    function toggleAccessibilityMenu(event) {
        event.preventDefault(); // Prevenir la redirección por defecto
        accessibilityMenu.classList.toggle('show');
    }

    menuButton.addEventListener('click', toggleAccessibilityMenu);
});


function changeTextSize(scale) {
    document.body.style.fontSize = (parseFloat(getComputedStyle(document.body).fontSize) * scale) + 'px';
}

function applyGrayscale() {
    document.body.style.filter = 'grayscale(100%)';
}

function applyHighContrast() {
    document.body.style.filter = 'contrast(200%)';
}

function applyNegativeContrast() {
    document.body.style.filter = 'invert(100%)';
}

function applyDarkBackground() {
    document.body.style.backgroundColor = '#1d293f';
    document.body.style.color = '#ffffff';
}

function underlineLinks() {
    var links = document.querySelectorAll('a');
    links.forEach(function(link) {
        link.style.textDecoration = 'underline';
    });
}

function useReadableFont() {
    document.body.style.fontFamily = 'Arial, sans-serif';
}

function resetStyles() {
    document.body.style = '';
    var links = document.querySelectorAll('a');
    links.forEach(function(link) {
        link.style.textDecoration = 'none';
    });
}
