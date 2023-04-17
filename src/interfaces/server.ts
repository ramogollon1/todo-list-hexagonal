// src/interfaces/server.ts

import express, { Request, Response } from "express";
import { json } from "body-parser";
import dotenv from "dotenv";
import { TodoUseCase } from "../application/todoUseCase";
import { TaskRepositoryInMemory } from "../infrastructure/taskRepositoryInMemory";

dotenv.config();

const app = express();

app.use(json());

const port = process.env.PORT || 3000;

const todoUseCase = new TodoUseCase(new TaskRepositoryInMemory());

app.get("/", async (req: Request, res: Response) => {
  const tasks = await todoUseCase.listTasks();
  res.send(tasks);
});

app.post("/", async (req: Request, res: Response) => {
  const task = await todoUseCase.createTask(req.body);
  res.send(task);
});

app.put("/:id", async (req: Request, res: Response) => {
  const task = await todoUseCase.updateTask({ ...req.body, id: req.params.id });
  res.send(task);
});

app.delete("/:id", async (req: Request, res: Response) => {
  await todoUseCase.deleteTask(req.params.id);
  res.send();
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
