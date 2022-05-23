export function generateAnswer(corAnswer) {
  let point = 20;
  let distance = Math.floor(Math.random() * (2 * point + 1)) - point; // [-20,20]
  return corAnswer + distance;
}

export function generateNum(num, distance = 0) {}
