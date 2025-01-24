// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  // TODO: Declare properties of the Truck class
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ) {
    super();
    this.weight = weight;
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.topSpeed = topSpeed;

    this.towingCapacity = towingCapacity;

    if (wheels.length === 4) {
      this.wheels = wheels; // Use the provided wheels if there are 4
    } else {
      // Create 4 default Wheel objects if the wheels array doesn't have 4 elements
      this.wheels = [
        new Wheel(20, 'alloy'),
        new Wheel(20, 'alloy'),
        new Wheel(20, 'alloy'),
        new Wheel(20, 'alloy')
      ];
    }
  }

  tow(vehicle: Truck | Motorbike | Car): void {
    const vehicleMake = vehicle.make;
    const vehicleModel = vehicle.model;

    if (vehicle.weight <= this.towingCapacity) {
      console.log(`The ${vehicleMake} ${vehicleModel} is being towed.`);
    } else {
      console.log(`The ${vehicleMake} ${vehicleModel} is too heavy to be towed.`);
    }
  }

  override printDetails(): void {
    super.printDetails();
    console.log(`VIN: ${this.vin}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} kg`);
    console.log(`Top Speed: ${this.topSpeed} km/h`);
    console.log(`Color: ${this.color}`);
    console.log(`Towing Capacity: ${this.towingCapacity} kg`);
    console.log(`Wheels: ${this.wheels.length} x ${this.wheels[0].getDiameter} inch ${this.wheels[0].getTireBrand}`);
  }
}

export default Truck;