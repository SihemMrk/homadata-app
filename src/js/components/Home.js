import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div>
        <h1>Estimation immobilière gratuite</h1>
        <h2>Estimer un bien immobilier en 1 minute</h2>
      </div>
      <div>
        <Link className="links" to="/Type">
          Estimation
        </Link>
      </div>
    </div>
  );
}

export default Home;
