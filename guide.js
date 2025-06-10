// Функция для получения параметров из URL
function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

document.addEventListener('DOMContentLoaded', function () {
    const gameName = getQueryParameter('game');

    if (gameName) {
        const guide = gameGuides[decodeURIComponent(gameName)];
        if (guide) {
            document.getElementById('guide-content').innerHTML = `
                <h2>${guide.title}</h2>
                ${guide.content}
            `;
        } else {
            document.getElementById('guide-content').innerHTML = '<p>Гид не найден.</p>';
        }
    } else {
        document.getElementById('guide-content').innerHTML = '<p>Игра не указана.</p>';
    }
});
