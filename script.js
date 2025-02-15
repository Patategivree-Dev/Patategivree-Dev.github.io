// Fonction pour activer/desactiver le mode sombre
function toggleTheme() {
    document.body.classList.toggle('dark-mode');

    if (localStorage.getItem('darkMode') === "true") {
        document.querySelector('.modeToggle').innerText = '🌑'; // Icône pour activer le mode sombre
        localStorage.setItem('darkMode', false);
    } else {
        document.querySelector('.modeToggle').innerText = '🌙'; // Icône pour activer le mode clair
        localStorage.setItem('darkMode', true);
    }
}

// Animation de fade-in au chargement de la page
window.onload = () => {
    if (localStorage.getItem('darkMode') === "true") {
        document.querySelector('.modeToggle').innerText = '🌙'; // Icône pour activer le mode clair
        document.body.classList.add("dark-mode")
    }
    
    let modeToggle = document.querySelector('.modeToggle');

    // Lorsque click sur THEME button
    modeToggle.onclick = () => toggleTheme();
};
