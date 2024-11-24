import express from "express";
import conectarAoBanco from "./src/config/dbconfig.js";

//Para Funcionamento via Termux
//const express = require("express");
//const conectarAoBanco = require("./src/config/dbconfig.js");

await conectarAoBanco(process.env.STRING_CONEXAO);

//console.log(process.env.STRING_CONEXAO)

const posts = [{
        id: 1,
        Descrição: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        Descrição: "Paisagem montanhosa",
        imagem: "https://picsum.photos/seed/picsum/200/300"
    },
    {
        id: 3,
        Descrição: "Cachorro brincando no parque",
        imagem: "https://source.unsplash.com/random/200x300/?dog,park"
    }
];

const app = express();
app.use(express.json());
app.listen(3000, () => {
    console.log("Servidor Escutando…");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPostPorId(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    });
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorId(req.params.id)
    res.status(200).json(posts[index]);
});