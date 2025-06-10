// Добавляем обработчик события ввода в поле поиска
document.getElementById('search').addEventListener('input', function() {
    // Получаем значение поля поиска и приводим его к нижнему регистру для нечувствительного поиска
    const query = this.value.toLowerCase();

    // Получаем все элементы с классом .faq-item (каждый вопрос с ответом)
    const faqItems = document.querySelectorAll('.faq-item');

    // Получаем все заголовки уровня h2 (темы/разделы FAQ)
    const allHeadings = document.querySelectorAll('h2');

    // Скрываем все заголовки тем по умолчанию при каждом обновлении поиска
    allHeadings.forEach(heading => {
        heading.style.display = 'none';
    });

    // Перебираем все вопросы с ответами
    faqItems.forEach(item => {
        // Получаем текст вопроса из тега h3, приводим к нижнему регистру
        const question = item.querySelector('h3').textContent.toLowerCase();
        // Получаем текст ответа из тега p, тоже в нижнем регистре
        const answer = item.querySelector('p').textContent.toLowerCase();

        // Находим ближайший родительский элемент h2, к которому относится данный вопрос (раздел)
        const itemHeading = item.closest('h2');

        // Проверяем, содержится ли поисковый запрос в вопросе или ответе
        if (question.includes(query) || answer.includes(query)) {
            // Если да — показываем этот вопрос
            item.style.display = 'block';
            // И также показываем соответствующий заголовок раздела
            if (itemHeading) {
                itemHeading.style.display = 'block';
            }
        } else {
            // Если совпадений нет — скрываем вопрос
            item.style.display = 'none';
        }
    });
});

// Добавляем обработчик клика по кнопке сброса поиска
document.getElementById('reset').addEventListener('click', function() {
    // Очищаем поле поиска
    document.getElementById('search').value = '';

    // Получаем все вопросы и заголовки темы
    const faqItems = document.querySelectorAll('.faq-item');
    const allHeadings = document.querySelectorAll('h2');

    // Показываем все заголовки тем
    allHeadings.forEach(heading => {
        heading.style.display = 'block';
    });

    // Показываем все вопросы
    faqItems.forEach(item => {
        item.style.display = 'block';
    });
});

