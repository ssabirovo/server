"use strict";
import { Linux, MacOS } from "./index.js";

const ubuntu = new Linux("Ubuntu", "core-i5", "32GB", "512GB");
ubuntu.onReset();

const bigSure = new MacOS("Big Sure", "M1", "8GB", "256GB");
console.log(bigSure);
bigSure.onReset("hello world");
