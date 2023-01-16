//@ts-ignore
//@ts-nocheck

import AddTask from "./AddTask";
import TaskList from "./TaskList";
import tasksReducer from "./tasksReducer.js";

import { useReducer } from "react";

export default function TaskApp() {
  let nextId = 3;
  const initialTasks = [
    { id: 0, text: "Limpar a casa", done: true },
    { id: 1, text: "Lavar louça", done: false },
    { id: 2, text: "Estudar", done: false },
  ];

  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask(text: any) {
    dispatch({
      type: "ADD_TASK",
      id: nextId++,
      text,
    });
  }

  function handleChangeTask(task: any) {
    dispatch({
      type: "CHANGE_TASK",
      task,
    });
  }

  function handleDeleteTask(taskId: any) {
    dispatch({
      type: "DELETE_TASK",
      taskId,
    });
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}
