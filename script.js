// Sélection du bouton pour changer de mode
const modeToggleButton = document.getElementById("modeToggle");

// Vérifier si le mode sombre est déjà activé dans le stockage local
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    modeToggleButton.textContent = "🌞";  // Si en mode sombre, afficher l'icône du soleil
}

// Ajouter un événement pour changer le mode au clic
modeToggleButton.addEventListener("click", () => {
    // Basculer entre le mode sombre et le mode clair
    document.body.classList.toggle("dark-mode");

    // Vérifier si le mode sombre est activé et mettre à jour le stockage local
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
        modeToggleButton.textContent = "🌞";  // Passer à l'icône du soleil
    } else {
        localStorage.setItem("darkMode", "disabled");
        modeToggleButton.textContent = "🌙";  // Passer à l'icône de la lune
    }
});
