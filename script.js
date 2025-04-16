// Ajout de l'interactivité pour les sections
document.querySelectorAll('.collapsible').forEach(section => {
    section.addEventListener('click', () => {
        const content = section.querySelector('.content');
        const arrow = section.querySelector('.arrow'); // Sélectionne la flèche

        // Si la section est déjà ouverte, on la referme
        if (content.style.display === 'block') {
            content.style.display = 'none';
            arrow.classList.remove('open'); // Flèche fermée
        } else {
            // On ferme toutes les autres sections
            document.querySelectorAll('.collapsible .content').forEach(otherContent => {
                otherContent.style.display = 'none';
            });
            document.querySelectorAll('.collapsible .arrow').forEach(otherArrow => {
                otherArrow.classList.remove('open'); // Flèche fermée pour les autres
            });

            // On ouvre la section actuelle
            content.style.display = 'block';
            arrow.classList.add('open'); // Flèche ouverte
        }
    });
});
