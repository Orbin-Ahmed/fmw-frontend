function selectCard(card) {
    // Remove selected class from all cards
    var cards = document.querySelectorAll('.card');
    cards.forEach(function(card) {
        card.classList.remove('selected');
    });

    // Add selected class to clicked card
    card.classList.add('selected');
}