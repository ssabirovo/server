"use strict";

class CAR {
  carName = "";
  carNumber = "";
  constructor(carName, carNumber) {
    this.carName = carName;
    this.carNumber = carNumber;
  }

  powerOn() {
    console.log(`power on car: ${this.carName} ${this.carNumber}`);
    this.switchOffLighten("ON");
  }

  powerOff() {
    console.log(`power off car: ${this.carName} ${this.carNumber}`);
    this.switchOffLighten("OFF");
  }

  switchOffLighten(status) {
    console.log(`Light Switch ${status}: ${this.carName} ${this.carNumber}`);
  }
}

const spark = new CAR("spark", "01Z 011 AA");
const tesla = new CAR("Model S", "77A 777 AA");

spark.powerOn();
tesla.powerOff();
