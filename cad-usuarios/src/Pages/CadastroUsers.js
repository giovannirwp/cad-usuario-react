import React, { Component } from "react";
import "./css/cadastro.css";

export default class CadastroUsers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usuario: {
        nome: "",
        sobrenome: "",
        email: "",
      },
    };

    this.onchangerHander = this.onchangerHander.bind(this);
  }

  onchangerHander(event) {
    const { name, value } = event.target;
  
    this.setState({
      usuario: { ...this.state.usuario, [name]: value },
    });
  }

  render() {
    return (
      <div className="container-cadUser">
        <h1 className="cadastro-usuario">Cadastro de usuários</h1>
        <form>
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
              <label>Email</label>
              <input
                type="text"
                name="email"
                value={this.state.usuario.email}
                onChange={this.onchangerHander}
              />
            </div>
          </div>
          <button>Adicionar</button>
        </form>
      </div>
    );
  }
}
