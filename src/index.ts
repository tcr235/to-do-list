import express from "express";
import { AppDataSource } from "./data-source";

AppDataSource.initialize().then(() => { /*Inicializa a conexão com o banco*/
    const app = express();
    
    app.use(express.json());
    
    app.get("/", (request, response) => {
        return response.json("tudo funcionando");
    });

    return app.listen(process.env.PORT);
}); 