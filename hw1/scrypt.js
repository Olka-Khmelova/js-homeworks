// 1
//Создать цикл на 10 итераций. На каждой итерации если i четное, то вывести в консоль слово Fiz, если i не четное, то вывести в консоль слово Buz, если i кротное цифре 3, то вывести FizBuz.

for (let i = 1; i <= 10; i++) {
    //checking for numbers that divide by 3 without remainder
    if (i % 3 === 0){
        console.log('FizBuz');
    }
    //checking for even numbers
    else if (i % 2 === 0) {
        console.log('Fiz');
    }
    //checking for odd numbers
    else if (i % 2 === 1) {
        console.log('Buz');
    }
}
// 2
// Написать логику нахождения факториала числа 10.
let factorialNumber = 10;

for (let i = factorialNumber - 1; i >= 1; i--) {
  factorialNumber *= i;
}

console.log(factorialNumber);

// 3
// В пачке бумаги 500 листов. За неделю в офисе расходуется 1200 листов. 
// Какое наименьшее количество пачек бумаги нужно купить в офис на 8 недель?

const sheetsInBox = 500;
const officeNeeds = 1200;
let period = 8;

let officeNeedsForPeriod = officeNeeds * period / sheetsInBox;

console.log(officeNeedsForPeriod.toFixed());

// 4*
// Создать функцию, которая выведет в консоль номер этажа и номер подъезда по номеру квартиры. 
//Этажей у нас 9, квартир на этаже по 3.

const roomsOnFloor = 3;
const floors = 9;
const roomNumber = 456;

findPorchAndFloor(roomNumber, floors, roomsOnFloor);

function findPorchAndFloor(roomNumber, floors, roomsOnFloor) {

  let porch = (roomNumber-1)/(roomsOnFloor*floors);
  let floor = ( (roomNumber-1) % (roomsOnFloor*floors) ) / roomsOnFloor;

  console.log (`The room number ${roomNumber} is on ${floor.toFixed()}th floor, in ${porch.toFixed()}th porch.`);

}

//  5**
// Вывести в консоль пирамиду. Переменная указывает количество строк из которых построится пирамида.
// Пирамида должна строится в одинаковом визуально виде между собой, но строго учитывая кол-во строк.

const medianNumber = 6;

showPyramid(medianNumber);

function showPyramid(n) { 
    //displaying row
    for (let row = 0; row < n; row++) { 
        let string = ' ';
      //displaying '-' before '#' in column of every row
      for (let col = 1; col < n-row; col++) { 
        string +='-'; 
      }
      //displaying '#' in every column
      for (let k = 1; k <= 2*row+1; k++) { 
        string +='#'; 
      } 
      // displaying '-' after '#' in column of every row
      for (let col = 1; col < n-row; col++) { 
        string += '-'; 
     }

     console.log(string);  
    } 
  } 


