//Реализовать функцию конвертации строки в JSON со всеми необходимыми проверками и валидациями.
function convertToJSON(jsonString) {
  // Проверяем пустую строку
  if (jsonString.trim() === '') {
    console.error('Пустая строка');
    return null;
  }

  const trimmedString = jsonString.trim();

  // Проверка на массив
  if (trimmedString.charAt(0) === '[' && trimmedString.charAt(trimmedString.length - 1) === ']') {
    console.error('Данные являются массивом, а не объектом');
    return null;
  }

  // Проверка на скобки
  if (trimmedString.charAt(0) !== '{' || trimmedString.charAt(trimmedString.length - 1) !== '}') {
    console.error('Отсутствует открывающая или закрывающая фигурная скобка');
    return null;
  }

  const trimmedJsonString = trimmedString.slice(1, -1);

  const pairs = trimmedJsonString.split(',');

  const jsonObject = {};

  for (let pair of pairs) {
    const [key, value] = pair.split(':');

    // Проверяем ключ
    if (key.trim() === '') {
      console.error('Пустой ключ');
      return null;
    }

    const trimmedKey = key.trim();
    const trimmedValue = value.trim();

    // Проверяем наличие кавычек
    if (
      !trimmedKey.startsWith('"') || !trimmedKey.endsWith('"') ||
      trimmedKey.length <= 1 || trimmedKey.charAt(trimmedKey.length - 2) === '\\'
    ) {
      console.error('Некорректное значение ключа');
      return null;
    }

    const keyValue = trimmedKey.slice(1, -1);

    // Проверяем значение
    if (trimmedValue === '') {
      console.error('Пустое значение');
      return null;
    }

    // Преобразуем значение
    let parsedValue;
    switch (true) {
      case trimmedValue.startsWith('"') && trimmedValue.endsWith('"'):
        parsedValue = trimmedValue.slice(1, -1);
        break;
      case trimmedValue === 'true':
        parsedValue = true;
        break;
      case trimmedValue === 'false':
        parsedValue = false;
        break;
      case !isNaN(trimmedValue):
        parsedValue = parseFloat(trimmedValue);
        break;
      default:
        console.error('Некорректное значение');
        return null;
    }

    // Добавляем пару в объект
    jsonObject[keyValue] = parsedValue;
  }

  return jsonObject;
}


//Тест
console.log(convertToJSON('{"a": 5, "b": 7}'));