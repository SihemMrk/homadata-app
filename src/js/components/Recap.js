import React from "react";
import { Link } from "react-router-dom";
// import Type from "./Type";

class Recap extends React.Component {
  constructor(props) {
    super(props);
    this.state = { datas: {} };
  }
  componentDidMount() {
    const { recap } = this.props.location.state;
    this.setState({ datas: recap });
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <div>
          <h3>{this.state.datas.value}</h3>
        </div>
        <div>
          <p>De</p>
          <h3>{this.state.datas.surface}</h3>
          <p>m2</p>
        </div>
        <div>
          <p>Avec</p>
          <h3>{this.state.datas.piece}</h3>
          <p>pièce(s)</p>
        </div>
        <div>
          <h3>{this.state.datas.etat}</h3>
        </div>
        <div>
          <p>Coûte</p>
          <h3>3€</h3>
          <p>/m2</p>
        </div>
        <div>
          <Link className="links" to="/conclusion">
            Estimer maintenant
          </Link>
        </div>
      </div>
    );
  }
}

export default Recap;
