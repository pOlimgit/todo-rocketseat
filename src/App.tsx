import { Header } from "./components/Header";
import { Input } from "./components/input";
import { TaskBoard } from "./components/TaskBoard";
import "./main.css";

function App() {
  return (
    <>
      <Header />
      <Input />
      <TaskBoard />
    </>
  );
}

export default App;
