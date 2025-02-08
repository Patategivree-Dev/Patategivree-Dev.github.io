// Gestion du changement de mode
const modeToggle = document.getElementById('modeToggle');
const body = document.body;
const header = document.querySelector('header');
const container = document.querySelector('.container');
const projects = document.querySelectorAll('.project');
const skills = document.querySelectorAll('.skill');
const footer = document.querySelector('footer');

// Vérifie si le mode sombre est stocké dans le localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
    enableDarkMode();
} else {
    disableDarkMode();
}

// Fonction pour activer le mode sombre
function enableDarkMode() {
    body.classList.add('dark-mode');
    header.classList.add('dark-mode');
    container.classList.add('dark-mode');
    footer.classList.add('dark-mode');
    projects.forEach(project => project.classList.add('dark-mode'));
    skills.forEach(skill => skill.classList.add('dark-mode'));
    modeToggle.classList.add('dark-mode');
    modeToggle.innerHTML = '🌙'; // Icône pour activer le mode clair
    localStorage.setItem('darkMode', 'enabled'); // Sauvegarde le mode dans le localStorage
}

// Fonction pour désactiver le mode sombre
function disableDarkMode() {
    body.classList.remove('dark-mode');
    header.classList.remove('dark-mode');
    container.classList.remove('dark-mode');
    footer.classList.remove('dark-mode');
    projects.forEach(project => project.classList.remove('dark-mode'));
    skills.forEach(skill => skill.classList.remove('dark-mode'));
    modeToggle.classList.remove('dark-mode');
    modeToggle.innerHTML = '🌑'; // Icône pour activer le mode sombre
    localStorage.setItem('darkMode', 'disabled'); // Sauvegarde le mode dans le localStorage
}

// Écouteur d'événements pour le bouton de mode
modeToggle.addEventListener('click', () => {
    // Si le mode sombre est déjà activé, on le désactive, sinon on l'active
    if (body.classList.contains('dark-mode')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
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
