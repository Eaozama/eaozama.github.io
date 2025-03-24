document.getElementById("registrationForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const birthday = document.getElementById("birthday").value;

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    localStorage.setItem("birthday", birthday);
    
    alert("Регистрация прошла успешно. Пожалуйста, войдите.");
    window.location.href = "login.html"; // переход на страницу авторизации
});

document.getElementById("loginForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const loginUsername = document.getElementById("loginUsername").value;
    const loginPassword = document.getElementById("loginPassword").value;

    authorizeUser(loginUsername, loginPassword);
});

function authorizeUser(username, password) {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    const birthday = localStorage.getItem("birthday");

    if (username === storedUsername && password === storedPassword) {
        greetUser(username);
        checkBirthday(birthday);
        window.location.href = "index.html"; // переход на главную страницу
    } else {
        alert("Неверный логин или пароль");
    }
}

function greetUser(username) {
    const currentHour = new Date().getHours();
    let greeting;

    if (currentHour < 12) {
        greeting = "Доброе утро";
    } else if (currentHour < 18) {
        greeting = "Добрый день";
    } else {
        greeting = "Добрый вечер";
    }

    alert(`${greeting}, ${username}!`);
}

function checkBirthday(birthday) {
    const birthdayDate = new Date(birthday);
    const today = new Date();
    
    if (birthdayDate.getDate() === today.getDate() && birthdayDate.getMonth() === today.getMonth()) {
        alert("С Днем Рождения! Вот ваш промо-код: PROMO2023");
        localStorage.setItem("promoCode", "PROMO2023");
    }
}
