import "reflect-metadata";
import { DataSource } from "typeorm";
import { Testimonial } from "./entities/Testimonial";

const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST || "localhost",
  port: 3307,
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "",
  database: process.env.DB_NAME || "landscaper_db",
  synchronize: process.env.NODE_ENV !== "production", // Only in development
  logging: process.env.NODE_ENV === "development",
  entities: [Testimonial],
  migrations: [],
  subscribers: [],
});

export default AppDataSource;
