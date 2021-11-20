import { toDoItemWithID } from "./toDoItemWithID"

export default function toDoCard(props: toDoItemWithID) : JSX.Element {
    return (
        <div className="toDoCard">
             <h3>{props.title}</h3>
             <p>{props.description}</p>
             <small>{props.dueDate}</small>
             <input
                name="isCompleter"
                type="checkbox"
                checked={props.completed} />
        </div>
    )
}