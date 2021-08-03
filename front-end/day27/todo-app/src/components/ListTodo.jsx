import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../actions";
import { Button, Container, Row, Col } from "react-bootstrap";
const ListTodo = () => {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  return (
    todos &&
    todos.map((todo) => {
      return (
        <Container className="todo" key={todo.id}>
          <Row className="todo-title">
            <Col
              sm="8"
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.title}
            </Col>
            <Col sm="3">
              <Button
                size="sm"
                variant={todo.completed ? "outline-primary" : "primary"}
                onClick={() => dispatch(toggleTodo(todo.id))}
              >
                {todo.completed ? "mark-incomplete" : "mark-complete"}
              </Button>
            </Col>
            <Col sm="1">
              <Button
                size="sm"
                variant="outline-secondary"
                className="del-todo"
                onClick={() => dispatch(deleteTodo(todo.id))}
              >
                delete
              </Button>
            </Col>
          </Row>
        </Container>
      );
    })
  );
};

export default ListTodo;
