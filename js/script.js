// Fonction pour simuler une recherche
function search() {
  // Obtenez le terme de recherche à partir d'un champ de saisie
  var searchTerm = document.getElementById('search-input').value.toLowerCase();

  // Filtrez les articles qui contiennent le terme de recherche dans leur titre ou contenu
  var articles = document.querySelectorAll('article');
  articles.forEach(function(article) {
    var title = article.querySelector('h3').textContent.toLowerCase();
    var content = article.querySelector('p').textContent.toLowerCase();
    if (title.includes(searchTerm) || content.includes(searchTerm)) {
      article.style.display = 'block';
    } else {
      article.style.display = 'none';
    }
  });
}

// Attacher la fonction search à un événement click sur le bouton de recherche
document.getElementById('search-button').addEventListener('click', function(event) {
  event.preventDefault();
  search();
});

// Attacher la fonction search à un événement keyup pour permettre la recherche en temps réel
document.getElementById('search-input').addEventListener('keyup', function(event) {
  event.preventDefault();
  search();
});
