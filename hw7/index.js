//                 Exercise 1
//Создать поиск кандидатов в массиве candidateArr по номеру телефона. Номер телефона может быть указан не полностью и в любом формате.

const searchCandidatesByPhoneNumber = (arr, phone) => {
    return arr.filter((candidate) => 

        //               Variant 1
    candidate.phone.replace(/\D/g, '').match(phone.replace(/\D/g, '')));

    //               Variant 2
    // candidate.phone.replace(/\D/g, '').includes(phone.replace(/\D/g, '')));

}

console.log(searchCandidatesByPhoneNumber(condidateArr, '43')); 
// / [Candidate, Candidate, Candidate ...]

console.log(searchCandidatesByPhoneNumber(condidateArr, '+1(869) 40'));
// [Candidate, Candidate ...]

console.log(searchCandidatesByPhoneNumber(condidateArr, '+83'));
/// [Candidate, Candidate, Candidate ...]

console.log(searchCandidatesByPhoneNumber(condidateArr, '+1(869)408-39-82'));
/// [Candidate]


//                 Exercise 2
//Создать функию которая найдет кандидата по  _id и вернет его из массива candidatesArr c отформатированной датой регистрации (поле registred). Дата должна иметь формат DD/MM/YY.

const getCandidateById = (arr, id) => {
    return arr
    .filter((candidate) => candidate._id === id)
    .map(candidate => {
        candidate.registered = new Date(candidate.registered).toLocaleDateString('en-GB');
    return candidate;
});
}

console.log(getCandidateById(condidateArr, '5e216bc9a6059760578aefa4'));

// {
//    _id: '5e216bc9a6059760578aefa4',
//    name: 'Bernice Walton',
//    registred: '05/11/2015',
//    ... other properties in candidate 
// }

//                 Exercise 3
// Написать функцию которая будет сортировать массив canidatesArr по количеству денег лежащих на балансе (смотрим свойство balance)   в том порядке, в котором ей укажут в аргементе sortBy. Если параметр не был передан, то вернет массив в первоначальном состоянии.

const sortCandidatesArr = (arr, sortBy) => {
    if (sortBy === 'asc') {
        return [...arr].sort(
            (a, b) =>
            Number(a.balance.slice(1).replace(/\,/, '')) -
            Number(b.balance.slice(1).replace(/\,/, '')));
    }
    
    if (sortBy === 'desc') {
        return [...arr].sort(
            (a, b) =>
            Number(b.balance.slice(1).replace(/\,/, '')) -
            Number(a.balance.slice(1).replace(/\,/, '')));
    } else {
        return arr;
        }
}

console.log(sortCandidatesArr(condidateArr, 'asc'));
// отсортирует по-возростанию и вернет отсортированный массив

console.log(sortCandidatesArr(condidateArr, 'desc'));
// отсортирует по-убыванию и вернет отсортированный массив

console.log(sortCandidatesArr(condidateArr));
// не будет сортировать, а просто вернет первоначальный массив


//                 Exercise 4
// Написать функцию, которая вернет объект в котором название ключей будут цвета глаз, а значением - массив с кандидатами имеющие такой цвет глаз. При этом нельзя самому указывать первоначальный объект с возможными вариантами цветами глаз, а сгенерировать их на основе массива с кандидатами, то есть пройтись по массиву candidatesArr и брать смотреть на свойство eyeColor и добавлять значение цвета глаз кандидата как ключ объекта, если такого ключа не существует, ну и не добавлять - если  одноименный ключ уже существует

//         Variant 1

const getEyeColorMap = (arr) => 

  arr.reduce((acc, candidate) => {
    acc[candidate.eyeColor] = acc[candidate.eyeColor] || [];
    acc[candidate.eyeColor].push(candidate);

    return acc;

}, {}); //{} - accumulator 


//         Variant 2

// const getEyeColorMap = (arr) => {
// let obj = {};

//     arr.forEach (candidate => {

//     if (!obj[candidate.eyeColor]) {
//         obj[candidate.eyeColor] = [];
//     }

//     obj[candidate.eyeColor].push(candidate)   
//     })
// return obj;
// }
      

console.log(getEyeColorMap(condidateArr));

// {
//    grey:  [Candidate, Candidate, Candidate, Candidate ...],
//    blue:  [Candidate, Candidate, Candidate, ...],
//    green: [Candidate, Candidate, Candidate, Candidate, Candidate ...]
//    ... etc.
// }