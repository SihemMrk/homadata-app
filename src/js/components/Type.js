import React, { Component } from "react";
import axios from "axios";
import Recap from "./Recap";
import { Link } from "react-router-dom";

class Type extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      surface: 0,
      piece: 1,
      prix: 0,
      etat: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputTypeChange = this.handleInputTypeChange.bind(this);
    this.handleInputSurfaceChange = this.handleInputSurfaceChange.bind(this);
    this.handleInputPieceChange = this.handleInputPieceChange.bind(this);
    this.handleInputPrixChange = this.handleInputPrixChange.bind(this);

    this.toggleEtat = this.toggleEtat.bind(this);
  }

  handleInputTypeChange(event) {
    this.setState({ value: event.target.value });
  }

  handleInputSurfaceChange(event) {
    this.setState({
      surface: event.target.value
    });
  }

  handleInputPieceChange(event) {
    console.log("ici piece change");
    this.setState({
      piece: event.target.value
    });
  }

  handleInputPrixChange(event) {
    this.setState({
      prix: event.target.value
    });
  }

  handleSubmit(e) {
    const data = {
      value: this.state.value,
      surface: this.state.surface,
      piece: this.state.piece,
      prix: this.state.prix,
      etat: this.state.etat
    };
    e.preventDefault();
    axios
      .post("/type", {
        data: data
      })
      .then(response => console.log("response", response))
      .catch(err => {
        console.error(err);
      });
  }

  toggleEtat(e) {
    this.setState({ etat: e.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <h3>Type</h3>
            <input
              type="radio"
              value="appart"
              checked={this.state.value === "appart"}
              onChange={this.handleInputTypeChange}
            />
            Appartement
            <input
              type="radio"
              value="maison"
              checked={this.state.value === "maison"}
              onChange={this.handleInputTypeChange}
            />
            Maison
          </div>
          <div>
            <label>
              <h3>Surface</h3>
              <input
                type="number"
                value={this.state.surface}
                onChange={this.handleInputSurfaceChange}
              />
            </label>
          </div>
          <div>
            <label>
              <h3>Piece</h3>
              <input
                type="number"
                value={this.state.piece}
                onChange={this.handleInputPieceChange}
              ></input>
            </label>
          </div>
          <div>
            <label>
              <h3>Prix</h3>
              <input
                type="number"
                value={this.state.prix}
                onChange={this.handleInputPrixChange}
              ></input>
            </label>
          </div>

          <div>
            <input
              type="radio"
              value="bien"
              checked={this.state.etat === "bien"}
              onChange={this.toggleEtat}
            />
            Bien
            <input
              type="radio"
              value="moyen"
              checked={this.state.etat === "moyen"}
              onChange={this.toggleEtat}
            />
            Moyen
            <input
              type="radio"
              value="mauvais"
              checked={this.state.etat === "mauvais"}
              onChange={this.toggleEtat}
            />
            Mauvais
          </div>

          <div>
            <button type="submit">Estimer</button>
          </div>
        </form>
        <Link className="links" to="/recap">
          Recap
        </Link>
      </div>
    );
  }
}

export default Type;
