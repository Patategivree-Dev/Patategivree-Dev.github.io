// Gestion du changement de mode
const modeToggle = document.getElementById('modeToggle');
const body = document.body;

// Sélection de tous les éléments concernés par le mode sombre
const elementsToToggle = document.querySelectorAll(
    'header, .container, .project, .skill, .reseaux-sociaux .reseau, footer'
);

// Vérifie si le mode sombre est activé dans le localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
    enableDarkMode();
} else {
    disableDarkMode();
}

// Fonction pour activer le mode sombre
function enableDarkMode() {
    body.classList.add('dark-mode');
    elementsToToggle.forEach(el => el.classList.add('dark-mode'));
    modeToggle.classList.add('dark-mode');
    modeToggle.innerHTML = '🌙'; // Icône pour activer le mode clair
    localStorage.setItem('darkMode', 'enabled');
}

// Fonction pour désactiver le mode sombre
function disableDarkMode() {
    body.classList.remove('dark-mode');
    elementsToToggle.forEach(el => el.classList.remove('dark-mode'));
    modeToggle.classList.remove('dark-mode');
    modeToggle.innerHTML = '🌑'; // Icône pour activer le mode sombre
    localStorage.setItem('darkMode', 'disabled');
}

// Écouteur d'événements pour le bouton de mode
modeToggle.addEventListener('click', () => {
    body.classList.contains('dark-mode') ? disableDarkMode() : enableDarkMode();
});

// Effet de transition au survol du bouton
modeToggle.addEventListener('mouseover', () => {
    modeToggle.style.transform = 'scale(1.1)';
});

modeToggle.addEventListener('mouseout', () => {
    modeToggle.style.transform = 'scale(1)';
});

// Animation de fade-in au chargement de la page
window.addEventListener('load', () => {
    document.body.style.opacity = 1;
    document.body.style.transition = 'opacity 0.5s ease-in-out';
});
