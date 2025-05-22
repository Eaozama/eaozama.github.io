document.getElementById('supportForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Здесь должен быть код для отправки данных на сервер, 
    // для примера мы просто выводим сообщение в консоль
    console.log(`Email: ${email}\nТема: ${subject}\nСообщение: ${message}`);
    alert('Ваше сообщение отправлено. Спасибо за обращение!');

    // Здесь код для очистки формы
    this.reset();
});
