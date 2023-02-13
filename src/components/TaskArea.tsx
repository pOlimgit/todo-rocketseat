import { FC } from "react";
import styles from "./TaskArea.module.css";

interface Tasks {
  tasksCount?: number;
  tasksCompleted?: number;
}

export const TaskArea: FC<Tasks> = ({ tasksCount, tasksCompleted }: Tasks) => {
  return (
    <>
      <div className={styles.tasksWrapp}>
        <div className={styles.reports}>
          <div>
            <h4>
              Tarefas Criadas <span></span>
              {tasksCount}
            </h4>
          </div>
          <div>
            <h4>
              Concluidas <span>{tasksCompleted}</span>{" "}
            </h4>
          </div>
        </div>
        <div className={styles.taskArea}>
          <h4>TaskÁrea</h4>
        </div>
      </div>
    </>
  );
};
