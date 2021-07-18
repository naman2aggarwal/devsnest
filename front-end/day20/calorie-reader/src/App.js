import "./App.css";
import CardContainer from "./components/CardContainer";

function App() {
  const appTitle = "Calorie Read Only";
  return (
    <div className="App">
      <h1>{appTitle}</h1>
      <CardContainer />
    </div>
  );
}

export default App;
