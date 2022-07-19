import React, { Component } from 'react'
import Users from '../components/Users/Users'

export default class ListagemUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuarios: [],
    };
  }

  getFetAll() {
    fetch('http://localhost:3000/usuarios')
    .then(response => response.json())
    .then(dados => {
      // console.log(dados)

      const usersAll = dados.map(usuario => {
        return {
          id: usuario.id,
          nome: usuario.first_name,
          sobrenome: usuario.last_name,
          email: usuario.email
        }
      })
      // console.log(usersAll)
      this.setState({ usuarios : usersAll})
    })
  }

  componentDidMount() {
   this.getFetAll()
  }
  render() {
    return (
      <div>
        <h1>Listagem usuarios</h1>
        {this.state.usuarios.map((usuario) => (
          <Users key={usuario.id} usuario={usuario} />
        ))}
      </div>
    )
  }
}
