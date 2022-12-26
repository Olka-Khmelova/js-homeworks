
// Exersice 1
// Создать функцию - конструктор, которая будет иметь внутри все свойства обьекта emplyee из массива emplyeeArr;

const Emploee = function(employee) {
    //     Exersice 1
    this.id = employee.id;
    this.name = employee.name;
    this.surname = employee.surname;
    this.salary = employee.salary;
    this.workExperience = employee.workExperience;
    this.isPrivileges = employee.isPrivileges;
    this.gender = employee.gender;
    //     Exersice 2
    Object.defineProperty(this, 'getFullName', {
        get(){
           return `${this.surname} ${this.name}`
        },
     });
       //     Exersice 7*
    Object.defineProperty(this, 'fullInfo', {
        get(){
            let message = [];
            for(const key in this){

                message.push(`${key} - ${this[key]}`);
            }
             return message.join(", ");
        },
        set(value) {
            for(const key in this){
                for(const val in value){
                    if (key === val) {
                        this[key]= value[val];
                    }
                }
            }
        }
    });

}

// Exersice 2
// Добавить функции - конструктору метод (помним про prototype): getFullName который вернет полное имя начиная с фамилии в виде строки
 
// Emploee.prototype.getFullName = function() {
//         return `${this.surname} ${this.name}`
//     }


// Exersice 3
// Создать новый массив на основе emplyeeArr в котором будут содержаться те же обьекты, но созданные функцией - конструктором Emploee. Новый массив должен содержать имя emplyeeConstructArr.
let createEmployesFromArr = (employeesList) => {

    const employeesArrList = [];

    for(const employee of employeesList) {
       const eachEmployee = new Emploee(employee);
       employeesArrList.push(eachEmployee);
    }
 
    return employeesArrList;
};

const employeeConstructArr = createEmployesFromArr(employeesArr);
console.log(employeeConstructArr);

// Exersice 4
// Создать функцию которая вернет массив со всеми полными именами каждого employee, содержащегося в emplyeeConstructArr;

const getFullNamesFromArr = (arr) => {

    const fullNameArr = [];

    for(value of arr) {
        const fullName = this.value.getFullName;
        fullNameArr.push(fullName);
    }

console.log(fullNameArr) ;
}
    
getFullNamesFromArr(employeeConstructArr) /// ['Денис Хрущ', 'Сергей Войлов', ... ]

// Exersice 5
// Создать функцию которая вернет среднее значение зарплаты всех employee
const getMiddleSalary = (arr) => {

    let totalSalary = null;
    let averageSalary = null;

    for(value of arr) {
        totalSalary += this.value.salary; 
    }

    averageSalary = totalSalary/arr.length;
    console.log(Math.floor(averageSalary));
}

getMiddleSalary(employeeConstructArr);

// Exersice 6*
// Создать функцию которая выберет наугад работника из массива emplyeeConstructArr. Вы должны учитывать в функции длинну массива, так как если работников 7, а рандомное число будет равно больше 7, то результат будет undefined. Вы можете использовать обьявленную функцию в сомой же себе. Подсказка Math.random

const getRandomEmployee = (arr) => {

    const randomEmployee = Math.floor(Math.random() * arr.length);

    console.log(arr[randomEmployee]);

}
    
    getRandomEmployee(employeeConstructArr);


//  Exersice 7*
// Создать дескриптор со свойством fullInfo который будет записывать все свойства переданные ему в экземпляр от которого он вызывается. И выдавать все свойства, если к нему обратиться, в виде строки <Название свойства> - <значение> через запятую.

// Object.defineProperty(this, 'fullInfo', {
//     get(){
//         let message = '';
//         for(const key in this){
//             message += `${key} - ${this[key]}, `;
//          }
//          return message;
//     },
//     set(value) {
//         for(const key in this){
//             for(const val in value){
//                 if (key === val) {
//                     this[key]= value[val];
//                 }
//             }
//         }

//     }
// });

const employeeObj = new Emploee(employeesArr[0]);
console.log(employeeObj.fullInfo);

employeeObj.fullInfo = {name: 'Вася', salary: 9000};
console.log (employeeObj);