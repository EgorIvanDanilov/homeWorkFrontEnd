const cars = [
  { brand: "BMW", price: 20000, isDiesel: true },
  { brand: "Mercedes", price: 22000, isDiesel: false },
  { brand: "Porsche", price: 50000, isDiesel: true },
  { brand: "Nissan", price: 25000, isDiesel: false },
];
//1
const newCars = cars.map((car) => ({
  brand: car.brand,
  isDiesel: car.isDiesel,
}));
console.log(newCars);
//2 Создайте новый массив, где оставьте только машины с дизельным двигателем.
const dieselCars = cars.filter((car) => car.isDiesel);
console.log(dieselCars);
//3 Создайте новый массив, где оставьте только машины не с дизельным двигателем.
const nonDieselCars = cars.filter((car) => !car.isDiesel);
console.log(nonDieselCars);
//4 Посчитайте общую стоимость всех машин не с дизельным двигателем.
const sum = nonDieselCars.reduce((acc, el) => acc + el, 0,
);
console.log(sum);
//5 Повысьте цену всех машин в массиве на 20%.
cars.forEach((car) => (car.price = car.price * 1.2));
//6 Создайте новый массив, где все дизельные машины заменены на { brand: "Tesla", price: 25000, isDiesel: false }
const carsWithoutDiesel = cars.map(car => (car.isDiesel )); // тут не знаю
console.log(carsWithoutDiesel);


//7 ToDoList

const toDoList = ['погулять', 'поспать','покодить','поработать',];
toDoList.splice(1, 0, 'покушать');

console.log(ToDoList);
const newToDo = toDoList.slice();
toDoList.splice(1, 2);
console.log(newToDo);
console.log(toDoList);