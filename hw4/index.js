let ID = 1;
class Student {
    constructor(enrollee){
        this.id = ID++;
        this.name = enrollee.name;
        this.surname = enrollee.surname;
        this.ratingPoint = enrollee.ratingPoint;
        this.schoolPoint = enrollee.schoolPoint;
        this.course = enrollee.course;
        this.isSelfPayment = null;
    }
}
const createStudentsList = (enrolleesList) => {
    const listOfStudents= [];
 
    for(const enrollee of enrolleesList) {
       const student = new Student(enrollee);
       listOfStudents.push(student);
    }
 
    return listOfStudents;
 } 
 
 const students = createStudentsList(studentArr);

 
 const sortedStudentsList = (array) => {
    const MAX_RATING_POINTS = 800;
  
    for (let i = 0; i < array.length; i++) {
        // number to compare with
      for (let j = i + 1; j < array.length; j++) {

        // comparing 
        if (array[i].ratingPoint > array[j].ratingPoint && array[i].ratingPoint >= MAX_RATING_POINTS) {

          let numberToReplace = array[i];
          //replacing numbers in array
          array[i] = array[j];
          array[j] = numberToReplace;
        }
        if (array[i].ratingPoint === array[j].ratingPoint && array[i].ratingPoint >= MAX_RATING_POINTS) {
            if(array[i].schoolPoint > array[j].schoolPoint){
                let numberToReplace = array[i];
                //replacing numbers in array
                array[i] = array[j];
                array[j] = numberToReplace;

            }
            Student.isSelfPayment = false;
        }
      }
      }
console.table(array);
    }
 
 const filterBudgetStudents = (students) => {
    let budgetStudentsList = [];
    for(let i = students.length-1; i < budgetStudentsList.length; i--) {
        budgetStudentsList.push([i]);
    }
    console.log(budgetStudentsList);
}


 
// // filterBudgetStudents();
// filterBudgetStudents(sortedStudentsList(students));
// console.table (students);
sortedStudentsList(students);
 console.table(students);

 /*!!!!!!!!!!!!Exercise 2!!!!!!!!!!!!*/

class CustomString {
    reverse(str) {
        console.log (str.split("").reverse().join(""));
    }
    ucFirst(str) {
        console.log(str.charAt(0).toUpperCase()+str.slice(1));
    }
    ucWords(str) {
        let splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
       // You do not need to check if i is larger than splitStr length, as your for does that for you
       // Assign it back to the array
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
        }
           // Directly return the joined string
   console.log (splitStr.join(' ')); 
    }

}
const myString = new CustomString();
myString.reverse('qwerty'); //выведет 'ytrewq'
myString.ucFirst('qwerty'); //выведет 'Qwerty'
myString.ucWords('qwerty qwerty qwerty'); //выведет 'Qwerty Qwerty Qwerty

 /*!!!!!!!!!!!!Exercise 3!!!!!!!!!!!!*/

 class Validator {

    checkIsEmail(value) {
        if(value.length >2 && value.match('@gmail')){
            console.log (true);
        }
    }
    checkIsDomain(value) {
        if(value.length >2 && value.match('google.com')){
            console.log (true);
        }
    }
    checkIsDate(value) {
        if(value.length === 10 && value.substring(2,3) === '.' && value.substring(5,6) === '.'){
            console.log (true);
        }
    }
    checkIsPhone(value) {
        if(value.length > 10 && value.substring(0,3) === '+38'){
            console.log (true);
        }
        else{
            console.log (false); 
    }
}
 }
const validator = new Validator();


validator.checkIsEmail('vasya.pupkin@gmail.com'); // true
validator.checkIsDomain('google.com'); // true
validator.checkIsDate('30.11.2019'); // true
validator.checkIsPhone('+38 (066) 937-99-92'); // если код страны Украинский, то возвращаем true иначе false