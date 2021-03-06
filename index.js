const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send(`biem venido, ${req.query.name}`);
});

app.get("/login/:name", (req, res) => {
  return res.json({
    message: `Bem-vindo, ${req.params.name}`
  });
});

app.listen(3333);
