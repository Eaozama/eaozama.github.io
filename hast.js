function filterGames(category) {
    const games = document.querySelectorAll('.game-item');
    
    games.forEach(game => {
        if (category === 'all') {
            game.style.display = 'block';
        } else {
            if (game.getAttribute('data-category') === category) {
                game.style.display = 'block';
            } else {
                game.style.display = 'none';
            }
        }
    });
}
