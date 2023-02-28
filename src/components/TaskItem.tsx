import { CheckCircle, Circle, Trash } from "phosphor-react";
import styles from "./TaskItem.module.css";

interface ITaskItem {
  taskId: string;
  task: string;
  isComplete: boolean;
  onToggleComplete: (idToBeChecked: string) => void;
  onDeleteItem: (id: string) => void;
}

export const TaskItem = ({
  task,
  taskId,
  isComplete,
  onDeleteItem,
  onToggleComplete,
}: ITaskItem) => {
  const handleToggleToVerify = () => {
    onToggleComplete(taskId);
  };

  const handleDeleteItem = () => {
    onDeleteItem(taskId);
  };

  console.log(isComplete);

  return (
    <div className={isComplete ? styles.taskItemCompleted : styles.taskItem}>
      <span className={styles.markTask} onClick={handleToggleToVerify}>
        {isComplete ? (
          <CheckCircle size={"1.20rem"} />
        ) : (
          <Circle size={"1.20rem"} />
        )}
      </span>
      <strong>{task}</strong>
      <span className={styles.trashIcon} onClick={handleDeleteItem}>
        <Trash size={"1.20rem"} />
      </span>
    </div>
  );
};
