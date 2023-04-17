import React from "react";
import TodoList from "@screens/todolist";
import { Task } from "@domain/task";
import "./App.css";

const App: React.FC = () => {
  const [tasks, setTasks] = React.useState<Task[]>([]);

  const handleTaskAdded = (task: Task) => {
    setTasks([...tasks, task]);
  };

  async function handleTaskDeleted(taskId: string) {
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
