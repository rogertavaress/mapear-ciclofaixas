import express from "express";
import AvenidaController from "./app/controllers/AvenidaController";

const routes = new express.Router();

//Cadastrar Avenidas
routes.post("/avenidas", AvenidaController.store);

//Listar Avenidas
routes.get("/avenidas", AvenidaController.index);

//Alterar uma Avenida
routes.put("/alterar", AvenidaController.update);

//Remover uma Avenida
routes.delete("/remover", AvenidaController.delete);

export default routes;
