import React, { Component } from "react";
import "./css/cadastro.css";

export default class CadastroUsers extends Component {
  render() {
    return (
      <div className="container-cadUser">
        <h1 className="cadastro-usuario">Cadastro de usuários</h1>
        <form>
          <div className="row">
            <div className="col">
              <label>Nome</label>
              <input type="text" name="nome" value="nome" />
            </div>
            <div className="col">
              <label>Sobre Nome</label>
              <input type="text" name="sobrenome" value="sobrenome" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label>Email</label>
              <input type="text" name="email" value="email" />
            </div>
          </div>
          <button>Adicionar</button>
        </form>
      </div>
    );
  }
}
