import knex, { Knex } from "knex"
import dotenv from "dotenv"

dotenv.config()


export abstract class BaseDataBase {

 
    private static connetion: Knex | null = null;

    protected getConnetion() {
        if (!BaseDataBase.connetion) {
            BaseDataBase.connetion = knex({
                client: "mysql",
                connection: {
                    host: process.env.DB_HOST,
                    user: process.env.DB_USER,
                    database: process.env.DB_SCHEMA,
                    password: process.env.DB_PASSWORD,
                    port: 3306
                }
            })
        }

        return BaseDataBase.connetion
    }
}