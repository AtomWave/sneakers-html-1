import { config } from "../gulp-config.js"; //Импорт модуля конфигурации Gulp
import fs from "fs"; // Импорт модуля fs для работы с файловой системой
import { readdir } from "node:fs/promises"; //Импорт функции readdir из модуля fs/promises для асинхронного чтения содержимого директории
import gulp from "gulp";

const { sharp } = config.tasks; //переменная sharp содержит значение, соответствующее свойству sharp из config.tasks
const { source, raws, images } = config.paths;  //извлечение свойств source, raws, images

// Функция для асинхронного получения списка файлов в указанной директории
async function getFiles(dir) {
  const files = await readdir(dir, { recursive: true }); // Получение списка файлов с указанием опции рекурсивного чтения
  const output = files.map((filename) => `${filename}`); // Преобразование списка файлов в массив строк
  return output; // Возврат массива строк с именами файлов
}

let IMAGES = getFiles(`${raws}`); // Получение списка файлов из директории raws
let image = ''; // Переменная для хранения экземпляра объекта sharp

let getPng = /.png/gm; // Поиск файлов с расширением .png

// Асинхронная функция для обработки изображений
async function proccesImages() {
  let ALL_IMAGES = await IMAGES; // Ожидание завершения получения списка файлов
  console.log(ALL_IMAGES, 'ALL'); // Вывод списка файлов в консоль
  for (let i = 0; i < ALL_IMAGES.length; i++) { // Итерация по списку файлов
    let path = ALL_IMAGES[i]; // Получение пути к текущему файлу
    let fullPath = `./raws/${ALL_IMAGES[i]}`; // Формирование полного пути к файлу

    image = sharp(fullPath); // Создание экземпляра объекта sharp для текущего изображения
    createImages(image, path, 'png', '2x'); // Создание изображений разного размера и формата
    createImages(image, path, 'webp', '2x');
    createImages(image, path, 'png', '1x');
    createImages(image, path, 'webp', '1x');

    createImages(image, path, 'png', '2x', true); // Создание изображений для мобильных устройств
    createImages(image, path, 'webp', '2x', true);
    createImages(image, path, 'png', '1x', true);
    createImages(image, path, 'webp', '1x', true);
  };
}

// Асинхронная функция для создания изображений аргументы: image (обработанное изображение), path (путь к изображению), format (формат изображения),  retina (информация о разрешении)
async function createImages(image, path, format, retina, mobile = false) {
  let existention; // Переменная для хранения расширения файла
  let sizesRetina; // Переменная для хранения информации о разрешении (retina)
  const data = await image // Ожидание выполнения операций с изображением
    .metadata() // Получение метаданных изображения
    .then(function (metadata) { // Обработка полученных метаданных
      let proccedImage; // Переменная для обработанного изображения
      if (format === 'webp') { // Проверка формата изображения
        existention = '.webp'; // Установка расширения файла
        if (retina === '2x') { // Проверка разрешения
          sizesRetina = '@2x'; // Установка информации о разрешении
          proccedImage = image.webp(); // Преобразование изображения в формат webp
        }
        if (retina === '1x') { 
          sizesRetina = '@1x'; 
          proccedImage = image.resize(Math.round(metadata.width / 2)).webp(); // Изменение размера изображения и преобразование в формат webp
        }
      }
      if (format === 'png') {
        existention = '.png'
        if (retina === '2x') {
          sizesRetina = '@2x';
          proccedImage = image.png({ quality: 75 });
        }
        if (retina === '1x') {
          sizesRetina = '@1x';
          proccedImage = image.resize(Math.round(metadata.width / 2)).png({ quality: 75 });
        }
      }
        // Добавление обработки для мобильных изображений
        if (mobile) {
          existention = '_mobile' + existention; // Добавление суффикса для мобильных изображений
          sizesRetina = ''; // Мобильные изображения не имеют информации о разрешении
          proccedImage = proccedImage.resize({ width: 320 }); // Изменение размера для мобильных устройств
        }
      
      return proccedImage.toBuffer(); //возвращает буферизованные данные обработанного изображения
    })
    .then(function (data) { //данные изображения записываются в файл с использованием fs.writeFile(). В пути к файлу учитываются формат изображения, разрешение (retina) и путь к изображению
      path = path.replace(getPng, '');
      const outputPath = `${images}` + path + sizesRetina + existention;
      fs.writeFile(outputPath, data, function (err) {
        if (err) {
          console.error(err);
        } else {
          console.log('File saved successfully');
        }
      });
    });
  return data;
}

export function resizeImage() {
  return proccesImages();
}

// Добавляем наблюдателя за изменениями в директории с изображениями

export const watchImages = () => {
  return gulp.watch(`${raws}`).on('change', resizeImage); // Наблюдаем за изменениями файлов в директории raws
};                                             // При изменении файла вызываем функцию resizeImage для его обработки
