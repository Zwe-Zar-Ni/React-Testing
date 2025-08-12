import { useEffect, useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState<{ title: string; completed: boolean }[]>(
    []
  );
  const [photos, setPhotos] = useState<{ title: string }[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setTodos(data.slice(0, 5));
      });
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data.slice(0, 5));
      });
  }, []);

  return (
    <div>
      <h1>Todos</h1>
      <ul data-testid="todos-list">
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.title} - {todo.completed ? "Completed" : "Pending"}
          </li>
        ))}
      </ul>
      <h1>Photos</h1>
      <ul data-testid="photos-list">
        {photos.map((photo, index) => (
          <li key={index}>{photo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
