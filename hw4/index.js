/*!!!!!!!!!!!!Exercise 1!!!!!!!!!!!!*/

class Student {
    constructor(enrollee) {
        this.id = Student.ID++;
        this.isSelfPayment = false;

        Object.assign(this, enrollee);

        Student.listOfStudents.push(this);
        Student.filterSelfPaymantStudents();
    }

    static ID = 1;

    static listOfStudents= [];

    static filterSelfPaymantStudents () {

        const BUDGET_PLACES = 5;
        const MAX_RATING_POINTS = 800;

        const studentsList = Student.listOfStudents;

        for (const index in studentsList) {
            const student = studentsList[index];

            if (studentsList.length <= 5) {
                student.isSelfPayment = student.ratingPoint > MAX_RATING_POINTS;
            }
            if (studentsList.length > 5) {
                //sorting students due to rating points
                for (let i = studentsList.length-1; i >= 0; i--) {
                // student to compare with
                    for (let j = i - 1; j >= 0; j--) {
                // comparing 
                        if (studentsList[i].ratingPoint > studentsList[j].ratingPoint && studentsList[i].ratingPoint >= MAX_RATING_POINTS) {

                        let numberToReplace = studentsList[i];
                        //replacing students in array
                        studentsList[i] = studentsList[j];
                        studentsList[j] = numberToReplace;
                        }

                        if (studentsList[i].ratingPoint === studentsList[j].ratingPoint) {
                        //sorting students due to school points
                            if(studentsList[i].schoolPoint > studentsList[j].schoolPoint){

                                let numberToReplace = studentsList[i];
                                //replacing students in array
                                studentsList[i] = studentsList[j];
                                studentsList[j] = numberToReplace;
                            }
                        }
                    }
                }
            }
            student.isSelfPayment = index > (BUDGET_PLACES - 1);
        }
    }
}

for (const enrollee of studentArr) {
    new Student(enrollee);
}
console.table(Student.listOfStudents);


 /*!!!!!!!!!!!!Exercise 2!!!!!!!!!!!!*/

class CustomString {

   reverse(value) {
        console.log(value.split("").reverse().join(""));
    }
  ucFirst(value) {
        console.log(value.charAt(0).toUpperCase() + value.slice(1));
    }
    ucWords(value) {
        let splitStr =value.toLowerCase().split(' ');

        for (let i = 0; i < splitStr.length; i++) {
       //back to the array
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
        }
           //return the joined string
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
        if(value.length > 2 && value.match('@gmail')){
            console.log(true);
        }
    }
    checkIsDomain(value) {
        if(value.length > 2 && value.match('google.com')){
            console.log (true);
        }
    }
     checkIsDate(value) {
        if(value.length === 10 && value.substring(2,3) === '.' && value.substring(5,6) === '.'){
            console.log (true);
        }
    }
    checkIsPhone(value) {
        if(value.length > 10 && value.substring(0,3) === '+38'){;
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