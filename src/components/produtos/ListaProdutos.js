import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Estilo from "../estilo";
import produtos from "./Produtos";

export default (props) => {
  function lista() {
    return produtos.map((p) => {
      return (
        <Text key={p.id}>
          {p.id}) {p.nome} tem preço R$ {p.preco}
        </Text>
      );
    });
  }
  return (
    <>
      <Text style={Estilo.txtG}>Lista de produtos:</Text>
      {lista()}
    </>
  );
};
