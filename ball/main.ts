interface IState {
  x: number;
  y: number;
  xSpeed: number;
  ySpeed: number;
  size: number;
  color: string;
  name: string;
}

const boxes: Box[] = [];
const h1: HTMLHeadingElement | null = document.querySelector("h1");

class Box {
  state: IState = {
    x: 0,
    y: 0,
    xSpeed: 0,
    ySpeed: 0,
    size: 0,
    color: "",
    name: "",
  };
  box: HTMLDivElement;
  isStop: boolean = false;

  constructor(state: IState) {
    this.state = state;
    this.render();
  }

  render() {
    this.box = document.createElement("div");
    this.box.innerText = (this.state.size / 2).toString();
    this.box.style.position = "absolute";
    this.box.style.width = this.state.size + "px";
    this.box.style.height = this.state.size + "px";
    this.box.style.background = this.state.color;
    this.box.style.transform = `translate(${this.state.x}px,${this.state.y}px)`;
    document.body.appendChild(this.box);
  }

  update(box: Box) {
    this.checkDistance(box);
    if (this.isStop) return;
    if (
      this.state.x + this.state.size >= window.innerWidth ||
      this.state.x <= 0
    ) {
      this.state.xSpeed = -this.state.xSpeed;
    }
    if (
      this.state.y + this.state.size >= window.innerHeight ||
      this.state.y <= 0
    ) {
      this.state.ySpeed = -this.state.ySpeed;
    }

    this.state.x += this.state.xSpeed;
    this.state.y += this.state.ySpeed;
    this.box.style.transform = `translate(${this.state.x}px,${this.state.y}px)`;
    requestAnimationFrame(() => this.update(box));
  }

  checkDistance(box: Box) {
    const x1 = box.state.x + box.state.size * 0.5;
    const x2 = this.state.x + this.state.size * 0.5;
    const y1 = box.state.y + box.state.size * 0.5;
    const y2 = this.state.y + this.state.size * 0.5;

    const distance = Math.ceil(((x1 - x2) ** 2 + (y1 - y2) ** 2) ** 0.5);

    h1!.innerText = `Box1(${this.state.x},${this.state.y}) and Box1(${box.state.x},${box.state.y}) interval = ${distance}px`;

    if (distance <= (box.state.size + this.state.size) / 2) {
      this.isStop = true;
    }
  }
}

function random(from: number, to: number): number {
  return from + Math.floor(Math.random() * (to - from));
}

function randomColor() {
  let color: string = "#";
  const nums = Math.random().toString(16).slice(2, 8);
  return color + nums;
}

function init() {
  const state1: IState = {
    x: random(0, window.innerWidth - 50),
    y: random(0, window.innerHeight - 50),
    xSpeed: 1,
    ySpeed: 1,
    size: 240,
    color: randomColor(),
    name: "Box-1",
  };
  const state2: IState = {
    x: random(0, window.innerWidth - 50),
    y: random(0, window.innerHeight - 50),
    xSpeed: 1 / Math.pow(2, 0.5),
    ySpeed: 1 / Math.pow(2, 0.5),
    size: 240,
    color: randomColor(),
    name: "Box-2",
  };

  const box1 = new Box(state1);
  const box2 = new Box(state2);

  requestAnimationFrame(() => box1.update(box2));
  // requestAnimationFrame(() => box2.update(box1));
}

init();
