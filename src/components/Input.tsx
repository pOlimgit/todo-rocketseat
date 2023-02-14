import { FC } from "react";

import { PlusCircle } from "phosphor-react";
import styles from "./input.module.css";

export function Input() {
  return (
    <div className={styles.inputWrapper}>
      <input
        className=""
        type="text"
        placeholder="Adicione uma nova tarefa"
        name="inputToDo"
      />
      <button>
        Criar &nbsp;
        <PlusCircle size="1rem" />
      </button>
    </div>
  );
};
