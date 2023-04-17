// src/infrastructure/taskRepositoryInMemory.ts

import { Task } from "../domain/task";
import { TaskRepository } from "../domain/taskRepository";

export class TaskRepositoryInMemory implements TaskRepository {
  private tasks: Task[] = [];

  async findAll(): Promise<Task[]> {
    return this.tasks;
  }

  async create(task: Task): Promise<Task> {
    const newTask = { ...task, id: String(this.tasks.length + 1) };
    this.tasks.push(newTask);
    return newTask;
  }

  async update(task: Task): Promise<Task> {
    const taskIndex = this.tasks.findIndex((t) => t.id === task.id);
    if (taskIndex < 0) {
      throw new Error("Task not found");
    }
    const updatedTask = { ...this.tasks[taskIndex], ...task };
    this.tasks.splice(taskIndex, 1, updatedTask);
    return updatedTask;
  }

  async delete(taskId: string): Promise<void> {
    const taskIndex = this.tasks.findIndex((t) => t.id === taskId);
    if (taskIndex < 0) {
      throw new Error("Task not found");
    }
    this.tasks.splice(taskIndex, 1);
  }
}
