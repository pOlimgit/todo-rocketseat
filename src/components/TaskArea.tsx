import { FC, ReactNode } from "react";
import { EmptyTask } from "./EmptyTask";
import styles from "./TaskArea.module.css";
import { TaskItem } from "./TaskItem";
import uuid from "react-uuid";

interface Tasks {
  tasks: string[];
  setTasks: (tasks: string[]) => void;
}

export const TaskArea: FC<Tasks> = ({ tasks, setTasks }: Tasks) => {
  const deleteTask = (taskToDelete: string) => {
    const tasksWithoutDeletedOne = tasks.filter((tasks) => {
      return tasks !== taskToDelete;
    });
    setTasks(tasksWithoutDeletedOne);
  };

  return (
    <>
      <div className={styles.tasksWrapp}>
        <div className={styles.info}>
          <div className={styles.createdTasks}>
            <h4>
              Tarefas Criadas&nbsp;
              <span className={styles.hug}>{tasks.length}</span>
            </h4>
          </div>
          <div className={styles.completedTasks}>
            <h4>
              Concluidas&nbsp;<span className={styles.hug}>{0}</span>
            </h4>
          </div>
        </div>
        <div className={styles.taskArea}>
          {tasks.length === 0 ? (
            <EmptyTask />
          ) : (
            tasks.map((task) => (
              <TaskItem key={uuid()} task={task} onDeleteItem={deleteTask} />
            ))
          )}
        </div>
      </div>
    </>
  );
};
