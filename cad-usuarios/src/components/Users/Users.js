import React, { Component } from 'react'

export default class Users extends Component {
  constructor(props) {
    super(props);
    console.log('gigi')
    console.log(props.usuario);
  }
  render() {
    return (
      <div className='users'>
        <ul>
          <li><img src={this.props.usuario.imagem} alt='Avatar' /></li>
          <li><strong>Nome: </strong> {this.props.usuario.nome}</li>
          <li><strong>Sobre Nome: </strong>{this.props.usuario.sobrenome}</li>
          <li><strong>Email: </strong>{this.props.usuario.email}</li>
        </ul>
        <button className='remover' onClick={this.props.removerUsuario}>X</button>
      </div>
    )
  }
}
