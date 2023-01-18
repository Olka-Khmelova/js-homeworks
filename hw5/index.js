// !!!!!!!Exercise 1!!!!!!!

let counter = (number) => {
    let value = number;

    counter = function() {
        let arg = 0;
        
        if (arguments[0]){
            arg = arguments[0];
        }

        return value = value + arg;
    };

    return counter();
}

console.log(counter(3)) // 3
console.log(counter(5)) // 8
console.log(counter(228)) // 236

// !!!!!!!Exercise 2!!!!!!!
function makeArr() {
    let arr = [];

    return function(value) {

        if (value) {
            arr.push(value);
            return arr;
        }
            arr=[];
        return arr;
    }
}
const getUpdatedArr = makeArr();
console.log(getUpdatedArr(3))// [3]
console.log(getUpdatedArr(5)) // [3, 5]
console.log(getUpdatedArr({name: 'Vasya'})) // [3, 5, {name: 'Vasya'}]
console.log(getUpdatedArr()) // []
console.log(getUpdatedArr(4)) // [4]

// !!!!!!!Exercise 3!!!!!!!
let getTime = () => {
    let start = null;

    getTime = function () {
        if(!start) {
            start = new Date();
            console.log("Enabled");
        }
        let now = new Date();
        let resultInSecs = Math.floor((now.getTime() - start.getTime())/ 1000);
        start = now;

        return resultInSecs;
    }

    getTime();
}

// // Запускаем первый раз
// getTime() // 'Enabled'
// // Запускаем через 2 сек
// getTime() // 2
// // Запускаем через 3 сек
// getTime() // 3
// // Запускаем через 7 сек
// getTime() // 7
// // Запускаем через 60 сек
// getTime() // 60
// // Запускаем через 1 сек
// getTime() // 1

// !!!!!!!Exercise 4!!!!!!!

const timer = time => {
    let timerTime = time;

    function convertTime (timeToConvert) {

        let min = Math.floor(timeToConvert / 60);
        let secs = timeToConvert - min * 60;

        min = min.toString().padStart(2, '0');
        secs = secs.toString().padStart(2, '0');

        return `${min} : ${secs}`;
    };

    const intervalId = setInterval (() => {

        if (timerTime === 1) {
            console.log("Time end");
            clearInterval(intervalId);
            return;
        }

        timerTime--;

        console.log(convertTime(timerTime));
        }, 1000);
    }

    // timer(60);

