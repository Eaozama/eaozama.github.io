function openModal(img) {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");

    modal.style.display = "block"; // Показываем модальное окно
    modalImg.src = img.src; // Устанавливаем источник изображения в модальном окне
    captionText.innerHTML = img.alt; // Устанавливаем текст подписи для изображения
}

function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none"; // Скрываем модальное окно
}