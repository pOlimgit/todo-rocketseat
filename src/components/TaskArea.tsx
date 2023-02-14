import { FC } from "react";
import { EmptyTask } from "./EmptyTask";
import styles from "./TaskArea.module.css";

interface Tasks {
  tasksCount?: number;
  tasksCompleted?: number;
}

export const TaskArea: FC<Tasks> = ({ tasksCount, tasksCompleted }: Tasks) => {
  return (
    <>
      <div className={styles.tasksWrapp}>
        <div className={styles.info}>
          <div className={styles.createdTasks}>
            <h4>
              Tarefas Criadas&nbsp;<span className={styles.hug}>{0}</span>
            </h4>
          </div>
          <div className={styles.completedTasks}>
            <h4>
              Concluidas&nbsp;<span className={styles.hug}>{0}</span>
            </h4>
          </div>
        </div>
        <div className={styles.taskArea}>
          <EmptyTask />
        </div>
      </div>
    </>
  );
};
