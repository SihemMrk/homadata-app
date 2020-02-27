import React from "react";
import axios from "axios";

class Conclusion extends React.Component {
  constructor() {
    super();
    this.state = {
      price: 0
    };
  }
  componentDidMount() {
    axios.get("/price").then(res => {
      console.log(res);
      const price = res.data;
      this.setState({ price: price });
    });
  }
  render() {
    return (
      <div>
        <h1>Test {this.state.price}</h1>
      </div>
    );
  }
}

export default Conclusion;
