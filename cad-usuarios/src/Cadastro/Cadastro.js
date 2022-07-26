import React, { Component } from 'react'
import CadastroUsers from '../Pages/CadastroUsers'

export default class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuarios: [],
    };
    this.adicionarUsuario = this.adicionarUsuario.bind(this);
  }

  adicionarUsuario(usuario) {
    const usuarios = [...this.state.usuarios, usuario];
    this.setState({ usuarios: usuarios });
  }

  render() {
    return (
      <div>
        <CadastroUsers adicionarUsuario={this.adicionarUsuario} />
      </div>
    )
  }
}
