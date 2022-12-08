import React, { Component } from "react";

class UserInput extends Component {
  state = { name: "" };

  // updateName event handler
  updateName = (e) => {
    this.setState({ name: e.target.value });
  };

  // handle submit method
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.addName(this.state.name);

    setTimeout(() => {
      this.setState({ name: "" });
    }, 1000);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.updateName}
          value={this.state.name}
          type="text"
          placeholder="Add a new name here..."
        />
        <input type="submit" value="Create Name Tage" />
      </form>
    );
  }
}

export default UserInput;
