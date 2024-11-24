import express from "express";

const posts = [{
    Descrição: "Uma foto teste",
    imagem: "https://placecats.com/millie/300/150"
}];

const app = express();
app.listen(3000, () => {
console.log("Servidor Escutando…");
});

app.get("/api", (req, res) => {
res.status(200).send("A Torre Eiffel Ilumina à noite, com milhares de luzes cintilando, criando um espetáculo mágico em Paris.");
});