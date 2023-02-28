import { PlusCircle } from "phosphor-react";
import { useState, SetStateAction, FormEvent } from "react";
import { TaskArea } from "./TaskArea";
import uuid from "react-uuid";
import styles from "./TaskStage.module.css";

export type Task = {
  id: string;
  content: string;
  isCompleted: boolean;
};

export function TaskStage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskValue, setNewTaskValue] = useState("");

  const handleNewTask = (event: FormEvent) => {
    event.preventDefault();
    const newTask: Task = {
      id: uuid(),
      content: newTaskValue,
      isCompleted: false,
    };
    const twins = tasks.find((content) => content.content === newTaskValue);
    twins?.content === newTaskValue
      ? alert("Esta tarefa já está na sua lista")
      : setTasks([newTask, ...tasks]);
    setNewTaskValue("");
  };

  const handleNewTaskTextChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setNewTaskValue(event.target.value);
  };

  const deleteTask = (taskToDelete: string) => {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task.id !== taskToDelete;
    });
    setTasks(tasksWithoutDeletedOne);
  };

  const toggleUpdate = (TaskIdVerify: string) => {
    const tasksCopy = tasks.map((task) => ({ ...task }));
    const taskToBeUpdated = tasksCopy.find((task) => task.id === TaskIdVerify);

    if (taskToBeUpdated) {
      taskToBeUpdated.isCompleted = !taskToBeUpdated.isCompleted;
      setTasks(tasksCopy);
    }
  };

  return (
    <>
      <form onSubmit={handleNewTask} className={styles.inputWrapper}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={newTaskValue}
          onChange={handleNewTaskTextChange}
        />
        <button type="submit">
          Criar &nbsp;
          <PlusCircle size="1rem" />
        </button>
      </form>
      <TaskArea
        content={tasks}
        toggleUpdate={toggleUpdate}
        deleteTask={deleteTask}
      />
    </>
  );
}
