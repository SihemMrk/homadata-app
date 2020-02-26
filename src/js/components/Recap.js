import React from "react";
// import Type from "./Type";

class Recap extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>{this.props.value}</h1>;
  }
}

export default Recap;
