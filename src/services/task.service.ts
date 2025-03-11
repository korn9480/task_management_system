import { StatusTaskEnum } from "../entities/enum/status.enum";
import { Task } from "../entities/tesk";
import { TaskModelRequest } from "../model/request/task.model-request";
import { TaskRepository } from "../repositories/task.repository";

export class TaskService {
  static async getAllTasks(query:any): Promise<Task[]> {
    const {status} = query 
    console.log("status",status)

    return await TaskRepository.find({
      where: {
        status: status
      },
    });
  }

  static async createTask(data: TaskModelRequest): Promise<Task> {
    const newTask = TaskRepository.create(data);
    return await TaskRepository.save(newTask);
  }

  static async updateTask(id:number,data: TaskModelRequest): Promise<Task | null> {
    const task = await TaskRepository.findOneBy({ id });
    if (!task) return null;
    data.id = id
    const newTask = TaskRepository.create(data)
    return await TaskRepository.save(newTask);
  }

  static async deleteTask(id: number): Promise<boolean> {
    const result = await TaskRepository.delete(id);
    return result.affected ? true : false;
  }
}
