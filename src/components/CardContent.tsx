import fetch from "node-fetch";
import { useState } from "react";
import { ToDoItemWithID } from "../utils/ToDoItemWithID";
import ToDoCard from "./ToDoCard";

// async function getToDoData(): Promise<ToDoItemWithID[]> {
//     const response = await fetch("https://todo-app-server-hannasophian.herokuapp.com/todos/");
//     const jsonBody: ToDoItemWithID[] = await response.json();
//     // console.log(jsonBody[0].setup, jsonBody[0].punchline);
//     data = await jsonBody;
//     return jsonBody;
// }

export default function CardContent(): JSX.Element {
  const [toDos, setToDos] = useState<ToDoItemWithID[]>([]);
  // let initialToDos: ToDoItemWithID[];
  fetch("https://todo-app-server-hannasophian.herokuapp.com/todos/")
    .then((res) => {
      if (res.status >= 400) {
        throw new Error("Server responds with error!");
      }
      return res.json();
    })
    .then((todos) => {
      setToDos(todos);
    })
    .catch((error) => console.log(error));
  return (
    <>
      {toDos.map((toDo) => (
        <ToDoCard
          key={toDo.id}
          id={toDo.id}
          title={toDo.title}
          description={toDo.description}
          creationDate={toDo.creationDate}
          dueDate={toDo.dueDate}
          completed={toDo.completed}
        />
      ))}
    </>
  );
}
