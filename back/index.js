const express = require("express"); // es5
const cors = require("cors"); // import cors from "cors"
const app = express();
app.use(cors());

let todos = [
  {
    id: "123",
    todo: "Uxlamayman darsda",
    completed: true,
  },
  {
    id: "124",
    todo: "Uxlayman uyda",
    completed: false,
  },
  {
    id: "125",
    todo: "Vazifani qilaman",
    completed: true,
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

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
