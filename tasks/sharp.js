import {config} from "../gulp-config"; //Импорт модуля конфигурации Gulp
import fs from "fs"; // Импорт модуля fs для работы с файловой системой
import { readdir } from "node:fs/promises"; //Импорт функции readdir из модуля fs/promises для асинхронного чтения содержимого директории

const { sharp } = config.tasks; // переменная sharp содержит значение, соответствующее свойству sharp из config.tasks
const { source, raws, images } = config.paths;  //извлечение свойств source, raws, images

// Функция для асинхронного получения списка файлов в указанной директории
async function getFiles(dir) {
  const files = await readdir(dir, { recursive: true }); // Получение списка файлов с указанием опции рекурсивного чтения
  const output = files.map((filename) => `${filename}`); // Преобразование списка файлов в массив строк
  return output; // Возврат массива строк с именами файлов
}

let IMAGES = getFiles(`${raws}`); // Получение списка файлов из директории raws
let image = ''; // Переменная для хранения экземпляра объекта sharp