const elements = { 
    section: document.getElementById("description"),
    btnAccess: document.getElementById("access"),
    hidden: "hidden",
};

// Fonction pour basculer la visibilité de la section
function toggleSection() {
    if (elements.section.classList.contains(elements.hidden)) {
        elements.section.classList.remove(elements.hidden); // Afficher
    } else {
        elements.section.classList.add(elements.hidden); // Cacher
    }
}
