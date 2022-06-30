function foo() {
  let x = (y = 0);
  x++;
  y++;
  return x;
}

console.log(window.y);

console.log(foo(), typeof x, typeof y);

console.log(typeof window.y);
