"use client";

import { FC, useState } from "react";
import { Button } from "../button";
import { TextInput } from "../input";
import { useLocalStorage } from "@/hooks/useLocalStorage";

interface todo {
  id: number;
  text: string;
  completed: boolean;
}

export const TodosPageContent: FC = () => {
  const [todos, setTodos] = useLocalStorage("todos", []);

  const [inputValue, setInputValue] = useState("");

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo: any) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const handleChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    const newTodo: todo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const removeTodo = (id: number) => {
    const removeItem = todos.filter((todo: any) => {
      return todo.id !== id;
    });
    setTodos(removeItem);
  };

  return (
    <div className="flex-col flex text-center items-center pt-36">
      <label className="text-white text-3xl font-bold">Write your Todo!</label>
      <div className="items-center">
        <TextInput
          className="ml-20 mt-6 w-[500px] outline-none border-slate-600 border-4 rounded-md text-white bg-slate-900"
          value={inputValue || ""}
          onChange={handleChange}
        />
        <Button
          className="ml-3 text-white bg-emerald-700 p-1 mt-2 rounded-md"
          onClick={handleClick}
        >
          Add Todo!
        </Button>
      </div>
      {todos &&
        todos.map((todo: any) => (
          <div key={todo.id} className="flex-row flex mt-5">
            <div>
              <li
                className="text-white text-center mt-3"
                key={todo.id}
                onClick={() => handleToggle(todo.id)}
              >
                {todo.text}
              </li>
            </div>
            <div>
              <Button
                className="ml-3 text-white bg-red-600 p-1 mt-2 rounded-md"
                onClick={() => removeTodo(todo.id)}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
    </div>
  );
};
