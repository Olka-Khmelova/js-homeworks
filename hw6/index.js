// !!!!!!!!Exercise 1!!!!!!!!!!!!!!!!
//Создать функцию которая будет удалять людей из массива по индексу, который мы передадим параметром. 
function removeUser (array, number) {
    array.splice (number, 1);
    return array;
}
const arr = ['Vasya', 'Petya', 'Alexey']
removeUser(arr, 2)
console.log(arr) /// ['Vasya', 'Alexey']

// !!!!!!!!Exercise 2!!!!!!!!!!!!!!!!
// Создать функцию которая вернет все ключи обьекта переданного параметром
const obj = { name: 'Vasya', age: 1}

function getAllKeys(object) {
    console.log (Object.keys(object));
}
getAllKeys(obj) /// ["name", "age"]

// !!!!!!!!Exercise 3!!!!!!!!!!!!!!!!
//Создать функцию которая вернет все значения объекта переданного параметром
function getAllValues(object) {
    console.log (Object.values(object));
}

getAllValues(obj); /// ["Vasya", 1]

// !!!!!!!!Exercise 4!!!!!!!!!!!!!!!!
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
function insertIntoarr (obj, num) {
    array.forEach((element, idx) => {
        if(element.id === num){
            array.splice(idx, 0, obj);
         }
    return array;
           })

}
insertIntoarr(firstObj, 2)
console.log(array) 
/// [ {id: 1,name: 'Kolya'}, {id: 3, name: 'Vasya'}, {id: 2, name: 'Petya'} ]

insertIntoarr(secondObj, 1)
console.log(array) 
/// [ {id: 4,name: 'Katya'}, {id: 1,name: 'Kolya'}, {id: 3, name: 'Vasya'}, {id: 2, name: 'Petya'} ]

