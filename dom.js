const addBtn = document.getElementById("add_btn");
const heading = document.querySelector("#heading");

addBtn.addEventListener("click", function () {
  let text = heading.innerHTML;
  let tempText = "";
  for (let i = 1; i < text.length; i++) {
    tempText += text[i];
  }
  const color = randomColor();
  document.body.style.background = color;

  heading.innerHTML = tempText;
});

function randomColor() {
  let keys = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += keys[Math.floor(Math.random() * 16)];
  }

  return color;
}
