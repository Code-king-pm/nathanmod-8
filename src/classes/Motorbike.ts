// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// TODO: The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle {
 
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  // The properties should include vin, color, make, model, year, weight, top speed, and wheels


  // TThe types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[])

  // TODO: Create a constructor that accepts the properties of the Motorbike class

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    ){
    super();
    this.weight = weight;
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.topSpeed = topSpeed;
    if (wheels.length === 2) {
      this.wheels = wheels; // Use the provided wheels if there are 4
    } else {
      // Create 4 default Wheel objects if the wheels array doesn't have 4 elements
      this.wheels = [
        new Wheel(20, 'alloy'),
        new Wheel(20, 'alloy'),
      
      ];
    }
  }
 wheelie = ():void=>{
 console.log(`Motorbike ${this.make} ${this.model}is doing a wheelie!`)

 }


 override printDetails(){

  super.printDetails();
    console.log(`VIN: ${this.vin}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} kg`);
    console.log(`Top Speed: ${this.topSpeed} km/h`);
    console.log(`Color: ${this.color}`)
    console.log(`Wheels: ${this.wheels.length} x ${this.wheels[0].getDiameter} inch ${this.wheels[0].getTireBrand}`);
  }
}
    

    //  The constructor should call the constructor of the parent class, Vehicle
    // The constructor should initialize the properties of the Motorbike class
    //  The constructor should check if the wheels array has 2 elements and create 2 new default Wheel objects if it does not

  // Implement the wheelie method
    // The method should log the message "Motorbike [make] [model] is doing a wheelie!"

  // TODO: Override the printDetails method from the Vehicle class

  
  // TODO: The method should call the printDetails method of the parent class
  // TODO: The method should log the details of the Motorbike
  // TODO: The details should include the VIN, make, model, year, weight, top speed, color, and wheels


// Export the Motorbike class as the default export
export default Motorbike;
