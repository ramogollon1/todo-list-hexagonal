import { TaskRepository } from "@domain/taskRepository";

export function taskAdapter(taskRepository: TaskRepository) {
  return {
    deleteTask: async (taskId: string) => {
      await taskRepository.delete(taskId);
    },
  };
}
