var boxes = [];
var h1 = document.querySelector("h1");
var Box = /** @class */ (function () {
    function Box(state) {
        this.state = {
            x: 0,
            y: 0,
            xSpeed: 0,
            ySpeed: 0,
            size: 0,
            color: "",
            name: ""
        };
        this.isStop = false;
        this.state = state;
        this.render();
    }
    Box.prototype.render = function () {
        this.box = document.createElement("div");
        this.box.innerText = (this.state.size / 2).toString();
        this.box.style.position = "absolute";
        this.box.style.width = this.state.size + "px";
        this.box.style.height = this.state.size + "px";
        this.box.style.background = this.state.color;
        this.box.style.transform = "translate(".concat(this.state.x, "px,").concat(this.state.y, "px)");
        document.body.appendChild(this.box);
    };
    Box.prototype.update = function (box) {
        var _this = this;
        this.checkDistance(box);
        if (this.isStop)
            return;
        if (this.state.x + this.state.size >= window.innerWidth ||
            this.state.x <= 0) {
            this.state.xSpeed = -this.state.xSpeed;
        }
        if (this.state.y + this.state.size >= window.innerHeight ||
            this.state.y <= 0) {
            this.state.ySpeed = -this.state.ySpeed;
        }
        this.state.x += this.state.xSpeed;
        this.state.y += this.state.ySpeed;
        this.box.style.transform = "translate(".concat(this.state.x, "px,").concat(this.state.y, "px)");
        requestAnimationFrame(function () { return _this.update(box); });
    };
    Box.prototype.checkDistance = function (box) {
        var x1 = box.state.x + box.state.size * 0.5;
        var x2 = this.state.x + this.state.size * 0.5;
        var y1 = box.state.y + box.state.size * 0.5;
        var y2 = this.state.y + this.state.size * 0.5;
        var distance = Math.pow((Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2)), 0.5);
        h1.innerText = "Box1(".concat(this.state.x, ",").concat(this.state.y, ") and Box1(").concat(box.state.x, ",").concat(box.state.y, ") interval = ").concat(distance, "px");
        if (Math.abs(distance + 1 - (box.state.size + this.state.size) / 2) < 1) {
            this.isStop = true;
        }
    };
    return Box;
}());
function random(from, to) {
    return from + Math.floor(Math.random() * (to - from));
}
function randomColor() {
    var color = "#";
    var nums = Math.random().toString(16).slice(2, 8);
    return color + nums;
}
function init() {
    var state1 = {
        x: random(0, window.innerWidth - 50),
        y: random(0, window.innerHeight - 50),
        xSpeed: 1,
        ySpeed: 1,
        size: 240,
        color: randomColor(),
        name: "Box-1"
    };
    var state2 = {
        x: random(0, window.innerWidth - 50),
        y: random(0, window.innerHeight - 50),
        xSpeed: 1,
        ySpeed: 1,
        size: 240,
        color: randomColor(),
        name: "Box-2"
    };
    var box1 = new Box(state1);
    var box2 = new Box(state2);
    requestAnimationFrame(function () { return box1.update(box2); });
    // requestAnimationFrame(() => box2.update(box1));
}
init();
