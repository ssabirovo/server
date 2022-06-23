import { Unix } from "./unix.js";

export class MacOS extends Unix {
  constructor(name, cpu, ram, ssd) {
    super(name, cpu, ram, ssd);
  }
  onReset() {
    console.log(`OnReset MacOS ${this.name}`);
  }
}
