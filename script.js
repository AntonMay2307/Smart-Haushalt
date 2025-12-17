// Alle Buttons auswählen
const buttons = document.querySelectorAll('.item-button');
const bestandsListe = document.getElementById('bestand-list');

// Für jeden Button einen Klick-Event hinzufügen
buttons.forEach(button => {
    button.addEventListener('click', async () => {
        const item = button.dataset.item; // Text aus dem data-item Attribut
        const { error } = await supabase
            .from("bestand")
            .insert([{ name: item }]);

        if (error) {
            console.error(error);
            return;
        }

        ladeBestand();
    });
});

async function ladeBestand() {
    const { data, error } = await supabase
        .from("bestand")
        .select("*")
        .order("created_at");

    if (error) {
        console.error(error);
        return;
    }

    list.innerHTML = "";

    data.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.name;
        list.appendChild(li);
    });
}