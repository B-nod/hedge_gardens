import "reflect-metadata";
import { DataSource } from "typeorm";
import { Testimonial } from "./entities/Testimonial";

const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: true, // Set to false in production
  logging: process.env.NODE_ENV === "development",
  entities: [Testimonial],
  migrations: [],
  subscribers: [],
});

export default AppDataSource;
