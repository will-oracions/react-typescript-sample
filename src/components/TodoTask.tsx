import { ITask } from "../interfaces/Task";

interface Props {
  task: ITask;
  completeTask(task: ITask): void;
}

const TodoTask: React.FC<Props> = ({ task, completeTask }: Props) => {
  const complete = (): void => {
    completeTask(task);
  };

  return (
    <div className="task">
      <div className="content">
        <span>{task.taskname}</span>
        <span>{task.deadline}</span>
      </div>
      <button onClick={complete}>X</button>
    </div>
  );
};

export default TodoTask;
