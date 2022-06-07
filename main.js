"use strict";
const thead = document.querySelector("thead");
const tbody = document.querySelector("tbody");
const loadTodosBtn = document.getElementById("load-todos-btn");

const addTodoBtn = document.getElementById("add-todo-btn");
const todoInput = document.getElementById("todo-input");

const url = "http://localhost:3000/todos";

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

function createTodo(todo) {
  let httpRequest = new XMLHttpRequest();

  httpRequest.addEventListener("load", function () {
    console.log(this.responseText);
    const todos = JSON.parse(this.responseText); // parse JSON
    renderTodos(todos);
  });

  httpRequest.open("POST", url);
  httpRequest.setRequestHeader("Content-Type", "application/json");
  httpRequest.send('{ "age": 20, "phone": "+998998961348" }');
}

function deleteTodo(todoID) {
  let httpRequest = new XMLHttpRequest();

  httpRequest.addEventListener("load", function () {
    console.log("Loaded");

    const todos = JSON.parse(this.responseText); // parse JSON
    renderTodos(todos);
  });

  httpRequest.send();
  httpRequest.open("DELETE", url + `/${todoID}`);
}

function renderTodos(todos = []) {
  tbody.innerHTML = "";
  let counter = 1;

  for (let todo of todos) {
    const tableRow = document.createElement("tr");

    tableRow.appendChild(createTD(todo.id));
    tableRow.appendChild(createTD(todo.todo));
    tableRow.appendChild(createTD(todo.completed));
    tableRow.appendChild(
      createTD(
        `<button>Edit</button><button onclick="deleteTodo('${todo.id}')" >Delete</button><button>Toggle</button>`,
        true
      )
    );

    tbody.appendChild(tableRow);
  }
}

function createTD(text, withInnerHTML = false) {
  const td = document.createElement("td");
  if (withInnerHTML) td.innerHTML = text;
  else td.innerText = text;
  return td;
}

loadTodosBtn.addEventListener("click", getTodos);

addTodoBtn.addEventListener("click", () => {
  const todo = todoInput.value.trim();

  if (!todo) return alert("Todo ni kiriting");
  createTodo(todo);
});
