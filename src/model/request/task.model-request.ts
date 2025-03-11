import { StatusTaskEnum } from "../../entities/enum/status.enum";

export class TaskModelRequest {
    id: number;
    title: string;
    description: string;
    status : StatusTaskEnum
}