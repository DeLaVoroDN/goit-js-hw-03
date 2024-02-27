'use strict'; // Строгий режим, который помогает выявить и предотвратить ошибки в коде

function makeArray(firstArray, secondArray, maxLength) {
  // Функция для создания нового массива на основе двух входных массивов с учетом максимальной длины

  const totalArray = firstArray.concat(secondArray); // Объединяем два массива в один

  if (totalArray.length > maxLength) {
    // Проверяем, если общая длина массива превышает максимальную длину
    return totalArray.slice(0, maxLength); // Если да, то возвращаем часть массива до максимальной длины
  } else {
    return totalArray; // Иначе возвращаем весь объединенный массив
  }
}

// Вывод результатов вызова функции для нескольких различных комбинаций массивов и максимальной длины
console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // Выведет результат для первой комбинации
console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // Выведет результат для второй комбинации
console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // Выведет результат для третьей комбинации
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); // Выведет результат для четвертой комбинации
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); // Выведет результат для пятой комбинации
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); // Выведет результат для шестой комбинации
