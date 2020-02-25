import React, { Component } from "react";
import axios from "axios";

class Type extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    alert("type:" + this.state.value);
    axios
      .post("http://localhost:8080/type", this.state.value)
      .then(() => console.log("Type ok"))
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="appart">Appart</option>
              <option value="maison">Maison</option>
            </select>
          </label>
          <button type="submit">Suivant</button>
        </form>
      </div>
    );
  }
}

export default Type;
