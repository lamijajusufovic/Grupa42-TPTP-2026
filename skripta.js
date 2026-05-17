
document.addEventListener('DOMContentLoaded', function() {
    
    // Pronalazimo formu i div za poruku u HTML-u
    const forma = document.getElementById('kontaktForma');
    const porukaUspjeha = document.getElementById('porukaUspjeha');

    // Dodajemo 'event listener' koji sluša kada korisnik klikne "Pošalji"
    forma.addEventListener('submit', function(event) {
        
        // 1. Spriječavamo standardno ponašanje forme (osvježavanje stranice)
        event.preventDefault();


        // 2. Prikazujemo poruku zahvale
        porukaUspjeha.style.display = 'block';

        // 3. Očistimo polja u formi kako bi bila prazna nakon slanja
        forma.reset();

        // (Opcionalno) Sakrij poruku zahvale nakon 5 sekundi
        setTimeout(function() {
            porukaUspjeha.style.display = 'none';
        }, 5000);
    });


    const donacijaForma = document.getElementById('donacijaForma');
    const porukaUspjehaDonacija = document.getElementById('porukaUspjehaDonacija');

    // Provjeravamo da li forma za donacije postoji
    if (donacijaForma) {
        donacijaForma.addEventListener('submit', function(event) {
            // Spriječavamo standardno ponašanje forme
            event.preventDefault();

            // Prikazujemo poruku zahvale za donaciju
            porukaUspjehaDonacija.style.display = 'block';

            // Očistimo polja
            donacijaForma.reset();

            // Sakrijemo poruku nakon 5 sekundi
            setTimeout(function() {
                porukaUspjehaDonacija.style.display = 'none';
            }, 5000);
        });
    }


    const dugmeTema = document.getElementById("dugme-tema");
    const body = document.body;

    if (dugmeTema) {
        // Provjeri da li je korisnik ranije odabrao tamnu temu
        const trenutnaTema = localStorage.getItem("tema");
        if (trenutnaTema === "dark") {
            body.classList.add("dark-mode");
            dugmeTema.innerHTML = "Svijetla tema ☀️";
        }

        // Reakcija na klik dugmeta
        dugmeTema.addEventListener("click", function() {
            body.classList.toggle("dark-mode");
            
            if (body.classList.contains("dark-mode")) {
                dugmeTema.innerHTML = "Svijetla tema ☀️";
                localStorage.setItem("tema", "dark");
            } else {
                dugmeTema.innerHTML = "Mračna tema 🌙";
                localStorage.setItem("tema", "light");
            }
        });
    } else {
        console.error("GRESKA: Dugme sa ID-jem 'dugme-tema' nije pronađeno u HTML-u!");
    }

});

// Slušaj kada korisnik klikne na reset dugme forme
donacijaForma.addEventListener('reset', function() {
    // Sakrij sve poruke o greškama
    document.getElementById('greskaKartica').style.display = 'none';
    document.getElementById('greskaDatum').style.display = 'none';
    document.getElementById('greskaCvv').style.display = 'none';
    
    // Sakrij poruku o uspješnoj donaciji ako je bila prikazana
    document.getElementById('porukaUspjehaDonacija').style.display = 'none';
});