import { Task } from "@domain/task";

interface IlistItem {
  task: Task;
  onTaskDeleted: (id: string) => void;
}

function ListItem({ task, onTaskDeleted }: IlistItem) {
  return (
    <li>
      {task.name}
      <button onClick={() => onTaskDeleted(task.id)}>Eliminar</button>
    </li>
  );
}

export default ListItem;
