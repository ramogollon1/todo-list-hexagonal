// src/domain/taskRepository.ts

import { Task } from "./task";

export interface TaskRepository {
  findAll(): Promise<Task[]>;
  create(task: Task): Promise<Task>;
  update(task: Task): Promise<Task>;
  delete(taskId: string): Promise<void>;
}
