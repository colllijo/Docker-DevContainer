const express = require("express");
const app = express();

const todos = [
  { id: 1, text: "Learn about JS und Node" },
  { id: 2, text: "Create a Dockerfile" },
  { id: 3, text: "Build an image" },
];

app.get("/", (req, res) => {
  res.send("ToDo API with node");
});

app.get("/api/todos", (req, res) => {
  res.send(todos);
});

app.get("/api/todos/:id", (req, res) => {
  res.send(todos.find((todo) => todo.id == req.params.id));
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));
