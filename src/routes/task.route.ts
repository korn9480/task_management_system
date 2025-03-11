import { Request, Router } from "express";
import { TaskService } from "../services/task.service";
import { responseSucceed } from "../utils/response";
import { Task } from "../entities/tesk";
import { TaskModelRequest } from "../model/request/task.model-request";
import { StatusTaskEnum } from "../entities/enum/status.enum";

const taskRouter = Router();

taskRouter.get("/", async (req:Request, res) => {
  try {
    const query = req.query;
    const tasks = await TaskService.getAllTasks(query);
    const jsonRes = responseSucceed({
      message: "get task all succeed",
      data: tasks,
      statusCode: 200
    })
    res.status(200).json(jsonRes);
  } catch (error) {
    res.json(error);
  }
});

taskRouter.post("/", async (req:Request, res) => {
  try {
    const dataReq:TaskModelRequest  = req.body
    const task = await TaskService.createTask(dataReq);
    const jsonRes = responseSucceed({
      message: "create task succeed",
      data: task,
      statusCode: 200
    })
    res.status(201).json(jsonRes);
    res.status(200).json()
  } catch (error) {
    res.json(error);
  }
});

taskRouter.put("/:id", async (req:Request, res:any) => {
  try {
    const { id } = req.params;
    const dataReq:TaskModelRequest  = req.body
  
    const task = await TaskService.updateTask(Number(id), dataReq);
    if (!task) {
      const jsonRes = responseSucceed({
        message: "task not found",
        statusCode: 400,
      })
      console.log("find not : ",jsonRes)
      return res.status(404).json(jsonRes)
    }
  
    const jsonRes = responseSucceed({
      message: "update task succeed",
      data: task,
      statusCode: 200
    })
    res.status(200).json(jsonRes);
  } catch (error) {
    res.json(error);
  }
});

taskRouter.delete("/:id", async (req:Request, res:any) => {
  try {
    const { id } = req.params;
  
    const success = await TaskService.deleteTask(Number(id));
    if (!success) {
      const jsonRes = responseSucceed({
        message: "task not found",
        statusCode: 404
      })
      return res.status(404).json(jsonRes)
    } 
  
    const jsonRes = responseSucceed({
      message: "task deleted succeed",
      statusCode: 200
    })
    res.status(200).json(jsonRes)
  } catch (error) {
    res.json(error);
  }
});

export default taskRouter;
