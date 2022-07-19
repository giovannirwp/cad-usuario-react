import React, { Component } from 'react'

export default class Users extends Component {
  constructor(props) {
    super(props);
    console.log(props.usuario);
  }
  render() {
    return (
      <div className='users'>
        <ul>
          <li>{this.props.usuario.id}</li>
          <li>{this.props.usuario.nome}</li>
          <li>{this.props.usuario.sobrenome}</li>
          <li>{this.props.usuario.email}</li>
        </ul>
      </div>
    )
  }
}
