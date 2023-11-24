class Car {
  constructor(brand, model, year, color, price, gas) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
    this.price = price;
    this.gas = gas;
  }

  honk() {
    console.log('Tuut tuut');
    console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}, Price: $${this.price}`);
  }
}

// Create car objects
const cars = [
  new Car('Honda', 'CR-V', 2023, 'Red', 50000, 45),
  new Car('Ford', 'F-150', 2020, 'Black', 25000, 30),
  new Car('BMW', 'X5', 2022, 'Green', 60000, 65),
  new Car('Mazda', 'CX-5', 2019, 'White', 15000, 60),
  new Car('Audi', 'Q7', 2018, 'Silver', 52000, 47),
  new Car('Kia', 'Forte', 2020, 'Blue', 21000, 56),
];

// Invoke honk method for each car
cars.forEach(car => car.honk());

// Simulate race and reduce gas after each turn
const currentYear = new Date().getFullYear();
for (let i = 0; i < 7; i++) {
  console.log(`\nRace Turn ${i + 1}:`);
  cars.forEach(car => {
    const yearsOld = currentYear - car.year;
    let gasLoss = 5 + yearsOld; // Base gas loss
    if (yearsOld <= 0) {
      gasLoss = 5; // New cars lose 5 litres
    }
    car.gas -= gasLoss;
    console.log(`${car.brand} ${car.model} Gas: ${car.gas}L`);
  });
}
