import taskboard from "./../assets/taskboard.png";
import styles from "./EmptyTask.module.css";

export function EmptyTask() {
  return (
    <div className={styles.tasksWrapper}>
      <div>
        <img src={taskboard} alt="taskboard-img" />
      </div>
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  );
}
