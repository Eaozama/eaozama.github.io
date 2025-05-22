document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const faqItems = document.querySelectorAll('.faq-item');
    const allHeadings = document.querySelectorAll('h2');

    allHeadings.forEach(heading => {
        heading.style.display = 'none'; // Скрываем заголовки тем по умолчанию
    });

    faqItems.forEach(item => {
        const question = item.querySelector('h3').textContent.toLowerCase();
        const answer = item.querySelector('p').textContent.toLowerCase();
        
        const itemHeading = item.closest('h2'); // Получаем заголовок темы для текущего вопроса
        
        if (question.includes(query) || answer.includes(query)) {
            item.style.display = 'block'; // Показываем вопрос
            itemHeading.style.display = 'block'; // Показываем заголовок темы, если в вопросе найдено совпадение
        } else {
            item.style.display = 'none'; // Скрываем вопрос, если нет совпадений
        }
    });
});

document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('search').value = ''; // Сбрасываем поле поиска
    const faqItems = document.querySelectorAll('.faq-item');
    const allHeadings = document.querySelectorAll('h2');

    allHeadings.forEach(heading => {
        heading.style.display = 'block'; // Показываем все заголовки
    });

    faqItems.forEach(item => {
        item.style.display = 'block'; // Показываем все вопросы
    });
});
