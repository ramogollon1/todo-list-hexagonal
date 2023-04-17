import React from "react";
import { Task } from "../domain/task";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

type Props = {
  tasks: Task[];
  onTaskAdded: (task: Task) => void;
};

const TodoList: React.FC<Props> = ({ tasks, onTaskAdded }) => {
  const [newTaskName, setNewTaskName] = React.useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (newTaskName.trim()) {
      const newTask: Task = {
        id: Date.now(),
        name: newTaskName,
        completed: false,
      };
      onTaskAdded(newTask);
      setNewTaskName("");
    }
  };

  function handleTaskDeleted(taskId: string) {
    setNewTaskName((prevTasks) =>
      prevTasks.filter((task) => task.id !== taskId)
    );
  }

  return (
    <Container>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTaskName}
          onChange={(event) => setNewTaskName(event.target.value)}
        />
        <button type="submit">Add task</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input type="checkbox" checked={task.completed} />
            {task.name}
            <button onClick={() => onTaskDeleted(task.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default TodoList;
