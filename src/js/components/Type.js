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
      etat: "",
      totalPrice: 0
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
      .then(response => {
        console.log(response.data);
        this.setState({ totalPrice: response.data });
      })
      .catch(err => {
        console.error(err);
      });
    console.log(this.state);
  }

  toggleEtat(e) {
    this.setState({ etat: e.target.value });
  }

  render() {
    return (
      <div id="form">
        <form onSubmit={this.handleSubmit}>
          <div className="question">
            <h3>Quel type de bien souhaitez vous estimer ?</h3>
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
          <div className="question">
            <label>
              <h3>Quel est la surface de votre bien ?</h3>
              <input
                placeholder="m2"
                type="number"
                value={this.state.surface}
                onChange={this.handleInputSurfaceChange}
                required
              />
            </label>
          </div>
          <div className="question">
            <label>
              <h3>Combien y a-t-il de pièces ?</h3>
              <input
                type="number"
                value={this.state.piece}
                onChange={this.handleInputPieceChange}
                required
              ></input>
            </label>
          </div>
          <div className="question">
            <label>
              <h3>Quel est le prix au m2 ?</h3>
              <input
                placeholder="€"
                type="number"
                value={this.state.prix}
                onChange={this.handleInputPrixChange}
                required
              ></input>
            </label>
          </div>

          <div className="question">
            <h3>Quel est l'état général du bien?</h3>
            <input
              type="radio"
              value="bien"
              checked={this.state.etat === "bien"}
              onChange={this.toggleEtat}
            />
            Refait à neuf
            <input
              type="radio"
              value="moyen"
              checked={this.state.etat === "moyen"}
              onChange={this.toggleEtat}
            />
            Bon état
            <input
              type="radio"
              value="mauvais"
              checked={this.state.etat === "mauvais"}
              onChange={this.toggleEtat}
            />
            Nécessite des travaux
          </div>

          <div>
            <button className="buttonEstimer" type="submit">
              <Link
                className="linkEstimer"
                to={{ pathname: "/recap", state: { recap: this.state } }}
              >
                Estimer
              </Link>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Type;
