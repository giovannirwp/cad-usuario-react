import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import './header.css';
import Logo  from './user.png';

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1><img src={Logo} alt='Logo' width='80' /></h1>
      </header>
    )
  }
}
