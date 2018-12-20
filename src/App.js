import React, { Component } from "react";
import List from "./components/List";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      items: []
    };
  }

  onChange = event => {
    this.setState({ term: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({
      term: "",
      items: [...this.state.items, this.state.term]
    });
  };

  render() {
    return (
      <div>
        <form id="myDIV" className="header" onSubmit={this.onSubmit}>
          <h1>My Todo List</h1>
          <input value={this.state.term} onChange={this.onChange} />
          <span className="addBtn">Submit</span>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
}

export default App;
