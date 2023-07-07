/*O primeiro passo será sempre criar esse arquivo junto com o banco,
pois esse arquivo fará a conexão com o banco de dados para que o backend
possa trabalhar corretamente*/
import "dotenv/config";
import "reflect-metadata"; 
import { DataSource } from "typeorm";

const port = process.env.DB_PORT as number | undefined; //definindo a porta como um número ou indefinido (isso se deve a tipagem do ts)

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: port,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});