"use strict";
const thead = document.querySelector("thead");
const tbody = document.querySelector("tbody");
const loadTodosBtn = document.getElementById("load-todos-btn");

const url = "http://192.168.43.39:3000/todos";

function getTodos() {
  let httpRequest = new XMLHttpRequest();

  console.log("Loading...");

  httpRequest.addEventListener("load", function () {
    console.log("Loaded");

    const todos = JSON.parse(this.responseText); // parse JSON
    renderTodos(todos);
  });

  httpRequest.open("GET", url);
  httpRequest.send();
}

function deleteTodo(todoID) {
  let httpRequest = new XMLHttpRequest();

  httpRequest.addEventListener("load", function () {
    console.log("Loaded");

    const todos = JSON.parse(this.responseText); // parse JSON
    renderTodos(todos);
  });

  httpRequest.open("DELETE", url + `/${todoID}`);
  httpRequest.send();
}

function renderTodos(todos = []) {
  tbody.innerHTML = "";
  let counter = 1;

  for (let todo of todos) {
    const tableRow = document.createElement("tr");

    for (let key in todo) {
      const td = document.createElement("td");

      if (key === "id") {
        td.innerText = counter++;
        tableRow.appendChild(td);
        continue;
      }

      td.innerText = todo[key];
      tableRow.appendChild(td);

      if (tableRow.children.length === thead.children[0].children.length - 1) {
        td.innerHTML = `<button>Edit</button><button onclick="deleteTodo('${todo.id}')" >Delete</button><button>Toggle</button>`;
        tableRow.appendChild(td);
        break;
      }
    }

    tbody.appendChild(tableRow);
  }
}

loadTodosBtn.addEventListener("click", getTodos);

// httpRequest.onreadystatechange = function () {
//   console.log(`this.readyState = ${this.readyState}`);
// };

// function fetchJSONFile(path, callback) {
//   let httpRequest = new XMLHttpRequest();

//   httpRequest.onreadystatechange = function () {
//     if (this.readyState === 4) {
//       if (this.status === 200) {
//         const data = JSON.parse(this.responseText);

//         if (callback) callback(data);
//       }
//     }
//   };

//   httpRequest.open("GET", path);
//   httpRequest.send();
// }

// fetchJSONFile("./users.json", (data) => {
//   console.log("parsed = ", data);
// });

// const jsonString = `{ "age": 20, "job": "Teacher", "salary": 1000 }`;
// console.log(JSON.parse(jsonString));
// console.log(typeof JSON.parse(jsonString));

// const person = { bigAge: 20, job: "Teacher", salary: 1000 };
// console.log(person);
// console.log(JSON.stringify(person));
