const express = require("express");
const app = express();

app.use(express.json());

const todos = [];

app.get("/", (req, res) => {
  res.send("ToDo API with node");
});

app.get("/api/todos", (req, res) => {
  res.send(todos);
});

app.get("/api/todos/:id", (req, res) => {
  res.send(todos.find((todo) => todo.id == req.params.id));
});

app.post("/api/todos", (req, res) => {
  let newTodo = {
    id: todos.length ? todos[todos.length - 1].id + 1 : 1,
    text: req.body.text
  };
  
  todos.push(newTodo);

  res.send(newTodo);
});

app.delete("/api/todos/:id", (req, res) => {
  if(todos.find((todo) => todo.id == req.params.id)) {  
      todos.splice(todos.indexOf(todos.find((todo) => todo.id == req.params.id)), 1)
    
      res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));
