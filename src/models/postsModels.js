import conectarAoBanco from "../config/dbConfig.js";
import fs from "fs-extra";

//para Termux
//const conectarAoBanco = require("../config/dbConfig.js");

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getTodosPosts(){
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");
    return colecao.find().toArray();
}