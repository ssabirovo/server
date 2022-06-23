"use strict";

export class Unix {
  constructor(name, cpu, ram, ssd) {
    this.name = name;
    this.cpu = cpu;
    this.ram = ram;
    this.ssd = ssd;
  }

  onShutDown() {
    console.log(`${this.name} on SHUT DOWN...`);
  }
  onReset() {
    console.log(`${this.name} on RESET...`);
  }
}
