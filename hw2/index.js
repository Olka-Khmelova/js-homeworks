// 1
// Дан объект с городами и странами. Вывести масив значения в котором будут строки преобразованные в данный формат: <Столица> - это <Страна>.

const citiesAndCountries = {
	'Киев': 'Украина',
	'Нью-Йорк': 'США',
	'Амстердам': 'Нидерланды',
	'Берлин': 'Германия',
	'Париж': 'Франция',
	'Лиссабон': 'Португалия',
	'Вена': 'Австрия',
};

const result = [];

for (capital in citiesAndCountries) {
	result.push(`${capital} - это ${citiesAndCountries[capital]}`);
}
console.log(result);

// 2
// Создать функцию которая выведет многомерный массив A. Данный массив содержит в себе список других массивов B. Массивы B должны содержать по 3 значения. Максимальное значение (в примере это переменная amount) должно делится на 3 нацело.

const amount = 9;
getArray(amount) // выведет в консоль [ [1,2,3], [4,5,6], [7,8,9] ].

function getArray(number) {
  
	const arr = [];
	let counter = 1;
	let subArr =[];
	
	while(counter <= number) {
		subArr.push(counter);
		if(subArr.length == 3) {
			arr.push(subArr);
			subArr = [];
		}
		counter++;
	}
	console.log(arr);
}

// 3
// Cоздать объект с названиями дней недели. Где ключами будут ru и en, a значением свойства ru будет массив с названиями дней недели на русском, а en - на английском. После написать функцию которая будет выводить в консоль название дня недели пользуясь выше созданным объектом. Все дни недели начинаются с 1 и заканичаются цифрой 7 (1- понедельник, 7 - воскресенье). Функция хранит переменную lang - название языка дня недели и переменную day - число дня недели. 

const namesOfDays = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
}

getNameOfDay() // 'Sunday'

function getNameOfDay() {
    const lang = 'en';
    const day = 7;
	console.log(namesOfDays[lang][day-1]);
}

// 4*
// Создайте функцию, которая возвращает сумму двух наименьших положительных чисел из массива минимум 4 положительных целых чисел. Не передаются числа с плавающей запятой или неположительные целые числа.
const arr = [10, 800, 3453000, 8010];

sumOf2MinNumbers(toSorteArray(arr));//810

function toSorteArray (array) {
	//number need to compare
for (let i = 0; i < array.length; i++) {
	// number to compare with
  for (let j = i + 1; j < array.length; j++) {
	//comparing 
    if (array[i] > array[j]) {
      let numberToReplace = array[i];
	  //replacing numbers in array
      array[i] = array[j];
      array[j] = numberToReplace;
    }
  }
}
return arr;
}

function sumOf2MinNumbers(array) {
	let total = 0;
	for (let i = 0; i < 2; i++) {
		 total+=array[i];
	}
	console.log(total);
}

// 5*
// Дан массив единиц и нулей, преобразуйте эквивалентное двоичное значение в целое число.
// Например: [0, 0, 0, 1]рассматривается как 0001двоичное представление 1.

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// Testing: [1, 0, 0, 0, 1] ==> 17
// Testing: [1, 0, 0, 1, 0] ==> 18
// Testing: [1, 0, 1, 0, 1] ==> 21
// Testing: [1, 1, 1, 0, 0, 1] ==> 57

let array = [1, 0, 1, 0, 1];

getIntegerNumber(array, getIntegerArray(array));//21

function getIntegerArray(arr) {
	let integerArray = [];
	let num = 1;

	for(i = 0; i < arr.length; i++) {
		integerArray.push(num);
		num *= 2;
	}
	return integerArray.reverse();
}

function getIntegerNumber(array, integerArray){
	let total = 0;

	for(i = 0; i < array.length; i++) {
		if (array[i] === 1) {
			
			total += integerArray[i];
		}
	}
	console.log(total);
}

