require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", async(_req, res) => {
    return res.json("Api está ok")
});

app.listen(3000, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
});