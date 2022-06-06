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
