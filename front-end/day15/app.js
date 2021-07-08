"use strict";

const e = React.createElement;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show_msg: "Hi, Welcome to React." };
  }

  render() {
    return e("h1", {}, this.state.show_msg);
  }
}

const domContainer = document.querySelector("#root");
ReactDOM.render(e(App), domContainer);
