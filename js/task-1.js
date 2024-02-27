'use strict'; // Строгий режим, который помогает выявить и предотвратить ошибки в коде

function slugify(title) {
  // Функция для преобразования заголовка в URL-подобную строку (slug)

  const lowerTitle = title.toLowerCase(); // Преобразование заголовка в нижний регистр
  const splitTitle = lowerTitle.split(' '); // Разделение заголовка на отдельные слова по пробелам
  return splitTitle.join('-'); // Объединение слов с помощью дефисов и возврат результата
}

// Вывод результатов вызова функции для нескольких различных заголовков
console.log(slugify('Arrays for begginers')); // Преобразует заголовок в URL-подобную строку и выводит результат
console.log(slugify('English for developer')); // Преобразует заголовок в URL-подобную строку и выводит результат
console.log(slugify('Ten secrets of JavaScript')); // Преобразует заголовок в URL-подобную строку и выводит результат
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // Преобразует заголовок в URL-подобную строку и выводит результат
