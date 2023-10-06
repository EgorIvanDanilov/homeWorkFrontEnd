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
//2
const dieselCars = cars.filter((car) => car.isDiesel);
console.log(dieselCars);
//3

//4

//5

//6
