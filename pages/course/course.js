"use strict";
const getCoursesBtn = document.getElementById("get_courses_btn");
const tHead = document.querySelector("thead");
const tBody = document.querySelector("tbody");

const baseURL = "http://localhost:8000/api";

class API {
  getCourses() {
    return fetch(`${baseURL}/courses`);
  }
  deleteCourse(id) {
    console.log("id = ", id);
    return fetch(`${baseURL}/courses/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmIxNTBiOWRjOGRmZDkwYTgxNmZiNGMiLCJuYW1lIjoiQXJzbG9uYmVrWFgiLCJlbWFpbCI6ImFyczEyM0Bkb21haW4uY29tIiwiaWF0IjoxNjU1Nzg3NzEzfQ.CwJ7X5qUYfJMjcDJNLUiBupjHjttK4t9DnRAOax9Ul8",
      },
    });
  }
}

class UI {
  api = new API();
  addEventGetCourse(callback) {
    getCoursesBtn.addEventListener("click", callback);
  }

  renderCourses(items = []) {
    tBody.innerHTML = "";
    let result = "";
    items.forEach((item, idx) => {
      const tableRow = document.createElement("tr");

      for (let key in item) {
        const tableData = document.createElement("td");
        tableData.innerText = item[key];
        tableRow.appendChild(tableData);
      }

      const tableData = document.createElement("td");

      const editBtn = document.createElement("button");
      editBtn.innerText = "Edit";
      editBtn.addEventListener("click", () => this.handleEdit(item._id));

      const deleteBtn = document.createElement("button");
      deleteBtn.innerText = "Delete";
      deleteBtn.addEventListener("click", () => this.handleDelete(item._id));

      tableData.append(editBtn, deleteBtn);

      tableRow.appendChild(tableData);

      tBody.appendChild(tableRow);
    });
  }

  handleEdit(id) {
    console.log(`EDIT ${id}`);
  }

  handleDelete(id) {
    api
      .deleteCourse(id)
      .then((res) => res.json())
      .then((data) => {
        api
          .getCourses()
          .then((res) => res.json())
          .then((courses) => {
            ui.renderCourses(courses);
          });
      });
  }

  toggleZone(showZone, hideZone) {
    if (showZone) showZone.classList.remove("hide");
    if (hideZone) hideZone.classList.add("hide");
  }
}

const ui = new UI();
const api = new API();

function init() {
  ui.addEventGetCourse(() => {
    api
      .getCourses()
      .then((res) => res.json())
      .then((courses) => {
        ui.toggleZone(tHead);
        ui.renderCourses(courses);
      });
  });
}

init();
