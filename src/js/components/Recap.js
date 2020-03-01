import React from "react";
import { Link } from "react-router-dom";

class Recap extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.location.state);
  }

  render() {
    var prix = this.props.location.state.datas.totalPrice;
    return (
      <div id="conclusion">
        <div>
          <h2>Votre bien immobilier</h2>
        </div>
        <div id="recap">
          <div id="typebien">
            <p>{this.props.location.state.datas.value}</p>
          </div>
          <div id="surface">
            <p>De</p>
            <p className="valuerecap">
              {this.props.location.state.datas.surface}
            </p>
            <p>m2</p>
          </div>
          <div id="pieces">
            <p>Avec</p>
            <p className="valuerecap">
              {this.props.location.state.datas.piece}
            </p>
            <p>pièce(s)</p>
          </div>
          <div id="etat">
            <p>{this.props.location.state.datas.etat}</p>
          </div>
          <div id="prixm2">
            <p>Coûte</p>
            <p className="valuerecap">{this.props.location.state.datas.prix}</p>
            <p>/m²</p>
          </div>
        </div>
        <div id="totalEstimation">
          <h3>Estimer à : </h3>
          <p> {prix.toFixed(2)} €</p>
        </div>
        <div id="nouvelleEstimation">
          <button>
            <Link className="linkHome" to="/Type">
              Nouvelle estimation
            </Link>
          </button>
        </div>
      </div>
    );
  }
}

export default Recap;
