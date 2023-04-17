import React from "react";
import TodoList from "./presentation/TodoList";
import { Task } from "./domain/task";
import { TaskRepositoryInMemory } from "./infrastructure/taskRepositoryInMemory";
import "./App.css";

const App: React.FC = () => {
  const [tasks, setTasks] = React.useState<Task[]>([]);
  const taskRepository = new TaskRepositoryInMemory();

  const handleTaskAdded = (task: Task) => {
    taskRepository.create(task).then(() => {
      setTasks([...tasks, task]);
    });
  };

  function handleTaskDeleted(taskId: string) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }

  return (
    <TodoList
      tasks={tasks}
      onTaskAdded={handleTaskAdded}
      onTaskDeleted={handleTaskDeleted}
    />
  );
};

export default App;
