const mainUsers = [
  "Sherbek",
  "Arslonbek",
  "Inomjonbek",
  "Muhiddin",
  "Murtozxon",
  "Rahmonbek",
  "Abdulxoliq",
  "Muhammadumar",
  "Avazbek",
  "MuhammaddiyorRR",
  "Husniddin",
  "Asilbek",
  "Samandar",
  "Hasanboy",
  "Muhammaddiyor",
];

function random(count) {
  let users = [...mainUsers];
  const size = count / users.length;
  const data = {};
  for (let idx = 1; idx < count + 1; idx++) {
    const userIdx = Math.floor(Math.random() * users.length);
    const userID = users[userIdx];
    if (!data[userID]) {
      data[userID] = [idx];
    } else if (data[userID]?.length === size) {
      users.splice(userIdx, 1);
      idx--;
    } else {
      data[userID].push(idx);
    }
  }
  return data;
}

console.log("---------QUESTIONS---------");
console.log(random(450));
console.log("------------EX---------");
console.log(random(60));
