import express from "express";

const posts = [
    {
        Descrição: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        Descrição: "Paisagem montanhosa",
        imagem: "https://picsum.photos/seed/picsum/200/300"
    },
    {
        Descrição: "Cachorro brincando no parque",
        imagem: "https://source.unsplash.com/random/200x300/?dog,park"
    },
    {
        Descrição: "Pratos deliciosos de um restaurante",
        imagem: "https://unsplash.com/photos/food"
    },
    {
        Descrição: "Uma cidade vibrante à noite",
        imagem: "https://source.unsplash.com/random/200x300/?city,night"
    },
    {
        Descrição: "Uma obra de arte abstrata",
        imagem: "https://picsum.photos/seed/art/200/300"
    }
];

const app = express();
app.use(express.json());
app.listen(3000, () => {
console.log("Servidor Escutando…");
});

app.get("/api", (req, res) => {
res.status(200).send("A Torre Eiffel Ilumina à noite, com milhares de luzes cintilando, criando um espetáculo mágico em Paris.");
});

app.get("/posts", (req, res) => {
res.status(200).json(posts);
});

