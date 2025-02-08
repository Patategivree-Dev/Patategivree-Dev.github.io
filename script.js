// Fonction pour basculer entre les modes
const modeToggle = document.getElementById('modeToggle');
const body = document.body;
const header = document.querySelector('header');
const projects = document.querySelectorAll('.project');
const skills = document.querySelectorAll('.skill');
const footer = document.querySelector('footer');

// Vérifie le mode de préférence dans le stockage local
const preferredMode = localStorage.getItem('mode') || 'light';
if (preferredMode === 'dark') {
    body.classList.add('dark-mode');
    header.classList.add('dark-mode');
    footer.classList.add('dark-mode');
    projects.forEach(project => project.classList.add('dark-mode'));
    skills.forEach(skill => skill.classList.add('dark-mode'));
    modeToggle.textContent = '🌞'; // Affiche le soleil en mode sombre
} else {
    modeToggle.textContent = '🌙'; // Affiche la lune en mode clair
}

// Fonction pour appliquer le mode
modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
    projects.forEach(project => project.classList.toggle('dark-mode'));
    skills.forEach(skill => skill.classList.toggle('dark-mode'));

    // Change l'émoji du bouton en fonction du mode
    if (body.classList.contains('dark-mode')) {
        modeToggle.textContent = '🌞'; // Mode clair
        localStorage.setItem('mode', 'dark'); // Sauvegarde la préférence dans le stockage local
    } else {
        modeToggle.textContent = '🌙'; // Mode sombre
        localStorage.setItem('mode', 'light'); // Sauvegarde la préférence dans le stockage local
    }
});
