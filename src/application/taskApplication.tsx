import { TaskRepository } from "@domain/taskRepository";
import { taskAdapter } from "@adapters/taskAdapter";

export function taskApplication(taskRepository: TaskRepository) {
  const { deleteTask } = taskAdapter(taskRepository);

  async function handleTaskDeleted(taskId: string) {
    await deleteTask(taskId);
  }

  return {
    handleTaskDeleted,
  };
}
