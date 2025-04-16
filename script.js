// Ajout de l'interactivité pour les sections
document.querySelectorAll('.collapsible').forEach(section => {
    section.addEventListener('click', () => {
        const content = section.querySelector('.content');

        // Si la section est déjà ouverte, on la referme
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            // On ferme toutes les autres sections
            document.querySelectorAll('.collapsible .content').forEach(otherContent => {
                otherContent.style.display = 'none';
            });
            // On ouvre la section actuelle
            content.style.display = 'block';
        }
    });
});
