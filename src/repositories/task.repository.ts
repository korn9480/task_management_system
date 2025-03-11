import { AppDataSource } from "../config/database";

import { Repository } from "typeorm";
import { Task } from "../entities/tesk";

export const TaskRepository: Repository<Task> = AppDataSource.getRepository(Task);
