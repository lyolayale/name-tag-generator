import React, { Component } from "react";
import NameTagList from "./NameTagList.js";
import UserInput from "./UserInput.js";

class App extends Component {
  state = {
    names: ["Erin", "Ann", "Nichole", "Sharon", "Maryn"]
  };
  removeName = (clickedIndex) => {
    const filterCallback = (_, index) => index !== clickedIndex;
    const newNames = this.state.names.filter(filterCallback);
    this.setState({ names: newNames });
  };

  addName = (item) => {
    const newNameList = this.state.names.splice(0);
    newNameList.push(item);

    this.setState({ names: newNameList });
  };

  componentDidMount() {
    const savedNamesString = localStorage.getItem("savedNames");
    if (savedNamesString) {
      const savedNames = JSON.parse(savedNamesString);
      this.setState({ names: savedNames });
    }
  }

  componentDidUpdate() {
    const savedNamesString = JSON.stringify(this.state.names);
    localStorage.setItem("savedNames", savedNamesString);
  }

  render() {
    return (
      <div className="App">
        <h1>Name Tag Generator</h1>
        <NameTagList names={this.state.names} removeName={this.removeName} />
        <UserInput addName={this.addName} />
      </div>
    );
  }
}

export default App;
