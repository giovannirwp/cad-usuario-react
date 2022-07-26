import React, { Component } from "react";
import Users from "../components/Users/Users";
import "./css/listagem.css";

export default class ListagemUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuarios: [],
    };
  }

  removerUsuario(usuario) {
    if (
      window.confirm(
        `Tem certeza que deseja remover ${usuario.nome} ${usuario.sobrenome}`
      )
    ) {
      fetch(`http://localhost:3004/usuarios/${usuario.id}`, {
        method: 'DELETE'
      })
      .then(response => {
        console.log(response);
        if (response.ok) {
          let usuarioState = this.state.usuarios;
          usuarioState = usuarioState.filter((x) => x.id !== usuario.id);
          this.setState({ usuarios: usuarioState })
        }
      })
    }
  }

  getFetAll() {
    fetch("http://localhost:3004/usuarios")
      .then((response) => response.json())
      .then((dados) => {

        const usersAll = dados.map((usuario) => {
          return {
            id: usuario.id,
            nome: usuario.first_name,
            sobrenome: usuario.last_name,
            email: usuario.email,
            imagem: usuario.avatar,
          };
        });
        this.setState({ usuarios: usersAll });
      });
  }

  componentDidMount() {
    this.getFetAll();
  }
  render() {
    return (
      <div>
        <h1 className="title-listagem">Listagem usuarios</h1>
        <div className="card-listagem">
          {this.state.usuarios.map((usuario) => (
            <Users
              key={usuario.id}
              usuario={usuario}
              removerUsuario={this.removerUsuario.bind(this, usuario)}
            />
          ))}
        </div>
      </div>
    );
  }
}
