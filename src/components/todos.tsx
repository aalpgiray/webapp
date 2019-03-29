import { Button, Input } from "antd";
import React, { useEffect, useState } from "react";
import { useActions, useStore } from "../store";

function Todos() {
  // Pull out state from our store
  const items = useStore((state) => state.todos.items);

  // Pull out actions from our store
  const add = useActions((actions) => actions.todos.add);

  // Track our form state
  const [newTodo, setNewTodo] = useState("");

  // Reset the form state every time the todo items changes
  useEffect(() => setNewTodo(""), [items]);

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {items.map((todo, idx) => (
          <li key={idx}>{todo}</li>
        ))}
      </ul>
      <Input
        type="text"
        onChange={(e) => setNewTodo(e.target.value)}
        value={newTodo}
      />
      <p />
      <Button type="danger" onClick={() => add(newTodo)}>
        Add
      </Button>
    </div>
  );
}

export default Todos;
