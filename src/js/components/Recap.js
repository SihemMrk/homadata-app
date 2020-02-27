import React from "react";

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
          <h3>{this.state.datas.prix}</h3>
          <p>/m2</p>
        </div>
        <div>total : {this.state.datas.totalPrice}</div>
      </div>
    );
  }
}

export default Recap;
