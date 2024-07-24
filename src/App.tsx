import React from "react";

import "./App.css";

// class Book {
//   public title: string;
//   public author: string;
//   public ratings: number[];

//   constructor(title: string, author: string) {
//     this.title = title;
//     this.author = author;
//     this.ratings = [];
//   }

//   // addRating(rating: number): void {
//   //   if (rating >= 1 && rating <= 5) {
//   //     this.ratings.push(rating);
//   //     console.log(`Rating ${rating} added for ${this.title}`);
//   //   } else {
//   //     console.log(`Invalid rating. Please provide a rating between 1 and 5`);
//   //   }
//   // }

//   // перетворемо на стрілкову функцію
//   public addRating = (rating: number): void => {
//     if (rating >= 1 && rating <= 5) {
//       this.ratings.push(rating);
//       console.log(`Rating ${rating} added for ${this.title}`);
//     } else {
//       console.log(`Invalid rating. Please provide a rating between 1 and 5`);
//     }
//   };

//   //середній рейтинг
//   public getAverageRating(): number {
//     if (this.ratings.length === 0) {
//       return 0;
//     }

//     const sum = this.ratings.reduce((acc, rating) => acc + rating, 0);
//     return sum / this.ratings.length;
//   }

//   public displayInfo(): void {
//     console.log(`Title: ${this.title}, Author: ${this.author}`);
//   }
// }

// // приклад використання класу Book
// const book1 = new Book("The Catcher....", "J.D. Salinger");
// const book2 = new Book("to kill...", "Harper Lee");

// book1.addRating(4);
// book1.addRating(5);
// book2.addRating(3);

// console.log(`Average rating for ${book1.title}: ${book1.getAverageRating()}`);
// console.log(`Average rating for ${book2.title}: ${book2.getAverageRating()}`);

// book1.displayInfo();
// book2.displayInfo();

///////////////////////////////////////////////////////////////

class User {
  protected canAuth = (): boolean => true;
}

// private не наслідується,
//protected наслідується, але не доступен ззовні

class Person extends User {
  private firstName: string;
  private lastName: string;
  public age: number;

  constructor(firstName: string, lastName: string, age: number) {
    super();
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  //публічний метод для отримання повного імені
  public geyFullName = (): string => {
    return `${this.firstName} ${this.lastName}`;
  };

  //приватний метод для перевірки - чи особа може голосувати
  private canVote(): boolean {
    return this.age >= 18;
  }

  //публічний метод для перевірки - чи особа може голосувати
  checkVotingEligibility(): void {
    if (this.canVote()) {
      console.log(`${this.geyFullName()} is eligible to vote`);
    } else {
      console.log(`${this.geyFullName()} is not eligible to vote `);
    }
  }
}

// приклад використання класу Person
const person1 = new Person("Oleg", "Runin", 25);
const person2 = new Person("Olga", "Runina", 16);

console.log(person1.geyFullName());
console.log(person2.geyFullName());

person1.checkVotingEligibility();
person2.checkVotingEligibility();

//спроба звернутися до приватних властивостей ззовні класу
// призводить до помилки

////////////////////////////////////////////////////////////////////

class Animal {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  //публічний метод для виведення звуку тварини
  public makeSound = (sound: string): void => {
    console.log(`${this.makeSound.name} make a ${sound} sound.`);
  };
}

class Dog extends Animal {
  private breed: string;
  constructor(name: string, breed: string) {
    super(name);
    this.breed = breed;
  }

  //публічний метод для виведення породи собаки
  displayBreed(): void {
    console.log(`${this.name} is a ${this.breed} dog`);
  }

  //публічний метод для виведення звуку собаки
  bark(): void {
    this.makeSound("bark");
  }
}
//праклад використання класу Dog
const dog1 = new Dog("Buddy", "Golden Retriever");

dog1.displayBreed();
dog1.bark();

//звернення до  protected name видасть помилку

/////////////////////////////////////////////////////////////

class Circle {
  readonly radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  //публічний метод для обчислення площі круга
  calculatedArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

//приклад використ класу Circle
const circle1 = new Circle(5);
console.log(
  `Circle 1 - Radius: ${circle1.radius}, Area: ${circle1.calculatedArea}`
);

//спроба змінити значення readonly radius призведе до помилки
// тобто circle1.radius = 10 буде помилкою
// readonly впливає на можливість редагування

////////////////////////////////////////////////////////////

//readonly у властивостях об'єктів
const product: {
  readonly name: string;
  readonly price: number;
  description: string;
  manufacturer: string;
  inStock: boolean;
} = {
  name: "Laptop",
  price: 999.99,
  description: "A high- perfomance .......",
  manufacturer: "TechCo",
  inStock: true,
};

//product.name = "Desktop" - буде помилка
//product.price = 555 - буде помилка

console.log(product);

////////////////////////////////////////////////////////////
///             implements i interface

// оголошення інтерфейсу для співробітника

interface Pers {
  firstName: string;
  lastName: string;
}

interface Employee {
  role: string;
  getSalary(): number;
}

class Users {}

//клас, що представляє менеджера
class Manager extends Users implements Pers, Employee {
  firstName: string;
  lastName: string;
  role: string;
  salary: number;

  constructor(firstName: string, lastName: string) {
    super();
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = "Manager";
    this.salary = 50000; // початкова з/п для менеджера
  }

  getSalary(): number {
    return this.salary;
  }
}

//клас, що представляє розробника
class Developer implements Employee {
  firstName: string;
  lastName: string;
  role: string;
  salary: number;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = "Developer";
    this.salary = 60000; // початкова з/п для розробника
  }

  getSalary(): number {
    return this.salary;
  }
}

// використання класів
const manager = new Manager("Vas", "Bubkin");
const developer = new Developer("Tata", "Tatarenko");

console.log(
  `${manager.firstName} ${manager.lastName} (${
    manager.role
  }) Salary: $${manager.getSalary()}`
);
console.log(
  `${developer.firstName} ${developer.lastName} (${
    developer.role
  }) Salary: $${developer.getSalary()}`
);

/////////////////////////////////////////////////////////////
//     ІМЕНОВАНІ КОНСТАНТИ   enum

// оголошення enum для кольорів
enum COLOR {
  RED = "red",
  GREEN = "green",
  BLUE = "blue",
}

//функція, яка приймає значення з enum Color і виводить повідомлення
function displayColor(color: COLOR): void {
  if (color === COLOR.RED) {
    console.log("The selected color is Red");
  } else if (color === COLOR.GREEN) {
    console.log("The selected color is Green");
  } else if (color === COLOR.BLUE) {
    console.log("The selected color is Blue");
  } else {
    console.log("Invalid color");
  }
}

// використання enum і функції
const selectedColor: COLOR = COLOR.GREEN;
displayColor(selectedColor);

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

///////////////////////////////////////////////////////////
//////// кортеж

//оголошення кортежу для представлення інформ про книгу
let book: [string, number, boolean];

//ініціалізація кортежу
book = ["The .....", 1987, true];

//доступ до елементів кортежу
const title: string = book[0];
const year: number = book[1];
const isAvailable: boolean = book[2];

console.log(`Title: ${title}`);
console.log(`Year: ${year}`);
console.log(`Is Available: ${isAvailable}`);

console.log(book);

export default App;
