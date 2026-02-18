import "reflect-metadata";
import { DataSource } from "typeorm";
import { Testimonial } from "./entities/Testimonial";

const AppDataSource = new DataSource({
  type: "mysql",
<<<<<<< HEAD
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 3307,
  // Support both env naming conventions (README vs codebase)
  username: process.env.DB_USER || process.env.DB_USERNAME,
  password: process.env.DB_PASS || process.env.DB_PASSWORD,
  database: process.env.DB_NAME || process.env.DB_DATABASE,
  synchronize: false, // Set to false in production
=======
  host: process.env.DB_HOST || "localhost",
  port: 3307,
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "",
  database: process.env.DB_NAME || "landscaper_db",
  synchronize: process.env.NODE_ENV !== "production", // Only in development
>>>>>>> 058d73a796481a7533eeced7aa3c9a4d72162dae
  logging: process.env.NODE_ENV === "development",
  entities: [Testimonial],
  migrations: [],
  subscribers: [],
});

export default AppDataSource;
