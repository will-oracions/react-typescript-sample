import { FC, useState, ChangeEvent } from "react";
import { ITask } from "./interfaces/Task";
import TodoTask from "./components/TodoTask";

import "./App.css";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = {
      id: todoList.length + 1,
      taskname: task,
      deadline: deadline,
    };
    setTodoList([...todoList, newTask]);
    console.log(todoList);
    setTask("");
    setDeadline(0);
  };

  const completeTask = (taskToDelete: ITask): void => {
    setTodoList(
      todoList.filter((task: ITask): boolean => {
        return task.id !== taskToDelete.id;
      })
    );
  };

  return (
    <div className="App">
      <div className="header">
        <div className="input-container">
          <input
            name="task"
            type="text"
            placeholder="Task.."
            onChange={handleChange}
            value={task}
          />
          <input
            name="deadline"
            type="number"
            placeholder="Deadline (in days).."
            onChange={handleChange}
            value={deadline}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todolist">
        {todoList.map((task: ITask, index: number) => {
          return (
            <TodoTask key={index} task={task} completeTask={completeTask} />
          );
        })}
      </div>
    </div>
  );
};

export default App;
