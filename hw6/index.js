// !!!!!!!!Exercise 1!!!!!!!!!!!!!!!! *done
//Создать функцию которая будет удалять людей из массива по индексу, который мы передадим параметром. 
function removeUser (array, number) {
    array.splice (number, 1);
    return array;
}
const arr = ['Vasya', 'Petya', 'Alexey']
removeUser(arr, 1);
console.log(arr) /// ['Vasya', 'Alexey']

// !!!!!!!!Exercise 2!!!!!!!!!!!!!!!! *done
// Создать функцию которая вернет все ключи обьекта переданного параметром
const obj = { name: 'Vasya', age: 1}

function getAllKeys(object) {
    console.log (Object.keys(object));
}
getAllKeys(obj) /// ["name", "age"]

// !!!!!!!!Exercise 3!!!!!!!!!!!!!!!! *done
//Создать функцию которая вернет все значения объекта переданного параметром
function getAllValues(object) {
    console.log (Object.values(object));
}

getAllValues(obj); /// ["Vasya", 1]

// !!!!!!!!Exercise 4!!!!!!!!!!!!!!!!  *done
//Содать функцию,где мы первым параметром передадим объект с новым кандидатом, а вторым параметром - id любого кондидата в массиве condidateArr. Функция должна будет вставить кандидата переданного через первый параметр в массив перед кондидатом у которого id равно тому что передали во-втором параметре

const firstObj = {
    id: 3,
    name: 'Vasya'
}

const secondObj = {
    id: 4,
    name: 'Katya'
}

const array = [
    {
        id: 1,
        name: 'Kolya'
    },
    {
        id: 2,
        name: 'Petya'
    },
];

function insertIntoarr(arr, obj, idNumber) {
    const idx = arr.findIndex(
        (candidate) => candidate.id === idNumber);
        arr.splice(idx, 0, obj);
    }


insertIntoarr(array, firstObj, 2)
console.log(array) 
/// [ {id: 1,name: 'Kolya'}, {id: 3, name: 'Vasya'}, {id: 2, name: 'Petya'} ]

insertIntoarr(array, secondObj, 1)
console.log(array) 
/// [ {id: 4,name: 'Katya'}, {id: 1,name: 'Kolya'}, {id: 3, name: 'Vasya'}, {id: 2, name: 'Petya'} ]


// !!!!!!!!Exercise 5!!!!!!!!!!!!!!!! *done
//Создайте класс Condidate который будет принимать параметром объект из массива condidateArr. Добавить метод с именем state который вернет шатат в котором живает наш кондидат. Информация о штате находится в свойстве address и это третья запись после запятой.

class Condidate {
    constructor({ address }) {
            this.state = address.split(', ')[2];
    }
  }

  const condidate = new Condidate(condidateArr[0]);
  console.log(condidate.state); /// Colorado

// !!!!!!!!Exercise 6!!!!!!!!!!!!!!!!*done
//Создать функцию которая выведет массив с названиями фирм взятыми из св-ва company. Если фирмы повторяются в массиве, то удалить дубликаты. Все так же используем массив candidateArr

//                           Variant 1
// function getCompanyNames (arr) {
//     return arr.map(item => item.company)
//     .filter((item, idx, arr) => {
//         return idx === arr.indexOf(item);
//     });
// }

//                           Variant 2
function getCompanyNames (arr){
    let companiesList = new Set;
    arr.map(item => companiesList.add(item.company));
    return [...companiesList];
}
console.log(getCompanyNames(condidateArr)); /// [""EZENT, "JASPER" ... ]

// !!!!!!!!Exercise 7!!!!!!!!!!!!!!!!*done
// Создать функцию которая выведет мне массив id всех кондидатов, которые были зарагестрированны в том же году что и год указанный в параметре.

//                    Variant 1
// function getUsersByYear (arr, year) {

//     let usersByYearList = [];
    
//     arr.forEach(item => {

//         if (new Date(item.registered).getFullYear() === year) {
//             usersByYearList.push(item._id);
//         }
//     })
//     return usersByYearList;

//                    Variant 2
function getUsersByYear(arr, year) {
    return arr
      .filter((candidate) => 
      new Date(candidate.registered).getFullYear() === year)
      .map((candidate) => candidate._id);
  }

console.log(getUsersByYear(condidateArr, 2017)) /// ["e216bc9cab1bd9dbae25637", "5e216bc9e51667c70ee19f4f" ...]

// !!!!!!!!Exercise 8!!!!!!!!!!!!!!!! *done
// Создать функцию которая вернет массив с экземплярами - кандидатами, отфильтрованных по кол-ву непрочитанных сообщений. Смотрим св-во greeting, там указанно это количество в строке, Вам надо достать это число из строки и сверять с тем что в параметер вашей функции.
// Все так же используем массив candidateArr

function getCondidatesByUnreadMsg(arr, messagesAmount) {
    return arr.filter((candidate) => 

    //  Variant 1
    // Number(candidate.greeting.split(' ')[5]) === messagesAmount);

    // Variant 2
    //Number(candidate.greeting.replace(/\D/g, '')) === messagesAmount);

    // Variant 3
    Number(candidate.greeting.match(/\d/g).join('')) === messagesAmount);
  }

console.log(getCondidatesByUnreadMsg(condidateArr, 8)) /// [Condidate, Condidate ...]

// !!!!!!!!Exercise 9!!!!!!!!!!!!!!!! *done
// Создать функцию которая вернет массив по свойству gender.
// Все так же используем массив candidateArr

function getCondidatesByGender(arr, gender) {
    
    return arr.filter((item) => item.gender === gender);
}
console.log(getCondidatesByGender(condidateArr, 'male')) /// [Condidate, Condidate ...]

// !!!!!!!!Exercise 10!!!!!!!!!!!!!!!! *done
//Создать функцию reduce, join самому как на занятии создавали forEach, map, find, filter и т.д.
//                      cJoin
Array.prototype.cJoin = function (joinItem) {
    let result= "";
    for (let i = 0; i < this.length; i++) {
        if (i === this.length - 1) {
            result += this[i];
        } else {
            result += this[i] + joinItem;
        }
    }
    return result;
  };
  
  const arrJoin = [1, 2, "Maria", "Anna", ["dfghfg"]];
  console.log(arrJoin.cJoin(', '));

  //                      cReduce
  Array.prototype.cReduce = function(callback, acc) {
    let i = 0;
    if (arguments.length < 2) {
        i = 1;
        acc = this[0];
    }
    for (; i < this.length; i++) {
        acc = callback(acc, this[i], i, this);
    }
    return acc;
}

const arrReduce = [1,1,1,1,1,1,1,1,1,1];

function add (a,b) {return a+b};

console.log(arrReduce.cReduce(add));
console.log(arrReduce.cReduce(add, 1));
