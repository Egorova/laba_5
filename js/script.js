document.addEventListener('DOMContentLoaded', () => {
    // Получаем элементы из HTML
    const tryGss = document.querySelector('.try_gss');
    const inputField = document.querySelector('.insnum');
    const guessButton = document.querySelector('.gss_btn');
    
    // Игровые переменные
    let randomNumber;
    let isGameOver = false;
    
    // Начало новой игры
    function startNewGame() {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        isGameOver = false;
        tryGss.textContent = "Попробуйте угадать число от 1 до 100!";
        inputField.value = "";
        inputField.style.borderColor = "#ffffff"; // Сброс цвета границы
        console.log("Загаданное число (для теста):", randomNumber); // Можно удалить
    }
    
    // Проверка числа
    function checkGuess() {
        if (isGameOver) {
            startNewGame();
            return;
        }
        
        const guess = parseInt(inputField.value);
        
        // Валидация ввода
        if (isNaN(guess)) {
            tryGss.textContent = "Введите число от 1 до 100!";
            inputField.style.borderColor = "#ff0000";
            return;
        }
        
        if (guess < 1 || guess > 100) {
            tryGss.textContent = "Число должно быть от 1 до 100!";
            inputField.style.borderColor = "#ff0000";
            return;
        }
        
        // Проверка числа
        if (guess > randomNumber) {
            tryGss.textContent = "Слишком много! Попробуйте ещё";
            inputField.style.borderColor = "#ffcc00";
        } else if (guess < randomNumber) {
            tryGss.textContent = "Слишком мало! Попробуйте ещё";
            inputField.style.borderColor = "#ffcc00";
        } else {
            tryGss.textContent = "Поздравляем! Вы угадали! 🎉";
            inputField.style.borderColor = "#00ff00";
            isGameOver = true;
        }
    }
    
    // Обработчики событий
    guessButton.addEventListener('click', checkGuess);
    
    inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkGuess();
        }
    });
    
    // Начинаем игру
    startNewGame();
});