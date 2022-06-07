const express = require("express"); // es5
const cors = require("cors"); // import cors from "cors"
const app = express();
app.use(cors());
app.use(express.json());

let todos = [
  {
    id: "123",
    completed: true,
    todo: "Uxlamayman darsda",
  },
  {
    id: "124",
    completed: false,
    todo: "Uxlayman uyda",
  },
  {
    id: "125",
    completed: true,
    todo: "Vazifani qilaman",
  },
];

// http://localhost:3000/todos -> GET
app.get("/todos", (req, res) => {
  res.send(todos);
});

// http://localhost:3000/todos/todoID -> DELETE
app.delete("/todos/:id", (req, res) => {
  const id = req.params.id;
  todos = todos.filter((todo) => todo.id !== id);
  res.send(todos);
});

app.post("/todos", (req, res) => {
  console.log("todo = ", req.body);
  res.send(todos);
});
const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
