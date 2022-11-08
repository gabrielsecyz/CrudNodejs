const express = require("express");
const server = express();

server.use(express.json());

const home = [];

server.get("/home", (req, res) => {
    return res.json(home);
});

server.post("/home/:index", (req, res) => {
    const { name } = req.body;

    home.push(name);

    return res.json(home);
});

server.put("/home/:index", (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    home[index] = name;

    return res.json(home);
});

server.delete("/home/:index", (req, res) => {
    const { index } = req.params;

    home.splice(index, 1);

    return res.send();
});

server.listen(3000);
