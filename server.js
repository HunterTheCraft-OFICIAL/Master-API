import express from "express";

const app = express();
app.listen(3000, () => {
console.log("Servidor Escutando…");
});

app.get("/api", (req, res) => {
res.status(200).send("A Torre Eiffel Ilumina à noite, com milhares de luzes cintilando, criando um espetáculo mágico em Paris.");
});
