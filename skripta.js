// Čekamo da se cijela stranica učita
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

});
