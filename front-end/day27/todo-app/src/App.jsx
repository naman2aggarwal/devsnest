import "./App.css";
import AddTodo from "./components/AddTodo";
import ListTodo from "./components/ListTodo";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container>
      <AddTodo />
      <ListTodo />
    </Container>
  );
}

export default App;
