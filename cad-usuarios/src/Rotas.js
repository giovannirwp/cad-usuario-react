import React from "react";
import { Route, Switch } from 'react-router';
import Cadastro from "./Cadastro/Cadastro";
import Home from "./Pages/Home";
import ListagemUsers from "./Pages/ListagemUsers";

export default function Rotas() {
  return (
    <Switch>
      <Route exact path='/cadastro' component={Cadastro} />
      <Route exact path='/listagem-users' component={ListagemUsers} />
      <Route exact path='/cadastro-users' component={Cadastro} />
      <Route exact path='/' component={Home} />
    </Switch>
  );
}