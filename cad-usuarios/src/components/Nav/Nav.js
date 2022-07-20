import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/listagem-users">Listagem de usuarios</Link>
          </li>
          <li>
            <Link to="/cadastro-users">Cadastro de usuarios</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
