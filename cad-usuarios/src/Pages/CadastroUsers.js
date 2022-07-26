import React, { Component } from "react";
import "./css/cadastro.css";

const INITIAL_STATE = {
  usuario: { nome: '', sobrenome: '', email: '', imagem: '' }
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
        console.log(dados);
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
              <label>Nome</label>
              <input
                type="text"
                name="nome"
                value={this.state.usuario.nome}
                onChange={this.onchangerHander}
              />
            </div>
            <div className="col">
              <label>Sobre Nome</label>
              <input
                type="text"
                name="sobrenome"
                value={this.state.usuario.sobrenome}
                onChange={this.onchangerHander}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label>Url do avatar</label>
              <input
                type="text"
                name="imagem"
                value={this.state.usuario.imagem}
                onChange={this.onchangerHander}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label>Email</label>
              <input
                type="text"
                name="email"
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
