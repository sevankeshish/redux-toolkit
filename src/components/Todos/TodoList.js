import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  // const todos = [
  //   { id: 1, title: "todo1", completed: false },
  //   { id: 2, title: "todo2", completed: false },
  //   { id: 3, title: "todo3", completed: true },
  //   { id: 4, title: "todo4", completed: false },
  //   { id: 5, title: "todo5", completed: false },
  // ];
  const { todos } = useSelector((state) => state.todos);

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem id={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export default TodoList;
