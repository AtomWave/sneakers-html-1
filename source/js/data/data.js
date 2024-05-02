const DATA_BREND_NAMES = [
  'NikalasCade',
  'Abibas',
  'New DisBalance',
  'Fly Bordan',
  'Battilioni'
]

const DATA_NAMES = [
  'Naruto Baruto Ichigo Kurosaki Taylor Swift',
  'You wanna play, let`s play AirBordon',
  'ZXC GUL 1000-7 Dead inside Bottle outside',
  'Execration by erection x_X_x_Daubi-Daubi_x_X_x',
  'Execration by erection x_X_x_Daubi-Daubi_x_X_x'
]

const DATA_STOCK_STATUSES = [
  'В наличии на складе в Москве',
  'Под заказ с Poizon',
  'Товара сейчас нету в наличии'
]

const DATA_PRODUCT_STATUSES = [
  true,
  false
]

const DATA_PRODUCT_DESCRIPTION = [
  'Ультрамодные кроссовки, совмещающие комфорт и стиль. Мягкая амортизация, прочная подошва и дышащий верх идеальны для активного образа жизни.',
  'Превосходные кроссовки, сочетающие в себе комфорт и стиль. Идеальны для активного образа жизни и тренировок. Доступны в различных цветах и размерах. Удобство и модный дизайн в одной паре!',
  'Стильные и комфортные кроссовки, идеально подходят для активного образа жизни. Подошва обеспечивает отличную амортизацию, а верхняя часть выполнена из прочного материала для долговечности.',
  'Идеальные кроссовки для любителей активных тренировок. Легкий и прочный материал обеспечивает отличную поддержку стопы, а уникальная подошва с повышенным сцеплением гарантирует надежное сцепление с поверхностью. Будьте готовы к любым вызовам!',
  'Эти кроссовки для настоящих нагибаторов предлагают непревзойденную комфортность и поддержку для интенсивных тренировок. '
]

const DATA_SIZES = [
  40,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  49
]

const DATA_PRODUCT_TYPE = [
  'Кроссовки',
  'Кеды',
  'Ботинки'
]

const DATA_COSTS = [
  23999,
  24999,
  25322,
  21337
]

const DATA_OLD_COSTS = [
  28111,
  29222,
  30654,
  33543
]

const DATA_IMAGES = [
  'https://ir.ozone.ru/s3/multimedia-1/wc1000/6511109677.jpg',
  'https://ir.ozone.ru/s3/multimedia-z/wc1000/6877226087.jpg',
  'https://ir.ozone.ru/s3/multimedia-r/wc1000/6833707719.jpg',
  'https://ir.ozone.ru/s3/multimedia-z/wc1000/6780976943.jpg',
  'https://ir.ozone.ru/s3/multimedia-z/wc1000/6236855915.jpg',
  'https://ir.ozone.ru/s3/multimedia-0/wc1000/6236856060.jpg',
  'https://ir.ozone.ru/s3/multimedia-7/wc1000/6833707879.jpg',
  'https://ir.ozone.ru/s3/multimedia-w/wc1000/6698167256.jpg',
  'https://ir.ozone.ru/s3/multimedia-u/wc1000/6698162070.jpg',
  'https://ir.ozone.ru/s3/multimedia-e/wc1000/6782190122.jpg'
]

//Функция создания числа из диапазона чисел
function createRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Cортировка размеров
function getSizesArray(sizesArray) {
  const arrayLength = createRandomNumber(1, sizesArray.length - 1);
  const noRepeatIndex = createRandomNoRepeatInteger(0, sizesArray.length - 1);
  const newArray = [];
  for(let i = 0; arrayLength > i; i++){
    const arrayItem = sizesArray[noRepeatIndex()];
    newArray.push(arrayItem);
  }
  newArray.sort(sortingSizesArray);
  return newArray;
}

function sortingSizesArray(a, b) {
  return a - b;
}


//Получение случайного элемента массива
const getRandomArrayElement = (elements) => elements[createRandomNumber(0, elements.length - 1)];

// Создание уникального не повторяющего числа
function createRandomNoRepeatInteger(min, max) {
  const idValue = [];
  return function () {
    let currentValue = createRandomNumber (min, max);
    if (idValue.length >= (max - min + 1)) {
      return null;
    }
    while(idValue.includes(currentValue)) {
      currentValue = createRandomNumber (min, max);
    }
    idValue.push(currentValue);
    return currentValue;
  };
};

const DATA_ID  = createRandomNoRepeatInteger(1, DATA_IMAGES.length);

const createData = () => {
  const data = {
    id: DATA_ID(),
    name: getRandomArrayElement(DATA_NAMES),
    description: getRandomArrayElement(DATA_PRODUCT_DESCRIPTION),
    productCategory: 'Обувь',
    productType: getRandomArrayElement(DATA_PRODUCT_TYPE),
    brend: getRandomArrayElement(DATA_BREND_NAMES),
    cost: getRandomArrayElement(DATA_COSTS),
    oldCost: getRandomArrayElement(DATA_OLD_COSTS),
    images: getRandomArrayElement(DATA_IMAGES),
    sizes: getSizesArray(DATA_SIZES),
    status: getRandomArrayElement(DATA_PRODUCT_STATUSES),
    stockStatus: getRandomArrayElement(DATA_STOCK_STATUSES)
  }
  return data;
}

export const DATA = Array.from({length: DATA_IMAGES.length}, createData);

