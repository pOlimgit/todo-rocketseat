import { Circle, Trash } from "phosphor-react";
import styles from "./TaskItem.module.css";

interface ITaskItem {
  task: string;
  onDeleteItem: (content: string) => void;
}

export const TaskItem = ({ task, onDeleteItem }: ITaskItem) => {

    const handleDeleteItem = () => {
        onDeleteItem(task)
    }

  return (
    <div className={styles.taskItem}>
      <Circle size={"1.09rem"} />
      <strong>{task}</strong>
      <span onClick={handleDeleteItem}>
        <Trash size={"1.09rem"} />
      </span>
    </div>
  );
};
