import { PlusCircle } from "phosphor-react";
import {
  FormEventHandler,
  ChangeEventHandler,
  useState,
  SetStateAction,
  FormEvent,
} from "react";
import styles from "./TaskStage.module.css";
import { TaskArea } from "./TaskArea";

interface InPut {
  handleNewTask: FormEventHandler<HTMLFormElement> | undefined;
  taskText: string | number | readonly string[] | undefined;
  handleNewTaskTextChange: ChangeEventHandler<HTMLInputElement> | undefined;
}

export function TaskStage() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskText, setTaskText] = useState("");

  const handleNewTask = (event: FormEvent) => {
    event.preventDefault();
    setTasks([taskText, ...tasks]);
    setTaskText("");
  };

  const handleNewTaskTextChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setTaskText(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleNewTask} className={styles.inputWrapper}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={taskText}
          onChange={handleNewTaskTextChange}
        />
        <button type="submit">
          Criar &nbsp;
          <PlusCircle size="1rem" />
        </button>
      </form>
      <TaskArea tasks={tasks} setTasks={setTasks} />
    </>
  );
}
