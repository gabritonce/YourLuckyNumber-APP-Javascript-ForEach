const input = document.getElementById('inputId');
const cards = document.querySelectorAll('.card');

input.addEventListener('input', function () {
  const searchTerm = input.value.toLowerCase();
 
  cards.forEach(card => {
    const cardNumero = card.getAttribute('data-nome').toLowerCase();

    if (cardNumero.includes(searchTerm)) {
      card.style.display = 'block';
      card.classList.add('flipped'); // Aggiungi la classe flipped per attivare l'animazione di giramento
    } else {
      card.style.display = 'none';
      card.classList.remove('flipped'); // Rimuovi la classe flipped per nascondere l'animazione di giramento
    }
  });
});
