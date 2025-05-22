document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const game = urlParams.get('game');
    const gameTitleElement = document.getElementById('game-title');
    const reviewsContainer = document.getElementById('reviews');

    const reviews = {
         "Обзор Neighbours Hell": {
                "reviews": [
                    {
                        "title": "Обзор 1",
                        content: ` <iframe class="video-player" src="https://vkvideo.ru/video_ext.php?oid=-173009396&id=456239246&hd=2&autoplay=1 
                        frameborder="0" allowfullscreen></iframe>`,
                        "description": "Neighbours Hell — это игра, где вы можете сыграть роль человека, который ненавидит соседей."
                    },
                    {
                        "title": "Обзор 2",
                        content: `"<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/dQw4w9WgXcQ\" frameborder=\"0\" allowfullscreen></iframe>`,
                        "description": "Игра позволяет проявить всю вашу креативность в плане мести вашим соседям."
                    }
                ]
            },
        "Stardew Valley": {
            "reviews": [
                {
                    "title": "Обзор 1",
                    "video": "https://www.youtube.com/embed/dQw4w9WgXcQ",
                    "description": "Stardew Valley — это RPG, где вы управляете своей фермой и исследуете окружающий мир."
                },
                {
                    "title": "Обзор 2",
                    "video": "https://www.youtube.com/embed/dQw4w9WgXcQ",
					
                    "description": "Игра предлагает огромное количество возможностей для творчества и взаимодействия с персонажами."
                }
            ]
        }
    };

    if (reviews[game]) {
        gameTitleElement.textContent = game;
        reviews[game].reviews.forEach(review => {
            const reviewDiv = document.createElement('div');
            reviewDiv.classList.add('review');
            reviewDiv.innerHTML = `
                <h2>${review.title}</h2>
                <div class="video-player">
                    <iframe width="560" height="315" src="${review.video}" frameborder="0" allowfullscreen></iframe>
                </div>
                <p>${review.description}</p>
            `;
            reviewsContainer.appendChild(reviewDiv);
        });
    } else {
        gameTitleElement.textContent = "Игра не найдена";
    }
});
