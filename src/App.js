import React from "react";
import "./App.css";
import Counter from "./components/Counter";

class App extends React.Component {
  state = {
    isVisible: false,
  };

  toggleVisibility = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  render() {
    return (
      <div className="App">
        <h1>Workshop React State</h1>
        <button onClick={this.toggleVisibility} className="visibility-btn">
          {this.state.isVisible ? "Hide Counter" : "Show Counter"}
        </button>
        {this.state.isVisible && <Counter />}
      </div>
    );
  }
}

export default App;
