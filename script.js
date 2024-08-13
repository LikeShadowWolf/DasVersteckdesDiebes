document.addEventListener('DOMContentLoaded', () => {
    const notes = document.querySelectorAll('.sticky-note');
    const peelSound = document.getElementById('peel-sound');

    notes.forEach(note => {
        const button = note.querySelector('.action-button');
        button.addEventListener('click', () => {
            if (!note.classList.contains('expanded')) {
                notes.forEach(n => {
                    n.classList.remove('expanded');
                    n.querySelector('.action-button').textContent = 'Ansehen';
                });
                note.classList.add('expanded');
                button.textContent = 'Zurück';
                peelSound.play();
            } else {
                note.classList.remove('expanded');
                button.textContent = 'Ansehen';
            }
        });
    });
});
