import "reflect-metadata"
import { DataSource } from "typeorm"
import { IdCard } from "./entity/IdCard"

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "chenwi5132",
  database: "237_lostandfound_database",
  synchronize: true,
  logging: false,
  entities: [IdCard],
  migrations: [],
  subscribers: [],
});
