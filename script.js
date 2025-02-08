// Fonction pour basculer entre les modes
const modeToggle = document.getElementById('modeToggle');
const body = document.body;
const container = document.querySelector('.container');
const header = document.querySelector('header');
const projects = document.querySelectorAll('.project');
const skills = document.querySelectorAll('.skill');
const footer = document.querySelector('footer');

// Fonction pour appliquer le mode
modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    container.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
    projects.forEach(project => project.classList.toggle('dark-mode'));
    skills.forEach(skill => skill.classList.toggle('dark-mode'));

    // Change l'émoji du bouton en fonction du mode
    if (body.classList.contains('dark-mode')) {
        modeToggle.textContent = '🌞'; // Mode clair
    } else {
        modeToggle.textContent = '🌙'; // Mode sombre
    }
});
