import { EmptyTask } from "./EmptyTask";
import styles from "./TaskArea.module.css";
import { TaskItem } from "./TaskItem";
import { Task } from "./TaskStage";

type Props = {
  content: Task[];
  deleteTask: (id: string) => void;
  toggleUpdate: (idToBeChecked: string) => void;
};

export const TaskArea = ({ content, deleteTask, toggleUpdate }: Props) => {
  return (
    <>
      <div className={styles.tasksWrapp}>
        <div className={styles.info}>
          <div className={styles.createdTasks}>
            <h4>
              Tarefas Criadas&nbsp;
              <span className={styles.hug}>{content.length}</span>
            </h4>
          </div>
          <div className={styles.completedTasks}>
            <h4>
              Concluidas&nbsp;
              <span className={styles.hug}>
                {`${
                  content.filter((count) => count.isCompleted === true).length
                } de ${content.length}`}
              </span>
            </h4>
          </div>
        </div>
        <div className={styles.taskArea}>
          {content.length === 0 ? (
            <EmptyTask />
          ) : (
            content.map((task) => (
              <TaskItem
                key={task.id}
                taskId={task.id}
                task={task.content}
                isComplete={task.isCompleted}
                onDeleteItem={deleteTask}
                onToggleComplete={toggleUpdate}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};
