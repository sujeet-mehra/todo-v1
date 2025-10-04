app.get("/", (req, res) => {
  createUserTable();
  const data = { email: "demo@gmail.com", password:"1234" };
  todoRepository.create(data).then((id) => {
    res.json({ id, ...data });
  });
});

app.get("/find", (req, res) => {
  const id = 1;
  const data = { title: "Update to Todos API" };
  todoRepository.findAll().then((todos) => {
    res.json(todos);
  });
});

app.get("/update", (req, res) => {
  const id = 1;
  const data = { email: "demo@" };
  todoRepository.updateById(id, data).then((result) => {
    res.json(result);
  });
});