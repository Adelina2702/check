// Задание №1

// Используя API списка всех стран выведите таблицу
// с информацией о всех странах:
// API: https://restcountries.eu/rest/v2/all

// fetch('https://restcountries.com/v3.1/all')
// .then((result) => result.json()).then((data) => {
//     data.forEach((item) => {
//       console.log(item);
//       let elem = `
//              <tr>
//                  <td>${item.alpha2Code}</td>
//                     </tr>
//                     `;
//       $('tbody').append(elem);
//     });
//   });



    
// Задание 2

// Создайте класс Student, конструктор которого имеет
// параметры name, lastName, department, yearOfEntrance.
// Добавьте метод getStudentInfo, который возвращает имя,
// фамилию, год поступления и факультет в отформатированном виде: “Вася Иванов поступил в 2017 г. на факультет: Программирование.”

//Ответ:
class Student {
    constructor(name, lastName, department, yearOfEntrance){
        this.name= name
        this.lastName = lastName
        this.department = department
        this.yearOfEntrance = yearOfEntrance
    }
    getStudentInfo(){
        console.log(`${this.name} ${this.lastName} поступил в ${this.yearOfEntrance} г. на ${this.department} : Программирование`);
    }
}
let students = new Student("Вася", "Иванов", "факультет", "2017")
console.log(students)
students.getStudentInfo()

// Задание 3

// Реализуйте класс Student (Студент),
// который будет наследоваться от класса User.
// Этот класс должен иметь следующие свойства:
// ● name (имя, наследуется от User),
// ● surname (фамилия, наследуется от User),
// ● birthday (год рождения, наследуется от User),
// ● isAdult (совершеннолетний, по умолчанию undefined).
// Класс должен иметь метод getFullName()
// (наследуется от User), с помощью которого можно
// вывести одновременно имя и фамилию студента.
// Также класс должен иметь метод getAge(),
// который будет выводить возраст студента.
// Возраст вычисляется так: от текущего года отнять год рождения.
// И в случае, если студент совершеннолетний менять поле isAdult на true
// (в противном случае false)



class User {
  constructor(name, surname, birthday){
    this.name = name
    this.surname = surname
    this.birthday = birthday
  }
  getFullName(){
    return this.name,this.surname
  }
}

class Student extends User{
  constructor(name, surname, birthday, isAdult){
    super(name, surname, birthday)
    this.isAdult = isAdult
  }
  getAge(){
    this.isAdult = 2021 - this.birthday
    if(this.isAdult > 18){
      return true
    } else{
      return false
    }
  }
}
let student1 = new Student("John", "Snow", 1992)
console.log(student1.getAge())