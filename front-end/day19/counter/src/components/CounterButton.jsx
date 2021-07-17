import React from "react";
import "./CounterButton.css";

class CounterButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <>
        <button
          onClick={() => {
            let newCount = this.state.count + 1;
            this.setState({ count: newCount });
          }}
        >
          {this.state.count}
        </button>
      </>
    );
  }
}

export default CounterButton;
