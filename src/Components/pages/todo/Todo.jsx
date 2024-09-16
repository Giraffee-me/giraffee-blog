import { LiaCalendarCheck } from "react-icons/lia";
import TodoItems from "./TodoItems";
import { useEffect, useRef, useState } from "react";
import Stars from "./Stars";

function Todo() {
  const [todoList, setTodoList] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );

  const inputRef = useRef();

  const enterKey = (event) => {
    if (event.key === "Enter") {
      add();
      return;
    } else return;
  };

  const add = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") return null;

    const newTask = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };

    setTodoList((prev) => [...prev, newTask]);

    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodoList((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  };

  const toggle = (id) => {
    setTodoList((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] mt-20 mx-auto mb-9">
      {/******** Stars ********/}

      <Stars todoList={todoList} />

      {/******** Title ********/}

      <div className="flex items-center gap-3">
        <LiaCalendarCheck className="text-6xl text-center" />
        <h1 className="font-bold text-4xl">المهام</h1>
      </div>

      {/******** Input box ********/}

      <div className="mt-6 flex items-center bg-gray-200 h-9">
        <input
          ref={inputRef}
          onKeyDown={enterKey}
          type="text"
          placeholder="أضف مهمة"
          className="bg-transparent font-semibold px-3 w-full border-0 outline-none"
        />
        <button
          onClick={add}
          className="bg-primary px-3.5 font-bold border-2  hover:border-dashed hover:border-fontColor h-full mr-auto"
        >
          +
        </button>
      </div>

      {/******** To-Do List ********/}

      <div>
        {todoList.map((task, index) => {
          return (
            <TodoItems
              key={index}
              text={task.text}
              id={task.id}
              isComplete={task.isComplete}
              deleteTodo={deleteTodo}
              toggle={toggle}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Todo;
