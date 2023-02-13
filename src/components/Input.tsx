import { FC } from "react";

import { PlusCircle } from "phosphor-react";
import styles from "./input.module.css";

export const Input: FC = () => {
  return (
    <div className={styles['input-wrapper']}>
      <input
        className=""
        type="text"
        placeholder="Adicione uma nova tarefa"
        name="inputToDo"
      />
      <button>
        Criar &nbsp;<PlusCircle size="1rem" />
      </button>
    </div>
  );
};
