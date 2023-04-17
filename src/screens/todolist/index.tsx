import React from "react";
import { Task } from "@domain/task";
import styled from "styled-components";
import { v4 as v4uuid } from "uuid";
import ListItem from "@screens/todolist/components/ListItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

type TodoListProps = {
  tasks: Task[];
  onTaskAdded: (task: Task) => void;
  onTaskDeleted: (taskId: string) => void;
};

const TodoList: React.FC<TodoListProps> = ({
  tasks,
  onTaskAdded,
  onTaskDeleted,
}) => {
  const [newTaskName, setNewTaskName] = React.useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (newTaskName.trim()) {
      const newTask: Task = {
        id: v4uuid(),
        name: newTaskName,
        completed: false,
      };
      onTaskAdded(newTask);
      setNewTaskName("");
    }
  };

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
          <ListItem key={task.id} task={task} onTaskDeleted={onTaskDeleted} />
        ))}
      </ul>
    </Container>
  );
};

export default TodoList;
