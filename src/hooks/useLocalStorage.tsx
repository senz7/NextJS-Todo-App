import { useEffect, useState } from "react";

function getStorageValue(todo: string, defaultValue: []) {
  if (typeof localStorage !== "undefined") {
    const savedTodos = localStorage.getItem(todo);
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return defaultValue;
    }
  } else {
    console.log("localStorage is not available.");
  }
}

export const useLocalStorage = (todo: string, defaultValue: []) => {
  const [todos, setTodos] = useState(() => {
    return getStorageValue(todo, defaultValue);
  });

  if (typeof window !== "undefined") {
    useEffect(() => {
      localStorage.setItem(todo, JSON.stringify(todos));
    }, [todos]);
  }

  return [todos, setTodos];
};
