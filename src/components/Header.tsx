import styles from "./Header.module.css";
import todologo from "../assets/todologo.png";

export function Header() {
  return (
    <div>
      <header className={styles.header}>
        <img src={todologo} alt="logo-Todo" />
      </header>
    </div>
  );
}
