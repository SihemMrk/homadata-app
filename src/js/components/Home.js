import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div id="home">
      <div className="home">
        <h1>Estimation immobilière gratuite</h1>
        <h2>Estimer un bien immobilier en 1 minute</h2>
      </div>
      <div>
        <button className="buttonHome">
          <Link className="linkHome" to="/Type">
            Estimation
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Home;
