// src/application/todoUseCase.ts

import { Task } from "../domain/task";
import { TaskRepository } from "../domain/taskRepository";

export class TodoUseCase {
  constructor(private taskRepository: TaskRepository) {}

  async listTasks(): Promise<Task[]> {
    return this.taskRepository.findAll();
  }

  async createTask(task: Task): Promise<Task> {
    return this.taskRepository.create(task);
  }

  async updateTask(task: Task): Promise<Task> {
    return this.taskRepository.update(task);
  }

  async deleteTask(taskId: string): Promise<void> {
    return this.taskRepository.delete(taskId);
  }
}
