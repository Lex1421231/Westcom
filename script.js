document.querySelector('.logo-link').addEventListener('click', function(event) {
    event.preventDefault(); // Отменяем стандартное поведение ссылки
    const logo = document.querySelector('.logo');

    // Увеличиваем логотип
    logo.style.transform = 'scale(1000)';

    // Ждём завершения анимации (300 мс) и переходим по ссылке
    setTimeout(() => {
        window.location.href = this.href; // Используем this.href вместо event.target.href
    }, 100);
});

