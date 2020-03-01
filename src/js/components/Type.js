import React, { Component } from "react";
import axios from "axios";
import Recap from "./Recap";
import { Link } from "react-router-dom";
import Redirect from "react-router-dom/es/Redirect";

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
    if (
      this.state.value &&
      this.state.surface &&
      this.state.piece &&
      this.state.prix &&
      this.state.etat
    ) {
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
    } else {
      alert("Veuillez remplir tous les champs");
    }
  }

  toggleEtat(e) {
    this.setState({ etat: e.target.value });
  }

  render() {
    if (this.state.totalPrice) {
      return (
        <Redirect
          to={{
            pathname: "/recap",
            state: { datas: this.state }
          }}
        />
      );
    }
    return (
      <div id="form">
        <form onSubmit={this.handleSubmit}>
          <div className="question">
            <h3>Quel type de bien souhaitez vous estimer ?</h3>
            <div className="divTypes">
              <label for="type_appart" className="oneType">
                <input
                  id="type_appart"
                  type="radio"
                  value="Appartement"
                  checked={this.state.value === "Appartement"}
                  onChange={this.handleInputTypeChange}
                />
                Appartement
              </label>
              <label for="Maison" className="oneType">
                <input
                  id="type_appart"
                  type="radio"
                  value="Maison"
                  checked={this.state.value === "Maison"}
                  onChange={this.handleInputTypeChange}
                />
                Maison
              </label>
            </div>
          </div>
          <div className="question">
            <h3>Quel est la surface de votre bien ?</h3>
            <p>
              <input
                placeholder="m2"
                type="number"
                min="0"
                value={this.state.surface}
                onChange={this.handleInputSurfaceChange}
                required
              />
            </p>
          </div>
          <div className="question">
            <h3>Combien y a-t-il de pièces ?</h3>
            <p>
              <input
                type="number"
                min="0"
                value={this.state.piece}
                onChange={this.handleInputPieceChange}
                required
              />
            </p>
          </div>
          <div className="question">
            <h3>Quel est le prix au m² ?</h3>
            <p>
              <input
                placeholder="€"
                min="0"
                type="number"
                value={this.state.prix}
                onChange={this.handleInputPrixChange}
                required
              />
            </p>
          </div>

          <div className="question">
            <h3>Quel est l'état général du bien?</h3>
            <label for="etat_bien">
              <input
                id="etat_bien"
                type="radio"
                value="Refait à neuf"
                checked={this.state.etat === "Refait à neuf"}
                onChange={this.toggleEtat}
              />
              Refait à neuf
            </label>

            <label for="etat_moyen">
              <input
                id="etat_moyen"
                type="radio"
                value="Bon état"
                checked={this.state.etat === "Bon état"}
                onChange={this.toggleEtat}
              />
              Bon état
            </label>

            <label for="etat_mauvais">
              <input
                id="etat_mauvais"
                type="radio"
                value="Nécessite des travaux"
                checked={this.state.etat === "Nécessite des travaux"}
                onChange={this.toggleEtat}
              />
              Nécessite des travaux
            </label>
          </div>

          <div>
            <button className="buttonEstimer" type="submit">
              Estimer
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Type;
