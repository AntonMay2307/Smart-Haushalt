// Alle Buttons auswählen
const buttons = document.querySelectorAll('.item-button');
const bestandsListe = document.getElementById('bestand-list');

// Für jeden Button einen Klick-Event hinzufügen
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const itemText = button.dataset.item; // Text aus dem data-item Attribut
        const li = document.createElement('li'); // Neues Listenelement erstellen
        li.textContent = itemText;
        bestandsListe.appendChild(li); // Zur Liste hinzufügen

        speichern();
    });
});

function speichern() {
    localStorage.setItem(
        'bestand',
        JSON.stringify([...bestandsListe.children].map(li => li.textContent))
    );
}

const gespeicherterBestand = JSON.parse(localStorage.getItem('bestand'));

if (gespeicherterBestand) {
    gespeicherterBestand.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        bestandsListe.appendChild(li);
    });
}