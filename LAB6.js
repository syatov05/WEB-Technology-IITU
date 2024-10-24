// 1. Проверка возраста
let age = prompt("Введите ваш возраст:");
if (age >= 18) {
  console.log("Доступ разрешен");
} else {
  console.log("Доступ запрещен");
}



// 2. Проверка четного числа
let number = prompt("Введите число:");
if (number % 2 === 0) {
  console.log("Четное число");
} else {
  console.log("Нечетное число");
}



// 3. Сравнение чисел
let num1 = prompt("Введите первое число:");
let num2 = prompt("Введите второе число:");

if (num1 > num2) {
  console.log("Первое больше");
} else if (num1 < num2) {
  console.log("Второе больше");
} else {
  console.log("Числа равны");
}



// 4. Проверка времени дня
let time = prompt("Введите время в 24-часовом формате:");

if (time >= 6 && time < 12) {
  console.log("Утро");
} else if (time >= 12 && time < 18) {
  console.log("День");
} else if (time >= 18 && time < 24) {
  console.log("Вечер");
} else {
  console.log("Ночь");
}



// 5. Выбор типа данных
let input = prompt("Введите значение:");
let dataType = typeof input;
console.log("Тип данных: " + dataType);

if (dataType === "string") {
  console.log("Это строка");
} else {
  console.log("Это не строка");
}



// 6. Определение кратности числа 5
let numberForDiv = prompt("Введите число:");
if (numberForDiv % 5 === 0) {
  console.log("Кратно 5");
} else {
  console.log("Не кратно 5");
}



// 7. Сравнение строк
let str1 = prompt("Введите первую строку:");
let str2 = prompt("Введите вторую строку:");

if (str1.length > str2.length) {
  console.log("Первая строка длиннее");
} else if (str1.length < str2.length) {
  console.log("Вторая строка длиннее");
} else {
  console.log("Строки одинаковой длины");
}


// 8. Оценка по шкале
let grade = prompt("Введите оценку (1-5):");
switch (grade) {
  case '5':
    console.log("Отлично");
    break;
  case '4':
    console.log("Хорошо");
    break;
  case '3':
    console.log("Удовлетворительно");
    break;
  case '2':
    console.log("Плохо");
    break;
  case '1':
    console.log("Очень плохо");
    break;
  default:
    console.log("Неверная оценка");
}



// 9. Определение типа устройства
let device = prompt("Введите название устройства (телефон, планшет, компьютер):");
switch (device.toLowerCase()) {
  case 'телефон':
    console.log("Это телефон");
    break;
  case 'планшет':
    console.log("Это планшет");
    break;
  case 'компьютер':
    console.log("Это компьютер");
    break;
  default:
    console.log("Неизвестное устройство");
}



// 11. Определение сезона
let month = prompt("Введите номер месяца (1-12):");
if (month >= 3 && month <= 5) {
  console.log("Весна");
} else if (month >= 6 && month <= 8) {
  console.log("Лето");
} else if (month >= 9 && month <= 11) {
  console.log("Осень");
} else {
  console.log("Зима");
}



// 12. Простое сравнение
let numA = prompt("Введите первое число:");
let numB = prompt("Введите второе число:");
if (numA > numB) {
  console.log("Больше");
} else {
  console.log("Меньше");
}



// 13. Проверка на ноль
let numberCheck = prompt("Введите число:");
if (numberCheck == 0) {
  console.log("Ноль");
} else {
  console.log("Не ноль");
}



// 14. Категории возраста
let ageCategory = prompt("Введите возраст:");
if (ageCategory >= 0 && ageCategory <= 2) {
  console.log("Младенец");
} else if (ageCategory >= 3 && ageCategory <= 12) {
  console.log("Ребенок");
} else if (ageCategory >= 13 && ageCategory <= 19) {
  console.log("Подросток");
} else if (ageCategory >= 20 && ageCategory <= 64) {
  console.log("Взрослый");
} else if (ageCategory >= 65) {
  console.log("Пожилой");
} else {
  console.log("Неверный возраст");
}



// 15. Логический оператор AND
let bool1 = confirm("Первое булево значение:");
let bool2 = confirm("Второе булево значение:");
if (bool1 && bool2) {
  console.log("Оба истинные");
} else {
  console.log("Одно или оба ложные");
}



// 16. Логический оператор OR
let boolOr1 = confirm("Первое булево значение:");
let boolOr2 = confirm("Второе булево значение:");
if (boolOr1 || boolOr2) {
  console.log("Хотя бы одно истинное");
} else {
  console.log("Оба ложные");
}



// 17. Проверка скидки
let total = prompt("Введите сумму покупки:");
if (total > 100) {
  console.log("Скидка предоставлена");
} else {
  console.log("Скидка не предоставлена");
}



// 18. Сортировка по возрастанию
let n1 = parseFloat(prompt("Введите первое число:"));
let n2 = parseFloat(prompt("Введите второе число:"));
let n3 = parseFloat(prompt("Введите третье число:"));

let numbers = [n1, n2, n3];
numbers.sort((a, b) => a - b);

console.log("Числа в порядке возрастания: " + numbers);



// 19. Високосный год
let year = prompt("Введите год:");
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  console.log("Високосный год");
} else {
  console.log("Не високосный год");
}



// 20. Угадай число
let secretNumber = 5; // загаданное число
let userGuess = prompt("Угадайте число (от 1 до 10):");

if (userGuess == secretNumber) {
  console.log("Правильно");
} else if (userGuess > secretNumber) {
  console.log("Меньше");
} else {
  console.log("Больше");
}
