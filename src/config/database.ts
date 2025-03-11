import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  
  // host: "localhost",
  // port: 3306,
  // username: "root",
  // password: "1234",
  // database: "task_management_system",
  
  entities: ["src/entities/*.ts"], // ไฟล์ entities (ตาราง)
  synchronize: true, // ตั้งค่า true เพื่อให้ TypeORM สร้างตารางอัตโนมัติ
  logging: false,
});
