import express from "express";
import fs from "fs-extra";
import { listarPosts } from "../controllers/postsController.js";

//para Termux
//const { listarPosts } = require("../controllers/postsController.js");
//const express = require("express");

const routes = (app) => {
    app.use(express.json());
    
    app.get("/posts", listarPosts);
}

export default routes;