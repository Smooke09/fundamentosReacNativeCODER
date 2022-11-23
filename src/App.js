import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";

import ListaProdutos from "./components/produtos/ListaProdutos";
import ListaProdutosV2 from "./components/produtos/ListaProdutosV2";
// import UsuarioLogado from "./components/UsuarioLogado";
// import Familia from "./components/relacao/Familia";
// import Membro from "./components/relacao/Membro";
// import ParImpar from "./components/ParImpar";
// import Diferenciar from "./components/Diferenciar";
// import ContadorV2 from "./components/contador/ContadorV2";
// import Contador from "./components/Contador";
// import Pai from "./components/direta/Pai";
// import PaiIndireta from "./components/indireta/Pai";
// import Botao from './components/Botao'
// import Titulo from './components/Titulo'
// import Aleatorio from './components/Aleatorio'
// import MinMax from './components/MinMax'
// import CompPadrao, { Comp1, Comp2 } from './components/Multi'
// import Primeiro from './components/Primeiro'

export default () => (
  <SafeAreaView style={style.App}>
    <ListaProdutosV2 />
    {/*
    <ListaProdutos />
    <UsuarioLogado usuario={{ nome: "Pedro", email: "pedro@teste.com" }} />
    <UsuarioLogado usuario={{ nome: "Ana" }} />
    <Familia>
      <Membro nome="Pedro" sobrenome="Venchiarutti" />
      <Membro nome="Lucas" sobrenome="Venchiarutti" />
      <Membro nome="Vital" sobrenome="Venchiarutti" />
    </Familia>
    <ParImpar num={4} />
    <Diferenciar />
    <ContadorV2 />
    <PaiIndireta />
    <Pai />
    <Contador inicial={100} passo={13} />
    <Contador />
        <Botao />
        <Titulo principal="Cadastro Produto"
            secundario="Tela de Cadastro do Produto" />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <MinMax min={3} max={20} />
        <MinMax min={1} max={94} />
        <CompPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro /> */}
  </SafeAreaView>
);

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});
