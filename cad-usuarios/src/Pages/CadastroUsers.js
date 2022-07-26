import React, { Component } from "react";
import "./css/cadastro.css";

const INITIAL_STATE = {
  usuario: { first_name: '', last_name: '', email: '', avatar: '' }
}

export default class CadastroUsers extends Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;

    this.onchangerHander = this.onchangerHander.bind(this);
    this.onSubmitHander = this.onSubmitHander.bind(this);
  }

  onchangerHander(event) {
    const { name, value } = event.target;
    this.setState({
      usuario: { ...this.state.usuario, [name]: value },
    });
  }

  onSubmitHander(event) {
    event.preventDefault();

    const usuario = this.state.usuario;

    fetch("http://localhost:3004/usuarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuario),
    })
    .then((resposta) => resposta.json())
    .then((dados) => {

      this.setState(INITIAL_STATE);
      this.props.adicionarUsuario(dados);
    });
  }

  render() {
    return (
      <div className="container-cadUser">
        <h1 className="cadastro-usuario">Cadastro de usuários</h1>
        <form onSubmit={this.onSubmitHander}>
          <div className="row">
            <div className="col">
              <label htmlFor="first_name">Nome</label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                value={this.state.usuario.first_name}
                onChange={this.onchangerHander}
              />
            </div>
            <div className="col">
              <label htmlFor="last_name">Sobre Nome</label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                value={this.state.usuario.last_name}
                onChange={this.onchangerHander}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="avatar">Avatar</label>
              <input
                type="text"
                id="avatar"
                name="avatar"
                value={this.state.usuario.avatar}
                onChange={this.onchangerHander}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                value={this.state.usuario.email}
                onChange={this.onchangerHander}
              />
            </div>
          </div>
            <button type="submit">Adicionar</button>
        </form>
      </div>
    );
  }
}
