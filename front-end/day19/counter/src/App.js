import CounterButton from "./components/CounterButton";

function App() {
  const info =
    "There are 4 counter component instances that each manage their own state.";

  return (
    <div className="App">
      <p>{info}</p>
      {[1, 2, 3, 4].map((el) => (
        <CounterButton key={el} />
      ))}
    </div>
  );
}

export default App;
