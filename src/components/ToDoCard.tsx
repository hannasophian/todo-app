import { ToDoItemWithID } from "../utils/ToDoItemWithID";

export default function ToDoCard(props: ToDoItemWithID): JSX.Element {
  return (
    <div className="toDoCard">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <small>{props.dueDate}</small>
      <input name="isCompleted" type="checkbox" checked={props.completed} />
    </div>
  );
}
